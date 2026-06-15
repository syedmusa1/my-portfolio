import "./projects.css";

function Projects() {
  const projects = [
    {
      title: "Weather App",

      description:
        "Responsive weather application built with React and external APIs.",

      techStack: [
        "React",
        "CSS",
        "API",
      ],

      status: "In Progress",

      github: "#",

      liveDemo: "#",
    },

    {
      title: "Expense Tracker",

      description:
        "Track income, expenses, and personal finances.",

      techStack: [
        "React",
        "JavaScript",
      ],

      status: "Coming Soon",

      github: "#",

      liveDemo: "#",
    },
  ];

  return (
    <section className="projects-page">
      <h1>Projects</h1>

      <div className="projects-grid">
        {projects.map((project) => (
          <div
            className="project-card"
            key={project.title}
          >
            <h2>{project.title}</h2>

            <p>
              {project.description}
            </p>

            <div className="tech-stack">
              {project.techStack.map(
                (tech) => (
                  <span
                    key={tech}
                  >
                    {tech}
                  </span>
                )
              )}
            </div>

            <p>
              <strong>Status:</strong>{" "}
              {project.status}
            </p>

            <div className="project-links">
              <a href={project.github}>
                GitHub
              </a>

              <a href={project.liveDemo}>
                Live Demo
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;