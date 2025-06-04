// File: src/components/UI/ScrollingBanner.jsx
import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import '../../styles/ScrollingBanner.css';

export default function ScrollingBanner({ slides }) {
  const sectionRefs = useRef([]);

  useEffect(() => {
    const observers = [];
    sectionRefs.current.forEach((section) => {
      if (!section) return;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          } else {
            entry.target.classList.remove('visible');
          }
        },
        { root: null, threshold: 0.5 }
      );
      observer.observe(section);
      observers.push(observer);
    });
    return () => observers.forEach((obs) => obs.disconnect());
  }, [slides.length]);

  return (
    <div className="scroll-container">
      {slides.map(({ background, content }, idx) => {
        const isImage =
          /\.(jpg|jpeg|png|gif|svg)$/.test(background) || background.startsWith('/');
        const sectionStyle = isImage
          ? {
              backgroundImage: `url(${background})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }
          : { backgroundColor: background };

        return (
          <section
            key={idx}
            ref={(el) => (sectionRefs.current[idx] = el)}
            className={`scroll-section ${idx % 2 === 0 ? 'from-left' : 'from-right'}`}
            style={sectionStyle}
          >
            <div className="slide-content-wrapper">
              {content}
            </div>
          </section>
        );
      })}
    </div>
  );
}

ScrollingBanner.propTypes = {
  slides: PropTypes.arrayOf(
    PropTypes.shape({
      background: PropTypes.string.isRequired,
      content: PropTypes.node.isRequired,
    })
  ).isRequired,
};
