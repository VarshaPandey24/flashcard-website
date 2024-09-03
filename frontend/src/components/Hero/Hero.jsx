import React from "react";
import "./Hero.css";
function Hero() {
  return (
    <div className="hero">
      <div className="paddings innerWidth flexCenter  hero-container">
        <div className="flexColStart hero-left">
          <div className="hero-title">
            <div className="pink-circle" />
            <h1>
              Exclusive <br />
              Flash <br />
              Cards
            </h1>
          </div>
          <div className=" flexColStart hero-desc">
            <span className="secondaryText">
              Find a variety of Flash Cards with questions and find their answers
            </span>
            <span className="secondaryText">
              by flipping the card in just one click.
            </span>
          </div>
        </div>
        <div className="flexColStart hero-right">
            <img className='pile' src="./src/assets/pile.jpg" alt="card" />
        </div>
      </div>
    </div>
  );
}

export default Hero;
