import { BrowserRouter} from "react-router-dom";
import styled from 'styled-components';
import Nav from "./Component/Nav";
import Footer from "./Component/Footer";
import Content from "./Component/Content";
import "./App.css";

function App() {
  const main = {
    width : "900px",
    height : "1300px",
    margin : "30px auto",
    padding :"0px",
    borderRadius: "40px",
    // padding : "20px",
    boxShadow: "rgba(149, 157, 165, 0.2) 0px 0px 24px",
    // backgroundColor: "white",
    // background: "linear-gradient(0deg, rgba(125, 189, 103, 0.47) 8.56%, rgba(125, 189, 103, 0.00) 100%)"
  }
  
  

  return ( 
    <BrowserRouter>
      <div style={main} class="main">
        <Nav></Nav>
        <Content></Content>
        <Footer></Footer>
      </div>

    </BrowserRouter>
  );
}

export default App;
