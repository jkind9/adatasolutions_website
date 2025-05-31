// src/components/slides/AISlide.jsx
import React from 'react';
import './Slides.css';

import aiDiagram1 from '../../assets/images/cheetir.png';
import aiDemo2 from '../../assets/images/cheetir.png';

export default function AISlide() {
  const paragraphs = [
    `At ADS, we combine research-grade AI methodologies with production-focused engineering to deliver intelligent automation and decision support. Our expertise spans reinforcement learning agents, generative adversarial networks (GANs), and integrated AI + IoT systems.`,
    `For instance, we have deployed reinforcement-learning–driven robotic controls and GAN-powered image synthesis pipelines that streamline content generation. By partnering with cloud providers (AWS SageMaker, Lambda, Bedrock) and on-prem infrastructures, we integrate AI components seamlessly into existing workflows—improving efficiency, reducing human error, and unlocking new capabilities that scale with your business.`
  ];

  const imageEntries = [
    {
      src: aiDiagram1,
      alt: 'Reinforcement learning architecture',
      caption: 'RL Architecture for Robotic Arm Control',
    },
    {
      src: aiDemo2,
      alt: 'GAN image synthesis example',
      caption: 'GAN-Based Image Synthesis Pipeline',
    },
  ];

  return (
    <div className="slide-content">
      <h2 className="slide-title">Artificial Intelligence</h2>
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
