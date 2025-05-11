"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Heart, ShoppingCartIcon } from "lucide-react";
import UserButton from "./UserButton";
import CartSidebar from "../CartSidebar";
import { useCartStore } from "@/hooks/useCartStore";

const Menu = () => {
  const [isCartOpened, setIsCartOpened] = useState(false);

  const cart = useCartStore((state) => state.cart);
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const handleClick = () => {
    return setIsCartOpened(!isCartOpened);
  };
  return (
    <div className="flex gap-5 md:gap-10 items-center justify-end p-2">
      {/* Favourite Icon */}
      <div>
        <Link
          href="/wishlist"
          className="cursor-pointer hover:text-red-400 active:scale-95 transition duration-150 ease-in-out"
        >
          <Heart className="w-5 h-5 md:w-7 md:h-7" />
        </Link>
      </div>
      {/* User profile Icon */}

      <div className="hover:brightness-125 active:scale-95 transition duration-150 ease-in-out">
        <UserButton />
      </div>
      {/* Cart Icon */}

      <div
        onClick={handleClick}
        className="relative cursor-pointer hover:text-sky-500 active:scale-95 transition duration-150 ease-in-out py-2"
      >
        <ShoppingCartIcon className="w-5 h-5 md:w-7 md:h-7" />
        {totalItems > 0 ? (
          <div className="absolute top-0 right-0 bg-sky-500 p-0.5 rounded-full font-bold text-xs ">
            {totalItems}
          </div>
        ) : (
          <div></div>
        )}
      </div>

      {isCartOpened && (
        <div
          onClick={() => setIsCartOpened(false)}
          className="fixed inset-0 bg-black/50 z-[998] opacity-0 animate-[fadeDown_0.2s_ease-out_forwards]"
        />
      )}

      {isCartOpened && <CartSidebar onClose={() => setIsCartOpened(false)} />}
    </div>
  );
};

export default Menu;
