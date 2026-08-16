export interface Experience {
  id: string;
  title: string;
  company: string;
  type: 'permanent' | 'contractor';
  location?: string;
  startDate: string;
  endDate: string | 'Current';
  description: string;
  achievements: string[];
  technologies: string[];
  logo?: string;
}

export const experiences: Experience[] = [
  {
    id: 'mclaren',
    title: 'Senior Data Scientist',
    company: 'McLaren Racing / Purple Sector',
    type: 'contractor',
    startDate: 'August 2025',
    endDate: 'Current',
    description:
      'Senior developer in Purple Sector, the subcontractor for the McLaren Accelerator program, consulting for sponsors. Established as a leading expert in computer vision and data analysis, and now the sole developer responsible for computer vision support across all client work.',
    achievements: [
      'Delivered an anomaly detection suite for a global food manufacturer in 3 days on lines running 1000+ parts per minute - reduced unexpected downtime 5x, ~10x ROI, saving well over $10m per year',
      "Led bottle-cap deformity detection for one of the world's largest spirits companies - demonstrated on site within 24 hours and improved eOEE by ~20% on their worst performing product",
      'Created a zero-shot generalized anomaly detection pipeline (patent pending), extended to zero-shot anomaly classification',
      'Sole Data Scientist across all projects - anomaly detection running on the edge, CPU only, at 150+ FPS in 1080p'
    ],
    technologies: ['Python', 'Computer Vision', 'Anomaly Detection', 'Machine Learning', 'Edge Deployment']
  },
  {
    id: 'intrum',
    title: 'Machine Learning Engineer',
    company: 'Intrum/Capquest',
    type: 'permanent',
    startDate: 'January 2024',
    endDate: 'August 2025',
    description:
      'Focused on optimizing call centers using AWS. All calls processed, transcribed and analyzed in the cloud using Amazon Connect.',
    achievements: [
      'Created quality assurance dashboard for company-wide agent performance',
      'Built auto-summarizer using Gen AI for call transcripts',
      'Developed AI assistant chatbot with real-time agent assistance',
      'Implemented policy retrieval and suggested responses based on call context'
    ],
    technologies: ['AWS Connect', 'Kinesis', 'Sagemaker', 'Bedrock', 'Lambda', 'Lex', 'NLP'],
    logo: '/images/bedrock.PNG'
  },
  {
    id: 'ensign',
    title: 'Senior Computer Vision Engineer',
    company: 'Ensign Advanced Systems Ltd',
    type: 'permanent',
    startDate: 'September 2022',
    endDate: 'January 2024',
    description:
      'Led computer vision projects with patented innovation. Managed development teams for both front-end and back-end systems.',
    achievements: [
      'Patent granted (GB2631290) for smart auto-counting methodology described as "revolutionary" by customers',
      'Project lead managing GUI developers and backend infrastructure teams',
      'Developed automated symbol extraction for construction schematics'
    ],
    technologies: ['OpenCV', 'PyTorch', 'Image Processing', 'OCR', 'Python'],
    logo: '/images/ensign.PNG'
  },
  {
    id: 'chetwood',
    title: 'Data Systems Analyst',
    company: 'Chetwood Financial Ltd',
    type: 'permanent',
    startDate: 'September 2021',
    endDate: 'September 2022',
    description:
      'Provided support to the credit card business via data analytics and data warehousing.',
    achievements: [
      'Created repayment calculator for credit cards deployed to iOS/Android',
      'Restructured notification system for credit card application',
      'Created investor reports using MySQL, PostgreSQL with AWS infrastructure'
    ],
    technologies: ['Python', 'MySQL', 'PostgreSQL', 'AWS Redshift', 'RDS', 'Sagemaker']
  },
  {
    id: 'excelitas',
    title: 'Development Engineer',
    company: 'Excelitas/Qioptiq',
    type: 'permanent',
    startDate: 'June 2019',
    endDate: 'September 2021',
    description:
      'Pioneered video processing and AI for Ground Vehicle Systems. Focused on long-range MWIR cameras.',
    achievements: [
      'Technical lead for Video Processing Roadmap',
      'Technical lead for Artificial Intelligence Roadmap',
      'Developed skills in opto-electronics, embedded systems, and digital video processing',
      'Deployed embedded AI solutions using TensorFlow/Keras'
    ],
    technologies: ['OpenCV', 'TensorFlow', 'Keras', 'Scikit-Learn', 'Embedded Systems', 'CUDA'],
    logo: '/images/cheetir.png'
  },
  {
    id: 'bae',
    title: 'Data Scientist / Systems Engineer',
    company: 'BAE Systems Maritime Services',
    type: 'permanent',
    startDate: 'September 2017',
    endDate: 'June 2019',
    description:
      'Year in industry placement developing foundational data science and systems engineering skills.',
    achievements: [
      'Developed market basket analysis algorithm for correlation predictions',
      'Created naval vessel power consumption model with unprecedented precision',
      'Integrated theoretical knowledge into maritime services industry'
    ],
    technologies: ['Python', 'Data Analytics', 'Statistical Modeling']
  }
];

export const education = [
  {
    degree: 'BSc Physics',
    institution: 'University of Exeter',
    years: '2015 - 2019',
    grade: '2:2',
    notes: 'Including a year in industry'
  },
  {
    degree: 'A-Levels',
    institution: 'Ysgol Eirias',
    years: '2013 - 2015',
    grades: [
      { subject: 'Mathematics', grade: 'A*' },
      { subject: 'Further Mathematics', grade: 'A' },
      { subject: 'Physics', grade: 'B' }
    ]
  }
];
