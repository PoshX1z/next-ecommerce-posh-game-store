import React from "react";
import SideTab from "./SideTab";

const History = () => {
  const order = 1;
  return (
    <div className="pt-10">
      <div className="flex flex-col md:flex-row gap-6">
        <SideTab />

        <div className="flex-1">
          <h1 className="text-3xl text-center font-bold text-white mb-4 border-b border-white pb-5">
            HISTORY
          </h1>

          {order > 0 ? (
            <div className="space-y-2 w-full pt-2">
              {/* Order Row */}
              <div className="bg-white rounded-md px-4 py-3 flex items-center justify-between text-sm md:text-base text-black shadow-sm hover:bg-gray-100 transition">
                <div className="flex flex-wrap md:flex-nowrap gap-6 items-center">
                  <span className="font-semibold">ORDER:</span>
                  <span className="font-normal truncate max-w-[140px]">
                    34325245453afefd
                  </span>

                  <span className="font-semibold">NAME:</span>
                  <span className="font-normal">
                    {`Control`.length > 10
                      ? `Control`.slice(0, 10) + "..."
                      : "Control"}
                  </span>

                  <span className="font-semibold">DATE:</span>
                  <span className="font-normal">10/12/2024</span>

                  <span className="font-semibold">METHOD:</span>
                  <span className="font-normal">PROMPTPAY</span>

                  <span className="font-semibold">PRICE:</span>
                  <span className="text-green-600">฿1299</span>
                </div>
              </div>
            </div>
          ) : (
            <div className="bg-yellow-100 text-yellow-900 p-4 rounded text-center font-medium shadow">
              YOU HAVE NOT BOUGHT ANYTHING YET
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default History;
