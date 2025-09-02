import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function HeroSection() {
  useEffect(() => {
    AOS.init({ duration: 1200, once: true });
    AOS.refresh();
  }, []);

  return (
    <section
      style={{
        padding: '80px 20px',
        background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)',
      }}
    >
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
        }}
      >
        {/* Left Side Text */}
        <div
          style={{ flex: '1 1 500px', paddingRight: '20px' }}
          data-aos="fade-right"
        >
          <h1
            style={{
              fontSize: '3rem',
              fontWeight: '800',
              marginBottom: '20px',
              lineHeight: '1.2',
              color: '#212529',
            }}
          >
            Invest Smarter with{' '}
            <span style={{ color: '#0d6efd' }}>TradeNest</span>
          </h1>
          <p
            style={{
              fontSize: '1.2rem',
              marginBottom: '30px',
              color: '#495057',
              maxWidth: '500px',
            }}
          >
            A modern trading platform built for beginners and pros. Simple,
            lightning-fast, and powerful — all in one place.
          </p>
          <a
            href="/signup"
            style={{
              display: 'inline-block',
              background: 'linear-gradient(90deg, #0d6efd, #0b5ed7)',
              color: '#fff',
              fontSize: '1.1rem',
              fontWeight: '600',
              padding: '14px 32px',
              borderRadius: '10px',
              textDecoration: 'none',
              boxShadow: '0 4px 12px rgba(13, 110, 253, 0.3)',
              transition: 'all 0.3s ease',
            }}
            onMouseOver={(e) => {
              e.target.style.transform = 'translateY(-3px)';
              e.target.style.boxShadow = '0 6px 18px rgba(13, 110, 253, 0.5)';
            }}
            onMouseOut={(e) => {
              e.target.style.transform = 'translateY(0)';
              e.target.style.boxShadow = '0 4px 12px rgba(13, 110, 253, 0.3)';
            }}
          >
             Get Started Free
          </a>
        </div>

        {/* Right Side Image */}
        <div
          style={{ flex: '1 1 500px', textAlign: 'center' }}
          data-aos="fade-left"
        >
          <img
            src="/media/image/homeHero.png"
            alt="TradeNest Hero"
            style={{
              width: '100%',
              maxWidth: '650px',
              borderRadius: '16px',
              boxShadow: '0 8px 20px rgba(0,0,0,0.15)',
              transition: 'all 0.3s ease', // Smooth transition
               transform: 'scale(1)',
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = 'scale(1.05) translateY(-3px)';
              e.currentTarget.style.boxShadow = '0 12px 30px rgba(0,0,0,0.25)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
              e.currentTarget.style.boxShadow = '0 8px 20px rgba(0,0,0,0.15)';
            }}
          />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
