import React from "react";
import { NavLink } from "react-router-dom";

function Brokrege() {
  const navStyles = {
    navbar: {
      backgroundColor: "#f9f9f9",
      padding: "15px 0",
      borderBottom: "1px solid #ddd",
    },
    container: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      gap: "50px",
    },
    link: {
      textDecoration: "none",
      color: "#333",
      fontSize: "30px",
      fontWeight: "500",
      transition: "color 0.3s ease, border-bottom 0.3s ease",
      padding: "5px 10px",
    },
    active: {
      color: "#007bff",
      borderBottom: "2px solid #007bff",
    },
  };

  return (
    <>
      <nav style={navStyles.navbar}>
        <div style={navStyles.container}>
          <h2 style={{ margin: 0 }}>
            <NavLink
              to="/equity"
              style={({ isActive }) =>
                isActive
                  ? { ...navStyles.link, ...navStyles.active }
                  : navStyles.link
              }
            >
              Equity
            </NavLink>
          </h2>
          <h2 style={{ margin: 0 }}>
            <NavLink
              to="/currency"
              style={({ isActive }) =>
                isActive
                  ? { ...navStyles.link, ...navStyles.active }
                  : navStyles.link
              }
            >
              Currency
            </NavLink>
          </h2>
          <h2 style={{ margin: 0 }}>
            <NavLink
              to="/commodity"
              style={({ isActive }) =>
                isActive
                  ? { ...navStyles.link, ...navStyles.active }
                  : navStyles.link
              }
            >
              Commodity
            </NavLink>
          </h2>
        </div>
      </nav>
    </>
  );
}

export default Brokrege;
