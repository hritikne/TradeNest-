import React, { useState, useEffect } from "react";
import axios from "axios";

const Positions = () => {
  const [positions, setPositions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;
    setLoading(true);
    axios
      .get("http://localhost:3002/allPositions")
      .then((res) => {
        if (!cancelled) setPositions(Array.isArray(res.data) ? res.data : []);
      })
      .catch((err) => {
        console.error("Failed to fetch positions:", err);
        if (!cancelled) setPositions([]);
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });

    return () => {
      cancelled = true;
    };
  }, []);

  const safeNum = (v) => {
    const n = typeof v === "number" ? v : Number(v);
    return Number.isFinite(n) ? n : 0;
  };

  const fmt = (n) =>
    Number(n).toLocaleString("en-IN", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });

  const styles = {
    container: {
      width: "100%",
      boxSizing: "border-box",
      marginTop: 20,
    },
    title: {
      fontSize: 20,
      fontWeight: 700,
      color: "#1e1e2f",
      marginBottom: 12,
      textAlign: "left",
    },
    tableContainer: {
      border: "1px solid #eaeaea",
      borderRadius: 10,
      padding: 10,
      backgroundColor: "#fff",
      overflowX: "auto",
      boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
    },
    table: {
      width: "100%",
      borderCollapse: "collapse",
      fontSize: 14,
    },
    th: {
      backgroundColor: "#f5f6fa",
      color: "#333",
      padding: "10px",
      borderBottom: "2px solid #eaeaea",
      textAlign: "center",
      fontWeight: 600,
      whiteSpace: "nowrap",
    },
    td: {
      padding: "10px",
      textAlign: "center",
      borderBottom: "1px solid #f0f0f0",
      color: "#444",
      whiteSpace: "nowrap",
    },
    profit: {
      color: "#44bd32",
      fontWeight: 700,
    },
    loss: {
      color: "#e84118",
      fontWeight: 700,
    },
    emptyState: {
      padding: 30,
      textAlign: "center",
      color: "#7f8fa6",
      background: "#fff",
      borderRadius: 8,
      boxShadow: "0 2px 6px rgba(0,0,0,0.03)",
    },
    rowHover: {
      cursor: "pointer",
      transition: "background 0.2s ease",
    },
  };

  return (
    <div style={styles.container}>
      {loading ? (
        <div style={styles.emptyState}>Loading positions...</div>
      ) : (
        <>
          <h3 style={styles.title}>Positions ({positions.length})</h3>
          <div style={styles.tableContainer}>
            <table style={styles.table}>
              <thead>
                <tr>
                  <th style={styles.th}>Product</th>
                  <th style={styles.th}>Instrument</th>
                  <th style={styles.th}>Qty.</th>
                  <th style={styles.th}>Avg.</th>
                  <th style={styles.th}>LTP</th>
                  <th style={styles.th}>P&L</th>
                  <th style={styles.th}>Chg.</th>
                </tr>
              </thead>
              <tbody>
                {positions.map((stock, index) => {
                  const qty = safeNum(stock.qty);
                  const avg = safeNum(stock.avg);
                  const price = safeNum(stock.price);
                  const curValue = price * qty;
                  const pl = curValue - avg * qty;
                  const profStyle = pl >= 0 ? styles.profit : styles.loss;
                  const dayStyle = stock.isLoss ? styles.loss : styles.profit;

                  return (
                    <tr
                      key={index}
                      style={{
                        ...styles.rowHover,
                        backgroundColor:
                          index % 2 === 0 ? "#fff" : "rgba(0,0,0,0.02)",
                      }}
                    >
                      <td style={styles.td}>{stock.product}</td>
                      <td style={styles.td}>{stock.name}</td>
                      <td style={styles.td}>{qty}</td>
                      <td style={styles.td}>{fmt(avg)}</td>
                      <td style={styles.td}>{fmt(price)}</td>
                      <td style={{ ...styles.td, ...profStyle }}>{fmt(pl)}</td>
                      <td style={{ ...styles.td, ...dayStyle }}>
                        {stock.day ?? "-"}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </>
      )}
    </div>
  );
};

export default Positions;
