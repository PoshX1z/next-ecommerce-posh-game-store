"use client";
import React from "react";
import { APP_NAME } from "@/lib/constants";
import Link from "next/link";
import SearchBar from "./SearchBar";
import Menu from "./Menu";
import data from "@/lib/data";
import useDeviceType from "@/hooks/useDeviceType";

const Header = () => {
  const deviceType = useDeviceType();
  const displayMenuItems =
    deviceType === "mobile" ? 4 : data.headerMenus.length;
  return (
    <div>
      {/* Header Content */}
      <div className="flex justify-between items-center p-4">
        <div>
          <Link
            href="/"
            className="font-extrabold text-lg md:text-2xl lg:text-5xl"
          >
            {APP_NAME}
          </Link>
        </div>
        <div className="hidden lg:block flex-1 max-w-xl">
          <SearchBar />
        </div>

        <Menu />
      </div>

      <div className="lg:hidden">
        <SearchBar />
      </div>

      {/* Header menu button */}
      <div className="flex flex-row gap-2 sm:gap-4 md:gap-6 lg:gap-10 items-center justify-center p-2 font-bold text-xs sm:text-sm md:text-base lg:text-lg">
        {data.headerMenus.slice(0, displayMenuItems).map((menu) => (
          <Link
            key={menu.href}
            href={menu.href}
            className="hover:bg-blue-500 hover:text-white transition duration-200 ease-in-out p-2 rounded-md"
          >
            {menu.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Header;
