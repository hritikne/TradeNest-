// Home.jsx
import React from "react";
import Menu from "./Menu";
import Dashboard from "./Dashboard";

const Home = () => {
  const SIDEBAR_WIDTH = 350; // width of Menu
  const NAVBAR_HEIGHT = 120; // height of top menu

  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        backgroundColor: "#f5f6fa",
        minHeight: "100vh",
      }}
    >
      {/* Top Navbar */}
      <Menu />

      {/* Dashboard Section */}
      <div
        style={{
          marginTop: NAVBAR_HEIGHT,
          marginLeft: SIDEBAR_WIDTH,
          padding: "20px",
          boxSizing: "border-box",
          minHeight: `calc(100vh - ${NAVBAR_HEIGHT}px)`,
          overflow: "auto",
        }}
      >
        <Dashboard />
      </div>
    </div>
  );
};

export default Home;
