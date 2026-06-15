import "./about.css";

function About() {
  return (
    <section className="about-page">
      <h1>About Me</h1>

      <p>
        Hi, I'm Syed Musa. I'm a frontend developer
        focused on building responsive web applications
        with JavaScript and React.

        Currently, I'm strengthening my frontend skills
        through hands-on projects while expanding toward
        full-stack development.
      </p>

      <div className="about-cards">

        <div className="about-card">
          <h2>Current Focus</h2>

          <ul>
            <li>React Development</li>
            <li>JavaScript</li>
            <li>Responsive Design</li>
            <li>Building Projects</li>
          </ul>
        </div>

        <div className="about-card">
          <h2>Future Goal</h2>

          <ul>
            <li>Backend Development</li>
            <li>Full-Stack Development</li>
            <li>Software Engineering</li>
          </ul>
        </div>

      </div>
    </section>
  );
}

export default About;