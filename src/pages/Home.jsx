import styled from "styled-components";
import Navbar from "../components/Navbar";
import ProductList from "../components/ProductList";

import React from "react";
import Slider from "../components/Slider";

const Container = styled.div``;
const Title = styled.span`
  font-size: 30px;
  font-weight: 500;
  display: flex;
  justify-content: center;
`;

const Home = () => {
  return (
    <Container>
      <Navbar />
      <Slider />
      <Title>Products</Title>
      <ProductList />
    </Container>
  );
};

export default Home;
