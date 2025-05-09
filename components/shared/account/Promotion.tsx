import React from "react";
import SideTab from "./SideTab";

const Promotion = () => {
  return (
    <div className="pt-10">
      <div className="flex flex-col md:flex-row gap-6">
        <SideTab />

        <div className="flex-1">
          <h1 className="text-3xl text-center font-bold text-white mb-4 border-b border-white pb-5">
            PROMOTION
          </h1>
          <div className="flex gap-5 items-center justify-left pt-5">
            <span className="text-3xl bg-sky-800 p-2 rounded-xl">
              Discount code:
            </span>
            <span className="font-bold text-3xl bg-sky-500 p-2 rounded-xl">
              poshstore555
            </span>
          </div>
          <div className="flex gap-5 items-center justify-left pt-5">
            <span className="text-3xl bg-sky-800 p-2 rounded-xl">
              Discount code:
            </span>
            <span className="font-bold text-3xl bg-sky-500 p-2 rounded-xl">
              pratchaya
            </span>
          </div>
          <div className="flex gap-5 items-center justify-left pt-5">
            <span className="text-3xl bg-sky-800 p-2 rounded-xl">
              Discount code:
            </span>
            <span className="font-bold text-3xl bg-sky-500 p-2 rounded-xl">
              leelanuwat
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Promotion;
