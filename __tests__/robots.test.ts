import { describe, it, expect } from "vitest";
import robots from "@/app/robots";

describe("robots", () => {
  it("allows all crawlers on all paths", () => {
    const config = robots();

    expect(config.rules).toEqual({
      userAgent: "*",
      allow: "/",
    });
  });

  it("points to the sitemap", () => {
    expect(robots().sitemap).toBe("https://sri-ram-hotel.vercel.app/sitemap.xml");
  });
});
