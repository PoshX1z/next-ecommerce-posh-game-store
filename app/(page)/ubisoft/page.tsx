import ProductCard from "@/components/shared/product/ProductCard";
import Title from "@/components/shared/Title";
import { getProductsByPlatform } from "@/prisma/actions/product.actions";

export default async function Page() {
  const ubisoftProducts = await getProductsByPlatform({ platform: "Ubisoft" });

  return (
    <div>
      <Title title="Ubisoft" large />

      <div className="product-wrapper">
        {ubisoftProducts.map((ubisoftProduct) => (
          <ProductCard key={ubisoftProduct.slug} product={ubisoftProduct} />
        ))}
      </div>
    </div>
  );
}
