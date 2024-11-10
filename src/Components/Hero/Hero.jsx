import React from "react";
import "./Hero.css";
import arrow_icon from "../Assets/arrow.png";
import Carousel from "../Carousel/Carousel";

const Hero = () => {
  return (
    <div>
      <Carousel></Carousel>
    <div className="hero">
      <div className="hero-left">
        <h1>UGN-Mart</h1>
        <div>
          <div className="hero-hand-icon">
            <p>Presents</p>
          </div>
          <p>Latest collections</p>
          <p>for All Generation</p>
        </div>
        <div className="hero-latest-btn">
          <div>Latest Collection</div>
          <img src={arrow_icon} alt="" />
        </div>
      </div>
      <div className="hero-right">
        {/* <img src={hero_image} alt="hero" /> */}
        <Carousel></Carousel>
      </div>
    </div>
    </div>
  );
};

export default Hero;
