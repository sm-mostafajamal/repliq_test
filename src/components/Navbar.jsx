import React from "react";
import { styled } from "styled-components";

const Container = styled.div`
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Logo = styled.h1`
  font-weight: bold;
`;
const Navbar = () => {
  return (
    <Container>
      <Logo>E-COMMERCE</Logo>
    </Container>
  );
};

export default Navbar;
