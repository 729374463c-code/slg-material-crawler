import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { materials } from "../data/material";
import { buildMaterialsCsv } from "../data/materialExport";
import { App } from "./App";

beforeEach(() => {
  window.location.hash = "";
});

test("shows the ten weekly records in the competitor research table", async () => {
  const user = userEvent.setup();
  render(<App />);

  await user.click(screen.getByRole("link", { name: "竞品吸量素材调研" }));

  expect(screen.getByRole("heading", { name: "竞品吸量素材调研" })).toBeInTheDocument();
  expect(screen.getAllByTestId("material-data-row")).toHaveLength(10);
  expect(screen.getByRole("button", { name: "导出 CSV" })).toBeEnabled();
  expect(screen.getByRole("button", { name: "飞书导出（预留）" })).toBeDisabled();
  expect(screen.queryByText("复核状态")).not.toBeInTheDocument();
});

test("opens external evidence without embedding video and keeps script modules reserved", async () => {
  const user = userEvent.setup();
  const { container } = render(<App />);

  await user.click(screen.getByRole("link", { name: "竞品吸量素材调研" }));
  await user.click(screen.getAllByRole("link", { name: "Clash of Clans" })[0]);

  expect(container.querySelector("video")).not.toBeInTheDocument();
  expect(screen.getByRole("link", { name: "打开视频" })).toHaveAttribute(
    "href",
    expect.stringContaining("zingfront.com"),
  );
  expect(screen.getByRole("link", { name: "打开原始广告" })).toHaveAttribute(
    "href",
    "https://www.youtube.com/watch?v=eHNKgqt_qaI",
  );
  expect(screen.getByRole("link", { name: "查看广大大播放详情" })).toHaveAttribute(
    "href",
    expect.stringContaining("display-ads/detail"),
  );
  expect(screen.getAllByText("模块已预留，当前版本暂不生成。")).toHaveLength(3);
});

test("exports only the left-side table fields", () => {
  const csv = buildMaterialsCsv(materials, materials);

  expect(csv).toContain("产品名,公司,视频素材,排名,广告平台");
  expect(csv).toContain("展示估值");
  expect(csv).toContain("卖点一级标签,卖点二级标签");
  expect(csv).not.toMatch(/复核状态|脚本总结|结构与节奏|情绪曲线|转化率|ROAS/);
});

test("keeps comparison and methodology routes available", async () => {
  const user = userEvent.setup();
  render(<App />);

  await user.click(screen.getByRole("link", { name: "对比" }));
  expect(screen.getByRole("heading", { name: "素材对比" })).toBeInTheDocument();
  expect(screen.getByLabelText("素材 A")).toBeInTheDocument();
  expect(screen.getByLabelText("素材 B")).toBeInTheDocument();

  await user.click(screen.getByRole("link", { name: "分析方法" }));
  expect(screen.getByRole("heading", { name: "分析方法" })).toBeInTheDocument();
  expect(screen.getByText("情绪节奏")).toBeInTheDocument();
});
