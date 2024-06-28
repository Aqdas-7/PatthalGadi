/* eslint-disable no-unused-vars */
import React from "react";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import BackGround5 from "../assets/BackGround5.jpg";
import Footer from "../components/Footer";
import Section from "../components/Section";
import TextCarousel from "../components/TextCarousel";

const images = [
  "https://images.pexels.com/photos/47547/squirrel-animal-cute-rodents-47547.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/66898/elephant-cub-tsavo-kenya-66898.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/45170/kittens-cat-cat-puppy-rush-45170.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/52500/horse-herd-fog-nature-52500.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/792381/pexels-photo-792381.jpeg?auto=compress&cs=tinysrgb&w=600",
];

const text = [
  "Hi, I’m [Your Name], a passionate photographer and videographer with a love for capturing the beauty of the world. My journey started [X years ago] when I picked up my first camera and discovered the magic of storytelling through visuals. Over the years, I have honed my skills, exploring various genres and techniques to bring my vision to life.",
  "I specialize in [mention your specializations: e.g., landscape photography, portrait photography, video production, etc.]. My work has been featured in [mention notable publications or achievements]. I strive to push the boundaries of creativity and innovation in every project I undertake.",
];

function About() {
  return (
    <>
      <div>
        <Navbar />
        <Section>
          <Header
            backgroundImage={
              "https://images.unsplash.com/photo-1719206835965-088ed79e95e2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyNXx8fGVufDB8fHx8fA%3D%3D"
            }
            title="About US"
          ></Header>
        </Section>
        <div className="py-4"></div>
        <Section>
          <TextCarousel images={images} text={text} />
        </Section>
        <Section>
          <Footer />
        </Section>
      </div>
    </>
  );
}

export default About;
