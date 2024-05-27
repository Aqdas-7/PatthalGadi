/* eslint-disable no-unused-vars */
import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const About = () => {
  return (
    <section className="bg-black py-12 px-4 md:px-8 lg:px-16">
      <h1 className="text-gray-200 text-4xl font-black mb-10 text-center">
        About Us
      </h1>
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-stretch lg:items-center">
        <div className="w-full lg:w-1/2 mb-12 lg:mb-0 lg:pr-8 flex-shrink-0">
          <Carousel
            showThumbs={false}
            autoPlay
            infiniteLoop
            showStatus={false}
            interval={2200}
            stopOnHover
            transitionEffect="fade"
            // showArrows={false} // Hide navigation arrows
            showIndicators={false} // Hide circles at the bottom
            className="rounded-lg shadow-lg relative"
          >
            <div className="carousel-image-container">
              <div className="image-wrapper">
                <img
                  src="https://images.unsplash.com/photo-1553880376-2dec478c8e3b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8NDZ8fHxlbnwwfHx8fHw%3D/600x400"
                  alt="Description 1"
                />
              </div>
            </div>
            <div className="carousel-image-container">
              <div className="image-wrapper">
                <img
                  src="https://images.unsplash.com/photo-1554110397-9bac083977c6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8Njl8fHxlbnwwfHx8fHw%3D/600x400"
                  alt="Description 2"
                />
              </div>
            </div>
            <div className="carousel-image-container">
              <div className="image-wrapper">
                <img
                  src="https://images.unsplash.com/photo-1554147090-e1221a04a025?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8NjV8fHxlbnwwfHx8fHw%3D/600x400"
                  alt="Description 3"
                />
              </div>
            </div>
          </Carousel>
        </div>
        <div className="px-8 sm:py-6 w-full lg:w-1/2 flex flex-col justify-center">
          {/* <h1 className="text-4xl font-bold mb-4 text-white">
            About PatthalGadi
          </h1>
          <p className="text-xl mb-4 text-white">
            Photographer. Filmmaker. Environmental Advocate.
          </p> */}
          <p className="text-lg text-white mb-6">
            We are an independent group of photographers and filmmakers using
            visual storytelling to highlight the stories from the front lines of
            the global climate crisis. Combining our background in science with
            a passion for environmental issues, we aim to raise awareness and
            inspire action through our work.
          </p>
          <blockquote className="border-l-4 border-gray-300 pl-4 mb-6 text-lg text-white">
            “PatthalGadi embodies a rare combination of a mind and an eye. His
            work on desertification in China especially is nuanced, informative,
            and beautiful. On top of his artistic skills, PatthalGadi is
            consummately professional.”
            <cite className="block mt-2 text-sm text-white">
              — Miki Johnson, Editor, LiveBooks
            </cite>
          </blockquote>
          <p className="text-lg text-white">
            Originally from India, we have lived and worked across Asia for
            nearly 20 years, currently based out of Beijing, China. Our work has
            been featured in leading news outlets, such as National Geographic
            TV, CNN, and The Guardian.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
