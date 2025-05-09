"use client";
import ProductCard from "@/components/shared/product/ProductCard";
import Title from "@/components/shared/Title";
import { IProductInput } from "@/types";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";

// Main function to search.
const SearchResults = () => {
  const searchParams = useSearchParams(); // Accesses query parameter.
  const query = searchParams.get("q") || ""; // Retrieves "q" value
  const [products, setProducts] = useState<IProductInput[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  // Function to fetch products based on the query.
  useEffect(() => {
    const fetchProducts = async () => {
      if (!query) return "";
      setIsLoading(true);
      await new Promise((resolve) => setTimeout(resolve, 300));

      try {
        const res = await fetch(`/api/search?q=${encodeURIComponent(query)}`);
        const data = await res.json();
        setProducts(data);
      } catch (error) {
        console.error("Search failed:", error);
        setProducts([]);
      } finally {
        setIsLoading(false);
      }
    };
    fetchProducts();
  }, [query]);
  return (
    <div>
      <div className="flex items-center gap-3 lg:gap-5">
        <Title title="Search Result for " medium />
        <Title title={`${query}`} small />
      </div>
      {isLoading ? (
        <p className="text-lg font-semibold">Loading...</p>
      ) : products.length > 0 ? (
        <div className="product-wrapper">
          {products.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      ) : (
        <p className="font-extrabold text-xl sm:text-2xl md:text-3xl lg:text-5xl">
          No products found.
        </p>
      )}
    </div>
  );
};

export default SearchResults;
