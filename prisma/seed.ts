// This file is used for seeding items to the database.
import data from "@/lib/data";
import { prisma } from "./prisma";

async function main() {
  try {
    const { products } = data;
    // Delete an existing product first.
    await prisma.product.deleteMany();

    // Function to seed product to database
    const createdProducts = await prisma.product.createMany({
      data: products,
    });
    console.log({ createdProducts, message: "Seeded database successfully" });
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
