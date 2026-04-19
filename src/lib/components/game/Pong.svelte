<script lang="ts">
  import { onMount, onDestroy } from 'svelte';

  // Game constants
  const DELAY = 10;
  const PLAYER1_X = 29;
  const PLAYER2_X = 490;
  const PADDLE_HEIGHT = 80;
  const GATE_HEIGHT = 160;
  const GATE_Y = 160;
  const P1_GATE_X = 3;
  const P2_GATE_X = 490;
  const PLAYER_MAX_Y = 400;
  const PLAYER_MIN_Y = 100;
  const BALL_RADIUS = 10;
  const BOTTOM_BOUNDARY = 400;
  const TOP_BOUNDARY = 95;
  const LEFT_BOUNDARY = 5;
  const RIGHT_BOUNDARY = 500;
  const DEFAULT_BALL_POSITION = { x: 249, y: 225 };

  // Game state
  let score = $state([0, 0]);
  let p1Y = $state(200);
  let p2Y = $state(200);
  let isLive = $state(true);
  let ballPosition = $state({ ...DEFAULT_BALL_POSITION });
  let move = $state({ stepX: -1, stepY: 1 });

  // Timer state
  let timer = $state(0);
  let isPaused = $state(false);

  let gameInterval: ReturnType<typeof setInterval>;
  let timerInterval: ReturnType<typeof setInterval>;

  function randomInitialMove() {
    const moves = [
      { stepX: 1, stepY: 1 },
      { stepX: 1, stepY: 2 },
      { stepX: 2, stepY: 1 },
      { stepX: -1, stepY: -1 },
      { stepX: -1, stepY: 1 }
    ];
    move = moves[Math.floor(Math.random() * moves.length)];
  }

  function checkGoals() {
    // Player 2 scores (ball goes into left gate)
    if (ballPosition.x - 10 <= P1_GATE_X + BALL_RADIUS * 2) {
      if (ballPosition.y <= GATE_Y + GATE_HEIGHT && ballPosition.y >= GATE_Y) {
        score = [score[0], score[1] + 1];
        resetBall();
        randomInitialMove();
      }
    }
    // Player 1 scores (ball goes into right gate)
    if (ballPosition.x + 10 >= P2_GATE_X + BALL_RADIUS) {
      if (ballPosition.y <= GATE_Y + GATE_HEIGHT && ballPosition.y >= GATE_Y) {
        score = [score[0] + 1, score[1]];
        resetBall();
        randomInitialMove();
      }
    }
  }

  function checkPlayers() {
    const ballLeft = ballPosition.x;
    const ballRight = ballPosition.x + BALL_RADIUS * 2;
    const ballCenterY = ballPosition.y + BALL_RADIUS;

    // Ball hits player 1 paddle (paddle right edge is at PLAYER1_X + 10)
    const p1PaddleRight = PLAYER1_X + 10;
    if (ballLeft <= p1PaddleRight && ballLeft >= PLAYER1_X - 5) {
      if (ballCenterY <= p1Y + PADDLE_HEIGHT && ballCenterY >= p1Y) {
        move = { stepX: Math.abs(move.stepX), stepY: move.stepY };
      }
    }

    // Ball hits player 2 paddle (paddle left edge is at PLAYER2_X)
    if (ballRight >= PLAYER2_X && ballRight <= PLAYER2_X + 15) {
      if (ballCenterY <= p2Y + PADDLE_HEIGHT && ballCenterY >= p2Y) {
        move = { stepX: -Math.abs(move.stepX), stepY: move.stepY };
      }
    }
  }

  function checkBallBoundaries() {
    // Top and bottom walls
    if (ballPosition.y + 20 >= BOTTOM_BOUNDARY || ballPosition.y - 10 <= TOP_BOUNDARY) {
      move = { stepX: move.stepX, stepY: -1 * move.stepY };
    }
    // Left and right walls
    if (ballPosition.x - 10 <= LEFT_BOUNDARY || ballPosition.x + 10 >= RIGHT_BOUNDARY) {
      move = { stepX: -1 * move.stepX, stepY: move.stepY };
    }
  }

  function check() {
    checkPlayers();
    checkGoals();
    checkBallBoundaries();
  }

  function tick() {
    if (isLive) {
      ballPosition = {
        x: ballPosition.x + move.stepX,
        y: ballPosition.y + move.stepY
      };
      check();
    }
  }

  function handleKeydown(event: KeyboardEvent) {
    const step = 7;

    // Player 1: Q (up), A (down)
    if (event.key === 'q' || event.key === 'Q') {
      p1Y = Math.max(PLAYER_MIN_Y, p1Y - step);
    } else if (event.key === 'a' || event.key === 'A') {
      p1Y = Math.min(PLAYER_MAX_Y - PADDLE_HEIGHT, p1Y + step);
    }

    // Player 2: O (up), L (down)
    if (event.key === 'o' || event.key === 'O') {
      p2Y = Math.max(PLAYER_MIN_Y, p2Y - step);
    } else if (event.key === 'l' || event.key === 'L') {
      p2Y = Math.min(PLAYER_MAX_Y - PADDLE_HEIGHT, p2Y + step);
    }
  }

  function resetBall() {
    ballPosition = { ...DEFAULT_BALL_POSITION };
  }

  function restart() {
    timer = 0;
    isPaused = false;
    isLive = true;
    resetBall();
    randomInitialMove();
  }

  function pause() {
    isPaused = !isPaused;
    isLive = !isLive;
  }

  function formatTimer(): string {
    if (timer < 60) {
      return `Time: ${timer}s`;
    }
    const minutes = Math.floor(timer / 60);
    const seconds = timer % 60;
    return `Time: ${minutes}m ${seconds}s`;
  }

  onMount(() => {
    gameInterval = setInterval(tick, DELAY);
    timerInterval = setInterval(() => {
      if (!isPaused) {
        timer++;
      }
    }, 1000);
  });

  onDestroy(() => {
    clearInterval(gameInterval);
    clearInterval(timerInterval);
  });
</script>

<svelte:window onkeydown={handleKeydown} />

<div class="pong-container">
  <h2 class="game-title">Pong</h2>
  <div class="timer">{formatTimer()}</div>

  <div class="game-wrapper">
    <div class="game-field">
      <div
        class="ball"
        style="top: {ballPosition.y}px; left: {ballPosition.x}px;"
      ></div>
      <div class="mid-line"></div>
      <div class="player player-1" style="top: {p1Y}px;"></div>
      <div class="player player-2" style="top: {p2Y}px;"></div>
      <div class="gate gate-1"></div>
      <div class="gate gate-2"></div>
    </div>

    <div class="controls">
      <button class="control-btn" onclick={pause}>
        {isPaused ? 'Resume' : 'Pause'}
      </button>
      <div class="score">{score[0]} : {score[1]}</div>
      <button class="control-btn" onclick={restart}>
        Restart
      </button>
    </div>

    <div class="instructions">
      <p><strong>Player 1:</strong> Q (up), A (down)</p>
      <p><strong>Player 2:</strong> O (up), L (down)</p>
    </div>
  </div>
</div>

<style>
  .pong-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2rem;
  }

  .game-title {
    font-size: 2.5rem;
    font-weight: 800;
    color: var(--color-primary);
    margin-bottom: 1rem;
    text-transform: uppercase;
    letter-spacing: 0.2em;
  }

  .timer {
    font-size: 1.25rem;
    color: var(--color-text-muted);
    margin-bottom: 1.5rem;
    font-family: 'JetBrains Mono', monospace;
  }

  .game-wrapper {
    background: linear-gradient(135deg, rgba(20, 20, 20, 0.9) 0%, rgba(30, 30, 40, 0.9) 100%);
    border: 2px solid rgba(255, 255, 255, 0.1);
    border-radius: var(--radius-xl);
    padding: 2rem;
  }

  .game-field {
    position: relative;
    width: 510px;
    height: 410px;
    background: #1a1a2e;
    border: 3px solid var(--color-primary);
    border-radius: var(--radius-md);
    overflow: hidden;
  }

  .ball {
    position: absolute;
    width: 20px;
    height: 20px;
    background: #ffffff;
    border-radius: 50%;
    box-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
  }

  .mid-line {
    position: absolute;
    left: 50%;
    top: 95px;
    width: 4px;
    height: calc(100% - 95px);
    background: repeating-linear-gradient(
      to bottom,
      rgba(255, 255, 255, 0.3) 0px,
      rgba(255, 255, 255, 0.3) 10px,
      transparent 10px,
      transparent 20px
    );
    transform: translateX(-50%);
  }

  .player {
    position: absolute;
    width: 10px;
    height: 80px;
    border-radius: var(--radius-sm);
    transition: top 0.05s linear;
  }

  .player-1 {
    left: 20px;
    background: #3b82f6;
    box-shadow: 0 0 10px rgba(59, 130, 246, 0.5);
  }

  .player-2 {
    right: 10px;
    background: #22c55e;
    box-shadow: 0 0 10px rgba(34, 197, 94, 0.5);
  }

  .gate {
    position: absolute;
    width: 10px;
    height: 160px;
    top: 160px;
    background: transparent;
    border: 2px dashed rgba(255, 255, 255, 0.3);
  }

  .gate-1 {
    left: 0;
    border-left: none;
    border-radius: 0 var(--radius-sm) var(--radius-sm) 0;
  }

  .gate-2 {
    right: 0;
    border-right: none;
    border-radius: var(--radius-sm) 0 0 var(--radius-sm);
  }

  .controls {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 2rem;
    margin-top: 1.5rem;
    padding: 1rem;
    background: rgba(255, 255, 255, 0.05);
    border-radius: var(--radius-md);
  }

  .control-btn {
    padding: 0.75rem 1.5rem;
    background: var(--color-primary);
    color: white;
    border: none;
    border-radius: var(--radius-md);
    font-family: inherit;
    font-size: 0.875rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    cursor: pointer;
    transition: all var(--transition-fast);
  }

  .control-btn:hover {
    background: var(--color-primary-light);
    box-shadow: var(--shadow-glow);
  }

  .score {
    font-size: 2rem;
    font-weight: 800;
    color: var(--color-text);
    font-family: 'JetBrains Mono', monospace;
    letter-spacing: 0.1em;
  }

  .instructions {
    margin-top: 1.5rem;
    display: flex;
    justify-content: center;
    gap: 3rem;
  }

  .instructions p {
    font-size: 0.875rem;
    color: var(--color-text-muted);
  }

  .instructions strong {
    color: var(--color-text);
  }

  @media (max-width: 600px) {
    .game-field {
      width: 340px;
      height: 280px;
      transform: scale(0.9);
    }

    .game-wrapper {
      padding: 1rem;
    }

    .instructions {
      flex-direction: column;
      gap: 0.5rem;
      text-align: center;
    }
  }
</style>
