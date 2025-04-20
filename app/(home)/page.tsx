import HomeCarousal from "@/components/shared/home/HomeCarousel";
import ProductCard from "@/components/shared/product/ProductCard";
import Title from "@/components/shared/Title";
import data from "@/lib/data";
import { prisma } from "@/prisma/prisma";

export default async function Page() {
  const bestSellersProducts = await prisma.product.findMany({
    where: {
      tag: "best-sellers",
    },
  });
  const dailyDealsProducts = await prisma.product.findMany({
    where: {
      tag: "daily-deals",
    },
  });
  return (
    <div>
      <div className="pt-3">
        <HomeCarousal items={data.homeCarousels} />
        <Title title={"BEST SELLERS"} />
        <div className="flex gap-5 flex-wrap justify-center px-4 py-6">
          {bestSellersProducts.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
        <Title title={"Daily Deals"} />

        <div className="flex gap-5 flex-wrap justify-center px-4 py-6">
          {dailyDealsProducts.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}
