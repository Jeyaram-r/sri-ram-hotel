import { describe, it, expect } from "vitest";
import sitemap from "@/app/sitemap";

describe("sitemap", () => {
  it("includes main site routes", () => {
    const urls = sitemap().map((entry) => entry.url);

    expect(urls).toContain("https://sri-ram-hotel.vercel.app");
    expect(urls).toContain("https://sri-ram-hotel.vercel.app/menu");
    expect(urls).toContain("https://sri-ram-hotel.vercel.app/about");
    expect(urls).toContain("https://sri-ram-hotel.vercel.app/contact");
  });

  it("assigns highest priority to home page", () => {
    const home = sitemap().find(
      (entry) => entry.url === "https://sri-ram-hotel.vercel.app"
    );

    expect(home?.priority).toBe(1);
  });
});
