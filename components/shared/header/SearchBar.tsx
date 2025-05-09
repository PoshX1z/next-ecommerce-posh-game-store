"use client";
import { Input } from "@/components/ui/input";
import { SearchIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

const SearchBar = () => {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState("");

  // When click at search icon, then link to search page
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchTerm.trim())}`);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center px-2 md:px-0">
      <Input
        name="q"
        type="search"
        placeholder="Search game..."
        className="flex-1 rounded-3xl bg-white text-black text-sm lg:text-base"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
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
