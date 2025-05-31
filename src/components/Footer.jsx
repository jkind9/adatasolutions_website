// src/components/Banner.jsx
import React, { useState, useEffect } from 'react';
import './Banner.css';
import ComputerVisionSlide from './slides/ComputerVisionSlide';
import MachineLearningSlide from './slides/MachineLearningSlide';
import NLPSlide from './slides/NLPSlide';
import AISlide from './slides/AISlide';

const slides = [
  { Component: ComputerVisionSlide, bgColor: '#3498db' },
  { Component: MachineLearningSlide, bgColor: '#e74c3c' },
  { Component: NLPSlide,         bgColor: '#2ecc71' },
  { Component: AISlide,         bgColor: '#9b59b6' },
];

export default function Banner() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 15000);
    return () => clearInterval(timer);
  }, []);

  const SlideComponent = slides[current].Component;

  return (
    <div className="banner-wrapper">
      <div
        className="banner-slide"
        style={{ backgroundColor: slides[current].bgColor }}
      >
        <SlideComponent />
      </div>
      <div className="banner-indicators">
        {slides.map((_, idx) => (
          <button
            key={idx}
            className={`indicator-dot ${idx === current ? 'active' : ''}`}
            onClick={() => setCurrent(idx)}
            aria-label={`Show slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
