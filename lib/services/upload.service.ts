import { prisma } from "@/lib/prisma";
import { ParsedTransaction } from "@/lib/csv/parser";

export async function saveTransactions(
  transactions: ParsedTransaction[],
  filename: string
) {

  const client = await prisma.client.upsert({
    where: {
      name: "Demo Accounting Firm",
    },
    update: {},
    create: {
      name: "Demo Accounting Firm",
    },
  });

for (const transaction of transactions) {
  await prisma.transaction.create({
    data: {
      clientId: client.id,

      date: new Date(transaction.date),

      description: transaction.description,

      vendor: transaction.vendor,

      amount: transaction.amount,

      suggestedCategory: transaction.suggestedCategory,

      confidence: transaction.confidence,

      reasoning: transaction.reasoning,

      status: "PENDING",
    },
  });
}

const upload = await prisma.upload.create({
  data: {
    filename,
    transactionCount: transactions.length,
    status: "completed",
  }
});

return {
  imported: transactions.length,
  uploadId: upload.id
};

}