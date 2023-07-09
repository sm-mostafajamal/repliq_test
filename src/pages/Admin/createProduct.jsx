import React, { useState } from "react";
import { styled } from "styled-components";
import Sidebar from "../../components/Admin/Sidebar";
import { createProduct } from "../../services/admin/adminServices";
import { appendProducts } from "../../redux/productReducer";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const Container = styled.div`
  display: flex;
  width: 100%;
`;
const Wrapper = styled.div`
  width: 100%;
  margin-top: 50px;
  justify-content: center;
  align-items: center;
`;
const Title = styled.h1`
  text-align: center;
`;
const Left = styled.div``;
const Right = styled.div``;

const Form = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  align-items: center;
`;
const FormInfo = styled.div`
  width: 60%;
  display: flex;
  justify-content: space-around;
`;
const AddProduct = styled.div`
  width: 250px;
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
`;
const Label = styled.label`
  color: gray;
  font-weight: 600;
  margin-bottom: 10px;
`;
const Input = styled.input`
  padding: 10px;
`;
const File = styled.input`
  padding: 10px 0;
  &::file-selector-button {
    width: 100px;
    height: 30px;
    background-color: transparent;
    border: none;
    border: 0.5px solid black;
    margin-right: 15px;
    cursor: pointer;
  }
`;
const Select = styled.select`
  padding: 10px;
`;
const Option = styled.option``;

const Button = styled.button`
  width: 200px;
  background-color: transparent;
  color: teal;
  font-weight: 500;
  padding: 5px;
  border: 1px solid teal;
  font-size: 18px;
  border-radius: 5px;
  margin-top: 50px;
  cursor: pointer;
`;

const CreateProduct = () => {
  const [inputs, setInputs] = useState({});
  const [file, setFile] = useState(null);
  const dispatch = useDispatch();
  const handleChange = (e) => {
    setInputs((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const handleClick = () => {
    const content = {
      ...inputs,
      img: file,
    };
    createProduct(content);
    dispatch(appendProducts([content]));
  };
  return (
    <Container>
      <Sidebar />
      <Wrapper>
        <Title>New Product</Title>
        <Form>
          <FormInfo>
            <Left>
              <AddProduct>
                <Label>Image</Label>
                <File
                  type="file"
                  id="file"
                  accept="image/x-png,image/gif,image/jpeg,image/jpg"
                  onChange={(e) =>
                    setFile(URL.createObjectURL(e.target.files[0]))
                  }
                />
              </AddProduct>
              <AddProduct>
                <Label>Title</Label>
                <Input
                  name="title"
                  type="text"
                  placeholder="Apple Airpods"
                  onChange={handleChange}
                />
              </AddProduct>
              <AddProduct>
                <Label>Description</Label>
                <Input
                  name="desc"
                  type="text"
                  placeholder="description..."
                  onChange={handleChange}
                />
              </AddProduct>
            </Left>
            <Right>
              <AddProduct>
                <Label>Price</Label>
                <Input
                  name="price"
                  type="number"
                  placeholder="100"
                  onChange={handleChange}
                />
              </AddProduct>
              <AddProduct>
                <Label>Categories</Label>
                <Input
                  type="text"
                  placeholder="t-shit, skirts"
                  onChange={handleChange}
                />
              </AddProduct>
              <AddProduct>
                <Label>Stock</Label>
                <Select name="inStock" onChange={handleChange}>
                  <Option value="true">Yes</Option>
                  <Option value="false">No</Option>
                </Select>
              </AddProduct>
            </Right>
          </FormInfo>
          <Link to={"/admin/products-list"}>
            <Button onClick={handleClick}>Create</Button>
          </Link>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default CreateProduct;
