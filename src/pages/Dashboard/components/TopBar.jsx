import React, { useState } from "react";
import { Link } from "react-router-dom";

const TopBar = () => {
  const [selectedMenu, setSelectedMenu] = useState(0);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);

  const handleMenuClick = (index) => {
    setSelectedMenu(index);
  };

  const handleProfileClick = () => {
    setIsProfileDropdownOpen(!isProfileDropdownOpen);
  };

  const menuStyle = (active) => ({
    padding: "12px 15px",
    cursor: "pointer",
    borderBottom: active ? "3px solid #0097e6" : "3px solid transparent",
    color: active ? "#0097e6" : "#1e1e2f",
    fontWeight: active ? 600 : 500,
    transition: "all 0.3s",
  });

  return (
    <div style={{ width: "100%", backgroundColor: "#f5f6fa", boxSizing: "border-box" }}>
      {/* Header Section */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "15px 20px",
          backgroundColor: "#fff",
          boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          zIndex: 100,
        }}
      >
        {/* Left Header */}
        <h3 style={{ margin: 0, fontSize: "20px", fontWeight: "600", color: "#1e1e2f" }}>
          Market Watch <span style={{ color: "#e84118", fontWeight: "500" }}>Live</span>
        </h3>

        {/* Right Header */}
        <p style={{ margin: 0, color: "#7f8fa6", fontWeight: "500" }}>NIFTY & SENSEX Updates</p>
      </div>

      {/* Indices Section */}
      <div
        style={{
          display: "flex",
          gap: "20px",
          padding: "15px 20px",
          backgroundColor: "#f5f6fa",
          position: "fixed",
          top: "65px",
          left: 0,
          width: "100%",
          zIndex: 99,
        }}
      >
        <div
          style={{
            backgroundColor: "#ffffff",
            padding: "10px 15px",
            borderRadius: "8px",
            boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
            flex: "0 0 150px",
          }}
        >
          <p style={{ margin: 0, fontSize: "14px", color: "#7f8fa6" }}>NIFTY 50</p>
          <p style={{ margin: "5px 0 0", fontSize: "18px", fontWeight: "600", color: "#44bd32" }}>100.2</p>
        </div>

        <div
          style={{
            backgroundColor: "#ffffff",
            padding: "10px 15px",
            borderRadius: "8px",
            boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
            flex: "0 0 150px",
          }}
        >
          <p style={{ margin: 0, fontSize: "14px", color: "#7f8fa6" }}>SENSEX</p>
          <p style={{ margin: "5px 0 0", fontSize: "18px", fontWeight: "600", color: "#e84118" }}>100.2</p>
        </div>
      </div>

      {/* Navigation Menu */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          backgroundColor: "#fff",
          padding: "10px 20px",
          borderTop: "1px solid #eaeaea",
          boxShadow: "0 2px 6px rgba(0,0,0,0.05)",
          position: "fixed",
          top: "130px",
          left: 0,
          width: "100%",
          zIndex: 98,
        }}
      >
        {/* Logo */}
        <div>
          <img src="/logo.png" alt="logo" style={{ width: "50px" }} />
        </div>

        {/* Navigation */}
        <ul style={{ display: "flex", listStyle: "none", gap: "20px", margin: 0, padding: 0 }}>
          {["Dashboard", "Orders", "Holdings", "Positions", "Funds", "Apps"].map((item, index) => (
            <li key={index}>
              <Link to={`/dashboard/${item.toLowerCase()}`} style={{ textDecoration: "none" }}>
                <span style={menuStyle(selectedMenu === index)} onClick={() => handleMenuClick(index)}>
                  {item}
                </span>
              </Link>
            </li>
          ))}
        </ul>

        {/* Profile */}
        <div
          style={{ display: "flex", alignItems: "center", cursor: "pointer", position: "relative" }}
          onClick={handleProfileClick}
        >
          <div
            style={{
              width: "35px",
              height: "35px",
              borderRadius: "50%",
              backgroundColor: "#0097e6",
              color: "#fff",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginRight: "10px",
              fontWeight: "600",
            }}
          >
            ZU
          </div>
          <p style={{ margin: 0, fontWeight: "500", color: "#1e1e2f" }}>USERID</p>

          {/* Dropdown */}
          {isProfileDropdownOpen && (
            <div
              style={{
                position: "absolute",
                top: "45px",
                right: 0,
                backgroundColor: "#fff",
                border: "1px solid #dcdde1",
                borderRadius: "8px",
                boxShadow: "0 2px 6px rgba(0,0,0,0.15)",
                width: "150px",
                zIndex: 10,
              }}
            >
              <p style={{ padding: "10px", margin: 0, cursor: "pointer", borderBottom: "1px solid #f1f2f6" }}>Profile</p>
              <p style={{ padding: "10px", margin: 0, cursor: "pointer" }}>Logout</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export default TopBar;