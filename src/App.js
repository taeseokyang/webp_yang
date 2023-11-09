import { BrowserRouter, Route, Routes, Link } from "react-router-dom";

import index from "./Component/index";
import Introduction from "./Component/Introduction";
import Project from "./Component/Project";
import Contest from "./Component/Contest";
import Career from "./Component/Career";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <header>
      함께하고 싶은 개발자 양태석의 PORTFOLIO
      </header>

      <div className="container">
        <nav>
          <Link to={"/introduction"}>나의 소개</Link>
          <Link to={"/project"}>프로 젝트</Link>
          <Link to={"/contest"}>공 모 전 </Link>
          <Link to={"/career"}>나의 경력</Link>
        </nav>
        <main>
          <Routes>
            <Route path="/" Component={index} />
            <Route path="/introduction" Component={Introduction} />
            <Route path="/project" Component={Project} />
            <Route path="/contest" Component={Contest} />
            <Route path="/career" Component={Career} />
          </Routes>
        </main>
      </div>
      <footer>
        <i>
          Copyright 2023. YANG all rights reserved.
          <br />
          연락처 : 010-5239-5132
        </i>
      </footer>
    </BrowserRouter>
  );
}

export default App;
