import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; 

function OpenAccount() {
  useEffect(() => {
    AOS.init({ duration: 3000, once: true });
    AOS.refresh();
  }, []);

  return (
    <section style={{ backgroundColor: '#f8f9fa', padding: '60px 0' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
        <div 
          style={{ display: 'flex', justifyContent: 'center' }} 
          data-aos="fade-right"
        >
          <div style={{ width: '100%', maxWidth: '700px' }}>
            <h2 style={{ fontWeight: '700', marginBottom: '20px', fontSize: '2rem' }}>
              Ready to start investing?
            </h2>
            <p style={{ fontSize: '1.1rem', marginBottom: '25px', color: '#333' }}>
              Open your free Demat & Trading account in minutes and take the first step towards smart investing.
            </p>
            <a 
              href="#" 
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
              Open Account Now <i className="fa fa-arrow-right" style={{ marginLeft: '8px' }}></i>
            </a>
            <p style={{ marginTop: '15px', fontSize: '14px', color: '#6c757d' }}>
              ₹0 account opening fee. No hidden charges.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OpenAccount;
