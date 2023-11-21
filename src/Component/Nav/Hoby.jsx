import { useState } from "react";
import hobbies from "../Data/hobbies";
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
  background-color: ${({ isOn }) => (isOn ? 'rgba(175, 218, 160, 0.77)' : '#FFFFFF')};
  box-shadow: ${({ isOn }) => (isOn ? 'none' : '0px 0px 10px 0px rgba(100, 100, 100, 0.31) inset')};
`;

function Hobby() {
  const [index, setIndex] = useState(0);
  const contentChange = (event) => {
    setIndex(event.target.value);
  };
  return (
    <div>
      <ButtonBox>
      {hobbies.map((hobby, idx) => (
        <PagePoint isOn={index == idx} onClick={contentChange} value={idx}>
        </PagePoint>
      ))}
      </ButtonBox>
      {/* {careers[index].content} */}
    </div>
  );
}

export default Hobby;
