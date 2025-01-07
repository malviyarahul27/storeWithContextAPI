import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import ProductProvider from "./utils/ProductContext.jsx";
import { BrowserRouter, Router, Route } from "react-router-dom";
import CartPage from "./componects/CartPage.jsx";
import CartProvider from "./utils/CartContext.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <ProductProvider>
      <CartProvider>
        <App />
      </CartProvider>
    </ProductProvider>
  </BrowserRouter>
);
