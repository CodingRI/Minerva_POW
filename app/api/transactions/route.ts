import { NextResponse } from "next/server";
import { getTransactions } from "@/lib/services/transaction.service";

export async function GET(request: Request) {

const { searchParams } = new URL(request.url);

const page = Number(searchParams.get("page") ?? "1");

const limit = Number(searchParams.get("limit") ?? "20");

const search = searchParams.get("search") ?? undefined;

const status = searchParams.get("status") ?? undefined;

const result = await getTransactions({

    page,

    limit,

    search,

    status: status as any,

});

return NextResponse.json(result);

}