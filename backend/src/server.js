import express from "express";
import path from "path";
import cors from "cors";
import dotenv from "dotenv";

// Load env vars
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Example API route
app.get("/api/health", (req, res) => {
  res.json({ status: "ok", message: "Server is running ✅" });
  });

  // --- Serve Frontend (React build) ---
  const __dirname = path.resolve();

  // Serve static files from frontend dist folder
  app.use(express.static(path.join(__dirname, "../frontend/dist")));

  // All other routes -> index.html
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../frontend/dist", "index.html"));
    });

    // Start server
    app.listen(PORT, () => {
      console.log(`🚀 Server running on http://localhost:${PORT}`);
      });