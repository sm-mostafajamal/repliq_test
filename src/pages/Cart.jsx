import styled from "styled-components";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartProduct from "../components/CartProduct";
import { orderedProducts } from "../services/ecommerce";
import { emptyCartProduct } from "../redux/productReducer";

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 20px;
`;

const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;

const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) =>
    props.type === "filled" ? "black" : "transparent"};
  color: ${(props) => props.type === "filled" && "white"};
`;

const TopTexts = styled.div``;
const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0px 10px;
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Info = styled.div`
  flex: 3;
`;
const Empty = styled.div`
  flex: 3;

  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
  font-weight: 600;
`;
const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  height: 50%;
`;

const SummaryTitle = styled.h1`
  font-weight: 200;
`;

const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "24px"};
`;

const SummaryItemText = styled.span``;

const SummaryItemPrice = styled.span``;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: black;
  color: white;
  font-weight: 600;
  cursor: pointer;
`;

const Cart = () => {
  const { carts, totalPrice } = useSelector((state) => state.product);
  const dispatch = useDispatch();
  const handleClick = async () => {
    carts.forEach((product) => setTimeout(() => orderedProducts(product), 0));
    dispatch(emptyCartProduct());
    alert("Thank you for your order !!!");
  };
  return (
    <Container>
      <Navbar />
      <Wrapper>
        <Title>YOUR Products</Title>
        <Top>
          <Link to={"/"}>
            <TopButton>CONTINUE SHOPPING</TopButton>
          </Link>
          <TopTexts>
            <TopText>Total Items({carts.length})</TopText>
          </TopTexts>
        </Top>
        <Bottom>
          {carts.length ? (
            <Info>
              {carts.map((product) => (
                <CartProduct product={product} key={product.id} />
              ))}
            </Info>
          ) : (
            <Empty>No Items</Empty>
          )}
          <Summary>
            <SummaryTitle>ORDER SUMMARY</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Subtotal</SummaryItemText>
              <SummaryItemPrice>TK {totalPrice}</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Estimated Shipping</SummaryItemText>
              <SummaryItemPrice>TK 50</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Shipping Discount</SummaryItemText>
              <SummaryItemPrice>TK 50</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem type="total">
              <SummaryItemText>Total</SummaryItemText>
              <SummaryItemPrice>TK {totalPrice}</SummaryItemPrice>
            </SummaryItem>
            {/* posting the ordered products to server-database */}
            <Button onClick={handleClick}>CHECKOUT NOW</Button>
          </Summary>
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Cart;
