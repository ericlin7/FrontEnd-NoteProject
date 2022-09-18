import React from "react";
import "./Header.css";
import "animate.css";
import logo from "../../quizzify_logo.png";

const Header = () => {
  const data = [{ image: logo }];

  return (
    <header>
      <div className="container   header_container">
        <h1 className="animate__animated animate__bounceInDown">
          {data.map(({ image }) => {
            return (
              <div className="item-images">
                <img src={image} />
              </div>
            );
          })}
        </h1>
        <h5>
          We believe you can learn anything, <br></br>
          so lets remove the card making, and get to the learning.
        </h5>
      </div>
    </header>
  );
};

export default Header;
