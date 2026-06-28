import SectionCard from "../../common/SectionCard";
import "./Skills.css";

const skills = [
  { name: "HTML", level: 25 },
  { name: "CSS", level: 25},
  { name: "JavaScript", level: 25 },
  { name: "React.js", level: 20 },
  { name: "Node.js", level: 0 },
  { name: "MongoDB", level: 5 },
  { name: "MySQL", level: 10 },
  { name: "Java", level: 25 },
  { name: "Python", level: 20 },
  { name: "Git & GitHub", level: 45 },
  { name: "C", level: 25 },
];

function About() {
  return (
    <section id="Skills">

<SectionCard title="Skills">
      <div className="skills-container">
        {skills.map((skill, index) => (
          <div className="skill" key={index}>
            <div className="skill-top">
              <span>{skill.name}</span>
              <span>{skill.level}%</span>
            </div>

            <div className="skill-bar">
              <div
                className="skill-progress"
                style={{ width: `${skill.level}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    
    </SectionCard>

</section>
  );
}

export default About;