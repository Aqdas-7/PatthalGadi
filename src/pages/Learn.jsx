/* eslint-disable no-unused-vars */
import React from "react";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Photo3 from "../assets/Photo3.jpg";
import Footer from "../components/Footer";
import Section from "../components/Section";

function Learn() {
  return (
    <>
      <div>
        <Navbar />
        <Section>
          <Header backgroundImage={Photo3} title="Learn" />
        </Section>
        <Section>
          <Footer />
        </Section>
      </div>
    </>
  );
}
export default Learn;
