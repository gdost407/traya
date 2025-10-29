import express from "express";
import path from "path";
import cors from "cors";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import indexRoutes from "./routes/index.js";

import { fileURLToPath } from "url";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const NODE_ENV = process.env.NODE_ENV || "development";


// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Database Connection
connectDB();

// API Routes
app.get("/", (req, res) => {
  res.json({ status: "ok", message: "Server is running ✅"+PORT });
});

app.use("/api", indexRoutes);

// --- Frontend Serving Logic ---
if (NODE_ENV === "production") {
  // --- Serve Frontend (React build) ---
  const __dirname = path.resolve();

  // Serve static files from frontend dist folder
  app.use(express.static(path.join(__dirname, "../frontend/dist")));

  // ✅ Catch-all fallback for SPA routes
  app.use((req, res) => {
    res.sendFile(path.join(__dirname, "../frontend/dist/index.html"));
  });
} else {
  // Development mode - show info page instead of serving build
  app.get("/", (req, res) => {
    res.send(`
      <h2>🧑‍💻 Backend running in <b>Development</b> mode</h2>
      <p>Frontend should run separately with <code>npm run dev</code> inside /frontend.</p>
      <p>API Base: <code>http://localhost:${PORT}/api</code></p>
    `);
  });
}

app.listen(PORT, () => {
  console.log(`🚀 Server running in ${NODE_ENV} mode on http://localhost:${PORT}`);
});