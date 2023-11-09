import { useState } from "react";
import careers from "./Data/careers";
import "./CSS/Career.css";

function Carears() {
  const [index, setIndex] = useState(0);
  const contentChange = (event) => {
    setIndex(event.target.value);
  };
  return (
    <div id="career">
      <div class = "btn">
      {careers.map((career, index) => (
        <button onClick={contentChange} value={index}>
          {career.tab}
        </button>
      ))}
      </div>
      {careers[index].content}
    </div>
  );
}

export default Carears;
