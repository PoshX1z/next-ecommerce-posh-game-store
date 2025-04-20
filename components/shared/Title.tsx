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
        <div className="py-10 px-4 group cursor-pointer max-w-64">
          <div className="bg-gradient-to-br from-purple-600 via-pink-500 to-red-500 rounded-2xl p-5 shadow-2xl transform transition-all duration-500 hover:scale-105 hover:shadow-pink-300">
            <h1
              className="text-2xl font-extrabold text-white text-center tracking-widest drop-shadow-md 
                 transition-all duration-300 group-hover:tracking-[.25em] group-hover:text-yellow-100"
            >
              {title}
            </h1>
          </div>
        </div>
      ) : medium ? (
        <div className="py-10 px-4 group cursor-pointer max-w-128">
          <div className="bg-gradient-to-br from-purple-600 via-pink-500 to-red-500 rounded-2xl p-5 shadow-2xl transform transition-all duration-500 hover:scale-105 hover:shadow-pink-300">
            <h1
              className="text-3xl font-extrabold text-white text-center tracking-widest drop-shadow-md 
                 transition-all duration-300 group-hover:tracking-[.25em] group-hover:text-yellow-100"
            >
              {title}
            </h1>
          </div>
        </div>
      ) : large ? (
        <div className="py-10 px-4 group cursor-pointer max-w-screen">
          <div className="bg-gradient-to-br from-purple-600 via-pink-500 to-red-500 rounded-2xl p-10 shadow-2xl transform transition-all duration-500 hover:scale-105 hover:shadow-pink-300">
            <h1
              className="text-5xl font-extrabold text-white text-center tracking-widest drop-shadow-md 
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
