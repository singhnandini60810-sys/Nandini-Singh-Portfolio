import SectionCard from "../../common/SectionCard";
import "./Sections.css";

function Certifications() {
  return (
    <SectionCard title="Certifications">

      <div className="certificate-card">
        <h3>AWS</h3>

        <button className="view-btn">
          View Certificate
        </button>
      </div>

      <div className="certificate-card">
        <h3>JavaScript</h3>

        <button className="view-btn">
          View Certificate
        </button>
      </div>

      <div className="certificate-card">
        <h3>HTML & CSS</h3>

        <button className="view-btn">
          View Certificate
        </button>
      </div>

    </SectionCard>
  );
}

export default Certifications;