"use client";
import { useCartStore } from "@/hooks/useCartStore";
import { X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const CartSidebar = ({ onClose }: { onClose: () => void }) => {
  const cart = useCartStore((state) => state.cart);

  const increaseCartQuantity = useCartStore((state) => state.increaseQuantity);
  const decreaseCartQuantity = useCartStore((state) => state.decreaseQuantity);

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  return (
    <div className="fixed z-[999] top-0 right-0 h-screen w-full max-w-md bg-purple-950 shadow-2xl flex flex-col animate-slideInRight">
      <div className="px-8 py-5 border-b border-amber-900 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-white">🛒 My Cart</h1>
        <X
          onClick={onClose}
          className="text-white hover:text-red-500 transition"
        />
      </div>

      {cart.length === 0 ? (
        <div className="flex flex-col justify-center items-center mx-auto gap-2 pt-5">
          <p className="text-xl md:text-2xl font-bold text-red-500">
            There is no item in your cart
          </p>
          <Link
            href="/pc"
            className="underline text-xl md:text-2xl text-yellow-300"
          >
            Buy Something
          </Link>
        </div>
      ) : (
        <div className="flex-1 overflow-y-auto p-5 space-y-6">
          {cart.map((item) => (
            <div
              className="flex gap-4 items-start bg-sky-600 rounded-xl p-4 shadow-md"
              key={item.slug}
            >
              <div className="relative w-16 h-20 md:w-24 md:h-32 flex-shrink-0 rounded overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex-1 text-white space-y-2">
                <p className="text-base md:text-lg font-semibold">
                  {item.name}
                </p>

                <div className="flex items-center gap-2 w-1/3">
                  <button
                    className="bg-amber-900 text-white w-6 h-6 rounded hover:bg-amber-800"
                    onClick={() => decreaseCartQuantity(item.slug)}
                  >
                    −
                  </button>
                  <span className="font-bold">{item.quantity}</span>
                  <button
                    className="bg-amber-900 text-white w-6 md:h-6 rounded hover:bg-amber-800"
                    onClick={() => increaseCartQuantity(item.slug)}
                  >
                    +
                  </button>
                </div>

                <p className="text-yellow-200 font-bold text-base md:text-lg">
                  ฿{item.price.toLocaleString()}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Subtotal & Buttons */}
      {cart.length > 0 ? (
        <div className="p-5 border-t border-amber-900 space-y-4 justify-end">
          <div className="flex justify-between">
            <p className="text-white text-lg font-semibold">
              SUBTOTAL: ฿<span className="text-yellow-300">{totalPrice}</span>
            </p>
            <p>TOTAL: {totalItems} ITEMS</p>
          </div>

          <div className="flex flex-col gap-3">
            <Link href="/cart">
              <button className="w-full py-3 bg-indigo-500 text-white font-bold rounded-lg hover:bg-indigo-600 transition">
                VIEW CART
              </button>
            </Link>
            <Link href="/cart">
              <button className="w-full py-3 bg-green-500 text-white font-bold rounded-lg hover:bg-green-600 transition">
                SECURE CHECKOUT
              </button>
            </Link>
          </div>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default CartSidebar;

/* 

  //Cart Item

    <div className="flex-1 overflow-y-auto p-5 space-y-6">
    <div className="flex gap-4 items-start bg-sky-600 rounded-xl p-4 shadow-md">
      <div className="relative w-16 h-20 md:w-24 md:h-32 flex-shrink-0 rounded overflow-hidden">
        <Image
          src="/images/games/Control.png"
          alt="control"
          fill
          className="object-cover"
        />
      </div>
      <div className="flex-1 text-white space-y-2">
        <p className="text-base md:text-lg font-semibold">Control</p>

        <div className="flex items-center gap-2 w-1/3">
          <button className="bg-amber-900 text-white w-6 h-6 rounded hover:bg-amber-800">
            −
          </button>
          <span className="font-bold">1</span>
          <button className="bg-amber-900 text-white w-6 md:h-6 rounded hover:bg-amber-800">
            +
          </button>
        </div>

        <p className="text-yellow-200 font-bold text-base md:text-lg">
          $49
        </p>
      </div>
    </div>
  </div>


*/
