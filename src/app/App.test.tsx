import { render, screen } from "@testing-library/react";
import { App } from "./App";

test("renders the three primary modules", () => {
  render(<App />);

  expect(screen.getByRole("link", { name: "总览" })).toBeInTheDocument();
  expect(screen.getByRole("link", { name: "素材" })).toBeInTheDocument();
  expect(screen.getByRole("link", { name: "对比" })).toBeInTheDocument();
});
