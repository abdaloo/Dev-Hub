import React from "react";

const Footer = () => {
  const date = new Date();

  return (
    // <div className='bg-gradient-to-l from-purple-400 via-pink-500 to-red-500 p-10'>
    //     <p className='text-center text-[#E1EEBC]'>&copy; Copyright <b>Peshawar DevHub</b> {date.getFullYear()}</p>
    // </div>
    <div className="bg-[#16213E] p-10">
      <p className="text-center text-[#A6B1E1]">
        &copy; Copyright&nbsp;{date.getFullYear()}&nbsp;<b className="text-white">Peshawar DevHub</b> made by <b><a href="https://abdaloo.github.io/my_personal_portfolio_in_tailwindcss/" target="_blank">Abdal Hussain</a></b>
      </p>
    </div>
  );
};

export default Footer;
