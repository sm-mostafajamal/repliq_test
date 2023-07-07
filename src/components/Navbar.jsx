import { ShoppingCartOutlined } from "@mui/icons-material";
import { Badge } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { styled } from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 60px;
  background-color: black;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
`;

const Logo = styled.h1`
  flex: 1;
  font-weight: bold;
  padding-left: 20px;
`;
const Wrapper = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: end;

  /* justify-content: flex-end; */
`;
const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-right: 25px;
`;
const Links = styled(Link)`
  text-decoration: none;
  color: white;
`;
const Navbar = () => {
  return (
    <Container>
      <Logo>E-COMMERCE</Logo>
      <Wrapper>
        <MenuItem>
          <Badge badgeContent={4} color="primary">
            <ShoppingCartOutlined />
          </Badge>
        </MenuItem>
        <Links to="/login" style={{ textDecoration: "none" }}>
          <MenuItem>LOG OUT</MenuItem>
        </Links>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
