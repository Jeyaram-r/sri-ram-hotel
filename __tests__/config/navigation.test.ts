import { describe, it, expect } from "vitest";
import { navItems } from "@/app/config/navigation";

describe("navigation config", () => {
  it("exports all main nav items", () => {
    expect(navItems).toHaveLength(5);
    expect(navItems.map((item) => item.label)).toEqual([
      "Home",
      "About",
      "Menu",
      "Services",
      "Contact",
    ]);
  });

  it("uses valid href paths", () => {
    navItems.forEach((item) => {
      expect(item.href).toMatch(/^\//);
    });
  });
});
