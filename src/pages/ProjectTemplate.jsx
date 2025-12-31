import { useParams, Navigate } from 'react-router-dom';
import { projects } from '../data/projects';
import './ProjectTemplate.css';
import { useEffect } from 'react';

export default function ProjectTemplate() {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!project) {
    // Ideally redirect or show 404
    return <div className="project-not-found">Project not found</div>;
  }

  return (
    <div className="project-template">
      {/* Banner */}
      <img src={project.bannerImage} alt={project.title} className="project-banner" />

      {/* Metadata Bar */}
      <div className="project-meta-bar">
        <div className="meta-left">
          <h1>{project.title}</h1>
          <div className="meta-tags">
            {project.tags.map((tag, index) => (
              <span key={index} className="meta-tag">{tag}</span>
            ))}
          </div>
        </div>
        <div className="meta-right">
          <div className="meta-item"><span>Year:</span> {project.year}</div>
          <div className="meta-item"><span>Client:</span> {project.client}</div>
          {project.collaborators && (
            <div className="meta-item"><span>Collaborators:</span> {project.collaborators}</div>
          )}
        </div>
      </div>

      <div className="project-content">
        {/* Helper function to check if video is local or URL */}
        <div className="project-video-container">
            <video 
              src={project.video} 
              className="project-video" 
              controls 
              autoPlay 
              muted 
              loop 
              playsInline
            />
        </div>

        {/* STAR Description */}
        <div className="star-description">
          <div className="star-section">
            <div className="star-label">Situation</div>
            <div className="star-text">{project.description.situation}</div>
          </div>
          <div className="star-section">
            <div className="star-label">Task</div>
            <div className="star-text">{project.description.task}</div>
          </div>
          <div className="star-section">
            <div className="star-label">Action</div>
            <div className="star-text">{project.description.action}</div>
          </div>
          <div className="star-section">
            <div className="star-label">Result</div>
            <div className="star-text">{project.description.result}</div>
          </div>
        </div>

        {/* Image Grid */}
        <div className="image-grid">
          {project.images.slice(0, 4).map((img, index) => (
            <img key={index} src={img} alt={`Detail ${index + 1}`} className="grid-image" />
          ))}
        </div>

        {/* Action Links */}
        <div className="project-actions">
          {project.liveLink && (
            <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="action-btn">
              View Live Site ↗
            </a>
          )}
          {project.repoLink && (
            <a href={project.repoLink} target="_blank" rel="noopener noreferrer" className="action-btn">
              View Code ↗
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
