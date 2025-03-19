import React from "react";

const MarketSectionCard = () => {
  let data = {
    data1: {
      img: " /media/profile.svg",
      title: "Professional Agents",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, nemo.",
    },
    data2: {
      img: " /media/hand.svg",
      title: "Personalized Advices",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, nemo.",
    },
    data3: {
      img: " /media/blackbuliding-icon.svg",
      title: "Professional Building",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, nemo.",
    },
    data4: {
      img: " /media/insights-black-icon.svg",
      title: "Market Insights",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, nemo.",
    },
  };

  return (
    <div className="rightSection-cardwrapper">
      {Object.values(data).map((item, index) => {
        return (
          <div className="card" key={index}>
            <div>
              <img src={item.img} alt={item.title} />
            </div>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </div>
        );
      })}
    </div>
  );
};

export default MarketSectionCard;
