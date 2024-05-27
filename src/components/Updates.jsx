/* eslint-disable no-unused-vars */
import React, { useState } from "react";

const Updates = () => {
  const [hovered, setHovered] = useState(null);

  const updates = [
    {
      title: "New Photo Series: Urban Landscapes",
      date: "May 25, 2024",
      description:
        "Explore the latest photo series capturing the essence of urban landscapes around the world.",
      link: "#",
      image:
        "https://images.unsplash.com/photo-1716718406268-6ece312abee0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHx8", // Replace with actual image URL
    },
    {
      title: "Behind the Scenes: Documentary Filmmaking",
      date: "April 15, 2024",
      description:
        "A glimpse into the process of creating impactful documentary films.",
      link: "#",
      image:
        "https://images.unsplash.com/photo-1716565679084-2c3dbececc5e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMHx8fGVufDB8fHx8fA%3D%3D", // Replace with actual image URL
    },
    {
      title: "Photography Tips: Capturing the Perfect Shot",
      date: "March 10, 2024",
      description:
        "Learn some essential tips and tricks for capturing the perfect photograph.",
      link: "#",
      image:
        "https://images.unsplash.com/photo-1716668596098-40ff5f73fb9e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNnx8fGVufDB8fHx8fA%3D%3D", // Replace with actual image URL
    },
  ];

  return (
    <div className="container mx-auto px-0 py-12">
      <div className="bg-white p-6 shadow-lg ">
        <h2 className="text-4xl text-center font-black text-gray-600 mb-20">
          Latest Updates
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {updates.map((update, index) => (
            <div
              key={index}
              className={`p-6 rounded-lg transition-transform duration-300 transform ${
                hovered === index ? "scale-105 shadow-2xl" : "scale-100"
              } bg-white`}
              onMouseEnter={() => setHovered(index)}
              onMouseLeave={() => setHovered(null)}
            >
              <img
                src={update.image}
                alt={update.title}
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2 text-black">
                  {update.title}
                </h3>
                <p className="text-gray-500 text-sm mb-2">{update.date}</p>
                <p className="text-black mb-2">{update.description}</p>
                <a href={update.link} className="text-blue-500 hover:underline">
                  Read more
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Updates;
