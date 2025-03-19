import React from "react";

const Card = () => {
  const imageData = [
    {
      bgImage: "/src/media/locations/germany1.png",
      title: "Schloss Lichtenstein, Germany",
    },
    {
      bgImage: "/src/media/locations/location2.png",
      title: "Japan",
    },
    {
      bgImage: "/src/media/locations/location2.png",
      title: "Random location",
    },
    {
      bgImage: "/src/media/locations/burjkhalifa.png",
      title: "Burj Khalifa, Dubai",
    },
    {
      bgImage:
        "/src/media/locations/67443f89fa67d21c2b20a9f4_location-5.avif.png",
      title: "New York",
    },
  ];

  return (
    <div className="bottomSection">
      {imageData.map((item, index) => {
        return (
          <div className="tintEffect overflow-hidden" key={index}>
            <div
              className="imgSection h-64 bg-cover bg-center transform transition-transform duration-500 hover:scale-150"
              style={{
                backgroundImage: `url(${item.bgImage})`,
                height: "250px",
              }}
            >
              {item.title && <h4>{item.title}</h4>}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Card;
