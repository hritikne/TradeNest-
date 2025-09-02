import React from "react";

function Explore() {
  const features = [
    { icon: "fa-line-chart", title: "Live Market Charts", text: "Track real-time prices and market movements with interactive charts." },
    { icon: "fa-lightbulb-o", title: "Smart Insights", text: "AI-powered insights to help you make informed decisions while trading." },
    { icon: "fa-pie-chart", title: "Portfolio Tracker", text: "Monitor your investments and track performance in real-time." },
    { icon: "fa-bell", title: "Custom Alerts", text: "Set personalized alerts for stocks, price changes, or news updates." },
    { icon: "fa-exchange", title: "Easy Order Types", text: "Place market, limit, or stop-loss orders in just a few clicks." },
    { icon: "fa-search", title: "Stock Screener", text: "Filter stocks based on volume, PE ratio, and more." },
    { icon: "fa-calendar", title: "Earnings Calendar", text: "Keep track of upcoming earnings reports and announcements." },
    { icon: "fa-newspaper-o", title: "Market News", text: "Stay updated with curated news from top financial sources." },
    { icon: "fa-comments-o", title: "Community Forum", text: "Discuss strategies with fellow traders in a supportive space." },
  ];

  return (
    <section style={{ background: "linear-gradient(135deg,#f0f4ff,#ffffff)", padding: "70px 20px", overflow: "hidden" }}>
      <h2 style={{ textAlign: "center", fontSize: "2.5rem", marginBottom: "50px", fontWeight: "bold" }}>
        Explore <span style={{ color: "#007bff" }}>TradeNest</span> Features
      </h2>
       <div className="l">
          
       </div>
      <div style={{ width: "100%", overflow: "hidden", position: "relative" }}>
      
        <div
          style={{
            display: "flex",
            gap: "40px",
            width: "max-content",
            animation: "scroll-left 120s linear infinite",
          }}
        >
          {[...features, ...features, ...features].map((feature, i) => (
            <div
              key={i}
              style={{
                flex: "0 0 320px",
                background: "rgba(255,255,255,0.7)",
                backdropFilter: "blur(12px)",
                borderRadius: "20px",
                padding: "24px",
                boxShadow: "0 8px 24px rgba(0,0,0,0.1)",
                transition: "transform 0.3s, box-shadow 0.3s",
                minHeight: "180px",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-10px)";
                e.currentTarget.style.boxShadow = "0 12px 32px rgba(0,0,0,0.2)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 8px 24px rgba(0,0,0,0.1)";
              }}
            >
              <h5 style={{ fontWeight: "bold", marginBottom: "12px", fontSize: "17px" }}>
                <i className={`fa ${feature.icon}`} style={{ color: "#007bff", marginRight: "12px", fontSize: "20px" }}></i>
                {feature.title}
              </h5>
              <p style={{ color: "#333", fontSize: "14px", lineHeight: "1.6" }}>{feature.text}</p>
            </div>
          ))}
        </div>
      </div>

      <style>
        {`
          @keyframes scroll-left {
            0% { transform: translateX(0); }
            100% { transform: translateX(-100%); }
          }

          @media (max-width: 768px) {
            .feature-card {
              flex: 0 0 260px !important;
              padding: 20px !important;
              min-height: 160px !important;
            }
          }
        `}
      </style>
    </section>
  );
}

export default Explore;
