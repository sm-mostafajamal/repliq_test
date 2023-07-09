import React, { useEffect } from "react";
import { styled } from "styled-components";
import Sidebar from "../../components/Admin/Sidebar";
import Heading from "../../components/Admin/Heading";
import Table from "../../components/Admin/Table";
import {
  appendProducts,
  setPageNumber,
} from "../../redux/Admin/paginationReducer";
import { useDispatch, useSelector } from "react-redux";

const Container = styled.div`
  width: 100%;
  display: flex;
  height: 600px;
`;
const Wrapper = styled.div`
  width: 100%;
`;

const TableContainer = styled.div``;

const ProductsList = () => {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.product);
  const { productsToShow, currentPageNumber } = useSelector(
    (state) => state.pagination
  );
  useEffect(() => {
    if (products) {
      dispatch(appendProducts(products));
      dispatch(setPageNumber(currentPageNumber));
    }
  }, [dispatch, currentPageNumber, products]);
  return (
    <Container>
      <Sidebar />
      <Wrapper>
        <Heading title={"Add New Product"} linkTo="" />
        <TableContainer>
          <Table toShow={productsToShow} />
        </TableContainer>
      </Wrapper>
    </Container>
  );
};

export default ProductsList;
