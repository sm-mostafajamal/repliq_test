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

  const style =
    pageNumbers.length === 0 ? { display: "none" } : { display: "" };

  const handleClick = (operation) => {
    if (operation === "prev" && currentPageNumber) {
      dispatch(setPageNumber({ pageNumber: currentPageNumber - 1 }));
    } else if (pageNumbers.length > currentPageNumber) {
      dispatch(setPageNumber({ pageNumber: currentPageNumber + 1 }));
    }
  };
  return (
    <Container className="pagination" style={style}>
      <Button onClick={() => handleClick("prev")}>Prev</Button>
      {pageNumbers.map((pageNumber) => (
        <Button
          key={pageNumber}
          onClick={(e) =>
            dispatch(setPageNumber({ pageNumber: Number(e.target.innerText) }))
          }
          className={pageNumber === currentPageNumber ? "active" : undefined}
        >
          {pageNumber}
        </Button>
      ))}
      <Button onClick={() => handleClick("next")}>Next</Button>
    </Container>
  );
};

export default Pagination;
