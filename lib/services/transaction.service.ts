import { prisma } from "@/lib/prisma";
import { TransactionStatus } from "@/app/generated/prisma/client";

interface GetTransactionsOptions {
  search?: string;
  status?: TransactionStatus;

  page?: number;
  limit?: number;
}

export async function getTransactions({
  search,
  status,
  page,
  limit
}: GetTransactionsOptions) {
  const currentPage = page ?? 1;
const pageSize = limit ?? 20;

const skip = (currentPage - 1) * pageSize;
const total = await prisma.transaction.count({

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

});

const transactions = await prisma.transaction.findMany({

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

    skip,

    take: pageSize,

});

return {

    transactions,

    pagination: {

        page: currentPage,

        limit: pageSize,

        total,

        totalPages: Math.ceil(total / pageSize),

    },

};
}