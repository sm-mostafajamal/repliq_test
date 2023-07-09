import { Add, Remove } from "@mui/icons-material";
import styled from "styled-components";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { appendCart } from "../redux/productReducer";

const Container = styled.div``;
const Wrapper = styled.div`
  padding: 20px;
  display: flex;
`;
const ImgContainer = styled.div`
  flex: 1;
  text-align: center;
`;
const Image = styled.img`
  width: 100%;
  height: 90vh;
  object-fit: contain;
`;
const InfoContainer = styled.div`
  flex: 1;
  padding: 0 50px;
`;
const Title = styled.h1`
  font-weight: 200;
`;
const Desc = styled.p`
  margin: 20px 0;
`;
const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
`;
const FilterContainer = styled.div`
  width: 50%;
  margin: 50px 0;
  display: flex;
  justify-content: space-between;
`;
const Filter = styled.div`
  display: flex;
  align-items: center;
`;
const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 200;
`;
const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${({ color }) => color};
  margin: 0 5px;
  cursor: pointer;
`;
const FilterSize = styled.select`
  margin-left: 10px;
  padding: 5px;
  margin-right: 20px;
  background: none;
  border: 1px solid black;
  border-radius: 5px;
`;
const FilterSizeOption = styled.option``;
const AddContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 50%;
`;
const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`;
const Btn = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
`;
const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid teal;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 5px;
`;
const Button = styled.button`
  padding: 15px;
  border: 2px solid teal;
  background-color: white;
  cursor: pointer;
  font-weight: 500;
  &:hover {
    background-color: #f8f4f4;
  }
`;

const Product = () => {
  const id = Number(useParams().id);
  const { products, carts } = useSelector((state) => state.product);
  const product = products.find((product) => product.id === id);
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(1);
  const [color, setColor] = useState("");
  const [size, setSize] = useState("");

  const handleClick = (operation) => {
    if (operation === "add") {
      setQuantity((prev) => prev + 1);
    } else {
      setQuantity((prev) => (prev > 0 ? prev - 1 : 0));
    }
  };
  const handleSubmit = () => {
    const loggedInUserJSON = window.localStorage.getItem("loggedInUser");
    if (loggedInUserJSON) {
      const loggedInUser = JSON.parse(loggedInUserJSON);
      const content = {
        ...product,
        ...loggedInUser,
        color: color,
        size: size,
        quantity: quantity,
      };

      const duplicateProduct = carts.find(
        (product) => product.id === content.id
      );
      if (duplicateProduct) {
        alert("Already added to card please remove if you want to change!!!");
      } else {
        dispatch(appendCart(content));
      }
    }
  };

  return (
    <Container>
      <Navbar />
      <Wrapper>
        <ImgContainer>
          <Image src={product.img} />
        </ImgContainer>
        <InfoContainer onSubmit={handleSubmit}>
          <Title>{product.title}</Title>
          <Desc>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum iste
            commodi exercitationem ab et ea, eum laborum quisquam, deleniti
            repellat ratione nesciunt. Minima voluptates quia distinctio ut quod
            sapiente blanditiis!
          </Desc>
          <Price>TK {product.price * quantity}</Price>
          <FilterContainer>
            <FilterTitle>Color</FilterTitle>
            <Filter>
              <FilterColor
                color="black"
                onClick={(e) => setColor(e.target.attributes.color.value)}
              />
              <FilterColor
                color="darkblue"
                onClick={(e) => setColor(e.target.attributes.color.value)}
              />
              <FilterColor
                color="grey"
                onClick={(e) => setColor(e.target.attributes.color.value)}
              />
            </Filter>
            <Filter>
              <FilterTitle>Size</FilterTitle>
              <FilterSize onChange={(e) => setSize(e.target.value)} required>
                <FilterSizeOption>XS</FilterSizeOption>
                <FilterSizeOption>S</FilterSizeOption>
                <FilterSizeOption>M</FilterSizeOption>
                <FilterSizeOption>L</FilterSizeOption>
                <FilterSizeOption>XL</FilterSizeOption>
              </FilterSize>
            </Filter>
          </FilterContainer>
          <AddContainer>
            <AmountContainer>
              <Btn onClick={() => handleClick("remove")}>
                <Remove />
              </Btn>
              <Amount>{quantity}</Amount>
              <Btn onClick={() => handleClick("add")}>
                <Add />
              </Btn>
            </AmountContainer>
            <Link to={"/cart"}>
              <Button onClick={(e) => handleSubmit(e)}>ADD TO CART</Button>
            </Link>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Product;
