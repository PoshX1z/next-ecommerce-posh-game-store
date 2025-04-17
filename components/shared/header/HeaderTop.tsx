import { Download } from "lucide-react";
import React from "react";

const HeaderTop = () => {
  return (
    /* Header Top */
    <div className="flex justify-between items-center bg-indigo-700 p-2 text-sm text-white font-bold">
      {/* Safe & Secure */}
      <div className="bg-blue-400 p-1">
        <p> SAFE & SECURE</p>
        <span>100% SECURE AND 24H SUPPORT</span>
      </div>
      {/* Excellent ⭐⭐⭐ trust pilot*/}
      <div>Excellent ⭐⭐⭐ Trustpilot</div>
      {/* Super fast instantly digital download */}
      <div className="flex gap-2 items-center bg-blue-400 p-1">
        <Download />
        <div>
          <p>SUPER FAST</p>
          <span>INSTANT DIGITAL DOWNLOAD</span>
        </div>
      </div>
    </div>
  );
};

export default HeaderTop;
