import React from 'react';
import './Home.css';

function Award() {
  return (
    <section className="award-section">
      <div className="award-container">
        <h2 className="award-title" data-aos="fade-up">
          Why Choose <span className="highlight">TradeNest?</span>
        </h2>

        <div className="award-grid">
          <div className="award-card" data-aos="fade-up">
            <div className="award-icon"><i className="fa fa-bolt"></i></div>
            <h5>Fast Execution</h5>
            <p>Trade at lightning speed with our robust backend systems.</p>
          </div>

          <div className="award-card" data-aos="fade-up" data-aos-delay="100">
            <div className="award-icon"><i className="fa fa-bar-chart"></i></div>
            <h5>Real-time Data</h5>
            <p>Get live market data and analytics instantly.</p>
          </div>

          <div className="award-card" data-aos="fade-up" data-aos-delay="200">
            <div className="award-icon"><i className="fa fa-lock"></i></div>
            <h5>Secure Platform</h5>
            <p>Your data and investments are encrypted & protected.</p>
          </div>

          <div className="award-card" data-aos="fade-up" data-aos-delay="300">
            <div className="award-icon"><i className="fa fa-mobile"></i></div>
            <h5>Mobile Friendly</h5>
            <p>Trade anytime, anywhere from your phone or tablet.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Award;
