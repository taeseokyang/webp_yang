import { useState } from "react";
import careers from "../Data/careers";
// import "../CSS/Career.css";
import styled from "styled-components";

const ButtonBox = styled.div`
  // display: inline-block;
  text-align: center;
  width : 860px;
  height: 30px;

`;

const PagePoint = styled.button.attrs(props => ({
  onClick: props.onClick, // 동적으로 href 속성을 지정
  value: props.value, // 동적으로 color 속성을 지정
}))`
  display: inline-block;
  text-align: center;
  margin : 0px 10px;
  width: 30px;
  height: 30px;
  border: none;
  border-radius: 40px;
  background-color: rgba(175, 218, 160, 0.77);
  box-shadow: 0px 0px 10px 0px rgba(132, 177, 116, 0.51) inset;
`;

function Carears() {
  const [index, setIndex] = useState(0);
  const contentChange = (event) => {
    setIndex(event.target.value);
  };
  return (
    <div id="career">
      <ButtonBox>
      {careers.map((career, index) => (
        <PagePoint onClick={contentChange} value={index}>
        </PagePoint>
      ))}
      </ButtonBox>
      {/* {careers[index].content} */}
    </div>
  );
}

export default Carears;
