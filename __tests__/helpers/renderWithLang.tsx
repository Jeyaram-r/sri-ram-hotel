import { render, RenderOptions } from "@testing-library/react";
import { LangProvider } from "@/app/context/LangContext";

export function renderWithLang(ui: React.ReactElement, options?: RenderOptions) {
  return render(<LangProvider>{ui}</LangProvider>, options);
}
