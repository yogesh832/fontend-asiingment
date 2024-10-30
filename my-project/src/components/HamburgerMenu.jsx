import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed top-8 md-[top-8] md-[left-16] left-14">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="text-xl text-white bg-blue-500 p-1 rounded-sm focus:outline-none"
      >
        <FaBars />
      </button>
      {isOpen && (
        <div className="absolute top-10 left-0 bg-white shadow-md rounded-lg py-2">
          <a href="#home" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Home</a>
          <a href="#about" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">About</a>
          <a href="#contact" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Contact</a>
        </div>
      )}
    </div>
  );
};

export default HamburgerMenu;
