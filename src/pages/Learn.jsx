/* eslint-disable no-unused-vars */
import React from "react";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Section from "../components/Section";
import Mentor from "../components/Mentor";

function Learn() {
  return (
    <>
      <div>
        <Navbar />
        <Section>
          <Header
            backgroundImage="https://plus.unsplash.com/premium_photo-1688045722767-8d8672f6950b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8"
            title="Learn"
          />
        </Section>
        <Section>
          <Mentor />
        </Section>
        <Section>
          <Footer />
        </Section>
      </div>
    </>
  );
}
export default Learn;
