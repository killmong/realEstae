import React from "react";
import { Link } from "react-router-dom";
const CallToAction = () => {
  return (
    <div className="CallToAction">
      <Link className="cartbtn" to={"/wishlist"}>
        <img
          className="w-10"
          src="/src/media/cardicon/heart.svg"
          alt="wishlist"
        />
      </Link>

      <Link className="cartbtn" to={"/cart"}>
        <div>
          <img src="/src/media/cart_icon.svg" alt="cart icon" />
        </div>
      </Link>
    </div>
  );
};

export default CallToAction;
