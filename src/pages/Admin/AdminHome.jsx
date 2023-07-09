import React, { useEffect } from "react";
import { styled } from "styled-components";
import Sidebar from "../../components/Admin/Sidebar";
import Widget from "../../components/Admin/Widget";
import { useDispatch, useSelector } from "react-redux";
import { getAllOrderedProducts } from "../../redux/Admin/adminProductReducer";

const Container = styled.div`
  display: flex;
  /* flex: 6; */
  width: 100%;
`;
const Wrapper = styled.div`
  width: 100%;
`;
const Widgets = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  padding-top: 20px;
`;
const AdminHome = () => {
  const { users } = useSelector((state) => state.user);
  const { products } = useSelector((state) => state.product);
  const { orderedProducts } = useSelector((state) => state.orderedProducts);
  const dispatch = useDispatch();

  useEffect(() => {
    // dispatching to redux thunk adminOrderProductReducer
    dispatch(getAllOrderedProducts());
  }, [dispatch]);
  return (
    <Container>
      <Sidebar />
      <Wrapper>
        <Widgets>
          <Widget title="Total Customers" value={users.length} />
          <Widget title="Total Orders" value={orderedProducts.length} />
          <Widget title="Total Products" value={products.length} />
        </Widgets>
      </Wrapper>
    </Container>
  );
};

export default AdminHome;
