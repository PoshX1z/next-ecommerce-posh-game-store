import ProductCard from "@/components/shared/product/ProductCard";
import Title from "@/components/shared/Title";
import { getProductsByPlatform } from "@/prisma/actions/product.actions";

export default async function Page() {
  const epicGameProducts = await getProductsByPlatform({
    platform: "Epic Game",
  });

  return (
    <div>
      <Title title="Epic Game" large />

      <div className="product-wrapper">
        {epicGameProducts.map((epicGameProduct) => (
          <ProductCard key={epicGameProduct.slug} product={epicGameProduct} />
        ))}
      </div>
    </div>
  );
}
