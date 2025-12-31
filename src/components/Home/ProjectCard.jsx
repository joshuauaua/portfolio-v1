import "./ProjectCard.css";
import { Link } from 'react-router-dom';
/* 
 Square card with image, title, description.
 Accepting 'image' prop which can be a string URL/import.
*/
export default function ProjectCard({ project }) {
  if (!project) {
    return <div className="project-card">No project data provided.</div>;
  }

  const {
    title = "Untitled Project",
    description = "No description available.",
    bannerImage, 
    image,
  } = project;
  
  // Use bannerImage if available (new format), fallback to image
  const displayImage = bannerImage || image;

  // Wrap content in Link if id available
  const CardContent = (
    <div className="project-card">
      <div className="project-image-container">
        {displayImage ? (
          <img src={displayImage} alt={title} className="project-image" />
        ) : (
          <div style={{width: '100%', height: '100%', background: '#333'}}></div>
        )}
      </div>
      <div className="project-details">
        <h2 className="project-title">{title}</h2>
        <p className="project-description">
          {typeof description === 'string' ? description : description.situation}
        </p>
      </div>
    </div>
  );

  return project.id ? (
    <Link to={`/project/${project.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
      {CardContent}
    </Link>
  ) : (
    CardContent
  );
}