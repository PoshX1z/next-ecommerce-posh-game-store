import Link from "next/link";
import React from "react";

const SideTab = () => {
  return (
    <div>
      <div className="flex flex-col items-end gap-10 bg-sky-950 p-10 w-80 rounded-xl">
        <Link href="/account/manage" className="">
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
    </div>
  );
};

export default SideTab;
