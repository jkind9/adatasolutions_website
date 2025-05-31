import React from 'react';
import mlChart from '../../assets/images/ensign.PNG';

export default function MachineLearningSlide() {
  return (
    <div className="slide-content">
      {/* TITLE ROW */}
      <h2 className="slide-title">Machine Learning</h2>

      {/* BODY ROW: text on left, image on right */}
      <div className="slide-body">
        {/* Left column: descriptive text */}
        <div className="slide-text">
          <p>
            End‐to‐end ML workflows: data cleaning, feature engineering, model training,
            hyperparameter tuning, and deployment on AWS/GCP.
          </p>
        </div>

        {/* Right column: image */}
        <div className="slide-image-wrapper">
          <img
            src={mlChart}
            alt="Machine Learning workflow example"
            className="slide-image"
          />
        </div>
      </div>
    </div>
  );
}