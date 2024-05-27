/* eslint-disable no-unused-vars */
// Footer.js

import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";

const Footer = () => {
  return (
    <footer className="bg-black py-8">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="text-white font-bold">&copy; PatthalGadi</div>
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a
            href="https://www.youtube.com/watch?v=HbgzrKJvDRw"
            className="text-white hover:text-gray-500"
          >
            <i className="fab fa-instagram"></i>
          </a>
          <a
            href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
            className="text-white hover:text-gray-500"
          >
            <i className="fab fa-youtube"></i>
          </a>
          <a
            href="https://www.youtube.com/watch?v=7usNDGgJSY4"
            className="text-white hover:text-gray-500"
          >
            <i className="fab fa-twitter"></i>
          </a>
          <a
            href="https://www.youtube.com/watch?v=qiqT0rJ7zIo"
            className="text-white hover:text-gray-500"
          >
            <i className="fab fa-linkedin"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
