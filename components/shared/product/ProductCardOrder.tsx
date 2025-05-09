import { formatDate } from "@/lib/utils";
import Image from "next/image";
import React from "react";
/* eslint-disable @typescript-eslint/no-explicit-any */

const ProductCardOrder = ({ order }: { order: any }) => {
  return (
    <li className="list-none bg-white rounded-xl overflow-hidden shadow-lg">
      <div className="flex flex-col md:flex-row">
        {/* Game Image */}
        <div className="p-3 md:p-5 bg-gray-100 flex justify-center items-center">
          <div className="relative w-72 h-60 sm:w-96 md:w-56 md:h-80 rounded-xl overflow-hidden shadow-md">
            <Image
              src={order.image}
              alt={order.name}
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Order Details */}
        <div className="bg-gray-200 flex-1 px-6 py-6 space-y-2 text-sm md:text-base">
          <h1 className="text-black font-semibold">
            ORDER NUMBER:{" "}
            <span className="font-normal">#{order.orderNumber}</span>
          </h1>
          <h1 className="text-black font-semibold">
            NAME: <span className="font-normal">{order.name}</span>
          </h1>
          <h1 className="text-black font-semibold">
            DATE ORDERED:{" "}
            <span className="font-normal">{formatDate(order.createdAt)}</span>
          </h1>

          <h1 className="text-black font-semibold">
            PLATFORM: <span className="font-normal">{order.platform}</span>
          </h1>
          <h1 className="text-black font-semibold">
            PRICE:{" "}
            <span className="font-normal">฿{order.price.toLocaleString()}</span>
          </h1>
        </div>

        {/* Action Section */}
        <div className="bg-gray-100 px-6 py-6 w-full md:w-1/3 flex flex-col justify-between gap-4 text-sm md:text-base">
          {/* TODO: Warning Message */}
          <div className="bg-yellow-100 border border-yellow-400 text-yellow-800 p-3 rounded-md text-sm">
            ⚠️ Once you open the code, the product is non-refundable. <br />
            Please read all instructions carefully before proceeding.
          </div>

          {/* Get Code Button */}
          <button className="bg-blue-600 hover:bg-blue-700 transition text-white font-semibold py-2 px-4 rounded-md shadow">
            GET CODE +
          </button>

          {/* Help Center Link */}
          <button className="text-blue-700 hover:underline mt-2 font-medium">
            CONTACT HELP CENTER
          </button>
        </div>
      </div>
    </li>
  );
};

export default ProductCardOrder;
