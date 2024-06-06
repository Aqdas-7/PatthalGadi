/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";

const Header = ({ backgroundImage, location, title, subtitle }) => {
  const controls = useAnimation();
  const [hasScrolled, setHasScrolled] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setHasScrolled(true);
      controls.start({
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease: "easeOut" },
      });
    } else {
      setHasScrolled(false);
      controls.start({
        opacity: 0.8,
        y: 10,
        transition: { duration: 0.5, ease: "easeOut" },
      });
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [controls]);

  return (
    <div
      className="relative w-full h-screen bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      <motion.div
        className="p-6 rounded-lg text-center sm:text-right max-w-screen-md mx-auto"
        initial={{ opacity: 0.8, y: 10 }}
        animate={controls}
        transition={{ duration: 1 }}
      >
        <p className="font-semibold text-gray-300 text-base sm:text-lg mb-2">
          {location}
        </p>
        <h2 className="font-bold text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-8">
          {title}
        </h2>
        <h3 className="font-semibold text-gray-300 text-lg sm:text-xl md:text-2xl mb-12">
          {subtitle}
        </h3>
      </motion.div>
      <style jsx>{`
        @media (max-width: 768px) {
          .relative {
            height: 50vh;
          }
          h2 {
            font-size: 2rem;
          }
          h3 {
            font-size: 1.2rem;
          }
        }
      `}</style>
    </div>
  );
};

export default Header;
