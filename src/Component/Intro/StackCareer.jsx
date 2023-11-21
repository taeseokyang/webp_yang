import styled from "styled-components";
const StackCareerText = styled.div`
  margin : 0px 10px;
  & ul{
    // padding:0px;
    margin: 0px;
  }
  & li{
    color : #aaaaaa;
    font-size: 30px;
    font-weight: bold;
    line-height: 50px;
  }
  & a{
    color : #aaaaaa;
  }
  & h2{
    margin-left:-30px;
    font-size: 40px;
    color : #777777;
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
const StackCareer = () => {
  return (
    <StackCareerText>
      <h1>Career&Stack</h1>
      <ul>
        <h2>Career</h2>
        <li>영자신문사 가천헤럴드 42대 국장</li>
        <li>신문사 웹 개발</li>
        <li>교내 물품 대여 웹 서비스 개발, 운영</li>
        <li>우테코 수료</li>
        <li>Leets 2기</li>
      </ul>
      <ul>
        <h2>Stack</h2>
        <li>Django</li>
        <li>Spring Boot</li>
        <li>MySQL</li>
        <li>AWS</li>
      </ul>
    </StackCareerText>
  );
};

export default StackCareer;