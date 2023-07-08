import { Delete } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { styled } from "styled-components";
import { removeCartProduct } from "../redux/productReducer";

const Product = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 0.5px solid lightgray;
  padding: 20px;
`;

const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`;

const Image = styled.img`
  width: 200px;
`;

const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const ProductName = styled.span`
  font-size: 20px;
`;

const ProductId = styled.span``;

const ProductColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`;

const ProductSize = styled.span``;

const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const ProductAmount = styled.div`
  font-size: 20px;
  margin: 5px;
  font-weight: 600;
`;

const ProductPrice = styled.div`
  font-size: 24px;
  font-weight: 200;
  padding-bottom: 30px;
`;
const RemoveProduct = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px;
  border: 2px solid red;
  background-color: white;
  cursor: pointer;
  font-weight: 500;
  &:hover {
    background-color: #f8f4f4;
  }
`;

const CartProduct = ({ product }) => {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(removeCartProduct(product));
  };

  return (
    <Product key={product.id}>
      <ProductDetail>
        <Image src={product.img} />
        <Details>
          <ProductName>
            <b>Product:</b> {product.title}
          </ProductName>
          <ProductId>
            <b>ID:</b> {product.id}
          </ProductId>
          <ProductColor color={product.color} />
          <ProductSize>
            {product.size && <b>Size: {product.size}</b>}
          </ProductSize>
        </Details>
      </ProductDetail>
      <PriceDetail>
        <ProductAmountContainer>
          <ProductAmount>Product Quantity: {product.quantity}</ProductAmount>
        </ProductAmountContainer>
        <ProductPrice>TK {product.price * product.quantity}</ProductPrice>
        <RemoveProduct onClick={handleClick}>
          <Delete />
        </RemoveProduct>
      </PriceDetail>
    </Product>
  );
};

export default CartProduct;
