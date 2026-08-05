import { NextResponse } from "next/server";
import { approveTransaction } from "@/lib/services/review.service";

export async function PATCH(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;

    const transaction = await approveTransaction(id);

    return NextResponse.json({
      message: "Transaction approved",
      transaction,
    });

  } catch (error) {

    console.error(error);

    return NextResponse.json(
      {
        error: "Unable to approve transaction",
      },
      {
        status: 500,
      }
    );

  }
}