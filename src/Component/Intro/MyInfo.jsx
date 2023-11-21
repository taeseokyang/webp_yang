import styled from "styled-components";
const InfoText = styled.div`
  margin : 0px 10px;
  & ul{
    padding: 0px;
    margin: 0px;
  }
  & li{
    list-style-type: none; 
    color : #aaaaaa;
    font-size: 35px;
    font-weight: bold;
    line-height: 60px;
  }
  & a{
    color : #aaaaaa;
  }
  & h1{
    width: 840px;
    height: 30px;
    font-size : 80px;
    font-weight: bold;
    color : rgba(175, 218, 160, 1);
    margin-bottom:100px;
  }
  & span{
    display:inline-block;
    width:150px;
    color: rgba(175, 218, 160, 1);
    margin-right:10px;
  }
`;
const MyInfo = () => {
  return (
    <InfoText>
		<h1>My Info</h1>
    <ul>
      <li><span>Name</span> 양태석</li>
      <li><span>Birth</span> 2003.01.23</li>
      <li><span>Number</span> 010-5239-5132</li>
      <li><span>Github</span> <a href="https://github.com/taeseokyang">github.com/taeseokyang</a></li>
      <li><span>Blog</span> <a href="https://velog.io/@yang0123">velog.io/@yang0123</a></li>
      <li><span>E-mail</span> ts.yang.0123@gmail.com</li>
      <li><span>Location</span> 서울시 동대문구</li>
      <li><span>Uni.</span> 가천대학교</li>
      <li><span>Major</span> 컴퓨터 공학과</li>
    </ul>
  	</InfoText>
  );
};

export default MyInfo;