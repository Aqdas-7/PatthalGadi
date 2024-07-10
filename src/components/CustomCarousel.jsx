/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const CustomCarousel = ({ images, captions }) => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 3,
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

  return (
    <div className="w-full mb-8 carousel-container">
      <Carousel
        responsive={responsive}
        infinite
        autoPlay
        autoPlaySpeed={1500}
        keyBoardControl
        showDots={false}
        arrows
        customTransition="transform 750ms ease-in-out"
        transitionDuration={750}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        itemClass="carousel-item-padding-40-px"
      >
        {images.map((imageUrl, index) => (
          <div key={index} className="relative p-2">
            <div className="w-full h-64 md:h-80 lg:h-96">
              <img
                src={imageUrl}
                alt={`Slide ${index}`}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            {captions && captions[index] && (
              <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black/70 to-transparent text-white rounded-b-lg">
                <h2 className="text-lg font-bold">{captions[index]}</h2>
              </div>
            )}
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default CustomCarousel;
