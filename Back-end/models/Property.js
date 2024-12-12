const mongoose = require("mongoose");

const propertySchema = new mongoose.Schema({
  name: { type: String, required: true },
  location: { type: String, required: true },
  rent: { type: Number, required: true },
  type: { type: String, required: true }, 
  amenities: { type: [String] },
  rating: { type: Number },
});

const Property = mongoose.model("property", propertySchema);

module.exports = Property;
