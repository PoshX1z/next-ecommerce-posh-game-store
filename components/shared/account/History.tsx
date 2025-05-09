"use client";
import React, { useEffect, useState } from "react";
import ProductCardHistory from "../product/ProductCardHistory";
import SideTab from "./SideTab";
/* eslint-disable @typescript-eslint/no-explicit-any */

const History = () => {
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
          <h1 className="text-center text-3xl font-bold">HISTORY</h1>
          <div>
            <div className="border-b border-white my-5"></div>
          </div>
          {orders ? (
            ""
          ) : (
            <div className="bg-sky-500 text-white p-4 rounded text-center font-medium shadow text-2xl">
              You have no order history
            </div>
          )}
          {orders?.items.map((order) => (
            <ProductCardHistory order={order} key={order.slug} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default History;
