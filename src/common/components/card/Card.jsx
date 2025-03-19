import React from "react";
import "./Card.css";
const Card = () => {
  let cardData = {
    card1: {
      type: "Warehouse",
      detail: "6 Properties",
      imgLink: "/src/media/cardicon/warehouse.svg..svg",
    },

    card2: {
      type: "Apartments",
      detail: "8 Apartments",
      imgLink: "/src/media/cardicon/apartment.svg",
    },
    card3: {
      type: "Solo shop",
      detail: "6 Properties",
      imgLink: "/src/media/cardicon/shop.svg",
    },

    card4: {
      type: "Commercial",
      detail: "6 Properties",
      imgLink: "/src/media/cardicon/bulidng.svg",
    },

    card5: {
      type: "Townshop",
      detail: "6 Properties",
      imgLink: "/src/media/cardicon/Villa.svg",
    },

    card6: {
      type: "Villa",
      detail: "6 Properties",
      imgLink: "/src/media/cardicon/Villa.svg",
    },
  };

  return (
    <div className="CardWrapper">
      {Object.values(cardData).map((card, index) => (
        <div key={index} className="card">
          <img src={card.imgLink} alt={card.type} />
          <h3>{card.type}</h3>
          <p>{card.detail}</p>
        </div>
      ))}
    </div>
  );
};

export default Card;
