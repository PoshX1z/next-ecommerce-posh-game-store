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

export const getProductsByTag = async (tag: string) => {
  const products = await prisma.product.findMany({
    where: {
      tag: tag,
    },
  });
  return products;
};

export const getRelatedProducts = async ({
  platform,
  excludeSlug,
  limit = 10,
}: {
  platform: string;
  excludeSlug: string;
  limit?: number;
}) => {
  const products = await prisma.product.findMany({
    where: {
      platform: platform,
      NOT: {
        slug: excludeSlug,
      },
    },
  });

  const shuffledProducts = products.sort(() => Math.random() - 0.5);

  return shuffledProducts.slice(0, limit);
};
