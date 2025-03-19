import React from "react";
import HeroSection from "./components/HeroSection";
import AboutSection from "../../common/components/aboutSection/AboutSection";
import Card from "../../common/components/card/Card";
import Properties from "./components/Properties";
import MarketSection from "./components/MarketSection";

const Home = () => {
  return (
    <div className="flex flex-col p-5">
      <HeroSection />

      <AboutSection />

      <Card />
      <Properties />
      <MarketSection/>

    </div>
  );
};

export default Home;
