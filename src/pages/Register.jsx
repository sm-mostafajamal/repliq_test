import { useDispatch } from "react-redux";
import { styled } from "styled-components";
import { addUser } from "../redux/userReducer";
import { useNavigate } from "react-router-dom";

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

const Submit = styled.button``;

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      addUser({
        number: e.target.number.value,
        password: e.target.password.value,
        confirmPassword: e.target.confirmPassword.value,
      })
    );
    navigate("/login");
  };

  return (
    <Container>
      <Title>Register</Title>
      <Form onSubmit={(e) => handleSubmit(e)}>
        <Label htmlFor="number">Number</Label>
        <Input
          name="number"
          type="tel"
          placeholder="01812345678"
          pattern="[0-9]{5}[0-9]{6}"
          required
        />
        <Label htmlFor="password">Password</Label>
        <Input name="password" type="password" required />
        <Label htmlFor="password">Confirm Password</Label>
        <Input name="confirmPassword" type="password" required />
        <Submit>Submit</Submit>
      </Form>
    </Container>
  );
};

export default Register;
