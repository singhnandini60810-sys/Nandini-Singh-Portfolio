import SectionCard from "../../common/SectionCard";
import "./Sections.css";

function Resume() {
  return (
    <SectionCard title="Resume">

      <div className="resume-box">

        <a
          href="/pdfs/technical-resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          Technical Resume
        </a>

        <a
          href="/pdfs/general-cv.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          General CV
        </a>

        <a
          href="/pdfs/non-tech-cv.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          Non-Technical CV
        </a>

      </div>

    </SectionCard>
  );
}

export default Resume;