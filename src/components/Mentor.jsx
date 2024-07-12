/* eslint-disable no-unused-vars */
// src/components/Mentorship.js
import React from "react";
import Testimonial from "./Testimonial";

const handleButtonClick = () => {
  const subject = "Inquiry";
  const body = "Hello,\n\nI would like to inquire about...";
  const mailtoLink = `mailto:patthalgadi@gmail.com?subject=${encodeURIComponent(
    subject
  )}&body=${encodeURIComponent(body)}`;

  window.location.href = mailtoLink;
};

const mentorshipPlans = [
  {
    stage: "Stage 1: Introduction",
    description:
      "During our first video call, we will analyse your portfolio and identify your strengths and weaknesses as a photographer. You will be asked to bring a project idea that you would like to work on during the mentorship for us to discuss. I will help you devise a pre-production and shooting plan, in order for you to be able to immediately start working on your project.",
  },
  {
    stage: "Stage 2: Development",
    description:
      "During the second stage of the mentorship, we will be deep in production of your project. We will be communicating regularly and I will be advising you as you shoot in the field, giving you feedback and guidance in real time. During our video call, we will analyse your progress and I will critique your work and give feedback to guide you further.",
  },
  {
    stage: "Stage 3: Mastery",
    description:
      "Coming into the third stage and final month of the mentorship you will me near completion of your project. I will work with you to refine your project, help with editing and advise on the best ways in which to showcase and/or display your work. Whether you goal is to produce an online gallery, a book, or even pitch to a major news outlet, I will provide you with guidance to help you achieve your goals.",
  },
];

const Mentor = () => {
  return (
    <div className="bg-[#f5f5f5] py-16 px-4 sm:px-6 lg:px-8">
      {/* Introduction Section */}
      <div className="max-w-7xl mx-auto text-center mb-20">
        <h2 className="text-3xl text-[#121212] font-extrabold text-center mb-12 uppercase bg-gray-200">
          Introduction
        </h2>
        <p className="max-w-2xl text-justify mt-5 mx-auto text-xl text-[#30475E]">
          My mentorship program is aimed at photographers who are ready to go
          beyond equipment and single images. You know how to use your camera.
          You can take a good photo. But you’re struggling to find a clear
          purpose and meaning to your photography. You want to take your
          photography to the next level but you don’t know how. I can help you.
        </p>
        <p className="max-w-2xl text-justify mt-5 mx-auto text-xl text-[#30475E]">
          I work with each mentee to find their personal vision and give them
          guidance to refining their portfolio and finding purpose with their
          photography.
        </p>
        <p className="max-w-2xl font-bold text-justify mt-5 mx-auto text-xl text-[#121212]">
          The program is aimed at amateur photographers and aspiring
          professionals.
        </p>
      </div>

      {/* Mentorship Plan Section */}
      <div className="mt-12 max-w-7xl mx-auto">
        <h2 className="text-3xl text-[#121212] font-extrabold text-center mb-12 uppercase bg-gray-200">
          The Plan
        </h2>
        <div>
          {mentorshipPlans.map((plan, index) => (
            <div
              key={index}
              className="flex flex-col rounded-lg shadow-lg overflow-hidden bg-[#f5f5f5] p-6"
            >
              <h4 className="text-2xl  text-[#121212]">{plan.stage}</h4>
              <p className="mt-3 max-w-7xl text-justify text-lg font-meduim text-[#30475E]">
                {plan.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      <Testimonial />

      {/* Pricing Section */}
      <div className="mt-12 max-w-7xl mx-auto">
        <h2 className="text-3xl text-[#121212] font-extrabold text-center mb-12 uppercase bg-gray-200 py-4">
          Pricing
        </h2>
        <div className="grid gap-8 md:grid-cols-2 mb-12">
          <div className="flex flex-col rounded-lg shadow-lg overflow-hidden bg-[#f5f5f5] p-6">
            <h4 className="text-3xl font-bold text-[#121212] mb-4 text-center">
              Standard Mentorship
            </h4>
            <p className="text-4xl font-bold text-center text-[#121212] mb-6">
              $500
            </p>
            <ul className="text-base text-[#30475E] font-semibold list-disc pl-5 space-y-3">
              <li>Regular check-ins and feedback</li>
              <li>Access to all stages of mentorship</li>
              <li>Personalized guidance and advice</li>
              <li>Email support</li>
            </ul>
          </div>
          <div className="flex flex-col rounded-lg shadow-lg overflow-hidden bg-white p-6">
            <h4 className="text-3xl font-bold text-[#121212] mb-4 text-center">
              Advanced Mentorship
            </h4>
            <p className="text-4xl font-bold text-center text-[#121212] mb-6">
              $1000
            </p>
            <ul className="text-base text-[#30475E] list-disc pl-5 space-y-3">
              <li>All features of Standard Mentorship</li>
              <li>Additional one-on-one sessions</li>
              <li>Personalized projects</li>
              <li>Priority email support</li>
              <li>Extended access to mentorship resources</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Testimonial Section */}
      <div className="max-w-7xl mx-auto tracking-wide leading-10">
        <h2 className="text-2xl text-[#f5f5f5] font-bold text-center mb-12 uppercase bg-[#30475E] py-4">
          To apply to join the mentorship program, simply fill in the
          questionnaire below and email it to me at:
        </h2>
        <div className="flex justify-center">
          <button
            onClick={handleButtonClick}
            className="py-4 px-8 bg-[#34713c] text-[#f5f5f5] font-bold rounded-md shadow-md hover:bg-[#121212] hover:text-[#f5f5f5] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#121212] transition duration-150 ease-in-out"
          >
            Email Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default Mentor;
