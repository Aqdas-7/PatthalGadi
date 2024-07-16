/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

const CustomGallery = ({ images, captions }) => {
  const galleryItems = images.map((imageUrl, index) => ({
    original: imageUrl,
    thumbnail: imageUrl,
    description: captions && captions[index] ? captions[index] : "",
  }));

  return (
    <div className="w-full mb-8 gallery-container">
      <ImageGallery
        items={galleryItems}
        showThumbnails={true}
        showPlayButton={false}
        showFullscreenButton={true}
        renderItem={(item) => (
          <div className="image-gallery-image">
            <img
              src={item.original}
              alt={`Slide ${item.description}`}
              className="w-full h-full object-cover rounded-lg"
            />
            {item.description && (
              <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black/70 to-transparent text-white rounded-b-lg">
                <h2 className="text-lg font-bold">{item.description}</h2>
              </div>
            )}
          </div>
        )}
        renderThumbInner={(item) => (
          <img
            src={item.thumbnail}
            alt={`Thumbnail ${item.description}`}
            className="w-20 h-20 object-cover rounded-md"
          />
        )}
      />
    </div>
  );
};

export default CustomGallery;
