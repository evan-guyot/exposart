import type { Masterpiece } from "./masterpiece";

interface CartItem {
  masterpiece: Masterpiece;
  quantity: number;
}

type Cart = CartItem[];

export type { Cart, CartItem };
