/* eslint-disable react/no-unescaped-entities */
// eslint-disable-next-line no-unused-vars
import React from "react";
import a6 from "../assets/a6.jpg";

const Description = () => {
  return (
    <div
      className="bg-cover bg-center py-36"
      style={{ backgroundImage: `url(${a6})` }}
    >
      <div className="container mx-auto px-6">
        <div className="bg-[#fffce8] text-white p-8 rounded-lg shadow-lg mb-12 max-w-6xl mx-auto">
          <h3 className="text-4xl text-[#534455] font-black text-center mb-8">
            Welcome to Patthalgadi Foundation
          </h3>
          <h4 className="text-xl text-[#534455] max-w-xl mx-auto font-bold text-center mb-12">
            Here exploration meets advocacy, and storytelling becomes a catalyst
            for change.
          </h4>
          <p className="text-lg text-justify max-w-4xl mx-auto font-bold text-[#ab8149] mb-8">
            At Patthalgadi Foundation we are more than just a research and
            filmmaking organization. We are passionate explorers dedicated to
            uncovering the rich tapestry of remote and rural life across India.
            Our mission is simple yet profound: to document and showcase the
            history, culture, and struggles of places and people that often go
            unnoticed and unheard.
          </p>
          <p className="text-lg text-justify max-w-4xl mx-auto font-bold text-[#ab8149] mb-8">
            In a country as diverse as India, there are countless stories
            waiting to be told, and we believe that every voice deserves to be
            heard. That's why we venture into the heart of tribal areas, nestled
            in the farthest corners of our nation, to shed light on the unique
            heritage and challenges faced by these communities. Our work goes
            beyond mere documentation. We strive to amplify the voices of those
            whose stories have been marginalized, to bring attention to the
            cultural wealth and resilience of indigenous peoples, and to foster
            a deeper understanding of their way of life.
          </p>
          <p className="text-lg text-justify max-w-4xl mx-auto font-bold text-[#ab8149] mb-8">
            But our mission doesn't stop there. We are deeply committed to
            addressing the pressing environmental issues plaguing our country,
            particularly in these remote regions. From climate change to habitat
            loss, we recognize the urgent need to protect our natural world and
            the livelihoods that depend on it. Through our films, research, and
            advocacy efforts, we aim to raise awareness about these critical
            issues and inspire action towards sustainable solutions. One of our
            core initiatives is the training of budding filmmakers and social
            workers, equipping them with the skills and knowledge needed to
            undertake meaningful fieldwork in remote areas. By nurturing the
            next generation of storytellers and change-makers, we hope to ensure
            that the voices of the marginalized continue to be heard for years
            to come.
          </p>
          <p className="text-xl text-justify max-w-3xl mx-auto font-bold text-[#534455] mb-8">
            Join us on our journey as we uncover the hidden stories of India,
            advocate for environmental justice, and empower communities to shape
            their own narratives. Together, we can make a difference.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Description;
