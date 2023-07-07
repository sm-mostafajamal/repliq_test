import { styled } from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Title = styled.h2`
  padding-bottom: 25px;
`;

const Form = styled.form`
  width: 20%;
  height: 20%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;
const Label = styled.label`
  padding-bottom: 10px;
`;

const Input = styled.input`
  outline: none;
  height: 40px;
  margin-bottom: 10px;
`;

const Register = () => {
  return (
    <Container>
      <Title>Register</Title>
      <Form>
        <Label htmlFor="number">Number</Label>
        <Input placeholder="+880 XXXX XXXXXX" min="11" max="14" />
        <Label htmlFor="password">Password</Label>
        <Input />
        <Label htmlFor="password">Confirm Password</Label>
        <Input />
      </Form>
    </Container>
  );
};

export default Register;
