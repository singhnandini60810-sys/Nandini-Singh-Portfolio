import SectionCard from "../../common/SectionCard";
import certificates from "../../../data/certificates";

function Certifications() {
  return (
    <SectionCard title="Certifications">

      {certificates.map((cert) => (

        <div key={cert.id} className="certificate-card">

          <h3>{cert.title}</h3>

          <p>{cert.issuer}</p>

          <p>{cert.year}</p>

          <button
            onClick={() => window.open(cert.file, "_blank")}
          >
            View Certificate
          </button>

        </div>

      ))}

    </SectionCard>
  );
}

export default Certifications;