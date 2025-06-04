import React from 'react';
import ScrollingBanner from '../components/UI/ScrollingBanner';
import '../styles/Expertise.css';
// Example array of image URLs (must match the number of slides)
const slideImages = [
  '/images/cv-bg.jpg',
  '/images/ml-bg.jpg',
  '/images/nlp-bg.jpg',
  '/images/ai-bg.jpg',
];
export default function Home() {
  return (
    <div>
      {/* 1) With an array of images – each slide uses the corresponding URL */}
      <ScrollingBanner images={slideImages} />

      {/* 2) Without images prop – each slide will get a randomized background color */}
      {/* <ScrollingBanner /> */}
    </div>
  );
}