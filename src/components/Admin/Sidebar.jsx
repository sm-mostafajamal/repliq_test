import {
  Dashboard,
  Home,
  Inventory,
  LogoutOutlined,
  PeopleAltOutlined,
  ShoppingBag,
} from "@mui/icons-material";
import { Link } from "react-router-dom";
import { styled } from "styled-components";
import { setUser } from "../../redux/userReducer";
import { useDispatch } from "react-redux";

const Container = styled.div`
  width: 20%;
  // flex: 1;
  border-right: 0.5px solid rgb(228, 225, 225);
  min-height: 100vh;
`;
const Top = styled.div`
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Logo = styled.div`
  font-size: 20px;
  font-weight: bold;
  color: black;
`;
const Hr = styled.hr`
  height: 0;
  border: 0.5px solid rgb(228, 225, 225);
`;
const Center = styled.div`
  padding-left: 10px;
`;
const Menu = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;
const Title = styled.p`
  font-size: 10px;
  font-weight: bold;
  color: #e85a4f;
  margin-top: 15px;
  margin-bottom: 5px;
`;
const List = styled.li`
  display: flex;
  align-items: center;
  padding: 5px;
  cursor: pointer;
  &:hover {
    background-color: #d8c3a5;
  }
`;
const Name = styled.span`
  font-size: 13px;
  font-weight: 600;
  color: black;
  margin-left: 10px;
`;

const Sidebar = () => {
  const dispatch = useDispatch();

  const handleClick = () => {
    window.localStorage.clear();
    dispatch(setUser(null));
  };
  return (
    <Container>
      <Top>
        <Link to="/admin" style={{ textDecoration: "none" }}>
          <Logo>Admin Panel</Logo>
        </Link>
      </Top>
      <Hr />
      <Center>
        <Menu>
          <Title>MAIN</Title>
          <Link to="/admin" style={{ textDecoration: "none" }}>
            <List>
              <Dashboard
                style={{
                  fontSize: "18px",
                  color: "black",
                }}
              />
              <Name>Dashboard</Name>
            </List>
          </Link>
          <Link to="/" style={{ textDecoration: "none" }}>
            <List>
              <Home
                style={{
                  fontSize: "18px",
                  color: "black",
                }}
              />
              <Name>Home</Name>
            </List>
          </Link>
          <Title>MENU</Title>
          <Link to="/admin/customers" style={{ textDecoration: "none" }}>
            <List>
              <PeopleAltOutlined
                style={{
                  fontSize: "18px",
                  color: "black",
                }}
              />
              <Name>Customers List</Name>
            </List>
          </Link>
          <Link to="/admin/order-list" style={{ textDecoration: "none" }}>
            <List>
              <ShoppingBag
                style={{
                  fontSize: "18px",
                  color: "black",
                }}
              />
              <Name>Order List</Name>
            </List>
          </Link>
          <Link to="/admin/products-list" style={{ textDecoration: "none" }}>
            <List>
              <Inventory
                style={{
                  fontSize: "18px",
                  color: "black",
                }}
              />
              <Name>Product List</Name>
            </List>
          </Link>

          <List>
            <LogoutOutlined
              style={{
                fontSize: "18px",
                color: "black",
              }}
            />
            <Name onClick={handleClick}>Logout</Name>
          </List>
        </Menu>
      </Center>
    </Container>
  );
};

export default Sidebar;
