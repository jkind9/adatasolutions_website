// src/components/slides/MachineLearningSlide.jsx
import '../../styles/Slides.css';
import SlideContent from '../UI/SlideContent';
import mlChart from '../../assets/images/ML.png';
import mlGraph from '../../assets/images/RF.png';

export default function MachineLearningSlide() {
  const paragraphs = [
    `I am extremely familiar with many ML methods such as regression, classification, clustering, feature extraction and simplification, data augmentation, and both supervised and unsupervised learning. I build end-to-end pipelines—from data ingestion and preprocessing to feature engineering and model deployment—using frameworks like AWS Sagemaker, Tensorflow, Pytorch and Scikit-Learn`,
  
    `Whether it’s predicting customer churn, optimizing supply‐chain logistics, or automating anomaly detection, I tailor each solution to meet specific business objectives. By integrating models into production environments (on-premises or in the cloud), I ensure scalable performance, robust monitoring, and continuous retraining to maintain accuracy over time.`
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
