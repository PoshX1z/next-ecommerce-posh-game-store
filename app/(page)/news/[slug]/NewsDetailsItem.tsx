import { INewsInput } from "@/types";
import Image from "next/image";
import React from "react";

const NewsDetailsItem = ({ news }: { news: INewsInput }) => {
  return (
    <div>
      <div>
        <Image src={news.image} alt={news.title} width={1280} height={900} />
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mt-10">
          {news.title}
        </h1>
        <h2 className="text-2xl md:text-3xl text-gray-200 font-bold mt-5">
          {news.briefDetails}
        </h2>
        <div className="border border-b my-10"></div>
        <h2 className="text-2xl md:text-3xl font-bold ">Main Content:</h2>
        <p className="text-xl md:text-2xl mt-10 tracking-wider">
          {news.content}
        </p>
      </div>
    </div>
  );
};

export default NewsDetailsItem;
