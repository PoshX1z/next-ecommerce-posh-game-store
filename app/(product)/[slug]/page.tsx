import ProductCard from "@/components/shared/product/ProductCard";
import Title from "@/components/shared/Title";
import {
  getProductsBySlug,
  getRelatedProducts,
} from "@/prisma/actions/product.actions";
import { Heart, ShoppingCartIcon } from "lucide-react";
import Image from "next/image";
import { notFound } from "next/navigation";

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
      <div className="min-h-screen text-white py-10">
        <div className="flex flex-col md:flex-row gap-10 items-center md:items-start">
          {/* Left: Game Cover */}
          <div className="relative w-44 h-56 sm:w-52 sm:h-80 md:w-60 md:h-96 lg:w-72 lg:h-[500px] rounded-lg overflow-hidden shadow-lg border border-indigo-700">
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
                <p className="text-3xl font-extrabold text-white px-1">
                  ฿{product?.price.toLocaleString()}
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
              <p className="flex items-center gap-2 text-base md:text-2xl">
                ✅ Region: Thailand Ready
              </p>
              <p className="flex items-center gap-2 text-base md:text-2xl">
                ✅ Instant Access Available
              </p>
              <p className="flex items-center gap-2 text-base md:text-2xl">
                📦 Get Your Game Code Instantly
              </p>
              <p className="flex items-center gap-2 text-base md:text-2xl">
                💰 Earn 1% Cash Back on Purchase
              </p>
            </div>

            {/* Description */}
            <div>
              <h2 className="text-lg md:text-2xl font-semibold mb-2">
                Description
              </h2>
              <p className="text-gray-300 text-sm md:text-lg">
                {product?.description}
              </p>
            </div>
          </div>
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
    </div>
  );
}
