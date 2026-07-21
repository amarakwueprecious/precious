import "../styles/footer.css";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-glow"></div>

      <div className="footer-content">

        <h2>Let's Build Something Amazing</h2>

        <p>
          Thank you for visiting my portfolio.
          If you have a project, collaboration, or opportunity,
          I'd love to hear from you.
        </p>

        <a
          href="mailto:amarakwueprecious@gmail.com"
          className="footer-btn"
        >
          Get In Touch
        </a>

        <div className="footer-links">

          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>

        </div>

        <div className="footer-contact">

          <span>📧 amarakwueprecious@gmail.com</span>

          <span>📍 Lagos, Nigeria</span>

        </div>

        <p className="copyright">
          © 2026 Nzubechukwu Precious. All Rights Reserved.
        </p>

      </div>

    </footer>
  );
}

export default Footer;