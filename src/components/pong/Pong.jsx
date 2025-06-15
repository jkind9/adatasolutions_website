import React from "react";
import Stopper from "./Stopper";
import '../../styles/Pong.css';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.delay = 10;
    this.player1x = 29;
    this.player2x = 490;
    this.pHeight = 80;
    this.gateHeight = 160;
    this.gateY = 160;
    this.p1GateX = 3;
    this.p2GateX = 490;
    this.playerMaxY = 400;
    this.playerMinY = 100;
    this.ballRadius = 10;
    this.bottomBoundary = 400;
    this.topBoundary = 95;
    this.leftBoundary = 5;
    this.rightBoundary = 500;
    this.defaultBallPosition = {
      x: 249,
      y: 225
    };

    this.state = {
      result: [0, 0],
      p1: 200,
      p2: 200,
      live: true,
      ballPosition: this.defaultBallPosition,
      move: {
        stepX: -1,
        stepY: 1
      }
    };
  }

  randomInitialMove() {
    const moves = [
      { stepX: 1, stepY: 1 },
      { stepX: 1, stepY: 2 },
      { stepX: 2, stepY: 1 },
      { stepX: -1, stepY: -1 },
      { stepX: -1, stepY: 1 }
    ];
    let initialMove = moves[Math.floor(Math.random() * moves.length)];
    console.log(initialMove);
    this.setState({ move: initialMove });
  }

  checkGoals() {
    if (this.state.ballPosition.x - 10 <= this.p1GateX + this.ballRadius * 2) {
      if (
        this.state.ballPosition.y <= this.gateY + this.gateHeight &&
        this.state.ballPosition.y >= this.gateY
      ) {
        this.setState({
          result: [this.state.result[0], this.state.result[1] + 1]
        });
        this.resetBall();
        this.randomInitialMove();
      }
    }
    if (this.state.ballPosition.x + 10 >= this.p2GateX + this.ballRadius) {
      if (
        this.state.ballPosition.y <= this.gateY + this.gateHeight &&
        this.state.ballPosition.y >= this.gateY
      ) {
        this.setState({
          result: [this.state.result[0] + 1, this.state.result[1]]
        });
        this.resetBall();
        this.randomInitialMove();
      }
    }
  }

  checkPlayers() {
    if (this.state.ballPosition.x - 5 <= this.player1x) {
      if (
        this.state.ballPosition.y <= this.state.p1 + this.pHeight &&
        this.state.ballPosition.y >= this.state.p1
      ) {
        this.setState({
          move: {
            stepX: -1 * this.state.move.stepX,
            stepY: 1 * this.state.move.stepY
          }
        });
      }
    }
    if (this.state.ballPosition.x + 10 >= this.player2x) {
      if (
        this.state.ballPosition.y <= this.state.p2 + this.pHeight &&
        this.state.ballPosition.y >= this.state.p2
      ) {
        this.setState({
          move: {
            stepX: -1 * this.state.move.stepX,
            stepY: 1 * this.state.move.stepY
          }
        });
      }
    }
  }

  checkBallBoundaries() {
    // dolna i górna ściana
    if (
      this.state.ballPosition.y + 20 >= this.bottomBoundary ||
      this.state.ballPosition.y - 10 <= this.topBoundary
    ) {
      this.setState({
        move: {
          stepX: this.state.move.stepX,
          stepY: -1 * this.state.move.stepY
        }
      });
    }

    // lewa i prawa ściana
    if (
      this.state.ballPosition.x - 10 <= this.leftBoundary ||
      this.state.ballPosition.x + 10 >= this.rightBoundary
    ) {
      this.setState({
        move: {
          stepX: -1 * this.state.move.stepX,
          stepY: this.state.move.stepY
        }
      });
    }
  }

  check() {
    this.checkPlayers();
    this.checkGoals();
    this.checkBallBoundaries();
  }

  tick() {
    if (this.state.live === true) {
      this.setState({
        ballPosition: {
          x: this.state.ballPosition.x + this.state.move.stepX,
          y: this.state.ballPosition.y + this.state.move.stepY
        }
      });
      this.check();
    }
  }

  componentDidMount() {
    window.addEventListener("keydown", this.handleKeyPress);
    window.addEventListener("keydown", this.handleKeyPress2);
    this.timer = setInterval(() => this.tick(), this.delay);
  }

  componentWillUnmount() {
    window.removeEventListener("keydown", this.handleKeyPress);
    window.removeEventListener("keydown", this.handleKeyPress2);
  }

  checkPlayer1Boundaries() {
    if (this.state.p1 + this.pHeight >= this.playerMaxY) {
      return false;
    }
    if (this.state.p1 <= this.playerMinY) {
      return false;
    }
    return true;
  }

  checkPlayer2Boundaries() {
    if (this.state.p2 + this.pHeight >= this.playerMaxY) {
      return false;
    }
    if (this.state.p2 <= this.playerMinY) {
      return false;
    }
    return true;
  }

  resetPlayer(player) {
    if (player === 1) {
      this.setState({ p1: 200 });
    } else {
      this.setState({ p2: 200 });
    }
  }

  handleKeyPress = (event) => {
    let step = 7;
    if (event.key === "q") {
      this.setState({ p1: this.state.p1 - step });
    } else if (event.key === "a") {
      this.setState({ p1: this.state.p1 + step });
    }
    if (this.checkPlayer1Boundaries() === false) {
      this.resetPlayer(1);
    }
  };

  handleKeyPress2 = (event) => {
    let step = 7;
    if (event.key === "o") {
      this.setState({ p2: this.state.p2 - step });
    } else if (event.key === "l") {
      this.setState({ p2: this.state.p2 + step });
    }
    if (this.checkPlayer2Boundaries() === false) {
      this.resetPlayer(2);
    }
  };

  resetBall() {
    this.setState({
      ballPosition: this.defaultBallPosition
    });
  }

  restart() {
    this.stopper.reset();
    this.resetBall();
    this.randomInitialMove();
  }

  pause() {
    this.stopper.pause();
    if (this.state.live === true) {
      this.setState({ live: false });
    } else {
      this.setState({ live: true });
    }
  }

  printResult() {
    return "" + this.state.result[0] + ":" + this.state.result[1];
  }

  render() {
    return (
      <div className="App">
        <h2>Pong</h2>
        <Stopper
          ref={(instance) => {
            this.stopper = instance;
          }}
        />

        <div className="container">
          <div className="gameField">
            <div
              className="ball"
              style={{
                top: this.state.ballPosition.y,
                left: this.state.ballPosition.x
              }}
            />
            <div className="midLine" />
            <div className="player1" style={{ top: this.state.p1 }} />
            <div className="player2" style={{ top: this.state.p2 }} />
            <div className="gate1" />
            <div className="gate2" />
          </div>
          <div className="buttonsBar">
            <button
              onClick={() => {
                this.pause();
              }}
              id="leftBtn"
            >
              Pause
            </button>
            <div className="result">{this.printResult()}</div>
            <button
              onClick={() => {
                this.restart();
              }}
              id="rightBtn"
            >
              Restart
            </button>
            <p>Gracz1: Q, A</p>
            <p>Gracz2: O, L</p>
          </div>
        </div>
      </div>
    );
  }
}
