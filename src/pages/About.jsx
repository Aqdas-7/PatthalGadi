/* eslint-disable no-unused-vars */
import React from "react";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Photo4 from "../assets/Photo4.jpg";
import Footer from "../components/Footer";
import Section from "../components/Section";
import Description from "../components/Description";
import Vision from "../components/Vision";
import Mission from "../components/Mission";
import CustomCarousel from "../components/CustomCarousel";
import Testimonial from "../components/Testimonial";
// import CustomCarousel from "../components/CustomCarousel";

const testimonials = [
  {
    quote:
      "This mentorship program has been a game-changer for me. I've learned so much and feel confident in my abilities now.",
    name: "Danish Khan",
    profile: "Founder",
    image:
      "https://images.unsplash.com/photo-1720640320081-763dc112f1b1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2fHx8ZW58MHx8fHx8",
  },
  {
    quote:
      "A wonderful experience that helped me grow both personally and professionally. I can't thank my mentor enough.",
    name: "Kaunain Raza",
    profile: "Co-Founder",
    image:
      "https://plus.unsplash.com/premium_photo-1719850361637-b9514dfbee5b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1fHx8ZW58MHx8fHx8",
  },
  {
    quote:
      "A wonderful experience that helped me grow both personally and professionally. I can't thank my mentor enough.",
    name: "Shiraz Mallick",
    profile: "Marketing Advisor",
    image:
      "https://images.unsplash.com/photo-1718976142386-e9ebe34d3aee?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzOXx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    quote:
      "A wonderful experience that helped me grow both personally and professionally. I can't thank my mentor enough.",
    name: "Aqdas Ali",
    profile: "Tech Head",
    image:
      "https://images.unsplash.com/photo-1720329461017-d6ed9f66beb5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0N3x8fGVufDB8fHx8fA%3D%3D",
  },
  {
    quote:
      "A wonderful experience that helped me grow both personally and professionally. I can't thank my mentor enough.",
    name: "Dr.Ammar Azam",
    profile: "Research Head",
    image:
      "https://plus.unsplash.com/premium_photo-1701889905370-86796636710a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1OHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    quote:
      "A wonderful experience that helped me grow both personally and professionally. I can't thank my mentor enough.",
    name: "Dr.Aazib Manzoor",
    profile: "Creative Lead",
    image:
      "https://images.unsplash.com/photo-1719336234156-320dafbac51a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2NHx8fGVufDB8fHx8fA%3D%3D",
  },
];

function About() {
  return (
    <>
      <div>
        <Navbar />
        <Section>
          <Header
            backgroundImage={Photo4}
            title="Here's Our Story"
            subtitle={`Beyond the map, a world to discover: Explore with Patthalgadi.`}
          ></Header>
        </Section>
        <Section>
          <Description />
        </Section>
        <Section>
          <Mission />
        </Section>
        <Section>
          <Vision />
        </Section>
        <Section>
          <h2 className="text-5xl mt-16 text-[#34713c] font-black text-center mb-16 ">
            Members
          </h2>
          <div className="mb-16">
            <Testimonial testimonials={testimonials} />
          </div>
        </Section>
        <Section>
          <Footer />
        </Section>
      </div>
    </>
  );
}

export default About;
