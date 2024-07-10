/* eslint-disable react/no-unescaped-entities */
// eslint-disable-next-line no-unused-vars
import React from "react";
import a11 from "../assets/a11.jpg";

const Vision = () => {
  return (
    <div
      className="bg-cover bg-center py-12"
      style={{ backgroundImage: `url(${a11})` }}
    >
      <div className="container mx-auto px-6">
        <h2 className="text-5xl text-[#454545] font-black text-center mb-20 uppercase">
          Our Vision
        </h2>

        <div className="bg-[#ffbf53] text-white p-8 rounded-lg shadow-lg mb-12 max-w-8xl mx-auto">
          <h3 className="text-3xl font-extrabold text-center mb-12">
            Unveiling the Blueprint: India's Sustainable Future, Unfolded
          </h3>
          <p className="text-lg text-justify max-w-2xl mx-auto font-bold text-[#454545] mb-12">
            A Real Empowered India, we envision a future where sustainable
            practices are woven into the fabric of our society, ensuring
            prosperity and well-being for all. Our vision encompasses a holistic
            approach to development that celebrates and preserves the rich
            tapestry of India's social, cultural, and environmental heritage.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20">
            <div className="bg-[#ff699e] text-white p-8 rounded-lg shadow-lg flex flex-col items-center text-center border-black border">
              <h3 className="text-2xl text-left font-black text-black mb-8">
                Celebration of Diversity
              </h3>
              <p className="text-[#454545] font-bold text-left text-sm">
                Central to our vision is the celebration of India's diversity
                and heritage. We strive to promote the environmental beauty,
                geography, wildlife, mineral resources, and the vibrant tapestry
                of tribal and ethnic communities that define our nation.
              </p>
            </div>
            <div className="bg-[#eff8ff] text-white p-8 rounded-lg shadow-lg flex flex-col items-center text-center border-black border">
              <h3 className="text-2xl text-left font-black text-black mb-8">
                Empowerment of Indigenous Peoples
              </h3>
              <p className="text-[#454545] font-bold text-left text-sm">
                We are committed to the betterment of the lives and conditions
                of indigenous peoples. We strive to empower these communities to
                demand their rights and assert their voices in decisions that
                affect their lives and livelihoods.
              </p>
            </div>
            <div className="bg-[#6898c0] text-white p-8 rounded-lg shadow-lg flex flex-col items-center text-center border-white border">
              <h3 className="text-2xl text-left font-black text-black mb-8">
                Environmental Stewardship
              </h3>
              <p className="text-[#454545] font-bold text-left text-sm">
                We are committed to the betterment of the lives and conditions
                of indigenous peoples. We strive to empower these communities to
                demand their rights and assert their voices in decisions that
                affect their lives and livelihoods.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Vision;
