import "../styles/project.css";
import aurelia from "../assets/aurelia.png";
import tastee from "../assets/tastee.png";

const projects = [
  {
    number: "01",
    title: "AURELIA",
    category: "Luxury Fashion E-commerce",
    description:
      "A refined luxury fashion experience designed around elegant visuals, modern interfaces and seamless shopping.",
    tech: ["React",  "PostgreSQL"],
    image: aurelia,
  },

  {
    number: "02",
    title: "TASTEE",
    category: "Rustic Restaurant Website",
    description:
      "A warm rustic restaurant experience combining rich food visuals, thoughtful layouts and simple navigation.",
    tech: ["HTML", "CSS", "JavaScript"],
    image: tastee,
  },
];

function Projects() {
  return (
    <section className="projects" id="projects">
      <div className="projects-heading">
        <span className="projects-number">03</span>

        <div>
          <div className="projects-title">
            <span className="projects-dot"></span>
            <h2>PROJECTS</h2>
          </div>

          <p>
            Selected projects where code, design and creativity meet.
          </p>
        </div>
      </div>

      <div className="projects-container">
        {projects.map((project) => (
          <article className="project" key={project.number}>
            <div className="project-image">
              <img src={project.image} alt={project.title} />
            </div>

            <div className="project-content">
              <span className="project-number">
                PROJECT / {project.number}
              </span>

              <h3>{project.title}</h3>

              <h4>{project.category}</h4>

              <p>{project.description}</p>

              <div className="project-tech">
                {project.tech.map((tech) => (
                  <span key={tech}>{tech}</span>
                ))}
              </div>

              <a href="#" className="project-link">
                View Project
                <span>↗</span>
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}




export default Projects;