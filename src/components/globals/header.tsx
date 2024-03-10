"use client";

import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import { useCartContext } from "@/context/cartContext";
import CartModal from "@/components/globals/modals/cartModal";
import { useState } from "react";

export default function Header() {
  const { getTotalQuantity } = useCartContext();
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);

  const handleCloseCart = () => {
    setIsCartOpen(false);
  };
  const handleOpenCart = () => {
    setIsCartOpen(true);
  };

  return (
    <header className="fixed w-full bg-white/25 dark:bg-black/25 z-50 top-0 p-3 border-b border-black dark:border-white">
      <CartModal isOpen={isCartOpen} handleClose={handleCloseCart} />
      <nav className="px-4 lg:px-6 py-2.5 h-16">
        <div className="float-right">
          <a
            className="block relative p-3 rounded-full border border-gray-700 dark:border-gray-300 cursor-pointer"
            onClick={handleOpenCart}
          >
            <ShoppingCartIcon className="w-6 text-gray-700 dark:text-gray-300" />
            <span className="absolute top-1/2 right-1/2 -translate-y-1/2 -translate-x-1/2 bg-sky-500 text-white rounded-full px-2 py-1 font-bold text-xs">
              {getTotalQuantity()}
            </span>
          </a>
        </div>
      </nav>
    </header>
  );
}
