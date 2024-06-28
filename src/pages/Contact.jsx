/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import BackGround8 from "../assets/BackGround8.jpg";
import Footer from "../components/Footer";
import Section from "../components/Section";
import Form from "../components/Form";

function Contact() {
  return (
    <>
      <div>
        <Navbar />
        <Section>
          {/* <Header backgroundImage={BackGround8} title="Contact Me" /> */}
        </Section>

        <Section>
          <Form></Form>
        </Section>

        <Section>
          <Footer />
        </Section>
      </div>
    </>
  );
}

export default Contact;
