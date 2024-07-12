/* eslint-disable react/display-name */
/* eslint-disable react/prop-types */
import React from "react";
import PropTypes from "prop-types";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

// Memoized TextSection to prevent unnecessary re-renders
const TextSection = React.memo(({ paragraphs }) => {
  return paragraphs.map((paragraph, index) => (
    <motion.p
      key={index}
      className="text-lg md:text-xl mb-6 text-justify"
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: index * 0.3 }}
    >
      {paragraph}
    </motion.p>
  ));
});

TextSection.propTypes = {
  paragraphs: PropTypes.arrayOf(PropTypes.string).isRequired,
};

const TextCarousel = ({ images, text, button }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  React.useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, x: 0 });
    } else {
      controls.start({ opacity: 0, x: -50 });
    }
  }, [controls, inView]);

  return (
    <div className="bg-[#43964e] text-[#f5f5f5] font-semibold p-8 md:p-16">
      <div className="max-w-screen-xl mx-auto">
        <h1 className="text-4xl font-black text-[#121212] mb-10 text-center py-12">
          About Us
        </h1>
        <div className="flex flex-col md:flex-row items-stretch justify-between">
          <motion.div
            ref={ref}
            className="md:w-1/2 mb-8 md:mb-0 md:mr-8 px-4 flex flex-col justify-between"
            initial={{ opacity: 0, x: 50 }}
            animate={controls}
            transition={{ duration: 0.5 }}
          >
            <TextSection paragraphs={text} />
            {button && <div className="mt-6 self-start">{button}</div>}
          </motion.div>
          <motion.div
            className="md:w-1/2 px-4"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Carousel
              showThumbs={false}
              interval={2200}
              showIndicators={false}
              autoPlay
              infiniteLoop
            >
              {images.map((image, index) => (
                <div key={index} className="w-full h-64 md:h-96">
                  <img
                    src={image}
                    alt={`Gallery ${index + 1}`}
                    className="object-cover w-full h-full"
                    loading="lazy"
                  />
                </div>
              ))}
            </Carousel>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

TextCarousel.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
  text: PropTypes.arrayOf(PropTypes.string).isRequired,
  button: PropTypes.node, // Accepts a node (React element) as a button
};

export default TextCarousel;
