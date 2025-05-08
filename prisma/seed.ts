// This file is used for seeding items to the database.
import data from "@/lib/data";
import { prisma } from "./prisma";

async function main() {
  try {
    const { products, news } = data;
    // Delete an existing product first.
    await prisma.product.deleteMany();
    await prisma.news.deleteMany();

    // Function to seed product to database
    const createdProducts = await prisma.product.createMany({
      data: products,
    });
    const createdNews = await prisma.news.createMany({
      data: news,
    });
    console.log({
      createdProducts,
      message: "Product Seeded database successfully",
    });
    console.log({ createdNews, message: "News Seeded database successfully" });
  } catch (error) {
    console.log(error);
    throw new Error("Failed to seed database");
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
