import { Select, SelectItem } from "@carbon/react";
import { useMemo, useState } from "react";
import { materials } from "../data/material";
import type { Material } from "../data/material";

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
  const [leftId, setLeftId] = useState(materials[0]?.id ?? "");
  const [rightId, setRightId] = useState(materials[1]?.id ?? "");

  const selectedMaterials = useMemo(
    () => [
      materials.find((material) => material.id === leftId),
      materials.find((material) => material.id === rightId),
    ].filter((material): material is Material => Boolean(material)),
    [leftId, rightId],
  );

  return (
    <div className="page compare-page">
      <section className="page-heading">
        <div>
          <p className="eyebrow">SELECTED CREATIVE COMPARISON</p>
          <h1>素材对比</h1>
          <p className="page-description">从 10 条素材中任选两条，查看吸量表现与创意结构差异。</p>
        </div>
        <span className="heading-note">素材库共 {materials.length} 条</span>
      </section>

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
