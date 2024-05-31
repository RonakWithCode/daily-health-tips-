import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes, FaHome, FaHeartbeat, FaDumbbell, FaAppleAlt, FaUsers } from 'react-icons/fa';
import logo from '../assets/react.svg'; // Assuming you have a logo image

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Sidebar for larger screens */}
      <header className="hidden md:block bg-green-600 text-white h-full fixed w-64">
        <div className="p-4 flex flex-col items-center">
          <Link to="/" className="mb-8">
            <img src={logo} alt="Logo" className="h-10" />
          </Link>
          <nav className="flex flex-col space-y-6">
            <Link to="/" className="hover:text-gray-300 flex items-center">
              <FaHome className="mr-2" /> Home
            </Link>
            <Link to="/tips" className="hover:text-gray-300 flex items-center">
              <FaHeartbeat className="mr-2" /> Health Tips
            </Link>
            <Link to="/exercises" className="hover:text-gray-300 flex items-center">
              <FaDumbbell className="mr-2" /> Exercises
            </Link>
            <Link to="/nutrition" className="hover:text-gray-300 flex items-center">
              <FaAppleAlt className="mr-2" /> Nutrition
            </Link>
            <Link to="/community" className="hover:text-gray-300 flex items-center">
              <FaUsers className="mr-2" /> Community
            </Link>
          </nav>
        </div>
      </header>

      {/* Mobile navbar */}
      <header className="md:hidden bg-green-600 text-white fixed bottom-0 w-full flex justify-around items-center p-2 z-50">
        <Link to="/" className="hover:text-gray-300 flex flex-col items-center">
          <FaHome size={24} />
          <span className="text-xs">Home</span>
        </Link>
        <Link to="/tips" className="hover:text-gray-300 flex flex-col items-center">
          <FaHeartbeat size={24} />
          <span className="text-xs">Tips</span>
        </Link>
        <Link to="/exercises" className="hover:text-gray-300 flex flex-col items-center">
          <FaDumbbell size={24} />
          <span className="text-xs">Exercises</span>
        </Link>
        <Link to="/nutrition" className="hover:text-gray-300 flex flex-col items-center">
          <FaAppleAlt size={24} />
          <span className="text-xs">Nutrition</span>
        </Link>
        <Link to="/community" className="hover:text-gray-300 flex flex-col items-center">
          <FaUsers size={24} />
          <span className="text-xs">Community</span>
        </Link>
      </header>

      {/* Slider menu for small screens */}
      <div className={`fixed top-0 left-0 h-full w-64 bg-green-600 text-white transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out md:hidden`}>
        <div className="p-4">
          <button onClick={toggleMenu} className="mb-4">
            <FaTimes size={24} />
          </button>
          <Link to="/" className="block p-4 hover:bg-green-700 flex items-center" onClick={toggleMenu}>
            <FaHome className="mr-2" /> Home
          </Link>
          <Link to="/tips" className="block p-4 hover:bg-green-700 flex items-center" onClick={toggleMenu}>
            <FaHeartbeat className="mr-2" /> Health Tips
          </Link>
          <Link to="/exercises" className="block p-4 hover:bg-green-700 flex items-center" onClick={toggleMenu}>
            <FaDumbbell className="mr-2" /> Exercises
          </Link>
          <Link to="/nutrition" className="block p-4 hover:bg-green-700 flex items-center" onClick={toggleMenu}>
            <FaAppleAlt className="mr-2" /> Nutrition
          </Link>
          <Link to="/community" className="block p-4 hover:bg-green-700 flex items-center" onClick={toggleMenu}>
            <FaUsers className="mr-2" /> Community
          </Link>
        </div>
      </div>
    </>
  );
};

export default Header;
