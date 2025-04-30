import React, { useState } from 'react';
import softwareHousesData from '../data/softwareHousesData';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredHouses, setFilteredHouses] = useState(softwareHousesData); // assuming softwareHouses is your list of data

  const handleSearch = (event) => {
    const term = event.target.value.toLowerCase();
    setSearchTerm(term);

    const filtered = softwareHousesData.filter((house) =>
      house.name.toLowerCase().includes(term) ||
      house.services.some(service => service.toLowerCase().includes(term)) ||
      house.location.toLowerCase().includes(term)
    );
    //Changes to be made below
    setFilteredHouses(filtered);

    
  };

  const handleFilter = (criteria) => {
    const filtered = softwareHousesData.filter((house) => house.services.includes(criteria));
    setFilteredHouses(filtered);
  };

  return (
    <div className="p-6 space-y-6">
      <div className="flex space-x-4">
        {/* Search Bar */}
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearch}
          placeholder="Search Software Houses..."
          className="p-2 border rounded-lg w-screen "
        />
        
        {/* Filter Button */}
        <button
          onClick={() => handleFilter('IoT Solutions')} // You can change this to the criteria you want to filter
          className="px-4 py-2 bg-blue-500 text-white rounded-lg"
        >
          Filter
        </button>
      </div>

      {/* Display filtered software houses */}
      <div className="mt-6 space-y-4">
        {filteredHouses.length > 0 ? (
          filteredHouses.map((house) => (
            <div key={house.id} className="p-4 border rounded-lg">
              <h3 className="text-xl font-bold">{house.name}</h3>
              <p className="text-sm">{house.description}</p>
              <p className="text-sm"><strong>Location:</strong> {house.location}</p>
              <p className="text-sm"><strong>Services:</strong> {house.services.join(', ')}</p>
              <a href={house.website} target="_blank" rel="noopener noreferrer" className="text-blue-500">
                Visit Website
              </a>
            </div>
          ))
        ) : (
          <p>No software houses found.</p>
        )}
      </div>
    </div>
  );
};

export default SearchBar;
