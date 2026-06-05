import { NextResponse } from "next/server";

export async function GET() {
  try {
    const placeId = process.env.GOOGLE_PLACE_ID;
    const apiKey = process.env.GOOGLE_MAPS_API_KEY;

    if (!placeId || !apiKey) {
      return NextResponse.json(
        { error: "Missing environment variables" },
        { status: 500 }
      );
    }

    const response = await fetch(
        `https://places.googleapis.com/v1/places/${placeId}?fields=displayName,rating,userRatingCount,reviews`,
        {
          headers: {
            "X-Goog-Api-Key": apiKey!,
          },
          next: {
            revalidate: 86400, // 1 day
          },
        }
      );

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { error: "Failed to fetch reviews" },
      { status: 500 }
    );
  }
}