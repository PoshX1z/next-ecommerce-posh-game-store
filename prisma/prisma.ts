// Main connection file.
import { PrismaClient } from "./generated/client";

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

export const prisma =
  globalForPrisma.prisma ??
  new PrismaClient({
    log: ["query"], // Logs sql queries.
  });

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;

/* 
Actually, even for the simplest code, this file could have only one line: const prisma = new PrismaClient() and then be exported for use in other files. However, that is actually too risky; it can open too many connections, and your Next.js backend (with hot reloading, etc.) could break Prisma.
*/
