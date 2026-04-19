export interface Skill {
  name: string;
  level: number;
  description?: string;
}

export interface SkillCategory {
  name: string;
  icon: string;
  color: 'red' | 'blue' | 'green' | 'purple' | 'orange';
  skills: Skill[];
}

export const skillCategories: SkillCategory[] = [
  {
    name: 'AI & Machine Learning',
    icon: '🧠',
    color: 'red',
    skills: [
      { name: 'Neural Networks', level: 95, description: 'Deep learning architectures, CNNs, RNNs, Transformers' },
      { name: 'Computer Vision', level: 95, description: 'Object detection, image processing, OCR, YOLO, RCNN' },
      { name: 'NLP', level: 90, description: 'Text processing, sentiment analysis, named entity recognition' },
      { name: 'RAG Pipelines', level: 88, description: 'Retrieval-augmented generation, vector databases, embeddings' },
      { name: 'Agentic AI', level: 85, description: 'Custom frameworks for self-hostable models like Llama' }
    ]
  },
  {
    name: 'Cloud & Infrastructure',
    icon: '☁️',
    color: 'blue',
    skills: [
      { name: 'AWS', level: 92, description: 'Comprehensive AWS services for ML/AI workloads' },
      { name: 'Bedrock', level: 88, description: 'Foundation models, RAG pipelines with near-zero latency' },
      { name: 'Sagemaker', level: 85, description: 'ML model training, deployment, and monitoring' },
      { name: 'Lambda', level: 90, description: 'Serverless compute for event-driven architectures' },
      { name: 'Docker', level: 85, description: 'Containerization for reproducible ML environments' }
    ]
  },
  {
    name: 'Languages & Frameworks',
    icon: '💻',
    color: 'green',
    skills: [
      { name: 'Python', level: 95, description: 'Primary language for data science and ML' },
      { name: 'PyTorch', level: 92, description: 'Deep learning framework, custom model development' },
      { name: 'OpenCV', level: 95, description: 'Image processing, computer vision applications' },
      { name: 'TensorFlow', level: 85, description: 'Production ML models, TensorFlow Serving' },
      { name: 'SQL', level: 85, description: 'MySQL, PostgreSQL, data warehousing' }
    ]
  },
  {
    name: 'Data & Analytics',
    icon: '📊',
    color: 'purple',
    skills: [
      { name: 'Pandas', level: 95, description: 'Data manipulation and analysis' },
      { name: 'NumPy', level: 95, description: 'Numerical computing, array operations' },
      { name: 'Scikit-Learn', level: 92, description: 'Classical ML algorithms, model selection' },
      { name: 'Time Series', level: 88, description: 'Forecasting, anomaly detection, pattern recognition' },
      { name: 'Visualization', level: 85, description: 'Matplotlib, Plotly, Seaborn for insights' }
    ]
  }
];

export const certifications = [
  { name: 'Patent GB2631290', description: 'Computer Vision - Symbol Extraction', year: 2024 }
];

export const programmingLanguages = [
  { name: 'Python', proficiency: 'Fluent' },
  { name: 'LaTeX', proficiency: 'Fluent' },
  { name: 'C', proficiency: 'Intermediate' },
  { name: 'C#', proficiency: 'Intermediate' },
  { name: 'SQL', proficiency: 'Intermediate' },
  { name: 'R', proficiency: 'Intermediate' },
  { name: 'React', proficiency: 'Basic' }
];
