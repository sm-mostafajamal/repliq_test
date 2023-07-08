import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import { useState } from "react";

function App() {
  const [user, setUser] = useState(true);

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
