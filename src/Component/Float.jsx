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
  margin-left:-100px;
  width: 70px;
  height: 250px;
  border-radius: 100px;
  background-color: rgba(175, 218, 160, 0.2);
  font-size : 20px;
  font-weight:bold;
  color:#aaaaaa;
`;
const Move = () => {
  return (
    <span>
        <Bar></Bar>
    </span>
  );
}

export default Move;
