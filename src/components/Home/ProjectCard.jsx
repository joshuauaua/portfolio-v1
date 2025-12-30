import "./ProjectCard.css";
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
    image, 
  } = project;

  return (
    <div className="project-card">
      <div className="project-image-container">
        {image ? (
          <img src={image} alt={title} className="project-image" />
        ) : (
          <div style={{width: '100%', height: '100%', background: '#333'}}></div>
        )}
      </div>
      <div className="project-details">
        <h2 className="project-title">{title}</h2>
        <p className="project-description">{description}</p>
      </div>
    </div>
  );
}