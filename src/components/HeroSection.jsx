import React from 'react'
import { Link } from 'react-router-dom'

const HeroSection = () => {
  return (
    <main className="bg-[#0F1320] py-12">
      <div className="max-w-7xl mx-auto px-6 flex flex-col-reverse md:flex-row items-center gap-10">
        {/* Text Content */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Connecting You to Peshawar’s Leading Software Houses
          </h1>
          <p className="text-lg text-[#A6B1E1] mb-6">
            Explore verified IT companies, discover career opportunities, and
            grow your tech network — all in one place.
          </p>
          <Link to="/softwareHouses">
          <button className="bg-[#4ECDC4] text-[#1A1A2E] px-6 py-3 rounded-md font-semibold hover:bg-[#3db6ac] transition cursor-pointer">
            Start Exploring
          </button>
          </Link>
        </div>

        {/* Image Section */}
        <div className="w-full md:w-1/2">
          <img
            src="./src/assets/Hero-Image.jpg"
            alt="Hero-Image"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
      </div>
    </main>
  )
}

export default HeroSection