// src/components/ReferenceQuote.jsx

import React from 'react';
import PropTypes from 'prop-types';
import '../../styles/ReferenceQuote.css';

export default function ReferenceQuote({ quote, author }) {
  return (
    <figure className="reference-figure">
      <blockquote>“{quote}”</blockquote>
      <figcaption>— {author}</figcaption>
    </figure>
  );
}

ReferenceQuote.propTypes = {
  quote: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};