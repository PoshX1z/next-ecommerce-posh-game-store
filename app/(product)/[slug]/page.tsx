import ProductCard from "@/saves/ProductCard";
import Title from "@/components/shared/Title";
import {
  getProductsBySlug,
  getRelatedProducts,
} from "@/prisma/actions/product.actions";
import { Heart, ShoppingCartIcon } from "lucide-react";
import Image from "next/image";

// Generate metadata (for SEO purpose).
export async function generateMetadata(props: {
  params: Promise<{ slug: string }>;
}) {
  const params = await props.params;
  const product = await getProductsBySlug(params.slug);

  if (!product) {
    return { title: "Product not found" };
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
      <div className="min-h-screen text-white px-6 md:px-16 py-10">
        <div className="flex flex-col md:flex-row gap-10">
          {/* Left: Game Cover */}
          <div className="relative w-72 h-[500px] rounded-lg overflow-hidden shadow-lg border border-indigo-700">
            <Image
              src={product?.image ?? "/placeholder.png"}
              alt={product?.name ?? "image"}
              fill
              className="object-cover"
              priority
            />
            <button className="absolute top-2 right-2 p-1 bg-black/60 rounded-full">
              <Heart className="text-white w-5 h-5" />
            </button>
          </div>

          {/* Right: Game Info */}
          <div className="flex-1 space-y-6">
            {/* Title */}
            <h1 className="text-2xl md:text-3xl font-bold tracking-wide">
              {product?.name}
            </h1>

            {/* Platform + Edition + Review */}
            <div className="grid grid-cols-3 text-sm md:text-base text-gray-300 bg-[#1a1332] rounded-lg px-4 py-3">
              <div>
                <p className="uppercase text-xs text-gray-400">Platform</p>
                <p>{product?.platform}</p>
              </div>
              <div>
                <p className="uppercase text-xs text-gray-400">Edition</p>
                <p>{product?.edition}</p>
              </div>
              <div>
                <p className="uppercase text-xs text-gray-400">Reviewed</p>
                <p className="text-green-400 font-bold">{product?.review}%</p>
              </div>
            </div>

            {/* Price Section */}
            <div className="flex items-center gap-6">
              <div>
                <p className="text-3xl font-extrabold text-white">
                  ฿{product?.price}
                </p>
              </div>
            </div>

            {/* Buy Buttons */}
            <div className="flex gap-4 flex-wrap">
              <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-lg flex items-center gap-2 transition">
                <ShoppingCartIcon className="w-5 h-5" />
                Buy Now
              </button>
              <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-6 py-2 rounded-lg transition">
                Promptpay
              </button>
            </div>

            {/* Features */}
            <div className="space-y-2 text-sm text-gray-300">
              <p className="flex items-center gap-2">
                ✅ Can activate in Thailand
              </p>
              <p className="flex items-center gap-2">✅ Currently in stock</p>
              <p className="flex items-center gap-2">
                📦 Code delivered to you digitally
              </p>
              <p className="flex items-center gap-2">
                💰 Earn 1% cashback when purchasing
              </p>
            </div>

            {/* Description */}
            <div>
              <h2 className="text-lg font-semibold mb-2">Description</h2>
              <p className="text-gray-300 text-sm">{product?.description}</p>
            </div>

            {/* Game Details Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm text-gray-400 border-t border-gray-700 pt-4">
              <p>
                <span className="text-white">Release Date:</span>{" "}
                {product?.releaseDate}
              </p>
              <p>
                <span className="text-white">Developer:</span>{" "}
                {product?.developer}
              </p>
              <p>
                <span className="text-white">Publisher:</span>{" "}
                {product?.publisher}
              </p>
              <p>
                <span className="text-white">Platform:</span>{" "}
                {product?.platform}
              </p>
              <p>
                <span className="text-white">Delivery:</span>{" "}
                {product?.delivery}
              </p>
              <p>
                <span className="text-white">Review:</span> {product?.review}%
              </p>
            </div>
          </div>
        </div>

        <div className="py-30">
          <Title title="You may look for:" medium />
          <div className="product-wrapper">
            {relatedProducts.map((product) => (
              <ProductCard key={product.slug} product={product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
