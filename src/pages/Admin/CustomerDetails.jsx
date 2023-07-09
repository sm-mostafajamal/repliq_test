import React from "react";
import { styled } from "styled-components";
import Sidebar from "../../components/Admin/Sidebar";
import { Link, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import Button from "../../components/Admin/Button";
import Pagination from "../../components/Admin/Pagination";
const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;
const Wrapper = styled.div`
  width: 100%;
  padding: 20px;
  display: flex;
  align-items: center;
`;
const InfoContainer = styled.div`
  /* flex: 1; */
  display: flex;
  flex-direction: column;
  padding: 0 50px;
`;
const Title = styled.h1`
  font-size: 25px;
  font-weight: 200;
  margin-bottom: 20px;
`;
const Detail = styled.span`
  font-weight: 100;
  font-size: 16px;
  text-transform: capitalize;
  margin-bottom: 10px;
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
const CustomerDetails = () => {
  const id = Number(useParams().id);
  const { users } = useSelector((state) => state.user);
  const { allOrderedProducts } = useSelector((state) => state.pagination);

  const user = users.find((user) => user.id === id);
  const customerOrders = allOrderedProducts.filter(
    (product) => product.number === user.number
  );
  return (
    <Container>
      <Sidebar />
      <Wrapper>
        <InfoContainer>
          <Title>Ordered by the customer: {user.fullName}</Title>
          <Detail>Number: {user.number}</Detail>
          <Detail>Email: {user.email}</Detail>
          <Detail>Address: {user.address}</Detail>
          <Detail>gender: {user.gender}</Detail>
        </InfoContainer>

        <Wrapper>
          <TableContainer cellSpacing="0" frame="void" rules="rows">
            <TableHead>
              <Row>
                <TableTitle>Image</TableTitle>
                <TableTitle>Product Name</TableTitle>
                <TableTitle>Product quantity</TableTitle>
                <TableTitle>Price</TableTitle>
                <TableTitle>Actions</TableTitle>
              </Row>
            </TableHead>

            <TableBody>
              {customerOrders.length ? (
                customerOrders.map((product) => (
                  <Body key={product.id}>
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
      </Wrapper>
    </Container>
  );
};

export default CustomerDetails;
