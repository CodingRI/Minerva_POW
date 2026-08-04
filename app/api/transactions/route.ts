import { NextResponse } from "next/server";
import { getTransactions } from "@/lib/services/transaction.service";

export async function GET(request: Request) {

  const { searchParams } = new URL(request.url);

  const search = searchParams.get("search") ?? undefined;

  const status = searchParams.get("status") ?? undefined;

  const transactions = await getTransactions({
    search,
    status: status as any,
  });

  return NextResponse.json(transactions);

}