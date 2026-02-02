import { NextRequest, NextResponse } from "next/server";

const KBV_VOTE_URL = "https://kbv.ideahubbd.com/api/Vote/seatNumber";

export async function GET(
  _request: NextRequest,
  { params }: { params: Promise<{ seatNo: string }> }
) {
  try {
    const { seatNo } = await params;
    const seatNumber = seatNo?.trim();
    if (!seatNumber) {
      return NextResponse.json(
        { success: false, message: "Seat number required" },
        { status: 400 }
      );
    }

    const url = `${KBV_VOTE_URL}?seatNumber=${encodeURIComponent(seatNumber)}`;
    const res = await fetch(url, {
      next: { revalidate: 0 },
      headers: { "Content-Type": "application/json" },
    });

    if (!res.ok) {
      throw new Error(`kbv vote api: ${res.status} ${res.statusText}`);
    }

    const data = await res.json();
    return NextResponse.json(data, {
      status: 200,
      headers: {
        "Cache-Control": "public, s-maxage=60, stale-while-revalidate=120",
      },
    });
  } catch (error) {
    console.error("Error fetching vote by seat:", error);
    return NextResponse.json(
      { success: false, message: "Failed to fetch vote for seat", data: null },
      { status: 500 }
    );
  }
}
