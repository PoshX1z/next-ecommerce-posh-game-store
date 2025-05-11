import { prisma } from "@/prisma/prisma";
import { NextRequest, NextResponse } from "next/server";

// Main search function. This function will handle GET requests to /api/search endpoint.
export async function GET(req: NextRequest) {
  // Extracts the "q" query from request url.
  const query = req.nextUrl.searchParams.get("q") || "";

  // Find products with name equal to query.
  const products = await prisma.product.findMany({
    where: {
      name: {
        contains: query,
        mode: "insensitive",
      },
    },
  });
  return NextResponse.json(products);
}
