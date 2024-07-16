// eslint-disable-next-line no-unused-vars
import React from "react";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Stories from "../components/Stories";
import Updates from "../components/Updates";
import Footer from "../components/Footer";
import Section from "../components/Section";
import TextCarousel from "../components/TextCarousel";
import bg2 from "../assets/bg2.jpg";
import { useNavigate } from "react-router-dom";
import { updates, stories } from "../constants.js";

import ab1 from "../assets/About/ab1.jpg";
import ab2 from "../assets/About/ab2.jpg";
import ab3 from "../assets/About/ab3.jpg";
import ab4 from "../assets/About/ab4.jpg";

const images = [ab1, ab2, ab3, ab4];

const text = [
  "In the heart of India, Patthalgadi Foundation dives into rural and tribal life.  We document the rich history, culture, and struggles of these forgotten communities.  But Patthalgadi goes beyond storytelling.  We use film and research to champion environmental justice, raising awareness about climate change and habitat loss in these regions.  Investing in the future, we train budding storytellers and social workers, ensuring these voices continue to be heard.  Join Patthalgadi to explore untold stories, advocate for change, and empower communities to shape their own future.",
];

const displayedStories = stories.slice(0, 6);

// eslint-disable-next-line no-unused-vars
const displayedUpdates = updates.slice(0, 3);

function Home() {
  const navigate = useNavigate();

  const handleReadMore = () => {
    navigate("/portfolio");
  };

  const navigate1 = useNavigate();

  const handleReadMore1 = () => {
    navigate1("/about");
  };

  const button = (
    <button
      type="button"
      className="py-4 px-8 bg-[#ffffff] text-black font-bold shadow-sm hover:bg-black hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 border border-[#000000] mb-20 ml-auto"
      onClick={handleReadMore1}
    >
      Know Us
    </button>
  );

  return (
    <>
      <div>
        <Navbar />
        <Section>
          <Header
            backgroundImage={bg2}
            location="Based in Hazaribagh, Jharkhand"
            title="Photographer and Filmmaker"
            subtitle="Climate Crisis & Global Environmental Issues"
          />
        </Section>
        <Section>
          <Stories stories={displayedStories} />
          <button
            type="button"
            className="flex justify-end py-4 px-8 bg-[#f5f5f5] text-[#121212] font-bold shadow-sm hover:bg-[#121212] hover:text-[#f5f5f5] focus:outline-none focus:ring-2 focus:ring-offset-2 border border-black mb-20 ml-auto"
            onClick={handleReadMore}
          >
            Read More
          </button>
        </Section>
        <Section>
          <TextCarousel images={images} text={text} button={button} />
        </Section>
        <Section>
          <Updates updates={displayedUpdates} />
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
