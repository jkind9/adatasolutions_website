import React from 'react';
import aiDiagram from '../../assets/images/bedrock.PNG';

export default function AISlide() {
  return (
    <div className="slide-content">
      {/* TITLE ROW */}
      <h2 className="slide-title">Artificial Intelligence</h2>

      {/* BODY ROW: text on left, image on right */}
      <div className="slide-body">
        {/* Left column: descriptive text */}
        <div className="slide-text">
          <p>
            Designing AI architectures (reinforcement learning, recommendation engines,
            knowledge graphs) that scale in production environments.
          </p>
        </div>

        {/* Right column: image */}
        <div className="slide-image-wrapper">
          <img
            src={aiDiagram}
            alt="AI architecture diagram"
            className="slide-image"
          />
        </div>
      </div>
    </div>
  );
}