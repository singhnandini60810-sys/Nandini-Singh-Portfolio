import SectionCard from "../../common/SectionCard";
import "./Sections.css";

function Academics() {
  return (
    <SectionCard title="Academics">

      <div className="academic-card">
        <h3>B.Tech (Computer Science)</h3>
        <p>2023 – Present</p>
        <p>Babu Banarasi Das University</p>
        <p>CGPA : 8.2(till 5th sem)</p>
      </div>

      <div className="academic-card">
        <h3>Class XII</h3>
        <p>2022-2023</p>
        <p>Kendriya Vidayalya Aliganj,Lucknow</p>
        <p>Percentage : 72.5%</p>
      </div>

      <div className="academic-card">
        <h3>Class X</h3>
        <p>2020-2021</p>
        <p>Narayana Public School ,Gonda</p>
        <p>Percentage : 92.5%</p>
      </div>

    </SectionCard>
  );
}

export default Academics;