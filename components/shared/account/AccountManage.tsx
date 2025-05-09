"use client";
import React from "react";
import SideTab from "./SideTab";
import { useSession } from "next-auth/react";

const AccountManage = () => {
  const { data: session } = useSession();
  return (
    <div className="pt-10 text-white">
      <div className="flex flex-col md:flex-row gap-10">
        {/* Side Navigation */}
        <SideTab />

        {/* Account Content */}
        <div className="w-full md:w-3/4 bg-sky-950 p-6 rounded-2xl shadow-lg">
          <h1 className="text-3xl font-bold text-center mb-8">MY ACCOUNT</h1>

          <div className="space-y-6">
            {/* Section Header */}
            <div className="border-b border-sky-700 pb-2">
              <h2 className="text-lg font-semibold tracking-wide text-sky-300">
                ACCOUNT MANAGEMENT
              </h2>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <h2 className="text-md font-semibold text-sky-200">
                CONTACT INFORMATION
              </h2>
              <div className="bg-sky-800 rounded-xl p-4 shadow-inner">
                <p className="mb-2">
                  <span className="font-semibold text-sky-300">NAME:</span>{" "}
                  {session?.user?.name}
                </p>
                <p className="mb-2">
                  <span className="font-semibold text-sky-300">EMAIL:</span>{" "}
                  {session?.user?.email}
                </p>
                <p className="mb-2">
                  <span className="font-semibold text-sky-300">PHONE:</span> Not
                  Provided
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 pt-4">
              <button className="bg-sky-700 hover:bg-sky-600 transition-all text-white font-semibold py-2 px-4 rounded-lg shadow-md">
                CHANGE YOUR NAME
              </button>
              <button className="bg-sky-700 hover:bg-sky-600 transition-all text-white font-semibold py-2 px-4 rounded-lg shadow-md">
                CHANGE PASSWORD
              </button>
              <button className="bg-sky-700 hover:bg-sky-600 transition-all text-white font-semibold py-2 px-4 rounded-lg shadow-md">
                CHANGE PHONE NUMBER
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountManage;
