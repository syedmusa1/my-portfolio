import "./contact.css"

function Contact() {
  return (
    <section className="contact-page">
      <h1>Contact Me</h1>

      <p className="contact-text">
        I'm currently looking for frontend internship
        opportunities and open to connecting with
        developers and recruiters.
      </p>

      <div className="contact-cards">

        <div className="contact-card">
          <h2>Email</h2>
          <p>
            Feel free to reach out regarding internships.
          </p>
          <a href="mailto:mail.syedmusa@gmail.com">
            mail.syedmusa@gmail.com
          </a>
        </div>

        <div className="contact-card">
          <h2>LinkedIn</h2>
          <p>
            Connect with me professionally.
          </p>
          <a
            href="https://www.linkedin.com/in/syed-musa1"
            target="_blank"
            rel="noreferrer"
          >
            Visit LinkedIn
          </a>
        </div>

        <div className="contact-card">
          <h2>GitHub</h2>
          <p>
            Explore my projects and coding journey.
          </p>
          <a
            href="https://github.com/syedmusa1"
            target="_blank"
            rel="noreferrer"
          >
            Visit GitHub
          </a>
        </div>
        
      </div>
    </section>
  );
}

export default Contact;