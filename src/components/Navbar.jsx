/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
// import Capture8 from "../assets/Capture-8.jpg";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  const handleNav = () => {
    setNav(!nav);
  };

  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;
    setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
    setPrevScrollPos(currentScrollPos);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos, visible, handleScroll]);

  const navItems = [
    { id: 1, text: "Portfolio", href: "/portfolio" },
    { id: 2, text: "Hire me", href: "/hireme" },
    { id: 3, text: "Learn", href: "/learn" },
    { id: 4, text: "About", href: "/about" },
    { id: 5, text: "Contact", href: "/contact" },
  ];

  return (
    <div
      className={`h-fit fixed top-0  w-full z-50 transition-transform duration-200 ease-in-out ${
        visible ? "transform translate-y-0" : "transform -translate-y-full"
      }`}
    >
      <div className="bg-white shadow-md w-full overflow-x-hidden">
        <div className="flex justify-between items-center h-20 max-w-7xl mx-auto px-1 sm:px-6 lg:px-8">
          <Link
            to="/"
            className="text-3xl text-left font-bold text-[#295c38] flex items-center"
          >
            PatthalGadi.
          </Link>
          <div className="hidden md:flex space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.id}
                to={item.href}
                className="font-semibold p-2 hover:bg-black rounded-xl transition duration-300 hover:text-white"
              >
                {item.text}
              </Link>
            ))}
          </div>
          <div
            onClick={handleNav}
            className="block md:hidden z-50 cursor-pointer text-black"
          >
            {nav ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={24} />}
          </div>
        </div>
        <div
          className={`md:hidden fixed top-0 left-0 w-full h-full bg-white transition-transform duration-500 ease-in-out z-40 ${
            nav ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <ul className="flex flex-col items-center space-y-6 mt-10 px-4 bg-white">
            {navItems.map((item) => (
              <li key={item.id} className="w-full text-center">
                <Link
                  to={item.href}
                  className="block w-full p-4 font-semibold border border-gray-200 hover:bg-[#000000] transition duration-300 hover:text-white"
                  onClick={handleNav}
                >
                  {item.text}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
