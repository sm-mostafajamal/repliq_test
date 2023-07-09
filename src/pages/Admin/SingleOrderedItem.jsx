import React from "react";
import { styled } from "styled-components";
import Sidebar from "../../components/Admin/Sidebar";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
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
  display: flex;
  flex-direction: column;
  padding: 0 50px;
`;
const Title = styled.h1`
  font-weight: 200;
`;
const Desc = styled.p`
  margin: 20px 0;
`;
const Detail = styled.span`
  font-weight: 100;
  font-size: 20px;
  text-transform: capitalize;
  margin-bottom: 10px;
`;
const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
`;
const SingleOrderedItem = () => {
  const id = Number(useParams().id);
  const { allOrderedProducts } = useSelector((state) => state.pagination);
  const product = allOrderedProducts.find((product) => product.id === id);
  return (
    <Container>
      <Sidebar />
      <Wrapper>
        <Wrapper>
          <ImgContainer>
            <Image src={product.img} />
          </ImgContainer>
          <InfoContainer>
            <Title>{product.title}</Title>
            <Desc>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum
              iste commodi exercitationem ab et ea, eum laborum quisquam,
              deleniti repellat ratione nesciunt. Minima voluptates quia
              distinctio ut quod sapiente blanditiis!
            </Desc>
            {product.fullName && <Detail>Order By: {product.fullName}</Detail>}
            {product.color && <Detail>Color: {product.color}</Detail>}
            {product.color && <Detail>Color: {product.color}</Detail>}

            {product.color && <Detail>Color: {product.color}</Detail>}
            {product.size && <Detail>Size: {product.size}</Detail>}
            <Detail>Quantity: {product.quantity}</Detail>
            <Price>TK {product.price * product.quantity}</Price>
          </InfoContainer>
        </Wrapper>
      </Wrapper>
    </Container>
  );
};

export default SingleOrderedItem;
