// HomePage.jsx
import React from 'react';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { motion } from 'framer-motion';
import { Code2, Cloud, BarChart2 } from 'lucide-react';
import '../styles/Homepage.css';

export default function HomePage() {
  return (
    <div className="homepage-container">
      <main className="homepage-main">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 5 }}
          className="homepage-intro"
        >
          <h2>Innovative Tech Solutions</h2>
          <p>
            We deliver cutting-edge technology consulting services, from software development and cloud solutions to data analytics and machine learning.
          </p>
          <Button variant="contained" size="large">Schedule a Consultation</Button>
        </motion.div>

        <section className="homepage-features-wrapper">
          <div className="homepage-features">
            {[{
              icon: <Code2 size={48} />, title: 'Software Development', desc: 'Tailored web and mobile applications.'
            }, {
              icon: <Cloud size={48} />, title: 'Cloud Solutions', desc: 'Scalable, secure cloud infrastructure.'
            }, {
              icon: <BarChart2 fontSize="large" />, title: 'Data Analytics', desc: 'Insights to drive informed decisions.'
            }].map((feature, idx) => (
              <Card key={idx} className="homepage-card">
                <CardContent className="homepage-card-content">
                  {feature.icon}
                  <h3>{feature.title}</h3>
                  <p>{feature.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

