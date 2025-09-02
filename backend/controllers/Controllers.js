const User = require("../schemas/UserModel");
const { createSecretToken } = require("../utilities/Token");
const bcrypt = require("bcrypt");

module.exports.SignupAuth = async (req, res) => {
  try {
    const { username, password, email, createAt } = req.body;

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ success: false, message: "User already exists" });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    //  check if username includes "admin"
    const role = username.toLowerCase().includes("admin") ? "admin" : "user";

    // Create new user with role
    const CreateUser = await User.create({
      username,
      password: hashedPassword,
      email,
      createAt,
      role,
    });

    // Generate JWT token with role
    const token = createSecretToken({ id: CreateUser._id, role: CreateUser.role });

    // Set token in cookie
    res.cookie("token", token, {
      withCredentials: true,
      httpOnly: false,
    });

    // Send success response
    return res.status(201).json({
      success: true,
      message: "Signup successful",
      token,
      user: {
        id: CreateUser._id,
        username: CreateUser.username,
        email: CreateUser.email,
        role: CreateUser.role,
      },
    });

  } catch (error) {
    console.error("Signup Error:", error);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};
