import "./featured-projects.css";

function FeaturedProjects() {
  const projects = [
    {
      title: "Weather App",
      description: "React-based weather application.",
      status: "Currently Building",
    },
    {
      title: "Expense Tracker",
      description: "Personal finance tracking application.",
      status: "Coming Soon",
    },
    {
      title: "More Projects",
      description: "Additional projects will be added.",
      status: "In Progress",
    },
  ];

  return (
    <section className="featured-projects">
      <h2>Featured Projects</h2>

      <div className="projects-container">
        {projects.map((project) => (
          <div
            className="project-card"
            key={project.title}
          >
            <h3>{project.title}</h3>

            <p>{project.description}</p>

            <span>{project.status}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default FeaturedProjects;