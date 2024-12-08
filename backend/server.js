require("dotenv").config({ path: "./data.env" });
const Database = require("better-sqlite3");
const db = new Database("./comments.db");
const nodemailer = require("nodemailer");

const express = require("express");
const cors = require("cors");
const { data } = require("autoprefixer");

const app = express();
app.use(express.json()); // Use built-in JSON parser
app.use(cors()); // Allow CORS

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
// Get all comments (No body required for GET)
app.get("/comments", (req, res) => {
    try {
        const stmt = db.prepare("SELECT * FROM comments ORDER BY id DESC");
        const allComments = stmt.all();
        res.json(allComments);
    } catch (error) {
        console.error("Error fetching comments:", error.message);
        res.status(500).json({ error: "Failed to fetch comments" });
    }
});

// Add a new comment
app.post("/comments", (req, res) => {
    try {
        const { name, message } = req.body;
        if (!name || !message) {
            return res.status(400).json({ error: "Name and message are required!" });
        }
        const stmt = db.prepare("INSERT INTO comments (name, message) VALUES (?, ?)");
        const result = stmt.run(name, message);
        const newComment = { id: result.lastInsertRowid, name, message };
        res.json(newComment);
    } catch (error) {
        console.error("Error adding comment:", error.message);
        res.status(500).json({ error: "Failed to add comment" });
    }
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
