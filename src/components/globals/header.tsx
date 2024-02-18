"use client";

import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import { useCartContext } from "@/context/cartContext";

export default function Header() {
  const { getTotalQuantity } = useCartContext();
  return (
    <header className="fixed w-full">
      <nav className="px-4 lg:px-6 py-2.5 h-16">
        <div className="float-right">
          <a className="block relative bg-blue-950/15 p-3 rounded-full border border-gray-300 cursor-pointer">
            <ShoppingCartIcon className="w-6 text-gray-300" />
            <span className="absolute top-1/2 right-1/2 -translate-y-1/2 -translate-x-1/2 bg-sky-500 text-white rounded-full px-2 py-1 font-bold text-xs">
              {getTotalQuantity()}
            </span>
          </a>
        </div>
      </nav>
    </header>
  );
}
