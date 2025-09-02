import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Home.css';

function Pricing() {
  useEffect(() => {
    AOS.init({ duration: 2000, once: true });
    AOS.refresh();
  }, []);

  return (
    <section className="pricing-section">
      <div className="pricing-container">
        <div className="pricing-row">
          
          <div className="pricing-text" data-aos="fade-right">
            <h2>Unbeatable Pricing</h2>
            <p>
              We pioneered the concept of discount broking and price transparency in India.
              Flat fees and no hidden charges.
            </p>
            <a href="http://localhost:5173/equity" className="pricing-link">
              See Pricing <i className="fa fa-long-arrow-right"></i>
            </a>
          </div>

          <div className="pricing-boxes">
            <div className="pricing-card" data-aos="fade-up">
              <h2><i className="fa fa-inr"></i>0</h2>
              <p>Free account opening</p>
            </div>
            <div className="pricing-card" data-aos="fade-up">
              <h2><i className="fa fa-inr"></i>0</h2>
              <p>Free equity delivery <br /> and direct mutual funds</p>
            </div>
            <div className="pricing-card" data-aos="fade-up">
              <h2><i className="fa fa-inr"></i>20</h2>
              <p>Intraday and F&amp;O</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Pricing;
