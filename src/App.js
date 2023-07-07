import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { appendProducts } from "./redux/productReducer";
import { products } from "./data.js";
import Product from "./pages/Product";
import Cart from "./pages/Cart";

function App() {
  const dispatch = useDispatch();
  const [user, setUser] = useState(true);

  useEffect(() => {
    dispatch(appendProducts(products));
  }, [dispatch]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Home user={user} />} />
          <Route path="register" element={<Register />} />
          <Route path="login" element={<Login setUser={setUser} />} />
          <Route path="product/:id" element={<Product />} />
          <Route path="cart" element={<Cart />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
