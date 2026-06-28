import SectionCard from "../../common/SectionCard";
import "./Sections.css";

const workData = [
  {
    id: 1,
    role: "Data Outreach Executive",
    organization: "Indian Oil",
    description:
      "Collected and verified data from various locations, ensuring accuracy and supporting field operations during the outreach project.",
    certificate: "/pdfs/work-certificate-2.pdf",
  },

  {
    id: 2,
    role: "Volunteer",
    organization: "Community Service",
    description:
      "Actively participated in community service initiatives, awareness campaigns and social welfare activities as a volunteer.",
    certificate: "/pdfs/work-certificate-1.pdf",
  },
];

function Work() {
  return (
    <section id="Work">

<SectionCard title="Work">

      {workData.map((work) => (

        <div className="work-card" key={work.id}>

          <h3>{work.role}</h3>

          <h4>{work.organization}</h4>

          <p>{work.description}</p>

          <button
            className="view-btn"
            onClick={() => window.open(work.certificate, "_blank")}
          >
            View Certificate
          </button>

        </div>

      ))}

   </SectionCard>

</section>
  );
}

export default Work;