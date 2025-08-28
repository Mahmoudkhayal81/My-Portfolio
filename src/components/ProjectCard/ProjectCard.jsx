import React from "react";
import "./ProjectCard.css";

function ProjectCard({ image, title, description, demoLink, githubLink }) {
  return (
    <a href={demoLink} target="_blank" rel="noopener noreferrer" className="project-card-link">
      <div className="project-card">
        <img src={image} alt={title} className="project-img" />
        <div className="project-content">
          <h3 className="project-title">{title}</h3>
          <p className="project-desc">{description}</p>
          {githubLink && (
            <a href={githubLink} target="_blank" rel="noopener noreferrer" className="btn btn-outline">
              GitHub
            </a>
          )}
        </div>
      </div>
    </a>
  );
}

export default ProjectCard;
