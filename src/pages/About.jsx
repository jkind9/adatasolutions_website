// File: src/pages/Expertise.jsx
import React from 'react';
import ScrollingBanner from '../components/UI/ScrollingBanner';
import SlideContent from '../components/UI/SlideContent';


import bg1 from '../assets/images/MyBG.png';
import me from '../assets/images/me.png';
import '../styles/About.css';

function MeSlide() {
    const paragraphs = [
        `Starting my career as an undergraduate in BAE Systems Maritime Services, I quickly learned I had a strong passion for data science and modelling.
        The idea of unifying data modeling with physics for a deeper understanding of complex systems fascinated me, and I began with modelling the Type 45 Destroyers`,
        `I created a generalised additive model in R that was able to prove a 0.1° offset in the rudder sensor, a decrease in power required for small rudder angles and an asymmetry in the power-rudder curve.
        All these effects were consistent with naval architecture understanding but were unproven with these ships data. `,

        `From there I finished my degree, getting a first in my dissertation based on unifying physics and data science for atmospheric flow prediction, and dived into computer vision and image processing for MWIR cameras in Qioptiq.`,
        `Since then I have worked in financial services, construction estimating and consultancy, and have pushed the technological advancement of every company. `,
        `My most notable achievement is being recognised as first inventor of patent GB2631290 - a novel implementation of take-off estimating using computer vision techniques for automated symbol extraction and recognition.`
      ];
  
    const imageEntries = [
      {
        src: me,
      }
    ];
  
    return (
      <SlideContent
      title="About Me"
      paragraphs={paragraphs}
      images={imageEntries}
      />
    );
  }

export default function About() {
  const slides = [
    { background: bg1, content: <MeSlide />},

    // …add more slide objects as needed…
  ];

  return (
    <div className="About-page">
      <ScrollingBanner slides={slides} />
    </div>
  );
}
