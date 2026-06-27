import SectionCard from "../../common/SectionCard";
import "./Sections.css";

function Activities() {
  return (
    <SectionCard title="Extra Curricular Activities">

      <div className="activity-card">
        <h3>NSS Volunteer</h3>

        <p>
          Participated in community service, awareness drives,
          plantation campaigns and social activities.
        </p>
      </div>

      <div className="activity-card">
        <h3>College Events</h3>

        <p>
          Volunteered and participated in departmental events,
          workshops and technical activities.
        </p>
      </div>

    </SectionCard>
  );
}

export default Activities;