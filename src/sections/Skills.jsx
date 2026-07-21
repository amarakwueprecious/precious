import "../styles/skills.css";

const skills = [
  { icon: "⚛", name: "React" },
  { icon: "🟨", name: "JavaScript" },
  { icon: "🐘", name: "PHP" },
  { icon: "🎨", name: "UI / UX" },
  { icon: "🌐", name: "HTML5" },
  { icon: "🎯", name: "CSS3" },
   { icon: "🐘", name: "PostgreSQL" },
  { icon: "🔀", name: "Git & GitHub" },
];

function Skills() {
  return (
    <section className="skills" id="skills">
      <div className="section-title">
        <span className="section-number">02</span>

        <div>
          <div className="heading">
            <span className="dot"></span>
            <h2>SKILLS</h2>
          </div>

          <p className="sub-heading">
            Technologies and tools I use to build beautiful,
            fast and scalable applications.
          </p>
        </div>
      </div>

      <div className="skills-grid">
        {skills.map((skill) => (
          <div className="skill-card" key={skill.name}>
            <span className="skill-icon">{skill.icon}</span>

            <h3>{skill.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;