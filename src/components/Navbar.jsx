// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  const navItems = [
    { id: 1, text: "Portfolio", href: "#portfolio" },
    { id: 2, text: "Hire me", href: "#hireme" },
    { id: 3, text: "Learn", href: "#learn" },
    { id: 4, text: "About", href: "#about" },
    { id: 5, text: "Contact", href: "#contact" },
  ];

  return (
    <div className="sticky top-0 bg-[#ffffff] z-50 w-full">
      <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4">
        <a href="/" className="text-3xl font-bold text-[#295c38]">
          PatthalGadi.
        </a>
        <div className="flex items-center">
          <ul className="hidden md:flex">
            {navItems.map((item) => (
              <li key={item.id} className="font-semibold m-2">
                <a
                  href={item.href}
                  className="p-4 hover:bg-[#aff0c2] rounded-xl cursor-pointer duration-300 hover:text-black"
                >
                  {item.text}
                </a>
              </li>
            ))}
          </ul>
          <div
            onClick={handleNav}
            className="block md:hidden z-50 cursor-pointer text-white"
          >
            {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
          </div>
        </div>
      </div>
      <ul
        className={`fixed top-0 left-0 w-full h-screen bg-[#ffffff] border-r border-gray-900 transition-transform duration-500 z-40 ${
          nav ? "transform translate-x-0" : "transform -translate-x-full"
        } md:hidden`}
      >
        <a href="/" className="text-3xl font-bold text-[#295c38] m-4">
          PatthalGadi.
        </a>
        {navItems.map((item) => (
          <li
            key={item.id}
            className="p-4 border-b border-gray-600 hover:bg-[#aff0c2] duration-300 hover:text-black cursor-pointer"
          >
            <a href={item.href}>{item.text}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
