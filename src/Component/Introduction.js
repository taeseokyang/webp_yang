import { useState } from "react";
import intros from "./Data/intros";

function Introduction() {
  const [index, setIndex] = useState(0);
  const contentChange = (event) => {
    setIndex(event.target.value);
  };
  return (
    <div>
      <div class="btn">
      {intros.map((intro, index) => (
        <button onClick={contentChange} value={index}>
          {intro.tab}
        </button>
      ))}
      </div>
      {intros[index].content}
    </div>
  );
}

export default Introduction;
