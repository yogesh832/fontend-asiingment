import React from "react";
import { FaTwitter, FaLinkedin, FaInstagram, FaYoutube } from "react-icons/fa";

const SocialIcons = () => {
  return (
    <div className="fixed right-2 sm:right-10 bottom-6 flex flex-col space-y-2 md:space-y-2 lg:space-y-2">
      <a
        href="https://twitter.com"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-blue-500 text-white p-2 transition-transform transform hover:scale-105 rounded-lg shadow-lg"
      >
        <FaTwitter size={36} />
      </a>
      <a
        href="https://linkedin.com"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-blue-700 text-white p-2 transition-transform transform hover:scale-105 rounded-lg shadow-lg"
      >
        <FaLinkedin size={36} />
      </a>
      <a
        href="https://instagram.com"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-pink-500 text-white p-2 transition-transform transform hover:scale-105 rounded-lg shadow-lg"
      >
        <FaInstagram size={36} />
      </a>
      <a
        href="https://youtube.com"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-red-600 text-white p-2 transition-transform transform hover:scale-105 rounded-lg shadow-lg"
      >
        <FaYoutube size={36} />
      </a>
    </div>
  );
};

export default SocialIcons;
