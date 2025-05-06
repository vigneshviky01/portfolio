import React from 'react'
import ProjectCard from "./ProjectCard"
import "../stylesheets/ProjectShowcase.css"
import {projects} from '../data/projectsData'
const ProjectShowcase = () => {
    
    return (
        <section id="projects" className='project-showcase-container'>
<div className='logo-container' >
      <p className='logo gradient-text' >V</p>
      <p className="heading-about">MY PROJECTS</p>
      </div>
      <div className="project-showcase">
        {projects.map((project, index) => (
          <ProjectCard
          key={index}
            title={project.title}
            description={project.description}
            techStack={project.techStack}
            demoLink={project.demoLink}
            repoLink={project.repoLink}
          />
        ))}
      </div>
            </section>
    )
  }
  
  export default ProjectShowcase