import { NextResponse } from "next/server";

import { parseCSV } from "@/lib/csv/parser";
import { saveTransactions } from "@/lib/services/upload.service";

export async function POST(request: Request) {
  try {
    const formData = await request.formData();

    const file = formData.get("file");

    if (!(file instanceof File)) {
      return NextResponse.json(
        { error: "CSV file is required" },
        { status: 400 }
      );
    }

    const transactions = await parseCSV(file);

    const summary = await saveTransactions(transactions);

    return NextResponse.json({
      message: "Transactions imported successfully",
      summary,
    });

  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { error: "Failed to process CSV" },
      { status: 500 }
    );
  }
}