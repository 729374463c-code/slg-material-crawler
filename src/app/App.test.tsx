import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { App } from "./App";

beforeEach(() => {
  window.location.hash = "";
});

test("navigates between the three preview pages", async () => {
  const user = userEvent.setup();
  render(<App />);

  expect(screen.getByRole("heading", { name: "本周 Top 吸量素材" })).toBeInTheDocument();

  await user.click(screen.getByRole("link", { name: "素材" }));
  expect(screen.getByRole("heading", { name: "素材库" })).toBeInTheDocument();

  await user.click(screen.getByRole("link", { name: "对比" }));
  expect(screen.getByRole("heading", { name: "素材对比" })).toBeInTheDocument();
});

test("overview shows five material records and the Guangdada ranking basis", () => {
  render(<App />);

  expect(screen.getByText("Clash of Clans")).toBeInTheDocument();
  expect(screen.getByText("Whiteout Survival")).toBeInTheDocument();
  expect(screen.getByText("Top War: Battle Game")).toBeInTheDocument();
  expect(screen.getAllByTestId("material-row")).toHaveLength(5);
  expect(screen.getByText("排序依据：广大大展示估值")).toBeInTheDocument();
  expect(screen.getByRole("link", { name: "进入素材对比" })).toBeInTheDocument();
});

test("materials page switches selected material and keeps video fallback links", async () => {
  const user = userEvent.setup();
  const { container } = render(<App />);

  await user.click(screen.getByRole("link", { name: "素材" }));

  expect(container.querySelector("video")).toHaveAttribute(
    "src",
    "/media/clash-of-clans-return.mp4",
  );
  expect(screen.getByRole("link", { name: "打开视频链接" })).toHaveAttribute(
    "href",
    "/media/clash-of-clans-return.mp4",
  );

  await user.click(screen.getByRole("button", { name: /Whiteout Survival/ }));

  expect(screen.getByRole("heading", { name: /Whiteout Survival/ })).toBeInTheDocument();
  expect(screen.getAllByText("自动拆解草稿").length).toBeGreaterThan(0);
  expect(screen.getByRole("link", { name: "查看广大大详情" })).toHaveAttribute(
    "href",
    expect.stringContaining("guangdada.net"),
  );
});

test("compare page is enabled and compares three selected materials", async () => {
  const user = userEvent.setup();
  render(<App />);

  await user.click(screen.getByRole("link", { name: "对比" }));

  expect(screen.getByRole("textbox", { name: "观察记录" })).toBeEnabled();
  expect(screen.getByRole("button", { name: "保存观察" })).toBeEnabled();
  expect(screen.getByText("Clash of Clans")).toBeInTheDocument();
  expect(screen.getByText("Whiteout Survival")).toBeInTheDocument();
  expect(screen.getByText("Top War: Battle Game")).toBeInTheDocument();
});

test("does not present conversion or revenue metrics", async () => {
  const user = userEvent.setup();
  render(<App />);

  expect(screen.queryByText(/转化率|ROAS|收入/)).not.toBeInTheDocument();

  await user.click(screen.getByRole("link", { name: "素材" }));
  expect(screen.queryByText(/转化率|ROAS|收入/)).not.toBeInTheDocument();

  await user.click(screen.getByRole("link", { name: "对比" }));
  expect(screen.queryByText(/转化率|ROAS|收入/)).not.toBeInTheDocument();
});
