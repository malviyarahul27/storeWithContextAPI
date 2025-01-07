import React, { useContext } from "react";
import { CartContext } from "../utils/CartContext";

const CartPage = () => {
  const { cart, increaseQuantity, decreaseQuantity, totalPrice } =
    useContext(CartContext);

  // total totalQuentity
  const totalQuentity = cart.reduce((acc, item) => {
    const quantity = Number(item.quantity) || 0;
    return acc + quantity;
  }, 0);
  return (
    <>
      <div className="w-full h-screen p-14 px-[15%] bg-zinc-800">
        <div className="w-full h-full border-zinc-600 border flex">
          <div className="w-[75%] overflow-auto h-full bg-zinc-600">
            <div className="p-6 border-b border-zinc-600 flex justify-between px-12 ">
              <h1 className="text-xl font-medium text-zinc-300 ml-4">
                Shoping Cart
              </h1>
              <p className="text-xl font-medium text-zinc-300">
                {totalQuentity} Item
              </p>
            </div>
            <div className="flex justify-between px-14 bg-red p-4 border-t border-zinc-500 bg-green">
              <p className="text-zinc-300 font-medium uppercase">
                product Details
              </p>
              <p className="text-zinc-300 font-medium uppercase ml-5 ">
                quantity
              </p>
              <p className="text-zinc-300 font-medium uppercase">Price</p>
              <p className="text-zinc-300 font-medium uppercase">Total</p>
            </div>
            {/* Map */}
            {/* {cart.map((item) => (
              
            )} */}
            {cart.map((item, i) => (
              <div
                key={item.id}
                className="shadow-xl h-24 flex items-center bg-red mt-2"
              >
                <div className="w-full bg-blue bg-red flex justify-between overflow-auto">
                  <div
                    id="productTitle"
                    className="flex bg-red w-72 bg-amber px-4"
                  >
                    <img
                      className="w-18 h-16 m-auto "
                      src={item.images}
                      alt="No  image"
                    />
                    <div className="bg-red w-44 flex flex-col gap-1 justify-center px-2 text-zinc-300">
                      {" "}
                      <h1 className="w-full text-md ml-1">
                        {item.title.slice(0, 19)}
                      </h1>
                      <p className="text-sm ml-1">{item.category.name}</p>
                      {/* <button className="w-20 text-sm border border-zinc-300">
                        Remove
                      </button> */}
                    </div>
                  </div>
                  <div
                    id="Quentity"
                    className="bg-pink w-40 flex items-center justify-center gap-3 pr-3 text-zinc-300"
                  >
                    <button onClick={() => increaseQuantity(item.id)}>
                      ➕
                    </button>
                    <p className="px-3 border ">{item.quantity}</p>
                    <button onClick={() => decreaseQuantity(item.id)}>
                      ➖
                    </button>
                  </div>
                  <div
                    id="price"
                    className="bg-orange flex justify-center items-center w-40 ml-5 text-zinc-300"
                  >
                    <p>$ {item.price}</p>
                  </div>
                  <div
                    id="Total"
                    className="bg-orange flex justify-center items-center w-40 text-zinc-300"
                  >
                    <p>$ {item.quantity * item.price}</p>
                  </div>
                </div>
              </div>
            ))}

            {/* <div className="shadow-xl h-24 flex items-center mt-2">
              <div className="w-full bg-blue bg-red flex justify-between ">
                <div
                  id="productTitle"
                  className="flex bg-red w-72 bg-amber px-4"
                >
                  <img className="w-20 h-20 border" src="" alt="No  image" />
                  <div className="bg-red w-44 flex flex-col gap-1 px-2">
                    {" "}
                    <h1 className="w-full text-md ml-1">Item Name</h1>
                    <p className="text-sm ml-1">Category</p>
                    <button className="w-20 font-medium text-sm border p-1">
                      Remove
                    </button>
                  </div>
                </div>
                <div
                  id="Quentity"
                  className="bg-pink w-40 flex items-center justify-center gap-3 pr-3 text-zinc-300"
                >
                  <button>+</button>
                  <p className="px-3 border ">2</p>
                  <button>-</button>
                </div>
                <div
                  id="price"
                  className="bg-orange flex justify-center items-center w-40 ml-5 text-zinc-300"
                >
                  <p>$ 40</p>
                </div>
                <div
                  id="Total"
                  className="bg-orange flex justify-center items-center w-40 text-zinc-300"
                >
                  <p>$ 40</p>
                </div>
              </div>
            </div> */}
          </div>
          <div className="w-[25%] h-full bg-zinc-700">
            <div className="p-6 border-b border-zinc-600 flex justify-between px-14">
              <h1 className="text-xl font-medium text-zinc-300 ml-4">
                Order Summary
              </h1>
            </div>
            <div className="flex justify-between px-8 bg-red p-4 border-t border-zinc-500">
              <p className="text-zinc-300 font-medium uppercase">
                Items <span>{totalQuentity}</span>
              </p>
              <p className="text-zinc-300 font-medium uppercase ml-5 ">
                $ {totalPrice}
              </p>
            </div>
            {/*  */}
            <div className="w-full p-5 flex flex-col gap-2 text-zinc-200 border-t h-40 mt-3 border-zinc-500">
              <p className="uppercase">Shipping</p>
              <p className="uppercase">Total price</p>
              <p>$ {totalPrice}</p>
              <button className="border w-[90%] p-2 uppercase">Checkout</button>
            </div>
            {/* <div className="w-full bg-blue bg-red flex justify-between border-t h-40 mt-3 border-zinc-500">
              5
            </div>
            <div className="w-full bg-blue bg-red flex justify-between border-t h-40 mt-3 border-zinc-500">
              5
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default CartPage;
