import React from "react";
import "./ProjectCard.css";

function ProjectCard({ image, title, description, github, demo }) {
  return (
    <div className="project-card">
      <img src={image} alt={title} className="project-img" />
      <div className="project-content">
        <h3 className="project-title">{title}</h3>
        <p className="project-desc">{description}</p>
        <div className="project-links">
          {github && (
            <a href={github} target="_blank" rel="noopener noreferrer" className="btn btn-outline">
              GitHub
            </a>
          )}
          {demo && (
            <a href={demo} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
              Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
