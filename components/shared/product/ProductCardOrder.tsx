import Image from "next/image";
import React from "react";

const ProductCardOrder = () => {
  return (
    <li className="list-none bg-white rounded-xl overflow-hidden shadow-lg">
      <div className="flex flex-col md:flex-row">
        {/* Game Image */}
        <div className="px-5 py-5 bg-gray-100 flex justify-center items-center">
          <div className="relative w-40 h-60 md:w-56 md:h-80 rounded-xl overflow-hidden shadow-md">
            <Image
              src="/images/games/Control.png"
              alt="Control"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Order Details */}
        <div className="bg-gray-200 flex-1 px-6 py-6 space-y-2 text-sm md:text-base">
          <h1 className="text-black font-semibold">
            ORDER NUMBER: <span className="font-normal">34325245453afefd</span>
          </h1>
          <h1 className="text-black font-semibold">
            NAME: <span className="font-normal">Control</span>
          </h1>
          <h1 className="text-black font-semibold">
            DATE ORDERED: <span className="font-normal">10/12/2024</span>
          </h1>
          <h1 className="text-black font-semibold">
            PAYMENT METHOD: <span className="font-normal">PROMPTPAY</span>
          </h1>
          <h1 className="text-black font-semibold">
            PLATFORM: <span className="font-normal">EPIC GAME</span>
          </h1>
          <h1 className="text-black font-semibold">
            PRICE: <span className="font-normal">฿1299</span>
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
