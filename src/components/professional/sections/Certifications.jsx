import SectionCard from "../../common/SectionCard";
import certificates from "../../../data/certificates";

function Certifications() {
  return (
    <SectionCard title="Certifications">

      <div className="certificate-grid">

        {certificates.map((cert) => (

          <div
            className="certificate-card"
            key={cert.id}
          >

            <h3>{cert.title}</h3>

            <p>
              <strong>Issued By:</strong> {cert.issuer}
            </p>

            <p>
              <strong>Year:</strong> {cert.year}
            </p>

            <button
              className="view-btn"
              onClick={() => window.open(cert.file, "_blank")}
            >
              View Certificate
            </button>

          </div>

        ))}

      </div>

    </SectionCard>
  );
}

export default Certifications;