"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Autoplay from "embla-carousel-autoplay";
const HomeCarousal = ({
  items,
}: {
  items: {
    name: string;
    image: string;
    href: string;
    buttonCaption: string;
  }[];
}) => {
  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: true })
  );
  return (
    <Carousel
      dir="ltr"
      plugins={[plugin.current]}
      className="w-full mx-auto"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent>
        {items.map((item) => (
          <CarouselItem key={item.name}>
            <Link href={item.href}>
              <div className="relative w-full h-[150px] md:h-[300px] lg:h-[600px]">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  priority
                  className="object-cover"
                />
                <h1 className="absolute bottom-8 right-8 z-10 px-2 py-2 sm:px-3 sm:py-2 md:px-4 md:py-3 lg:px-8 lg:py-5 text-white text-sm sm:text-lg md:text-xl lg:text-2xl font-semibold bg-gradient-to-r from-blue-600 to-purple-600 rounded-full shadow-lg backdrop-blur-sm hover:scale-105 transition-transform duration-300">
                  {item.buttonCaption}
                </h1>
              </div>
            </Link>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="absolute top-1/2 left-4 z-10 -translate-y-1/2 transform rounded-full bg-white p-2 text-gray-800 transition hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 dark:focus:ring-offset-gray-800" />
      <CarouselNext className="absolute top-1/2 right-4 z-10 -translate-y-1/2 transform rounded-full bg-white p-2 text-gray-800 transition hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 dark:focus:ring-offset-gray-800" />
    </Carousel>
  );
};

export default HomeCarousal;
