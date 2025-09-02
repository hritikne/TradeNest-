import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <section style={{ padding: '80px 20px', backgroundColor: '#f8f9fa', minHeight: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ maxWidth: '800px', textAlign: 'center' }}>
        <h2 style={{ fontSize: '2.5rem', fontWeight: '700', marginBottom: '20px', color: '#0d6efd' }}>
          404 - Page Not Found
        </h2>
        <p style={{ fontSize: '1.2rem', color: '#555', marginBottom: '30px' }}>
          The page you are looking for does not exist or has been moved. Please check the URL or return to the homepage.
        </p>
        <Link 
          to="/"
          style={{ 
            display: 'inline-block',
            backgroundColor: '#0d6efd',
            color: '#fff',
            padding: '12px 28px',
            borderRadius: '8px',
            textDecoration: 'none',
            fontWeight: '600',
            fontSize: '1rem',
            transition: '0.3s ease'
          }}
          onMouseOver={(e) => e.target.style.backgroundColor = '#0b5ed7'}
          onMouseOut={(e) => e.target.style.backgroundColor = '#0d6efd'}
        >
          Go to HomePage <i className="fa fa-arrow-right" style={{ marginLeft: '8px' }}></i>
        </Link>
      </div>
    </section>
  );
}

export default NotFound;
