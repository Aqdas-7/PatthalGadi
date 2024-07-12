/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import UpdateCard from "./UpdateCard";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const Updates = ({ updates }) => {
  const [hovered, setHovered] = useState(null);
  const controls = useAnimation();
  const { ref, inView } = useInView({
    triggerOnce: false, // Animation triggers every time it comes into view
    threshold: 0.1, // Percentage of the section visible to trigger the animation
  });

  React.useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  return (
    <div className="container mx-auto px-0 py-12">
      <div className="bg-[#f5f5f5] p-6 shadow-lg ">
        <h2 className="text-4xl text-center font-black text-[#121212] mb-20">
          Trending
        </h2>

        <motion.div
          ref={ref}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          {updates.map((update, index) => (
            <UpdateCard
              key={index}
              update={update}
              isHovered={hovered === index}
              onMouseEnter={() => setHovered(index)}
              onMouseLeave={() => setHovered(null)}
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Updates;
