import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { App } from "./App";

beforeEach(() => {
  window.location.hash = "";
});

test("navigates between the three complete preview pages", async () => {
  const user = userEvent.setup();
  render(<App />);

  expect(
    screen.getByRole("heading", { name: "本周素材观察" }),
  ).toBeInTheDocument();

  await user.click(screen.getByRole("link", { name: "素材" }));
  expect(screen.getByRole("heading", { name: "素材库" })).toBeInTheDocument();

  await user.click(screen.getByRole("link", { name: "对比" }));
  expect(screen.getByRole("heading", { name: "素材对比" })).toBeInTheDocument();
});

test("overview shows one real sample and four reserved material slots", () => {
  render(<App />);

  expect(screen.getByText("Clash of Clans")).toBeInTheDocument();
  expect(screen.getAllByText("待补充素材")).toHaveLength(4);
  expect(
    screen.getByRole("button", { name: "进入素材对比" }),
  ).toBeDisabled();
  expect(
    screen.getByText("至少需要 2 条素材才能开始对比"),
  ).toBeInTheDocument();
});

test("materials detail uses the supplied video and acquisition estimate", async () => {
  const user = userEvent.setup();
  const { container } = render(<App />);

  await user.click(screen.getByRole("link", { name: "素材" }));

  expect(container.querySelector("video")).toHaveAttribute(
    "src",
    "/media/clash-of-clans-return.mp4",
  );
  expect(screen.getAllByText("3.2亿").length).toBeGreaterThan(0);
  expect(screen.getByRole("button", { name: "进入对比" })).toBeDisabled();
});

test("compare preview stays disabled until another material exists", async () => {
  const user = userEvent.setup();
  render(<App />);

  await user.click(screen.getByRole("link", { name: "对比" }));

  expect(screen.getByRole("textbox", { name: "观察记录" })).toBeDisabled();
  expect(screen.getByRole("button", { name: "保存观察" })).toBeDisabled();
  expect(
    screen.getByText("至少需要 2 条素材才能开始对比"),
  ).toBeInTheDocument();
});

test("does not present unavailable conversion or revenue metrics", async () => {
  const user = userEvent.setup();
  render(<App />);

  expect(screen.queryByText(/转化率|ROAS|收入/)).not.toBeInTheDocument();

  await user.click(screen.getByRole("link", { name: "素材" }));
  expect(screen.queryByText(/转化率|ROAS|收入/)).not.toBeInTheDocument();

  await user.click(screen.getByRole("link", { name: "对比" }));
  expect(screen.queryByText(/转化率|ROAS|收入/)).not.toBeInTheDocument();
});
