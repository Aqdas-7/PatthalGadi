// eslint-disable-next-line no-unused-vars
import React from "react";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
// import BackGround2 from "../assets/BackGround2.jpg";
import Footer from "../components/Footer";
import Section from "../components/Section";
import Stories from "../components/Stories";
import { stories } from "../constants";

function Portfolio() {
  return (
    <>
      <div>
        <Navbar />
        <Section>
          <Header
            backgroundImage={
              "https://media.istockphoto.com/id/1254678283/photo/fog-or-white-smoke-on-a-black-background.webp?b=1&s=170667a&w=0&k=20&c=PdS1Us_XBsTkAqdP5qk5emWdvsYVZUwDRUQ0hipDWmM="
            }
            title="Portfolio"
          />
        </Section>
        <Section>
          <Stories stories={stories} />
        </Section>
        <Section>
          <Footer />
        </Section>
      </div>
    </>
  );
}
export default Portfolio;
