import { ParsedTransaction } from "./parser";

export function validateTransactions(
  transactions: ParsedTransaction[]
) {
  if (transactions.length === 0) {
    throw new Error("CSV is empty");
  }

  for (const transaction of transactions) {
    if (
      !transaction.date ||
      !transaction.description ||
      !transaction.vendor
    ) {
      throw new Error("Missing required fields");
    }

    if (Number.isNaN(transaction.amount)) {
      throw new Error(
        `Invalid amount: ${transaction.amount}`
      );
    }

    if (Number.isNaN(Date.parse(transaction.date))) {
      throw new Error(
        `Invalid date: ${transaction.date}`
      );
    }
  }

  return true;
}