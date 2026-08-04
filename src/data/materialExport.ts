import type { Material } from "./material";

export const materialExportHeaders = [
  "产品名",
  "公司",
  "视频素材",
  "排名",
  "广告平台",
  "热度",
  "投放天数",
  "展示估值",
  "投放开始",
  "投放结束",
  "投放地区",
  "卖点一级标签",
  "卖点二级标签",
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

export function buildMaterialsCsv(items: Material[], allMaterials: Material[]) {
  const ranks = getMaterialRanks(allMaterials);
  const rows = items.map((material) => [
    material.name,
    material.company,
    material.videoLink ?? material.originalAdLink ?? "",
    ranks.get(material.id) ?? "",
    joinValues(material.platforms),
    material.heatValue ?? "",
    material.runDaysValue ?? "",
    material.displayEstimateValue ?? "",
    material.dateStart ?? "",
    material.dateEnd ?? "",
    joinValues(material.regions),
    joinValues(material.sellingPointPrimary),
    joinValues(material.sellingPointSecondary),
  ]);

  return `\uFEFF${[materialExportHeaders, ...rows]
    .map((row) => row.map(csvCell).join(","))
    .join("\r\n")}`;
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

function csvCell(value: string | number) {
  const text = String(value);
  return /[",\r\n]/.test(text) ? `"${text.replaceAll('"', '""')}"` : text;
}
