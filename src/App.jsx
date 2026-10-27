import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "./components/CartContext";
import Header from "./components/Header";
import Home from "./components/Home";
import Cart from "./components/Cart";
import "./App.css";

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;