// src/components/slides/ImageSection.jsx
import React from 'react';
import '../../styles/Slides.css';

export default function ImageSection({ images }) {
  const gridStyle = { '--image-count': images.length };

  return (
    <div className="image-section" style={gridStyle}>
      {images.map((img, idx) => (
        <div key={idx} className="image-item">
          <img src={img.src} alt={img.alt} className="slide-image" />
        </div>
      ))}
    </div>
  );
}
