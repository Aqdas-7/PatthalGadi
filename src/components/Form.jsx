// eslint-disable-next-line no-unused-vars
import React from "react";

const ContactButton = () => {
  const handleButtonClick = () => {
    const subject = "Inquiry";
    const body = "Hello,\n\nI would like to inquire about...";
    const mailtoLink = `mailto:patthalgadi@gmail.com?subject=${encodeURIComponent(
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
      <div className="absolute inset-0 bg-[#121212] opacity-50"></div>
      <div className="relative z-10 w-full max-w-6xl p-8 flex flex-col items-center justify-center text-center">
        <p className="text-lg font-extrabold mb-6 text-[#121212]">
          If you have any queries feel free to contact us.
        </p>
        <h2 className="text-6xl font-black mb-24 text-[#f5f5f5]">Contact Us</h2>

        <div className="flex space-x-20">
          <button
            onClick={handleButtonClick}
            className="py-4 px-8 bg-[#f5f5f5] text-[#121212] font-bold rounded-md shadow-md hover:bg-[#121212] hover:text-[#f5f5f5] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#121212] transition duration-150 ease-in-out"
          >
            Email
          </button>
          <button className="py-4 px-8 bg-[#f5f5f5] text-[#121212] font-bold rounded-md shadow-md hover:bg-[#121212] hover:text-[#f5f5f5] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#121212] transition duration-150 ease-in-out">
            <a href="https://gallagher-photo.com/about-me/">LinkdIn</a>
          </button>
          <button className="py-4 px-8 bg-[#f5f5f5] text-[#121212] font-bold rounded-md shadow-md hover:bg-[#121212] hover:text-[#f5f5f5] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#121212] transition duration-150 ease-in-out">
            <a href="https://colorhunt.co/palettes/green">WhatsApp</a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactButton;
