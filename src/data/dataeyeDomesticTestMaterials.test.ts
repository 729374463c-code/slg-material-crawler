import { describe, expect, test } from "vitest";
import { dataeyeDomesticTestMaterials } from "./dataeyeDomesticTestMaterials";
import { materialExportHeaders } from "./materialExport";
import { materialWeeks } from "./materialWeeks";

describe("DataEye 国内 SLG 十条测试批次", () => {
  test("保留十条来自不同产品和不同题材方向的唯一素材", () => {
    expect(dataeyeDomesticTestMaterials).toHaveLength(10);
    expect(new Set(dataeyeDomesticTestMaterials.map((item) => item.materialId)).size).toBe(10);
    expect(new Set(dataeyeDomesticTestMaterials.map((item) => item.name)).size).toBe(10);
    expect(new Set(dataeyeDomesticTestMaterials.map((item) => item.theme)).size).toBe(10);
  });

  test("每条素材保留两类外部链接和完整视频分析", () => {
    expect(dataeyeDomesticTestMaterials.every((item) => item.videoLink?.includes(".mp4?auth_key="))).toBe(true);
    expect(dataeyeDomesticTestMaterials.every((item) => item.originalAdLink?.includes("#/Product/Plan/"))).toBe(true);
    expect(dataeyeDomesticTestMaterials.every((item) => item.videoLinkCollectedAt)).toBe(true);
    expect(dataeyeDomesticTestMaterials.every((item) => item.analysisSource === "视频解析草稿")).toBe(true);
    expect(dataeyeDomesticTestMaterials.every((item) => item.scriptAnalysis.summary.length > 20)).toBe(true);
    expect(dataeyeDomesticTestMaterials.every((item) => item.scriptAnalysis.structureAndRhythm.length >= 3)).toBe(true);
    expect(dataeyeDomesticTestMaterials.every((item) => item.productionComponents.length >= 2)).toBe(true);
  });

  test("删除旧的单条 DataEye 测试批次", () => {
    expect(materialWeeks.some((week) => week.id === "dataeye-test")).toBe(false);
  });

  test("导出表格为视频直链、详情页和采集时间保留独立列", () => {
    expect(materialExportHeaders).toEqual(expect.arrayContaining([
      "视频直链",
      "AdXray 详情页",
      "视频链接采集时间",
    ]));
  });
});
