import { NextResponse } from "next/server";

const VOTE_COUNTING_URL =
  "https://kalbela.ideahubbd.com/election/data/vote-counting-compress.json";

export async function GET() {
  try {
    const res = await fetch(VOTE_COUNTING_URL, {
      next: { revalidate: 0 },
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!res.ok) {
      throw new Error(
        `Failed to fetch vote-counting: ${res.status} ${res.statusText}`
      );
    }

    const data = await res.json();

    return NextResponse.json(data, {
      status: 200,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET",
        "Access-Control-Allow-Headers": "Content-Type",
      },
    });
  } catch (error) {
    console.error("Error fetching vote-counting:", error);
    return NextResponse.json(
      { error: "Failed to fetch vote-counting", data: [] },
      { status: 500 }
    );
  }
}
