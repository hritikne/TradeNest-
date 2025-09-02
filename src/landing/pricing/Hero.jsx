import React from 'react';

function Hero() {
  const cardStyle = {
    flex: '1 1 300px',
    backgroundColor: '#fff',
    borderRadius: '16px',
    padding: '30px 20px',
    boxShadow: '0 6px 18px rgba(0,0,0,0.08)',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    textAlign: 'center',
    margin: '15px',
  };

  const highlightCard = {
    ...cardStyle,
    border: '2px solid #0d6efd',
    transform: 'scale(1.05)',
  };

  return (
    <section style={{ padding: '80px 20px', backgroundColor: '#f1f5f9' }} id="pricing">
      <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
        
        {/* Title */}
        <h2 
          style={{ fontSize: '2.5rem', fontWeight: '700', marginBottom: '50px', color: '#0d6efd' }} 
        >
          💳 Pricing Plans
        </h2>

        {/* Pricing Cards */}
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
          
          {/* Card 1 */}
          <div 
            style={cardStyle} 
            onMouseOver={(e) => {
              e.currentTarget.style.transform = 'translateY(-10px)';
              e.currentTarget.style.boxShadow = '0 12px 25px rgba(0,0,0,0.15)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 6px 18px rgba(0,0,0,0.08)';
            }}
          >
            <h2 style={{ fontSize: '2.2rem', color: '#0d6efd', marginBottom: '15px' }}>₹0</h2>
            <h3 style={{ fontSize: '1.3rem', marginBottom: '15px', fontWeight: '600' }}>Free Equity Delivery</h3>
            <p style={{ color: '#555', fontSize: '1rem' }}>
              All equity delivery investments (NSE, BSE), are absolutely free — ₹0 brokerage.
            </p>
          </div>

          {/* Card 2 (Highlight) */}
          <div 
            style={highlightCard} 
            onMouseOver={(e) => {
              e.currentTarget.style.transform = 'scale(1.08)';
              e.currentTarget.style.boxShadow = '0 14px 28px rgba(0,0,0,0.2)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = 'scale(1.05)';
              e.currentTarget.style.boxShadow = '0 6px 18px rgba(0,0,0,0.08)';
            }}
          >
            <h2 style={{ fontSize: '2.2rem', color: '#0d6efd', marginBottom: '15px' }}>₹20</h2>
            <h3 style={{ fontSize: '1.3rem', marginBottom: '15px', fontWeight: '600' }}>Intraday & F&O Trades</h3>
            <p style={{ color: '#555', fontSize: '1rem' }}>
              Flat ₹20 or 0.03% (whichever is lower) per executed order on intraday trades across equity,
              currency, and commodity trades. Flat ₹20 on all option trades.
            </p>
          </div>

          {/* Card 3 */}
          <div 
            style={cardStyle} 
            onMouseOver={(e) => {
              e.currentTarget.style.transform = 'translateY(-10px)';
              e.currentTarget.style.boxShadow = '0 12px 25px rgba(0,0,0,0.15)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 6px 18px rgba(0,0,0,0.08)';
            }}
          >
            <h2 style={{ fontSize: '2.2rem', color: '#0d6efd', marginBottom: '15px' }}>₹0</h2>
            <h3 style={{ fontSize: '1.3rem', marginBottom: '15px', fontWeight: '600' }}>Free Direct MF</h3>
            <p style={{ color: '#555', fontSize: '1rem' }}>
              All direct mutual fund investments are absolutely free — ₹0 commissions & DP charges.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
