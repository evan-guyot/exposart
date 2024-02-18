"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { Masterpiece } from "@/types/masterpiece";

interface CartItem {
  masterpiece: Masterpiece;
  quantity: number;
}

interface CartContextValue {
  cart: CartItem[];
  addToCart: (masterpiece: Masterpiece) => void;
  removeFromCart: (id: number) => void;
  clearCart: () => void;
  getTotalQuantity: () => number;
  getTotalPrice: () => number;
}

const CartContext = createContext<CartContextValue>({
  cart: [],
  addToCart: () => {},
  removeFromCart: () => {},
  clearCart: () => {},
  getTotalQuantity: () => 0,
  getTotalPrice: () => 0,
});

export default function CartProvider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [cart, setCart] = useState<CartItem[]>([]);

  const addToCart = (masterpiece: Masterpiece) => {
    const existingIndex = cart.findIndex(
      (item) => item.masterpiece.id === masterpiece.id
    );

    if (existingIndex !== -1) {
      setCart((prevCart) =>
        prevCart.map((item) =>
          item.masterpiece.id === masterpiece.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCart((prevCart) => [...prevCart, { masterpiece, quantity: 1 }]);
    }
  };

  const removeFromCart = (id: number) => {
    setCart((prevCart) =>
      prevCart.filter((item) => item.masterpiece.id !== id)
    );
  };

  const clearCart = () => {
    setCart([]);
  };

  const getTotalQuantity = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  const getTotalPrice = () => {
    return cart.reduce(
      (total, item) => total + item.masterpiece.price * item.quantity,
      0
    );
  };

  const value = {
    cart,
    addToCart,
    removeFromCart,
    clearCart,
    getTotalQuantity,
    getTotalPrice,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export const useCartContext = () => {
  return useContext(CartContext);
};
