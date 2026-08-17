import ExcelJS from "exceljs";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { materials } from "../data/material";
import { dataeyeDomesticTestMaterials } from "../data/dataeyeDomesticTestMaterials";
import { buildMaterialsWorkbook } from "../data/materialExport";
import { App } from "./App";

beforeEach(() => {
  window.location.hash = "";
});

test("switches between weekly archives without overwriting records", async () => {
  const user = userEvent.setup();
  render(<App />);

  await user.click(screen.getByRole("link", { name: "竞品吸量素材调研" }));

  expect(screen.getByRole("heading", { name: "竞品吸量素材调研" })).toBeInTheDocument();
  expect(screen.getAllByTestId("material-data-row")).toHaveLength(20);
  await user.selectOptions(screen.getByLabelText("查看历史周"), "week-1");
  expect(screen.getAllByTestId("material-data-row")).toHaveLength(10);
  expect(screen.getByRole("button", { name: "导出 Excel" })).toBeEnabled();
  expect(screen.getByRole("button", { name: "飞书导出（预留）" })).toBeDisabled();
  expect(screen.queryByText("复核状态")).not.toBeInTheDocument();
});

test("opens external evidence and shows completed script analysis", async () => {
  const user = userEvent.setup();
  const { container } = render(<App />);

  await user.click(screen.getByRole("link", { name: "竞品吸量素材调研" }));
  await user.selectOptions(screen.getByLabelText("查看历史周"), "week-1");
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
  expect(screen.getByRole("link", { name: "返回竞品吸量素材调研" })).toBeInTheDocument();
  expect(screen.getByRole("heading", { name: "脚本规律" })).toBeInTheDocument();
  expect(screen.getByText("已完成分析")).toBeInTheDocument();
  expect(screen.getByText(/用老账号召回和数字清单建立明确的信息缺口/)).toBeInTheDocument();
});

test("exports the grouped research table with script analysis", async () => {
  const buffer = await buildMaterialsWorkbook(materials, materials);
  const workbook = new ExcelJS.Workbook();
  await workbook.xlsx.load(buffer);
  const sheet = workbook.getWorksheet("竞品吸量素材调研");

  expect(sheet?.getCell("A1").value).toBe("产品与素材");
  expect(sheet?.getCell("E1").value).toBe("吸量与投放");
  expect(sheet?.getCell("L1").value).toBe("卖点类型");
  expect(sheet?.getCell("N1").value).toBe("脚本规律");
  expect(sheet?.getCell("N2").value).toBe("脚本总结");
  expect(sheet?.getCell("O2").value).toBe("结构与节奏");
  expect(sheet?.getCell("P2").value).toBe("情绪曲线");
  expect(String(sheet?.getCell("N3").value)).toContain("宠物遇险");
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

test("builds a weekly review from the current material set", async () => {
  const user = userEvent.setup();
  render(<App />);

  await user.click(screen.getByRole("link", { name: "周度复盘" }));

  expect(screen.getByRole("heading", { name: "周度复盘" })).toBeInTheDocument();
  expect(screen.getByText("20 条")).toBeInTheDocument();
  expect(screen.getByRole("heading", { name: "本周可执行结论" })).toBeInTheDocument();
  expect(screen.getByRole("heading", { name: "展示估值 Top 5" })).toBeInTheDocument();
  expect(screen.getByRole("heading", { name: "数据完整度检查" })).toBeInTheDocument();
  expect(screen.getByText("历史周归档")).toBeInTheDocument();
  expect(screen.getAllByText("本版已加入")).toHaveLength(4);
});

test("shows the ten-material DataEye batch with separate video and detail links", async () => {
  const user = userEvent.setup();
  render(<App />);

  await user.click(screen.getByRole("link", { name: "竞品吸量素材调研" }));
  await user.selectOptions(screen.getByLabelText("查看历史周"), "dataeye-cn-slg-10");

  expect(screen.getAllByTestId("material-data-row")).toHaveLength(10);
  expect(dataeyeDomesticTestMaterials).toHaveLength(10);
  expect(screen.getAllByRole("link", { name: "直接打开视频" })).toHaveLength(10);
  expect(screen.getAllByRole("link", { name: "查看 AdXray 详情" })).toHaveLength(10);
  expect(screen.getByText("视频直链为临时地址；无法打开时请使用 AdXray 详情页。")).toBeInTheDocument();
});

test("explains how to reach every column in the material table", async () => {
  const user = userEvent.setup();
  render(<App />);

  await user.click(screen.getByRole("link", { name: "竞品吸量素材调研" }));

  const tableRegion = screen.getByRole("region", { name: "竞品吸量素材调研数据" });
  expect(tableRegion).toHaveAttribute("aria-describedby", "materials-scroll-hint");
  expect(screen.getByText("左右拖动表格查看全部字段，滚动时产品信息和表头会保持可见。")).toBeInTheDocument();
});
