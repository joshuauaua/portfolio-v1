import "./ProjectCard.css";
export default function ProjectCard({ project }) {
  if (!project) {
    return <div className="project-card">No project data provided.</div>;
  }

  const {
    title = "Untitled Project",
    tags = [],
    description = "No description available.",
    button = { link: "#", text: "View Project" },
  } = project;

  return (
    <div className="project-card">
      <div className="project-details">
        <h2 className="project-title">{title}</h2>
        <p className="project-description">{description}</p>

        <div className="project-tags">
          {tags.map((tag, idx) => (
            <span className="project-tag" key={idx}>
              {tag}
            </span>
          ))}
        </div>

        <a href={button.link} className="project-button" target="_blank">
          {button.text}
        </a>
      </div>
    </div>
  );
}