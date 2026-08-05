import { prisma } from "@/lib/prisma";

export async function getDashboardSummary() {

  const [

    total,

    pending,

    approved,

    overridden,

  ] = await Promise.all([

    prisma.transaction.count(),

    prisma.transaction.count({
      where: {
        status: "PENDING",
      },
    }),

    prisma.transaction.count({
      where: {
        status: "APPROVED",
      },
    }),

    prisma.transaction.count({
      where: {
        status: "OVERRIDDEN",
      },
    }),

  ]);

  return {

    total,

    pending,

    approved,

    overridden,

  };

}