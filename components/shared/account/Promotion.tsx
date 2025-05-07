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
          <h1 className="text-red-400 text-2xl font-bold underline">
            THERE IS NO PROMOTION RIGHT NOW
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Promotion;
