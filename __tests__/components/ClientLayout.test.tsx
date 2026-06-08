import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import ClientLayout from "@/app/components/ClientLayout";

const initMixpanel = vi.fn();
const trackEvent = vi.fn();

vi.mock("@/app/lib/mixpanel", () => ({
  initMixpanel: (...args: unknown[]) => initMixpanel(...args),
  trackEvent: (...args: unknown[]) => trackEvent(...args),
}));

vi.mock("@/app/components/navbar", () => ({
  default: () => <nav data-testid="navbar">Navbar</nav>,
}));

describe("ClientLayout", () => {
  it("renders navbar and children", () => {
    render(
      <ClientLayout>
        <div>Page content</div>
      </ClientLayout>
    );

    expect(screen.getByTestId("navbar")).toBeInTheDocument();
    expect(screen.getByText("Page content")).toBeInTheDocument();
  });

  it("initializes mixpanel on mount", () => {
    vi.useFakeTimers();
    render(
      <ClientLayout>
        <div>Content</div>
      </ClientLayout>
    );

    expect(initMixpanel).toHaveBeenCalled();

    vi.advanceTimersByTime(100);
    expect(trackEvent).toHaveBeenCalledWith("App Loaded");

    vi.useRealTimers();
  });
});
