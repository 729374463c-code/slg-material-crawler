import type ExcelJS from "exceljs";
import type { SevenGameResearchGroup } from "./sevenGameResearch";
import { getSevenGameDisplayName } from "./sevenGameNames";

const headers = [
  "游戏名称",
  "视频素材",
  "排序",
  "广告平台",
  "热度",
  "投放天数（天）",
  "展示估值（K）",
  "投放时间",
  "投放地区",
  "一级标签",
  "二级标签",
  "脚本总结",
  "结构与节奏",
];

export async function buildSevenGameResearchWorkbook(groups: SevenGameResearchGroup[]) {
  const { default: ExcelJSRuntime } = await import("exceljs");
  const workbook = new ExcelJSRuntime.Workbook();
  workbook.creator = "竞品吸量素材调研";
  workbook.created = new Date();

  const worksheet = workbook.addWorksheet("五品类专项调研", {
    views: [{ state: "frozen", xSplit: 2, ySplit: 3 }],
    pageSetup: { orientation: "landscape", fitToPage: true, fitToWidth: 1 },
  });

  worksheet.addRow([
    "【数据源】广大大　【扫描平台】iOS+安卓　【扫描时间】2026年8月　【扫描地区】全球",
    "",
    "",
    "筛选TOP素材的标准：①按广大大热度排序。②投放天数 >30天。③展现量 >200K。④投放时间至少持续至2026年7-8月。⑤排除与产品无关及骗热度素材。",
  ]);
  worksheet.addRow([
    "产品信息",
    "视频素材",
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
  ]);
  worksheet.addRow(headers);

  worksheet.mergeCells("A1:C1");
  worksheet.mergeCells("D1:M1");
  worksheet.mergeCells("C2:I2");
  worksheet.mergeCells("J2:K2");
  worksheet.mergeCells("L2:M2");

  for (const group of groups) {
    const materials = [...group.materials].sort(
      (left, right) => (right.heatValue ?? 0) - (left.heatValue ?? 0),
    );
    if (materials.length === 0) continue;

    const startRow = worksheet.rowCount + 1;
    materials.forEach((material, index) => {
      const row = worksheet.addRow([
        index === 0 ? getSevenGameDisplayName(group.name) : "",
        { text: "打开视频", hyperlink: material.videoLink ?? material.guangdadaDetailLink ?? "" },
        index + 1,
        material.platforms.join("、"),
        material.heatValue ?? "",
        material.runDaysValue ?? "",
        material.displayEstimateValue === null ? "" : Math.round(material.displayEstimateValue / 1000),
        `${material.dateStart ?? ""} ~ ${material.dateEnd ?? ""}`,
        material.regions.join("、"),
        material.sellingPointPrimary.join("、"),
        material.sellingPointSecondary.join("、"),
        material.scriptAnalysis.summary,
        numberedLines(material.scriptAnalysis.structureAndRhythm),
      ]);
      row.height = 112;
      const linkCell = row.getCell(2);
      linkCell.note = material.guangdadaDetailLink
        ? `广大大详情页：${material.guangdadaDetailLink}`
        : "";
    });
    const endRow = worksheet.rowCount;
    if (endRow > startRow) worksheet.mergeCells(startRow, 1, endRow, 1);
  }

  worksheet.columns = [
    { width: 27 },
    { width: 18 },
    { width: 9 },
    { width: 19 },
    { width: 10 },
    { width: 15 },
    { width: 16 },
    { width: 24 },
    { width: 34 },
    { width: 22 },
    { width: 25 },
    { width: 48 },
    { width: 58 },
  ];
  worksheet.getRow(1).height = 46;
  worksheet.getRow(2).height = 30;
  worksheet.getRow(3).height = 42;
  worksheet.autoFilter = { from: "A3", to: "M3" };

  styleRow(worksheet.getRow(1), "17458F", "FFFFFF");
  styleGroup(worksheet.getCell("A2"), "128FB5");
  styleGroup(worksheet.getCell("B2"), "128FB5");
  styleGroup(worksheet.getCell("C2"), "079BC4");
  styleGroup(worksheet.getCell("J2"), "79CBE5", "10212B");
  styleGroup(worksheet.getCell("L2"), "F45A55");

  worksheet.getRow(3).eachCell((cell, columnNumber) => {
    const color = columnNumber >= 12 ? "F45A55" : columnNumber >= 10 ? "79CBE5" : "079BC4";
    cell.fill = solidFill(color);
    cell.font = { bold: true, color: { argb: columnNumber >= 12 ? "FFFFFFFF" : "FF10212B" } };
    cell.alignment = { horizontal: "center", vertical: "middle", wrapText: true };
    cell.border = thinBorder();
  });

  for (let rowNumber = 4; rowNumber <= worksheet.rowCount; rowNumber += 1) {
    worksheet.getRow(rowNumber).eachCell({ includeEmpty: true }, (cell, columnNumber) => {
      cell.fill = solidFill(columnNumber >= 12 ? "FFF0B8" : "FFE176");
      cell.alignment = {
        horizontal: [1, 3, 5, 6, 7].includes(columnNumber) ? "center" : "left",
        vertical: "top",
        wrapText: true,
      };
      cell.border = thinBorder();
      if (columnNumber === 2) cell.font = { color: { argb: "FF075FCC" }, underline: true };
      if ([5, 6, 7].includes(columnNumber) && typeof cell.value === "number") cell.numFmt = "#,##0";
    });
  }

  const summary = workbook.addWorksheet("筛选结果");
  summary.addRow(["游戏名称", "目标数量", "有效数量", "筛选说明"]);
  groups.forEach((group) => {
    summary.addRow([group.name, group.targetCount, group.materials.length, group.qualificationNote]);
  });
  summary.columns = [{ width: 34 }, { width: 12 }, { width: 12 }, { width: 72 }];
  styleRow(summary.getRow(1), "17458F", "FFFFFF");

  return workbook.xlsx.writeBuffer();
}

function numberedLines(values: string[]) {
  return values.map((value, index) => `${index + 1}. ${value}`).join("\n");
}

function styleRow(row: ExcelJS.Row, color: string, fontColor: string) {
  row.eachCell({ includeEmpty: true }, (cell) => {
    cell.fill = solidFill(color);
    cell.font = { bold: true, color: { argb: `FF${fontColor}` } };
    cell.alignment = { horizontal: "center", vertical: "middle", wrapText: true };
    cell.border = thinBorder();
  });
}

function styleGroup(cell: ExcelJS.Cell, color: string, fontColor = "FFFFFF") {
  cell.fill = solidFill(color);
  cell.font = { bold: true, color: { argb: `FF${fontColor}` } };
  cell.alignment = { horizontal: "center", vertical: "middle", wrapText: true };
  cell.border = thinBorder();
}

function solidFill(color: string): ExcelJS.Fill {
  return { type: "pattern", pattern: "solid", fgColor: { argb: `FF${color}` } };
}

function thinBorder(): Partial<ExcelJS.Borders> {
  const side = { style: "thin" as const, color: { argb: "FF9DAAB2" } };
  return { top: side, left: side, bottom: side, right: side };
}
