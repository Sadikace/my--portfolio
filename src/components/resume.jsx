function Resume() {
  return (
    <section className="resume-section" id="resume">
      <div className="section-container">

        <div className="resume-card">

          <div className="resume-content">
            <p className="section-label">RESUME</p>

            <h2>
              Interested in working together?
            </h2>

            <p>
              View my resume to learn more about my technical skills,
              projects, education, and experience in data analytics and
              AI-focused development.
            </p>
          </div>

          <div className="resume-actions">

            <a
              href="/resume/Muhammad_Sadik.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn primary-btn"
            >
              View Resume
            </a>

            <a
              href="/resume/Muhammad_Sadik.pdf"
              download
              className="btn secondary-btn"
            >
              Download Resume
            </a>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Resume;