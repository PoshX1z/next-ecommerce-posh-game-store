import { getProductsByTag } from "@/prisma/actions/product.actions";
import Testing from "./Testing";

export default async function Page() {
  const bestSellersProducts = await getProductsByTag("best-sellers");

  return (
    <div>
      <div className="product-wrapper">
        {bestSellersProducts.map((product) => (
          <Testing product={product} key={product.slug} />
        ))}
      </div>
    </div>
  );
}
