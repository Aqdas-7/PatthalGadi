// eslint-disable-next-line no-unused-vars
import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";

const Footer = () => {
  return (
    <footer className="bg-[#454545] py-8">
      <div className="container mx-auto flex flex-col items-center">
        <h2 className="text-white text-2xl font-bold mb-6">Follow Us</h2>
        <div className="flex space-x-6">
          <a
            href="https://www.youtube.com/watch?v=HbgzrKJvDRw"
            className="text-white hover:text-[#90e658] flex items-center justify-center w-12 h-12 border-2 border-white hover:border-[#454545] rounded-full transition duration-300"
          >
            <i className="fab fa-instagram text-2xl"></i>
          </a>
          <a
            href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
            className="text-white hover:text-[#90e658] flex items-center justify-center w-12 h-12 border-2 border-white hover:border-[#454545] rounded-full transition duration-300"
          >
            <i className="fab fa-youtube text-2xl"></i>
          </a>
          <a
            href="https://www.youtube.com/watch?v=7usNDGgJSY4"
            className="text-white hover:text-[#90e658] flex items-center justify-center w-12 h-12 border-2 border-white hover:border-[#454545] rounded-full transition duration-300"
          >
            <i className="fab fa-twitter text-2xl"></i>
          </a>
          <a
            href="https://www.youtube.com/watch?v=qiqT0rJ7zIo"
            className="text-white hover:text-[#90e658] flex items-center justify-center w-12 h-12 border-2 border-white hover:border-[#454545] rounded-full transition duration-300"
          >
            <i className="fab fa-linkedin text-2xl"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
