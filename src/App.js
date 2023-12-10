import { BrowserRouter } from "react-router-dom";
import styled from 'styled-components';
import Nav from "./Component/Nav";
import Footer from "./Component/Footer";
import Content from "./Component/Content";
import Move from "./Component/Move";
import Float from "./Component/Float";

const Main = styled.div`
  background-color: #ffffff;
  width: 1000px;
  height: 1400px;
  margin: 30px auto;
  padding: 0;
  border-radius: 40px;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 0px 24px;
`;
function App() {
  return ( 
    <BrowserRouter>
      <Main>
        <Move></Move>
        <Float></Float>
        <Nav></Nav>
        <Content> </Content>
        <Footer></Footer>
      </Main>
    </BrowserRouter>
  );
}
export default App;

