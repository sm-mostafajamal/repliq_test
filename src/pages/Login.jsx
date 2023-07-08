import { useDispatch, useSelector } from "react-redux";
import { styled } from "styled-components";
import { setUser } from "../redux/userReducer";
import { Link } from "react-router-dom";

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

const Login = () => {
  const { users } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    // check if login information  and the stored user  password are same and exist
    const user = users.find(
      (user) =>
        user.number === e.target.number.value &&
        user.password === e.target.password.value
    );
    //store user info for persistancy login
    if (user) {
      dispatch(setUser(user));
      window.localStorage.setItem("loggedInUser", JSON.stringify(user));
    } else {
      return alert("Wrong Credentials !!!");
    }
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
        <Buttons>
          <Link to={"/register"}>
            <Submit>Register</Submit>
          </Link>
          <Submit type="submit">Log In</Submit>
        </Buttons>
      </Form>
    </Container>
  );
};

export default Login;
