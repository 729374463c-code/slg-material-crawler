import { Button } from "@carbon/react";
import { Link } from "react-router-dom";
import { EmptyMaterialSlot } from "../components/EmptyMaterialSlot";
import { material, minimumComparisonReason } from "../data/material";

const evidenceSteps = ["素材内容", "统一拆解", "吸量表现", "观察结论"];

export function OverviewPage() {
  return (
    <div className="page overview-page">
      <section className="page-heading">
        <div>
          <p className="eyebrow">WEEKLY EVIDENCE NOTE / 2026.07</p>
          <h1>本周素材观察</h1>
        </div>
        <Link className="text-link" to="/materials">
          查看全部素材 →
        </Link>
      </section>

      <section className="observation-panel" aria-labelledby="observation-title">
        <p className="section-label">PRIMARY OBSERVATION / 01</p>
        <h2 id="observation-title">
          明确点名旧账号玩家，并用五点清单与连续实机证据降低回流顾虑。
        </h2>
        <p>
          当前判断基于 1 条真实素材。结论用于展示证据路径，不代表跨产品规律。
        </p>
      </section>

      <div className="overview-grid">
        <section className="surface-section" aria-labelledby="sample-title">
          <div className="section-heading">
            <div>
              <p className="section-label">EVIDENCE SET</p>
              <h2 id="sample-title">本周样本</h2>
            </div>
            <span className="section-count">01 / 05</span>
          </div>
          <div className="material-list">
            <Link className="material-row real-material" to="/materials">
              <span className="material-index">01</span>
              <div>
                <strong>{material.name}</strong>
                <p>{material.format}</p>
              </div>
              <span className="metric-value">{material.displayEstimate}</span>
            </Link>
            {Array.from({ length: 4 }, (_, index) => (
              <EmptyMaterialSlot key={index} />
            ))}
          </div>
        </section>

        <section className="surface-section evidence-section" aria-labelledby="chain-title">
          <div className="section-heading">
            <div>
              <p className="section-label">TRACEABLE LOGIC</p>
              <h2 id="chain-title">证据链</h2>
            </div>
          </div>
          <ol className="evidence-chain">
            {evidenceSteps.map((step, index) => (
              <li key={step}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <strong>{step}</strong>
                {index < evidenceSteps.length - 1 && (
                  <span className="chain-arrow" aria-hidden="true">
                    →
                  </span>
                )}
              </li>
            ))}
          </ol>
          <dl className="compact-facts">
            <div>
              <dt>数据来源</dt>
              <dd>{material.dataSource}</dd>
            </div>
            <div>
              <dt>投放渠道</dt>
              <dd>{material.platform}</dd>
            </div>
            <div>
              <dt>统计区间</dt>
              <dd>{material.dateRange}</dd>
            </div>
          </dl>
        </section>
      </div>

      <section className="action-strip">
        <div>
          <p className="section-label">NEXT STEP</p>
          <strong>补充同类素材后，横向验证钩子与吸量表现。</strong>
          <p>{minimumComparisonReason}</p>
        </div>
        <Button disabled>进入素材对比</Button>
      </section>
    </div>
  );
}
