import React from "react";
import "../stylesheets/Contact.css";
import contactData from "../data/contactData";

const Contact = () => {
  return (
    <div id="contact" className="contact-container">
      <div className="logo-container">
        <p className="logo gradient-text">V</p>
        <p className="heading-about">FOR CONTACT</p>
      </div>
      {contactData.map((item, index) => (
        <div className="contact-info" key={index}>
          <p><strong>{item.label}:</strong></p>
          <a href={item.link} target="_blank" rel="noreferrer">
            {item.value}
          </a>
        </div>
      ))}
    </div>
  );
};

export default Contact;
