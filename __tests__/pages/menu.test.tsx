import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Menu from "@/app/menu/page";

describe("Menu page", () => {
  it("renders menu header", () => {
    render(<Menu />);

    expect(screen.getByText("Our Menu")).toBeInTheDocument();
    expect(screen.getByText("Fresh · Flavourful · Crafted with love")).toBeInTheDocument();
  });

  it("shows breakfast items by default", () => {
    render(<Menu />);

    expect(screen.getByText("Idly")).toBeInTheDocument();
    expect(screen.getByText("Dosa")).toBeInTheDocument();
    expect(screen.getByText("₹ 7")).toBeInTheDocument();
  });

  it("switches to lunch section when tab is clicked", async () => {
    const user = userEvent.setup();
    render(<Menu />);

    await user.click(screen.getByRole("button", { name: "Lunch" }));

    expect(screen.getByText("Kothu Poratta")).toBeInTheDocument();
    expect(screen.getByText("Kothu Poratta").closest("div")?.parentElement).toHaveTextContent("₹ 70");
  });

  it("switches to dinner section and shows complimentary item", async () => {
    const user = userEvent.setup();
    render(<Menu />);

    await user.click(screen.getByRole("button", { name: "Dinner" }));

    expect(screen.getByText("Chappathi")).toBeInTheDocument();
    expect(screen.getByText("Complimentary")).toBeInTheDocument();
  });

  it("shows price footnote", () => {
    render(<Menu />);

    expect(
      screen.getByText("All prices are in Indian Rupees (₹) · Taxes included")
    ).toBeInTheDocument();
  });
});
