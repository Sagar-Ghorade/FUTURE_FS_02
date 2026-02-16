const express = require("express");
const router = express.Router();
const db = require("../config/db");

// Create Lead
router.post("/", (req, res) => {
  const { name, email, phone, source } = req.body;

  const sql = `
    INSERT INTO leads (name, email, phone, source)
    VALUES (?, ?, ?, ?)
  `;

  db.query(sql, [name, email, phone, source], (err, result) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json({ message: "Lead added successfully" });
  });
});

// Get All Leads
router.get("/", (req, res) => {
  const sql = "SELECT * FROM leads ORDER BY created_at DESC";

  db.query(sql, (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(results);
  });
});

// Update Lead Status
router.put("/:id", (req, res) => {
  const { status } = req.body;
  const { id } = req.params;

  const sql = "UPDATE leads SET status = ? WHERE id = ?";

  db.query(sql, [status, id], (err, result) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json({ message: "Status updated successfully" });
  });
});

module.exports = router;
