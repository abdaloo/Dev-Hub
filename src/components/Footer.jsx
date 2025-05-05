// export default Footer;
import React from 'react';
import { Link } from 'react-router-dom';
import { SiPaloaltosoftware } from "react-icons/si";


function Footer() {
  return (
    <footer className="bg-[#328E6E] text-[#E1EEBC] py-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Logo and Description */}
        <div>
          <div className='flex gap-2 items-center'>
            <Link to="/" className='flex my-3 gap-2'>
            {/* <span className="text-white text-2xl mb-1"><SiPaloaltosoftware/></span> */}
              <img src="/coding2-2.png" alt="" className='w-10 mb-1.5 mr-1'/>
              <h2 className="text-2xl font-bold mb-2">𝙳𝚎𝚟𝙷𝚞𝚋</h2>
            </Link>
          </div>
          <p className="text-sm">
            DevHub is your go-to directory for exploring software houses in Peshawar.
            Connect with IT companies, find jobs, and grow in tech — all in one place.
          </p>
      
            <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="bg-white text-[#328E6E] px-4 py-2 rounded-md font-semibold hover:bg-gray-100 transition mt-5 cursor-pointer">
              Back To Top
            </button>
          
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><Link to="/" className="hover:text-white" >Home</Link></li>
            <li><Link to="/about" className="hover:text-white">About</Link></li>
            <li><Link to="/softwareHouses" className="hover:text-white">Software Houses</Link></li>
            <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
          <p className="text-sm">Peshawar, Pakistan</p>
          <p className="text-sm">Email: support@devhub.com</p>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="text-center mt-10 text-sm border-t border-[#E1EEBC] pt-4">
       Copyright &copy; 2024-{new Date().getFullYear()} <b>DevHub</b>. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;

