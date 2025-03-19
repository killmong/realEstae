import React from "react";
import { Link } from "react-router-dom";
const ListingCard = () => {
  let properties = [
    {
      id: 1,
      name: "Cedar ridge villas",
      image: "property1.png",
      details: {
        bedrooms: 3,
        bathrooms: 3,
        squareFeet: 3500,
      },
      status: "For rent",
    },
    {
      id: 2,
      name: "Maple ridge villas",
      image: "property2.png",
      details: {
        bedrooms: 2,
        bathrooms: 1,
        squareFeet: 1400,
      },
      status: "For sale",
    },
    {
      id: 3,
      name: "White Villa",
      image: "Porperty3.png",
      details: {
        bedrooms: 3,
        bathrooms: 3,
        squareFeet: 3500,
      },
      status: "For buy",
    },
    {
      id: 4,
      name: "Archer house",
      image: "Container (4).png",
      details: {
        bedrooms: 5,
        bathrooms: 6,
        squareFeet: 4500,
      },
      status: "For rent",
    },
    {
      id: 5,
      name: "Villa archetype",
      image: "Container (5).png",
      details: {
        bedrooms: 2,
        bathrooms: 1,
        squareFeet: 1200,
      },
      status: "For buy",
    },
    {
      id: 6,
      name: "Cedar ridge villas",
      image: "Container (6).png",
      details: {
        bedrooms: 3,
        bathrooms: 3,
        squareFeet: 3500,
      },
      status: "For sale",
    },
  ];

  return (

    
    <div className="CardWrapper propertiesContainer">
      {properties.map((item) => {
        return(
            <div key={item.id} className="Card" data-id={item.id}>
          <Link className="heartIcon">
            <i className="mx-auto fa-regular fa-heart"></i>
          </Link>
          <div>
            <img src={`/src/media/Properties/${item.image}`} alt={item.name} />
          </div>
          <h2>{item.name}</h2>
          <p>
            {item.details.bedrooms} Bedrooms | {item.details.bathrooms}{" "}
            Bathrooms | {item.details.squareFeet} sqft
          </p>
          <Link to="/src/App.jsx" className="Listings-btn">
            {item.status}
          </Link>
        </div>
        )
      })}
    </div>
  );
};

export default ListingCard;
