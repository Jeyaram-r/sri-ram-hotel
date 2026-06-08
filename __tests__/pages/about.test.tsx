import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import About from "@/app/about/page";
import { renderWithLang } from "../helpers/renderWithLang";

describe("About page", () => {
  it("renders about hero section", () => {
    renderWithLang(<About />);

    expect(screen.getByText("About Us")).toBeInTheDocument();
    expect(screen.getByText(/More than a decade/)).toBeInTheDocument();
  });

  it("renders founder section", () => {
    renderWithLang(<About />);

    expect(screen.getByText("Ravichandran P")).toBeInTheDocument();
    expect(screen.getByText("Founder & Owner")).toBeInTheDocument();
  });

  it("renders values cards", () => {
    renderWithLang(<About />);

    expect(screen.getByText("Our Values")).toBeInTheDocument();
    expect(screen.getByText("Fresh Every Day")).toBeInTheDocument();
    expect(screen.getByText("Community First")).toBeInTheDocument();
  });

  it("renders journey timeline", () => {
    renderWithLang(<About />);

    expect(screen.getByText("Our Journey")).toBeInTheDocument();
    expect(screen.getByText("The Beginning")).toBeInTheDocument();
    expect(screen.getByText("Still Going Strong")).toBeInTheDocument();
  });

  it("includes pandemic milestone", () => {
    renderWithLang(<About />);

    expect(screen.getByText("Serving Through the Pandemic")).toBeInTheDocument();
  });
});
