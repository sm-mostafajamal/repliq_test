import React from "react";
import { styled } from "styled-components";
import Sidebar from "../../components/Admin/Sidebar";
import Heading from "../../components/Admin/Heading";
import { Table } from "@mui/material";
const Container = styled.div`
  width: 100%;
  display: flex;
  height: 600px;
`;
const Wrapper = styled.div`
  width: 100%;
`;

const TableContainer = styled.div``;
const CustomersList = () => {
  return (
    <Container>
      <Sidebar />
      <Wrapper>
        <Heading title={"Add New Customer"} linkTo="" />
        <TableContainer>
          <Table toShow={""} />
        </TableContainer>
      </Wrapper>
    </Container>
  );
};

export default CustomersList;
