// src/components/Footer.jsx
import React from 'react';
import Banner from '../UI/Banner';
import ReferenceQuote from './ReferenceQuote';
import '../../styles/Footer.css';

const slides = [
  {
    Component: ReferenceQuote,
    props: {
      quote: 'An asset to any business especially in the AI space',
      author: 'John White, Ex-CTO @ Chetwood Financial Limited',
    },
    bgColor: '#004080',
  },
  {
    Component: ReferenceQuote,
    props: {
      quote: 'An absolute nerd, but in the best way possible',
      author:
        'Rakeem Morgan-Cornibert, Head of Systems Analytics @ Intrum',
    },
    bgColor: '#004080',
  },
  {
    Component: ReferenceQuote,
    props: {
      quote: 'Excellent contractor/consultant - genuinely loves his projects.',
      author:
        'Jonathan Goulstine, CEO @ Ensign Advanced Systems Ltd',
    },
    bgColor: '#004080',
  }
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <Banner slides={slides} interval={15000} />
      </div>
    </footer>
  );
}
