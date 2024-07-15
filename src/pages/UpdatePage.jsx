/* eslint-disable react/prop-types */
// UpdatePage.jsx
// eslint-disable-next-line no-unused-vars
import React from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
// import ReactPlayer from "react-player";
import Header from "../components/Header";
import CustomCarousel from "../components/CustomCarousel";

const UpdatePage = ({ updates }) => {
  const { updateTitle } = useParams();
  const update = updates.find((u) => u.title === updateTitle);

  if (!update) {
    return <div>Update not found</div>;
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <Header backgroundImage={update.image} />
      <div className="container mx-auto px-4 py-8 flex-grow">
        <h1 className="text-4xl font-black text-[#121212] mb-4">
          {update.title}
        </h1>
        <p className="text-[#454545] font-extrabold mb-8">{update.date}</p>
        <div className="bg-[#F5F5F5] text-white p-8 rounded-lg shadow-lg mb-12 max-w-7xl mx-auto">
          <p className="text-[#121212] text-justify mb-16 font-serif">
            {update.description}
          </p>
        </div>

        {/* {update.youtubeUrl && (
          <div className="w-full max-w-2xl mx-auto mb-8">
            <ReactPlayer
              url={update.youtubeUrl}
              className="react-player"
              width="100%"
              height="360px"
              controls
            />
          </div>
        )} */}
      </div>

      {update.imageUrls && (
        <div className="mt-20 mb-20">
          <CustomCarousel images={update.imageUrls} />
        </div>
      )}

      <Footer />
    </div>
  );
};

export default UpdatePage;
