import HomeCarousal from "@/components/shared/home/HomeCarousel";
import ProductCard from "@/components/shared/product/ProductCard";
import Title from "@/components/shared/Title";
import data from "@/lib/data";
import { getProductsByTag } from "@/prisma/actions/product.actions";

export default async function Page() {
  const bestSellersProducts = await getProductsByTag("best-sellers");
  const dailyDealsProducts = await getProductsByTag("daily-deals");
  return (
    <div>
      <div className="pt-3">
        <HomeCarousal items={data.homeCarousels} />
        <Title title={"BEST SELLERS"} large />
        <div className="product-wrapper">
          {bestSellersProducts.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
        <Title title={"Daily Deals"} large />

        <div className="product-wrapper">
          {dailyDealsProducts.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}
