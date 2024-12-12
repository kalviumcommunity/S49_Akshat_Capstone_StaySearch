const express = require("express");
const router = express.Router();
const Property = require("../models/Property");

// GET endpoint to fetch all properties
router.get("/properties", async (req, res) => {
  try {
    const properties = await Property.find(); // Fetch all documents in the collection
    res.json(properties);
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
});

module.exports = router;
