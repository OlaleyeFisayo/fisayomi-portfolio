import { data } from "../data";
import Project from "./Project";
import "./ProjectSection.scss";

export default function ProjectSection() {
  return (
    <section id="projects">
      <div className="project-content">
        <h1>Projects</h1>
        <p>Each project demonstrates my attention to detail and proficiency.</p>
        <div className="project-grid">
          {data.map(({id, imgUrl, header, description, stacks, links}) => {
            return (
              <Project
                key={id}
                imgUrl={imgUrl}
                header={header}
                description={description}
                stacks={stacks}
                links={links}
              />
            );
          })}
          <a 
            href="https://codepen.io/OlaleyeFisayo" 
            className="btn"
            target="_blank"
          >See More</a>
        </div>
      </div>
    </section>
  );
}
