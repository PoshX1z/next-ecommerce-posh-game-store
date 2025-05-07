"use client";

import ProductCard from "@/components/shared/product/ProductCard";
import { useWishListStore } from "@/hooks/useWishListStore";
import Link from "next/link";

const WishListItemPage = () => {
  const wishlist = useWishListStore((state) => state.wishList);

  return (
    <div>
      {wishlist.length === 0 ? (
        <div className="flex flex-col justify-center items-center mx-auto gap-2">
          <p className="text-2xl md:text-3xl lg:text-4xl font-bold text-red-500">
            THERE IS NO ITEM IN WISHLIST
          </p>
          <Link
            href="/"
            className="underline text-xl md:text-2xl text-yellow-300"
          >
            RETURN TO HOMEPAGE
          </Link>
        </div>
      ) : (
        <div>
          <div className="product-wrapper">
            {wishlist.map((item) => (
              <ProductCard product={item} key={item.slug} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default WishListItemPage;
