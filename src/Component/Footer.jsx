import styled from 'styled-components';

const FooterLay = styled.div`
  width: 900px;
  height: 100px;
  /* color: white; */ /* 주석 처리: styled-components에서는 color를 별도로 설정할 수 있음 */
  border-radius: 0px 00px 40px 40px;
  // background: linear-gradient(0deg, rgba(125, 189, 103, 0.47) 8.56%, rgba(125, 189, 103, 0.00) 100%);
`;

const Text = styled.div`
  width: 900px;
  margin-top: 100px;
  display: inline-block;
  text-align: center;
  color: #aaaaaa;
  font-size: 18px;
  font-weight: bold;
`;
const Footer = () => {
    return (
        <FooterLay>
            <Text>
                Copyright 2023. YangTaeSeok all rights reserved.
                <br/>
                Contact 010-5239-5132
            </Text>
        </FooterLay>
    );
  };

export default Footer;