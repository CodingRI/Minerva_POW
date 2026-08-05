import { NextResponse } from "next/server";

import { getDashboardSummary } from "@/lib/services/dashboard.service";

export async function GET() {

  try {

    const summary = await getDashboardSummary();

    return NextResponse.json(summary);

  } catch (error) {

    console.error(error);

    return NextResponse.json(

      {
        error: "Unable to load dashboard",
      },

      {
        status: 500,
      }

    );

  }

}