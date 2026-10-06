function Contact() {
  return (
    <section className="contact-section" id="contact">
      <div className="section-container">

        <div className="contact-content">

          <p className="section-label">CONTACT</p>

          <h2>
            Let's build something meaningful.
          </h2>

          <p className="contact-description">
            I'm open to internships, entry-level opportunities, and
            data-focused projects where I can apply my skills in analytics,
            Python, SQL, Power BI, and AI.
          </p>

          <div className="contact-links">

            {/* EMAIL */}

            <a
              href="mailto:sadikabdusaleem@gmail.com"
              className="contact-link"
            >
              <span>Email</span>
              <strong>sadikabdusaleem@gmail.com</strong>
            </a>

            {/* GITHUB */}

            <a
              href="https://github.com/Sadikace"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link"
            >
              <span>GitHub</span>
              <strong>github.com/Sadikace</strong>
            </a>

            {/* LINKEDIN */}

            <a
              href="https://www.linkedin.com/in/muhammad-sadik-4a615126a?utm_source=share_via&utm_content=profile&utm_medium=member_android"
              className="contact-link"
            >
              <span>LinkedIn</span>
              <strong>LinkedIn Profile →</strong>
            </a>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Contact;