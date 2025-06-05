// src/components/slides/MachineLearningSlide.jsx
import '../../styles/Slides.css';
import SlideContent from './SlideContent';
import mlChart from '../../assets/images/ML.png';
import mlGraph from '../../assets/images/RF.png';

export default function MachineLearningSlide() {
  const paragraphs = [
    `At Alexander Data Solutions Ltd, we harness the power of supervised and unsupervised learning to turn complex data sets into actionable insights. Our team builds end-to-end pipelines—from data ingestion and feature engineering to model deployment—using industry-standard frameworks such as TensorFlow, PyTorch, and scikit-learn.`,
    `Whether it’s predicting customer churn, optimizing supply-chain logistics, or automating anomaly detection, we tailor each solution to your business objectives. By integrating our models into production environments (on-premises or in the cloud), we ensure scalable performance, rigorous monitoring, and continual retraining to maintain peak accuracy over time.`
  ];

  const imageEntries = [
    {
      src: mlChart,
      alt: 'Model performance chart',
      caption: 'Model Performance Over Time',
    },
    {
      src: mlGraph,
      alt: 'Neural network architecture diagram',
      caption: 'Custom PyTorch Neural Network Architecture',
    },
  ];

  return (
      <SlideContent
      title="Machine Learning"
      paragraphs={paragraphs}
      images={imageEntries}
    />
    );
}
