import React, { useEffect, useRef, useMemo } from 'react';
import '../../styles/ScrollingBanner.css';

import ComputerVisionSlide from '../HomePageSlides/ComputerVisionSlide';
import MachineLearningSlide from '../HomePageSlides/MachineLearningSlide';
import NLPSlide from '../HomePageSlides/NLPSlide';
import AISlide from '../HomePageSlides/AISlide';

const slides = [
  { Component: ComputerVisionSlide },
  { Component: MachineLearningSlide },
  { Component: NLPSlide },
  { Component: AISlide },
];

function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

// Precompute width adjustments (unchanged)
var d = document.querySelectorAll('.block'),
    i, w, width, height;

for (i = 0; i < d.length; i++) {
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

export default function ScrollingBanner({ images }) {
  const sectionRefs = useRef([]);

  // Generate one random color per slide if no images supplied
  const bgStyles = useMemo(() => {
    return slides.map((_, idx) => {
      if (Array.isArray(images) && images[idx]) {
        return {
          backgroundImage: `url(${images[idx]})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        };
      } else {
        return { backgroundColor: getRandomColor() };
      }
    });
  }, [images]);

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
          threshold: 0.5,
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
      {slides.map(({ Component }, idx) => (
        <section
          key={idx}
          ref={el => (sectionRefs.current[idx] = el)}
          className={`scroll-section ${idx % 2 === 0 ? 'from-left' : 'from-right'}`}
          style={bgStyles[idx]}
        >
          <div className="slide-content">
            <Component />
          </div>
        </section>
      ))}
    </div>
  );
}
