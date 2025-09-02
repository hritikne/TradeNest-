import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const Menu = () => {
  const [selectedMenu, setSelectedMenu] = useState(0);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const [username, setUsername] = useState("U");
  const navigate = useNavigate();

  const menuItems = [
    { name: "Dashboard", path: "/dashboard/Summary", color: "#0097e6" },
    { name: "Orders", path: "/dashboard/orders", color: "#e67e22" },
    { name: "Holdings", path: "/dashboard/holdings", color: "#2ecc71" },
    { name: "Positions", path: "/dashboard/positions", color: "#9b59b6" },
    { name: "Funds", path: "/dashboard/funds", color: "#e74c3c" },
    { name: "Apps", path: "/dashboard/apps", color: "#1abc9c" },
  ];

  const handleMenuClick = (index) => {
    setSelectedMenu(index);
  };

  const handleProfileClick = () => {
    setIsProfileDropdownOpen(!isProfileDropdownOpen);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    sessionStorage.removeItem("token");
    alert("Logout Successful ");
    navigate("/");
    setIsProfileDropdownOpen(false);
  };

  const menuStyle = (active, color) => ({
    padding: "8px 12px",
    cursor: "pointer",
    borderBottom: active ? `3px solid ${color}` : "3px solid transparent",
    color: active ? color : "#1e1e2f",
    fontWeight: active ? 600 : 500,
    fontSize: "14px",
    transition: "all 0.18s",
  });

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "120px",
        backgroundColor: "#fff",
        boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
        zIndex: 100,
        boxSizing: "border-box",
      }}
    >
      {/* Top Header */}
      <div
        style={{
          height: "70px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "10px 20px",
        }}
      >
        <h3
          style={{
            margin: 0,
            fontSize: "18px",
            fontWeight: "600",
            color: "#1e1e2f",
          }}
        >
          Market Watch{" "}
          <span style={{ color: "#e84118", fontWeight: "500" }}>Live</span>
        </h3>

        {/* Profile */}
        <div
          role="button"
          onClick={handleProfileClick}
          style={{
            display: "flex",
            alignItems: "center",
            cursor: "pointer",
            position: "relative",
          }}
        >
          <div
            style={{
              width: "32px",
              height: "32px",
              borderRadius: "50%",
              backgroundColor: "#0097e6",
              color: "#fff",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginRight: "8px",
              fontWeight: "600",
              fontSize: "13px",
            }}
          >
            {username.charAt(0).toUpperCase()}
          </div>

          {/* Dropdown */}
          {isProfileDropdownOpen && (
            <div
              style={{
                position: "absolute",
                top: "40px",
                right: 0,
                backgroundColor: "#fff",
                border: "1px solid #dcdde1",
                borderRadius: "8px",
                boxShadow: "0 2px 6px rgba(0,0,0,0.15)",
                width: "140px",
                zIndex: 110,
              }}
            >
              <p
                style={{
                  padding: "8px",
                  margin: 0,
                  cursor: "pointer",
                  borderBottom: "1px solid #f1f2f6",
                }}
              >
                Profile
              </p>
              <p
                style={{
                  padding: "8px",
                  margin: 0,
                  cursor: "pointer",
                  color: "#e84118",
                  fontWeight: "600",
                }}
                onClick={handleLogout}
              >
                Logout
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Navigation Menu */}
      <div
        style={{
          height: "50px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#fff",
          padding: "0 15px",
          borderTop: "1px solid #eaeaea",
          boxSizing: "border-box",
        }}
      >
        <ul
          style={{
            display: "flex",
            listStyle: "none",
            gap: "18px",
            margin: 0,
            padding: 0,
            alignItems: "center",
          }}
        >
          {menuItems.map((item, index) => (
            <li key={index}>
              <Link to={item.path} style={{ textDecoration: "none" }}>
                <span
                  style={menuStyle(selectedMenu === index, item.color)}
                  onClick={() => handleMenuClick(index)}
                >
                  {item.name}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Menu;
