import SectionCard from "../../common/SectionCard";

function Resume() {
  return (
    <section id="CV">

<SectionCard title="CV">
      <div className="resume-grid">

        <div className="resume-card">

          <h3> Technical CV</h3>

          <p>
            Full Stack Development, Web Technologies, Projects,
            Technical Skills and Engineering Roles.
          </p>

          <button
            className="resume-btn"
            onClick={() => window.open("/pdfs/technical-resume.pdf", "_blank")}
          >
            View CV
          </button>

        </div>

        <div className="resume-card">

          <h3> Non-Technical CV</h3>

          <p>
            Leadership, Communication, Teamwork,
            Extracurricular Activities and Soft Skills.
          </p>

          <button
            className="resume-btn"
            onClick={() => window.open("/pdfs/non-tech-resume.pdf", "_blank")}
          >
            View CV
          </button>

        </div>

        <div className="resume-card">

          <h3> General CV</h3>

          <p>
            Complete academic profile, achievements,
            certifications and professional overview.
          </p>

          <button
            className="resume-btn"
            onClick={() => window.open("/pdfs/general-cv.pdf", "_blank")}
          >
            View CV
          </button>

        </div>

      </div>

    </SectionCard>
    </section>
  );
}

export default Resume;