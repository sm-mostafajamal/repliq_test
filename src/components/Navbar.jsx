import { ShoppingCartOutlined } from "@mui/icons-material";
import { Badge } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { styled } from "styled-components";
import { setUser } from "../redux/userReducer";

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
const Button = styled.button`
  padding: 10px;
  border: 0.5px solid white;
  font-weight: 500;
  color: white;
  background-color: black;
  cursor: pointer;
  margin-right: 20px;
`;
const Navbar = () => {
  const dispatch = useDispatch();
  const { carts } = useSelector((state) => state.product);

  const handleClick = () => {
    dispatch(setUser(null));
    window.localStorage.clear();
  };

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
        <Links to={"/admin"}>
          <Button>Admin Dashboard</Button>
        </Links>
        <Button onClick={handleClick}>LOG OUT</Button>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
