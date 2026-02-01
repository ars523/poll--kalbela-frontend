import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const res = await fetch(
      'https://kalbela.ideahubbd.com/election/data/seat-wise-info.json',
      {
        next: { revalidate: 60 },
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );

    if (!res.ok) {
      throw new Error(
        `Failed to fetch seat-wise info: ${res.status} ${res.statusText}`
      );
    }

    const data = await res.json();

    return NextResponse.json(data, {
      status: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET',
        'Access-Control-Allow-Headers': 'Content-Type',
      },
    });
  } catch (error) {
    console.error('Error fetching seat-wise info:', error);
    return NextResponse.json(
      { error: 'Failed to fetch seat-wise info', data: [] },
      { status: 500 }
    );
  }
}
