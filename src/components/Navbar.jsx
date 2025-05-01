import { Link } from 'react-router-dom';
import { SiPaloaltosoftware } from 'react-icons/si';
import { useState } from 'react';
import SignUpForm from './SignIn';


function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="bg-[#328E6E] p-4 sticky top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center">

        {/* Logo */}
        <div className="flex items-center gap-2">
          <Link to='/' className='flex gap-3'>
            <img src="./src/assets/coding2-2.png" alt="" className='w-10'/> 
          {/* <span><SiPaloaltosoftware className="text-white text-2xl" /></span> */}
            <h1 className="text-4xl text-[#E1EEBC] font-bold">𝙳𝚎𝚟𝙷𝚞𝚋</h1>
          </Link>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex">
          <ul className="flex gap-6 text-[18px] text-white items-center font-semibold">
            <Link to="/"><li className="hover:text-[#E1EEBC] transition text-sm" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Home</li></Link>
            <Link to="/about"><li className="hover:text-[#E1EEBC] transition text-sm" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>About</li></Link>
            <Link to="/softwareHouses"><li className="hover:text-[#E1EEBC] transition text-sm" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Software Houses</li></Link>
            <Link to="/contact"><li className="hover:text-[#E1EEBC] transition text-sm" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Contact</li></Link>
          </ul>
        </nav>

        {/* Sign Up / Log In */}
        <div className="hidden md:flex gap-4">
          <Link to="/SignUpForm">
            <button className="bg-white text-[#328E6E] px-4 py-2 rounded-md font-semibold hover:bg-gray-100 transition cursor-pointer">
              Sign in
            </button>
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            {isOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Links */}
      {isOpen && (
        <nav className="md:hidden mt-4">
          <ul className="flex flex-col gap-4 text-lg text-white items-center">
            <Link to="/"><li onClick={toggleMenu} className="hover:text-[#E1EEBC]">Home</li></Link>
            <Link to="/about"><li onClick={toggleMenu} className="hover:text-[#E1EEBC]">About</li></Link>
            <Link to="/softwareHouses"><li onClick={toggleMenu} className="hover:text-[#E1EEBC]">Software Houses</li></Link>
            <Link to="/contact"><li onClick={toggleMenu} className="hover:text-[#E1EEBC]">Contact</li></Link>
          </ul>

          {/* Mobile Buttons */}
          <div className="mt-4 flex flex-col items-center gap-3">
            <button className="bg-white text-[#328E6E] px-4 py-2 rounded-md font-semibold hover:bg-gray-100 transition">
              Sign in
            </button>
            {/* <button className="bg-[#E1EEBC] text-[#328E6E] px-4 py-2 rounded-md font-semibold hover:bg-[#d3e29b] transition">
              Login
            </button> */}
          </div>
        </nav>
      )}
    </header>
  );
}

export default Header;
