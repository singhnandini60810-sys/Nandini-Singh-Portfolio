import SectionCard from "../../common/SectionCard";

const activities = [
  {
    title: "Blood Donation Awareness",
    description:
      "Participated in a blood donation awareness campaign and supported community welfare initiatives.",
    year: "2026",
    certificate: "/pdfs/Blood Donation.pdf",
  },

  {
    title: "NSS Volunteer",
    description:
      "Worked as an active volunteer in NSS activities including social awareness and community service.",
    year: "2026",
    certificate: "/pdfs/Volunteer.pdf",
  },

  {
    title: "Quiz Competition",
    description:
      "Participated in an inter-college quiz competition showcasing analytical and technical knowledge.",
    year: "2025",
    certificate: "/pdfs/Quiz.pdf",
  },
];

function Activities() {
  return (
    <section id="Activities">

<SectionCard title="Extra Curricular Activities">

      <div className="activities-grid">

        {activities.map((activity, index) => (

          <div className="activity-card" key={index}>

            <h3>{activity.title}</h3>

            <p>{activity.description}</p>

            <span>Year : {activity.year}</span>

            <button
              className="view-btn"
              onClick={() => window.open(activity.certificate, "_blank")}
            >
              View Certificate
            </button>

          </div>

        ))}

      </div>

   </SectionCard>

</section>
  );
}

export default Activities;