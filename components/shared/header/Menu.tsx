"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Heart, ShoppingCartIcon } from "lucide-react";
import UserButton from "./UserButton";
import CartSidebar from "../CartSidebar";

const Menu = () => {
  const [isCartOpened, setIsCartOpened] = useState(false);

  const handleClick = () => {
    return setIsCartOpened(!isCartOpened);
  };
  return (
    <div className="flex gap-10 items-center justify-end p-2">
      {/* Favourite Icon */}
      <div>
        <Link href="/favorite">
          <Heart />
        </Link>
      </div>
      {/* User profile Icon */}

      <div>
        <UserButton />
      </div>
      {/* Cart Icon */}

      <div onClick={handleClick} className="hover:brightness-70">
        <ShoppingCartIcon />
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
