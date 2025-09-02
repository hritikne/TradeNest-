import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

 const HendleSell  = async(ordersid)=>{
 
      try {
             alert("Are you sure want to Sell this order");
        const res = await axios.delete(`http://localhost:3002/deleteorder/${ordersid}`);
      } catch (err) {
        console.error("Error deleting order:", err.message);
      }
      
 }

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const res = await axios.get("http://localhost:3002/allOrders");
        setOrders(res.data);
      } catch (err) {
        console.error("Error fetching orders:", err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  },);

  if (loading) return <p style={{ textAlign: "center", marginTop: "20px" }}>Loading orders...</p>;

  return (
    <div style={{ padding: "30px", fontFamily: "Arial, sans-serif" }}>
      {orders.length === 0 ? (
        <div style={{ textAlign: "center", marginTop: "50px" }}>
          <p style={{ fontSize: "18px", color: "#666" }}>
            You haven't placed any orders today
          </p>
          <Link
            to="/dashboard/holdings"
            style={{
              display: "inline-block",
              marginTop: "15px",
              padding: "10px 20px",
              backgroundColor: "#007bff",
              color: "white",
              borderRadius: "5px",
              textDecoration: "none",
              fontWeight: "bold",
            }}
          >
            Get started
          </Link>
        </div>
      ) : (
        <div>
          <h2 style={{ marginBottom: "20px", color: "#333" }}> My Orders</h2>
          <table
            style={{
              width: "100%",
              borderCollapse: "collapse",
              backgroundColor: "white",
              borderRadius: "8px",
              overflow: "hidden",
              boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
            }}
          >
            <thead>
              <tr style={{ backgroundColor: "#f4f6f9", textAlign: "left" }}>
                <th style={{ padding: "12px" }}>Name</th>
                <th style={{ padding: "12px" }}>Qty</th>
                <th style={{ padding: "12px" }}>Price</th>
                <th style={{ padding: "12px" }}>Mode</th>
                <th style={{ padding: "12px" }}>Status</th>
                <th style={{ padding: "12px" }}>Time</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order, index) => (
                <tr
                  key={order._id}
                  style={{
                    backgroundColor: index % 2 === 0 ? "#fff" : "#f9f9f9",
                    borderBottom: "1px solid #eee",
                  }}
                >
                  <td style={{ padding: "12px", fontWeight: "500" }}>{order.name}</td>
                  <td style={{ padding: "12px" }}>{order.qty}</td>
                  <td style={{ padding: "12px", color: "#28a745", fontWeight: "bold" }}>
                    ₹{order.price}
                  </td>
                  <td style={{ padding: "12px" }}>{order.mode}</td>
                  <td
                    style={{
                      padding: "12px",
                      color: "green",
                      fontWeight: "bold",
                    }}
                  >
                    Completed
                  </td>
                  <td style={{ padding: "12px" }}>
                    <button style={{backgroundColor : "red",
                      padding: "6px 12px",
                      color: "white",
                      border: "none",
                      borderRadius: "4px",
                      cursor: "pointer",
                    }} onClick={() => HendleSell(order._id)}
                > Sell</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Orders;
