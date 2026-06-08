import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import GoogleReviews from "@/app/components/GoogleReviews";

const mockReviewsResponse = {
  rating: 4.8,
  userRatingCount: 42,
  reviews: [
    {
      authorAttribution: { displayName: "Jane Doe", photoUri: "https://example.com/photo.jpg" },
      rating: 5,
      text: { text: "Excellent dosa!" },
      relativePublishTimeDescription: "2 weeks ago",
      googleMapsUri: "https://maps.google.com/review/1",
    },
    {
      authorAttribution: { displayName: "John Smith" },
      rating: 4,
      text: { text: "Great value for money." },
      relativePublishTimeDescription: "1 month ago",
    },
  ],
};

describe("GoogleReviews", () => {
  beforeEach(() => {
    vi.resetModules();
    vi.stubGlobal(
      "fetch",
      vi.fn().mockResolvedValue({
        json: () => Promise.resolve(mockReviewsResponse),
      })
    );
  });

  it("shows loading state initially", async () => {
    const { default: Component } = await import("@/app/components/GoogleReviews");
    render(<Component />);

    expect(screen.getByText("Loading reviews...")).toBeInTheDocument();
  });

  it("renders reviews after fetch succeeds", async () => {
    const { default: Component } = await import("@/app/components/GoogleReviews");
    render(<Component />);

    await waitFor(() => {
      expect(screen.getByText("Google Reviews")).toBeInTheDocument();
    });

    expect(screen.getByText("Jane Doe")).toBeInTheDocument();
    expect(screen.getByText(/Excellent dosa!/)).toBeInTheDocument();
    expect(screen.getByText(/42 Google reviews/)).toBeInTheDocument();
    expect(screen.getByText("View all reviews on Google")).toBeInTheDocument();
  });

  it("shows error message when fetch fails", async () => {
    vi.stubGlobal("fetch", vi.fn().mockRejectedValue(new Error("fail")));

    const { default: Component } = await import("@/app/components/GoogleReviews");
    render(<Component />);

    await waitFor(() => {
      expect(screen.getByText("Unable to load reviews right now.")).toBeInTheDocument();
    });
  });

  it("shows anonymous for reviews without author name", async () => {
    vi.stubGlobal(
      "fetch",
      vi.fn().mockResolvedValue({
        json: () =>
          Promise.resolve({
            rating: 5,
            userRatingCount: 1,
            reviews: [{ rating: 5, text: { text: "Nice place" } }],
          }),
      })
    );

    const { default: Component } = await import("@/app/components/GoogleReviews");
    render(<Component />);

    await waitFor(() => {
      expect(screen.getByText("Anonymous")).toBeInTheDocument();
    });
  });
});
