import { prisma } from "@/lib/prisma";

export async function approveTransaction(id: string) {
  return prisma.$transaction(async (tx) => {
    const transaction = await tx.transaction.update({
      where: {
        id,
      },

      data: {
        status: "APPROVED"
      },
    });

    await tx.auditLog.create({
      data: {
        transactionId: id,
        action: "APPROVED",
        performedBy: "Demo Accountant",
      },
    });

    return transaction;
  });
}