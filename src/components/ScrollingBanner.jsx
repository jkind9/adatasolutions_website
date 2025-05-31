import React, { useEffect, useRef } from 'react';
import './ScrollingBanner.css';

import ComputerVisionSlide from './slides/ComputerVisionSlide';
import MachineLearningSlide from './slides/MachineLearningSlide';
import NLPSlide from './slides/NLPSlide';
import AISlide from './slides/AISlide';

const slides = [
  { Component: ComputerVisionSlide, bgColor: '#3498db' },
  { Component: MachineLearningSlide, bgColor: '#e74c3c' },
  { Component: NLPSlide,           bgColor: '#2ecc71' },
  { Component: AISlide,           bgColor: '#9b59b6' },
];

export default function ScrollingBanner() {
  // Keep refs to each <section> so we can observe visibility
  const sectionRefs = useRef([]);

  useEffect(() => {
    const observers = [];
    sectionRefs.current.forEach((section) => {
      if (!section) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            section.classList.add('visible');
          } else {
            section.classList.remove('visible');
          }
        },
        {
          root: null,
          threshold: 0.5, // 50% of the section must be visible
        }
      );

      observer.observe(section);
      observers.push(observer);
    });

    return () => {
      observers.forEach((obs) => obs.disconnect());
    };
  }, []);

  return (
    <div className="scroll-container">
      {slides.map(({ Component, bgColor }, idx) => (
        <section
          key={idx}
          ref={(el) => (sectionRefs.current[idx] = el)}
          className="scroll-section"
          style={{ backgroundColor: bgColor }}
        >
          <div className="slide-content">
            <Component />
          </div>
        </section>
      ))}
    </div>
  );
}