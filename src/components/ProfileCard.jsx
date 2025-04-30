import React from 'react';
import ProfileImage from '/src/assets/IMG_1684.JPG'; // Adjust the path if needed

const ProfileCard = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 p-6">
      <div className="bg-white rounded-2xl shadow-xl overflow-hidden w-full max-w-sm text-center">
        <img 
          src={ProfileImage} 
          alt="Profile" 
          className="w-full h-72 object-cover object-center"
        />
        <div className="p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Abdal Hussain</h2>
          <p className="text-lg text-teal-600 font-semibold">MERN Stack Developer | DevHub's Founder </p>
          {/* <p className="text-md text-gray-600 mt-1"></p> */}
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
