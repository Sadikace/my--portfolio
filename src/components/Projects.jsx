function Projects() {
  return (
    <section className="projects-section" id="projects">
      <div className="section-container">

        <div className="section-heading">
          <p className="section-label">PROJECTS</p>

          <h2>
            Projects built to solve real problems.
          </h2>
        </div>

        <div className="projects-grid">

          {/* PROJECT 1 — CUSTOMER INTELLIGENCE */}

          <article className="project-card featured-project">

            <div className="project-top">
              <span className="project-number">01</span>

              <span className="project-category">
                DATA ANALYTICS · BUSINESS INTELLIGENCE
              </span>
            </div>

            <h3>
              Customer Intelligence Platform
            </h3>

            <p className="project-description">
              An end-to-end customer analytics platform built using the
              Olist Brazilian e-commerce dataset. The project integrates
              customer, order, product, seller, payment, and review data
              to analyze business performance and customer behavior.
            </p>

            <div className="project-stats">
              <div>
                <strong>113K+</strong>
                <span>Order Records</span>
              </div>

              <div>
                <strong>6+</strong>
                <span>Data Sources</span>
              </div>

              <div>
                <strong>RFM</strong>
                <span>Customer Analysis</span>
              </div>
            </div>

            <div className="project-tags">
              <span>Python</span>
              <span>Pandas</span>
              <span>NumPy</span>
              <span>SQL</span>
              <span>MySQL</span>
              <span>Power BI</span>
              <span>Excel</span>
            </div>

            <div className="project-actions">
              <a
                href="/projects/customer-intelligence"
                className="project-link"
              >
                View Project →
              </a>
            </div>

          </article>


          {/* PROJECT 2 — EMPLOYEE ATTRITION */}

          <article className="project-card">

            <div className="project-top">
              <span className="project-number">02</span>

              <span className="project-category">
                MACHINE LEARNING · HR ANALYTICS
              </span>
            </div>

            <h3>
              Employee Attrition Prediction System
            </h3>

            <p className="project-description">
              A machine learning project that analyzes employee data and
              predicts whether an employee is likely to leave. The project
              includes preprocessing, exploratory analysis, feature
              engineering, model development, and evaluation.
            </p>

            <div className="project-stats">
              <div>
                <strong>1,470</strong>
                <span>Employees</span>
              </div>

              <div>
                <strong>35</strong>
                <span>Features</span>
              </div>

              <div>
                <strong>3</strong>
                <span>ML Models</span>
              </div>
            </div>

            <div className="project-tags">
              <span>Python</span>
              <span>Pandas</span>
              <span>Machine Learning</span>
              <span>EDA</span>
              <span>Classification</span>
            </div>

            <div className="project-actions">
              <a
                href="/projects/employee-attrition"
                className="project-link"
              >
                View Project →
              </a>
            </div>

          </article>


          {/* PROJECT 3 — LAWYERBOT */}

          <article className="project-card">

            <div className="project-top">
              <span className="project-number">03</span>

              <span className="project-category">
                GENERATIVE AI · RAG
              </span>
            </div>

            <h3>
              LawyerBot
            </h3>

            <p className="project-description">
              An AI-powered legal assistant that uses Retrieval-Augmented
              Generation to retrieve relevant legal information before
              generating answers. The system includes document ingestion,
              text chunking, embeddings, vector search, and an API backend.
            </p>

            <div className="project-stats">
              <div>
                <strong>RAG</strong>
                <span>Architecture</span>
              </div>

              <div>
                <strong>FAISS</strong>
                <span>Vector Search</span>
              </div>

              <div>
                <strong>LLM</strong>
                <span>Generation</span>
              </div>
            </div>

            <div className="project-tags">
              <span>Python</span>
              <span>FastAPI</span>
              <span>FAISS</span>
              <span>RAG</span>
              <span>LLM</span>
              <span>Sentence Transformers</span>
            </div>

            <div className="project-actions">
              <a
                href="/projects/lawyerbot"
                className="project-link"
              >
                View Project →
              </a>
            </div>

          </article>


          {/* PROJECT 4 — HANDWRITTEN OCR */}

          <article className="project-card">

            <div className="project-top">
              <span className="project-number">04</span>

              <span className="project-category">
                OCR · NLP
              </span>
            </div>

            <h3>
              Handwritten Text Recognition & Translation
            </h3>

            <p className="project-description">
              An OCR-based system designed to recognize handwritten text
              from images and translate the extracted text. Multiple OCR
              approaches were explored and compared, with a Flask-based
              interface for image upload and text output.
            </p>

            <div className="project-stats">
              <div>
                <strong>3</strong>
                <span>OCR Models</span>
              </div>

              <div>
                <strong>OCR</strong>
                <span>Recognition</span>
              </div>

              <div>
                <strong>Multi</strong>
                <span>Language</span>
              </div>
            </div>

            <div className="project-tags">
              <span>Python</span>
              <span>Tesseract</span>
              <span>PaddleOCR</span>
              <span>TrOCR</span>
              <span>Flask</span>
              <span>NLP</span>
            </div>

            <div className="project-actions">
              <a
                href="/projects/handwritten-ocr"
                className="project-link"
              >
                View Project →
              </a>
            </div>

          </article>

        </div>

      </div>
    </section>
  );
}

export default Projects;