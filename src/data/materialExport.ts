import type ExcelJS from "exceljs";
import type { Material } from "./material";

export const materialExportHeaders = [
  "产品信息",
  "视频直链",
  "AdXray 详情页",
  "视频链接采集时间",
  "排名",
  "广告平台",
  "热度",
  "投放天数（天）",
  "展示估值",
  "投放时间",
  "投放地区",
  "一级标签",
  "二级标签",
  "脚本总结",
  "结构与节奏",
  "情绪曲线",
];

export type MaterialSortKey = "display" | "heat" | "days" | "recent";

export function sortMaterials(items: Material[], sortKey: MaterialSortKey) {
  return [...items].sort((left, right) => {
    if (sortKey === "heat") return compareNumber(right.heatValue, left.heatValue);
    if (sortKey === "days") return compareNumber(right.runDaysValue, left.runDaysValue);
    if (sortKey === "recent") return compareText(right.dateEnd, left.dateEnd);
    return compareNumber(right.displayEstimateValue, left.displayEstimateValue);
  });
}

export function getMaterialRanks(items: Material[]) {
  return new Map(
    sortMaterials(items, "display").map((material, index) => [material.id, index + 1]),
  );
}

export function getProductHeatRanks(items: Material[]) {
  const ranks = new Map<string, number>();
  const products = new Map<string, Material[]>();

  for (const material of items) {
    const group = products.get(material.name) ?? [];
    group.push(material);
    products.set(material.name, group);
  }

  for (const group of products.values()) {
    sortMaterials(group, "heat").forEach((material, index) => {
      ranks.set(material.id, index + 1);
    });
  }

  return ranks;
}

export async function buildMaterialsWorkbook(items: Material[], allMaterials: Material[]) {
  const { default: ExcelJSRuntime } = await import("exceljs");
  const workbook = new ExcelJSRuntime.Workbook();
  workbook.creator = "SLG 海外吸量素材情报库";
  workbook.created = new Date();

  const worksheet = workbook.addWorksheet("竞品吸量素材调研", {
    views: [{ state: "frozen", xSplit: 2, ySplit: 2 }],
    pageSetup: { orientation: "landscape", fitToPage: true, fitToWidth: 1 },
  });
  const ranks = getMaterialRanks(allMaterials);

  worksheet.addRow([
    "产品与素材",
    "",
    "",
    "",
    "吸量与投放",
    "",
    "",
    "",
    "",
    "",
    "",
    "卖点类型",
    "",
    "脚本规律",
    "",
    "",
  ]);
  worksheet.addRow(materialExportHeaders);

  worksheet.mergeCells("A1:D1");
  worksheet.mergeCells("E1:K1");
  worksheet.mergeCells("L1:M1");
  worksheet.mergeCells("N1:P1");

  for (const material of items) {
    const row = worksheet.addRow([
      `${material.name}\n公司：${material.company}`,
      material.videoLink ? { text: "直接打开视频", hyperlink: material.videoLink } : "链接待补充",
      material.originalAdLink ? { text: "查看 AdXray 详情", hyperlink: material.originalAdLink } : "链接待补充",
      material.videoLinkCollectedAt ?? "未提供",
      ranks.get(material.id) ?? "",
      joinValues(material.platforms),
      material.heatValue ?? "",
      material.runDaysValue ?? "",
      material.displayEstimateValue ?? "",
      `${material.dateStart ?? ""}\n${material.dateEnd ?? ""}`,
      joinValues(material.regions),
      joinValues(material.sellingPointPrimary),
      joinValues(material.sellingPointSecondary),
      material.scriptAnalysis.summary,
      numberedLines(material.scriptAnalysis.structureAndRhythm),
      numberedLines(material.scriptAnalysis.emotionCurve),
    ]);
    row.height = 138;
  }

  worksheet.columns = [
    { width: 28 },
    { width: 20 },
    { width: 22 },
    { width: 20 },
    { width: 9 },
    { width: 18 },
    { width: 11 },
    { width: 14 },
    { width: 16 },
    { width: 22 },
    { width: 34 },
    { width: 22 },
    { width: 24 },
    { width: 46 },
    { width: 58 },
    { width: 42 },
  ];

  worksheet.getRow(1).height = 30;
  worksheet.getRow(2).height = 42;
  worksheet.autoFilter = { from: "A2", to: "P2" };

  styleGroup(worksheet.getCell("A1"), "17458F");
  styleGroup(worksheet.getCell("E1"), "17458F");
  styleGroup(worksheet.getCell("L1"), "128FB5");
  styleGroup(worksheet.getCell("N1"), "E94B4B");

  worksheet.getRow(2).eachCell((cell, columnNumber) => {
    const color = columnNumber >= 14 ? "F45A55" : columnNumber >= 12 ? "79CBE5" : "079BC4";
    cell.fill = solidFill(color);
    cell.font = { bold: true, color: { argb: columnNumber >= 14 ? "FFFFFFFF" : "FF10212B" } };
    cell.alignment = { horizontal: "center", vertical: "middle", wrapText: true };
    cell.border = thinBorder();
  });

  for (let rowNumber = 3; rowNumber <= worksheet.rowCount; rowNumber += 1) {
    const row = worksheet.getRow(rowNumber);
    row.eachCell({ includeEmpty: true }, (cell, columnNumber) => {
      cell.fill = solidFill(columnNumber >= 14 ? "FFF0B8" : "FFE176");
      cell.alignment = { vertical: "top", wrapText: true };
      cell.border = thinBorder();
      if ([5, 7, 8, 9].includes(columnNumber)) {
        cell.alignment = { horizontal: "center", vertical: "top", wrapText: true };
      }
      if (columnNumber === 9 && typeof cell.value === "number") cell.numFmt = "#,##0";
      if ([2, 3].includes(columnNumber) && typeof cell.value === "object") {
        cell.font = { color: { argb: "FF075FCC" }, underline: true };
      }
    });
  }

  return workbook.xlsx.writeBuffer();
}

export function isPreciseGuangdadaDetail(url: string | null) {
  if (!url) return false;

  try {
    const parsed = new URL(url);
    return (
      parsed.hostname === "guangdada.net" &&
      parsed.pathname.includes("/modules/creative/display-ads/detail") &&
      parsed.searchParams.has("id")
    );
  } catch {
    return false;
  }
}

function compareNumber(left: number | null, right: number | null) {
  if (left === null && right === null) return 0;
  if (left === null) return 1;
  if (right === null) return -1;
  return left - right;
}

function compareText(left: string | null, right: string | null) {
  if (!left && !right) return 0;
  if (!left) return 1;
  if (!right) return -1;
  return left.localeCompare(right);
}

function joinValues(values: string[]) {
  return values.length > 0 ? values.join("、") : "";
}

function numberedLines(values: string[]) {
  return values.map((value, index) => `${index + 1}. ${value}`).join("\n");
}

function styleGroup(cell: ExcelJS.Cell, color: string) {
  cell.fill = solidFill(color);
  cell.font = { bold: true, color: { argb: "FFFFFFFF" } };
  cell.alignment = { horizontal: "center", vertical: "middle" };
  cell.border = thinBorder();
}

function solidFill(color: string): ExcelJS.Fill {
  return { type: "pattern", pattern: "solid", fgColor: { argb: `FF${color}` } };
}

function thinBorder(): Partial<ExcelJS.Borders> {
  const side = { style: "thin" as const, color: { argb: "FF9DAAB2" } };
  return { top: side, left: side, bottom: side, right: side };
}
