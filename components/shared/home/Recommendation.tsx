import data from "@/lib/data";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Recommendation = () => {
  return (
    <div className="flex gap-5 max-w-7xl py-6">
      {data.products.map((product) => (
        <div className="w-64 h-80" key={product.slug}>
          <div className="relative w-64 h-80">
            <Link href={product.slug}>
              <Image
                src={product.image}
                alt={product.name}
                fill
                priority
                className="object-cover"
              />
              <Image
                src={product.platformImageIcon}
                alt={product.platform}
                width={40}
                height={40}
                className="absolute top-2 right-2"
              />
            </Link>
          </div>
          {product.name}
        </div>
      ))}
    </div>
  );
};

export default Recommendation;
