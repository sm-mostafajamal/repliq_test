import React, { useEffect } from "react";
import { styled } from "styled-components";
import Sidebar from "../../components/Admin/Sidebar";
import Heading from "../../components/Admin/Heading";
import Pagination from "../../components/Admin/Pagination";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Button from "../../components/Admin/Button";
import {
  appendAllUsers,
  setPageNumber,
} from "../../redux/Admin/paginationReducer";
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
  width: 20%;
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

const CustomersList = () => {
  const dispatch = useDispatch();
  const { users } = useSelector((state) => state.user);
  const { usersToShow, currentPageNumber } = useSelector(
    (state) => state.pagination
  );

  useEffect(() => {
    dispatch(appendAllUsers(users));
    dispatch(
      setPageNumber({ page: "CustomersList", pageNumber: currentPageNumber })
    );
  }, [dispatch, currentPageNumber, users]);

  return (
    <Container>
      <Sidebar />
      <Wrapper>
        <Heading
          title={"Add New Customer"}
          linkTo="/admin/add-customer"
          name={"Customer"}
        />
        <TableContainer cellSpacing="0" frame="void" rules="rows">
          <TableHead>
            <Row>
              <TableTitle>Full Name</TableTitle>
              <TableTitle>Number</TableTitle>
              <TableTitle>Email</TableTitle>
              <TableTitle>Address</TableTitle>
            </Row>
          </TableHead>

          <TableBody>
            {usersToShow.length ? (
              usersToShow.map((customer) => (
                <Body key={customer.id}>
                  <TableData>{customer.fullName}</TableData>
                  <TableData>{customer.number}</TableData>
                  <TableData>{customer.email}</TableData>
                  <TableData>{customer.address}</TableData>
                  <Actions>
                    <Link to={`/admin/customer-list/${customer.id}`}>
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

export default CustomersList;
