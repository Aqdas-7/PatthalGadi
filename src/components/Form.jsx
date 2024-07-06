// eslint-disable-next-line no-unused-vars
import React from "react";

const ContactButton = () => {
  const handleButtonClick = () => {
    const subject = "Inquiry";
    const body = "Hello,\n\nI would like to inquire about...";
    const mailtoLink = `mailto:aqdas.ali.cd.met20@itbhu.ac.in?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoLink;
  };

  return (
    <div
      className="relative flex items-center justify-center min-h-screen bg-cover bg-center bg-no-repeat py-40"
      style={{
        backgroundImage:
          "url(https://images.pexels.com/photos/255379/pexels-photo-255379.jpeg?auto=compress&cs=tinysrgb&w=600)",
      }}
    >
      <div className="absolute inset-0 bg-[#454545] opacity-50"></div>
      <div className="relative z-10 w-full max-w-6xl p-8 flex flex-col items-center justify-center text-center">
        <h2 className="text-6xl font-black mb-10 text-white">Contact Us</h2>
        <p className="text-lg mb-8 text-white">
          If you have any questions or need further information, please feel
          free to contact us. We are here to help you!
        </p>
        <button
          onClick={handleButtonClick}
          className="py-4 px-8 bg-white text-black font-bold rounded-md shadow-sm hover:bg-black hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-150 ease-in-out"
        >
          Contact Us
        </button>
      </div>
    </div>
  );
};

export default ContactButton;
