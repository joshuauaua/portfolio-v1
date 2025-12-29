import React, { useState, useEffect } from "react";
import ProjectCard from "../components/Home/ProjectCard.jsx";
import { projects } from "../data/projects.js";
import "./Projects.css";

export default function Projects() {
  const [selectedTag, setSelectedTag] = useState("All");
  const [filteredProjects, setFilteredProjects] = useState(projects);

  // Extract all unique tags
  const allTags = ["All", ...new Set(projects.flatMap((p) => p.tags))];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (selectedTag === "All") {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(
        projects.filter((project) => project.tags.includes(selectedTag))
      );
    }
  }, [selectedTag]);

  return (
    <div className="projects-page">
      <h1 className="projects-title">PROJECTS</h1>

      <div className="projects-filter-container">
        {allTags.map((tag) => (
          <button
            key={tag}
            className={`filter-btn ${selectedTag === tag ? "active" : ""}`}
            onClick={() => setSelectedTag(tag)}
          >
            {tag}
          </button>
        ))}
      </div>

      <div className="projects-grid">
        {filteredProjects.length > 0 ? (
          filteredProjects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))
        ) : (
          <p>No projects found with this tag.</p>
        )}
      </div>
    </div>
  );
}
