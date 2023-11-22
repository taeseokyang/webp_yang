// import { useState } from "react";
// import careers from "../Data/careers";
// import "../CSS/Career.css";
import styled from "styled-components";

const Bar = styled.div`
  float: left;
  display: inline;
  position: sticky;   
  top: 100px;
  border:none;
  text-align: center;
  margin-left:-85px;
  width: 70px;
  height: 250px;
  border-radius: 100px;
  background-color: rgba(175, 218, 160, 0.4);
  font-size : 20px;
  font-weight:bold;
  color:#aaaaaa;
  & img{
    display : block;
    width: 50px;
    margin: 20px 10px;
  }
  & a{
    color:#ffffff;
    font-size : 60px;
    text-decoration:none;
  }
`;
const Move = () => {
  return (
    <span>
        <Bar>
            <a href="https://github.com/taeseokyang/webp_yang"><img src="/images/github_icon.png" alt="깃허브 아이콘" /></a>
            <a href="https://velog.io/@yang0123">B</a><br/>
            <a href="mailto:ts.yang.0123@gmail.com">@</a>
        </Bar>
    </span>
  );
}

export default Move;
