require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const { HoldingsModel } = require("./model/HoldingsModel");
const { PositionsModel } = require("./model/PositionsModel");
const { OrdersModel } = require("./model/OrdersModel");
const authRoutes = require("./routes/Router");
const userSupport  = require("./model/Support.model");
const PORT = process.env.PORT || 3002;
const uri = process.env.MONGO_URL;

const app = express();

// ✅ Fixed CORS
app.use(cors({
  origin: [
    "http://localhost:5173",                // for local dev
    "https://tradenest-1-ay29.onrender.com" // deployed frontend
  ],
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true,
}));

app.use(cookieParser());
app.use(bodyParser.json());

// Routes
app.use("/", authRoutes.Router);  

app.get("/allHoldings", async (req, res) => {
  try {
    const holding = await HoldingsModel.find({});
    res.json(holding);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.get("/allPositions", async (req, res) => {
  try {
    const positions = await PositionsModel.find({});
    res.json(positions);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.get("/allSupport", async (req, res) => {
  try {
    const support = await userSupport.find({});
    res.json(support);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.post("/newOrder", async (req, res) => {
  try {
    const newOrder = new OrdersModel({
      name: req.body.name,
      qty: req.body.qty,
      price: req.body.price,
      mode: req.body.mode,
    });
    await newOrder.save();
    res.send("Order saved!");
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.get("/allOrders", async (req, res) => {
  try {
    const orders = await OrdersModel.find({});
    res.json(orders);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.delete("/deleteOrder/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const order = await OrdersModel.findById(id);
    if (!order) return res.status(404).json({ message: "Order not found" });

    const deletedOrder = await OrdersModel.findByIdAndDelete(id);
    res.json({ message: "Order deleted successfully", order: deletedOrder });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
});

// Connect DB first, then start server
mongoose
  .connect(uri)
  .then(() => {
    console.log("MongoDB Connected!");
    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });
  })
  .catch((err) => console.error("DB Connection Error:", err));

