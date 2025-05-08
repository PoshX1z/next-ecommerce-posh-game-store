import { INewsInput } from "@/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const NewsForum = ({ news }: { news: INewsInput }) => {
  return (
    <div className="w-28 sm:w-30 md:w-60 lg:w-72 bg-white mb-5 transition-transform hover:scale-105">
      <Link href={`/news/${news.slug}`}>
        <Image
          src={news.image}
          alt={news.title}
          width={300}
          height={300}
          className="object-cover"
        />
      </Link>
      <div className="p-2">
        <h1 className="line-clamp-1 text-black font-bold text-base md:text-xl">
          {news.title}
        </h1>
        <p className="line-clamp-3 text-black text-xs md:text-base">
          {news.briefDetails}
        </p>
      </div>
    </div>
  );
};

export default NewsForum;
