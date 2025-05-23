"use client";

import { Input } from "@/components/ui/input";
import { useCartStore } from "@/hooks/useCartStore";
import data from "@/lib/data";
import { generateRandomOrderNumber } from "@/lib/utils";

import { CreditCard } from "lucide-react";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const CheckoutForm = () => {
  const { status } = useSession();
  const router = useRouter();
  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/account/sign-in");
    }
  }, [status, router]);

  const cart = useCartStore((state) => state.cart);
  const clearCart = useCartStore((state) => state.clearCart);
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  /* Payment Section */
  const [selected, setSelected] = useState("");
  const handleOrderSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const createdAt = new Date().toISOString();
    const newOrder = {
      items: cart.map((item) => ({
        ...item,
        orderNumber: generateRandomOrderNumber(),
        createdAt,
      })),
      totalItems,
      totalPrice,
    };

    // Get existing orders (or start fresh if none exist)
    const existingOrders = JSON.parse(
      localStorage.getItem("all-orders") || "[]"
    );

    // Append new order to existing
    const updatedOrders = [...existingOrders, newOrder];

    // Save back to localStorage
    localStorage.setItem("all-orders", JSON.stringify(updatedOrders));

    // Optionally, keep last order separately if still needed
    localStorage.setItem("last-order", JSON.stringify(newOrder));

    router.push("/account/order");
    clearCart();
  };
  const [discountCode, setDiscountCode] = useState("");
  const [appliedDiscountCode, setAppliedDiscountCode] = useState(0);

  const handleDiscountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const code = e.target.value.trim().toLowerCase();
    setDiscountCode(code);

    const found = data.discountCode.find((d) => d.code.toLowerCase() === code);
    if (found) {
      setAppliedDiscountCode(found.discount);
    } else {
      setAppliedDiscountCode(0);
    }
  };

  const discountedPrice = totalPrice * (appliedDiscountCode / 100);
  const discountedPriceTotal =
    totalPrice - (totalPrice * appliedDiscountCode) / 100;
  return (
    <div className="flex gap-10 flex-col md:flex-row">
      <div className="flex-2">
        <div className="border-b border-white py-5 mt-10">
          <Link
            href="/cart"
            className="flex px-5 md:px-0 gap-3 md:ap-5 hover:text-red-300 transition ease-in-out"
          >
            &lt;
            <h1 className="text-xl">View Cart</h1>
          </Link>
        </div>

        <h1 className="text-3xl font-bold mt-5 text-center md:text-left">
          Payment
        </h1>
        <div className="flex flex-col gap-5 mt-10">
          <div className="bg-sky-950 flex flex-col gap-5 p-3 md:p-5 rounded-xl">
            <div className="flex gap-5 items-center justify-between">
              <div className="flex gap-5 items-center">
                <Input
                  type="radio"
                  name="payment"
                  value="promptpay"
                  checked={selected === "promptpay"}
                  onChange={() => setSelected("promptpay")}
                  className="w-8 h-8"
                />
                <h1 className="text-lg md:text-2xl">
                  Promptpay (Preferred Payment Method)
                </h1>
              </div>
              <Image
                src="/images/icons/promptpay.png"
                alt="promptpay"
                width={60}
                height={60}
              />
            </div>
            {selected === "promptpay" ? (
              <form
                onSubmit={handleOrderSubmit}
                className="flex flex-col gap-5"
              >
                <div className="flex flex-col gap-5">
                  <div className="flex flex-col gap-2">
                    <label>Email Address</label>
                    <Input
                      type="email"
                      required
                      placeholder="Type your email..."
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label>Name</label>
                    <Input
                      type="text"
                      required
                      placeholder="Type your name..."
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label>Phone Number</label>
                    <Input required placeholder="Type your phone..." />
                  </div>
                </div>
                <button
                  type="submit"
                  className="bg-sky-500 p-2 md:p-5 cursor-pointer text-lg md:text-2xl hover:brightness-95 active:brightness-100"
                >
                  BUY NOW
                </button>
              </form>
            ) : (
              ""
            )}
          </div>
          <div className="bg-sky-950 flex flex-col gap-5 p-3 md:p-5 rounded-xl">
            <div className="flex gap-5 items-center justify-between">
              <div className="flex gap-5 items-center">
                <Input
                  type="radio"
                  name="payment"
                  value="paypal"
                  checked={selected === "paypal"}
                  onChange={() => setSelected("paypal")}
                  className="w-6 h-6 md:w-8 md:h-8"
                />
                <h1 className="text-lg md:text-2xl">Paypal</h1>
              </div>
              <svg
                role="img"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 md:w-8 md:h-8 text-sky-500"
                fill="currentColor"
              >
                <title>PayPal</title>
                <path d="M7.016 19.198h-4.2a.562.562 0 0 1-.555-.65L5.093.584A.692.692 0 0 1 5.776 0h7.222c3.417 0 5.904 2.488 5.846 5.5-.006.25-.027.5-.066.747A6.794 6.794 0 0 1 12.071 12H8.743a.69.69 0 0 0-.682.583l-.325 2.056-.013.083-.692 4.39-.015.087zM19.79 6.142c-.01.087-.01.175-.023.261a7.76 7.76 0 0 1-7.695 6.598H9.007l-.283 1.795-.013.083-.692 4.39-.134.843-.014.088H6.86l-.497 3.15a.562.562 0 0 0 .555.65h3.612c.34 0 .63-.249.683-.585l.952-6.031a.692.692 0 0 1 .683-.584h2.126a6.793 6.793 0 0 0 6.707-5.752c.306-1.95-.466-3.744-1.89-4.906z" />
              </svg>
            </div>
            {selected === "paypal" ? (
              <div>
                <form
                  onSubmit={handleOrderSubmit}
                  className="flex flex-col gap-5"
                >
                  <div className="flex flex-col gap-5">
                    <div className="flex flex-col gap-2">
                      <label>Email Address</label>
                      <Input
                        type="email"
                        required
                        placeholder="Type your email..."
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label>Password</label>
                      <Input
                        type="password"
                        required
                        placeholder="Type your password"
                      />
                    </div>
                  </div>
                  <button
                    type="submit"
                    className="bg-sky-500 p-2 md:p-5 cursor-pointer text-lg md:text-2xl hover:brightness-95 active:brightness-100"
                  >
                    BUY NOW
                  </button>
                </form>
              </div>
            ) : (
              ""
            )}
          </div>
          <div className="bg-sky-950 flex flex-col gap-5 p-3 md:p-5 rounded-xl">
            <div className="flex gap-5 items-center justify-between">
              <div className="flex gap-5 items-center">
                <Input
                  type="radio"
                  name="payment"
                  value="card"
                  checked={selected === "card"}
                  onChange={() => setSelected("card")}
                  className="w-6 h-6 md:w-8 md:h-8"
                />
                <h1 className="text-lg md:text-2xl">Credit/Debit Card</h1>
              </div>
              <CreditCard className="w-6 h-6 md:w-8 md:h-8" />
            </div>
            {selected === "card" ? (
              <form onSubmit={handleOrderSubmit}>
                <div className="flex flex-col gap-5">
                  <div className="flex flex-col gap-2">
                    <label>Card number</label>
                    <Input required placeholder="Type your card number..." />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label>Name on card</label>
                    <Input
                      type="text"
                      required
                      placeholder="Type your name on card..."
                    />
                  </div>
                  <div className="flex gap-5">
                    <div className="flex flex-col gap-2 flex-1">
                      <label>Expire date</label>
                      <Input
                        required
                        placeholder="Type your card's expire date..."
                      />
                    </div>
                    <div className="flex flex-col gap-2 flex-1">
                      <label>CVV</label>
                      <Input required placeholder="Type your cvv..." />
                    </div>
                  </div>
                  <button
                    type="submit"
                    className="bg-sky-500 p-2 md:p-5 cursor-pointer text-lg md:text-2xl hover:brightness-95 active:brightness-100"
                  >
                    BUY NOW
                  </button>
                </div>
              </form>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
      <div className="bg-sky-900 px-10 py-5 mt-10 flex-1 rounded-xl">
        <h1 className="text-2xl md:text-3xl mt-5 border-b border-white py-5">
          Order Summary
        </h1>
        <div className="overflow-y-auto py-5 space-y-6 max-h-96">
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
                <p className="text-yellow-200 font-bold text-base md:text-lg">
                  ฿{item.price.toLocaleString()} ({item.quantity})
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-2 pt-5">
          <label>Discount Code</label>
          <Input
            value={discountCode}
            onChange={handleDiscountChange}
            placeholder="Enter discount code..."
          />
        </div>
        <div className="pt-10 pb-5">
          <div className="flex justify-between">
            <h1 className="text-lg md:text-2xl font-bold">Total Items:</h1>

            <span className="text-lg md:text-2xl font-bold">{totalItems}</span>
          </div>
          <div className="border-b border-white pt-5"></div>

          <div className="flex justify-between pt-5">
            <h1 className="text-xl md:text-2xl font-bold">Sub Total:</h1>

            <span className="text-2xl md:text-3xl font-bold">
              ฿{totalPrice.toLocaleString()}
            </span>
          </div>
          <div className="flex justify-between items-center text-xl md:text-2xl font-bold mt-5">
            Discounted:
            {appliedDiscountCode > 0 ? (
              <span className="text-gray-200">
                -฿{discountedPrice.toLocaleString()}
              </span>
            ) : (
              <div className="text-lg text-gray-200">none</div>
            )}
          </div>
          <div className="flex justify-between pt-5">
            <h1 className="text-2xl md:text-3xl font-extrabold">
              Total Price:
            </h1>

            <span className="text-2xl md:text-3xl font-extrabold">
              ฿{discountedPriceTotal.toLocaleString()}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutForm;
