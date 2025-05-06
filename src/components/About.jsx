import React from "react";
import "../stylesheets/about.css";
const About = () => {
  return (
 
    <section className="about" id="about">
      
        <div className="objective">
        <div className='logo-container' >
      <p className='logo gradient-text' >V</p>
      <p className="heading-about">ABOUT ME</p>
      </div>
      <p>
        I'm a motivated software developer with a strong passion for building
        intuitive and visually appealing web interfaces. I'm seeking
        opportunities where I can continue learning and contributing to
        impactful web applications.
      </p>
      </div>
      <div className="LocAndEdu">
        <p>📍Arcot, Tamilnadu</p>
        <div className="Edu"><p>🎓</p><p>&nbsp; B.Tech IT, <br></br>
        GCT Coimbatore</p></div>
      </div>
    </section>
  );
};

export default About;
