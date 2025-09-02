import React, { useState } from "react";
import { Link } from "react-router-dom";

function NavBar() {
  const [activeIndex, setActiveIndex] = useState(null); // track which nav item is active
  const colors = ["#e67e22", "#2ecc71", "#9b59b6", "#1abc9c"];

  const handleToggle = (index) => {
    setActiveIndex(index); // set clicked item as active
  };

  return (
    <div className="bg-white shadow-sm py-2">
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg px-4">
        <Link className="navbar-brand fw-bold fs-4 text-primary" to={"/"}>
          <i className="fa fa-line-chart me-2"></i>TradeNest
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNav"
        >
          <ul className="navbar-nav align-items-center">
            <li className="nav-item mx-2">
              <Link
                className="nav-link fw-medium"
                to={"/product"}
                style={{
                  color: activeIndex === 0 ? colors[0] : "black",
                }}
                onClick={() => handleToggle(0)}
              >
                Product
              </Link>
            </li>
            <li className="nav-item mx-2">
              <Link
                className="nav-link fw-medium"
                to={"/equity"}
                style={{
                  color: activeIndex === 1 ? colors[1] : "black",
                }}
                onClick={() => handleToggle(1)}
              >
                Pricing
              </Link>
            </li>
            <li className="nav-item mx-2">
              <Link
                className="nav-link fw-medium"
                to={"/about"}
                style={{
                  color: activeIndex === 2 ? colors[2] : "black",
                }}
                onClick={() => handleToggle(2)}
              >
                About
              </Link>
            </li>
            <li className="nav-item mx-2">
              <Link
                className="nav-link fw-medium"
                to={"/support"}
                style={{
                  color: activeIndex === 3 ? colors[3] : "black",
                }}
                onClick={() => handleToggle(3)}
              >
                Support
              </Link>
            </li>
            <li className="nav-item mx-2">
              <Link className="" to={"/signUp"} style={{
                display: 'inline-block',
                background: 'linear-gradient(90deg, #0d6efd, #0b5ed7)',
                color: '#fff',
                fontSize: '1.1rem',
                fontWeight: '600',
                padding: '11px 28px',
                borderRadius: '10px',
                textDecoration: 'none',
                boxShadow: '0 4px 12px rgba(13, 110, 253, 0.3)',
                transition: 'all 0.3s ease',
              }} onMouseOver={(e) => {
                e.target.style.transform = 'translateY(-3px)';
                e.target.style.boxShadow = '0 6px 18px rgba(13, 110, 253, 0.5)';
              }}
                onMouseOut={(e) => {
                  e.target.style.transform = 'translateY(0)';
                  e.target.style.boxShadow = '0 4px 12px rgba(13, 110, 253, 0.3)';
                }}>
                Log in
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
