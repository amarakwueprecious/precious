import "../styles/about.css";

function About() {
  return (
    <section className="about" id="about">

      <div className="section-title">
        <span className="section-number">01</span>

        <div>
          <div className="heading">
            <span className="dot"></span>
            <h2>ABOUT ME</h2>
          </div>

          <p className="sub-heading">
            Crafting digital experiences with clean code and thoughtful design.
          </p>
        </div>
      </div>

      <div className="about-content">

        <div className="about-text">

          <h3>
            I don't just build websites.
          </h3>

          <p>
            I'm <strong>Precious</strong>, a Full Stack Developer and UI/UX
            Designer passionate about creating modern, responsive and visually
            appealing web applications that deliver seamless user experiences.
          </p>

          <p>
            My goal is to transform ideas into beautiful, functional and
            scalable digital products while continuously improving my skills
            and learning new technologies.
          </p>

        </div>

        <div className="about-cards">

          <div className="card">
            <h2>15+</h2>
            <p>Projects</p>
          </div>

          <div className="card">
            <h2>2+</h2>
            <p>Years Learning</p>
          </div>

          <div className="card">
            <h2>10+</h2>
            <p>Technologies</p>
          </div>

        </div>

      </div>

    </section>
  );
}

export default About;