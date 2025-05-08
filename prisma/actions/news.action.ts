import { prisma } from "../prisma";

export const getNewsByCategory = async (category: string) => {
  const news = await prisma.news.findMany({
    where: {
      category: category,
    },
  });
  return news;
};
