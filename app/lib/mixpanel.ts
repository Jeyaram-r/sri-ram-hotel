import mixpanel from "mixpanel-browser";

const TOKEN = process.env.NEXT_PUBLIC_MIXPANEL_TOKEN || "";
let initialized = false;

export function initMixpanel() {
  if (typeof window === "undefined") return;
  if (initialized) return;
  mixpanel.init(TOKEN, {
    debug: process.env.NODE_ENV === "development",
    track_pageview: false, // we handle this manually
    persistence: "localStorage",
  });
  initialized = true;
}

export function trackEvent(event: string, props?: Record<string, unknown>) {
  if (typeof window === "undefined") return;
  if (!initialized) return;  // ← skip if not ready
  mixpanel.track(event, props);
}

export function trackPageView(pageName: string) {
  if (!initialized) return;  // ← skip if not ready
  trackEvent("Page Viewed", { page: pageName });
}