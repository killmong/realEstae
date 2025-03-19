import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import Navbar from "./components/Navbar";
import CallToAction from "./components/CallToAction";
const Header = () => {
  return (
    <header>
      <div className="innerHeader">
        <div className="LogoWrapper">
          <Link>
            <img src=" /media/logo.svg" alt="" />
          </Link>
        </div>
        <Navbar />
        <CallToAction />
      </div>
    </header>
  );
};

export default Header;
