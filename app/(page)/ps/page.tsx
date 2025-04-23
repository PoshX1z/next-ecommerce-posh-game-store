import ProductCard from "@/components/shared/product/ProductCard";
import Title from "@/components/shared/Title";
import { getProductsByPlatform } from "@/prisma/actions/product.actions";

export default async function Page() {
  const playstationProducts = await getProductsByPlatform({
    platform: "Playstation",
    limit: 999,
  });

  return (
    <div>
      <Title title="PLAYSTATION" large />
      <div className="product-wrapper">
        {playstationProducts.map((playstationProduct) => (
          <ProductCard
            key={playstationProduct.slug}
            product={playstationProduct}
          />
        ))}
      </div>
    </div>
  );
}
