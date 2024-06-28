/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const cardVariants = {
  hidden: { x: -100, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 0.5 } },
};

const UpdateCard = ({ update, isHovered, onMouseEnter, onMouseLeave }) => {
  return (
    <motion.div
      className={`p-6 rounded-lg transition-transform duration-300 transform ${
        isHovered ? "scale-105 shadow-2xl" : "scale-100"
      } bg-white`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      variants={cardVariants}
    >
      <img
        src={update.image}
        alt={update.title}
        className="w-full h-48 object-cover rounded-t-lg"
      />
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2 text-black">
          {update.title}
        </h3>
        <p className="text-gray-500 text-sm mb-2">{update.date}</p>
        <p className="text-black mb-2">{update.description}</p>
        <Link to={update.link} className="text-blue-500 hover:underline">
          Read more
        </Link>
      </div>
    </motion.div>
  );
};

export default UpdateCard;