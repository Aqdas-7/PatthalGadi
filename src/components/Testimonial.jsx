/* eslint-disable no-unused-vars */
// src/components/Testimonial.js
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const testimonials = [
  {
    quote:
      "This mentorship program has been a game-changer for me. I've learned so much and feel confident in my abilities now.",
    name: "Student A",
    image:
      "https://images.unsplash.com/photo-1720640320081-763dc112f1b1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2fHx8ZW58MHx8fHx8",
  },
  {
    quote:
      "A wonderful experience that helped me grow both personally and professionally. I can't thank my mentor enough.",
    name: "Student B",
    image:
      "https://plus.unsplash.com/premium_photo-1719850361637-b9514dfbee5b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1fHx8ZW58MHx8fHx8",
  },
  {
    quote:
      "A wonderful experience that helped me grow both personally and professionally. I can't thank my mentor enough.",
    name: "Student C",
    image:
      "https://images.unsplash.com/photo-1718976142386-e9ebe34d3aee?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzOXx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    quote:
      "A wonderful experience that helped me grow both personally and professionally. I can't thank my mentor enough.",
    name: "Student D",
    image:
      "https://images.unsplash.com/photo-1720329461017-d6ed9f66beb5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0N3x8fGVufDB8fHx8fA%3D%3D",
  },
  {
    quote:
      "A wonderful experience that helped me grow both personally and professionally. I can't thank my mentor enough.",
    name: "Student E",
    image:
      "https://plus.unsplash.com/premium_photo-1701889905370-86796636710a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1OHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    quote:
      "A wonderful experience that helped me grow both personally and professionally. I can't thank my mentor enough.",
    name: "Student F",
    image:
      "https://images.unsplash.com/photo-1719336234156-320dafbac51a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2NHx8fGVufDB8fHx8fA%3D%3D",
  },
  // Add more testimonials as needed
];

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

const Testimonial = () => {
  return (
    <div className="bg-[#f5f5f5] py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl text-[#121212] font-extrabold text-center mb-12 uppercase bg-gray-200">
          Testimonials
        </h2>
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
              className="flex flex-col items-center bg-[#121212] p-6 rounded-lg shadow-lg gap-6"
            >
              <img
                className="w-16 h-16 rounded-full"
                src={testimonial.image}
                alt={testimonial.name}
              />
              <p className="text-base text-[#f5f5f5] font-bold">
                {testimonial.name}
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
