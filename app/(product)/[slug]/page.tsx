import { getProductsBySlug } from "@/prisma/actions/product.actions";

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

  return (
    <div>
      <h1>{product?.name}</h1>
      <h1>{product?.description}</h1>
    </div>
  );
}
