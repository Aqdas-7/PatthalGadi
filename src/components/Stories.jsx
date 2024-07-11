/* eslint-disable react/prop-types */
import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

const containerVariants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 50,
      damping: 20,
    },
  },
};

const hoverVariants = {
  scale: 1.05,
  boxShadow: "0px 10px 20px rgba(1,2,3,1)",
};

// Function to sanitize the title to be URL-friendly
const sanitizeTitle = (title) => {
  return title
    .toLowerCase()
    .replace(/ /g, "-")
    .replace(/[^\w-]+/g, "");
};

const Stories = ({ stories }) => {
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
    <section ref={ref} className="bg-[#f5f5f5] py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl text-center font-black text-[#121212] sm:text-4xl mb-20">
          Featured Stories
        </h2>
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 "
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          {stories.map((story) => (
            <motion.div
              key={story.id}
              className="relative overflow-hidden rounded-lg shadow-lg transform transition-transform duration-200"
              style={{ paddingBottom: "80%" }}
              variants={cardVariants}
              whileHover={hoverVariants}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to={`/story/${sanitizeTitle(story.title)}`}
                className="absolute inset-0"
              >
                <img
                  className="absolute inset-0 w-full h-full object-cover"
                  src={story.imageUrl}
                  alt={story.title}
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 p-2 sm:p-4">
                  <h3 className="text-sm sm:text-base lg:text-lg font-bold text-white text-center">
                    {story.title}
                  </h3>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Stories;
