import {
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
} from "../../ui/dropdown-menu";
import Link from "next/link";
import React from "react";
import { User } from "lucide-react";

const UserButton = () => {
  return (
    <div className="relative">
      <DropdownMenu>
        <DropdownMenuTrigger className="flex items-center gap-2 rounded-full border border-gray-300 p-2 hover:shadow-md transition duration-200">
          <User className="h-5 w-5 text-gray-700" />
        </DropdownMenuTrigger>

        <DropdownMenuContent className="w-56 p-2 shadow-xl rounded-xl bg-white border border-gray-200">
          <DropdownMenuGroup>
            <DropdownMenuItem className="w-full px-3 py-2 hover:bg-blue-100 rounded-md transition">
              <Link
                href="/account/sign-in"
                className="w-full text-sm font-medium text-gray-800"
              >
                Sign in
              </Link>
            </DropdownMenuItem>
          </DropdownMenuGroup>

          <DropdownMenuLabel className="text-sm text-gray-600 px-3 pt-2">
            <div className="font-normal">
              Not have an account?{" "}
              <Link
                href="/account/sign-up"
                className="text-blue-500 hover:underline"
              >
                Sign up
              </Link>
            </div>
          </DropdownMenuLabel>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default UserButton;
