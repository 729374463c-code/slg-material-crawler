import { describe, expect, it } from "vitest";
import ExcelJS from "exceljs";
import { buildSevenGameResearchWorkbook } from "./sevenGameResearchExport";
import {
  twoProductResearchGroups,
  twoProductResearchMaterials,
} from "./twoProductResearch";

describe("two-product research batch", () => {
  it("keeps the three source-specific groups separate", () => {
    expect(twoProductResearchGroups.map((group) => [group.name, group.materials.length])).toEqual([
      ["姜饼人王国（广大大）", 20],
      ["心动小镇（广大大）", 20],
      ["心动小镇（ADXray）", 20],
    ]);
    expect(twoProductResearchMaterials).toHaveLength(60);
  });

  it("enforces the Guangdada thresholds and exact detail links", () => {
    const materials = twoProductResearchMaterials.filter((material) => material.dataSource === "广大大");

    expect(materials).toHaveLength(40);
    expect(materials.every((material) => (material.runDaysValue ?? 0) > 30)).toBe(true);
    expect(materials.every((material) => (material.displayEstimateValue ?? 0) > 200_000)).toBe(true);
    expect(materials.every((material) => (material.dateEnd ?? "") >= "2026-07-01")).toBe(true);
    expect(materials.every((material) => material.videoLink?.startsWith("https://"))).toBe(true);
    expect(materials.every((material) => material.originalAdLink?.includes("/display-ads/detail?"))).toBe(true);
    expect(new Set(materials.map((material) => material.videoLink)).size).toBe(40);
  });

  it("enforces the ADXray thresholds and preserves both video and detail links", () => {
    const materials = twoProductResearchMaterials.filter((material) => material.dataSource === "DataEye AdXray");

    expect(materials).toHaveLength(20);
    expect(materials.every((material) => (material.runDaysValue ?? 0) > 30)).toBe(true);
    expect(materials.every((material) => (material.displayEstimateValue ?? 0) > 1_000_000)).toBe(true);
    expect(materials.every((material) => (material.dateEnd ?? "") >= "2026-07-01")).toBe(true);
    expect(materials.every((material) => material.videoLink?.startsWith("https://"))).toBe(true);
    expect(materials.every((material) => material.originalAdLink?.includes("adxray.dataeye.com"))).toBe(true);
    expect(new Set(materials.map((material) => material.videoLink)).size).toBe(20);
  });

  it("exports the cross-source batch with its own worksheet and source rules", async () => {
    const buffer = await buildSevenGameResearchWorkbook(twoProductResearchGroups, {
      worksheetName: "两产品专项调研",
      sourceLine: "【数据源】广大大 + DataEye AdXray　【扫描时间】2026年8月　【扫描地区】全球 / 中国大陆",
      criteriaLine: "筛选标准：广大大按热度排序，投放 >30天、展现 >200K；ADXray按曝光与投放天数综合排序，投放 >30天、曝光 >100万。",
    });
    const workbook = new ExcelJS.Workbook();
    await workbook.xlsx.load(buffer);
    const sheet = workbook.getWorksheet("两产品专项调研");

    expect(String(sheet?.getCell("A1").value)).toContain("广大大 + DataEye AdXray");
    expect(String(sheet?.getCell("D1").value)).toContain("曝光 >100万");
    expect(sheet?.actualRowCount).toBe(63);
    expect(workbook.getWorksheet("筛选结果")?.actualRowCount).toBe(4);
  });
});
