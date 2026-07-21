import "../styles/contact.css";

function Contact() {
  return (
    <section className="contact" id="contact">

      <span className="contact-tag">
        AVAILABLE FOR WORK
      </span>

      

      <p className="contact-text">
        Whether it's a portfolio, e-commerce website,
        dashboard or a custom web application,
        I'd love to help bring your ideas to life.
      </p>

      <div className="contact-box">

        <div className="contact-item">
          <small>Email</small>
          <h3>amarakwueprecious@gmail.com</h3>
        </div>

        <div className="contact-item">
          <small>Phone</small>
          <h3>+234 703 018 5587</h3>
        </div>

        <div className="contact-item">
          <small>Location</small>
          <h3>Lagos, Nigeria</h3>
        </div>

      </div>

      <a
        href="mailto:amarakwueprecious@gmail.com"
        className="contact-button"
      >
        Say Hello
      </a>

    </section>
  );
}

export default Contact;