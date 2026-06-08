import { describe, it, expect } from "vitest";
import { hotelMenu } from "@/app/config/menu";

describe("menu config", () => {
  it("defines breakfast, lunch, and dinner sections", () => {
    expect(hotelMenu.map((section) => section.mealType)).toEqual([
      "Breakfast",
      "Lunch",
      "Dinner",
    ]);
  });

  it("includes meal images for each section", () => {
    hotelMenu.forEach((section) => {
      expect(section.mealTypeImg).toBeTruthy();
      expect(section.categories.length).toBeGreaterThan(0);
    });
  });

  it("has valid menu item prices", () => {
    hotelMenu.forEach((section) => {
      section.categories.forEach((category) => {
        category.items.forEach((item) => {
          expect(item.name).toBeTruthy();
          expect(item.price).toBeGreaterThanOrEqual(0);
        });
      });
    });
  });

  it("marks complimentary kuruma in dinner", () => {
    const dinner = hotelMenu.find((section) => section.mealType === "Dinner");
    const kuruma = dinner?.categories
      .flatMap((category) => category.items)
      .find((item) => item.name === "Kuruma");

    expect(kuruma?.price).toBe(0);
  });
});
