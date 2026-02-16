const express = require("express");
const cors = require("cors");
require("dotenv").config();

// Database connection (auto-connects when required)
const db = require("./config/db");

// Routes
const leadsRoutes = require("./routes/leads");
const notesRoutes = require("./routes/notes");
const authRoutes = require("./routes/auth");

const app = express();

// ====================
// Middleware
// ====================
app.use(cors());
app.use(express.json());

// ====================
// Routes
// ====================
app.use("/api/leads", leadsRoutes);
app.use("/api/notes", notesRoutes);
app.use("/api/auth", authRoutes);   // ✅ Added this line

// ====================
// Test Route
// ====================
app.get("/", (req, res) => {
  res.json({ message: "Mini CRM Backend Running 🚀" });
});

// ====================
// Start Server
// ====================
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
