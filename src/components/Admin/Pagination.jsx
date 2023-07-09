import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { styled } from "styled-components";
import { setPageNumber } from "../../redux/Admin/paginationReducer";

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;
const Button = styled.button`
  background-color: teal;
  border: none;
  color: white;
  font-size: 16px;
  padding: 5px;
  margin-top: 20px;
  cursor: pointer;
  border-radius: 5px;
  font-weight: 700;
  &:hover {
    background-color: #017373;
  }
  &.active {
    background-color: transparent;
    color: teal;
    border: 1px solid teal;
  }
`;

const Pagination = () => {
  const dispatch = useDispatch();
  const { currentPageNumber, pageNumbers } = useSelector(
    (state) => state.pagination
  );

  return (
    <Container className="pagination">
      <Button onClick={() => dispatch(setPageNumber(currentPageNumber - 1))}>
        Prev
      </Button>
      {pageNumbers.map((pageNumber) => (
        <Button
          key={pageNumber}
          onClick={(e) => dispatch(setPageNumber(Number(e.target.innerText)))}
          className={pageNumber === currentPageNumber ? "active" : undefined}
        >
          {pageNumber}
        </Button>
      ))}
      <Button onClick={() => dispatch(setPageNumber(currentPageNumber + 1))}>
        Next
      </Button>
    </Container>
  );
};

export default Pagination;
