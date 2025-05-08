import { INewsInput } from "@/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const NewsCard = ({
  news,
  large = false,
  small = true,
}: {
  news: INewsInput;
  large?: boolean;
  small?: boolean;
}) => {
  return (
    <div>
      {large ? (
        <Link
          href={`/news/${news.slug}`}
          className="relative block group transition-transform hover:scale-105"
        >
          <Image
            src={news.image}
            alt={news.title}
            width={600}
            height={400}
            className="rounded-lg object-cover w-full h-auto "
          />
          <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-black/80 to-transparent z-10 rounded-b-lg" />

          <h1 className="absolute bottom-8 md:bottom-14 left-5 text-white text-xl md:text-2xl font-bold z-20 line-clamp-1 drop-shadow-lg ">
            {news.title}
          </h1>

          <p className="absolute bottom-2 md:bottom-5 left-5 text-white text-sm md:text-base z-20 line-clamp-1 drop-shadow-md">
            {news.briefDetails}
          </p>
        </Link>
      ) : small ? (
        <Link
          href="/"
          className="relative block group transition-transform hover:scale-105"
        >
          <Image
            src={news.image}
            alt="test"
            width={290}
            height={200}
            className="rounded-md object-cover w-full h-auto transition-transform"
          />

          <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-black/70 to-transparent z-10 rounded-b-md" />

          <h1 className="absolute bottom-6 md:bottom-8 left-3 text-white text-sm md:text-lg font-bold z-20 line-clamp-1 drop-shadow">
            {news.title}
          </h1>

          <p className="absolute bottom-2 left-3 text-white text-xs z-20 line-clamp-1 drop-shadow">
            {news.briefDetails}
          </p>
        </Link>
      ) : null}
    </div>
  );
};

export default NewsCard;
