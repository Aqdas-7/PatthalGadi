// eslint-disable-next-line no-unused-vars
import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { RiInstagramFill } from "react-icons/ri";
import { FaYoutube, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-[#121212] py-8">
      <div className="container mx-auto flex flex-col items-center">
        <h2 className="text-[#f5f5f5] text-2xl font-bold mb-6">Follow Us</h2>
        <div className="flex space-x-6">
          <a
            href="https://www.instagram.com/patthalgadi?igsh=Yml6Y292ZXo5a3do&utm_source=qr"
            className="text-[#f5f5f5] hover:text-[#e44dbe] flex items-center justify-center w-12 h-12 rounded-full transition duration-300"
          >
            <RiInstagramFill size={28} />
          </a>
          <a
            href="https://youtu.be/sIn08F7Dw4o?si=a-0x6_kXGdAAcxaF"
            className="text-[#f5f5f5] hover:text-[#E62117] flex items-center justify-center w-12 h-12 rounded-full transition duration-300"
          >
            <FaYoutube size={28} />
          </a>
          <a
            href="https://youtu.be/sIn08F7Dw4o?si=a-0x6_kXGdAAcxaF"
            className="text-[#f5f5f5] hover:text-[#5ae96d] flex items-center justify-center w-12 h-12 rounded-full transition duration-300"
          >
            <FaXTwitter size={28} />
          </a>
          <a
            href="https://youtu.be/sIn08F7Dw4o?si=a-0x6_kXGdAAcxaF"
            className="text-[#f5f5f5] hover:text-[#0077B5] flex items-center justify-center w-12 h-12 rounded-full transition duration-300"
          >
            <FaLinkedin size={28} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
