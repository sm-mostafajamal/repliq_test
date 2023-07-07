import React from "react";
import { styled } from "styled-components";

const Container = styled.div`
  text-align: center;
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
