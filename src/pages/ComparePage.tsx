import { Button } from "@carbon/react";
import { material, minimumComparisonReason } from "../data/material";

const comparisonRows = [
  ["产品 / 地区 / 平台", `${material.name} / ${material.region} / ${material.platform}`],
  ["前 3 秒钩子", material.hookTypes.join("、")],
  ["第一画面", material.firstFrame],
  ["核心卖点", material.coreSellingPoint],
  ["是否展示结果", material.result],
  ["角色", material.character],
  ["口播", material.voiceover],
  ["真实玩法", material.gameplay],
  ["假玩法", material.fakeGameplay],
  ["制作方式", `${material.productionMethod}：${material.productionComponents.join("、")}`],
  [
    "吸量表现",
    `${material.displayEstimate} / ${material.dataSource} / ${material.dateRange}`,
  ],
];

export function ComparePage() {
  return (
    <div className="page compare-page">
      <section className="page-heading">
        <div>
          <p className="eyebrow">SIDE-BY-SIDE EVIDENCE</p>
          <h1>素材对比</h1>
        </div>
        <span className="heading-note">已选 1 / 最少 2</span>
      </section>

      <section className="comparison-notice">
        <span aria-hidden="true">01</span>
        <div>
          <strong>{minimumComparisonReason}</strong>
          <p>对比维度已保留，接入更多真实素材后再记录跨素材观察。</p>
        </div>
      </section>

      <section className="comparison-table-wrap" aria-label="素材对比维度">
        <table className="comparison-table">
          <thead>
            <tr>
              <th scope="col">对比维度</th>
              <th scope="col">
                <span className="column-status">已接入</span>
                {material.name}
              </th>
              <th scope="col">
                <span className="column-status pending">保留位 02</span>
                等待更多素材
              </th>
              <th scope="col">
                <span className="column-status pending">保留位 03</span>
                等待更多素材
              </th>
            </tr>
          </thead>
          <tbody>
            {comparisonRows.map(([label, value]) => (
              <tr key={label}>
                <th scope="row">{label}</th>
                <td>{value}</td>
                <td className="pending-cell">—</td>
                <td className="pending-cell">—</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      <section className="observation-editor" aria-labelledby="editor-title">
        <div>
          <p className="section-label">OBSERVATION NOTE</p>
          <h2 id="editor-title">记录对比观察</h2>
          <p>当前输入区已锁定。</p>
        </div>
        <div className="editor-controls">
          <div className="native-textarea">
            <label htmlFor="observation-note">观察记录</label>
            <textarea
              id="observation-note"
              placeholder="接入至少 2 条素材后可记录观察"
              disabled
            />
          </div>
          <Button disabled>保存观察</Button>
        </div>
      </section>
    </div>
  );
}
