import React, { useEffect } from "react";
import { styled } from "styled-components";
import Sidebar from "../../components/Admin/Sidebar";
import Widget from "../../components/Admin/Widget";
import { useDispatch, useSelector } from "react-redux";
import { getAllOrderedProducts } from "../../redux/Admin/paginationReducer";

const Container = styled.div`
  display: flex;
  /* flex: 6; */
  width: 100%;
`;
const Wrapper = styled.div`
  width: 100%;
`;
const Article = styled.p`
  width: 100%;
  height: 60%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 50px;
  color: #00000042;
`;
const Widgets = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  padding-top: 20px;
`;
const AdminHome = () => {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.product);
  const { allOrderedProducts } = useSelector((state) => state.pagination);
  const money = allOrderedProducts.map((p) => Number(p.price));
  const totalRevenue = money.reduce((acc, curr) => acc + curr, 0);

  useEffect(() => {
    // dispatching to redux thunk adminOrderProductReducer
    dispatch(getAllOrderedProducts());
  }, [dispatch]);
  return (
    <Container>
      <Sidebar />
      <Wrapper>
        <Widgets>
          <Widget title="Total Revenue" value={`Taka: ${totalRevenue}`} />
          <Widget title="Total Orders" value={allOrderedProducts.length} />
          <Widget title="Total Products" value={products.length} />
        </Widgets>
        <Article> Welcome</Article>
      </Wrapper>
    </Container>
  );
};

export default AdminHome;
