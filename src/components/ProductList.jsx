import React from "react";
import styled from "styled-components";
import Product from "./Product";
import { products } from "../data";

const Container = styled.div``;
const Wrapper = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
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
  return (
    <Container>
      <FilterContainer>
        <Filter>
          <FilterText>Filter Products: </FilterText>
          <Select>
            <Option style={{ display: "none" }}>Color</Option>
            <Option>Grey</Option>
            <Option>Black</Option>
            <Option>Pink</Option>
            <Option>Brown</Option>
            <Option>Purple</Option>
            <Option>Green</Option>
          </Select>
          <Select>
            <Option style={{ display: "none" }}>Size</Option>
            <Option>XS</Option>
            <Option>S</Option>
            <Option>M</Option>
            <Option>L</Option>
            <Option>XL</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Sort Products:</FilterText>
          <Select>
            <Option style={{ display: "none" }}>Newest</Option>
            <Option>Price (asc)</Option>
            <Option>Price (desc)</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Wrapper>
        {products.map((product) => (
          <Product item={product} key={product.id} />
        ))}
      </Wrapper>
    </Container>
  );
};

export default ProductList;
