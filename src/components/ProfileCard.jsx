import React from 'react';
import ProfileImage from '/abdal.JPG'; // Adjust the path if needed

const ProfileCard = () => {
  return (
    <div className="flex justify-center items-center min-h-screen rounded-lg bg-gradient-to-br from-[#FFFFFF] to-[#FFFFFF] p-6">
      <div className="bg-[#E1EEBC] rounded-2xl shadow-xl overflow-hidden w-full max-w-sm text-center">
        <img 
          src={ProfileImage} 
          alt="Profile" 
          className="w-full h-72 object-cover object-center"
        />
        <div className="p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Abdal Hussain</h2>
          <p className="text-lg text-teal-600 font-semibold">MERN Stack Developer | DevHub's Founder </p>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
