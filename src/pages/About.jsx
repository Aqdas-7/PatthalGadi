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
// import CustomCarousel from "../components/CustomCarousel";

// const images = [Photo4, Photo4, Photo4];

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
          {/* <CustomCarousel images={images} /> */}
          <Mission />
          <Vision />
        </Section>
        <Section>
          <Footer />
        </Section>
      </div>
    </>
  );
}

export default About;
