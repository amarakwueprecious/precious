import "../styles/hero.css";
import profile from "../assets/images/profile.png";
import resume from "../assets/resume/Nzubechukwu_Precious_Premium_Resume.docx";

function Hero() {

  const downloadCV = () => {
    const link = document.createElement("a");
    link.href = resume;
    link.download = "Nzubechukwu_Precious_Premium_Resume.docx";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const scrollToProjects = () => {
    const section = document.getElementById("projects");
    section?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <section className="hero" id="hero">
      <div className="hero-image fade-image">
        <img src={profile} alt="Portrait of Precious" />
      </div>

      <div className="hero-content">
        <p className="intro fade delay-1">Hi, I'm</p>

        <div className="name-wrapper">
          <span className="bg-text">DEVELOPER</span>

          <h1 className="fade delay-2">
            PRECIOUS
          </h1>
        </div>

        <h2 className="fade delay-3">
          Full Stack Developer
          <br />
          </h2>

        <p className="description fade delay-4">
          I build elegant digital experiences that combine beautiful,
          user-focused interfaces with clean, scalable backend
          architecture to create fast, responsive, and impactful web
          applications.
        </p>

        <div className="hero-buttons fade delay-5">
          <button
            className="primary-btn"
            onClick={scrollToProjects}
             onClick={() =>
                window.open("https://github.com/amarakwueprecious", "_blank")
              }
          >
            Explore Projects
          </button>

          <button
            className="secondary-btn"
            onClick={downloadCV}
          >
            Download CV
          </button>
        </div>
      </div>
    </section>
  );
}

export default Hero;