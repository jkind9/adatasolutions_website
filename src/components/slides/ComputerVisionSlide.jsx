// src/components/slides/ComputerVisionSlide.jsx
import React from 'react';
import './Slides.css';

import cvExample1 from '../../assets/images/cheetir.png';
import cvExample2 from '../../assets/images/bedrock.PNG';
import cvExample3 from '../../assets/images/ensign.PNG';

export default function ComputerVisionSlide() {
  // 1. Block of descriptive text (multiple paragraphs allowed)
  const paragraphs = [
    `Our computer vision practice delivers bespoke image and video analytics solutions that solve real-world challenges across industries. Leveraging OpenCV, YOLOv5, and custom deep-learning architectures, we build systems that automatically extract and quantify visual information—such as symbol counting on construction sites, thermal imaging for quality control, and facial recognition for access management.`,
    `Patent-pending innovations in image sorting (BERT + CLIP) set us apart, allowing our clients to reduce manual labor by an order of magnitude. From prototype to deployment in Docker-based pipelines or embedded devices, we handle every stage: data collection, annotation, model training, and continuous improvement.`
  ];
  // 2. Array of multiple images + captions
  const imageEntries = [
    {
      src: cvExample1,
      alt: 'Symbol counting output from construction data',
      caption: 'Symbol counting with OpenCV + Thermal Enhancement',
    },
    {
      src: cvExample2,
      alt: 'Thermal image enhancement example',
      caption: 'Real-time Thermal Enhancement + YOLOv5 Detection',
    },
    {
      src: cvExample3,
      alt: 'Facial recognition embedding using Siamese NN',
      caption: 'Triple-Loss Siamese NN Embedding for Facial Recognition',
    },
  ];

  return (
    <div className="slide-content">
      {/* TITLE ROW */}
      <h2 className="slide-title">Computer Vision</h2>

      {/* BODY ROW: text on left, images stacked vertically on right */}
      <div className="slide-body">
        {/* Left column: descriptive text */}
        <div className="slide-text">
          {paragraphs.map((text, idx) => (
            <p key={idx}>{text}</p>
          ))}
        </div>

        {/* Right column: images stacked vertically */}
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
