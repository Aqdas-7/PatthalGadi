/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import background from "../assets/BackGround-1.jpg";
import React from "react";

function Header() {
  return (
    <>
      <div
        className="background-section relative w-full h-screen bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage: `url(${background})`,
        }}
      >
        <div className="heading-container p-6 rounded-lg text-right max-w-screen-md mx-auto">
          <p className="font-semibold text-gray-300 text-lg md:text-base mb-2">
            Based in Hazaribagh, Jharkhand
          </p>
          <h2 className="main-heading font-bold text-[#fff] text-4xl md:text-5xl mb-8">
            Photographer and Filmmaker
          </h2>
          <h3 className="font-semibold text-gray-300 text-lg md:text-xl mb-12">
            Climate Crisis & Global Environmental Issues
          </h3>
        </div>
      </div>
    </>
  );
}

export default Header;
