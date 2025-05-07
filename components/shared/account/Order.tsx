import React from "react";
import SideTab from "./SideTab";
import ProductCardOrder from "../product/ProductCardOrder";

const Order = () => {
  const order = 1;
  return (
    <div className="pt-10">
      <div className="flex gap-10">
        <SideTab />
        <div className="w-full md:w-3/4">
          <h1 className="text-center text-3xl font-bold">ORDER</h1>
          {order > 0 ? (
            <div>
              <h1 className="text-2xl pt-5 font-bold">ORDER PURCHASED:</h1>
              <div className="border-b border-white my-5"></div>
              <ProductCardOrder />
            </div>
          ) : (
            <div>THERE IS NO ORDER IN THIS ACCOUNT</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Order;
