"use client";
import { useCartStore } from "@/hooks/useCartStore";
import { Trash2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const CartItemPage = () => {
  const cart = useCartStore((state) => state.cart);

  const increaseCartQuantity = useCartStore((state) => state.increaseQuantity);
  const decreaseCartQuantity = useCartStore((state) => state.decreaseQuantity);
  const removeFromCart = useCartStore((state) => state.removeFromCart);
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  return (
    <div className="min-h-screen bg-[#003366] px-3 py-5 md:px-6 md:py-10 text-white">
      <div className="flex flex-col md:flex-row justify-between gap-5 md:gap-10">
        {cart.length === 0 ? (
          <div className="flex flex-col justify-center items-center mx-auto gap-2">
            <p className="text-2xl md:text-3xl lg:text-4xl font-bold text-red-500">
              There is no item in your cart
            </p>
            <Link
              href="/"
              className="underline text-xl md:text-2xl text-yellow-300"
            >
              Return to home page
            </Link>
          </div>
        ) : (
          <div className="flex flex-col gap-5 flex-3">
            {cart.map((item) => (
              <div className="space-y-6" key={item.slug}>
                <div className="flex relative gap-4 bg-sky-700 p-5 rounded-xl shadow-lg">
                  <button
                    className="hidden md:block absolute top-5 right-5 hover:text-red-500 transition ease-in-out"
                    onClick={() => removeFromCart(item.slug)}
                  >
                    <Trash2 />
                  </button>
                  <div className="relative w-24 h-40 md:w-32  md:h-44 flex-shrink-0 rounded overflow-hidden">
                    <Image
                      src={item.image}
                      alt="control"
                      fill
                      className="object-cover rounded"
                    />
                  </div>
                  <div className="flex flex-col justify-between flex-1 space-y-3">
                    <div>
                      <Link href={item.slug}>
                        <p className="text-base md:text-xl font-semibold line-clamp-1">
                          {item.name}
                        </p>
                        <p className="text-sm text-gray-300 md:text-lg font-semibold line-clamp-1">
                          {item.edition}
                        </p>
                        <p className="text-sm text-gray-300 md:text-lg font-semibold line-clamp-1">
                          {item.platform}
                        </p>
                      </Link>
                      <p className="text-yellow-300 font-bold text-base md:text-xl mt-5">
                        ฿{item.price.toLocaleString()}
                      </p>
                    </div>

                    <div className="flex items-center gap-3">
                      <button
                        className="w-8 h-8 bg-cyan-900 hover:bg-cyan-800 rounded text-white"
                        onClick={() => decreaseCartQuantity(item.slug)}
                      >
                        −
                      </button>
                      <span className="font-bold">{item.quantity}</span>
                      <button
                        className="w-8 h-8 bg-cyan-900 hover:bg-cyan-800 rounded text-white"
                        onClick={() => increaseCartQuantity(item.slug)}
                      >
                        +
                      </button>
                      <button
                        className="block md:hidden hover:text-red-500 transition ease-in-out"
                        onClick={() => removeFromCart(item.slug)}
                      >
                        <Trash2 />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Summary Section */}
        {cart.length > 0 ? (
          <div className="bg-sky-800 p-6 shadow-lg h-fit space-y-6 flex-1 rounded-xl">
            <h2 className="text-2xl font-bold border-b border-sky-600 pb-4">
              SUMMARY
            </h2>
            <div className="flex justify-between text-lg">
              <span>SUBTOTAL:</span>
              <span className="text-yellow-300 font-bold">
                ฿{totalPrice.toLocaleString()}
              </span>
            </div>
            <div className="flex justify-between text-lg">
              <span>TOTAL:</span>
              <span className="text-yellow-300 font-bold">
                {totalItems} ITEMS
              </span>
            </div>
            <div className="flex flex-col gap-4 pt-2">
              <Link href="/checkout">
                <button className="w-full py-3 bg-green-500 text-white font-bold rounded-lg hover:bg-green-600 transition">
                  PROCEED TO CHECKOUT
                </button>
              </Link>
            </div>
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};
export default CartItemPage;
/* 




 <div className="lg:col-span-2 space-y-6">
          <div className="flex flex-col md:flex-row gap-4 bg-sky-700 p-5 rounded-xl shadow-lg">
            <div className="relative w-full md:w-32 h-44 flex-shrink-0 rounded overflow-hidden">
              <Image
                src="/images/games/Control.png"
                alt="control"
                fill
                className="object-cover rounded"
              />
            </div>
            <div className="flex flex-col justify-between flex-1 space-y-3">
              <div>
                <h2 className="text-xl font-semibold">Control</h2>
                <p className="text-yellow-300 font-bold text-lg">$49</p>
              </div>

              <div className="flex items-center gap-3">
                <button className="w-8 h-8 bg-amber-800 hover:bg-amber-700 rounded text-white">
                  −
                </button>
                <span className="font-bold">1</span>
                <button className="w-8 h-8 bg-amber-800 hover:bg-amber-700 rounded text-white">
                  +
                </button>
              </div>
            </div>
          </div>
          
          
          */
