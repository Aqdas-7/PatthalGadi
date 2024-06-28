// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import emailjs from "emailjs-com";

const Form = () => {
  useEffect(() => {
    emailjs.init("9T2IOM406lB1lIhvR");
  }, []);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send("your_service_id", "your_template_id", formData)
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        alert("Message sent successfully!");
      })
      .catch((err) => {
        console.error("FAILED...", err);
        alert(`Failed to send message. Error: ${err.text}`);
      });
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
      <div className="relative z-10 w-full max-w-6xl p-8 flex flex-col md:flex-row px-10">
        <div className="md:w-1/2 p-6 text-white flex flex-col justify-center px-12">
          <h2 className="text-6xl font-black mb-10 text-left">Contact Us</h2>
          <p className="text-lg mb-8 text-left">
            If you have any questions or need further information, please feel
            free to contact us. We are here to help you!
          </p>
        </div>
        <div className="md:w-1/2 p-6 bg-white bg-opacity-10 rounded-lg shadow-md flex items-center justify-center ">
          <form onSubmit={handleSubmit} className="w-full">
            <div className="grid grid-cols-1 gap-6 px-10">
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                className="mt-1 p-2 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                className="mt-1 p-2 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="mt-1 p-2 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <input
                type="tel"
                name="phoneNumber"
                placeholder="Phone Number"
                className="mt-1 p-2 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                value={formData.phoneNumber}
                onChange={handleChange}
                required
              />
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                className="mt-1 p-2 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                value={formData.subject}
                onChange={handleChange}
                required
              />
              <textarea
                name="message"
                placeholder="Message"
                className="mt-1 p-2 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
              <button
                type="submit"
                className="w-full py-2 px-4 bg-white text-black font-bold rounded-md shadow-sm hover:bg-black hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-150 ease-in-out"
              >
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Form;
