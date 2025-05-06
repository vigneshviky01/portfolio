import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import "./stylesheets/App.css";
import Skills from "./components/Skills";
import ProjectShowcase from "./components/ProjectShowcase";
import Experience from "./components/Experience";
import Contact from "./components/Contact";

const App = () => {
  return (
    <section className="App">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <ProjectShowcase />
      <Experience />
      <Contact />
    </section>
  );
};

export default App;
