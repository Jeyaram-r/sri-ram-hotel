import "@testing-library/jest-dom/vitest";
import { cleanup } from "@testing-library/react";
import { afterEach, beforeEach, vi } from "vitest";

class MockIntersectionObserver implements IntersectionObserver {
  readonly root: Element | Document | null = null;
  readonly rootMargin = "";
  readonly thresholds: ReadonlyArray<number> = [];

  constructor(private callback: IntersectionObserverCallback) {}

  observe = (target: Element) => {
    this.callback([{ isIntersecting: true, target } as IntersectionObserverEntry], this);
  };

  unobserve = vi.fn();
  disconnect = vi.fn();
  takeRecords = () => [];
}

beforeEach(() => {
  vi.stubGlobal("IntersectionObserver", MockIntersectionObserver);
});

afterEach(() => {
  cleanup();
  vi.clearAllMocks();
  vi.unstubAllEnvs();
});

vi.mock("next/link", () => ({
  default: ({
    children,
    href,
    onClick,
    ...props
  }: {
    children: React.ReactNode;
    href: string;
    onClick?: () => void;
  }) => (
    <a href={href} onClick={onClick} {...props}>
      {children}
    </a>
  ),
}));

vi.mock("next/dynamic", () => ({
  default: () => {
    return function DynamicPlaceholder() {
      return <div data-testid="dynamic-placeholder" />;
    };
  },
}));

vi.mock("next/font/google", () => ({
  Inter: () => ({ className: "inter-font" }),
}));

vi.mock("mixpanel-browser", () => ({
  default: {
    init: vi.fn(),
    track: vi.fn(),
  },
}));
