import ProductCard from "@/components/shared/product/ProductCard";
import Title from "@/components/shared/Title";
import { getProductsByPlatform } from "@/prisma/actions/product.actions";

export default async function Page() {
  const steamProducts = await getProductsByPlatform({
    platform: "Steam",
    limit: 999,
  });
  const epicGameProducts = await getProductsByPlatform({
    platform: "Epic Game",
  });
  const ubisoftProducts = await getProductsByPlatform({
    platform: "Ubisoft",
  });
  return (
    <div>
      <Title title="PC" large />

      <Title title="STEAM" small />

      <div className="product-wrapper">
        {steamProducts.map((steamProduct) => (
          <ProductCard key={steamProduct.slug} product={steamProduct} />
        ))}
      </div>
      <Title title="Epic Game" small />

      <div className="product-wrapper">
        {epicGameProducts.map((epicGameProduct) => (
          <ProductCard key={epicGameProduct.slug} product={epicGameProduct} />
        ))}
      </div>
      <Title title="Ubisoft" small />

      <div className="product-wrapper">
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
