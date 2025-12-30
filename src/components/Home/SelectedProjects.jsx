import React from "react";
import LightRays from "./LightRays.jsx";
import restaurant from "../../assets/restaurant.png";
import buildboard from "../../assets/buildboard.png";
import velosonics from "../../assets/velosonics.png";
import placeholder from "../../assets/placeholder.png";
import "./SelectedProjects.css";
import selectedProjectsData from "../../data/selected-projects.json";

const imageMap = {
  restaurant,
  buildboard,
  velosonics,
};

// Enhance projects with actual image assets
const projects = selectedProjectsData.map((project) => ({
  ...project,
  image: project.image ? (imageMap[project.image] || placeholder) : null
}));

export default function SelectedProjects() {
  return (
    <div className="project-gallery-container" id="projects">
      <div className="selected-projects-background">
        <div style={{ width: "100%", height: "600px", position: "relative" }}>
          <LightRays
            particleColors={["#ffffff", "#ffffff"]}
            particleCount={200}
            particleSpread={10}
            speed={0.1}
            particleBaseSize={100}
            moveParticlesOnHover={true}
            alphaParticles={false}
            disableRotation={false}
          />
        </div>
      </div>

      <div className="gallery-content-wrapper">
        <div className="gallery-header">
          <h2>Selected Projects</h2>
          <p>Highlighting some of my recent work</p>
        </div>

        <div className="projects-grid">
          {projects.slice(0, 4).map((project, index) => (
            <div key={index} className="project-card">
              <div className="card-image" style={{backgroundColor: project.color || '#374151'}}>
                {project.image && <img src={project.image} alt={project.title} />}
              </div>
              <div className="card-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
