<script lang="ts">
  import ExpertiseSlide from '$lib/components/sections/ExpertiseSlide.svelte';

  const slides = [
    {
      title: 'Artificial Intelligence',
      description: 'Building intelligent systems that learn, adapt, and deliver real business value.',
      paragraphs: [
        'With extensive experience in neural network architectures, I design and deploy AI solutions that transform raw data into actionable insights. From convolutional networks for image analysis to transformer models for natural language understanding.',
        'My work spans the full AI lifecycle - from initial research and prototyping to production deployment at scale. I specialize in making complex AI accessible and practical for real-world applications.',
        'Currently at McLaren Racing, I lead AI initiatives that deliver measurable improvements in client operations, including predictive models that can be built and deployed within 24 hours of first contact.'
      ],
      images: ['/images/agent.png', '/images/AIEvolution.png'],
      color: '#0891b2'
    },
    {
      title: 'Machine Learning',
      description: 'From classical algorithms to deep learning - the right tool for every problem.',
      paragraphs: [
        'Expert in the full spectrum of machine learning techniques: regression, classification, clustering, dimensionality reduction, and time-series forecasting. I select and tune algorithms based on the specific problem constraints and data characteristics.',
        'Proficient with PyTorch, TensorFlow, and Scikit-Learn, I build models that are not just accurate but also interpretable, maintainable, and production-ready. MLOps is integral to my workflow.',
        'At Intrum, I built ML pipelines that process thousands of calls daily, extracting insights that drive quality improvements and agent performance across the organization.'
      ],
      images: ['/images/ML.png', '/images/RF.png'],
      color: '#0066cc'
    },
    {
      title: 'Natural Language Processing',
      description: 'Unlocking meaning from text with cutting-edge NLP and Gen AI.',
      paragraphs: [
        'From sentiment analysis to named entity recognition, I build NLP systems that understand the nuances of human language. My experience includes both classical NLP techniques and modern transformer-based approaches.',
        'I have designed and deployed RAG (Retrieval-Augmented Generation) pipelines using AWS Bedrock with near-zero latency, enabling real-time AI assistance and knowledge retrieval at scale.',
        'My custom Agentic AI framework supports self-hostable models like Llama and smaller open-source alternatives, providing flexibility for organizations with specific deployment requirements.'
      ],
      images: ['/images/NLP.png'],
      color: '#22c55e'
    },
    {
      title: 'Computer Vision',
      description: 'Patent-holding expert in seeing the world through machines.',
      paragraphs: [
        'As first inventor of Patent GB2631290, I have developed revolutionary techniques for automated symbol extraction in construction schematics. This work was described as "revolutionary" by customers.',
        'My expertise spans object detection (YOLO, RCNN), image segmentation, OCR, and custom embedding models. I have built systems using Triplet Loss Siamese Networks and CLIP for image similarity at scale.',
        'From thermal imaging in defense systems at Excelitas to real-time production line monitoring at McLaren, my computer vision solutions operate in mission-critical environments where accuracy and speed are paramount.'
      ],
      images: ['/images/schematic.png', '/images/clip.png', '/images/triplet_loss.png', '/images/cheetir.png'],
      color: '#f97316'
    }
  ];

  const backgrounds = [
    '/images/background-var1.png',
    '/images/background-var2.png',
    '/images/background-var3.png',
    '/images/background-var4.png'
  ];
</script>

<svelte:head>
  <title>Expertise | Alexander Data Solutions Ltd</title>
  <meta name="description" content="Deep expertise in AI, Machine Learning, NLP, and Computer Vision. Patent holder with experience from McLaren Racing to defense systems." />
</svelte:head>

<div class="expertise-container">
  {#each slides as slide, index}
    <ExpertiseSlide {slide} {index} backgroundImage={backgrounds[index]} />
  {/each}
</div>

