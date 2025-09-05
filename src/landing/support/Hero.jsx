import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import axios from "axios";

function Hero() {
  // Initialize AOS animation
  useEffect(() => {
    AOS.init({ duration: 2000, once: true });
  }, []);

  // Form state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Handle form input changes
  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("https://tradenest-orec.onrender.com/Support", formData);

      console.log("Support request sent:", response.data);
      alert("Support request submitted! Our team will get back to you shortly.");

      // Reset form
      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      console.error("Failed to submit support request:", error.response?.data || error.message);
      alert("There was an issue submitting your request. Please try again.");
    }
  };

  // Styles
  const sectionStyle = {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "60px 20px",
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "space-between",
  };

  const textStyle = {
    flex: "1 1 500px",
    marginBottom: "30px",
  };

  const formContainerStyle = {
    flex: "1 1 500px",
    backgroundColor: "#fff",
    padding: "30px 20px",
    borderRadius: "12px",
    boxShadow: "0 6px 18px rgba(0,0,0,0.1)",
  };

  const inputStyle = {
    width: "100%",
    padding: "10px 15px",
    marginBottom: "15px",
    borderRadius: "6px",
    border: "1px solid #ccc",
    fontSize: "1rem",
  };

  const textareaStyle = {
    ...inputStyle,
    resize: "vertical",
  };

  const buttonStyle = {
    width: "100%",
    padding: "12px 20px",
    backgroundColor: "#0d6efd",
    color: "#fff",
    border: "none",
    borderRadius: "6px",
    fontSize: "1rem",
    fontWeight: "600",
    cursor: "pointer",
    transition: "all 0.3s ease", // Smooth transition
  };

  return (
    <section style={sectionStyle}>
      {/* Text Section */}
      <div style={textStyle} data-aos="fade-right">
        <h1 style={{ fontSize: "2.5rem", fontWeight: "700" }}>
          We're Here to <span style={{ color: "#0d6efd" }}>Help</span>
        </h1>
        <p
          style={{
            fontSize: "1.1rem",
            color: "#555",
            marginTop: "15px",
            lineHeight: "1.6",
          }}
        >
          Have questions or need assistance? Our dedicated support team is
          available 24/7 to ensure your trading journey stays smooth.
        </p>
      </div>

      {/* Support Form Section */}
      <div style={formContainerStyle} data-aos="fade-left">
        <h4 style={{ marginBottom: "25px", fontWeight: "600" }}>
          Submit a Support Request
        </h4>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            style={inputStyle}
            required
            value={formData.name}
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            style={inputStyle}
            required
            value={formData.email}
            onChange={handleChange}
          />
          <textarea
            name="message"
            placeholder="Describe your issue..."
            rows="4"
            style={textareaStyle}
            required
            value={formData.message}
            onChange={handleChange}
          ></textarea>
          <button
            type="submit"
            style={buttonStyle}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = "scale(1.05) translateY(-3px)";
              e.currentTarget.style.boxShadow = "0 12px 30px rgba(0,0,0,0.25)";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.style.boxShadow = "0 8px 20px rgba(0,0,0,0.15)";
            }}
          >
            Send Request
          </button>
        </form>
      </div>
    </section>
  );
}

export default Hero;
