/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ReactPlayer from "react-player";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const StoryPage = ({ stories }) => {
  const { storyId } = useParams();
  const storyIdNumber = Number(storyId);
  const story = stories.find((story) => story.id === storyIdNumber);

  if (!story) {
    return <div>Story not found</div>;
  }

  const isYouTubeUrl = (url) => {
    const regex = /^https:\/\/www\.youtube\.com\/watch\?v=.{11}$/;
    return regex.test(url);
  };

  const imageContainerStyle = {
    position: "relative",
    width: "100%",
    height: "500px", // Set a fixed height for uniform image size
  };

  const imageStyle = {
    width: "100%",
    height: "100%",
    objectFit: "cover", // Ensures the image covers the container without distortion
  };

  return (
    <div className="story-page">
      <Navbar />
      <Header backgroundImage={story.imageUrl} title={story.title} />
      <div className="max-w-4xl mx-auto py-10 px-4 sm:px-6 lg:px-8">
        <p className="story-description text-lg leading-relaxed mb-8">
          {story.description}
        </p>

        {/* YouTube Video Section */}
        {story.videoUrl && isYouTubeUrl(story.videoUrl) && (
          <div className="video-container mb-8">
            <ReactPlayer
              url={story.videoUrl}
              width="100%"
              controls
              onError={() => console.error("Failed to load video")}
            />
          </div>
        )}

        {/* Image Carousel Section */}
        {story.imageUrls && story.imageUrls.length > 0 && (
          <div className="carousel-container mb-8">
            <Carousel
              showThumbs={false}
              infiniteLoop
              useKeyboardArrows
              autoPlay
            >
              {story.imageUrls.map((imageUrl, index) => (
                <div key={index} style={imageContainerStyle}>
                  <img
                    src={imageUrl}
                    alt={`Slide ${index}`}
                    style={imageStyle}
                  />
                </div>
              ))}
            </Carousel>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default StoryPage;
