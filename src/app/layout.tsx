import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import CartProvider from "../context/cartContext";
import Header from "@/components/globals/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Expos'art",
  description: "Expos'art website, is a show of art image",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <CartProvider>
      <html lang="en" style={{ minWidth: "100%", minHeight: "100%" }}>
        <body
          className={inter.className}
          style={{
            margin: 0,
            padding: 0,
          }}
        >
          <Header />
          <main className="mt-24">{children}</main>
        </body>
      </html>
    </CartProvider>
  );
}
