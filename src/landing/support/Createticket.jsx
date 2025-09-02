import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Createticket() {
  useEffect(() => {
    AOS.init({ duration: 2000, once: true });
  }, []);

  const featureCardStyle = {
    flex: "1 1 300px",
    backgroundColor: "#fff",
    borderRadius: "12px",
    padding: "30px 20px",
    boxShadow: "0 6px 18px rgba(0,0,0,0.1)",
    margin: "15px",
    textAlign: "center",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
  };

  const iconStyle = {
    fontSize: "2.5rem",
    color: "#0d6efd",
    marginBottom: "15px",
  };

  const titleStyle = {
    fontWeight: "600",
    fontSize: "1.2rem",
    marginBottom: "10px",
    color: "#222",
  };

  const descStyle = {
    color: "#555",
    fontSize: "1rem",
    lineHeight: "1.6",
  };

  return (
    <section style={{ padding: "80px 20px", backgroundColor: "#f8f9fa" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", textAlign: "center" }}>
        <h2 style={{ fontSize: "2.2rem", fontWeight: "700", marginBottom: "50px", color: "#0d6efd" }}>
          Exceptional <span style={{ color: "#0d6efd" }}>Support</span> You Can Count On
        </h2>

        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
          {/* Feature 1 */}
          <div style={featureCardStyle} data-aos="fade-up">
            <i className="fa fa-headphones" style={iconStyle}></i>
            <h5 style={titleStyle}>24/7 Availability</h5>
            <p style={descStyle}>
              Our support team is always ready to assist, any time of day or night.
            </p>
          </div>

          {/* Feature 2 */}
          <div style={featureCardStyle} data-aos="fade-up" data-aos-delay="100">
            <i className="fa fa-comments" style={iconStyle}></i>
            <h5 style={titleStyle}>Live Chat</h5>
            <p style={descStyle}>
              Chat with us instantly for quick resolutions to your issues.
            </p>
          </div>

          {/* Feature 3 */}
          <div style={featureCardStyle} data-aos="fade-up" data-aos-delay="200">
            <i className="fa fa-envelope" style={iconStyle}></i>
            <h5 style={titleStyle}>Email Assistance</h5>
            <p style={descStyle}>
              Prefer email? We respond promptly with helpful, detailed answers.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Createticket;
