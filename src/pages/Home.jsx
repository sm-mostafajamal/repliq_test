import styled from "styled-components";
import Navbar from "../components/Navbar";
import ProductList from "../components/ProductList";
import Slider from "../components/Slider";
import Footer from "../components/Footer";

const Container = styled.div``;
const Wrapper = styled.div``;

const Title = styled.span`
  font-size: 30px;
  font-weight: 500;
  display: flex;
  justify-content: center;
`;

const Home = () => {
  return (
    <Container>
      <Wrapper>
        <Navbar />
        <Slider />
        <Title>Products</Title>
        <ProductList />
        <Footer />
      </Wrapper>
    </Container>
  );
};

export default Home;
