const express = require("express");
const Property = require("../models/Property"); // Import Property model

const router = express.Router();

// GET endpoint to fetch all properties
router.get("/properties", async (req, res) => {
  try {
    const properties = await Property.find(); // Fetch all properties from the database
    res.json(properties);
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
});

// POST endpoint to create a new property
router.post("/properties", async (req, res) => {
  try {
    const { name, location, rent, type, amenities } = req.body;

    // Create a new Property document in the database
    const newProperty = new Property({
      name,
      location,
      rent,
      type,
      amenities,
    });

    // Save the new property to the database
    await newProperty.save();

    // Respond with the created property
    res.status(201).json({
      message: "Property added successfully!",
      property: newProperty,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error adding property", error });
  }
});

// PUT endpoint to update a property by ID
router.put("/properties/:id", async (req, res) => {
  const { id } = req.params; // Extract the property ID from the request parameters
  const updates = req.body; // Extract the updates from the request body

  try {
    // Find the property by ID and update it with the provided data
    const updatedProperty = await Property.findByIdAndUpdate(id, updates, {
      new: true, // Return the updated document
    });

    if (!updatedProperty) {
      return res.status(404).json({ message: "Property not found" });
    }

    res.json({
      message: "Property updated successfully",
      property: updatedProperty,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error updating property", error });
  }
});

module.exports = router;
