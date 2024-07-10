// src/components/Services.js
// eslint-disable-next-line no-unused-vars
import React from "react";

const services = [
  {
    title: "Lead Photographer",
    description:
      "Using stills and video, I have created photography for some of the world's leading brands and publications. My work has been featured by National Geographic and CNN. My style of work is photojournalistic in approach, also incorporating portraiture and drone photography.",
    image:
      "https://images.unsplash.com/photo-1604156789095-3348604c0f43?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDZ8Ym84alFLVGFFMFl8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Documentary Director",
    description:
      "I have produced and directed short form documentaries for editorial clients including National Geographic and The Guardian newspaper. I use these same storytelling techniques to create films for my commercial clients.",
    image:
      "https://images.unsplash.com/photo-1560612268-80be18b2ad9f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDN8UzRNS0xBc0JCNzR8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Consultant & Public Speaking",
    description:
      "I work as a visual consultant for clients who wish to use my expertise on the topics of photography and filmmaking. I give public and private presentations on the topics of the climate crisis, the environment and China",
    image:
      "https://images.unsplash.com/photo-1720511485583-1b70c1726f07?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDV8aG1lbnZRaFVteE18fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "On-Screen Talent",
    description:
      "I have worked as on-screen talent and host for international brands and TV channels, including the National Geographic Channel and CNN Create.",
    image:
      "https://images.unsplash.com/photo-1720545525602-b3fcc473b32b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDF8eEh4WVRNSExnT2N8fGVufDB8fHx8fA%3D%3D",
  },
];

const Services = () => {
  return (
    <div className="py-12 bg-[#f5f5f5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-3xl text-[#121212] font-extrabold uppercase">
            Our Services
          </h2>
        </div>
        <div className="mt-10">
          <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-1 gap-x-16 lg:grid-cols-2 lg:gap-x-32">
            {services.map((service) => (
              <div key={service.title} className="text-justify">
                <img
                  className="h-80 w-full object-cover"
                  src={service.image}
                  alt={service.title}
                />
                <h3 className="mt-6 mb-6 text-2xl leading-6 font-medium text-[#30475E]">
                  {service.title}
                </h3>
                <p className="mt-2 text-base text-[#121212]">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
