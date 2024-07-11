/* eslint-disable react/no-unescaped-entities */
// eslint-disable-next-line no-unused-vars
import React from "react";
import a9 from "../assets/a9.jpg";

const Mission = () => {
  return (
    <div
      className="bg-cover bg-center py-12"
      style={{ backgroundImage: `url(${a9})` }}
    >
      <div className="container mx-auto px-6">
        <h2 className="text-5xl text-[#f5f5f5] font-black text-center mb-20 uppercase">
          Our Mission
        </h2>

        <div className="bg-[#f5f5f5] text-[#121212] p-8 rounded-lg shadow-lg mb-12 max-w-8xl mx-auto">
          <h3 className="text-3xl font-extrabold text-center mb-12">
            Storytelling for Impact: The Patthalgadi Initiative
          </h3>
          <p className="text-lg text-justify max-w-2xl mx-auto font-bold text-[#30475E] mb-8">
            Our core objective is to serve as a beacon of empowerment for those
            whose voices are often marginalized and unheard. Through our
            dedication to documenting and showcasing the history, culture, and
            struggles of places and peoples that have long been overlooked, we
            strive to bring about meaningful change and foster a more inclusive
            society.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-[#F05454] text-[#121212] p-8 rounded-lg shadow-lg flex flex-col items-center text-center border-black border">
              <h3 className="text-2xl text-left font-black text-[#121212] mb-8">
                Flagship Initiative
              </h3>
              <p className="text-[#f5f5f5] font-bold text-left text-sm">
                We explore remote areas of India to uncover natural, historical,
                and cultural treasures, highlighting ancient civilizations and
                traditions.
              </p>
            </div>
            <div className="bg-[#F05454] text-[#121212] p-8 rounded-lg shadow-lg flex flex-col items-center text-center border-black border">
              <h3 className="text-2xl text-left font-black text-[#121212] mb-8">
                Documenting Challenges
              </h3>
              <p className="text-[#f5f5f5] font-bold text-left text-sm">
                We document the challenges faced by these communities, such as
                education, poverty, unemployment, and environmental issues.
              </p>
            </div>
            <div className="bg-[#F05454] text-[#121212] p-8 rounded-lg shadow-lg flex flex-col items-center text-center border-black border">
              <h3 className="text-2xl text-left font-black text-[#121212] mb-8">
                Voice for the Voiceless
              </h3>
              <p className="text-[#f5f5f5] font-bold text-left text-sm">
                We advocate for marginalized individuals, providing a platform
                to share their stories and empower them to shape their futures.
              </p>
            </div>
            <div className="bg-[#F05454] text-[#121212] p-8 rounded-lg shadow-lg flex flex-col items-center text-center border-black border]">
              <h3 className="text-2xl text-left font-black text-[#121212] mb-8">
                Power of Storytelling
              </h3>
              <p className="text-[#f5f5f5] font-bold text-left text-sm">
                We believe in storytelling's power to create positive change and
                nurture future filmmakers and changemakers through mentorship
                and training.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mission;
