// import React from "react";

// const Footer = () => {
//   const date = new Date();

//   return (
//     // <div className='bg-gradient-to-l from-purple-400 via-pink-500 to-red-500 p-10'>
//     //     <p className='text-center text-[#E1EEBC]'>&copy; Copyright <b>Peshawar DevHub</b> {date.getFullYear()}</p>
//     // </div>
//     <div className="bg-[#16213E] p-10">
//       <p className="text-center text-[#A6B1E1]">
//         &copy; Copyright&nbsp;{date.getFullYear()}&nbsp;<b className="text-white">Peshawar DevHub</b> made by <b><a href="https://abdaloo.github.io/my_personal_portfolio_in_tailwindcss/" target="_blank">Abdal Hussain</a></b>
//       </p>
//     </div>
//   );
// };

// export default Footer;
import React from 'react';
import { Link } from 'react-router-dom';
import { SiPaloaltosoftware } from "react-icons/si";


function Footer() {
  return (
    <footer className="bg-[#328E6E] text-[#E1EEBC] py-10 mt-20">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Logo and Description */}
        <div>
          <div className='flex gap-2'>
          <span ><SiPaloaltosoftware className="text-white text-xl "/></span>
          <h2 className="text-2xl font-bold mb-2">DevHub</h2>
          </div>
          <p className="text-sm">
            DevHub is your go-to directory for exploring software houses in Peshawar.
            Connect with IT companies, find jobs, and grow in tech — all in one place.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><Link to="/" className="hover:text-white">Home</Link></li>
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
        © {new Date().getFullYear()} DevHub. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;

