import { prisma } from "@/lib/prisma";
import { TransactionStatus } from "@/app/generated/prisma/client";

interface GetTransactionsOptions {
  search?: string;
  status?: TransactionStatus;
}

export async function getTransactions({
  search,
  status,
}: GetTransactionsOptions) {
  return prisma.transaction.findMany({
    where: {
      ...(status && { status }),

      ...(search && {
        OR: [
          {
            description: {
              contains: search,
              mode: "insensitive",
            },
          },
          {
            vendor: {
              contains: search,
              mode: "insensitive",
            },
          },
        ],
      }),
    },

    include: {
      client: true,
    },

    orderBy: {
      date: "desc",
    },
  });
}