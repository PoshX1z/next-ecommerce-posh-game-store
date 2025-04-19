import { prisma } from "../prisma";

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
