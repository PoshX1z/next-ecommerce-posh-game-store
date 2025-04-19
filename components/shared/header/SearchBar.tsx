import { Input } from "@/components/ui/input";
import { SearchIcon } from "lucide-react";
import React from "react";

const SearchBar = () => {
  return (
    <form method="GET" action="/search" className="flex items-center">
      <Input
        className="flex-1 rounded-3xl bg-white text-black text-base"
        placeholder="Search game..."
        name="q"
        type="search"
      />
      <button
        type="submit"
        className="bg-blue-500 p-2 rounded-3xl text-white cursor-pointer hover:bg-blue-600 transition duration-200 ease-in-out"
      >
        <SearchIcon />
      </button>
    </form>
  );
};

export default SearchBar;
