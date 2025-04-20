import React from "react";

const Title = ({ title }: { title: string }) => {
  return (
    <div className="py-10 px-4 sm:px-6 lg:px-8 max-w-screen-md mx-auto group cursor-pointer">
      <div className="bg-gradient-to-br from-purple-600 via-pink-500 to-red-500 rounded-2xl p-10 shadow-2xl transform transition-all duration-500 hover:scale-105 hover:shadow-pink-300">
        <h1
          className="text-4xl sm:text-5xl font-extrabold text-white text-center tracking-widest drop-shadow-md 
                 transition-all duration-300 group-hover:tracking-[.25em] group-hover:text-yellow-100"
        >
          {title}
        </h1>
      </div>
    </div>
  );
};

export default Title;
