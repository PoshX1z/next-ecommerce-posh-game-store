"use client";
import { useCartStore } from "@/hooks/useCartStore";
import { useWishListStore } from "@/hooks/useWishListStore";
import { IProductInput } from "@/types";
import { Heart, HeartOff, ShoppingCart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { toast } from "sonner";

const ProductCard = ({ product }: { product: IProductInput }) => {
  const addToCart = useCartStore((state) => state.addToCart);

  const addToWishlist = useWishListStore((state) => state.addToWishlist);
  const removeFromWishlist = useWishListStore(
    (state) => state.removeFromWishlist
  );
  const isInWishlist = useWishListStore((state) => state.isInWishlist);
  const [isWishlisted, setIsWishlist] = useState(false);

  useEffect(() => {
    setIsWishlist(isInWishlist(product.slug));
  }, [product.slug, isInWishlist]);

  const handleWishlist = () => {
    if (isInWishlist(product.slug)) {
      removeFromWishlist(product.slug);
      setIsWishlist(false);
      toast.info(`${product.name} removed from wishlist`);
    } else {
      addToWishlist(product);
      setIsWishlist(true);

      toast.success(`${product.name} added to wishlist`);
    }
  };

  const handleAddToCart = () => {
    addToCart(product);
    toast.success(`${product.name} added to cart successfully`, {
      description: "View it in your cart or continue shopping",
    });
  };
  return (
    <li className="list-none w-[118px] h-80 sm:w-48 sm:h-64 md:w-52 md:h-80 lg:w-60 lg:h-[480px] rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 bg-gradient-to-br from-sky-950 to-sky-900 border border-sky-700 pb-1">
      <div className="relative w-full h-40 lg:h-80">
        <Link href={product.slug} className="group block w-full h-full">
          <Image
            src={product.image}
            alt={product.name}
            fill
            priority
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </Link>

        <div className="absolute top-2 left-2 w-6 h-6 lg:w-10 lg:h-10 shadow-2xl bg-black rounded-full">
          <Image
            src={product.platformImageIcon}
            alt={product.platform}
            width={40}
            height={40}
            priority
          />
        </div>
      </div>

      <div className="flex flex-col justify-between  h-1/2 sm:h-5/12 md:h-2/5 lg:h-1/3 p-2 bg-sky-950 rounded-xl shadow-inner">
        <p className="h-12 md:h-16 text-base md:text-lg text-white font-semibold text-center line-clamp-2">
          {product.name}
        </p>

        <span className="text-white font-bold text-base lg:text-lg text-center">
          ฿{product.price.toLocaleString()}
        </span>

        <div className="flex justify-center items-center gap-4 mt-2">
          <button
            className="flex items-center justify-center w-10 h-10 rounded-full bg-red-400 hover:bg-red-500 transition-colors cursor-pointer"
            onClick={handleWishlist}
          >
            {isWishlisted ? (
              <HeartOff className="text-white w-5 h-5" />
            ) : (
              <Heart className="text-white w-5 h-5" />
            )}
          </button>

          <button
            className="flex items-center justify-center w-10 h-10 rounded-full bg-green-400 hover:bg-green-500 transition-colors cursor-pointer"
            onClick={handleAddToCart}
          >
            <ShoppingCart className="text-white w-5 h-5" />
          </button>
        </div>
      </div>
    </li>
  );
};

export default ProductCard;
