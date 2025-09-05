// WatchList.jsx
import React, { useState, useContext } from "react";
import { Tooltip, Grow } from "@mui/material";
import {
  BarChartOutlined,
  KeyboardArrowDown,
  KeyboardArrowUp,
  MoreHoriz,
} from "@mui/icons-material";
import GeneralContext from "./GeneralContext";
import { watchlist } from "../data/data";
import  DoughnutChart  from "./DoughnoutChart";

const WatchList = () => {
  const SIDEBAR_WIDTH = 450; // match with Home.jsx
  const NAVBAR_HEIGHT = 100;

  const labels = watchlist.map((s) => s.name || "");

  const doughData = {
    labels,
    datasets: [
      {
        label: "Price",
        data: watchlist.map((stock) => stock.price || 0),
        backgroundColor: [
          "rgba(255, 99, 132, 0.5)",
          "rgba(54, 162, 235, 0.5)",
          "rgba(255, 206, 86, 0.5)",
          "rgba(75, 192, 192, 0.5)",
          "rgba(153, 102, 255, 0.5)",
          "rgba(255, 159, 64, 0.5)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <aside
      style={{
        width: SIDEBAR_WIDTH,
        position: "fixed",
        top: NAVBAR_HEIGHT,
        left: 0,
        height: `calc(100vh - ${NAVBAR_HEIGHT}px)`,
        backgroundColor: "#fff",
        padding: "16px",
        boxSizing: "border-box",
        overflowY: "auto",
        borderRight: "1px solid #e6e6e6",
        zIndex: 100,
      }}
    >
      {/* Search Bar */}
      <div
        style={{
          display: "flex",
          gap: "10px",
          marginBottom: "18px",
          alignItems: "center",
        }}
      >
        <input
          type="text"
          placeholder="Search eg: INFY, BSE..."
          style={{
            flex: 1,
            padding: "10px 12px",
            borderRadius: "6px",
            border: "1px solid #dcdde1",
            outline: "none",
            background: "#f9f9f9",
            fontSize: "14px",
          }}
        />
        <span style={{ fontWeight: 500, color: "#7f8fa6", fontSize: "13px" }}>
          {watchlist.length} / 50
        </span>
      </div>

      {/* Watchlist Items */}
      <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
        {watchlist.map((stock, idx) => (
          <WatchListItem stock={stock} key={idx} />
        ))}
      </ul>

      {/* Doughnut Chart */}
      <div
        style={{
          marginTop: "20px",
          width: "100%",
          height: "300px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          background: "#fff",
          padding: "10px",
          borderRadius: "8px",
          boxShadow: "0 2px 6px rgba(0, 0, 0, 0.05)",
        }}
      >
        <DoughnutChart data={doughData} />
      </div>
    </aside>
  );
};
/* ------------------------- Subcomponents ------------------------- */
const WatchListItem = ({ stock }) => {
  const [showActions, setShowActions] = useState(false);

  return (
    <li
      onMouseEnter={() => setShowActions(true)}
      onMouseLeave={() => setShowActions(false)}
      style={{
        marginBottom: "12px",
        padding: "12px",
        borderRadius: "6px",
        backgroundColor: "#fff",
        boxShadow: "0 1px 4px rgba(0,0,0,0.08)",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        cursor: "pointer",
        transition: "all 0.2s ease-in-out",
      }}
    >
      {/* Stock Info */}
      <div>
        <p
          style={{
            margin: 0,
            fontWeight: 600,
            color: stock.isDown ? "#e84118" : "#44bd32",
            fontSize: "15px",
          }}
        >
          {stock.name}
        </p>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            marginTop: "6px",
          }}
        >
          <span style={{ color: "#7f8fa6", fontSize: "13px" }}>
            {stock.percent}
          </span>
          {stock.isDown ? (
            <KeyboardArrowDown style={{ color: "#e84118" }} />
          ) : (
            <KeyboardArrowUp style={{ color: "#44bd32" }} />
          )}
          <span style={{ fontWeight: 500, fontSize: "13px" }}>
            ₹{stock.price}
          </span>
        </div>
      </div>

      {showActions && <WatchListActions uid={stock.name} />}
    </li>
  );
};

const WatchListActions = ({ uid }) => {
  const generalContext = useContext(GeneralContext);

  return (
    <div style={{ display: "flex", gap: "8px" }}>
      {/* Buy */}
      <Tooltip title="Buy (B)" placement="top" arrow TransitionComponent={Grow}>
        <button
          onClick={() => generalContext?.openBuyWindow?.(uid)}
          style={{
            padding: "6px 10px",
            borderRadius: "4px",
            border: "none",
            backgroundColor: "#44bd32",
            color: "#fff",
            cursor: "pointer",
            fontSize: "13px",
          }}
        >
          Buy
        </button>
      </Tooltip>

      {/* Analytics */}
      <Tooltip
        title="Analytics (A)"
        placement="top"
        arrow
        TransitionComponent={Grow}
      >
        <button onClick={() => alert("Analytics coming soon!")}
          style={{
            padding: "6px 10px",
            borderRadius: "4px",
            border: "none",
            backgroundColor: "#f5f6fa",
            cursor: "pointer",
          }}
        >
          <BarChartOutlined />
        </button>
      </Tooltip>

      {/* More */}
      <Tooltip title="More" placement="top" arrow TransitionComponent={Grow}>
        <button
          style={{
            padding: "6px 10px",
            borderRadius: "4px",
            border: "none",
            backgroundColor: "#f5f6fa",
            cursor: "pointer",
          }}
        >
          <MoreHoriz />
        </button>
      </Tooltip>
    </div>
  );
};
export default WatchList;
