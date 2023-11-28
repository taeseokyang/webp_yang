import { Route, Routes } from "react-router-dom";
import Introduction from "./Nav/Introduction";
import Project from "./Nav/Project";
import Ability from "./Nav/Ability";
import Hobby from "./Nav/Hoby";
import styled from "styled-components";

const ContentLay = styled.div`
  width : 860px;
  height: 1100px;
  padding: 20px;
  margin: 0px auto;
`;

const Content = () => {
    return (
        <ContentLay>
          <Routes>
            <Route path="/" Component={Introduction} />
            <Route path="/introduction" Component={Introduction} />
            <Route path="/project" Component={Project} />
            <Route path="/hobby" Component={Hobby} />
            <Route path="/ability" Component={Ability} />
          </Routes>
        </ContentLay>
    );
  };

export default Content;