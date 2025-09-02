// Holdings.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";
import LineGraph from "./LineGraph"; // expects default export from LineGraph.jsx

const Holdings = () => {
  const [allHoldings, setAllHoldings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;
    setLoading(true);

    axios
      .get("http://localhost:3002/allHoldings")
      .then((res) => {
        if (!cancelled) setAllHoldings(Array.isArray(res.data) ? res.data : []);
      })
      .catch((err) => {
        console.error("Failed to fetch holdings:", err);
        if (!cancelled) setAllHoldings([]);
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });

    return () => {
      cancelled = true;
    };
  }, []);

  // safe helpers
  const safeNum = (v) => {
    const n = typeof v === "number" ? v : Number(v);
    return Number.isFinite(n) ? n : 0;
  };
  const fmt = (n) =>
    Number(n).toLocaleString("en-IN", { minimumFractionDigits: 2, maximumFractionDigits: 2 });

  // chart data (uses safe numbers)
  const chartData = {
    labels: allHoldings.map((s) => s.name || ""),
    datasets: [
      {
        label: "Current Value",
        data: allHoldings.map((s) => safeNum(s.price)),
        borderColor: "rgb(27,101,101)",
        backgroundColor: "rgba(27,101,101,0.3)",
        fill: true,
      },
      {
        label: "Average Cost",
        data: allHoldings.map((s) => safeNum(s.avg) * safeNum(s.qty)),
        borderColor: "rgb(95,58,170)",
        backgroundColor: "rgba(95,58,170,0.3)",
        fill: true,
      },
    ],
  };

  // inline styles
  const styles = {
    container: { width: "100%", boxSizing: "border-box" },
    chartWrapper: {
      width: "100%",
      height: 320,
      background: "#fff",
      borderRadius: 8,
      padding: 12,
      boxSizing: "border-box",
      boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
      marginBottom: 16,
    },
    title: { marginTop: 8, fontSize: 20, fontWeight: 700, color: "#1e1e2f", textAlign: "left" },
    tableContainer: {
      marginTop: 12,
      border: "1px solid #eaeaea",
      borderRadius: 10,
      padding: 10,
      backgroundColor: "#fff",
      overflowX: "auto",
    },
    table: { width: "100%", borderCollapse: "collapse", fontSize: 14 },
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
    profit: { color: "#44bd32", fontWeight: 700 },
    loss: { color: "#e84118", fontWeight: 700 },
    summaryRow: {
      display: "flex",
      justifyContent: "space-between",
      gap: 12,
      marginTop: 18,
      padding: 12,
      background: "#fff",
      borderRadius: 8,
      boxShadow: "0 2px 6px rgba(0,0,0,0.03)",
      alignItems: "center",
    },
    summaryCol: { textAlign: "center", minWidth: 140 },
    emptyState: { padding: 30, textAlign: "center", color: "#7f8fa6", background: "#fff", borderRadius: 8 },
  };

  return (
    <div style={styles.container}>
      {loading ? (
        <div style={styles.emptyState}>Loading holdings...</div>
      ) : (
        <>
          {/* Chart */}
          {allHoldings.length > 0 ? (
            <div style={styles.chartWrapper}>
              <LineGraph data={chartData} height={280} />
            </div>
          ) : (
            <div style={styles.emptyState}>No holdings to display.</div>
          )}

          {/* Title */}
          <h3 style={styles.title}>Holdings ({allHoldings.length})</h3>

          {/* Table */}
          <div style={styles.tableContainer}>
            <table style={styles.table}>
              <thead>
                <tr>
                  <th style={styles.th}>Instrument</th>
                  <th style={styles.th}>Qty.</th>
                  <th style={styles.th}>Avg. cost</th>
                  <th style={styles.th}>LTP</th>
                  <th style={styles.th}>Cur. val</th>
                  <th style={styles.th}>P&L</th>
                  <th style={styles.th}>Net chg.</th>
                  <th style={styles.th}>Day chg.</th>
                </tr>
              </thead>
              <tbody>
                {allHoldings.map((stock, i) => {
                  const qty = safeNum(stock.qty);
                  const avg = safeNum(stock.avg);
                  const price = safeNum(stock.price);
                  const curValue = price * qty;
                  const pl = curValue - avg * qty;
                  const profStyle = pl >= 0 ? styles.profit : styles.loss;
                  const dayIsLoss = !!stock.isLoss;
                  const dayStyle = dayIsLoss ? styles.loss : styles.profit;

                  return (
                    <tr key={i}>
                      <td style={styles.td}>{stock.name ?? "-"}</td>
                      <td style={styles.td}>{qty}</td>
                      <td style={styles.td}>{fmt(avg)}</td>
                      <td style={styles.td}>{fmt(price)}</td>
                      <td style={styles.td}>{fmt(curValue)}</td>
                      <td style={{ ...styles.td, ...profStyle }}>{fmt(pl)}</td>
                      <td style={{ ...styles.td, ...profStyle }}>{stock.net ?? "-"}</td>
                      <td style={{ ...styles.td, ...dayStyle }}>{stock.day ?? "-"}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          {/* Summary */}
          <div style={styles.summaryRow}>
            <div style={styles.summaryCol}>
              <div style={{ fontSize: 18, fontWeight: 700 }}>₹29,875.55</div>
              <div style={{ color: "#7f8fa6" }}>Total investment</div>
            </div>
            <div style={styles.summaryCol}>
              <div style={{ fontSize: 18, fontWeight: 700 }}>₹31,428.95</div>
              <div style={{ color: "#7f8fa6" }}>Current value</div>
            </div>
            <div style={styles.summaryCol}>
              <div style={{ fontSize: 18, fontWeight: 700, color: "#44bd32" }}>₹1,553.40 (+5.20%)</div>
              <div style={{ color: "#7f8fa6" }}>P&L</div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Holdings;
