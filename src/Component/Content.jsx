import { Route, Routes } from "react-router-dom";
import Introduction from "./Nav/Introduction";
import Project from "./Nav/Project";
import Ability from "./Nav/Ability";
import Hobby from "./Nav/Hoby";
import styled from "styled-components";
import index from "./index";
// import index from ".";

const ContentLay = styled.div`
  width : 900px;
  height: 800px;
  padding: 20px;

`;

const Content = () => {
    return (
        <ContentLay>
          <Routes>
            <Route path="/" Component={index} />
            <Route path="/introduction" Component={Introduction} />
            <Route path="/project" Component={Project} />
            <Route path="/Hobby" Component={Hobby} />
            <Route path="/ability" Component={Ability} />
          </Routes>
        </ContentLay>
    );
  };

export default Content;