import { ShoppingCartOutlined } from "@mui/icons-material";
import { Badge } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
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

const Logo = styled(Link)`
  flex: 1;
  font-weight: bold;
  padding-left: 20px;
  text-decoration: none;
  color: white;
  font-size: 25px;
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
  const { carts } = useSelector((state) => state.product);
  return (
    <Container>
      <Logo to="/">E-COMMERCE</Logo>
      <Wrapper>
        <MenuItem>
          <Links to={"/cart"}>
            <Badge badgeContent={carts.length} color="primary">
              <ShoppingCartOutlined />
            </Badge>
          </Links>
        </MenuItem>
        <Links to="/login" style={{ textDecoration: "none" }}>
          <MenuItem>LOG OUT</MenuItem>
        </Links>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
