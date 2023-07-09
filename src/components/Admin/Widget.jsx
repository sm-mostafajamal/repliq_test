import { styled } from "styled-components";

const Container = styled.div`
  width: 25%;
  display: flex;
  /* flex: 1; */
  /* justify-content: space-between; */
  padding: 10px;
  -webkit-box-shadow: 2px 4px 10px 1px rgba(0, 0, 0, 0.47);
  box-shadow: 2px 4px 10px 1px rgba(0, 0, 0, 0.47);
  border-radius: 10px;
  height: 100px;
`;
const Left = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const Title = styled.div`
  font-weight: bold;
  font-size: 14px;
  color: #8e8d8a;
`;
const Counter = styled.div`
  font-size: 28px;
  font-weight: 300;
`;
const Right = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Widget = ({ title, value }) => {
  return (
    <Container className="widget">
      <Left className="left">
        <Title className="title">{title}</Title>
        <Counter className="counter">{value}</Counter>
      </Left>
      <Right className="right"></Right>
    </Container>
  );
};

export default Widget;
