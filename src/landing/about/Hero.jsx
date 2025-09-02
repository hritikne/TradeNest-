import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './About.css';

function Hero() {
  useEffect(() => {
    AOS.init({
      duration: 2000,
      once: true,
    });
  }, []);

  return (
    <div className="hero-section" data-aos="fade-up">
      <h2 className="hero-title">
        About <span>TradeNest</span>
      </h2>
      <p className="hero-subtitle">
        TradeNest is your trusted partner in the world of stock trading and investment. 
        Our mission is to empower traders and investors of all levels with the tools and 
        insights they need to make smarter financial decisions.
      </p>

      <div className="hero-row">
        <div className="hero-card">
          <h5><i className="fa fa-bolt"></i> Our Mission</h5>
          <p>
            We aim to simplify trading for everyone by offering a fast, secure, and 
            intuitive platform powered by real-time data and smart insights.
          </p>
        </div>

        <div className="hero-card">
          <h5><i className="fa fa-globe"></i> Our Vision</h5>
          <p>
            To become the most user-friendly and innovative trading platform, helping 
            users achieve their financial goals through technology.
          </p>
        </div>
      </div>

      <div className="hero-row">
        <div className="hero-card">
          <h5><i className="fa fa-shield"></i> Trusted Security</h5>
          <p>
            We prioritize the protection of your data and transactions with top-tier encryption.
          </p>
        </div>

        <div className="hero-card">
          <h5><i className="fa fa-bar-chart"></i> Data Driven</h5>
          <p>
            Make better decisions with access to accurate and real-time analytics.
          </p>
        </div>

        <div className="hero-card">
          <h5><i className="fa fa-users"></i> Customer First</h5>
          <p>
            Our support team is here to help you 24/7 with any query or concern.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
