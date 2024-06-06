/* eslint-disable no-unused-vars */
import React from "react";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import BackGround1 from "../assets/BackGround1.jpg";
import Footer from "../components/Footer";
import Section from "../components/Section";
import Stories from "../components/Stories";

function Learn() {
  return (
    <>
      <div>
        <Navbar />
        <Section>
          <Header backgroundImage={BackGround1} title="Learn" />
        </Section>
        <Section>
          <Stories></Stories>
        </Section>

        <Section>
          <Footer />
        </Section>
      </div>
    </>
  );
}
export default Learn;
