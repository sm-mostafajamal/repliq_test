import React, { useEffect } from "react";
import { styled } from "styled-components";
import Sidebar from "../../components/Admin/Sidebar";
import { Link } from "react-router-dom";
import Button from "../../components/Admin/Button";
import { useDispatch, useSelector } from "react-redux";
import Pagination from "../../components/Admin/Pagination";
import { setPageNumber } from "../../redux/Admin/paginationReducer";

const Container = styled.div`
  width: 100%;
  display: flex;
  height: 600px;
`;
const Wrapper = styled.div`
  width: 100%;
`;

const TableContainer = styled.table`
  width: 100%;
  height: 70vh;
`;
const TableHead = styled.thead``;
const Row = styled.tr`
  position: relative;
`;
const TableTitle = styled.th`
  width: 15%;
  padding: 10px;
  border-left: none;
  border-right: none;
  height: 50px;
`;
const TableBody = styled.tbody``;
const Body = styled.tr``;
const TableData = styled.td`
  overflow-wrap: break-word;
  padding: 5px;
  border: none;
  height: 100px;
  text-align: center;
`;
const Image = styled.img`
  width: 80px;
  height: 80px;
`;

const Actions = styled.td`
  width: 100%;
  height: 100px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;

const Tablefooter = styled.tfoot``;
const TableDataFooter = styled.td`
  width: 30%;
  position: absolute;
  margin: 50px;
`;

const OrderList = () => {
  const dispatch = useDispatch();
  const { orderedProductsToShow, currentPageNumber } = useSelector(
    (state) => state.pagination
  );

  useEffect(() => {
    dispatch(
      setPageNumber({
        page: "orderedProducts",
        pageNumber: currentPageNumber,
      })
    );
  }, [dispatch, currentPageNumber]);
  return (
    <Container>
      <Sidebar />

      <Wrapper>
        <TableContainer cellSpacing="0" frame="void" rules="rows">
          <TableHead>
            <Row>
              <TableTitle>Ordered By</TableTitle>
              <TableTitle>Image</TableTitle>
              <TableTitle>Product Name</TableTitle>
              <TableTitle>Product quantity</TableTitle>
              <TableTitle>Price</TableTitle>
              <TableTitle>Actions</TableTitle>
            </Row>
          </TableHead>

          <TableBody>
            {orderedProductsToShow.length ? (
              orderedProductsToShow.map((product) => (
                <Body key={product.id}>
                  <TableData>
                    {product.fullName ? product.fullName : product.number}
                  </TableData>
                  <TableData>
                    <Image src={product.img} />
                  </TableData>
                  <TableData>{product.title}</TableData>
                  <TableData>{product.quantity}</TableData>
                  <TableData>{product.price * product.quantity}</TableData>

                  <Actions>
                    <Link to={`/admin/order-list/${product.id}`}>
                      <Button name="View" />
                    </Link>
                  </Actions>
                </Body>
              ))
            ) : (
              <Row>
                <TableData>No products are available</TableData>
              </Row>
            )}
          </TableBody>
          <Tablefooter>
            <Row>
              <TableDataFooter>
                <Pagination />
              </TableDataFooter>
            </Row>
          </Tablefooter>
        </TableContainer>
      </Wrapper>
    </Container>
  );
};

export default OrderList;
