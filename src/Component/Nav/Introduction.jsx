import { useState } from "react";
import intros from "../Data/Intros";
import styled from "styled-components";
const ButtonBox = styled.div`
  text-align: center;
  width : 860px;
  height: 30px;
`;

const PagePoint = styled.button.attrs(props => ({
  onClick: props.onClick, 
  value: props.value, 
}))`
  display: inline-block;
  text-align: center;
  margin : 0px 10px;
  width: 40px;
  height: 40px;
  border: none;
  border-radius: 30px;
  background-color: ${({ isOn }) => (isOn ? 'rgba(175, 218, 160, 0.77)' : '#FFFFFF')};
  box-shadow: ${({ isOn }) => (isOn ? 'none' : '0px 0px 10px 0px rgba(100, 100, 100, 0.2) inset')};
`;

function Introduction() {
  const [index, setIndex] = useState(0);
  const contentChange = (event) => {
    setIndex(event.target.value);
  };
  return (
    <div>
      <ButtonBox>
      {intros.map((intro, idx) => (
        <PagePoint isOn={index == idx} onClick={contentChange} value={idx}></PagePoint>
      ))}
      </ButtonBox>
      {intros[index].content}
    </div>
  );
}
export default Introduction;
