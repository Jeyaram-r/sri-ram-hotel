import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import Home from "@/app/page";
import { renderWithLang } from "../helpers/renderWithLang";
import { trackEvent, trackPageView } from "@/app/lib/mixpanel";

vi.mock("@/app/lib/mixpanel", () => ({
  trackEvent: vi.fn(),
  trackPageView: vi.fn(),
}));

describe("Home page", () => {
  it("renders hero section with hotel name", () => {
    renderWithLang(<Home />);

    expect(screen.getByRole("heading", { level: 1, name: "Sri Ram Hotel" })).toBeInTheDocument();
    expect(screen.getByText("Welcome to")).toBeInTheDocument();
  });

  it("renders today's specials", () => {
    renderWithLang(<Home />);

    expect(screen.getByText("Today's Specials")).toBeInTheDocument();
    expect(screen.getByText("Masala Dosa")).toBeInTheDocument();
    expect(screen.getByText("Kothu Poratta")).toBeInTheDocument();
  });

  it("renders why us section", () => {
    renderWithLang(<Home />);

    expect(screen.getByText("Why people love us")).toBeInTheDocument();
    expect(screen.getByText("Hot & Fresh")).toBeInTheDocument();
  });

  it("renders opening timings", () => {
    renderWithLang(<Home />);

    expect(screen.getByText("We're Open")).toBeInTheDocument();
    expect(screen.getByText("Breakfast")).toBeInTheDocument();
    expect(screen.getByText("7:00 AM – 11:00 AM")).toBeInTheDocument();
    expect(screen.getByText("Thursday Leave *")).toBeInTheDocument();
  });

  it("tracks page view on mount", () => {
    renderWithLang(<Home />);

    expect(trackPageView).toHaveBeenCalledWith("Home");
  });

  it("tracks menu click from hero", () => {
    renderWithLang(<Home />);

    const menuLinks = screen.getAllByRole("link", { name: "View Our Menu" });
    const heroLink = menuLinks.find((link) => link.getAttribute("href") === "#menu");
    fireEvent.click(heroLink!);
    expect(trackEvent).toHaveBeenCalledWith("View Menu Clicked", { source: "hero" });
  });

  it("renders footer", () => {
    renderWithLang(<Home />);

    expect(screen.getByText(/MuthuKrishnaperi/)).toBeInTheDocument();
    expect(screen.getByText(/© 2026 Sri Ram Hotel/)).toBeInTheDocument();
  });
});
