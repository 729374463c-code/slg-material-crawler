import type { Material } from "./material";
import { sortMaterials } from "./materialExport";

export type RankedSignal = {
  label: string;
  count: number;
  share: number;
};

export type WeeklyReview = {
  sampleCount: number;
  productCount: number;
  companyCount: number;
  averageRunDays: number;
  linkedCount: number;
  primarySignals: RankedSignal[];
  secondarySignals: RankedSignal[];
  hookSignals: RankedSignal[];
  topMaterials: Material[];
  conclusions: string[];
  qualityChecks: Array<{ label: string; count: number; total: number; note: string }>;
};

function rankSignals(values: string[], total: number, limit = 5): RankedSignal[] {
  const counts = new Map<string, number>();
  values.forEach((value) => counts.set(value, (counts.get(value) ?? 0) + 1));

  return [...counts.entries()]
    .map(([label, count]) => ({
      label,
      count,
      share: total === 0 ? 0 : Math.round((count / total) * 100),
    }))
    .sort((left, right) => right.count - left.count || left.label.localeCompare(right.label))
    .slice(0, limit);
}

export function buildWeeklyReview(materials: Material[]): WeeklyReview {
  const runDays = materials
    .map((material) => material.runDaysValue)
    .filter((value): value is number => value !== null);
  const primarySignals = rankSignals(
    materials.flatMap((material) => material.sellingPointPrimary),
    materials.length,
  );
  const secondarySignals = rankSignals(
    materials.flatMap((material) => material.sellingPointSecondary),
    materials.length,
  );
  const hookSignals = rankSignals(
    materials.flatMap((material) => material.hookTypes),
    materials.length,
    6,
  );
  const leadingPrimary = primarySignals[0];
  const leadingSecondary = secondarySignals[0];
  const longestRunning = [...materials].sort(
    (left, right) => (right.runDaysValue ?? 0) - (left.runDaysValue ?? 0),
  )[0];

  return {
    sampleCount: materials.length,
    productCount: new Set(materials.map((material) => material.name)).size,
    companyCount: new Set(materials.map((material) => material.company)).size,
    averageRunDays:
      runDays.length === 0
        ? 0
        : Math.round(runDays.reduce((total, value) => total + value, 0) / runDays.length),
    linkedCount: materials.filter((material) => material.videoLink || material.originalAdLink)
      .length,
    primarySignals,
    secondarySignals,
    hookSignals,
    topMaterials: sortMaterials(materials, "display").slice(0, 5),
    conclusions: [
      leadingPrimary
        ? `“${leadingPrimary.label}”是本周覆盖最高的一级标签，出现在 ${leadingPrimary.count} 条素材中。`
        : "当前样本不足，暂不能判断主导卖点。",
      leadingSecondary
        ? `二级标签以“${leadingSecondary.label}”最集中，说明高表现素材倾向使用直观、低理解成本的内容载体。`
        : "当前样本不足，暂不能判断主要内容载体。",
      longestRunning
        ? `${longestRunning.name} 的样本最长持续投放 ${longestRunning.runDaysValue} 天，可优先复核其开头钩子与玩法承接。`
        : "当前没有可用于判断长跑能力的投放天数。",
      "本周样本同时存在轻玩法获客与核心 SLG 玩法直出两条路线，建议在对比模块中按路线分别选择素材验证。",
    ],
    qualityChecks: [
      {
        label: "外部素材链接",
        count: materials.filter((material) => material.videoLink || material.originalAdLink).length,
        total: materials.length,
        note: "至少具备视频或原始广告链接",
      },
      {
        label: "广大大详情页",
        count: materials.filter((material) => material.guangdadaDetailLink?.includes("display-ads/detail")).length,
        total: materials.length,
        note: "链接精确到单条广告详情",
      },
      {
        label: "投放字段",
        count: materials.filter(
          (material) => material.displayEstimateValue !== null && material.runDaysValue !== null && material.regions.length > 0,
        ).length,
        total: materials.length,
        note: "展示估值、投放天数和地区齐全",
      },
      {
        label: "脚本规律",
        count: materials.filter(
          (material) => material.scriptAnalysis.summary && material.scriptAnalysis.structureAndRhythm.length > 0,
        ).length,
        total: materials.length,
        note: "总结、结构节奏与情绪曲线齐全",
      },
    ],
  };
}
