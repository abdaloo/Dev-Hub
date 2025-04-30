import React from 'react';
import softwareHouses from '../data/softwareHouses';
import SearchBar from '../components/SearchBar';

const SoftwareHouses = () => {
  return (
    <>
    <SearchBar/>
    <div className="min-h-screen bg-gradient-to-br from-[#F7FAFC] to-[#E2E8F0] py-12 px-6">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-10">
        Explore Peshawar's Top Software Houses
      </h1>
      <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
        {softwareHouses.map((house) => (
          <div
            key={house.id}
            className="bg-white shadow-md rounded-2xl p-6 hover:shadow-xl transition"
          >
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">{house.name}</h2>
            <p className="text-gray-600 text-sm mb-3">{house.description}</p>
            <p className="text-sm text-gray-500 mb-1">
              📍 <span className="font-medium">{house.location}</span>
            </p>
            <div className="flex flex-wrap gap-2 mt-3 mb-4">
              {house.services.map((service, index) => (
                <span
                  key={index}
                  className="text-xs bg-[#4ECDC4] text-white px-2 py-1 rounded-full"
                >
                  {service}
                </span>
              ))}
            </div>
            <a
              href={house.website}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#1A202C] text-white px-4 py-2 rounded-md hover:bg-[#2D3748] transition"
            >
              Visit Website
            </a>
            {/* <a
              href={house.website}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-red-400 text-white m-2 px-4 py-2 rounded-md hover:bg-[#2D3748] transition"
            >
              Details
            </a> */}
          </div>
        ))}
      </div>
    </div>
  </>
  );
};

export default SoftwareHouses;
