/* eslint-disable react/prop-types */
// UpdatePage.jsx
// eslint-disable-next-line no-unused-vars
import React from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const UpdatePage = ({ updates }) => {
  const { updateTitle } = useParams();
  const update = updates.find((u) => u.title === updateTitle);

  if (!update) {
    return <div>Update not found</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8 flex flex-col min-h-screen">
      <Navbar />
      <h1 className="text-3xl font-bold text-gray-800 mb-4">{update.title}</h1>
      <p className="text-gray-600 mb-2">{update.date}</p>
      <img
        src={update.image}
        alt={update.title}
        className="object-cover h-48 w-96 mb-4"
      />
      <p className="text-gray-700 mb-4">{update.description}</p>
      <Footer />
    </div>
  );
};

export default UpdatePage;
