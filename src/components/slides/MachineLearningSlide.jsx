// src/components/slides/MachineLearningSlide.jsx
import React from 'react';
import './Slides.css';

import mlChart from '../../assets/images/cheetir.png';
import mlGraph from '../../assets/images/cheetir.png';

export default function MachineLearningSlide() {
  const paragraphs = [
    `At Alexander Data Solutions Ltd, we harness the power of supervised and unsupervised learning to turn complex data sets into actionable insights. Our team builds end-to-end pipelines—from data ingestion and feature engineering to model deployment—using industry-standard frameworks such as TensorFlow, PyTorch, and scikit-learn.`,
    `Whether it’s predicting customer churn, optimizing supply-chain logistics, or automating anomaly detection, we tailor each solution to your business objectives. By integrating our models into production environments (on-premises or in the cloud), we ensure scalable performance, rigorous monitoring, and continual retraining to maintain peak accuracy over time.`
  ];

  const imageEntries = [
    {
      src: mlChart,
      alt: 'Model performance chart',
      caption: 'Model Performance Over Time',
    },
    {
      src: mlGraph,
      alt: 'Neural network architecture diagram',
      caption: 'Custom PyTorch Neural Network Architecture',
    },
  ];

  return (
    <div className="slide-content">
      <h2 className="slide-title">Machine Learning</h2>
      <div className="slide-body">
        <div className="slide-text">
          {paragraphs.map((text, idx) => (
            <p key={idx}>{text}</p>
          ))}
        </div>
        <div className="slide-image-wrapper">
          {imageEntries.map((entry, idx) => (
            <div key={idx} className="image-pair">
              <img
                src={entry.src}
                alt={entry.alt}
                className="slide-image"
              />
              {entry.caption && (
                <div className="image-caption">{entry.caption}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
