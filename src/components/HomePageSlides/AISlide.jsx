
import React from 'react';
import '../Styles/Slides.css';
import SlideContent from './SlideContent';
import cvExample1 from '../../assets/images/agent.png';
import cvExample2 from '../../assets/images/AIEvolution.png';

export default function AISlide() {
  const paragraphs = [
      `At ADS, we combine research-grade AI methodologies with production-focused engineering to deliver intelligent automation and decision support. Our expertise spans reinforcement learning agents, generative adversarial networks (GANs), and integrated AI + IoT systems.`,
      `For instance, we have deployed reinforcement-learning–driven robotic controls and GAN-powered image synthesis pipelines that streamline content generation. By partnering with cloud providers (AWS SageMaker, Lambda, Bedrock) and on-prem infrastructures, we integrate AI components seamlessly into existing workflows—improving efficiency, reducing human error, and unlocking new capabilities that scale with your business.`
    ];

  const imageEntries = [
    {
      src: cvExample1,
      alt: 'Symbol counting with OpenCV',
      caption: 'Symbol counting + Thermal Enhancement'
    },
    {
      src: cvExample2,
      alt: 'Thermal detection with YOLOv5',
      caption: 'Real-time Thermal Enhancement + YOLOv5'
    },
  ];

  return (
    <SlideContent
    title="AI"
    paragraphs={paragraphs}
    images={imageEntries}
    />
  );
}
