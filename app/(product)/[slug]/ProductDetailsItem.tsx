"use client";
import { useWishListStore } from "@/hooks/useWishListStore";
import { Heart, HeartOff, ShoppingCartIcon } from "lucide-react";
import Image from "next/image";
import { toast } from "sonner";
import { IProductInput } from "@/types";
import { useEffect, useState } from "react";
import { useCartStore } from "@/hooks/useCartStore";
import { useRouter } from "next/navigation";
const ProductDetailsItem = ({ product }: { product: IProductInput }) => {
  const router = useRouter();
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

  const handleAddToCartAndGoToCheckoutPage = () => {
    addToCart(product);
    toast.success(`${product.name} added to cart successfully`, {
      description: "View it in your cart or continue shopping",
    });
    router.push("/checkout");
  };
  return (
    <div className="flex flex-col md:flex-row gap-10 items-center md:items-start">
      <div className="relative w-44 h-56 sm:w-56 sm:h-80 md:w-72 md:h-[500px] lg:w-96 lg:h-[600px] rounded-lg overflow-hidden shadow-lg border border-indigo-700">
        <Image
          src={product.image ?? "/placeholder.png"}
          alt={product.name ?? "image"}
          fill
          priority
          sizes="(min-width: 1024px) 384px, (min-width: 768px) 288px, (min-width: 640px) 224px, 176px"
          className="object-cover"
        />
        <div className="absolute top-2 left-2 w-6 h-6 lg:w-10 lg:h-10 shadow-2xl bg-black rounded-full">
          <Image
            src={product.platformImageIcon}
            alt={product.platform}
            width={40}
            height={40}
            priority
          />
        </div>
        <button className="absolute top-2 right-2 p-1 bg-black/60 rounded-full">
          {isWishlisted ? (
            <HeartOff
              className="cursor-pointer hover:text-sky-500 active:scale-95 transition duration-150 ease-in-out bg-red-500 rounded-full"
              onClick={handleWishlist}
            />
          ) : (
            <Heart
              className="cursor-pointer hover:text-red-400 active:scale-95 transition duration-150 ease-in-out"
              onClick={handleWishlist}
            />
          )}
        </button>
      </div>
      {/* Right: Game Info */}
      <div className="flex-1 space-y-6">
        {/* Title */}
        <h1 className="text-2xl md:text-3xl font-bold tracking-wide">
          {product?.name}
        </h1>

        {/* Platform + Edition + Review */}
        <div className="grid grid-cols-3 text-sm md:text-base text-gray-300 bg-[#1a1332] rounded-lg px-4 py-3">
          <div>
            <p className="uppercase text-xs text-gray-400">Platform</p>
            <p>{product?.platform.toUpperCase()}</p>
          </div>
          <div>
            <p className="uppercase text-xs text-gray-400">Edition</p>
            <p>{product?.edition}</p>
          </div>
          <div>
            <p className="uppercase text-xs text-gray-400">Reviewed</p>
            <p className="text-green-400 font-bold">{product?.review}%</p>
          </div>
        </div>

        {/* Price Section */}
        <div className="flex items-center gap-6">
          <div>
            <p className="text-3xl font-extrabold text-white px-1">
              ฿{product?.price.toLocaleString()}
            </p>
          </div>
        </div>

        {/* Buy Buttons */}
        <div className="flex gap-4 flex-wrap">
          <button
            className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-lg flex items-center gap-2 transition"
            onClick={handleAddToCart}
          >
            <ShoppingCartIcon className="w-5 h-5" />
            Buy Now
          </button>
          <button
            className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-6 py-2 rounded-lg transition"
            onClick={handleAddToCartAndGoToCheckoutPage}
          >
            Promptpay
          </button>
        </div>

        {/* Features */}
        <div className="space-y-2 text-sm text-gray-300">
          <p className="flex items-center gap-2 text-base md:text-2xl">
            ✅ Region: Thailand Ready
          </p>
          <p className="flex items-center gap-2 text-base md:text-2xl">
            ✅ Instant Access Available
          </p>
          <p className="flex items-center gap-2 text-base md:text-2xl">
            📦 Get Your Game Code Instantly
          </p>
          <p className="flex items-center gap-2 text-base md:text-2xl">
            💰 Earn 1% Cash Back on Purchase
          </p>
        </div>

        {/* Description */}
        <div>
          <h2 className="text-lg md:text-2xl font-semibold mb-2">
            Description
          </h2>
          <p className="text-gray-300 text-sm md:text-lg">
            {product?.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsItem;
