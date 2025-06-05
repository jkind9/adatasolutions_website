// src/components/ReferenceQuote.jsx

import React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import '../../styles/ReferenceQuote.css';

export default function ReferenceQuote({ quote, author }) {
  return (
    <Box
      component="figure"
      sx={{
        textAlign: 'center',
        p: 2,            // padding: theme.spacing(2)
        m: 0,            // reset default margins
      }}
    >
      <Typography
        component="blockquote"
        variant="body1"
        sx={{
          fontStyle: 'italic',
          mb: 1,         // margin-bottom: theme.spacing(1)
        }}
      >
        “{quote}”
      </Typography>

      <Typography
        component="figcaption"
        variant="subtitle2"
        sx={{ fontWeight: 200 }}
      >
        — {author}
      </Typography>
    </Box>
  );
}

ReferenceQuote.propTypes = {
  quote: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};
