// Use dotenv only in development
require("dotenv").config({ path: "./data.env" });
const mongoose = require("mongoose");
const nodemailer = require("nodemailer");
const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

console.log("MONGO_URL:", process.env.MONGO_URL);

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

// Email Route
app.post("/send-email", async (req, res) => {
  const { name, email, message } = req.body;

  // Validate input
  if (!name || !email || !message) {
    return res.status(400).json({ error: "Name, email, and message are required!" });
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ error: "Invalid email format!" });
  }

  // Nodemailer configuration
  const transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: `"${name}" <${process.env.EMAIL_USER}>`, // Gmail forces this to be your authenticated email
    to: process.env.EMAIL_USER,
    replyTo: email, // Allows you to reply directly to the sender
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

// Comments Routes
app.get("/comments", async (req, res) => {
  try {
    const comments = await Comment.find().sort({ _id: -1 });
    res.json(comments);
  } catch (error) {
    console.error("Error fetching comments:", error.message);
    res.status(500).json({ error: "Failed to fetch comments" });
  }
});

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
