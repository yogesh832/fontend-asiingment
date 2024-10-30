import React from "react";
import { FaTwitter, FaLinkedin, FaInstagram, FaYoutube } from "react-icons/fa";

const SocialIcons = () => {
  return (
    <div className="fixed right-2 bottom-2  transform  flex flex-col space-y-1">
      <a
        href="https://twitter.com"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-blue-500 text-white p-3 "
      >
        <FaTwitter size={24} />
      </a>
      <a
        href="https://linkedin.com"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-blue-700 text-white p-3 "
      >
        <FaLinkedin size={24} />
      </a>
      <a
        href="https://instagram.com"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-pink-500 text-white p-3 "
      >
        <FaInstagram size={24} />
      </a>
      <a
        href="https://youtube.com"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-red-600 text-white p-3 "
      >
        <FaYoutube size={24} />
      </a>
    </div>
  );
};

export default SocialIcons;
