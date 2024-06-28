/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Header = ({ backgroundImage, location, title, subtitle }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      controls.start({
        opacity: 1,
        x: 0,
        transition: { duration: 1, ease: "easeOut" },
      });
    } else {
      controls.start({
        opacity: 0.8,
        x: -200,
        transition: { duration: 0 },
      });
    }
  }, [controls, inView]);

  return (
    <div
      className="relative w-full min-h-screen bg-cover bg-center flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <motion.div
        ref={ref}
        className="p-6 rounded-lg text-center sm:text-right max-w-screen-md mx-auto"
        initial={{ opacity: 0.8, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <motion.p
          className="font-semibold text-gray-300 text-base sm:text-lg mb-2"
          initial={{ x: -200, opacity: 0 }}
          animate={controls}
        >
          {location}
        </motion.p>
        <motion.h2
          className="font-black text-white text-3xl sm:text-5xl md:text-6xl lg:text-7xl"
          initial={{ x: -200, opacity: 0 }}
          animate={controls}
        >
          {title}
        </motion.h2>
        <motion.h3
          className="font-semibold text-gray-300 text-lg sm:text-xl md:text-2xl"
          initial={{ x: -200, opacity: 0 }}
          animate={controls}
        >
          {subtitle}
        </motion.h3>
      </motion.div>
    </div>
  );
};

export default Header;
