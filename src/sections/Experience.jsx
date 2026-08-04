import "../styles/experience.css";

const experiences = [
  {
    year: "2025 — PRESENT",
    role: "Full Stack Developer",
    company: "Independent Developer",
    description:
      "Building responsive web applications, e-commerce experiences and database-driven platforms using modern frontend and backend technologies.",
  },
  {
    year: "2 year Experience",
    role: "Junior Full-Stack Developer",
    company: "Trinity Computer School",
    description:
      "Worked on modern web interfaces, responsive layouts and functional digital experiences.",
  },
  {
    year: "1 year",
    role: "Full-Stack Development Training",
    company: "Trinity Computer School",
    description:
      "",
  },
  
  
];

function Experience() {
  return (
    <section className="experience" id="experience">
      <div className="experience-heading">
        <span className="experience-number">04</span>

        <div>
          <div className="experience-title">
            <span className="experience-dot"></span>
            <h2>EXPERIENCE</h2>
          </div>

          <p>
            My journey through code, design and digital experiences.
          </p>
        </div>
      </div>

      <div className="timeline">
        {experiences.map((experience, index) => (
          <div className="timeline-item" key={index}>
            <div className="timeline-marker">
              <span></span>
            </div>

            <div className="timeline-year">
              {experience.year}
            </div>

            <div className="timeline-content">
              <h3>{experience.role}</h3>

              <h4>{experience.company}</h4>

              <p>{experience.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}



export default Experience;