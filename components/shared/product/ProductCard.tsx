import { IProductInput } from "@/types";
import { Heart, ShoppingCart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProductCard = ({ product }: { product: IProductInput }) => {
  return (
    <li className="list-none w-72 h-96 flex flex-col justify-between rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 bg-gradient-to-br from-sky-950 to-sky-900 border border-sky-700">
      <div className="relative w-full h-3/4">
        <Link href={product.slug} className="group block w-full h-full">
          <Image
            src={product.image}
            alt={product.name}
            fill
            priority
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </Link>

        {/* Icons with their own links */}
        <div className="absolute top-2 right-2 flex gap-2 z-10">
          <Link href="/favor" className="z-20">
            <div className="bg-white/80 rounded-full p-2 hover:bg-white transition">
              <Heart className="w-5 h-5 text-red-500" />
            </div>
          </Link>
          <Link href="/cart" className="z-20">
            <div className="bg-white/80 rounded-full p-2 hover:bg-white transition">
              <ShoppingCart className="w-5 h-5 text-sky-700" />
            </div>
          </Link>
        </div>
      </div>

      <div className="p-1 h-1/4 flex flex-col justify-center">
        <h1 className="text-base font-semibold text-white text-center line-clamp-2 mb-1">
          {product.name}
        </h1>
        <div className="text-center text-lg font-bold text-yellow-300">
          ฿{product.price.toLocaleString()}
        </div>
      </div>
    </li>
  );
};

export default ProductCard;
