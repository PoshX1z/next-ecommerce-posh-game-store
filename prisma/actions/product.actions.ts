import { prisma } from "../prisma";

// Get product by platform.
export const getProductsByPlatform = async ({
  platform,
  limit = 10,
}: {
  platform: string;
  limit?: number;
}) => {
  const products = await prisma.product.findMany({
    where: {
      platform: platform,
    },
    orderBy: {
      createdAt: "desc",
    },
    take: limit,
  });
  return products;
};

// Get product by slug (use in product details page).
export const getProductsBySlug = async (slug: string) => {
  const products = await prisma.product.findFirst({
    where: {
      slug: slug,
    },
  });
  return products;
};
