import "./style.scss";
import {
  Dashboard,
  Home,
  Inventory,
  LogoutOutlined,
  PeopleAltOutlined,
  ShoppingBag,
} from "@mui/icons-material";

import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { setUser } from "../../../redux/userReducer";

const Sidebar = () => {
  const dispatch = useDispatch();

  const handleClick = () => {
    window.localStorage.clear();
    dispatch(setUser(null));
  };

  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo">Admin Panel</span>
        </Link>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <Link to="/admin" style={{ textDecoration: "none" }}>
            <li>
              <Dashboard className="icon" />
              <span>Dashboard</span>
            </li>
          </Link>
          <Link to="/" style={{ textDecoration: "none" }}>
            <li>
              <Home className="icon" />
              <span>Home</span>
            </li>
          </Link>
          <p className="title">MENU</p>
          <Link to="" style={{ textDecoration: "none" }}>
            <li>
              <PeopleAltOutlined className="icon" />

              <span>Customers List</span>
            </li>
          </Link>
          <Link to="" style={{ textDecoration: "none" }}>
            <li>
              <ShoppingBag className="icon" />
              <span>Order List</span>
            </li>
          </Link>
          <li>
            <Inventory className="icon" />

            <span>Product List</span>
          </li>

          <li>
            <LogoutOutlined className="icon" />
            <span onClick={handleClick}>Logout</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
