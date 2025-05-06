import ProductCard from "@/components/shared/product/ProductCard";
import Title from "@/components/shared/Title";
import {
  getProductsBySlug,
  getRelatedProducts,
} from "@/prisma/actions/product.actions";
import { notFound } from "next/navigation";
import ProductDetailsItem from "./ProductDetailsItem";

// Generate metadata (for SEO purpose).
export async function generateMetadata(props: {
  params: Promise<{ slug: string }>;
}) {
  const params = await props.params;
  const product = await getProductsBySlug(params.slug);

  if (!product) {
    return notFound();
  }
  return {
    title: product.name,
    description: product.description,
  };
}

export default async function ProductDetailsPage(props: {
  params: Promise<{ slug: string }>;
}) {
  const params = await props.params;
  const { slug } = params;
  const product = await getProductsBySlug(slug);

  const relatedProducts = await getRelatedProducts({
    platform: product?.platform ?? "steam",
    excludeSlug: product?.slug ?? "/",
  });

  return (
    <div>
      <div className="text-white py-5 md:py-10">
        {product && <ProductDetailsItem product={product} />}
      </div>

      {/* Game Details Grid */}
      <div className="w-full overflow-hidden rounded-2xl bg-blue-950 border border-blue-800 mt-6">
        <div className="grid grid-cols-2 md:grid-cols-3 text-sm text-gray-300">
          <div className="border-b border-blue-800 p-4 flex flex-col">
            <span className="text-white font-semibold">Release Date</span>
            <span className="mt-1">{product?.releaseDate}</span>
          </div>
          <div className="border-b border-blue-800 p-4 flex flex-col">
            <span className="text-white font-semibold">Developer</span>
            <span className="mt-1">{product?.developer}</span>
          </div>
          <div className="border-b border-blue-800 p-4 flex flex-col">
            <span className="text-white font-semibold">Publisher</span>
            <span className="mt-1">{product?.publisher}</span>
          </div>

          <div className="p-4 flex flex-col">
            <span className="text-white font-semibold">Platform</span>
            <span className="mt-1">{product?.platform}</span>
          </div>
          <div className="p-4 flex flex-col">
            <span className="text-white font-semibold">Delivery</span>
            <span className="mt-1">{product?.delivery}</span>
          </div>
          <div className="p-4 flex flex-col">
            <span className="text-white font-semibold">Review</span>
            <span className="mt-1">{product?.review}%</span>
          </div>
        </div>
      </div>

      <div className="py-10 md:py-20">
        <Title title="You may look for:" medium />
        <div className="product-wrapper">
          {relatedProducts.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}
