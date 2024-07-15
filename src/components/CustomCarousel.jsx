/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

const CustomCarousel = ({ images, captions }) => {
  const [isZoomed, setIsZoomed] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

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

  const handleImageClick = (index) => {
    setCurrentImageIndex(index);
    setIsZoomed(true);
  };

  const navigateToImage = (direction) => {
    let newIndex = currentImageIndex + direction;
    if (newIndex < 0) {
      newIndex = images.length - 1;
    } else if (newIndex >= images.length) {
      newIndex = 0;
    }
    setCurrentImageIndex(newIndex);
  };

  return (
    <div className="w-full mb-8 carousel-container">
      <Carousel
        responsive={responsive}
        infinite
        autoPlay
        autoPlaySpeed={2000}
        keyBoardControl
        showDots={false}
        arrows={false} // Removed carousel arrows
        customTransition="transform 750ms ease-in-out"
        transitionDuration={750}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        itemClass="carousel-item-padding-40-px"
        loading="lazy"
      >
        {images.map((imageUrl, index) => (
          <div key={index} className="relative p-2">
            <div
              className="w-full h-64 md:h-80 lg:h-96"
              onClick={() => handleImageClick(index)}
            >
              <img
                src={imageUrl}
                alt={`Slide ${index}`}
                className="w-full h-full object-cover rounded-lg"
                loading="lazy"
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

      {isZoomed && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50">
          <button
            onClick={() => navigateToImage(-1)}
            className="absolute left-4 text-center top-1/2 transform -translate-y-1/2 bg-black text-white text-3xl z-100 p-2 rounded-md"
          >
            &#8249;
          </button>
          <Zoom onZoomChange={() => setIsZoomed(false)}>
            <div className="zoom-container">
              <img
                src={images[currentImageIndex]}
                alt={`Zoomed Slide ${currentImageIndex}`}
                className="max-w-4xl max-h-[90vh] p-2 object-contain"
              />
            </div>
          </Zoom>
          <button
            onClick={() => navigateToImage(1)}
            className="absolute right-4 text-center top-1/2 transform -translate-y-1/2 bg-black text-white text-3xl p-2 rounded-md"
          >
            &#8250;
          </button>
          <button
            onClick={() => setIsZoomed(false)}
            className="absolute top-4 right-4 bg-black text-white text-3xl p-1 rounded-md"
          >
            &times;
          </button>
        </div>
      )}
    </div>
  );
};

export default CustomCarousel;
