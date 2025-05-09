"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from "react";
import SideTab from "./SideTab";
import ProductCardOrder from "../product/ProductCardOrder";

const Order = () => {
  const [orders, setOrders] = useState<{
    items: any[];
    totalItems: number;
    totalPrice: number;
  } | null>(null);

  useEffect(() => {
    const savedOrder = localStorage.getItem("last-order");
    if (savedOrder) {
      setOrders(JSON.parse(savedOrder));
    }
  }, []);

  return (
    <div className="pt-10">
      <div className="flex gap-10">
        <SideTab />
        <div className="w-full md:w-3/4">
          <h1 className="text-center text-3xl font-bold">ORDER</h1>
          <div>
            <div className="border-b border-white my-5"></div>
            <h1 className="text-2xl py-5 font-bold">ORDER PURCHASED:</h1>

            {orders ? (
              ""
            ) : (
              <div className="bg-sky-500 text-white p-4 rounded text-center font-medium shadow text-2xl">
                You do not have any orders
              </div>
            )}
            {orders?.items.map((order) => (
              <ProductCardOrder order={order} key={order.slug} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Order;
