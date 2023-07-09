import React, { useState } from "react";
import styled from "styled-components";
import Product from "./Product";
import { useSelector } from "react-redux";

const Container = styled.div``;
const Wrapper = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;
const Fetching = styled.span`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 600;
  font-size: 30px;
  color: purple;
`;
const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Filter = styled.div`
  margin: 20px;
`;
const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
`;
const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
  background: none;
  border: 1px solid black;
  border-radius: 5px;
`;
const Option = styled.option``;
const ProductList = () => {
  const { products, isLoading } = useSelector((state) => state.product);
  const [filteredProducts, setFilter] = useState();
  console.log(products);
  const handleChange = (e) => {
    const filtered = products.filter(
      (product) =>
        product.color === e.target.value.toLowerCase() ||
        product.size === e.target.value.toLowerCase()
    );
    setFilter(filtered);
  };

  return (
    <Container>
      <FilterContainer onChange={(e) => handleChange(e)}>
        <Filter>
          <FilterText>Filter Products: </FilterText>
          <Select name="color">
            <Option style={{ display: "none" }}>Color</Option>
            <Option value="grey">Grey</Option>
            <Option value="black">Black</Option>
            <Option value="pink">Pink</Option>
            <Option value="brown">Brown</Option>
            <Option value="purple">Purple</Option>
            <Option value="green">Green</Option>
          </Select>
          <Select name="size">
            <Option style={{ display: "none" }}>Size</Option>
            <Option value="xs">XS</Option>
            <Option value="s">S</Option>
            <Option value="m">M</Option>
            <Option value="l">L</Option>
            <Option value="xl">XL</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Wrapper>
        {isLoading && <Fetching>Fetching Data...</Fetching>}
        {filteredProducts
          ? filteredProducts.map((product) => (
              <Product item={product} key={product.id} />
            ))
          : products.map((product) => (
              <Product item={product} key={product.id} />
            ))}
      </Wrapper>
    </Container>
  );
};

export default ProductList;
