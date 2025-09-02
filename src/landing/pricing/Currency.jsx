import React from "react";
import Brokrege from "./Brokrege";
import Hero from "./Hero";
import Pages from "./Pages";

function Currency() {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", backgroundColor: "#f9f9f9" }}>
      <Hero />
      <Brokrege />

      <div style={{ textAlign: "center", margin: "40px 0" }}>
        <h2 style={{ fontSize: "1.8rem", marginBottom: "20px", color: "#333" }}>
          Currency Charges
        </h2>
        <img
          src="/media/image/Screenshot%20(173).png"
          alt="Currency charges"
          style={{
            display: "block",
            margin: "0 auto",
            maxWidth: "900px",
            width: "100%",
            borderRadius: "10px",
            boxShadow: "0px 6px 16px rgba(0,0,0,0.1)",
          }}
        />
      </div>

      <Pages />
    </div>
  );
}

export default Currency;
