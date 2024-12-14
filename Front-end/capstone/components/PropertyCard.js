import React from 'react';

const PropertyCard = ({ property }) => {
  return (
    <div className="property-card">
      <h2>{property.name}</h2>
      <p>Location: {property.location}</p>
      <p>Rent: ₹{property.rent}</p>
      <p>Type: {property.type}</p>
      <p>Amenities: {property.amenities.join(", ")}</p>
      <p>Rating: {property.rating}</p>
    </div>
  );
};

export default PropertyCard;
