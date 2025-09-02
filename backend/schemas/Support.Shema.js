const mongoose = require('mongoose');

const SupportSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is required"],
    },
    email: {
        type: String,
        required: [true, "Email is required"],
        lowercase: true,
    },
    message: {
        type: String,
        required: [true, "Message is required"],
        minlength: [10, "Message must be at least 10 characters"],
    },
    status: {
        type: String,
        enum: ["Pending", "In Progress", "Resolved"],
        default: "Pending",
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.models.Support || mongoose.model("Support", SupportSchema);
