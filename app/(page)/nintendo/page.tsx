import ProductCard from "@/components/shared/product/ProductCard";
import Title from "@/components/shared/Title";
import { getProductsByPlatform } from "@/prisma/actions/product.actions";

export default async function Page() {
  const nintendoProducts = await getProductsByPlatform({
    platform: "Nintendo",
  });

  return (
    <div>
      <Title title="Nintendo" large />

      <div className="product-wrapper">
        {nintendoProducts.map((nintendoProduct) => (
          <ProductCard key={nintendoProduct.slug} product={nintendoProduct} />
        ))}
      </div>
    </div>
  );
}
