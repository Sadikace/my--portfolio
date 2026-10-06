function EmployeeAttrition() {
  return (
    <main className="case-study">

      <div className="case-study-container">

        <a href="/#projects" className="back-link">
          ← Back to Projects
        </a>

        <header className="case-study-header">

          <p className="section-label">
            MACHINE LEARNING · HR ANALYTICS
          </p>

          <h1>
            Employee Attrition Prediction System
          </h1>

          <p className="case-study-intro">
            A machine learning project that analyzes employee data
            and predicts whether an employee is likely to leave.
            The project covers preprocessing, exploratory data
            analysis, feature engineering, model development, and
            evaluation.
          </p>

          <div className="case-study-tags">
            <span>Python</span>
            <span>Pandas</span>
            <span>Machine Learning</span>
            <span>EDA</span>
            <span>Classification</span>
          </div>

        </header>

        <section className="case-study-section">

          <h2>Project Overview</h2>

          <p>
            The project uses an employee dataset containing 1,470
            records and 35 features to study factors associated with
            employee attrition.
          </p>

          <p>
            The objective was to develop classification models that
            could support analysis of employee attrition patterns
            and provide decision-support insights.
          </p>

        </section>

        <section className="case-study-section">

          <h2>Data & Analysis</h2>

          <div className="case-study-grid">

            <div className="case-study-card">
              <strong>1,470</strong>
              <span>Employee Records</span>
            </div>

            <div className="case-study-card">
              <strong>35</strong>
              <span>Features</span>
            </div>

            <div className="case-study-card">
              <strong>EDA</strong>
              <span>Exploratory Data Analysis</span>
            </div>

            <div className="case-study-card">
              <strong>Classification</strong>
              <span>Attrition Prediction</span>
            </div>

          </div>

        </section>

        <section className="case-study-section">

          <h2>Machine Learning Models</h2>

          <p>
            Three classification approaches were developed and
            evaluated:
          </p>

          <ul>
            <li>Logistic Regression</li>
            <li>Decision Tree</li>
            <li>Random Forest</li>
          </ul>

          <p>
            The models were evaluated using accuracy, precision,
            recall, F1 score, and confusion matrices.
          </p>

        </section>

        <section className="case-study-section">

          <h2>Model Evaluation</h2>

          <div className="case-study-stats">

            <div>
              <strong>86.05%</strong>
              <span>Logistic Regression Accuracy</span>
            </div>

            <div>
              <strong>43.84%</strong>
              <span>Logistic Regression F1 Score</span>
            </div>

          </div>

          <p style={{ marginTop: "30px" }}>
            The evaluation showed that accuracy alone does not fully
            describe the model's ability to identify employees who
            actually leave. Recall and F1 score were therefore also
            considered when interpreting the results.
          </p>

        </section>

        <section className="case-study-section">

          <h2>Important Features</h2>

          <p>
            Feature analysis from the Random Forest model highlighted
            several variables, including:
          </p>

          <ul>
            <li>Monthly Income</li>
            <li>Age</li>
            <li>Total Working Years</li>
            <li>Distance From Home</li>
            <li>Years With Current Manager</li>
            <li>Years at Company</li>
          </ul>

        </section>

        <section className="case-study-section">

          <h2>Business Insights</h2>

          <div className="case-study-grid">

            <div className="case-study-card">
              <strong>Compensation</strong>
              <span>
                Salary and salary growth were examined as potential
                factors related to attrition.
              </span>
            </div>

            <div className="case-study-card">
              <strong>Work-Life Balance</strong>
              <span>
                Work-life balance and environment satisfaction were
                analyzed.
              </span>
            </div>

            <div className="case-study-card">
              <strong>Distance From Home</strong>
              <span>
                Employee commute distance was included in the
                analysis.
              </span>
            </div>

            <div className="case-study-card">
              <strong>Overtime</strong>
              <span>
                Overtime was examined as another relevant employee
                factor.
              </span>
            </div>

          </div>

        </section>

        <section className="case-study-section">

          <h2>Limitations</h2>

          <ul>
            <li>The dataset is specific to the available employee data.</li>
            <li>The dataset contains class imbalance.</li>
            <li>The available features limit the scope of the analysis.</li>
            <li>Prediction does not establish causation.</li>
            <li>The evaluation used a single train-test split.</li>
          </ul>

        </section>

      <section className="case-study-section case-study-final">

  <h2>Technologies</h2>

  <div className="case-study-tags">
    <span>Python</span>
    <span>Pandas</span>
    <span>Machine Learning</span>
    <span>EDA</span>
    <span>Classification</span>
  </div>

</section>

<div className="case-study-actions">

  <a
    href="https://colab.research.google.com/drive/123iZm9k0kRO6Fgmjb3jObLxt13fvJtUG"
    target="_blank"
    rel="noopener noreferrer"
    className="btn primary-btn"
  >
    Open in Google Colab →
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

export default EmployeeAttrition;