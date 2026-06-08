import { describe, it, expect } from "vitest";
import { metadata } from "@/app/layout";

describe("Root layout metadata", () => {
  it("sets default title and description", () => {
    expect(metadata.title).toEqual(
      expect.objectContaining({
        default: expect.stringContaining("Sri Ram Hotel"),
      })
    );
    expect(metadata.description).toContain("South Indian");
  });

  it("configures SEO keywords", () => {
    expect(metadata.keywords).toEqual(
      expect.arrayContaining(["Sri Ram Hotel", "Dosa Alangulam"])
    );
  });

  it("allows indexing by search engines", () => {
    expect(metadata.robots).toEqual(
      expect.objectContaining({
        index: true,
        follow: true,
      })
    );
  });

  it("sets canonical URL base", () => {
    expect(metadata.metadataBase?.toString()).toBe("https://sri-ram-hotel.vercel.app/");
  });
});
