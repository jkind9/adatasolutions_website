import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import '../Styles/Banner.css';

export default function Banner({ slides = [], interval = 15000 }) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (slides.length === 0) return;
    const timer = setInterval(
      () => setCurrent((i) => (i + 1) % slides.length),
      interval,
    );
    return () => clearInterval(timer);
  }, [slides.length, interval]);

  if (slides.length === 0) return null;

  const { Component: SlideComponent, props = {}, bgColor } = slides[current];

  return (
    <div className="banner-wrapper">
      <div className="banner-slide" style={{ backgroundColor: bgColor }}>
        <SlideComponent {...props} />
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

Banner.propTypes = {
  slides: PropTypes.arrayOf(
    PropTypes.shape({
      Component: PropTypes.elementType.isRequired,
      props: PropTypes.object,
      bgColor: PropTypes.string,
    }),
  ).isRequired,
  interval: PropTypes.number,
};
