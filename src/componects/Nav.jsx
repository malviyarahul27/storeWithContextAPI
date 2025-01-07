import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../utils/CartContext";
import { ProductContext } from "../utils/ProductContext";

const Nav = () => {
  const { products } = useContext(ProductContext);
  const { cart } = useContext(CartContext);
  const [search, setSearch] = useState("");

  const finds = products.find((item) => item?.title?.includes(search));
  if (finds) {
    console.log(finds);
  } else {
    console.log(" ");
  }

  //   total product
  const totalQuentity = cart.reduce((acc, item) => {
    const quantity = Number(item.quantity) || 0;
    return acc + quantity;
  }, 0);

  //   console.log(totalQuentity);

  return (
    <div className="w-full h-16 bg-amber-200 flex items-center justify-between px-5 relative">
      <h1>Home</h1>
      <div className="w-[40%]">
        <input
          type="text"
          className="border bg-transparent px-2 w-[70%]"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button className="px-2 border">search</button>
      </div>
      {search && (
        <div className="w-[25%] h-60 bg-white absolute top-16 left-[30%] z-10">
          {finds ? (
            <div>
              <h1>Name : {finds.title}</h1>
            </div>
          ) : (
            <h1> NO Suggestion</h1>
          )}
        </div>
      )}

      <Link className="font-medium text-l uppercase" to={"/cart"}>
        Cart{" "}
        <span className="bg-red-500 text-white p-1 rounded-full px-[11px]">
          {totalQuentity}
        </span>
      </Link>
    </div>
  );
};

export default Nav;
