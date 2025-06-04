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
          maxFontSize={36}
          minFontSize={14}
          step={0.5}
          style={{ width: '100%', height: '100%' }}
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
