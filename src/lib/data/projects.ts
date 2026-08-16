export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  technologies: string[];
  highlights: string[];
  image: string;
  color: 'red' | 'blue' | 'green' | 'orange';
  link?: string;
}

export const projects: Project[] = [
  {
    id: 'mclaren',
    title: 'McLaren Racing',
    subtitle: 'Zero-Shot Anomaly Detection at the Edge',
    description:
      'Sole developer for computer vision across all client work in the McLaren Accelerator program. Created the patent-pending phase awareness framework - using cyclic video to monitor chaos over time and find not just what looks different, but what looks relevant - deployed in production on CPU-only edge hardware at 150+ FPS in full 1080p.',
    technologies: ['Python', 'Computer Vision', 'Anomaly Detection', 'Edge Deployment', 'PyTorch'],
    highlights: [
      'Anomaly detection on lines running 1000+ parts per minute, delivered in 3 days',
      '5x reduction in unexpected downtime - ~10x ROI, $10m+ saved per year',
      '~20% eOEE improvement for a global spirits company via bottle-cap defect detection',
      'Second patent pending: phase awareness for cyclic video'
    ],
    image: '/images/RF.png',
    color: 'orange'
  },
  {
    id: 'intrum',
    title: 'Intrum Call Analytics',
    subtitle: 'AI-Powered Call Center Optimization',
    description:
      'Built a live call analytics platform using AWS Connect, capable of monitoring calls and providing real-time AI assistance. Implemented speech-to-text, sentiment analysis, and automated agent coaching.',
    technologies: ['AWS Connect', 'Kinesis', 'Lex', 'Lambda', 'Bedrock', 'NLP'],
    highlights: [
      'Real-time call transcription and analysis',
      'AI chatbot providing live agent assistance',
      'Quality assurance dashboard for company-wide performance',
      'Auto-summarizer using Gen AI for call transcripts'
    ],
    image: '/images/bedrock.PNG',
    color: 'blue'
  },
  {
    id: 'ensign',
    title: 'Ensign Patent',
    subtitle: 'Computer Vision Symbol Extraction',
    description:
      'First inventor of Patent GB2631290 - a revolutionary automated symbol extraction and recognition system for construction schematics. Managed both front-end GUI and back-end infrastructure teams.',
    technologies: ['OpenCV', 'PyTorch', 'OCR', 'Image Processing', 'Python'],
    highlights: [
      'Patent GB2631290 - First Inventor',
      'Described as "revolutionary" by customers',
      'Automated symbol extraction from construction schematics',
      'Project lead managing development teams'
    ],
    image: '/images/ensign.PNG',
    color: 'green'
  },
  {
    id: 'excelitas',
    title: 'Excelitas/Qioptiq',
    subtitle: 'IR Camera AI & Video Processing',
    description:
      'Technical lead for AI and Video Processing roadmaps. Pioneered video processing and artificial intelligence for Ground Vehicle Systems, focused on long-range mid-wave infrared cameras.',
    technologies: ['YOLO', 'OpenCV', 'TensorFlow', 'CUDA', 'Thermal Imaging', 'Embedded Systems'],
    highlights: [
      'Technical lead for AI roadmap',
      'MWIR camera enhancement and processing',
      'Real-time thermal object detection',
      'Embedded AI solution deployment'
    ],
    image: '/images/cheetir.png',
    color: 'red'
  }
];

export const featuredTechnologies = [
  'Python',
  'AWS',
  'PyTorch',
  'TensorFlow',
  'OpenCV',
  'Computer Vision',
  'NLP',
  'RAG Pipelines',
  'Bedrock',
  'Sagemaker',
  'Docker',
  'YOLO'
];
