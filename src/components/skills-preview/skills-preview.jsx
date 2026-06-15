import "./skills-preview.css";

function SkillsPreview() {
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "GitHub",
  ];

  return (
    <section className="skills-preview">
      <h2>Skills</h2>

      <div className="skills-container">
        {skills.map((skill) => (
          <div className="skill-card" key={skill}>
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
}

export default SkillsPreview;