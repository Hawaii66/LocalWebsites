import { PrismaClient } from "@prisma/client";

export default async function HandlePrismaConnection<T>(
  func: (prisma: PrismaClient) => Promise<T>,
) {
  const prisma = new PrismaClient();
  const data = func(prisma)
    .then(async (d) => {
      await prisma.$disconnect();
      return d;
    })
    .catch(async (e) => {
      console.error("Prisma error", e);
      await prisma.$disconnect();
      return undefined;
    });

  return await data;
}
