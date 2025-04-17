import React from "react";
import HeaderTop from "./HeaderTop";
import { APP_NAME } from "@/lib/constants";
import Link from "next/link";
import SearchBar from "./SearchBar";
import Menu from "./Menu";
import data from "@/lib/data";

const Header = () => {
  return (
    <div>
      {/* Header Top */}
      <div className="hidden md:block">
        <HeaderTop />
      </div>
      {/* Header Content */}
      <div className="flex justify-between items-center p-4">
        <div>
          <Link href="/" className="font-extrabold text-5xl">
            {APP_NAME}
          </Link>
        </div>
        <div className="flex-1 max-w-xl">
          <SearchBar />
        </div>

        <Menu />
      </div>

      {/* Header menu button */}
      <div className="flex flex-row gap-10 items-center justify-center p-2 font-bold">
        {data.headerMenus.map((menu) => (
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
