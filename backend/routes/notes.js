const express = require("express");
const router = express.Router();
const db = require("../config/db");

// Add note to lead
router.post("/:leadId", (req, res) => {
  const { leadId } = req.params;
  const { note } = req.body;

  const sql = "INSERT INTO notes (lead_id, note) VALUES (?, ?)";

  db.query(sql, [leadId, note], (err, result) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json({ message: "Note added successfully" });
  });
});

// Get notes for a lead
router.get("/:leadId", (req, res) => {
  const { leadId } = req.params;

  const sql = "SELECT * FROM notes WHERE lead_id = ? ORDER BY created_at DESC";

  db.query(sql, [leadId], (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(results);
  });
});

module.exports = router;
