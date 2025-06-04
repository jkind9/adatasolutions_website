// src/components/Banner.jsx

import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import '../../styles/Banner.css';

export default function Banner({ slides = [], interval = 15000 }) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (slides.length === 0) return;
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, interval);
    return () => clearInterval(timer);
  }, [slides.length, interval]);

  if (slides.length === 0) return null;

  const { Component: SlideComponent, props = {}, bgColor } = slides[current];

  return (
    <Box className="banner-wrapper">
      <Box
        className="banner-slide"
        sx={{ backgroundColor: bgColor || 'transparent' }}
      >
        <SlideComponent {...props} />
      </Box>

      <Box className="banner-indicators">
        {slides.map((_, idx) => (
          <IconButton
            key={idx}
            size="small"
            onClick={() => setCurrent(idx)}
            aria-label={`Show slide ${idx + 1}`}
            className={`indicator-dot ${idx === current ? 'active' : ''}`}
          >
            <FiberManualRecordIcon fontSize="inherit" />
          </IconButton>
        ))}
      </Box>
    </Box>
  );
}

Banner.propTypes = {
  slides: PropTypes.arrayOf(
    PropTypes.shape({
      Component: PropTypes.elementType.isRequired,
      props: PropTypes.object,
      bgColor: PropTypes.string,
    })
  ).isRequired,
  interval: PropTypes.number,
};
