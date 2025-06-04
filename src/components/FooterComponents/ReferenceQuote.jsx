import React from 'react';

/**
 * Props
 *  • quote (string) – the testimonial
 *  • author (string) – person’s name
 */
export default function ReferenceQuote({ quote, author }) {
  return (
    <figure
      style={{
        background: '#fff',
        color: '#000',
        borderLeft: '4px solid #000',
        padding: '1rem 1rem',
        margin: 0,
      }}
    >
      <blockquote
        style={{
          margin: 0,
          fontSize: '1.125rem',
          fontWeight: 500,
          lineHeight: 1.6,
        }}
      >
        “{quote}”
      </blockquote>
      <figcaption
        style={{
          marginTop: '0.5rem',
          fontSize: '0.5rem',
          fontWeight: 600,
          opacity: 0.8,
        }}
      >
        — {author}
      </figcaption>
    </figure>
  );
}
