import React, { useState } from 'react';
import softwareHousesData from '../data/softwareHousesData';
import { FaLocationDot } from "react-icons/fa6";

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
    setFilteredHouses(filtered);    
  };

  // const handleFilter = (criteria) => {
  //   const filtered = softwareHousesData.filter((house) => house.services.includes(criteria));
  //   setFilteredHouses(filtered);
  // };

  return (
    <div className="p-6 space-y-6">
      <div className="flex space-x-4">
        {/* Search Bar */}
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearch}
          placeholder="Search Software Houses..."
          className="p-2 border rounded-lg w-150 m-auto focus:ring-[#328E6E] focus:outline-none focus:ring-2"
        />
        
        {/* Filter Button */}
        {/* <button
          onClick={() => handleFilter('IoT Solutions')} // You can change this to the criteria you want to filter
          className="px-4 py-2 bg-[#328E6E] hover:bg-[#26775C] text-white rounded-lg"
        >
          Filter
        </button> */}
      </div>

      {/* Display filtered software houses */}
      <div className="mt-6 space-y-4 grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
        {filteredHouses.length > 0 ? (
          filteredHouses.map((house) => (
            <div
              key={house.id}
              className="bg-white shadow-md rounded-2xl p-6 hover:shadow-xl transition"
            >
            
            <a
                href={house.website}
                target="_blank"
                rel="noopener noreferrer"
                className=" text-[#E1EEBD] hover:rounded-2xl  font-semibold transition mt-5 cursor-pointer  "
              >
                <div className='text-center h-40'>
                  <img src={house.imageUrl} className='max-w-40 w-70 m-auto my-5 h-20 object-contain' alt="SoftwareHouse-logo" />
                  <h2 className="inline-block text-2xl font-semibold text-[#328E6E] hover:text-[#306250] mb-2 transition-all duration-100 hover:border-b-2 border-[#306250] ">
                  {house.name}
                  </h2>
                </div>
                </a>
              <p className="text-gray-600 text-sm mb-3">{house.description}</p>
              <p className="text-sm text-gray-500 mb-1 flex items-center gap-2">
              <FaLocationDot className='text-[#f4431f]'/> <span className="font-medium text-black">{house.location}</span>
              </p>
              <div className="flex flex-wrap gap-2 mt-3 mb-4">
                {house.services.map((service, index) => (
                  <span
                    key={index}
                    className="text-xs bg-[#E1EEBD] text-[#328E6E] px-2 py-1 rounded-full"
                  >
                    {service}
                  </span>
                ))}
              </div>
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
