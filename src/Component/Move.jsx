import styled from "styled-components";
import { useNavigate, useLocation, useParams } from 'react-router-dom';
import { useState, useEffect } from "react";

const MoveButton = styled.button.attrs(props => ({
    onClick: props.onClick,
  }))`
   
  float:  ${({ position }) => (position === "left" ? 'left' : 'right')};
  display: inline;
  margin-top: 500px;
  padding:0px;
  border:none;
  ${({ position }) => (position === "left" ? 'margin-left' : 'margin-right')} : -110px;
  width: 110px;
  font-weight:bold;
  background:none;
  position: relative;
  & div{
    position: absolute;
    top: 45px;
    left: -10px;
  }
  & svg{
    padding:0;
    ${({ position }) => (position === "left" ? 'margin-left' : 'margin-right')} : 3px;
  }
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

  const movetoleft = () => {
    if (location.pathname.startsWith('/introduction')) {
        if(parseInt(index)<3){
            navigate("/introduction");
        }else{
            navigate("/ability");
        }
    } else if (location.pathname.startsWith('/project')) {
        if(index<4){
            navigate("/project");
        }else{
            navigate("/introduction");
        }
    } else if (location.pathname.startsWith('/hobby')) {
        if(index<2){
            navigate("/hobby");
        }else{
            navigate("/project");
        }
    } else if (location.pathname.startsWith('/ability')) {
        if(index<3){
            navigate("/ability");
        }else{
            navigate("/hobby");
        }
    }
  };   
  const movetoright = () => {
    if (location.pathname.startsWith('/introduction')) {
        if(parseInt(index)<3){
            navigate("/introduction");
        }else{
            navigate("/project");
        }
    } else if (location.pathname.startsWith('/project')) {
        if(index<4){
            navigate("/project");
        }else{
            navigate("/hobby");
        }
    } else if (location.pathname.startsWith('/hobby')) {
        if(index<2){
            navigate("/hobby");
        }else{
            navigate("/ability");
        }
    } else if (location.pathname.startsWith('/ability')) {
        if(index<3){
            navigate("/ability");
        }else{
            navigate("/introduction");
        }
    }
  };   

  return (
    <span>
        <MoveButton position ="left" onClick={movetoleft}>
            <div>
                <svg xmlns="http://www.w3.org/2000/svg" width="125" height="125" viewBox="0 0 125 125" fill="none">
                    <path d="M78.125 93.75L46.875 62.5L78.125 31.25" stroke="#B1D2A6" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" width="107" height="214" viewBox="0 0 107 214" fill="none">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M107 1.66324e-10V214C107 214 107 214 107 214C47.9055 214 0 166.094 0 107C0 47.9055 47.9055 0 107 0C107 0 107 1.66324e-10 107 1.66324e-10Z" fill="#AFDAA0" fill-opacity="0.4"/>
            </svg>
        </MoveButton>
        <MoveButton position = "right" onClick={movetoright}>
            <div>
                <svg xmlns="http://www.w3.org/2000/svg" width="125" height="125" viewBox="0 0 125 125" fill="none">
                    <path d="M46.875 31.25L78.125 62.5L46.875 93.75" stroke="#B1D2A6" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" width="107" height="214" viewBox="0 0 107 214" fill="none">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M-0.000190735 214L-0.000190735 0C-0.0001297 0 -6.10352e-05 0 0 0C59.0945 0 107 47.9055 107 107C107 166.094 59.0945 214 0 214C-6.10352e-05 214 -0.0001297 214 -0.000190735 214Z" fill="#AFDAA0" fill-opacity="0.4"/>
            </svg>
        </MoveButton>
    </span>
  );
}

export default Move;
