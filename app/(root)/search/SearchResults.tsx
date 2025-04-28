"use client";
import ProductCard from "@/saves/ProductCard";
import Title from "@/components/shared/Title";
import { IProductInput } from "@/types";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";

// Main function to search.
const SearchResults = () => {
  const searchParams = useSearchParams(); // Accesses query parameter.
  const query = searchParams.get("q") || ""; // Retrieves "q" value
  const [products, setProducts] = useState<IProductInput[]>([]);

  // Function to fetch products based on the query.
  useEffect(() => {
    const fetchProducts = async () => {
      if (!query) return "";
      const res = await fetch(`/api/search?q=${encodeURIComponent(query)}`);
      const data = await res.json();
      setProducts(data);
    };
    fetchProducts();
  }, [query]);
  return (
    <div>
      <div className="flex items-center gap-3 lg:gap-5">
        <Title title="Search Result for " medium />
        <Title title={`${query}`} small />
      </div>

      {products.length > 0 ? (
        <div className="product-wrapper">
          {products.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      ) : (
        <p className="font-extrabold text-5xl">No products found.</p>
      )}
    </div>
  );
};

export default SearchResults;
