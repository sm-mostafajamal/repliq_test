import { useSelector } from "react-redux";
import { styled } from "styled-components";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
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

const Login = ({ setUser }) => {
  const { users } = useSelector((state) => state.user);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    users.forEach((user) => {
      // check if login information and the stored user password are same
      if (
        user.number === e.target.number.value &&
        user.password === e.target.password.value
      ) {
        setUser({
          number: e.target.number.value,
          password: e.target.password.value,
        });
        navigate("/");
      } else {
        alert("Wrong Credentials !!!");
      }
    });
  };

  return (
    <Container>
      <Title>Login</Title>
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
        <Submit>Log In</Submit>
      </Form>
    </Container>
  );
};

export default Login;
