require("dotenv").config({ path: "./data.env" });
const mongoose = require("mongoose");
const nodemailer = require("nodemailer");

const express = require("express");
const cors = require("cors");
const { data } = require("autoprefixer");

const app = express();
app.use(express.json()); // Use built-in JSON parser
app.use(cors()); // Allow CORS

// MongoDB Connection
const mongoURI = process.env.MONGO_URL;

mongoose
  .connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Error connecting to MongoDB:", err));

// MongoDB Schema and Model
const commentSchema = new mongoose.Schema({
    name: { type: String, required: true },
    message: { type: String, required: true },
  });


const Comment = mongoose.model("Comment", commentSchema);

/**
 * Logic for the backend of the HireMe / ContactMe part
 */
// Email route
app.post("/send-email", async(req, res) => {
    
    // Use the transporter
    const{ name, email, message } = req.body;

    // Configure Nodemailer transporter
    const transporter = nodemailer.createTransport({
        service: "Gmail",
        auth:{
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
        }
    });

    const mailOptions = {
        from: email,
        to: process.env.EMAIL_USER, // Use the environment variable for the recipient
        subject: `Message from ${name}`,
        text: message,
    };

    try {
        await transporter.sendMail(mailOptions);
        res.status(200).send("Email sent successfully!");
      } catch (error) {
        console.error("Error sending email:", error);
        res.status(500).send("Error sending email");
    }
});


/**
 * Backend logic for the commentary part
 */
// Get all comments
app.get("/comments", async (req, res) => {
    try {
      const comments = await Comment.find().sort({ _id: -1 });
      res.json(comments);
    } catch (error) {
      console.error("Error fetching comments:", error.message);
      res.status(500).json({ error: "Failed to fetch comments" });
    }
  });
  
  // Add a new comment
  app.post("/comments", async (req, res) => {
    const { name, message } = req.body;
    if (!name || !message) {
      return res.status(400).json({ error: "Name and message are required!" });
    }
  
    try {
      const newComment = new Comment({ name, message });
      await newComment.save();
      res.json(newComment);
    } catch (error) {
      console.error("Error adding comment:", error.message);
      res.status(500).json({ error: "Failed to add comment" });
    }
  });

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
