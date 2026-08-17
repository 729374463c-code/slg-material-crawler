import { Select, SelectItem } from "@carbon/react";
import { useEffect, useMemo, useState } from "react";
import { WeekSelector } from "../components/WeekSelector";
import type { Material } from "../data/material";
import { useMaterialWeek } from "../data/useMaterialWeek";

const comparisonRows: Array<[string, (material: Material) => string]> = [
  ["产品 / 平台", (material) => `${material.name} / ${material.platform}`],
  ["展示估值", (material) => material.displayEstimate],
  ["投放周期", (material) => `${material.runDays} / ${material.dateRange}`],
  ["投放地区", (material) => material.regions.join("、")],
  ["前 3 秒钩子", (material) => material.hookTypes.join("、")],
  ["第一画面", (material) => material.firstFrame],
  ["核心卖点", (material) => material.coreSellingPoint],
  ["是否展示结果", (material) => material.result],
  ["角色", (material) => material.character],
  ["口播", (material) => material.voiceover],
  ["真实玩法", (material) => material.gameplay],
  ["假玩法", (material) => material.fakeGameplay],
  ["制作方式", (material) => `${material.productionMethod}；${material.productionComponents.join("、")}`],
];

export function ComparePage() {
  const { selectedWeek } = useMaterialWeek();
  const materials = selectedWeek.materials;
  const [leftId, setLeftId] = useState(materials[0]?.id ?? "");
  const [rightId, setRightId] = useState(materials[1]?.id ?? "");

  useEffect(() => {
    setLeftId(materials[0]?.id ?? "");
    setRightId(materials[1]?.id ?? "");
  }, [selectedWeek.id]);

  const selectedMaterials = useMemo(
    () => [
      materials.find((material) => material.id === leftId),
      materials.find((material) => material.id === rightId),
    ].filter((material): material is Material => Boolean(material)),
    [leftId, materials, rightId],
  );
  const [leftMaterial, rightMaterial] = selectedMaterials;
  const insights = leftMaterial && rightMaterial ? buildComparisonInsights(leftMaterial, rightMaterial) : [];

  function swapMaterials() {
    setLeftId(rightId);
    setRightId(leftId);
  }

  const pageHeading = (
    <section className="page-heading">
      <div>
        <p className="eyebrow">SELECTED CREATIVE COMPARISON</p>
        <h1>素材对比</h1>
        <p className="page-description">从当前周素材中任选两条，查看吸量表现与创意结构差异。</p>
      </div>
      <span className="heading-note">素材库共 {materials.length} 条</span>
    </section>
  );

  if (materials.length < 2) {
    return (
      <div className="page compare-page">
        {pageHeading}
        <WeekSelector />
        <section className="comparison-empty-state" aria-labelledby="comparison-empty-title">
          <p className="section-label">MORE MATERIALS REQUIRED</p>
          <h2 id="comparison-empty-title">暂时无法进行素材对比</h2>
          <p>当前批次只有 {materials.length} 条素材，至少需要 2 条才能进行对比。</p>
          <small>可以切换到其他周次继续对比；后续向本批次加入新素材后，该功能会自动开放。</small>
        </section>
      </div>
    );
  }

  return (
    <div className="page compare-page">
      {pageHeading}

      <WeekSelector />

      <section className="comparison-picker" aria-label="选择两条对比素材">
        <Select
          id="left-material"
          labelText="素材 A"
          onChange={(event) => setLeftId(event.target.value)}
          value={leftId}
        >
          {materials.map((material, index) => (
            <SelectItem
              disabled={material.id === rightId}
              key={material.id}
              text={`${index + 1}. ${material.name}`}
              value={material.id}
            />
          ))}
        </Select>
        <span className="comparison-versus" aria-hidden="true">VS</span>
        <Select
          id="right-material"
          labelText="素材 B"
          onChange={(event) => setRightId(event.target.value)}
          value={rightId}
        >
          {materials.map((material, index) => (
            <SelectItem
              disabled={material.id === leftId}
              key={material.id}
              text={`${index + 1}. ${material.name}`}
              value={material.id}
            />
          ))}
        </Select>
        <button className="swap-materials" onClick={swapMaterials} type="button">交换素材</button>
      </section>

      <section className="comparison-insights" aria-labelledby="comparison-insights-title">
        <div>
          <p className="section-label">AUTO SUMMARY</p>
          <h2 id="comparison-insights-title">对比结论</h2>
          <p>根据当前两条素材的吸量数据和标签自动生成，供复盘时快速定位差异。</p>
        </div>
        <ol>
          {insights.map((insight, index) => (
            <li key={insight}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <p>{insight}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="comparison-table-wrap" aria-label="素材对比维度">
        <table className="comparison-table">
          <thead>
            <tr>
              <th scope="col">对比维度</th>
              {selectedMaterials.map((material) => (
                <th key={material.id} scope="col">
                  {material.name}
                  <small>{material.recordName}</small>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {comparisonRows.map(([label, valueFor]) => (
              <tr key={label}>
                <th scope="row">{label}</th>
                {selectedMaterials.map((material) => (
                  <td key={material.id}>{valueFor(material)}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      <section className="comparison-note">
        <strong>对比结论需要结合具体投放目标判断。</strong>
        <p>当前版本只展示吸量侧数据和创意差异，不展示商业价值或转化指标。</p>
      </section>
    </div>
  );
}

function buildComparisonInsights(left: Material, right: Material) {
  const leftDisplay = left.displayEstimateValue ?? 0;
  const rightDisplay = right.displayEstimateValue ?? 0;
  const displayLeader = leftDisplay >= rightDisplay ? left : right;
  const displayFollower = displayLeader.id === left.id ? right : left;
  const difference = Math.abs(leftDisplay - rightDisplay);
  const differenceRate = Math.round((difference / Math.max(leftDisplay, rightDisplay, 1)) * 100);
  const sharedPrimary = left.sellingPointPrimary.filter((label) => right.sellingPointPrimary.includes(label));
  const longerRunning = (left.runDaysValue ?? 0) >= (right.runDaysValue ?? 0) ? left : right;
  const shorterRunning = longerRunning.id === left.id ? right : left;
  const dayDifference = Math.abs((left.runDaysValue ?? 0) - (right.runDaysValue ?? 0));

  return [
    `${displayLeader.name} 的展示估值更高，较另一条素材高约 ${differenceRate}%；该差异只代表吸量规模，不等于转化更好。`,
    sharedPrimary.length > 0
      ? `两条素材共同使用“${sharedPrimary.join("、")}”一级标签，可优先比较开头钩子与表现差异。`
      : `两条素材的一级标签路线不同：${left.name} 偏“${left.sellingPointPrimary.join("、")}”，${right.name} 偏“${right.sellingPointPrimary.join("、")}”。`,
    `${longerRunning.name} 比 ${shorterRunning.name} 多持续投放 ${dayDifference} 天，适合优先复核其脚本结构是否具备长跑特征。`,
    `素材 A 以“${left.hookTypes.slice(0, 2).join("、")}”吸引注意；素材 B 以“${right.hookTypes.slice(0, 2).join("、")}”切入。`,
  ];
}
