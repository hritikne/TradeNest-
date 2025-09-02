import React from 'react';

function Hero() {
  return (
    <div
      style={{
        maxWidth: "900px",
        margin: "50px auto",
        padding: "50px 20px",
        textAlign: "center",
      }}
    >
      <h2
        style={{
          fontSize: "2rem",
          fontWeight: "700",
          marginBottom: "20px",
          color: "#222",
        }}
      >
        Empowering Your{" "}
        <span style={{ color: "#0d6efd" }}>Trading</span> Journey
      </h2>
      <p
        style={{
          fontSize: "1rem",
          color: "#555",
          lineHeight: "1.6",
          maxWidth: "700px",
          margin: "0 auto",
        }}
      >
        TradeNest is a powerful trading platform built for beginners and pros. Manage assets, analyze charts, and execute trades—all in one place.
      </p>
    </div>
  );
}

export default Hero;
