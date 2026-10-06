function LawyerBot() {
  return (
    <main className="case-study">

      <div className="case-study-container">

        <a href="/#projects" className="back-link">
          ← Back to Projects
        </a>

        <header className="case-study-header">

          <p className="section-label">
            GENERATIVE AI · RAG · LEGAL TECH
          </p>

          <h1>
            LawyerBot
          </h1>

          <p className="case-study-intro">
            An AI-powered legal assistant designed to retrieve relevant
            Indian and Kerala legal information before generating answers.
            The system uses Retrieval-Augmented Generation to combine
            document retrieval with large language model generation.
          </p>

          <div className="case-study-tags">
            <span>Python</span>
            <span>FastAPI</span>
            <span>RAG</span>
            <span>FAISS</span>
            <span>LLM</span>
            <span>Sentence Transformers</span>
          </div>

        </header>

        <section className="case-study-section">

          <h2>Project Overview</h2>

          <p>
            LawyerBot is a Retrieval-Augmented Generation based legal
            assistant focused on Indian and Kerala law. It retrieves
            relevant legal information from a curated knowledge base
            before generating an answer.
          </p>

          <p>
            The system was designed to reduce unsupported responses by
            grounding the generated answer in retrieved legal documents
            and providing relevant source information.
          </p>

        </section>

        <section className="case-study-section">

          <h2>How It Works</h2>

          <div className="case-study-grid">

            <div className="case-study-card">
              <strong>1. Document Ingestion</strong>
              <span>
                Legal documents are collected and processed for the
                knowledge base.
              </span>
            </div>

            <div className="case-study-card">
              <strong>2. Text Processing</strong>
              <span>
                Documents are extracted, cleaned, and divided into
                searchable chunks.
              </span>
            </div>

            <div className="case-study-card">
              <strong>3. Embeddings</strong>
              <span>
                Text chunks are converted into vector representations
                using Sentence Transformers.
              </span>
            </div>

            <div className="case-study-card">
              <strong>4. Retrieval</strong>
              <span>
                FAISS searches the vector database for relevant legal
                information.
              </span>
            </div>

          </div>

        </section>

        <section className="case-study-section">

          <h2>RAG Architecture</h2>

          <p>
            When a user submits a legal question, the system converts
            the query into an embedding and searches the FAISS vector
            database for relevant document chunks.
          </p>

          <p>
            The retrieved context is then provided to the language
            model so that the response is generated using relevant
            information from the legal knowledge base.
          </p>

        </section>

        <section className="case-study-section">

          <h2>Technology Stack</h2>

          <div className="case-study-grid">

            <div className="case-study-card">
              <strong>FastAPI</strong>
              <span>Backend API</span>
            </div>

            <div className="case-study-card">
              <strong>FAISS</strong>
              <span>Vector Search</span>
            </div>

            <div className="case-study-card">
              <strong>Sentence Transformers</strong>
              <span>Text Embeddings</span>
            </div>

            <div className="case-study-card">
              <strong>Llama 3.3</strong>
              <span>Language Model</span>
            </div>

          </div>

        </section>

        <section className="case-study-section">

          <h2>Key Features</h2>

          <ul>
            <li>Retrieval-Augmented Generation architecture</li>
            <li>FAISS-based semantic search</li>
            <li>Legal document processing</li>
            <li>Source-based responses</li>
            <li>Chat history support</li>
            <li>FastAPI backend</li>
          </ul>

        </section>

        <section className="case-study-section case-study-final">

          <h2>Technologies</h2>

          <div className="case-study-tags">
            <span>Python</span>
            <span>FastAPI</span>
            <span>FAISS</span>
            <span>RAG</span>
            <span>Llama 3.3</span>
            <span>Sentence Transformers</span>
            <span>pdfplumber</span>
          </div>

        </section>

        <div className="case-study-actions">

          <a
            href="https://github.com/Sadikace/LawyerAI-legal-assistant-using-RAG"
            target="_blank"
            rel="noopener noreferrer"
            className="btn primary-btn"
          >
            View on GitHub →
          </a>

          <a
            href="/#projects"
            className="btn secondary-btn"
          >
            Back to Projects
          </a>

        </div>

      </div>

    </main>
  );
}

export default LawyerBot;