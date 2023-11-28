import styled from 'styled-components';

const FooterLay = styled.div`
  width: 1000px;
  height: 160px;
  border-radius: 0px 00px 40px 40px;
`;
const Text = styled.div`
  width: 1000px;
  margin-top: 110px;
  display: inline-block;
  text-align: center;
  color: #bbbbbb;
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