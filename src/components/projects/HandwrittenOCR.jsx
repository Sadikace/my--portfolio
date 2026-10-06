function HandwrittenOCR() {
  return (
    <main className="case-study">

      <div className="case-study-container">

        <a href="/#projects" className="back-link">
          ← Back to Projects
        </a>

        <header className="case-study-header">

          <p className="section-label">
            OCR · NLP · COMPUTER VISION
          </p>

          <h1>
            Handwritten Text Recognition & Translation
          </h1>

          <p className="case-study-intro">
            An OCR-based system designed to recognize handwritten text
            from images and translate the extracted text. Multiple OCR
            approaches were explored and compared, with a Flask-based
            interface for image upload and text output.
          </p>

          <div className="case-study-tags">
            <span>Python</span>
            <span>OpenCV</span>
            <span>Tesseract</span>
            <span>PaddleOCR</span>
            <span>TrOCR</span>
            <span>Flask</span>
            <span>NLP</span>
          </div>

        </header>

        <section className="case-study-section">

          <h2>Project Overview</h2>

          <p>
            This project focuses on recognizing handwritten text from
            images and converting the extracted text into digital text.
            The system also supports translation of the recognized text
            into different languages.
          </p>

          <p>
            Multiple OCR approaches were explored to understand their
            suitability for handwritten text recognition, including
            traditional OCR and transformer-based recognition.
          </p>

        </section>

        <section className="case-study-section">

          <h2>OCR Approaches</h2>

          <div className="case-study-grid">

            <div className="case-study-card">
              <strong>Tesseract</strong>
              <span>
                Traditional OCR approach used for text recognition.
              </span>
            </div>

            <div className="case-study-card">
              <strong>PaddleOCR</strong>
              <span>
                OCR framework explored for improved recognition.
              </span>
            </div>

            <div className="case-study-card">
              <strong>TrOCR</strong>
              <span>
                Transformer-based model explored for handwritten text.
              </span>
            </div>

            <div className="case-study-card">
              <strong>OpenCV</strong>
              <span>
                Image preprocessing techniques used before OCR.
              </span>
            </div>

          </div>

        </section>

        <section className="case-study-section">

          <h2>Image Processing</h2>

          <p>
            Image preprocessing was used to improve the quality of
            images before passing them to OCR models.
          </p>

          <ul>
            <li>Grayscale conversion</li>
            <li>Gaussian blur</li>
            <li>Adaptive thresholding</li>
            <li>Dilation</li>
          </ul>

        </section>

        <section className="case-study-section">

          <h2>Recognition Pipeline</h2>

          <div className="case-study-grid">

            <div className="case-study-card">
              <strong>Image Upload</strong>
              <span>
                The user uploads a handwritten image through the web
                interface.
              </span>
            </div>

            <div className="case-study-card">
              <strong>Preprocessing</strong>
              <span>
                OpenCV preprocessing prepares the image for recognition.
              </span>
            </div>

            <div className="case-study-card">
              <strong>OCR</strong>
              <span>
                The selected OCR model extracts text from the image.
              </span>
            </div>

            <div className="case-study-card">
              <strong>Translation</strong>
              <span>
                The recognized text can be translated into another
                language.
              </span>
            </div>

          </div>

        </section>

        <section className="case-study-section">

          <h2>Supported Technologies</h2>

          <ul>
            <li>Python</li>
            <li>OpenCV</li>
            <li>Tesseract</li>
            <li>PaddleOCR</li>
            <li>TrOCR</li>
            <li>Flask</li>
            <li>Pillow</li>
            <li>Google Translate</li>
          </ul>

        </section>

        <section className="case-study-section case-study-final">

          <h2>Technologies</h2>

          <div className="case-study-tags">
            <span>Python</span>
            <span>OpenCV</span>
            <span>Tesseract</span>
            <span>PaddleOCR</span>
            <span>TrOCR</span>
            <span>Flask</span>
            <span>NLP</span>
          </div>

        </section>

        <div className="case-study-actions">

          <a
            href="https://github.com/Sadikace/HandwrittenTextRecognition-"
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

export default HandwrittenOCR;