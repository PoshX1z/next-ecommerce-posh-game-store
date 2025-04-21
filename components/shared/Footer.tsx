"use client";
import React from "react";
import { Button } from "../ui/button";
import { ChevronUp } from "lucide-react";
import { APP_NAME } from "@/lib/constants";

const Footer = () => {
  return (
    <footer className="bg-indigo-950 text-white mt-20">
      {/* Back to top */}
      <div className="flex justify-center sticky top-0 z-50">
        <Button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="rounded-none w-full bg-indigo-800 hover:bg-indigo-700 text-white"
        >
          <ChevronUp className="mr-2" />
          Back to top
        </Button>
      </div>

      {/* Footer content */}
      <div className="px-10 py-10">
        <div className="flex flex-wrap justify-around gap-10 border-t border-indigo-800 pt-10">
          {/* Section 1 */}
          <div>
            <p className="text-xl font-bold mb-4">{APP_NAME}</p>
            <ul className="space-y-2 text-sm text-indigo-200">
              <li className="hover:text-white cursor-pointer">
                ABOUT OUR STORE
              </li>
              <li className="hover:text-white cursor-pointer">
                PRIVACY & SECURITY
              </li>
              <li className="hover:text-white cursor-pointer">TERMS OF USE</li>
              <li className="hover:text-white cursor-pointer">DEV BLOG</li>
              <li className="hover:text-white cursor-pointer">
                PRESS RELEASES
              </li>
              <li className="hover:text-white cursor-pointer">ALL GAMES</li>
            </ul>
          </div>

          {/* Section 2 */}
          <div>
            <p className="text-xl font-bold mb-4">MY PROFILE</p>
            <ul className="space-y-2 text-sm text-indigo-200">
              <li className="hover:text-white cursor-pointer">DASHBOARD</li>
              <li className="hover:text-white cursor-pointer">
                PURCHASE HISTORY
              </li>
              <li className="hover:text-white cursor-pointer">MY WALLET</li>
            </ul>
          </div>

          {/* Section 3 */}
          <div>
            <p className="text-xl font-bold mb-4">HELP CENTER</p>
            <ul className="space-y-2 text-sm text-indigo-200">
              <li className="hover:text-white cursor-pointer">
                CONTACT SUPPORT
              </li>
              <li className="hover:text-white cursor-pointer">FAQ</li>
              <li className="hover:text-white cursor-pointer">
                TROUBLESHOOTING
              </li>
            </ul>
          </div>

          {/* Section 4 */}
          <div>
            <p className="text-xl font-bold mb-4">CONNECT WITH US</p>
            <ul className="space-y-2 text-sm text-indigo-200">
              <li className="hover:text-white cursor-pointer">
                CUSTOMER SUPPORT
              </li>
              <li className="hover:text-white cursor-pointer">
                BUSINESS INQUIRIES
              </li>
            </ul>
          </div>

          {/* Section 5 */}
          <div>
            <p className="text-xl font-bold mb-4">DISCOVER</p>
            <ul className="space-y-2 text-sm text-indigo-200">
              <li className="hover:text-white cursor-pointer">COMING SOON</li>
              <li className="hover:text-white cursor-pointer">PATCH NOTES</li>
              <li className="hover:text-white cursor-pointer">DEV UPDATES</li>
            </ul>
          </div>
        </div>

        {/* Bottom Text */}
        <div className="border-t border-indigo-800 mt-10 pt-6 text-center text-sm text-indigo-300">
          Copyright © {APP_NAME}.com 2025. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
