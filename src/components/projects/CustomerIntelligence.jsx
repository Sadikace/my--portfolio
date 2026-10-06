
function CustomerIntelligence() {
  return (
    <main className="case-study">

      <div className="case-study-container">

        <a href="/#projects" className="back-link">
          ← Back to Projects
        </a>

        <header className="case-study-header">

          <p className="section-label">
            DATA ANALYTICS · BUSINESS INTELLIGENCE
          </p>

          <h1>
            Customer Intelligence & Sales Analytics Platform
          </h1>

          <p className="case-study-intro">
            An end-to-end customer analytics platform built using the
            Olist Brazilian e-commerce dataset to analyze customer
            behavior, sales performance, products, payments, and
            delivery outcomes.
          </p>

          <div className="case-study-tags">
            <span>Python</span>
            <span>Pandas</span>
            <span>NumPy</span>
            <span>SQL</span>
            <span>MySQL</span>
            <span>Power BI</span>
            <span>Excel</span>
          </div>

        </header>

        <section className="case-study-section">

          <h2>Project Overview</h2>

          <p>
            This project processes more than 113,000 order records
            across customer, order, product, seller, payment, and
            review datasets.
          </p>

          <p>
            The goal was to transform multiple raw datasets into an
            analysis-ready data model and use the resulting data to
            understand business performance and customer behavior.
          </p>

        </section>

        <section className="case-study-section">

          <h2>Data Preparation</h2>

          <ul>
            <li>Loaded and inspected multiple raw datasets.</li>
            <li>Cleaned and transformed data using Python and Pandas.</li>
            <li>Resolved inconsistencies between datasets.</li>
            <li>Integrated customer, order, product, seller, payment, and review data.</li>
            <li>Prepared analysis-ready datasets for further analysis.</li>
          </ul>

        </section>

        <section className="case-study-section">

          <h2>Exploratory Data Analysis</h2>

          <p>
            Exploratory analysis was performed to identify patterns
            across customer behavior, sales, products, payments, and
            delivery performance.
          </p>

          <div className="case-study-grid">

            <div className="case-study-card">
              <strong>Customer Behavior</strong>
              <span>Spending, frequency, and recency</span>
            </div>

            <div className="case-study-card">
              <strong>Sales Analysis</strong>
              <span>Sales and revenue patterns</span>
            </div>

            <div className="case-study-card">
              <strong>Product Analysis</strong>
              <span>Product performance and trends</span>
            </div>

            <div className="case-study-card">
              <strong>Delivery Analysis</strong>
              <span>Delivery time and delays</span>
            </div>

          </div>

        </section>

        <section className="case-study-section">

          <h2>Feature Engineering</h2>

          <p>
            Business-focused analytical features were created to
            support deeper customer and sales analysis.
          </p>

          <ul>
            <li>Order value</li>
            <li>Delivery time</li>
            <li>Delivery delays</li>
            <li>Customer spending</li>
            <li>Purchase frequency</li>
            <li>Customer recency</li>
          </ul>

          <p>
            These features were used to support customer segmentation
            and RFM analysis.
          </p>

        </section>

        <section className="case-study-section">

          <h2>SQL & Business Intelligence</h2>

          <p>
            SQL and MySQL were used for analytical queries and
            business-oriented analysis. Power BI and Excel were used
            to develop reporting workflows, KPI tracking, and
            visual analysis.
          </p>

          <div className="case-study-grid">

            <div className="case-study-card">
              <strong>SQL / MySQL</strong>
              <span>Business analysis and analytical queries</span>
            </div>

            <div className="case-study-card">
              <strong>Power BI</strong>
              <span>KPI reporting and data visualization</span>
            </div>

            <div className="case-study-card">
              <strong>Excel</strong>
              <span>Analysis and reporting workflows</span>
            </div>

            <div className="case-study-card">
              <strong>RFM Analysis</strong>
              <span>Customer segmentation support</span>
            </div>

          </div>

        </section>

        <section className="case-study-section">

          <h2>Project Scale</h2>

          <div className="case-study-stats">

            <div>
              <strong>113K+</strong>
              <span>Order Records</span>
            </div>

            <div>
              <strong>6</strong>
              <span>Integrated Data Sources</span>
            </div>

            <div>
              <strong>RFM</strong>
              <span>Customer Analysis</span>
            </div>

          </div>

        </section>
        <section className="case-study-section case-study-final">

  <h2>Technologies</h2>

  <div className="case-study-tags">
    <span>Python</span>
    <span>Pandas</span>
    <span>NumPy</span>
    <span>SQL</span>
    <span>MySQL</span>
    <span>Power BI</span>
    <span>Excel</span>
  </div>

  <div className="case-study-actions">

    <a
      href="https://github.com/Sadikace/Customer-Intelligence-Platform"
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

</section>

       
      </div>

    </main>
  );
}

export default CustomerIntelligence;