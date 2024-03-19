import React, { useState } from "react";
import CartContext from "./Cart-Context";

function CartProvider(props) {
  const [items, setItems] = useState([]);

  const addItemToCartHandler = (gotData) => {
    setItems((prevData) => {
      let existItem = prevData.find((item) => item.id === gotData.id);
      if (existItem) {
        return prevData.map((item) =>
          item.id === gotData.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevData, { ...gotData, quantity: 1 }];
      }
    });
  };
  const removeItemFromCartHandler = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };
  const Cartcontext = {
    items: items,
    addItem: addItemToCartHandler,
    removeItemFromCartHandler: removeItemFromCartHandler,
  };
  return (
    <div>
      <CartContext.Provider value={Cartcontext}>{props.children}</CartContext.Provider>
    </div>
  );
}

export default CartProvider;
