import { prisma } from "../prisma";

export const getNewsByCategory = async (category: string) => {
  const news = await prisma.news.findMany({
    where: {
      category: category,
    },
  });
  return news;
};

export const getNewsBySlug = async (slug: string) => {
  const news = await prisma.news.findFirst({
    where: {
      slug: slug,
    },
  });
  return news;
};

export const getRelatedNews = async ({
  category,
  excludeSlug,
  limit = 10,
}: {
  category: string;
  excludeSlug: string;
  limit?: number;
}) => {
  const news = await prisma.news.findMany({
    where: {
      category: category,
      NOT: {
        slug: excludeSlug,
      },
    },
  });

  const shuffledProducts = news.sort(() => Math.random() - 0.5);

  return shuffledProducts.slice(0, limit);
};
