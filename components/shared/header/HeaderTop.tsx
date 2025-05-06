import { Download } from "lucide-react";
import React from "react";

/* Header Top */
const HeaderTop = () => {
  return (
    <div className="flex justify-between items-center bg-gradient-to-r from-indigo-800 to-indigo-950 text-white text-sm font-bold px-6 gap-4 flex-wrap">
      {/* INSTANT DELIVERY */}
      <div className="bg-gradient-to-r from-blue-500 to-blue-600 px-5 py-3 shadow-lg transition-transform duration-200 hover:scale-105 hover:shadow-xl cursor-pointer">
        <p className="text-xs tracking-widest">INSTANT DELIVERY</p>
        <span className="text-[11px] font-light block mt-1 text-white/80">
          GET YOUR GAME KEY RIGHT AFTER PAYMENT
        </span>
      </div>

      {/* VERIFIED PRODUCTS */}
      <div className="text-center text-lg bg-gradient-to-r from-green-500 to-green-600 px-6 py-3 shadow-lg tracking-widest transition-transform duration-200 hover:scale-105 hover:shadow-xl cursor-pointer">
        VERIFIED <span className="text-yellow-300">⭐⭐⭐⭐⭐</span> PRODUCTS
      </div>

      {/* DIGITAL PRODUCTS */}
      <div className="flex items-center gap-3 bg-gradient-to-r from-sky-500 to-sky-600 px-5 py-3 shadow-lg transition-transform duration-200 hover:scale-105 hover:shadow-xl cursor-pointer">
        <Download className="w-5 h-5 text-white" />
        <div>
          <p className="text-xs tracking-widest">DIGITAL ONLY</p>
          <span className="text-[11px] font-light block mt-1 text-white/80">
            NO SHIPPING – DOWNLOAD & PLAY INSTANTLY
          </span>
        </div>
      </div>
    </div>
  );
};

export default HeaderTop;
