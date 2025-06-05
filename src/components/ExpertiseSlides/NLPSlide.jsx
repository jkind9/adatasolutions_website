// src/components/slides/NLPSlide.jsx
import React from 'react';
import '../../styles/Slides.css';
import SlideContent from '../UI/SlideContent';
import nlpDemo1 from '../../assets/images/NLP.png';

export default function NLPSlide() {
  const paragraphs = [
    `I have experience with RAG pipelines, named entity recognition (NER), tokenization, summarization, and other core NLP techniques. I build chatbots, sentiment-analysis engines, and text-classification models using transformer architectures (BERT, GPT-based LLMs) and libraries like spaCy and Hugging Face.`,
  
    `My work includes fine-tuning language models for industry-specific terminology, implementing NER and summarization pipelines, and deploying low-latency inference endpoints. From preprocessing raw text to integrating retrieval-augmented generation, I help extract meaning from unstructured data and deliver responsive, AI-powered experiences.`
  ];
  

  const imageEntries = [
    {
      src: nlpDemo1,
      alt: 'Chatbot architecture diagram',
      caption: 'End-to-End Chatbot Architecture',
    },

  ];

  return (
    <SlideContent
    title="NLP"
    paragraphs={paragraphs}
    images={imageEntries}
    />
  );
}
