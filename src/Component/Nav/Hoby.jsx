import { useState } from "react";
import hobbies from "../Data/hobbies";
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
  padding:20px;
  width : 820px;
  height : 400px;
  border-radius: 40px;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 0px 24px;
  & h2{
    margin: 25px;
    font-size:40px;
    color:#555555;
  }
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
      <ContentBox>
        <h1>{hobbies[index].title}</h1>
        <Img src={`/images/hobby${parseInt(index)+1}.png`} alt="취미 사진"></Img>
        <DescBox>
          <h2>What I am doing</h2>
          <ul>
            {hobbies[index].what.map((thing, idx) => (
              <li>{thing}</li>
            ))}
          </ul>
          <h2>Why I am doing it</h2>
          {hobbies[index].why}
          
        </DescBox>  
      </ContentBox>
    </div>
  );
}
export default Hobby;
