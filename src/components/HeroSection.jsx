import React from 'react';
import { Link } from 'react-router-dom';
// import heroimage from "public/Hero-Image.jpg"

const HeroSection = () => {
  return (
    <main className="bg-gradient-to-br from-[Gold] to-[silver] py-12">
      <div className="max-w-7xl mx-auto px-6 flex flex-col-reverse md:flex-row items-center gap-10">
        
        {/* Text Content */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold text-[#2D3748] mb-6">
            Connecting You to Peshawar’s Leading Software Houses
          </h1>
          <p className="text-lg text-[#4A5568] mb-6">
            Explore verified IT companies, discover career opportunities, and
            grow your tech network — all in one place.
          </p>
          <Link to="/softwareHouses">
            <button className="bg-[#328E6E] text-[#fff] px-6 py-3 rounded-md font-semibold hover:bg-[#26775C] focus:outline-none focus:ring-2 focus:ring-[#BEE3F8] transition cursor-pointer">
              Start Exploring
            </button>
          </Link>
        </div>

        {/* Image Section */}
        <div className="w-full md:w-1/2">
          <img
            src="/Hero-Image.jpg"
            alt="Hero-Image"
            className="w-full h-auto rounded-lg shadow-lg"
            loading="lazy"
          />
        </div>
      </div>
    </main>
  );
};

export default HeroSection;

