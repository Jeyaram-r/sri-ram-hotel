import { describe, it, expect, vi, beforeEach } from "vitest";
import { GET } from "@/app/api/reviews/route";

describe("GET /api/reviews", () => {
  beforeEach(() => {
    vi.stubEnv("GOOGLE_PLACE_ID", "test-place-id");
    vi.stubEnv("GOOGLE_MAPS_API_KEY", "test-api-key");
  });

  it("returns 500 when environment variables are missing", async () => {
    vi.stubEnv("GOOGLE_PLACE_ID", "");
    vi.stubEnv("GOOGLE_MAPS_API_KEY", "");

    const response = await GET();
    const body = await response.json();

    expect(response.status).toBe(500);
    expect(body.error).toBe("Missing environment variables");
  });

  it("returns Google Places data on success", async () => {
    const mockData = {
      displayName: { text: "Sri Ram Hotel" },
      rating: 4.5,
      userRatingCount: 120,
      reviews: [{ rating: 5, text: { text: "Great food!" } }],
    };

    vi.stubGlobal(
      "fetch",
      vi.fn().mockResolvedValue({
        json: () => Promise.resolve(mockData),
      })
    );

    const response = await GET();
    const body = await response.json();

    expect(response.status).toBe(200);
    expect(body.rating).toBe(4.5);
    expect(body.reviews).toHaveLength(1);
    expect(response.headers.get("Cache-Control")).toContain("s-maxage=86400");
  });

  it("returns 500 when fetch throws", async () => {
    vi.stubGlobal("fetch", vi.fn().mockRejectedValue(new Error("Network error")));

    const response = await GET();
    const body = await response.json();

    expect(response.status).toBe(500);
    expect(body.error).toBe("Failed to fetch reviews");
  });
});
