// Use dotenv only in development
require("dotenv").config({ path: "./data.env" });
const mongoose = require("mongoose");
const nodemailer = require("nodemailer");
const express = require("express");
const cors = require("cors");
const http = require("http"); // Para criar o servidor HTTP
const WebSocket = require("ws"); // Biblioteca WebSocket

const app = express();
app.use(express.json());

const corsOptions = {
  origin: ["https://vitorames.onrender.com"], // Substitua pelo domínio do seu frontend
  methods: ["GET", "POST"]
};

app.use(cors(corsOptions));

// MongoDB Connection
console.log("MONGO_URL:", process.env.MONGO_URL);
const mongoURI = process.env.MONGO_URL;

mongoose
  .connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverSelectionTimeoutMS: 30000, // 30 seconds
    socketTimeoutMS: 45000,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Error connecting to MongoDB:", err));

// MongoDB Schema and Model
const commentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  message: { type: String, required: true },
});

const Comment = mongoose.model("Comment", commentSchema);

// Criar servidor HTTP e WebSocket
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

// Rota de Email
app.post("/send-email", async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: "Name, email, and message are required!" });
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ error: "Invalid email format!" });
  }

  const transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: `"${name}" <${process.env.EMAIL_USER}>`,
    to: process.env.EMAIL_USER,
    replyTo: email,
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

// Rota para buscar os comentários
app.get("/comments", async (req, res) => {
  try {
    // Alterado para exibir em ordem crescente (mais antigo primeiro)
    const comments = await Comment.find().sort({ _id: 1 }); 
    res.json(comments);
  } catch (error) {
    console.error("Error fetching comments:", error.message);
    res.status(500).json({ error: "Failed to fetch comments" });
  }
});

// Rota para postar um comentário
app.post("/comments", async (req, res) => {
  const { name, message } = req.body;

  console.log("Novo comentário recebido:", req.body);

  if (!name || !message) {
    console.error("Erro: Nome ou mensagem ausente!");
    return res.status(400).json({ error: "Name and message are required!" });
  }

  try {
    const newComment = new Comment({ name, message });
    await newComment.save();

    console.log("Comentário salvo no banco de dados:", newComment);

    wss.clients.forEach((client) => {
      if (client.readyState === WebSocket.OPEN) {
        client.send(JSON.stringify(newComment));
        console.log("Comentário enviado ao cliente via WebSocket:", newComment);
      }
    });

    res.json(newComment);
  } catch (error) {
    console.error("Erro ao adicionar comentário:", error.message);
    res.status(500).json({ error: "Failed to add comment" });
  }
});


// Configuração do WebSocket
wss.on("connection", (ws) => {
  console.log("Novo cliente conectado ao WebSocket!");

  ws.on("close", () => {
    console.log("Cliente desconectado do WebSocket");
  });
});

// Iniciar o servidor
const PORT = 5000;
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
