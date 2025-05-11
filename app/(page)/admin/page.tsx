import ProductCard from "@/components/shared/product/ProductCard";
import { Button } from "@/components/ui/button";
import { getProductsByPlatform } from "@/prisma/actions/product.actions";

export default async function AdminPage() {
  const steamProducts = await getProductsByPlatform({
    platform: "Steam",
    limit: 999,
  });
  return (
    <div>
      Admin Page
      <div className="product-wrapper">
        {steamProducts.map((product) => (
          <div key={product.slug}>
            <ProductCard product={product} />
            <Button>Edit</Button>
            <Button>Remove</Button>
          </div>
        ))}
      </div>
    </div>
  );
}
