/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ReactPlayer from "react-player";
import CustomCarousel from "../components/CustomCarousel";

const formatTitleForUrl = (title) => title.toLowerCase().replace(/\s+/g, "-");

const StoryPage = ({ stories }) => {
  const { storyTitle } = useParams();
  const story = stories.find(
    (story) => formatTitleForUrl(story.title) === storyTitle
  );

  if (!story) {
    return <div>Stories not found</div>;
  }

  const isYouTubeUrl = (url) => {
    const regex = /^https:\/\/www\.youtube\.com\/watch\?v=.{11}$/;
    return regex.test(url);
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#f5f5f5]" loading="lazy">
      <Navbar />
      <Header backgroundImage={story.imageUrl} title={story.title} />

      <div className="flex-1 p-4 sm:p-8 mx-auto">
        {/* Story Description */}
        <div className="bg-[#f5f5f5] text-white p-8 rounded-lg shadow-2xl mb-12 max-w-7xl mx-auto">
          <p className="font-sans sm:text-base md:text-lg leading-relaxed text-[#121212] mb-4 sm:mb-8 text-justify">
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
      <div className="py-20">
        <CustomCarousel
          images={story.imageUrls}
          captions={story.captions}
          loading="lazy"
        />
      </div>
      <Footer />
    </div>
  );
};

export default StoryPage;
