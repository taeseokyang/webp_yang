import styled from "styled-components";
const MainText = styled.div`
  text-align: left;
  margin : 60px 10px;
  width: 840px;
  height: 30px;
  font-size : 100px;
  font-weight: bold;
  line-height:130px;
  color : #dddddd;
  & span{
    display: inline-block;
    color: rgba(175, 218, 160, 1);
  }
`;
const Main = () => {
  return (
    <MainText>
      <span>같이 도전</span>하고<br/>
      <span>모여 고민</span>하며<br/>
      <span>함께 성장</span>하는<br/>
      <span>양태석</span>입니다
    </MainText>
  );
};
export default Main;
