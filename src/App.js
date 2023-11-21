import { BrowserRouter} from "react-router-dom";
import styled from 'styled-components';
import Nav from "./Component/Nav";
import Footer from "./Component/Footer";
import Content from "./Component/Content";
import Move from "./Component/Move";

const Main = styled.div`
  width: 900px;z
  height: 1300px;
  margin: 30px auto;
  padding: 0;
  border-radius: 40px;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 0px 24px;
`;

function App() {
  return ( 
    <BrowserRouter>
      
      <Main>
        {/* <Move></Move> */}
        <Nav></Nav>
        <Content></Content>
        <Footer></Footer>
      </Main>

    </BrowserRouter>
  );
}

export default App;
