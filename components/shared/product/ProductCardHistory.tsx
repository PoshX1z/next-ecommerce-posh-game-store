"use client";
import React from "react";
import { formatDate } from "@/lib/utils";
import useDeviceType from "@/hooks/useDeviceType";
/* eslint-disable @typescript-eslint/no-explicit-any */

const ProductCardHistory = ({ order }: { order: any }) => {
  const deviceType = useDeviceType();
  return (
    <div>
      {deviceType === "desktop" ? (
        <div className="space-y-2 w-full pt-2">
          {/* Order Row */}
          <div className="bg-white rounded-md px-4 py-3 flex items-center justify-between text-sm md:text-base text-black shadow-sm hover:bg-gray-100 transition">
            <div className="flex gap-6 items-center">
              <span className="font-semibold">ORDER:</span>
              <span className="font-normal truncate max-w-[140px]">
                #{order.orderNumber}
              </span>

              <span className="font-semibold">NAME:</span>
              <span className="font-normal">{order.name}</span>

              <span className="font-semibold">DATE:</span>
              <span className="font-normal">{formatDate(order.createdAt)}</span>

              <span className="font-semibold">PRICE:</span>
              <span className="text-green-600">
                ฿{order.price.toLocaleString()}
              </span>
            </div>
          </div>
        </div>
      ) : (
        <div className="space-y-2 w-full pt-2">
          {/* Order Row */}
          <div className="bg-white rounded-md px-4 py-3 flex items-center justify-between text-sm md:text-base text-black shadow-sm hover:bg-gray-100 transition">
            <div className="flex flex-col flex-wrap gap-3">
              <div className="flex">
                <span className="font-semibold w-20">ORDER:</span>
                <span className="font-normal truncate max-w-[140px]">
                  #{order.orderNumber}
                </span>
              </div>
              <div className="flex">
                <span className="font-semibold w-20">NAME:</span>
                <span className="font-normal">{order.name}</span>
              </div>
              <div className="flex">
                <span className="font-semibold w-20">DATE:</span>
                <span className="font-normal">
                  {formatDate(order.createdAt)}
                </span>
              </div>
              <div className="flex">
                <span className="font-semibold w-20">PRICE:</span>
                <span className="text-green-600">
                  ฿{order.price.toLocaleString()}
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductCardHistory;
/* 
<div className="bg-yellow-100 text-yellow-900 p-4 rounded text-center font-medium shadow text-2xl">
You have not bought anything
</div> */
