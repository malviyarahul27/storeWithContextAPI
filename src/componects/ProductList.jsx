import React, { useContext } from "react";
import { CartContext } from "../utils/CartContext";

const ProductList = ({ product }) => {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="w-60 h-72 shadow-xl border border-zinc-600 rounded-xl text-zinc-400 hover:bg-zinc-600 hover:text-zinc-950 duration-300 relative ">
      <button
        onClick={() => addToCart(product)}
        className="p-1 absolute right-4 top-5 bg-zinc-800 rounded-full hover:bg-red-300 duration-200"
      >
        🛒
      </button>
      <img
        src={product.images[0]}
        className="w-full h-[75%] object-cover object-top rounded-t-xl"
        alt=""
      />
      <div className="w-full h-[25%] flex justify-center items-center px-2">
        <h1 className=" font-medium text-sm w-[80%]">{product.title}</h1>
        <span className=" font-medium text-lg">$ {product.price}</span>
      </div>
    </div>
  );
};

export default ProductList;
