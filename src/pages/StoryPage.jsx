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

  const styles = {
    storyPage: {
      display: "flex",
      flexDirection: "column",
      minHeight: "100vh",
    },
    halfScreenHeader: {
      height: "50vh", // Half the screen height
    },
    contentContainer: {
      flex: 1,
      padding: "2rem",
      maxWidth: "1200px",
      margin: "0 auto",
    },
    carouselContainer: {
      width: "100%",
      marginBottom: "2rem",
    },
    imageContainer: {
      height: "500px", // Larger than the previous size
    },
    carouselImage: {
      width: "100%",
      height: "100%",
      objectFit: "cover", // Ensures the image covers the container without distortion
    },
    storyDescription: {
      fontSize: "1.125rem", // Text size for minimalistic style
      lineHeight: "1.75rem",
      color: "#333",
      textAlign: "justify", // Justify text
      marginBottom: "2rem",
      width: "100%", // Take up almost all the width
    },
    videoContainer: {
      width: "100%",
      maxWidth: "800px", // Set a max width for the video
      margin: "0 auto 2rem auto", // Center the video and add bottom margin
    },
  };

  return (
    <div style={styles.storyPage}>
      <Navbar />
      <Header
        backgroundImage={story.imageUrl}
        title={story.title}
        style={styles.halfScreenHeader}
      />
      <div style={styles.contentContainer}>
        {/* Image Carousel Section */}
        {story.imageUrls && story.imageUrls.length > 0 && (
          <div style={styles.carouselContainer}>
            <Carousel
              showThumbs={false}
              infiniteLoop
              useKeyboardArrows
              autoPlay
            >
              {story.imageUrls.map((imageUrl, index) => (
                <div key={index} style={styles.imageContainer}>
                  <img
                    src={imageUrl}
                    alt={`Slide ${index}`}
                    style={styles.carouselImage}
                  />
                </div>
              ))}
            </Carousel>
          </div>
        )}

        {/* Story Description */}
        <p style={styles.storyDescription}>{story.description}</p>

        {/* YouTube Video Section */}
        {story.videoUrl && isYouTubeUrl(story.videoUrl) && (
          <div style={styles.videoContainer}>
            <ReactPlayer
              url={story.videoUrl}
              width="100%"
              controls
              onError={() => console.error("Failed to load video")}
            />
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default StoryPage;
