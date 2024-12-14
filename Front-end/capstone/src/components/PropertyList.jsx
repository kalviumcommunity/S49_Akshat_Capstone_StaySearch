import React, { useEffect, useState } from 'react';
import PropertyCard from './PropertyCard';

const PropertyList = () => {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/properties') 
      .then((response) => response.json())
      .then((data) => setProperties(data));
  }, []);

  return (
    <div className="property-list">
      {properties.map((property) => (
        <PropertyCard key={property._id} property={property} />
      ))}
    </div>
  );
};

export default PropertyList;
