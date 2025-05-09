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
                src="/images/utils/user-profile.png"
                alt="User Avatar"
                fill
                sizes="(min-width: 768px) 40px, 32px"
                className="rounded-full border-2 border-sky-500 hover:shadow-lg transition duration-200"
              />
            </div>
          </DropdownMenuTrigger>
        ) : (
          <DropdownMenuTrigger className="flex items-center gap-2 rounded-full border border-sky-300 p-2 hover:shadow-lg bg-purple-600 hover:bg-purple-700 transition ease-in-out">
            <User className="h-6 w-6 text-white" />
          </DropdownMenuTrigger>
        )}

        {/* Menu Content */}
        <DropdownMenuContent className="w-48 sm:w-56 md:w-64 p-3 shadow-2xl rounded-xl bg-cyan-400 border border-purple-500 space-y-1">
          {session ? (
            <DropdownMenuGroup>
              <DropdownMenuItem className="rounded-md px-3 py-2 ">
                <Link
                  href="/account/manage"
                  className="w-full text-base font-bold text-blue-800"
                >
                  MY ACCOUNT
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem className=" rounded-md px-3 py-2 transition ease-in-out">
                <Link
                  href="/account/order"
                  className="w-full text-base font-bold text-blue-800"
                >
                  MY ORDERS
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem className="rounded-md px-3 py-2 transition ease-in-out">
                <Link
                  href="/wishlist"
                  className="w-full text-base font-bold text-blue-800"
                >
                  MY WISHLIST
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem className="rounded-md px-3 py-2 transition ease-in-out">
                <button
                  onClick={() => signOut({ callbackUrl: "/" })}
                  className="w-full text-left text-base text-red-700 font-bold underline"
                >
                  SIGN OUT
                </button>
              </DropdownMenuItem>
            </DropdownMenuGroup>
          ) : (
            <DropdownMenuGroup>
              <DropdownMenuItem className="rounded-md px-3 py-2 transition ease-in-out">
                <Link
                  href="/account/sign-in"
                  className="w-full text-base font-bold text-blue-800"
                >
                  SIGN IN
                </Link>
              </DropdownMenuItem>
              <DropdownMenuLabel className="text-base font-bold text-blue-800 px-3 pt-2">
                DON’T HAVE AN ACCOUNT?{" "}
                <Link
                  href="/account/sign-up"
                  className="text-red-700 font-bold underline"
                >
                  SIGN UP
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
