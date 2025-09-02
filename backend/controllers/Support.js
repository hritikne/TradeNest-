const userSupport = require('../schemas/Support.Shema');

module.exports.supportRequest = async (req, res) => {
    try {
        const { name, email, message } = req.body;

        if (!name || !email || !message) {
            return res.status(400).json({ success: false, message: "All fields are required" });
        }
   
        const newSupportRequest = new userSupport({ name, email, message });
        await newSupportRequest.save();

        res.status(201).json({ success: true, message: "Support request submitted successfully" });
    } catch (error) {
        console.error("Support Request Error:", error);
        res.status(500).json({ success: false, message: "Internal Server Error" });
    }
};
