
import React from 'react';
import '../../styles/Slides.css';
import SlideContent from '../UI/SlideContent';
import cvExample1 from '../../assets/images/agent.png';
import cvExample2 from '../../assets/images/AIEvolution.png';

export default function AISlide() {
  const paragraphs = [
    `I have experience with all stages of AI development, from building and training neural networks to designing transformer architectures and working with large language models (LLMs). I’ve deployed both self-hosted solutions and cloud-based services—such as AWS Bedrock—to support research and production workloads.`,
  
    `My hands-on experience covers training, efficient fine-tuning (LoRA, adapters, etc.), and end-to-end MLOps deployments. By integrating CI/CD pipelines, Kubernetes (or similar orchestration), and monitoring tools, I ensure AI models move smoothly from prototype to production at scale.`
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
