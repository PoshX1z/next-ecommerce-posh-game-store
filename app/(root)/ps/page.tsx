import ProductCard from "@/components/shared/product/ProductCard";
import Title from "@/components/shared/Title";
import { getProductsByPlatform } from "@/prisma/actions/product.actions";

export default async function Page() {
  const psProducts = await getProductsByPlatform({ platform: "PS" });

  return (
    <div>
      <Title title="PS" large />
      <div className="product-wrapper">
        {psProducts.map((psProduct) => (
          <ProductCard key={psProduct.slug} product={psProduct} />
        ))}
      </div>
    </div>
  );
}
