import { useState } from "react";
import projects from "./Data/projects";
import "./CSS/Project.css";

function Project() {
  const [index, setIndex] = useState(0);
  const contentChange = (event) => {
    setIndex(event.target.value);
  };
  return (
    <div id="project">
      <div class="btn">
      {projects.map((project, index) => (
        <button onClick={contentChange} value={index}>
          {project.tab}
        </button>
      ))}
      </div>
      {projects[index].content}
    </div>
  );
}

export default Project;
