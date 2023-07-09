import React from "react";
import { styled } from "styled-components";

const Container = styled.div``;
const Btn = styled.button`
  width: 80px;
  height: 30px;
  color: white;
  border: none;
  font-weight: 500;
  border-radius: 5px;
  cursor: pointer;
  margin: 5px;
`;

const Button = ({ name, onClick }) => {
  return (
    <Container>
      <Btn
        onClick={onClick}
        className="button"
        style={
          name === "Delete"
            ? { backgroundColor: "red" }
            : name === "View"
            ? { backgroundColor: "teal" }
            : { backgroundColor: "#f1b502" }
        }
      >
        {name}
      </Btn>
    </Container>
  );
};

export default Button;
