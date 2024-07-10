/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ReactPlayer from "react-player";
import CustomCarousel from "../components/CustomCarousel";

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

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <Header
        backgroundImage={story.imageUrl}
        title={story.title}
        className="h-[50vh]" // Half the screen height
      />

      <div className="py-20">
        <CustomCarousel images={story.imageUrls} captions={story.captions} />
      </div>

      <div className="flex-1 p-4 sm:p-8 max-w-screen-xl mx-auto">
        {/* Story Description */}
        <div className="bg-[#E8F9FD] text-white p-8 rounded-lg shadow-2xl mb-12 max-w-6xl mx-auto">
          <p className="text sm:text-base md:text-lg leading-relaxed text-[#000000] mb-4 sm:mb-8 text-justify">
            {story.description}
          </p>
        </div>

        {/* YouTube Video Section */}
        {story.videoUrl && isYouTubeUrl(story.videoUrl) && (
          <div className="w-full max-w-lg md:max-w-2xl mx-auto mb-4 sm:mb-8">
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
