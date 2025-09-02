const mongoose = require("mongoose");

const SupportSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, lowercase: true },
  message: { type: String, required: true, minlength: 10 },
  status: { type: String, enum: ["Pending", "In Progress", "Resolved"], default: "Pending" },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.models.Support || mongoose.model("Support", SupportSchema);
