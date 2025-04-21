import ProductCard from "@/components/shared/product/ProductCard";
import Title from "@/components/shared/Title";
import { getProductsByTag } from "@/prisma/actions/product.actions";

export default async function Page() {
  const dailyDealProducts = await getProductsByTag("daily-deals");

  return (
    <div>
      <Title title="Daily Deals" large />

      <div className="product-wrapper">
        {dailyDealProducts.map((product) => (
          <ProductCard key={product.slug} product={product} />
        ))}
      </div>
    </div>
  );
}
