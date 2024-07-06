// eslint-disable-next-line no-unused-vars
import React from "react";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Stories from "../components/Stories";
import Updates from "../components/Updates";
import Footer from "../components/Footer";
import Section from "../components/Section";
// import AboutUs from "../components/AboutUs";
import TextCarousel from "../components/TextCarousel";
import background9 from "../assets/background9.jpg";
import { useNavigate } from "react-router-dom";
import { updates, stories } from "../constants.js";

const images = [
  "https://images.pexels.com/photos/47547/squirrel-animal-cute-rodents-47547.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/66898/elephant-cub-tsavo-kenya-66898.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/45170/kittens-cat-cat-puppy-rush-45170.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/52500/horse-herd-fog-nature-52500.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/792381/pexels-photo-792381.jpeg?auto=compress&cs=tinysrgb&w=600",
];

const text = [
  "Hi, I’m [Your Name], a passionate photographer and videographer with a love for capturing the beauty of the world. My journey started [X years ago] when I picked up my first camera and discovered the magic of storytelling through visuals. Over the years, I have honed my skills, exploring various genres and techniques to bring my vision to life.",
  "I specialize in [mention your specializations: e.g., landscape photography, portrait photography, video production, etc.]. My work has been featured in [mention notable publications or achievements]. I strive to push the boundaries of creativity and innovation in every project I undertake.",
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
            backgroundImage={background9}
            location="Based in Hazaribagh, Jharkhand"
            title="Photographer and Filmmaker"
            subtitle="Climate Crisis & Global Environmental Issues"
          />
        </Section>
        <Section>
          <Stories stories={displayedStories} />
          <button
            type="button"
            className="flex justify-end py-4 px-8 bg-white text-black font-bold shadow-sm hover:bg-black hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 border border-black mb-20 ml-auto"
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
