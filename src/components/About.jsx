function About() {
  return (
    <section className="about-section" id="about">
      <div className="about-container">

        {/* LEFT SIDE */}

        <div className="about-main">

          <p className="section-label">
            ABOUT ME
          </p>

          <h2>
            Building with data,
            <span> AI, and purpose.</span>
          </h2>

          <p className="about-lead">
            I'm Muhammad Sadik, a Computer Science Engineering student
            focused on Data Analytics, Machine Learning, and AI.
          </p>

          <p className="about-text">
            I work with Python, Pandas, NumPy, SQL, MySQL, Excel, and
            Power BI to clean, analyze, visualize, and transform data
            into meaningful insights and practical business solutions.
          </p>

          <p className="about-text">
            My projects include an end-to-end Customer Intelligence
            Platform, an Employee Attrition Prediction System, a
            RAG-based legal assistant called LawyerBot, and a
            handwritten text recognition and multilingual translation
            system.
          </p>

          <p className="about-text">
            Currently, I'm strengthening my skills in Data Analytics,
            SQL, Power BI, Machine Learning, and AI while building
            real-world projects and preparing for opportunities in the
            technology industry.
          </p>

        </div>


        {/* RIGHT SIDE */}

        <div className="about-side">

          <div className="about-focus">

            <div className="about-focus-header">
              <span>01</span>
              <p>PRIMARY FOCUS</p>
            </div>

            <h3>
              Data Analytics
            </h3>

            <p>
              Turning raw data into clear insights, dashboards,
              and decisions.
            </p>

          </div>


          <div className="about-focus">

            <div className="about-focus-header">
              <span>02</span>
              <p>EXPLORING</p>
            </div>

            <h3>
              AI & Machine Learning
            </h3>

            <p>
              Building practical ML and AI applications using
              real-world datasets and modern techniques.
            </p>

          </div>


          <div className="about-focus">

            <div className="about-focus-header">
              <span>03</span>
              <p>APPROACH</p>
            </div>

            <h3>
              Learn → Build → Improve
            </h3>

            <p>
              I prefer learning through projects and solving
              problems that have practical value.
            </p>

          </div>


          {/* EDUCATION */}

          <div className="about-education">

            <div className="about-education-top">
              <span>EDUCATION</span>
              <strong>2022 — Present</strong>
            </div>

            <h3>
              B.Tech in Computer Science & Engineering
            </h3>

            <p>
              Indira Gandhi Institute of Engineering and Technology
            </p>

            <small>
              APJ Abdul Kalam Technological University
            </small>

          </div>

        </div>

      </div>
    </section>
  );
}

export default About;