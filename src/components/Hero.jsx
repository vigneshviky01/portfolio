import React from "react";
import "../stylesheets/Hero.css";
const Hero = () => {
  return (
    <section className="hero-container">
      <div className="hero">
        <div className="profile-container">
          <div className="bg-profile"></div>
          <div className="img-container">
            <img src="/assets/vicky.png" />
          </div>
        </div>
        <div className="intro">
          <h2>
            Hola!<br></br>
            <span className="intro-text">I'm Vignesh</span>
          </h2>
          <p>
            a passionate Frontend Developer focused on building user-centric web
            experiences.
          </p>
        </div>
      </div>
      <p className="hero-tail-container">
        I specialize in creating responsive, clean, and accessible websites
        using modern technologies like React, Tailwind, and Firebase.
      </p>
    </section>
  );
};

export default Hero;
