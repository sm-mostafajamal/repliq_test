import { useDispatch, useSelector } from "react-redux";
import { styled } from "styled-components";
import { createUser } from "../redux/userReducer";
import { Link, useNavigate } from "react-router-dom";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Title = styled.h2`
  margin-bottom: 20px;
`;

const Form = styled.form`
  margin-top: 20px;
  width: 20%;
  height: 30%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;
const Label = styled.label`
  padding-bottom: 10px;
`;

const Input = styled.input`
  outline: none;
  margin-bottom: 10px;
  border: 2px solid teal;
`;

const Buttons = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Submit = styled.button`
  padding: 5px;
  border: 2px solid teal;
  background-color: white;
  cursor: pointer;
  font-weight: 500;
  &:hover {
    background-color: #f8f4f4;
  }
`;

const Register = () => {
  const { users } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Check if user exists
    const user = users.filter((user) => user.number === e.target.number.value);
    if (user.length) return alert("User already exists!!!");

    // check if the passwords/confirm password are correct
    if (e.target.password.value === e.target.confirmPassword.value) {
      navigate("/login");
      dispatch(
        createUser({
          number: e.target.number.value,
          password: e.target.password.value,
        })
      );
    } else {
      alert("Password Do Not Match !!!");
    }
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
          minLength={"11"}
          required
        />
        <Label htmlFor="password">Password</Label>
        <Input name="password" type="password" minLength={"6"} required />
        <Label htmlFor="password">Confirm Password</Label>
        <Input name="confirmPassword" type="password" required />
        <Buttons>
          <Link to={"/login"}>
            <Submit>Login</Submit>
          </Link>
          <Submit type="submit">Submit</Submit>
        </Buttons>
      </Form>
    </Container>
  );
};

export default Register;
