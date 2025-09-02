import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Signup() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  });

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await axios.post('http://localhost:3002/Signup', formData, {
        withCredentials: true,
        headers: { "Content-Type": "application/json" }
      });

      if (res.data && res.data.success) {
        // save token if present
        if (res.data.token) localStorage.setItem("token", res.data.token);
        // determine role from response
        let role = res.data.role || res.data.user?.role;

        // if still not found, try parsing token (optional)
        if (!role && res.data.token) {
          try {
            const payload = JSON.parse(atob(res.data.token.split('.')[1]));
            // payload may be shaped oddly if token was signed incorrectly
            role = payload.role || payload?.id?.role;
          } catch (err) {
            // ignore parse errors
          }
        }

        role = role || 'user';
        localStorage.setItem("role", role);

        toast.success("Signup Successful! Redirecting...");

        setTimeout(() => {
          if (role === "admin") {
            navigate('/admindashboard'); // use the route name you use in React Router
          } else {
            navigate('/dashboard');
          }
        }, 800);
      } else {
        toast.error(res.data.message || "Signup failed");
      }
    } catch (error) {
      console.error("Signup error:", error);
      if (error.response && error.response.data) {
        toast.error(error.response.data.message || "Something went wrong!");
      } else {
        toast.error("Server error! Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };


  const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '90vh',
    background: 'linear-gradient(135deg, #7ea0d2ff 0%, #605e80ff 100%)',
    padding: '40px 20px',
  };

  const cardStyle = {
    backgroundColor: '#fff',
    padding: '40px 30px',
    borderRadius: '16px',
    boxShadow: '0 8px 30px rgba(0,0,0,0.15)',
    maxWidth: '400px',
    width: '100%',
    textAlign: 'center',
  };

  const titleStyle = {
    fontSize: '2.5rem',
    fontWeight: '700',
    marginBottom: '25px',
  };

  const highlightStyle = { color: '#0d6efd' };
  const inputStyle = {
    padding: '12px 15px',
    border: '1px solid #ddd',
    borderRadius: '8px',
    fontSize: '1rem',
    outline: 'none',
    marginBottom: '15px',
    width: '100%',
    transition: '0.3s ease',
  };
  const buttonStyle = {
    padding: '12px 15px',
    backgroundColor: '#0d6efd',
    color: '#fff',
    border: 'none',
    borderRadius: '8px',
    fontWeight: '600',
    fontSize: '1rem',
    cursor: 'pointer',
    width: '100%',
    transition: '0.3s ease',
  };
  const footerStyle = {
    marginTop: '15px',
    color: '#555',
    fontSize: '0.9rem',
  };
  const linkStyle = {
    color: '#0d6efd',
    textDecoration: 'none',
  };

  return (
    <div style={containerStyle}>
      <div style={cardStyle} data-aos="fade-up">
        <h1 style={titleStyle}>
          Sign<span style={highlightStyle}>up</span>
        </h1>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={formData.username}
            onChange={handleChange}
            required
            style={inputStyle}
          />
          <input
            type="email"
            name="email"
            placeholder="Enter Email"
            value={formData.email}
            onChange={handleChange}
            required
            style={inputStyle}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
            style={inputStyle}
          />
          <button
            type="submit"
            style={buttonStyle}
            onMouseOver={(e) => (e.currentTarget.style.backgroundColor = '#0b5ed7')}
            onMouseOut={(e) => (e.currentTarget.style.backgroundColor = '#0d6efd')}
            disabled={loading}
          >
            {loading ? "Signing up..." : "Signup"}
          </button>
        </form>

        <p style={footerStyle}>
          Already have an account?{' '}
          <Link to="/signup" style={linkStyle}>
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Signup;
