import React from 'react';
import '../Styles/Slides.css';
import ImageSection from './ImageSection';

/**
 * Generic slide container:
 *  • `title` – optional heading
 *  • `paragraphs` – array of strings for left text
 *  • `images` – [{ src, alt, caption }] for <ImageSection />
 */
export default function SlideContent({ title, paragraphs = [], images = [] }) {
  return (
    <div className="slide-content">
      {title && <h2 className="slide-title">{title}</h2>}

      <div className="slide-body">
        <div className="slide-text">
          {paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>

        <ImageSection images={images} />
      </div>
    </div>
  );
}
