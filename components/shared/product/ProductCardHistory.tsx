import React from "react";
import SideTab from "../account/SideTab";
import { formatDate } from "@/lib/utils";
/* eslint-disable @typescript-eslint/no-explicit-any */

const ProductCardHistory = ({ order }: { order: any }) => {
  return (
    <div className="pt-10">
      <div className="flex flex-col md:flex-row gap-6">
        <SideTab />

        <div className="flex-1">
          <h1 className="text-3xl text-center font-bold text-white mb-4 border-b border-white pb-5">
            HISTORY
          </h1>
          <div className="space-y-2 w-full pt-2">
            {/* Order Row */}
            <div className="bg-white rounded-md px-4 py-3 flex items-center justify-between text-sm md:text-base text-black shadow-sm hover:bg-gray-100 transition">
              <div className="flex flex-wrap md:flex-nowrap gap-6 items-center">
                <span className="font-semibold">ORDER:</span>
                <span className="font-normal truncate max-w-[140px]">
                  #{order.orderNumber}
                </span>

                <span className="font-semibold">NAME:</span>
                <span className="font-normal">{order.name}</span>

                <span className="font-semibold">DATE:</span>
                <span className="font-normal">
                  {formatDate(order.createdAt)}
                </span>

                <span className="font-semibold">PRICE:</span>
                <span className="text-green-600">
                  ฿{order.price.toLocaleString()}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCardHistory;
/* 
<div className="bg-yellow-100 text-yellow-900 p-4 rounded text-center font-medium shadow text-2xl">
You have not bought anything
</div> */
