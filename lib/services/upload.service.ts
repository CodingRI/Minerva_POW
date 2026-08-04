import { prisma } from "@/lib/prisma";
import { ParsedTransaction } from "@/lib/csv/parser";

export async function saveTransactions(
  transactions: ParsedTransaction[]
) {

  //demo client for now
  const client = await prisma.client.upsert({
    where: {
      name: "Demo Accounting Firm",
    },
    update: {},
    create: {
      name: "Demo Accounting Firm",
    },
  });

  await prisma.transaction.createMany({

    data: transactions.map((transaction) => ({

      clientId: client.id,

      date: new Date(transaction.date),

      description: transaction.description,

      vendor: transaction.vendor,

      amount: transaction.amount,

      status: "PENDING",

    })),

  });

  return {
    imported: transactions.length,
  };
}