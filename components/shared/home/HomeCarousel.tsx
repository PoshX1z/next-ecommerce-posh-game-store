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
      onMouseEnter={() => plugin.current.stop()}
      onMouseLeave={() => plugin.current.reset()}
    >
      <CarouselContent>
        {items.map((item) => (
          <CarouselItem key={item.name}>
            <Link href={item.href}>
              <div className="relative w-full md:h-[300px] lg:h-[600px]">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  priority
                  className="object-cover"
                />
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
