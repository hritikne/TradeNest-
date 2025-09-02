const User = require("../schemas/UserModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

module.exports.LoginAuth = async (req, res) => {
     try {
    const {email , password} = req.body;
    const user = await User.findOne({ email });

    if(!user){
        return res.status(404).json({ success: false, message: "User not found" });
    }
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if(!isPasswordValid){
        return res.status(400).json({ success: false, message: "Invalid credentials" });
    }
    const token = jwt.sign({ id: user }, process.env.JWT_SECRET, { expiresIn: '1d' });
     res.status(200).json({
      message: "Login successful",
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
      },
    });
    } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
}