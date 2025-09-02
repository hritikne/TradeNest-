import React, { useEffect, useState } from "react";
import AOS from "aos";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "aos/dist/aos.css";

function Login() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState(""); // <-- optional field
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const response = await axios.post(
        "http://localhost:3002/Login",
        { email, password, name }, // send name also (optional)
        {
          withCredentials: true,
          headers: { "Content-Type": "application/json" },
        }
      );

      localStorage.setItem("token", response.data.token);

      alert("Login successful!");
      navigate("/dashboard");
    } catch (err) {
      if (err.response && err.response.data) {
        setError(err.response.data.message);
      } else {
        setError("Something went wrong. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  // ------------------ CSS ------------------
  const containerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
    backgroundColor: "#f8f9fa",
    padding: "20px",
  };

  const cardStyle = {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    maxWidth: "900px",
    width: "100%",
    backgroundColor: "#fff",
    borderRadius: "16px",
    boxShadow: "0 8px 30px rgba(0,0,0,0.12)",
    overflow: "hidden",
  };

  const imageStyle = {
    flex: "1 1 50%",
    backgroundImage: "url(/media/image/varsity.png)",
    backgroundPosition: "center",
    backgroundSize: "cover",
    minHeight: "400px",
    minWidth: "300px",
  };

  const formStyle = {
    flex: "1 1 50%",
    padding: "40px 30px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    minWidth: "300px",
  };

  const inputStyle = {
    padding: "12px 15px",
    border: "1px solid #ddd",
    borderRadius: "8px",
    marginBottom: "15px",
    fontSize: "1rem",
    outline: "none",
  };

  const buttonStyle = {
    padding: "12px 15px",
    background: 'linear-gradient(90deg, #0d6efd, #0b5ed7)',
    color: "#fff",
    border: "none",
     boxShadow: '0 4px 12px rgba(13, 110, 253, 0.3)',
    borderRadius: "8px",
    fontWeight: "600",
    fontSize: "1rem",
    cursor: "pointer",
    width: "100%",
  };

  const errorStyle = {
    color: "red",
    fontSize: "0.9rem",
    textAlign: "center",
    marginBottom: "10px",
  };

  return (
    <div style={containerStyle}>
      <div style={cardStyle} data-aos="fade-up">
        <div style={imageStyle}></div>
        <div style={formStyle}>
          <h2
            style={{
              fontSize: "2rem",
              fontWeight: "700",
              marginBottom: "25px",
              textAlign: "center",
            }}
          >
            Welcome Back <span style={{ color: "#0d6efd" }}>Trader</span>
          </h2>

          {error && <p style={errorStyle}>{error}</p>}

          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Name (Optional For user)"
              value={name}
              onChange={(e) => setName(e.target.value)}
              style={inputStyle}
            />

            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              style={inputStyle}
            />

            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              style={inputStyle}
            />

            <button
              type="submit"
              style={buttonStyle}
              disabled={loading}
              onMouseOver={(e) =>
                (e.currentTarget.style.backgroundColor = "#0b5ed7")
              }
              onMouseOut={(e) =>
                (e.currentTarget.style.backgroundColor = "#0d6efd")
              }
            >
              {loading ? "Logging in..." : "Log In"}
            </button>
          </form>

          <p
            style={{
              textAlign: "center",
              marginTop: "15px",
              color: "#555",
            }}
          >
            Don't have an account?{" "}
            <Link
              to="/login"
              style={{ color: "#0d6efd", textDecoration: "none" }}
            >
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
