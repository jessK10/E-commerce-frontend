import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Products from "./pages/Products";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import CreateProduct from "./pages/CreateProduct";
import About from "./pages/About";
import ProductDetail from "./pages/ProductDetail";
import CartModal from "./components/CartModal";
import CartPage from "./pages/CartPage";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    if (theme === "dark") {
      document.body.classList.add("bg-dark", "text-white");
      document.body.classList.remove("bg-light", "text-dark");
    } else {
      document.body.classList.add("bg-light", "text-dark");
      document.body.classList.remove("bg-dark", "text-white");
    }
  }, [theme]);

  return (
    <>
      <Navbar theme={theme} setTheme={setTheme} />
      <CartModal />
      
      {/* Global layout wrapper */}
      <div className="main-container">
        <Routes>
          <Route path="/" element={<Hero theme={theme} />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<ProductDetail />} />
          <Route path="/create-product" element={<CreateProduct />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/about" element={<About />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
