import ProductCard from "@/saves/ProductCard";
import Title from "@/components/shared/Title";
import { getProductsByPlatform } from "@/prisma/actions/product.actions";

export default async function Page() {
  const xboxProducts = await getProductsByPlatform({ platform: "Xbox" });

  return (
    <div>
      <Title title="XBOX" large />

      <div className="product-wrapper">
        {xboxProducts.map((xboxProduct) => (
          <ProductCard key={xboxProduct.slug} product={xboxProduct} />
        ))}
      </div>
    </div>
  );
}
