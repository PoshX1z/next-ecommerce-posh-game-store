"use client";
import useDeviceType from "@/hooks/useDeviceType";

import Link from "next/link";
import React from "react";

const SideTab = () => {
  const deviceType = useDeviceType();
  return (
    <div>
      {deviceType === "desktop" ? (
        <div className="flex flex-col items-end gap-10 bg-sky-950 p-10 w-80 rounded-xl">
          <Link href="/account/manage">
            <p className="text-lg md:text-xl font-bold hover:underline">
              MY ACCOUNT
            </p>
          </Link>
          <Link href="/account/order">
            <p className="text-lg md:text-xl font-bold hover:underline">
              MY ORDERS
            </p>
          </Link>
          <Link href="/account/history">
            <p className="text-lg md:text-xl font-bold hover:underline">
              HISTORY
            </p>
          </Link>
          <Link href="/account/promotion">
            <p className="text-lg md:text-xl font-bold hover:underline">
              PROMOTIONS
            </p>
          </Link>
        </div>
      ) : (
        <div className="flex justify-center gap-5">
          <div>
            <Link href="/account/manage">
              <p className="text-xs underline">MY ACCOUNT</p>
            </Link>
          </div>
          <div>
            <Link href="/account/order">
              <p className="text-xs underline">MY ORDERS</p>
            </Link>
          </div>
          <div>
            <Link href="/account/history">
              <p className="text-xs underline">HISTORY</p>
            </Link>
          </div>
          <div>
            <Link href="/account/promotion">
              <p className="text-xs underline">PROMOTION</p>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default SideTab;
