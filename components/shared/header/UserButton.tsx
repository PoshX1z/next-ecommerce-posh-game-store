import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "../../ui/dropdown-menu";
import Link from "next/link";
import React from "react";
import { User } from "lucide-react";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";

const UserButton = () => {
  const { data: session } = useSession();
  return (
    <div className="relative">
      <DropdownMenu>
        {/* Trigger Button */}
        {session ? (
          <DropdownMenuTrigger>
            <div className="relative w-8 h-8 md:w-10 md:h-10">
              <Image
                src="/images/utils/user-profile-01.png"
                alt="User Avatar"
                fill
                className="rounded-full border-2 border-purple-500 hover:shadow-lg transition duration-200"
              />
            </div>
          </DropdownMenuTrigger>
        ) : (
          <DropdownMenuTrigger className="flex items-center gap-2 rounded-full border border-purple-300 p-2 hover:shadow-lg bg-purple-600 hover:bg-purple-700 transition duration-200">
            <User className="h-6 w-6 text-white" />
          </DropdownMenuTrigger>
        )}

        {/* Menu Content */}
        <DropdownMenuContent className="w-40 sm:w-48 md:w-56 lg:w-64 p-3 shadow-2xl rounded-xl bg-purple-600 border border-purple-500 space-y-1">
          {session ? (
            <DropdownMenuGroup>
              <DropdownMenuItem className="rounded-md px-3 py-2 transition">
                <Link
                  href="/account"
                  className="w-full text-base font-bold text-pink-200 hover:text-black"
                >
                  My Account
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem className=" rounded-md px-3 py-2 transition">
                <Link
                  href="/account/orders"
                  className="w-full text-base font-bold text-indigo-200 hover:text-black"
                >
                  My Orders
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem className="rounded-md px-3 py-2 transition">
                <Link
                  href="/account/wishlist"
                  className="w-full text-base font-bold text-purple-100 hover:text-black"
                >
                  My Wishlist
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem className="rounded-md px-3 py-2 transition">
                <button
                  onClick={() => signOut({ callbackUrl: "/" })}
                  className="w-full text-left text-base font-bold text-red-300 hover:text-black"
                >
                  Sign Out
                </button>
              </DropdownMenuItem>
            </DropdownMenuGroup>
          ) : (
            <DropdownMenuGroup>
              <DropdownMenuItem className="rounded-md px-3 py-2 transition">
                <Link
                  href="/account/sign-in"
                  className="w-full text-base font-bold text-white hover:text-black"
                >
                  Sign In
                </Link>
              </DropdownMenuItem>
              <DropdownMenuLabel className="text-base font-bold text-white px-3 pt-2">
                Don’t have an account?{" "}
                <Link
                  href="/account/sign-up"
                  className="text-pink-300 underline hover:text-white "
                >
                  Sign up
                </Link>
              </DropdownMenuLabel>
            </DropdownMenuGroup>
          )}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default UserButton;

/* <DropdownMenuItem className="w-full px-3 py-2 hover:bg-blue-100 rounded-md transition"> */
