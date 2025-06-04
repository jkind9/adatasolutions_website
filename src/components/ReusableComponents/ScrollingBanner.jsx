import React, { useEffect, useRef } from 'react';
import '../Styles/ScrollingBanner.css';

import ComputerVisionSlide from '../HomePageSlides/ComputerVisionSlide';
import MachineLearningSlide from '../HomePageSlides/MachineLearningSlide';
import NLPSlide from '../HomePageSlides/NLPSlide';
import AISlide from '../HomePageSlides/AISlide';

const slides = [
  { Component: ComputerVisionSlide, bgColor: '#3498db' },
  { Component: MachineLearningSlide, bgColor: '#e74c3c' },
  { Component: NLPSlide,           bgColor: '#2ecc71' },
  { Component: AISlide,           bgColor: '#9b59b6' },
];

var d = document.querySelectorAll('.block'),
    i, w, width, height;

for(i = 0; i < d.length; i++) {
  width = d[i].offsetWidth;
  height = d[i].offsetHeight;

  for (w = width; w; w--) {
    d[i].style.width = w + 'px';
    if (d[i].offsetHeight !== height) break;
  }
  
  if (w < d[i].scrollWidth) {
    d[i].style.width = d[i].style.maxWidth = d[i].scrollWidth + 'px';
  } else {
    d[i].style.width = (w + 1) + 'px';
  }
}

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
          ref={el => (sectionRefs.current[idx] = el)}
          className={`scroll-section ${idx % 2 === 0 ? 'from-left' : 'from-right'}`}  // add dir class
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