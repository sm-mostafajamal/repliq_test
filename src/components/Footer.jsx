import {
  Email,
  FacebookOutlined,
  GitHub,
  Instagram,
  LinkedIn,
  Phone,
  Place,
} from "@mui/icons-material";
import styled from "styled-components";
import React from "react";

const Container = styled.div`
  width: 100%;
  background-color: black;
  display: flex;
  color: white;
`;
const Left = styled.div`
  flex: 1;
  padding: 20px;
`;
const Logo = styled.h1`
  margin-bottom: 20px;
`;

const SocialContainer = styled.div`
  display: flex;
`;
const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: ${({ color }) => color};
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 20px;
`;

const Title = styled.h3`
  margin-bottom: 20px;
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
`;
const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;
const Payment = styled.img``;

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>Ecommerce</Logo>
        <SocialContainer>
          <SocialIcon color="#3B5999">
            <GitHub />
          </SocialIcon>
          <SocialIcon color="#E4405F">
            <LinkedIn />
          </SocialIcon>
          <SocialIcon color="#55ACEE">
            <FacebookOutlined />
          </SocialIcon>
          <SocialIcon color="#E60023">
            <Instagram />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <Place style={{ marginRight: "10px" }} />
          Halishahar, Chittagong
        </ContactItem>
        <ContactItem>
          <Phone style={{ marginRight: "10px" }} />
          +880 1855 536222
        </ContactItem>
        <ContactItem>
          <Email style={{ marginRight: "10px" }} />
          sm.mostafajamal@pm.me
        </ContactItem>
        <Payment src="" />
      </Right>
    </Container>
  );
};

export default Footer;
