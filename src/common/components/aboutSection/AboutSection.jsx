import React from "react";
import { Link } from "react-router-dom";
import "./AboutSection.css";
const AboutSection = () => {
  return (
    <div className="innersection relative">
      <div>
        <img src="/src/media/image.png" alt="" />
      </div>
      <div className="content">
        <div className="exp">
          <h3>10</h3>
          <h4>
            Years <br />
            experience
          </h4>
        </div>

        <h3>Your trusted real estate partner for finding the ideal property</h3>

        <p>
          Lorem ipsum dolor sit amet consectetur. Nunc morbi et tristique
          senectus quam. Risus et in euismod eleifend mattis fames maecenas eu
          semper. Diam pulvinar gravida varius blandit.
        </p>
        <div className="callToAction">
          <Link href="#" className="btn btn-filled">
            More about us
          </Link>
          <Link href="#" className="btn btn-filled rouded">
            <img src="/src/media/arrow_icon.svg" alt="" />
          </Link>
        </div>
      </div>
      <h2 className="absolute bottom-0 right-8 uppercase font-normal text-9xl text-blue-800 ">
        about us
      </h2>


      
    </div>
  );
};

export default AboutSection;
