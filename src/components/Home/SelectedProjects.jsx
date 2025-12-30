import React, { useState } from "react";
import LightRays from "./LightRays.jsx";
import "./SelectedProjects.css";
import selectedProjectsData from "../../data/selected-projects.json";
import restaurant from "../../assets/restaurant.png";
import buildboard from "../../assets/buildboard.png";
import velosonics from "../../assets/velosonics.png";
import placeholder from "../../assets/placeholder.png";

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
  const [startIndex, setStartIndex] = useState(0);
  const cardsToShow = 3; 

  const nextSlide = () => {
    if (startIndex < projects.length - cardsToShow) {
      setStartIndex(prev => prev + 1);
    } else {
        setStartIndex(0);
    }
  };

  const prevSlide = () => {
    if (startIndex > 0) {
      setStartIndex(prev => prev - 1);
    } else {
        setStartIndex(projects.length - cardsToShow);
    }
  };

  return (
    <div className="project-gallery-container" id="projects">
      <div className="selected-projects-background">
        <div style={{ width: "100%", height: "100%", position: "relative" }}>
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
        {/* Header - Keeping it minimal or as required, maybe remove if not in Sonic Assembly? 
            Sonic Assembly text had 'gallery-header' but commented out/not present in main view?
            Actually Sonic Assembly code had 'gallery-header' in CSS but not largely used in JSX snippet provided?
            Wait, I'll keep the structure clean as per Sonic Assembly's JSX which didn't have a header in the snippet.
        */}

        <div className="slider-container">
          <div className="slider-track-container">
            <div 
              className="slider-track"
              style={{
                transform: `translateX(calc(-${startIndex} * ((100% + 40px) / ${cardsToShow})))`
                /* Note: gap is 40px in CSS, so logic needs to match gap */
              }}
            >
              {projects.map((project, index) => (
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

          <div className="controls-container">
            <button onClick={prevSlide} className="nav-button prev" aria-label="Previous projects">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
            </button>
            <button onClick={nextSlide} className="nav-button next" aria-label="Next projects">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
