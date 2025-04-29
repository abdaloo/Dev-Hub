import React, { useState } from "react";
import { Link } from "react-router-dom";
import { SiPaloaltosoftware } from "react-icons/si";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-[#1A1A2E] p-4 sticky top-0 z-50 shadow-md">
  <div className="max-w-7xl mx-auto flex justify-between items-center">
    {/* Logo */}
    <div className="flex items-center gap-2">
        {/* <img className="max-w-10 text-white" src="./src/assets/logo2.png" alt="" /> */}
        <span ><SiPaloaltosoftware className="text-white text-2xl"/></span>
      <Link to='/'><h1 className="text-4xl text-[#FF6B6B] font-bold">𝙳𝚎𝚟𝙷𝚞𝚋</h1></Link>
    </div>

    {/* Desktop Menu */}
    <nav className="hidden md:flex">
      <ul className="flex gap-6 text-[18px] text-[#A6B1E1] items-center font-semibold">
        <Link to="/">
          <li className="hover:text-[#4ECDC4] transition ">Home</li>
        </Link>
        <Link to="/about">
          <li className="hover:text-[#4ECDC4] transition">About</li>
        </Link>
        <Link to="/softwareHouses">
          <li className="hover:text-[#4ECDC4] transition">Software Houses</li>
        </Link>
        <Link to="/contact">
          <li className="hover:text-[#4ECDC4] transition">Contact</li>
        </Link>
      </ul>
    </nav>

    {/* Sign Up / Log In */}
    <div className="flex gap-4">
      <button className="bg-[#FF6B6D] text-white px-4 py-2 rounded-md font-semibold hover:bg-[#e55a5a] transition">
        Sign Up
      </button>
      <button className="bg-[#4ECDC4] text-[#1A1A2E] px-4 py-2 rounded-md font-semibold hover:bg-[#3db6ac] transition">
        Login
      </button>
    </div>

    {/* Mobile Hamburger Button */}
    <div className="md:hidden">
      <button
        onClick={toggleMenu}
        className="text-[#A6B1E1] focus:outline-none"
      >
        {isOpen ? (
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        ) : (
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        )}
      </button>
    </div>
  </div>

  {/* Mobile Menu Links */}
  {isOpen && (
    <nav className="md:hidden mt-4">
      <ul className="flex flex-col gap-4 text-lg text-[#A6B1E1] items-center">
        <Link to="/home">
          <li onClick={toggleMenu} className="hover:text-[#4ECDC4]">Home</li>
        </Link>
        <Link to="/about">
          <li onClick={toggleMenu} className="hover:text-[#4ECDC4]">About</li>
        </Link>
        <Link to="/softwareHouses">
          <li onClick={toggleMenu} className="hover:text-[#4ECDC4]">Software Houses</li>
        </Link>
        <Link to="/contact">
          <li onClick={toggleMenu} className="hover:text-[#4ECDC4]">Contact</li>
        </Link>
      </ul>
    </nav>
  )}
    </header>
  )
}

// export default Header;

export default Navbar;

// import React from 'react'
// import { Link } from 'react-router-dom'

// const Navbar = () => {
//   return (
//     <>
//         <div className='flex justify-between bg-[#328E6E] p-7 sticky top-0'>
//             <div className='flex gap-5 items-center box-border'>
//                 <h1 className='text-3xl text-[#E1EEBC] font-bold'>𝙳𝚎𝚋𝙷𝚞𝚋</h1>
//             </div>
//             <nav className='flex gap-5'>
//                 <ul className='flex gap-5 text-lg text-[#E1EEBC]'>
//                     <Link to="/home"><li>Home</li></Link>
//                     <Link to="/about"><li>About</li></Link>
//                     <Link to="/softwareHouses"><li>Software Houses</li></Link>
//                     <Link to="/contact"><li>Contact</li></Link>
//                 </ul>
//             </nav>
//         </div>
//     </>
//   )
// }