// src/components/slides/ComputerVisionSlide.jsx
import '../../styles/Slides.css';
import SlideContent from '../UI/SlideContent';

import cvExample1 from '../../assets/images/cheetir.png';
import cvExample3 from '../../assets/images/clip.png';

export default function ComputerVisionSlide() {
  const paragraphs = [
    `I have experience with a vast array of computer vision methods, including creating image embeddings for vector similarity, object detection pipelines, foreground/background separation, image processing and enhancement techniques, and OCR for text extraction.`,
  
    `In past projects, I’ve built end-to-end solutions—from data collection and annotation to model training, optimization, and deployment—using frameworks like OpenCV, PyTorch, and TensorFlow. These deployments run in Docker-based pipelines, edge devices, and cloud infrastructures, ensuring scalable, production-ready performance.`
  ];
  

  const imageEntries = [
    {
      src: cvExample1,
      alt: 'Symbol counting with OpenCV',
      caption: 'Symbol counting + Thermal Enhancement'
    },
    {
      src: cvExample3,
      alt: 'Thermal detection with YOLOv5',
      caption: 'Real-time Thermal Enhancement + YOLOv5'
    },
    // {
    //   src: cvExample2,
    //   alt: 'Siamese NN embedding for facial recognition',
    //   caption: 'Siamese NN Embedding Model'
    // }
  ];

  return (
    <SlideContent
    title="Computer Vision"
    paragraphs={paragraphs}
    images={imageEntries}
  />
  );
}
