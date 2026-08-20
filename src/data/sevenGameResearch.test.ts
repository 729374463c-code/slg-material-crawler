import { describe, expect, test } from "vitest";
import ExcelJS from "exceljs";
import { buildSevenGameResearchWorkbook } from "./sevenGameResearchExport";
import { getProductHeatRanks } from "./materialExport";
import { sevenGameResearchGroups, sevenGameResearchMaterials } from "./sevenGameResearch";

const expectedGames = [
  "Gear Defenders",
  "NTE: Neverness to Everness",
  "Clash of Critters",
  "Dragon Traveler",
  "Chaos Zero Nightmare",
];

describe("five-game Guangdada research batch", () => {
  test("keeps the five games with valid material in independent groups", () => {
    expect(sevenGameResearchGroups.map((group) => group.name)).toEqual(expectedGames);
    expect(sevenGameResearchGroups.every((group) => group.materials.length <= 20)).toBe(true);
  });

  test("only includes qualified, unique and current video creatives", () => {
    const identities = sevenGameResearchMaterials.map(
      (material) => `${material.adKey}:${material.materialId}:${material.videoLink}`,
    );

    expect(new Set(identities).size).toBe(identities.length);
    expect(
      sevenGameResearchMaterials.every(
        (material) =>
          material.weekId === "gdd-seven-games-2026-08" &&
          (material.runDaysValue ?? 0) > 30 &&
          (material.displayEstimateValue ?? 0) > 200_000 &&
          (material.dateEnd ?? "") >= "2026-07-01" &&
          Boolean(material.videoLink) &&
          Boolean(material.guangdadaDetailLink),
      ),
    ).toBe(true);
  });

  test("exports the dedicated thirteen-column research sheet", async () => {
    const buffer = await buildSevenGameResearchWorkbook(sevenGameResearchGroups);
    const workbook = new ExcelJS.Workbook();
    await workbook.xlsx.load(buffer);
    const sheet = workbook.getWorksheet("五品类专项调研");

    expect(String(sheet?.getCell("A1").value)).toContain("【数据源】广大大");
    expect(String(sheet?.getCell("D1").value)).toContain("投放天数 >30天");
    expect(sheet?.getCell("A3").value).toBe("游戏名称");
    expect(sheet?.getCell("B3").value).toBe("视频素材");
    expect(sheet?.getCell("C3").value).toBe("排序");
    expect(sheet?.getCell("L3").value).toBe("脚本总结");
    expect(sheet?.getCell("M3").value).toBe("结构与节奏");
    expect(sheet?.getCell("N3").value).toBeNull();
    expect(sheet?.getCell("A4").value).toBe("Gear Defenders（齿轮防卫队）");
    expect(sheet?.getCell("C4").value).toBe(1);
  });

  test("ranks heat independently inside each game", () => {
    const ranks = getProductHeatRanks(sevenGameResearchMaterials);

    for (const group of sevenGameResearchGroups.filter((item) => item.materials.length > 0)) {
      const hottest = [...group.materials].sort(
        (left, right) => (right.heatValue ?? 0) - (left.heatValue ?? 0),
      )[0];
      expect(ranks.get(hottest.id)).toBe(1);
    }
  });
});
