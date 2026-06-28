import "./Professional.css";
import Hero from "./Hero";
import Navigation from "./Navigation";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Work from "./sections/Work";
import Resume from "./sections/Resume";
import Academics from "./sections/Academics";
import Certifications from "./sections/Certifications";
import Activities from "./sections/Activities";
import Contact from "./sections/Contact";
import ThankYou from "./sections/ThankYou";

import BackToTop from "../common/BackToTop";

function Professional() {

  return (

    <div className="professional-page">

      {/* Background */}
     
      <div className="background-blob"></div>

      {/* Hero */}
      <Hero />

      {/* Navigation */}
      <Navigation />

      {/* Main Content */}
      <main className="professional-main">

        <About />

        <Skills />

        <Projects />

        <Work />

        <Resume />

        <Academics />

        <Certifications />

        <Activities />

        <Contact />

        <ThankYou />

      </main>

      {/* Back To Top */}
      <BackToTop />

    </div>

  );

}

export default Professional;