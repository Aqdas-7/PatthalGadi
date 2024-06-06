// eslint-disable-next-line no-unused-vars
import React from "react";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Stories from "../components/Stories";
import Updates from "../components/Updates";
import Footer from "../components/Footer";
import Section from "../components/Section";
import AboutUs from "../components/AboutUs";
import BackGround1 from "../assets/BackGround1.jpg";

function Home() {
  return (
    <>
      <div>
        <Navbar />
        <Section>
          <Header
            backgroundImage={BackGround1}
            location="Based in Hazaribagh, Jharkhand"
            title="Photographer and Filmmaker"
            subtitle="Climate Crisis & Global Environmental Issues"
          />
        </Section>
        <Section>
          <Stories />
        </Section>
        <Section>
          <AboutUs />
        </Section>
        <Section>
          <Updates />
        </Section>
        <Section>
          <Footer />
        </Section>
        {/* <FeaturedStories></FeaturedStories> */}
      </div>
    </>
  );
}

export default Home;
