import LightRays from "./LightRays.jsx";
import ProjectCard from "./ProjectCard.jsx";
import restaurant from "../../assets/restaurant.png";
import buildboard from "../../assets/buildboard.png";
import velosonics from "../../assets/velosonics.png";
import "./SelectedProjects.css"
import { projects } from "../../data/projects.js";

export default function SelectedProjects() {
  return (
    <>
      <div className="selected-projects-container" id="projects">
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

        <div className="selected-projects-content">
          <h1 className="selected-projects-title">SELECTED PROJECTS</h1>

          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
          
        </div>

        <a
          className="selected-projects-btn"
          href="https://github.com/joshuauaua"
          target="_blank"
        >
          View All My Projects ↗
        </a>
       
      </div>
    </>
  );
}
