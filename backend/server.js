const Database = require("better-sqlite3");
const db = new Database("./comments.db");

const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.json()); // Use built-in JSON parser
app.use(cors()); // Allow CORS

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
