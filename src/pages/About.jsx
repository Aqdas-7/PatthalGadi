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
// import CustomCarousel from "../components/CustomCarousel";

const images = [
  "https://images.unsplash.com/photo-1720545525602-b3fcc473b32b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8",
  "https://images.unsplash.com/photo-1720572662063-05c3cf2ce0f6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw3fHx8ZW58MHx8fHx8",
  "https://images.unsplash.com/photo-1720378042263-bd1a33156bbb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxOXx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1720590898981-9cbf5ee129a8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDR8aVVJc25WdGpCMFl8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1720535878761-935b616366e5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDF8eEh4WVRNSExnT2N8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1720511485583-1b70c1726f07?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDV8aG1lbnZRaFVteE18fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1560612268-80be18b2ad9f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDN8UzRNS0xBc0JCNzR8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1604156789095-3348604c0f43?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDZ8Ym84alFLVGFFMFl8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1693322248761-9c337e9ae5df?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDJ8Ym84alFLVGFFMFl8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1621300801324-b17755c2964d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDc0fGJvOGpRS1RhRTBZfHxlbnwwfHx8fHw%3D",
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
          {/* <CustomCarousel images={images} /> */}
          <Mission />
          <Vision />
        </Section>
        <Section>
          <CustomCarousel images={images} />
        </Section>
        <Section>
          <Footer />
        </Section>
      </div>
    </>
  );
}

export default About;
