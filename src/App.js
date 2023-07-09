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
        <Route path="/">
          {user ? (
            <>
              <Route path="*" element={<Navigate to="/" replace />} />
              <Route index element={<Home />} />
              <Route path="product/:id" element={<Product />} />
              <Route path="cart" element={<Cart />} />
              <Route path="admin" element={<AdminHome />} />
              {/* <Route path="admin/customers" element={<CustomersLists />} /> */}
              <Route path="admin/products-list" element={<ProductsList />} />
            </>
          ) : (
            <>
              <Route path="/" element={<Navigate to="register" />} />
              <Route path="register" element={<Register />} />
              <Route path="login" element={<Login />} />
            </>
          )}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
