import React from "react";

const Apps = () => {
  const apps = [
    { name: "TradeNest Markets", desc: "Trade stocks, F&O with real-time charts" },
    { name: "TradeNest Mutuals", desc: "Invest in top mutual funds with ease" },
    { name: "TradeNest Insights", desc: "AI-powered trading insights & analytics" },
    { name: "TradeNest Portfolio", desc: "Track all your investments in one place" },
  ];

  return (
    <div
      style={{
        padding: "2rem",
        minHeight: "100vh",
        background: "#f7f7f7", // soft off-white
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          fontSize: "2.2rem",
          marginBottom: "0.5rem",
          color: "#37628dff", // dark gray-blue
        }}
      >
        TradeNest Apps
      </h1>
      <p
        style={{
          textAlign: "center",
          fontSize: "1.1rem",
          marginBottom: "2rem",
          color: "#555", // muted gray
        }}
      >
        Explore the TradeNest ecosystem of apps and tools
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "1.5rem",
        }}
      >
        {apps.map((app, i) => (
          <div
            key={i}
            style={{
              background: "#fff",
              borderRadius: "12px",
              padding: "1.5rem",
              boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
              cursor: "pointer",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-6px)";
              e.currentTarget.style.boxShadow = "0 6px 16px rgba(0,0,0,0.15)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 2px 8px rgba(0,0,0,0.08)";
            }}
          >
            <h2
              style={{
                fontSize: "1.4rem",
                marginBottom: "0.5rem",
                color: "#27ae60", // green accent for titles
              }}
            >
              {app.name}
            </h2>
            <p style={{ fontSize: "1rem", color: "#444" }}>{app.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Apps;
