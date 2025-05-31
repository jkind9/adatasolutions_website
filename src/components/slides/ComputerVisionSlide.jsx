import React from 'react';
import cvExample from '../../assets/images/cheetir.png'; // sample image

export default function ComputerVisionSlide() {
  return (
    <div className="slide-content">
      {/* TITLE ROW (centered) */}
      <h2 className="slide-title">Computer Vision</h2>

      {/* BODY ROW: left=text, right=image */}
      <div className="slide-body">
        {/* Left column: text */}
        <div className="slide-text">
          <p>
            I’ve built object‐detection pipelines using OpenCV, PyTorch, and TensorFlow—
            from real‐time video analytics to medical‐imaging diagnostics.
          </p>
        </div>

        {/* Right column: image */}
        <div className="slide-image-wrapper">
          <img
            src={cvExample}
            alt="Example CV project"
            className="slide-image"
          />
        </div>
      </div>
    </div>
  );
}