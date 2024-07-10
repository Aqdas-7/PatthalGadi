/* eslint-disable react/prop-types */
// UpdatePage.jsx
// eslint-disable-next-line no-unused-vars
import React from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ReactPlayer from "react-player";

const UpdatePage = ({ updates }) => {
  const { updateTitle } = useParams();
  const update = updates.find((u) => u.title === updateTitle);

  if (!update) {
    return <div>Update not found</div>;
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="container mx-auto px-4 py-8 flex-grow">
        <div className="relative w-full h-[75vh] mb-8 rounded-lg shadow-lg overflow-hidden">
          <img
            src={update.image}
            alt={update.title}
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
        <h1 className="text-4xl font-black text-[#121212] mb-4">
          {update.title}
        </h1>
        <p className="text-[#454545] font-extrabold mb-8">{update.date}</p>
        <div className="bg-[#F5F5F5] text-white p-8 rounded-lg shadow-lg mb-12 max-w-7xl mx-auto">
          <p className="text-[#30475E] text-justify font-semibold mb-16">
            {update.description}
          </p>
        </div>
        {update.youtubeUrl && (
          <div className="w-full max-w-2xl mx-auto mb-8">
            <ReactPlayer
              url={update.youtubeUrl}
              className="react-player"
              width="100%"
              height="360px"
              controls
            />
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default UpdatePage;
