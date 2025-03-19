import React from "react";
import "./MarketSection.css";
import MarketSectionCard from "/src/common/components/marketSection/MarketSectionCards.jsx";
import ImageCard from "/src/common/components/imageCard/Card.jsx";
const MarketSection = () => {
  return (
    <section className="marketSection">
      <div className="topSection">
        <div className="leftSection">
          <h4>why we standout in the real estate market</h4>
        </div>

        <div className="rightSection">
          <MarketSectionCard />
        </div>
      </div>

      <ImageCard />
    </section>
  );
};

export default MarketSection;
