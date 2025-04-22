import React from "react";
import Link from "next/link";
import { Heart, ShoppingCartIcon } from "lucide-react";
import UserButton from "./UserButton";

const Menu = () => {
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
      <div>
        <Link href="/cart">
          <ShoppingCartIcon />
        </Link>
      </div>
    </div>
  );
};

export default Menu;
