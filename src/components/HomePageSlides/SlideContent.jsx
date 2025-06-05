// File: src/components/HomePageSlides/SlideContent.jsx
import React from 'react';
import '../../styles/Slides.css';
import ImageSection from './ImageSection';
import AutoResizeText from '../UI/AutoResizeText'; // <<— import it

export default function SlideContent({ title, paragraphs = [], images = [] }) {
  return (
    <div className="slide-content">
      {title && <h2 className="slide-title">{title}</h2>}

      <div className="slide-body">
        {/*
          Instead of a bare <div className="slide-text">, we now use AutoResizeText.
          Pass the same className so .slide-text CSS still applies, and give it 100% width/height.
        */}
        <AutoResizeText
          className="slide-text"
          maxFontSize={48}
          minFontSize={8}
          step={0.5}
          style={{ flex:'1 1 50%', minHeight:0 }}
        >
          {paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </AutoResizeText>

        <ImageSection images={images} />
      </div>
    </div>
  );
}
