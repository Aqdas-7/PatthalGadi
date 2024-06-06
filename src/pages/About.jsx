/* eslint-disable no-unused-vars */
import React from "react";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import BackGround from "../assets/BackGround.jpg";
import Footer from "../components/Footer";
import Section from "../components/Section";

function About() {
  return (
    <>
      <div>
        <Navbar />
        <Section>
          <Header backgroundImage={BackGround} title="About" />
        </Section>
        <Section>
          <Footer />
        </Section>
      </div>
    </>
  );
}
export default About;
