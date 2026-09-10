
import "../styles/hero.css";
import profile from "../assets/images/portfolio image.png";

function Hero() {
  const downloadCV = () => {
    const link = document.createElement("a");

    link.href = "/precious_resume.pdf";
    link.download = "precious_resume.pdf";

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const openGitHub = () => {
    window.open(
      "https://github.com/amarakwueprecious",
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <section className="hero" id="hero">
      <div className="hero-image fade-image">
        <img
          src={profile}
          alt="Portrait of Precious"
        />
      </div>

      <div className="hero-content">
        <p className="intro fade delay-1">
          Hi, I'm
        </p>

        <div className="name-wrapper">
          <span className="bg-text">
            DEVELOPER
          </span>

          <h1 className="fade delay-2">
            PRECIOUS
          </h1>
        </div>

        <h2 className="fade delay-3">
          Full Stack Developer
          <br />
        </h2>

        <p className="description fade delay-4">
          I build elegant digital experiences that combine
          beautiful, user-focused interfaces with clean,
          scalable backend architecture to create fast,
          responsive, and impactful web applications.
        </p>

        <div className="hero-buttons fade delay-5">
          <button
            className="primary-btn"
            onClick={openGitHub}
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