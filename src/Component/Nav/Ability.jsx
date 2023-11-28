import { useState } from "react";
import abilities from "../Data/abilities";
import styled from "styled-components";
const ContentBox = styled.div`
  margin-top:60px;
  width : 860px;
  & h1{
    height: 30px;
    font-size : 70px;
    font-weight: bold;
    color : rgba(175, 218, 160, 1);
    margin-bottom:90px;
  }

`;
const Img = styled.img.attrs(props => ({
  src: props.src,
  alt: props.alt
}))`
  height: 380px;
  display: block;
  margin: 0px auto;
  margin-bottom:30px;

`;
const DescBox = styled.div`
  font-size:25px;
  color:#888888;
  font-weight: bold;
  line-height:40px;
`;
const ButtonBox = styled.div`
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
  box-shadow: ${({ isOn }) => (isOn ? 'none' : '0px 0px 10px 0px rgba(100, 100, 100, 0.2) inset')};
`;

function Ability() {
  const [index, setIndex] = useState(0);
  const contentChange = (event) => {
    setIndex(event.target.value);
  };
  return (
    <div>
      <ButtonBox>
      {abilities.map((ability, idx) => (
        <PagePoint isOn={index == idx} onClick={contentChange} value={idx}>
        </PagePoint>
      ))}
      </ButtonBox>
      <ContentBox>
        <h1>{abilities[index].title}</h1>
        <DescBox>
          <ul>
            {abilities[index].contents.map((thing, idx) => (
              <li>{thing}</li>
            ))}
          </ul>
        </DescBox>  
      </ContentBox>
    </div>
  );
}
export default Ability;
