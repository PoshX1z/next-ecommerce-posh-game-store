import { Download } from "lucide-react";
import React from "react";

const HeaderTop = () => {
  return (
    /* Header Top */
    <div className="flex justify-between items-center bg-indigo-700 text-white text-sm font-bold px-6 py-3 gap-4 flex-wrap">
      {/* Safe & Secure */}
      <div className="bg-blue-500 px-4 py-2 rounded-lg shadow-md">
        <p className="text-xs tracking-widest">SAFE & SECURE</p>
        <span className="text-[11px] font-normal block mt-1">
          100% SECURE AND 24H SUPPORT
        </span>
      </div>

      {/* Excellent ⭐⭐⭐ Trustpilot */}
      <div className="text-center text-xl bg-green-600 px-4 py-2 rounded-lg shadow-md tracking-widest">
        Excellent <span className="text-yellow-300">⭐⭐⭐</span> Trustpilot
      </div>

      {/* Super fast instantly digital download */}
      <div className="flex items-center gap-3 bg-blue-500 px-4 py-2 rounded-lg shadow-md">
        <Download className="w-5 h-5 text-white" />
        <div>
          <p className="text-xs tracking-widest">SUPER FAST</p>
          <span className="text-[11px] font-normal block mt-1">
            INSTANT DIGITAL DOWNLOAD
          </span>
        </div>
      </div>
    </div>
  );
};

export default HeaderTop;
