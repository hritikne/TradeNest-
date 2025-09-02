import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function AnimatedCard({ img, title, description, animation = "fade-right", reverse = false }) {
  useEffect(() => {
    AOS.init({
      duration: 2000,
      once: true,
    });
  }, []);

  return (
    <div
      data-aos={animation}
      style={{
        display: "flex",
        flexDirection: reverse ? "row-reverse" : "row",
        alignItems: "center",
        justifyContent: "center",
        gap: "40px",
        padding: "50px 20px",
        maxWidth: "1200px",
        margin: "50px auto",
      }}
    >
      {/* Image Section */}
      <div style={{ flex: "1", textAlign: "center" }}>
        <img
          src={img}
          alt={title}
          style={{
            width: "300px",
            maxWidth: "100%",
            borderRadius: "12px",
            boxShadow: "0 6px 18px rgba(0,0,0,0.15)",
          }}
        />
      </div>

      {/* Text Section */}
      <div style={{ flex: "1", textAlign: "left" }}>
        <h3
          style={{
            fontSize: "1.8rem",
            fontWeight: "700",
            marginBottom: "15px",
            color: "#0d6efd",
          }}
        >
          {title}
        </h3>
        <p style={{ fontSize: "1rem", color: "#555", lineHeight: "1.6" }}>
          {description}
        </p>
      </div>
    </div>
  );
}

export default AnimatedCard;
