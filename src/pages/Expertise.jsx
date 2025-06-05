// File: src/pages/Expertise.jsx
import React from 'react';
import ScrollingBanner from '../components/UI/ScrollingBanner';
import ComputerVisionSlide from '../components/ExpertiseSlides/ComputerVisionSlide';
import MachineLearningSlide from '../components/ExpertiseSlides/MachineLearningSlide';
import NLPSlide from '../components/ExpertiseSlides/NLPSlide';
import AISlide from '../components/ExpertiseSlides/AISlide';

import bg1 from '../assets/images/background-var1.png';
import bg2 from '../assets/images/background-var2.png';
import bg3 from '../assets/images/background-var3.png';
import bg4 from '../assets/images/background-var4.png';

export default function Expertise() {
  const slides = [
    { background: bg1, content: <AISlide /> },
    { background: bg2, content: <MachineLearningSlide /> },
    { background: bg3, content: <NLPSlide /> },
    { background: bg4, content: <ComputerVisionSlide /> },
    // …add more slide objects as needed…
  ];

  return (
    <div className="expertise-page">
      <ScrollingBanner slides={slides} />
    </div>
  );
}
