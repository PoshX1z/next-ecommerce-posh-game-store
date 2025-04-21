"use client";

import { Input } from "@/components/ui/input";
import { SearchIcon } from "lucide-react";

const SearchBar = () => {
  return (
    <form method="GET" action="/search" className="flex items-center">
      <Input
        name="q"
        type="search"
        placeholder="Search game..."
        className="flex-1 rounded-3xl bg-white text-black text-base"
      />
      <button
        type="submit"
        className="bg-blue-500 p-2 rounded-3xl text-white cursor-pointer hover:bg-blue-600 transition duration-200"
      >
        <SearchIcon />
      </button>
    </form>
  );
};

export default SearchBar;
