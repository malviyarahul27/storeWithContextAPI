import React from "react";
import { Route, Routes } from "react-router-dom";
import Cart from "./componects/CartPage";
import Home from "./Home";

const App = () => {
  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
