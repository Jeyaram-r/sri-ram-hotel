import { describe, it, expect } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { LangProvider, useLang, translations } from "@/app/context/LangContext";

function TestConsumer() {
  const { lang, toggleLang, t } = useLang();
  return (
    <div>
      <span data-testid="lang">{lang}</span>
      <span data-testid="translation">{t("home")}</span>
      <button onClick={toggleLang}>Toggle</button>
    </div>
  );
}

describe("LangContext", () => {
  it("defaults to English", () => {
    render(
      <LangProvider>
        <TestConsumer />
      </LangProvider>
    );

    expect(screen.getByTestId("lang")).toHaveTextContent("en");
    expect(screen.getByTestId("translation")).toHaveTextContent("Home");
  });

  it("toggles to Tamil and back", () => {
    render(
      <LangProvider>
        <TestConsumer />
      </LangProvider>
    );

    fireEvent.click(screen.getByRole("button", { name: "Toggle" }));
    expect(screen.getByTestId("lang")).toHaveTextContent("ta");
    expect(screen.getByTestId("translation")).toHaveTextContent("முகப்பு");

    fireEvent.click(screen.getByRole("button", { name: "Toggle" }));
    expect(screen.getByTestId("lang")).toHaveTextContent("en");
  });

  it("returns the key when translation is missing", () => {
    function MissingKeyConsumer() {
      const { t } = useLang();
      return <span>{t("missing.key")}</span>;
    }

    render(
      <LangProvider>
        <MissingKeyConsumer />
      </LangProvider>
    );

    expect(screen.getByText("missing.key")).toBeInTheDocument();
  });

  it("includes hero and menu translation keys", () => {
    expect(translations["hero.name"].en).toBe("Sri Ram Hotel");
    expect(translations["menu.title"].ta).toBeTruthy();
  });
});
