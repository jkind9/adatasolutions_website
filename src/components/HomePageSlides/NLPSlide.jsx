// src/components/slides/NLPSlide.jsx
import React from 'react';
import '../Styles/Slides.css';
import SlideContent from './SlideContent';
import nlpDemo1 from '../../assets/images/NLP.png';

export default function NLPSlide() {
  const paragraphs = [
    `Understanding and automating human language is at the core of our NLP services. We build chatbots, sentiment-analysis engines, and custom text-classification models using state-of-the-art transformer architectures (BERT, GPT-based LLMs) and libraries like spaCy and Hugging Face.`,
    `Our solutions include fine-tuned language models for industry-specific terminology, knowledge-base–driven conversational assistants, and retrieval-augmented generation (RAG) pipelines that surface relevant documents in real time. From pre-processing raw text to deploying low-latency inference endpoints, our NLP offerings help you extract meaning from unstructured data and deliver responsive, AI-powered experiences for your customers and employees.`
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
