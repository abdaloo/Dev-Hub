import React from 'react';
import SearchBar from '../components/SearchBar';

const SoftwareHouses = () => {
  return (
    <>
    <div className="min-h-screen bg-gradient-to-br from-[#E1EEBC] to-[#E1EEBC] py-12 px-6">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-10">
        Explore Peshawar's Top Software Houses
      </h1>
        <SearchBar/>
    </div>
  </>
  );
};

export default SoftwareHouses;
