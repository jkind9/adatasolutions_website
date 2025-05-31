import React from 'react';
import nlpDemo from '../../assets/images/NLP.png';


export default function NLPSlide() {
  return (
    <div className="slide-content">
      {/* 1. TITLE ROW: exactly 80px tall via CSS */}
      <h2 className="slide-title">Natural Language Processing</h2>

      {/* 2. BODY ROW: will fill remaining 520px */}
      <div className="slide-body">
        {/* Left column: text */}
        <div className="slide-text">
          <p>
            Built chatbots, sentiment‐analysis pipelines, and transformer‐based text
            classifiers—leveraging Hugging Face and spaCy.
          </p>
        </div>

        {/* Right column: image */}
        <div className="slide-image-wrapper">
          <img
            src={nlpDemo}
            alt="NLP demonstration graphic"
            className="slide-image"
          />
        </div>
      </div>
    </div>
  );
}