/* eslint-disable no-unused-vars */
import React from "react";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import BackGround3 from "../assets/BackGround3.jpg";
import Footer from "../components/Footer";
import Section from "../components/Section";
import Updates from "../components/Updates";
import { updates } from "../constants";

function Hireme() {
  return (
    <>
      <div>
        <Navbar />
        <Section>
          <Header
            backgroundImage={
              "https://media.istockphoto.com/id/1074291506/photo/golden-sparkle-background.jpg?s=612x612&w=0&k=20&c=Ml8Mx0C_DD9nTy3H5N2QwvcR-KoV4HmaA8nvo13U88s="
            }
            title="Hire Me"
          />
        </Section>
        <Section>
          <Updates updates={updates} />
        </Section>
        <Section>
          <Footer />
        </Section>
      </div>
    </>
  );
}
export default Hireme;
