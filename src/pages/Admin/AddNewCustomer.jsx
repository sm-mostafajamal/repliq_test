import React, { useState } from "react";
import { styled } from "styled-components";
import Sidebar from "../../components/Admin/Sidebar";
import { useDispatch, useSelector } from "react-redux";
import { createUser } from "../../redux/userReducer";
import { Link } from "react-router-dom";

const Container = styled.div`
  display: flex;
  width: 100%;
`;
const Wrapper = styled.div`
  width: 100%;
  margin-top: 20px;
  text-align: center;
`;
const Header = styled.h1`
  text-align: center;
  margin-bottom: 20px;
`;
const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;
const Label = styled.label`
  margin-bottom: 10px;
  font-size: 14px;
  font-weight: 600;
  color: rgb(151, 150, 150);
`;
const Input = styled.input`
  height: 20px;
  padding: 10px;
  border: 1px solid gray;
  border-radius: 5px;
`;
const Item = styled.div`
  width: 400px;
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  margin-right: 20px;
`;
const GenderContainer = styled.div``;
const Gender = styled.div`
  margin-top: 15px;
  width: 250px;
  display: flex;
  justify-content: space-between;
`;
const GenderLabel = styled.label`
  margin: 10px;
  font-size: 18px;
  color: #555;
`;

const Button = styled.button`
  width: 200px;
  background-color: transparent;
  color: teal;
  font-weight: 500;
  padding: 5px;
  border: 1px solid teal;
  font-size: 18px;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 40px;
`;

const AddNewCustomer = () => {
  const [inputs, setInputs] = useState({});
  const { users } = useSelector((state) => state.user);

  const dispatch = useDispatch();

  const handleChange = (e) => {
    setInputs((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };
  const handleClick = () => {
    const user = users.find((user) => user.number === inputs.number);
    console.log(user);
    if (user) return alert("User already exists!!!");
    dispatch(createUser(inputs));
  };
  return (
    <Container>
      <Sidebar />
      <Wrapper>
        <Header>New User</Header>
        <Form>
          <Item>
            <Label>Full Name</Label>
            <Input
              type="text"
              name="fullName"
              placeholder="S.M. Mostafa Jamal"
              onChange={(e) => handleChange(e)}
              required
            />
          </Item>
          <Item>
            <Label>Email</Label>
            <Input
              type="email"
              name="email"
              placeholder="sm.mostafajamal@pm.me"
              onChange={(e) => handleChange(e)}
            />
          </Item>
          <Item>
            <Label>Password</Label>
            <Input
              type="password"
              name="password"
              placeholder="password"
              minLength={"6"}
              onChange={(e) => handleChange(e)}
              required
            />
          </Item>
          <Item>
            <Label>Phone</Label>
            <Input
              type="text"
              pattern="[0-9]{5}[0-9]{6}"
              minLength={"11"}
              onChange={(e) => handleChange(e)}
              required
            />
          </Item>
          <Item>
            <Label>Address</Label>
            <Input
              type="text"
              name="address"
              placeholder="Halishahar | Chittagong"
              onChange={(e) => handleChange(e)}
              required
            />
          </Item>
          <GenderContainer>
            <GenderLabel>Gender</GenderLabel>
            <Gender onChange={(e) => handleChange(e)}>
              <Input type="radio" name="gender" id="male" value="male" />
              <Label htmlFor="male">Male</Label>
              <Input type="radio" name="gender" id="female" value="female" />
              <Label htmlFor="female">Female</Label>
              <Input type="radio" name="gender" id="other" value="other" />
              <Label htmlFor="other">Other</Label>
            </Gender>
          </GenderContainer>
        </Form>
        <Link to={"/admin/customers-list"}>
          <Button type="submit" onClick={handleClick}>
            Create
          </Button>
        </Link>
      </Wrapper>
    </Container>
  );
};

export default AddNewCustomer;
