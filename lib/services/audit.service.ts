import { prisma } from "@/lib/prisma";

export async function getAuditLogs() {
  return prisma.auditLog.findMany({
    include: {
      transaction: {
        select: {
          description: true,

          vendor: true,

          amount: true,
        },
      },
    },

    orderBy: {
      createdAt: "desc",
    },
  });
}
