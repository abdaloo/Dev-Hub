import { Link } from 'react-router-dom';
import { useState,useEffect } from 'react';

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY) {
        // scrolling down
        setShowNavbar(false);
      } else {
        // scrolling up
        setShowNavbar(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <header className={`p-4 shadow-md sticky top-0 left-0 w-full z-50 transition-transform duration-300 ${
      showNavbar ? "translate-y-0" : "-translate-y-full"
    } bg-[#328E6E] shadow`}>
      <div className="max-w-7xl mx-auto flex justify-between items-center">

        {/* Logo */}
        <div className="flex items-center gap-2">
          <Link to='/' className='flex gap-3' onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <img src="/coding2-2.png" alt="" className='w-10'/> 
            <h1 className="text-4xl text-[#E1EEBC] font-bold">𝙳𝚎𝚟𝙷𝚞𝚋</h1>
          </Link>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex">
          <ul className="flex gap-6 text-[18px] text-white items-center font-semibold">
            <Link to="/">
            <li className="hover:text-[#E1EEBC] transition text-sm" 
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                >Home</li>
            </Link>
            <Link to="/about">
            <li className="hover:text-[#E1EEBC] transition text-sm" 
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                >About</li>
            </Link>
            <Link to="/softwareHouses">
            <li className="hover:text-[#E1EEBC] transition text-sm" 
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                >Software Houses</li>
            </Link>
            <Link to="/contact">
            <li className="hover:text-[#E1EEBC] transition text-sm" 
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
               >Contact Us</li>
            </Link>
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

      {/* OnResponse Menu Links */}
      {isOpen && (
        <nav className="md:hidden mt-4">
          <ul className="flex flex-col gap-4 text-lg text-white items-center">
            <Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <li onClick={toggleMenu} className="hover:text-[#E1EEBC]" >Home</li>
            </Link>
            <Link to="/about" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <li onClick={toggleMenu} className="hover:text-[#E1EEBC]">About</li>
            </Link>
            <Link to="/softwareHouses" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <li onClick={toggleMenu} className="hover:text-[#E1EEBC]">Software Houses</li>
            </Link>
            <Link to="/contact" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <li onClick={toggleMenu} className="hover:text-[#E1EEBC]">Contact</li>
            </Link>
          </ul>

          {/* OnResponse Buttons */}
          <div className="mt-4 flex flex-col items-center gap-3">
            <button className="bg-white text-[#328E6E] px-4 py-2 rounded-md font-semibold hover:bg-gray-100 transition">
              <Link to="/SignUpForm">Sign in</Link>
            </button>
          </div>
        </nav>
      )}
    </header>
  );
}

export default Header;
