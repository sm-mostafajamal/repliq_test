import { useEffect } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "./redux/productReducer.js";
import { getUsers, setUser } from "./redux/userReducer";
import AdminHome from "./pages/Admin/AdminHome";
// import CustomersLists from "./pages/Admin/CustomerLists";
import ProductsList from "./pages/Admin/ProductsList";
import AdminProduct from "./pages/Admin/AdminProduct";
import CreateProduct from "./pages/Admin/createProduct";
import OrderList from "./pages/Admin/OrderList";
import SingleOrderedItem from "./pages/Admin/SingleOrderedItem";
import CustomersList from "./pages/Admin/CustomersList";
import AddNewCustomer from "./pages/Admin/AddNewCustomer";

function App() {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);

  // fetching the data
  useEffect(() => {
    // dispatching to redux thunk productReducer
    dispatch(getAllProducts());
    // dispatching to redux thunk userReducer
    dispatch(getUsers());
    // dispatching user with persistance login
    const loggedInUserJSON = window.localStorage.getItem("loggedInUser");
    if (loggedInUserJSON) {
      const loggedInUser = JSON.parse(loggedInUserJSON);
      dispatch(setUser(loggedInUser));
    }
  }, [dispatch]);

  return (
    <BrowserRouter>
      <Routes>
        {user ? (
          <Route path="/">
            <Route path="*" element={<Navigate to="/" replace />} />
            <Route index element={<Home />} />
            <Route path="product/:id" element={<Product />} />
            <Route path="cart" element={<Cart />} />
            <Route path="admin/">
              <Route index element={<AdminHome />} />
              <Route path="products-list" element={<ProductsList />} />
              <Route path="products-list/:id" element={<AdminProduct />} />
              <Route path="create-product" element={<CreateProduct />} />
              <Route path="order-list" element={<OrderList />} />
              <Route path="order-list/:id" element={<SingleOrderedItem />} />
              <Route path="customers-list" element={<CustomersList />} />
              <Route path="add-customer" element={<AddNewCustomer />} />
            </Route>
          </Route>
        ) : (
          <>
            <Route path="/" element={<Navigate replace to="register" />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
          </>
        )}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
