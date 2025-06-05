// src/components/slides/ComputerVisionSlide.jsx
import '../../styles/Slides.css';
import SlideContent from '../UI/SlideContent';

import cvExample1 from '../../assets/images/cheetir.png';
import cvExample3 from '../../assets/images/clip.png';

export default function ComputerVisionSlide() {
  const paragraphs = [
    `Our computer vision practice delivers bespoke image and video analytics solutions that solve real-world challenges across industries. 
    Leveraging OpenCV, YOLOv5, and custom deep-learning architectures, we build systems that automatically extract and quantify visual information—such as symbol counting on construction sites, thermal imaging for quality control, and facial recognition for access management.`,
    `Credited as lead inventor in a novel take-off/estimation platform,our clients can now reduce manual labor by an order of magnitude. 
    From prototype to deployment in Docker-based pipelines or embedded devices, we handle every stage: data collection, annotation, model training, and continuous improvement.`
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
