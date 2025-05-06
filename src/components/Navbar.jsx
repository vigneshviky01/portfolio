import React from 'react'
import "../stylesheets/Navbar.css"
const Navbar = () => {
  return (
    <section className='Navbar'>
      <div className='logo-container-nav' >
      <p className='logo gradient-text' >V</p>
      </div>
      <div className='links'>
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </div>
    
    </section>
  )
}

export default Navbar