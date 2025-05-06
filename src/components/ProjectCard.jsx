import React from "react";
const ProjectCard = ({ title, description, techStack, demoLink, repoLink }) => {
    return (
      <div className="project-card">
        <div className="project-header">
          <h2>{title}</h2>
        </div>
        <div className="project-content">
          <p className="project-description">{description}</p>
          <div className="tech-stack">
            <span className="tech-label">Tech Stack:</span> {techStack}
          </div>
          <div className="project-links">
            {demoLink && (
              <a href={demoLink} className="link-button">
                <span className="link-icon">🔗</span> Live Demo
              </a>
            )}
            {repoLink && (
              <a href={repoLink} className="link-button">
                <span className="link-icon">🔗</span> GitHub Repo
              </a>
            )}
          </div>
        </div>
      </div>
    )
  }

export default ProjectCard;