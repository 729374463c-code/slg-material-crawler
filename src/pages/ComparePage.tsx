import { Button } from "@carbon/react";
import { comparableMaterials } from "../data/material";
import type { Material } from "../data/material";

const comparisonRows: Array<[string, (material: Material) => string]> = [
  ["产品 / 平台", (material) => `${material.name} / ${material.platform}`],
  ["前 3 秒钩子", (material) => material.hookTypes.join("、")],
  ["第一画面", (material) => material.firstFrame],
  ["核心卖点", (material) => material.coreSellingPoint],
  ["是否展示结果", (material) => material.result],
  ["角色", (material) => material.character],
  ["口播", (material) => material.voiceover],
  ["真实玩法", (material) => material.gameplay],
  ["假玩法", (material) => material.fakeGameplay],
  ["制作方式", (material) => `${material.productionMethod}；${material.productionComponents.join("、")}`],
  ["吸量表现", (material) => `${material.displayEstimate} / ${material.dataSource} / ${material.dateRange}`],
];

export function ComparePage() {
  return (
    <div className="page compare-page">
      <section className="page-heading">
        <div>
          <p className="eyebrow">SIDE-BY-SIDE EVIDENCE</p>
          <h1>素材对比</h1>
        </div>
        <span className="heading-note">已选 3 条 / 预览对比</span>
      </section>

      <section className="comparison-notice">
        <span aria-hidden="true">01</span>
        <div>
          <strong>先用少量样本跑通“吸量数据 + 创意拆解 + 横向对比”的工作流。</strong>
          <p>这版只看吸量侧表现，不展示商业价值或用户转化指标。</p>
        </div>
      </section>

      <section className="comparison-table-wrap" aria-label="素材对比维度">
        <table className="comparison-table">
          <thead>
            <tr>
              <th scope="col">对比维度</th>
              {comparableMaterials.map((material) => (
                <th key={material.id} scope="col">
                  <span className={`column-status status-${material.status}`}>
                    {material.statusLabel}
                  </span>
                  {material.name}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {comparisonRows.map(([label, valueFor]) => (
              <tr key={label}>
                <th scope="row">{label}</th>
                {comparableMaterials.map((material) => (
                  <td key={material.id}>{valueFor(material)}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      <section className="observation-editor" aria-labelledby="editor-title">
        <div>
          <p className="section-label">OBSERVATION NOTE</p>
          <h2 id="editor-title">记录对比观察</h2>
          <p>这里先作为内部复盘输入框，后续可接入保存和周报输出。</p>
        </div>
        <div className="editor-controls">
          <div className="native-textarea">
            <label htmlFor="observation-note">观察记录</label>
            <textarea
              id="observation-note"
              placeholder="例如：数字清单更适合老玩家召回；伪玩法更适合冷启动泛用户。"
            />
          </div>
          <Button>保存观察</Button>
        </div>
      </section>
    </div>
  );
}
