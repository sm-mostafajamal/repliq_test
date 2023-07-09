import React from "react";
import { styled } from "styled-components";
import Sidebar from "../../components/Admin/Sidebar";
import { Link } from "react-router-dom";
import Heading from "../../components/Admin/Heading";
import Table from "../../components/Admin/Table";

const Container = styled.div`
  width: 100%;
  display: flex;
  height: 600px;
`;
const Wrapper = styled.div`
  width: 100%;
`;

const Button = styled.button`
  width: 200px;
  background-color: transparent;
  color: #e85a4f;
  font-weight: 500;
  padding: 5px;
  border: 1px solid #e85a4f;
  font-size: 18px;
  border-radius: 5px;
  cursor: pointer;
`;
const TableContainer = styled.div``;

const ProductsList = () => {
  return (
    <Container>
      <Sidebar />
      <Wrapper>
        <Heading title={"Add New Product"} linkTo="" />
        <TableContainer>
          <Table />
        </TableContainer>
      </Wrapper>
    </Container>
  );
};

export default ProductsList;
