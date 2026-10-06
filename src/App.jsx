import Navbar from "./components/navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/skills";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Resume from "./components/resume";
import Contact from "./components/contact";

import CustomerIntelligence from "./components/projects/CustomerIntelligence";
import EmployeeAttrition from "./components/projects/EmployeeAttrition";
import LawyerBot from "./components/projects/LawyerBot";
import HandwrittenOCR from "./components/projects/HandwrittenOCR";

function App() {
  const path = window.location.pathname.replace(/\/$/, "");

  if (path === "/projects/customer-intelligence") {
    return <CustomerIntelligence />;
  }

  if (path === "/projects/employee-attrition") {
    return <EmployeeAttrition />;
  }

  if (path === "/projects/lawyerbot") {
    return <LawyerBot />;
  }

  if (path === "/projects/handwritten-ocr") {
    return <HandwrittenOCR />;
  }

  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Education />
      <Resume />
      <Contact />
    </>
  );
}

export default App;