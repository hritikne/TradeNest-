const express = require("express");
const userController = require("../controllers/Controllers.js");
const loginController = require("../controllers/login.controller.js");
const supportController = require("../controllers/Support.js");
const { AdminMiddleware, AdminOnly } = require("../middleware/Admin.middleware.js");

const Router = express.Router();

// Public routes
Router.post("/SignUp", userController.SignupAuth);
Router.post("/Login", loginController.LoginAuth);
Router.post("/Support", supportController.supportRequest);

// Protected route (login required)
Router.get("/profile", AdminMiddleware, (req, res) => {
  res.json({ message: "User profile data", user: req.user });
});

// Admin-only route
Router.get("/admin", AdminMiddleware, AdminOnly, (req, res) => {
  res.json({ message: "Welcome Admin", user: req.user });
});

module.exports = {Router}; 
