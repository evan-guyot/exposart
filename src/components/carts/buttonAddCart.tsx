"use client";

import type { Masterpiece } from "@/types/masterpiece";
import type { CSSProperties } from "react";
import { useCartContext } from "@/context/cartContext";

interface Props {
  masterpiece: Masterpiece;
  label: string;
  className?: string;
  style?: CSSProperties;
}

export default function CartAddButton({
  masterpiece,
  label,
  className,
  style,
}: Props) {
  const { addToCart } = useCartContext();
  return (
    <a
      className={className}
      style={style}
      onClick={() => addToCart(masterpiece)}
    >
      {label}
    </a>
  );
}
