import ProductCard from "@/components/shared/product/ProductCard";
import Title from "@/components/shared/Title";
import { getProductsByPlatform } from "@/prisma/actions/product.actions";

export default async function Page() {
  const steamProducts = await getProductsByPlatform({
    platform: "Steam",
    limit: 40,
  });
  const epicGameProducts = await getProductsByPlatform({
    platform: "Epic Game",
  });
  const ubisoftProducts = await getProductsByPlatform({
    platform: "Ubisoft",
  });
  return (
    <div>
      <Title title="PC:" small />
      <div className="flex gap-5 flex-wrap justify-center px-4 py-6">
        {steamProducts.map((steamProduct) => (
          <ProductCard key={steamProduct.slug} product={steamProduct} />
        ))}
      </div>
      <div className="flex gap-5 flex-wrap justify-center px-4 py-6">
        {epicGameProducts.map((epicGameProduct) => (
          <ProductCard key={epicGameProduct.slug} product={epicGameProduct} />
        ))}
      </div>
      <div className="flex gap-5 flex-wrap justify-center px-4 py-6">
        {ubisoftProducts.map((ubisoftProduct) => (
          <ProductCard key={ubisoftProduct.slug} product={ubisoftProduct} />
        ))}
      </div>
    </div>
  );
}

/* 


        <div className="flex gap-5 flex-wrap justify-center px-4 py-6">
          {bestSellersProducts.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>

*/
