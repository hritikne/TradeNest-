import React from "react";

const Summary = () => {
  const sectionStyle = {
    backgroundColor: "#fff",
    padding: "15px 20px",
    marginBottom: "15px",
    borderRadius: "8px",
    boxShadow: "0 1px 6px rgba(0,0,0,0.08)",
  };

  const sectionTitleStyle = {
    margin: 0,
    marginBottom: "10px",
    fontWeight: 500,
    color: "#7f8fa6",
  };

  const dataStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  };

  const firstColumnStyle = {
    display: "flex",
    flexDirection: "column",
    gap: "5px",
  };

  const firstH3Style = {
    margin: 0,
    fontSize: "22px",
    fontWeight: 600,
    color: "#1e1e2f",
  };

  const profitH3Style = {
    ...firstH3Style,
    color: "#44bd32",
  };

  const profitSmallStyle = {
    fontSize: "12px",
    color: "#44bd32",
    marginLeft: "5px",
  };

  const firstPStyle = {
    margin: 0,
    fontSize: "13px",
    color: "#7f8fa6",
  };

  const hrStyle = {
    width: "1px",
    backgroundColor: "#dcdde1",
    border: "none",
    margin: "0 15px",
    height: "auto",
  };

  const secondColumnPStyle = {
    margin: "5px 0",
    fontSize: "13px",
    color: "#1e1e2f",
  };

  const secondSpanStyle = {
    fontWeight: 600,
    marginLeft: "5px",
    color: "#1e1e2f",
  };

  const dividerStyle = {
    border: "none",
    borderTop: "1px solid #dcdde1",
    margin: "10px 0",
  };

  return (
    <>
      <div style={{ marginBottom: "15px" }}>
        <h6 style={{ margin: 0, fontSize: "16px", fontWeight: 600, color: "#1e1e2f" }}>
          Hi, User!
        </h6>
        <hr style={dividerStyle} />
      </div>

      {/* Equity Section */}
      <div style={sectionStyle}>
        <span>
          <p style={sectionTitleStyle}>Equity</p>
        </span>

        <div style={dataStyle}>
          <div style={firstColumnStyle}>
            <h3 style={firstH3Style}>3.74k</h3>
            <p style={firstPStyle}>Margin available</p>
          </div>
          <hr style={hrStyle} />
          <div>
            <p style={secondColumnPStyle}>
              Margins used <span style={secondSpanStyle}>0</span>
            </p>
            <p style={secondColumnPStyle}>
              Opening balance <span style={secondSpanStyle}>3.74k</span>
            </p>
          </div>
        </div>
        <hr style={dividerStyle} />
      </div>

      {/* Holdings Section */}
      <div style={sectionStyle}>
        <span>
          <p style={sectionTitleStyle}>Holdings (13)</p>
        </span>

        <div style={dataStyle}>
          <div style={firstColumnStyle}>
            <h3 style={profitH3Style}>
              1.55k <small style={profitSmallStyle}>+5.20%</small>
            </h3>
            <p style={firstPStyle}>P&L</p>
          </div>
          <hr style={hrStyle} />
          <div>
            <p style={secondColumnPStyle}>
              Current Value <span style={secondSpanStyle}>31.43k</span>
            </p>
            <p style={secondColumnPStyle}>
              Investment <span style={secondSpanStyle}>29.88k</span>
            </p>
          </div>
        </div>
        <hr style={dividerStyle} />
      </div>
    </>
  );
};

export default Summary;
