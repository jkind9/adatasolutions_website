// src/components/HomePage.jsx

import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import { Code2, CloudCheck, BrainCircuit } from 'lucide-react';
import '../styles/Homepage.css';

export default function HomePage() {
  const features = [
    {
      icon: <Code2 size={48} />,
      title: 'Software Development',
      desc: 'Tailored front-end connected to back-end API development.',
    },
    {
      icon: <CloudCheck size={48} />,
      title: 'Cloud Solutions',
      desc: 'Scalable, secure cloud infrastructure.',
    },
    {
      icon: <BrainCircuit size={48} />,
      title: 'Machine Learning & Data Science',
      desc: 'Insights and models to drive informed decisions.',
    },
  ];

  return (
    <div className="homepage-container">
      <div className="homepage-main">
        <div className="homepage-intro">
          <Typography component="h1" className="homepage-intro-title">
            Innovative Tech Solutions
          </Typography>
          <Typography component="p" className="homepage-intro-text">
            We deliver cutting-edge technology consulting services, from software development and cloud solutions to data analytics and machine learning.
          </Typography>
        </div>

        <div className="homepage-features-wrapper">
          <div className="homepage-features">
            {features.map((feature, idx) => (
              <Card className="homepage-card" key={idx}>
                <CardContent className="homepage-card-content">
                  <div className="feature-icon">{feature.icon}</div>
                  <Typography component="h2" className="feature-title">
                    {feature.title}
                  </Typography>
                  <Typography component="p" className="feature-text">
                    {feature.desc}
                  </Typography>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
