import SectionCard from "../../common/SectionCard";
import "./Projects.css";

const projects = [
  {
    title: "ATS Calculator",
    github: "https://github.com/singhnandini60810-sys/ATS-Calculator",
    live: "https://singhnandini60810-sys.github.io/ATS-Calculator/",
  },
  {
    title: "Nandini-Singh-Portfolio",
    github: "https://github.com/singhnandini60810-sys/Nandini-Singh-Portfolio",
    live: "https://nandini-singh-portfolio-ictw.vercel.app/professional",
  },
  {
    title: "GitHub Repo Finder",
    github: "https://github.com/singhnandini60810-sys/github-repo-finder",
    live: "https://singhnandini60810-sys.github.io/github-repo-finder/",
  },
  {
    title: "Block-Blast-Game",
    github: "https://github.com/singhnandini60810-sys/Block-Blast-/blob/main/README.md",
    live: "https://singhnandini60810-sys.github.io/Block-Blast-/",
  },
];

function Projects() {
  return (
    <section id="Projects">

<SectionCard title="Projects">

      <div className="projects-grid">

        {projects.map((project, index) => (

          <div className="project-card" key={index}>

            <h3>{project.title}</h3>

            <div className="project-buttons">

              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="github-btn"
              >
                GitHub
              </a>

              <a
                href={project.live}
                target="_blank"
                rel="noreferrer"
                className="live-btn"
              >
                Live Demo
              </a>

            </div>

          </div>

        ))}

      </div>

    </SectionCard>

</section>
  );
}

export default Projects;