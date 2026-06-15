import "./learning-journey.css";

function LearningJourney() {
  const journey = [
  "HTML & CSS",
  "JavaScript",
  "Vanilla JS Projects",
  "React Development",
  "Building React Projects",
  "Next Goal: Full-Stack Development",
];

  return (
    <section className="learning-journey">
      <h2>Learning Journey</h2>

      <div className="journey-container">
        {journey.map((step) => (
          <div
            className="journey-step"
            key={step}
          >
            {step}
          </div>
        ))}
      </div>
    </section>
  );
}

export default LearningJourney;