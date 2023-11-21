// import { useState } from "react";
// import careers from "../Data/careers";
// import "../CSS/Career.css";
import styled from "styled-components";
import { useNavigate, useLocation, useParams } from 'react-router-dom';
import { useState, useEffect } from "react";

const MoveButton = styled.button.attrs(props => ({
    onClick: props.onClick, // 동적으로 href 속성을 지정
  }))`
  float:  ${({ position }) => (position === "left" ? 'left' : 'right')};
  display: inline;
  position: sticky;   
  top: 350px;
  right: 0px;
  border:none;
  text-align: center;
  ${({ position }) => (position === "left" ? 'margin-left' : 'margin-right')} : -150px;
  width: 100px;
  height: 100px;
  border-radius: 100px;
  background-color: #eeeeee;
  font-size : 20px;
  font-weight:bold;
  color:#aaaaaa;
`;
const Move = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const { id } = useParams();
  const [index, setIndex] = useState(0);
  useEffect(() => {
    setIndex(prevIndex => {
        return id - 1;
      });
  }, [id]);

  const move = () => {
    if (location.pathname.startsWith('/introduction')) {
        console.log('index:', index);
        if(parseInt(index)<3){
            console.log('URL의 id가 변경되었습니다:', index);
            navigate("/introduction/"+(2));
        }else{
            navigate("/project/1");
        }
    } else if (location.pathname.startsWith('/project')) {
        if(index<4){
            navigate("/project/"+(index+1));
        }else{
            navigate("/hobby/1");
        }
    } else if (location.pathname.startsWith('/hobby')) {
        if(index<2){
            navigate("/hobby/"+(index+1));
        }else{
            navigate("/ability/1");
        }
    } else if (location.pathname.startsWith('/ability')) {
        if(index<3){
            navigate("/ability/"+(index+1));
        }else{
            navigate("/introduction/1");
        }
    }
    
  };   

  return (
    <span>
        <MoveButton position ="left" onClick={move}>왼쪽</MoveButton>
        <MoveButton position = "right" onClick={move}>오른쪽</MoveButton>
    </span>
  );
}

export default Move;
