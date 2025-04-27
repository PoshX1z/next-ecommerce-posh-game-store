"use client";
import React from "react";

const Title = ({
  title,
  small,
  medium,
  large,
}: {
  title: string;
  small?: boolean;
  medium?: boolean;
  large?: boolean;
}) => {
  return (
    <div>
      {small ? (
        <div className="py-4 lg:py-10 group cursor-pointer max-w-32 sm:max-w-40 md:max-w-52 lg:max-w-64">
          <div className="bg-gradient-to-br from-green-600 via-blue-500 to-indigo-500 rounded-2xl p-2 sm:p-3 md:p-4 lg:p-5 shadow-2xl transform transition-all duration-500 hover:scale-105 hover:shadow-sky-300">
            <h1
              className="text-base sm:text-lg md:text-xl lg:text-2xl font-extrabold text-white text-center tracking-widest drop-shadow-md 
                       transition-all duration-300 group-hover:tracking-[.25em] group-hover:text-yellow-100"
            >
              {title}
            </h1>
          </div>
        </div>
      ) : medium ? (
        <div className="py-4 lg:py-10 group cursor-pointer max-w-64 sm:max-w-80 md:max-w-96 lg:max-w-128">
          <div
            className="bg-gradient-to-br from-purple-600 via-pink-500 to-red-500 rounded-2xl p-3 lg:p-5
           shadow-2xl transform transition-all duration-500 hover:scale-105 hover:shadow-pink-300"
          >
            <h1
              className="text-base sm:text-xl md:text-2xl lg:text-3xl
               font-extrabold text-white text-center tracking-widest drop-shadow-md 
                 transition-all duration-300 group-hover:tracking-[.25em] group-hover:text-yellow-100"
            >
              {title}
            </h1>
          </div>
        </div>
      ) : large ? (
        <div
          className="py-4 lg:py-10
           group cursor-pointer w-full"
        >
          <div
            className="bg-gradient-to-br from-purple-600 via-pink-500 to-red-500 rounded-2xl p-2 sm:p-4 md:p-6 lg:p-10
            shadow-2xl transform transition-all duration-500 hover:scale-105 hover:shadow-pink-300"
          >
            <h1
              className="text-base sm:text-2xl md:text-3xl lg:text-5xl
               font-extrabold text-white text-center tracking-widest drop-shadow-md 
               transition-all duration-300 group-hover:tracking-[.25em] group-hover:text-yellow-100"
            >
              {title}
            </h1>
          </div>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default Title;
