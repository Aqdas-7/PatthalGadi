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
        <h1 className="text-4xl font-bold text-gray-800 mb-2">{update.title}</h1>
        <p className="text-gray-600 mb-4">{update.date}</p>
        <p className="text-gray-700 text-justify mb-8">{update.description}</p>
        {update.youtubeUrl && (
          <div className="mb-8 mx-auto max-w-4xl">
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
