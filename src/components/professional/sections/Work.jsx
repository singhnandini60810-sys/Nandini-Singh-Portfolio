import SectionCard from "../../common/SectionCard";
import "./Sections.css";

function Work() {
  return (
    <SectionCard title="Work">

      <div className="work-card">
        <h3>Freelance Web Developer</h3>
        <p>Worked with clients on short-term web development projects, building responsive websites and implementing UI improvements.</p>
      </div>

      <div className="work-card">
        <h3>Frontend Development Gigs</h3>
        <p>Designed and developed modern interfaces using React, HTML, CSS and JavaScript while improving user experience.</p>
      </div>

    </SectionCard>
  );
}

export default Work;