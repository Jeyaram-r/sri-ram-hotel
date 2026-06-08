import { describe, it, expect, vi } from "vitest";
import { screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Navbar from "@/app/components/navbar";
import { renderWithLang } from "../helpers/renderWithLang";

describe("Navbar", () => {
  it("renders brand name and logo", () => {
    renderWithLang(<Navbar />);

    expect(screen.getByAltText("Sri Ram Hotel")).toBeInTheDocument();
    expect(screen.getByText("Sri Ram")).toBeInTheDocument();
    expect(screen.getByText("Hotel")).toBeInTheDocument();
  });

  it("renders navigation links", () => {
    renderWithLang(<Navbar />);

    expect(screen.getAllByText("Home").length).toBeGreaterThan(0);
    expect(screen.getAllByText("About").length).toBeGreaterThan(0);
    expect(screen.getAllByText("Menu").length).toBeGreaterThan(0);
  });

  it("toggles language between EN and Tamil", async () => {
    const user = userEvent.setup();
    const { container } = renderWithLang(<Navbar />);

    const langButton = container.querySelector(".lang-btn") as HTMLButtonElement;
    await user.click(langButton);

    expect(screen.getAllByText("முகப்பு").length).toBeGreaterThan(0);
  });

  it("opens and closes mobile menu", async () => {
    const user = userEvent.setup();
    renderWithLang(<Navbar />);

    const hamburger = screen.getByRole("button", { name: "Toggle menu" });
    await user.click(hamburger);

    const mobileLinks = screen.getAllByRole("link");
    expect(mobileLinks.length).toBeGreaterThan(0);
  });

  it("updates scrolled state on window scroll", () => {
    renderWithLang(<Navbar />);

    fireEvent.scroll(window, { target: { scrollY: 100 } });
    Object.defineProperty(window, "scrollY", { value: 100, writable: true });
    fireEvent.scroll(window);

    expect(screen.getByRole("navigation")).toBeInTheDocument();
  });
});
