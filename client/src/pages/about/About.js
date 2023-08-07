// src/pages/About.js

import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-page">
      <h1 className="about-title">About Sustain-A-Plate</h1>
      <section className="about-section">
        <h2>Our Mission</h2>
        <p>
          At Sustain-A-Plate, our mission is to turn waste into wonder. We believe in the power of sustainable food practices to make a positive impact on our world. Our platform provides a simple and effective way for individuals and businesses to donate surplus food to those who need it most.
        </p>
      </section>

      <section className="about-section">
        <h2>Our History</h2>
        <p>
          Founded in 2021, we started as a small project driven by a passionate group of individuals concerned about the levels of food waste in our society. Since then, Sustain-A-Plate has grown to become a key player in the fight against food waste and hunger. 
        </p>
      </section>

      <section className="about-section">
        <h2>Join the Movement</h2>
        <p>
          By participating in Sustain-A-Plate, you're helping to reduce food waste, combat hunger, and contribute to a more sustainable future. Together, we can make a difference!
        </p>
      </section>
    </div>
  );
};

export default About;
