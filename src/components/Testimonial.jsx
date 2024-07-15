/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
// src/components/Testimonial.js
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const Testimonial = ({ testimonials }) => {
  return (
    <div className="bg-[#f5f5f5] py-1 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <Carousel
          responsive={responsive}
          infinite
          autoPlay
          autoPlaySpeed={2000}
          customTransition="transform 750ms ease-in-out"
          transitionDuration={750}
          containerClass="carousel-container"
          itemClass="carousel-item-padding-40-px px-2"
        >
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="flex flex-col items-center bg-[#121212] p-6 rounded-lg shadow-lg gap-3"
            >
              <img
                className="w-32 h-32 rounded-full"
                src={testimonial.image}
                alt={testimonial.name}
              />
              <p className="flex flex-col text-base text-[#f5f5f5] font-bold">
                {testimonial.name}
              </p>
              <p className="flex flex-col text-white text-sm">
                {testimonial.profile}
              </p>
              <blockquote className="mt-3 max-w-80 text-left text-[#f5f5f5]">
                {testimonial.quote}
              </blockquote>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default Testimonial;
