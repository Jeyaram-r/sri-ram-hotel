import { describe, it, expect, vi, beforeEach } from "vitest";
import mixpanel from "mixpanel-browser";

describe("mixpanel", () => {
  beforeEach(async () => {
    vi.stubEnv("NEXT_PUBLIC_MIXPANEL_TOKEN", "test-token");
    vi.resetModules();
  });

  it("initializes mixpanel once in the browser", async () => {
    const { initMixpanel } = await import("@/app/lib/mixpanel");

    initMixpanel();
    initMixpanel();

    expect(mixpanel.init).toHaveBeenCalledWith("test-token", expect.objectContaining({
      track_pageview: false,
      persistence: "localStorage",
    }));
    expect(mixpanel.init).toHaveBeenCalledTimes(1);
  });

  it("tracks events after initialization", async () => {
    const { initMixpanel, trackEvent } = await import("@/app/lib/mixpanel");

    initMixpanel();
    trackEvent("Test Event", { foo: "bar" });

    expect(mixpanel.track).toHaveBeenCalledWith("Test Event", { foo: "bar" });
  });

  it("tracks page views as events", async () => {
    const { initMixpanel, trackPageView } = await import("@/app/lib/mixpanel");

    initMixpanel();
    trackPageView("Home");

    expect(mixpanel.track).toHaveBeenCalledWith("Page Viewed", { page: "Home" });
  });

  it("does not track before initialization", async () => {
    const { trackEvent } = await import("@/app/lib/mixpanel");

    trackEvent("Early Event");

    expect(mixpanel.track).not.toHaveBeenCalled();
  });
});
