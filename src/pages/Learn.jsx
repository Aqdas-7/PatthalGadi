/* eslint-disable no-unused-vars */
import React from "react";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import BackGround7 from "../assets/BackGround7.jpg";
import Footer from "../components/Footer";
import Section from "../components/Section";

function Learn() {
  return (
    <>
      <div>
        <Navbar />
        <Section>
          <Header backgroundImage={BackGround7} title="Learn" />
        </Section>
        <Section>
          <Footer />
        </Section>
      </div>
    </>
  );
}
export default Learn;
