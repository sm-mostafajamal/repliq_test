import React from "react";
import { Link } from "react-router-dom";
import { styled } from "styled-components";
const Container = styled.div`
  width: 95%;
  margin-left: 15px;
  margin-top: 20px;
  font-size: 24px;
  color: gray;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Button = styled.button`
  width: 200px;
  background-color: transparent;
  color: teal;
  font-weight: 500;
  padding: 5px;
  border: 1px solid teal;
  font-size: 18px;
  border-radius: 5px;
  cursor: pointer;
`;
const Heading = ({ title, linkTo, name }) => {
  return (
    <Container className="addJob">
      {title}
      <Link to={linkTo} style={{ textDecoration: "none" }}>
        <Button>Add {name}</Button>
      </Link>
    </Container>
  );
};

export default Heading;
