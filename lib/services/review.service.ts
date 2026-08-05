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

export async function overrideTransaction(
  id: string,
  category: string
) {

  return prisma.$transaction(async (tx) => {

    const current = await tx.transaction.findUnique({
      where: {
        id,
      },
    });

    if (!current) {
      throw new Error("Transaction not found");
    }

    const updated = await tx.transaction.update({
      where: {
        id,
      },

      data: {
        finalCategory: category,
        status: "OVERRIDDEN",
      },
    });

    await tx.auditLog.create({
      data: {

        transactionId: id,

        action: "OVERRIDDEN",

        oldCategory: current.suggestedCategory,

        newCategory: category,

        performedBy: "Demo Accountant",
      },
    });

    return updated;

  });

}