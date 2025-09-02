import React, { useState, useEffect } from "react";
import axios from "axios";

function AdminDashboard() {
  const [complaints, setComplaints] = useState([]);
  useEffect(() => {
    const fetchComplaints = async () => {
      try {
        const res = await axios.get("http://localhost:3002/allSupport");
        setComplaints(res.data); // Assuming res.data is an array of support objects
      } catch (err) {
        console.error("Error fetching support data:", err);
      }
    };
    fetchComplaints();
  }, []);


  const updateStatus = (id, newStatus) => {
    setComplaints((prev) =>
      prev.map((c) => (c._id === id ? { ...c, status: newStatus } : c))
    );
  };

  const containerStyle = {
    padding: "30px",
    fontFamily: "Arial, sans-serif",
    background: "#f4f4f9",
    minHeight: "100vh",
  };

  const titleStyle = {
    fontSize: "2rem",
    fontWeight: "700",
    marginBottom: "20px",
    color: "#333",
  };

  const tableStyle = {
    width: "100%",
    borderCollapse: "collapse",
    boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
  };

  const thTdStyle = {
    border: "1px solid #ddd",
    padding: "12px",
    textAlign: "left",
  };

  const thStyle = {
    ...thTdStyle,
    background: "#0d6efd",
    color: "#fff",
  };

  const buttonStyle = {
    padding: "6px 12px",
    marginRight: "5px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    color: "#fff",
  };

  const statusButtonStyles = {
    Pending: { background: "#ff9800" },
    "In Progress": { background: "#2196f3" },
    Resolved: { background: "#4caf50" },
  };

  return (
    <div style={containerStyle}>
      <h2 style={titleStyle}>Admin Dashboard - Support Requests</h2>
      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={thStyle}>User</th>
            <th style={thStyle}>Email</th>
            <th style={thStyle}>Message</th>
            <th style={thStyle}>Status</th>
            <th style={thStyle}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {complaints.map((c) => (
            <tr key={c._id} style={{ background: "#fff", transition: "0.3s" }}>
              <td style={thTdStyle}>{c.name}</td>
              <td style={thTdStyle}>{c.email}</td>
              <td style={thTdStyle}>{c.message}</td>
              <td style={{ ...thTdStyle, fontWeight: "600" }}>{c.status}</td>
              <td style={thTdStyle}>
                {c.status !== "Resolved" && (
                  <button
                    style={{ ...buttonStyle, background: "#4caf50" }}
                    onClick={() => updateStatus(c._id, "Resolved")}
                  >
                    Mark Resolved
                  </button>
                )}
                {c.status === "Pending" && (
                  <button
                    style={{ ...buttonStyle, background: "#2196f3" }}
                    onClick={() => updateStatus(c._id, "In Progress")}
                  >
                    In Progress
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AdminDashboard;
