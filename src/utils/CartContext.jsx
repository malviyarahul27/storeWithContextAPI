import React, { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // Add to cart
  const addToCart = (product) => {
    const existing = cart.find((item) => item.id === product.id);
    if (existing) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  // Increase quantity
  const increaseQuantity = (id) => {
    setCart(
      cart.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  // Decrease quantity
  const decreaseQuantity = (id) => {
    setCart(
      cart
        .map((item) => {
          if (item.id === id) {
            const updatedQuentity = item.quantity - 1;

            // check
            if (updatedQuentity < 1) {
              const confirmRemove = window.confirm(
                `Are you sure you want to remove ${item.title} from the cart ? (Y/N)`
              );
              if (confirmRemove) {
                return null; // remove the item
              } else {
                return item; // keep item in cart
              }
            }
            return { ...item, quantity: updatedQuentity }; // decrease quantity
          }
          return item; //
        })

        .filter((item) => item !== null) // remove item marked for removal
    );
  };

  //   calculate total price
  const totalPrice = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <>
      <CartContext.Provider
        value={{
          cart,
          addToCart,
          increaseQuantity,
          decreaseQuantity,
          totalPrice,
        }}
      >
        {children}
      </CartContext.Provider>
    </>
  );
};

export default CartProvider;
