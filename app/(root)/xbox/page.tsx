import ProductCard from "@/components/shared/product/ProductCard";
import Title from "@/components/shared/Title";
import { getProductsByPlatform } from "@/prisma/actions/product.actions";

export default async function Page() {
  const xboxProducts = await getProductsByPlatform({ platform: "Xbox" });

  return (
    <div>
      <Title title="Xbox" large />

      <div className="product-wrapper">
        {xboxProducts.map((xboxProduct) => (
          <ProductCard key={xboxProduct.slug} product={xboxProduct} />
        ))}
      </div>
    </div>
  );
}
