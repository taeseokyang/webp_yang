import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";

const NavLay = styled.div`
  width: 900px;
  margin: 0px auto;
  height: 100px;
`;

const NavBox = styled.div`
  display: inline-block;
  margin: 40px 40px;
  text-align: center;
  width: 820px;
  height: 60px;
  border-radius: 40px;
  background-color: rgba(175, 218, 160, 0.77);
  box-shadow: 0px 0px 10px 0px rgba(132, 177, 116, 0.51) inset;
`;
const NavButton = styled.div`
  display: inline-block;
  margin: 10px;
  border-radius: 40px;
  background-color: ${({ isOn }) => (isOn ? '#FFFFFF' : 'none')};
  box-shadow: ${({ isOn }) => (isOn ? '0px 0px 15px 0px #7FB06E' : 'none')};
  & a{
    display: inline-block;
    color:  ${({ isOn }) => (isOn ? '#69925A' : '#FFFFFF')};
    text-decoration: none;
    font-size: 20px;
    font-weight: bold;
    line-height: 40px;
    width: 183px;
    height: 40px;
  }
  & a:hover{
    border-radius: 40px;
    box-shadow: ${({ isOn }) => (isOn ? 'none' : '0px 0px 15px 0px #7FB06E')};
    background-color: ${({ isOn }) => (isOn ? 'none' : 'rgba(175, 218, 160, 0.8)')};
  }
`;

const Nav = () => {
    const location = useLocation();
    return (
        <NavLay>
          <NavBox>
            <NavButton isOn={location.pathname.startsWith('/introduction') ||  location.pathname === '/'}>
              <Link to={"/introduction"}>Introduction</Link>
            </NavButton>
            <NavButton isOn={location.pathname.startsWith('/project') }>
              <Link to={"/project"}>Project</Link>
            </NavButton>
            <NavButton isOn={location.pathname.startsWith('/hobby')}>
              <Link to={"/hobby"}>Hobby</Link>
            </NavButton>
            <NavButton isOn={location.pathname.startsWith('/ability')}>
              <Link to={"/ability"}>Ability</Link>
            </NavButton>
          </NavBox>
        </NavLay>
  );
};
export default Nav;