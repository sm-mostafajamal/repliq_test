import React from "react";
import { Link } from "react-router-dom";
import { styled } from "styled-components";
import Button from "./Button";
import Pagination from "./Pagination";
import { deleteProduct } from "../../services/admin/adminServices";
import { useDispatch, useSelector } from "react-redux";
import { removeProduct } from "../../redux/productReducer";

const Container = styled.div``;
const TableContainer = styled.table`
  width: 100%;
  height: 70vh;
`;
const TableHead = styled.thead``;
const Row = styled.tr``;
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
const TableDataFooter = styled.td``;

const Table = ({ toShow }) => {
  const { products } = useSelector((state) => state.product);
  const dispatch = useDispatch();
  const handleDelete = async (product) => {
    const updatedProducts = products.filter((p) => p.id !== product.id);
    deleteProduct(product.id);
    dispatch(removeProduct(updatedProducts));
  };
  return (
    <Container>
      <TableContainer cellSpacing="0" frame="void" rules="rows">
        <TableHead>
          <Row>
            <TableTitle>Image</TableTitle>
            <TableTitle>Product Name</TableTitle>
            <TableTitle>Price</TableTitle>
            <TableTitle>Actions</TableTitle>
          </Row>
        </TableHead>

        <TableBody>
          {toShow.length ? (
            toShow.map((product) => (
              <Body key={product.id}>
                <TableData>
                  <Image src={product.img} />
                </TableData>
                <TableData>{product.title}</TableData>
                <TableData>{product.price}</TableData>

                <Actions>
                  <Link to={`/admin/products-list/${product.id}`}>
                    <Button name="View" />
                  </Link>
                  <Button onClick={() => handleDelete(product)} name="Delete" />
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
    </Container>
  );
};
export default Table;
