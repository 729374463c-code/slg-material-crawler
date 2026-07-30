import { Link } from "react-router-dom";
import { materials } from "../data/material";

const evidenceSteps = ["素材采集", "统一拆解", "吸量表现", "对比观察"];

export function OverviewPage() {
  const confirmedCount = materials.filter((item) => item.status !== "pending_video").length;

  return (
    <div className="page overview-page">
      <section className="page-heading">
        <div>
          <p className="eyebrow">WEEKLY TOP ADS / SLG</p>
          <h1>本周 Top 吸量素材</h1>
        </div>
        <Link className="text-link" to="/materials">
          查看全部素材
        </Link>
      </section>

      <section className="observation-panel" aria-labelledby="observation-title">
        <p className="section-label">DEMO OBJECTIVE / 01</p>
        <h2 id="observation-title">
          把海外 SLG 吸量判断从经验感受，推进到可复盘、可对比、可验证的素材证据库。
        </h2>
        <p>
          当前版本先接入 5 个素材位，其中 {confirmedCount} 条已有视频证据，其余素材先保留广大大 Top
          榜单记录，后续补充视频后再复核拆解。
        </p>
      </section>

      <div className="overview-grid">
        <section className="surface-section" aria-labelledby="sample-title">
          <div className="section-heading">
            <div>
              <p className="section-label">EVIDENCE SET</p>
              <h2 id="sample-title">样本列表</h2>
            </div>
            <span className="section-count">05 / 05</span>
          </div>
          <p className="ranking-note">排序依据：广大大展示估值</p>
          <div className="material-list">
            {materials.map((item, index) => (
              <Link
                className="material-row real-material"
                data-testid="material-row"
                key={item.id}
                to="/materials"
              >
                <span className="material-index">{String(index + 1).padStart(2, "0")}</span>
                <div>
                  <strong>{item.name}</strong>
                  <p>{item.hookTypes.slice(0, 2).join(" / ")}</p>
                </div>
                <span className="metric-value">{item.displayEstimate}</span>
              </Link>
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
              </li>
            ))}
          </ol>
          <dl className="compact-facts">
            <div>
              <dt>数据来源</dt>
              <dd>广大大 Top 表现素材</dd>
            </div>
            <div>
              <dt>服务范围</dt>
              <dd>仅 SLG</dd>
            </div>
            <div>
              <dt>当前指标</dt>
              <dd>吸量侧展示估值、人气、热度</dd>
            </div>
          </dl>
        </section>
      </div>

      <section className="action-strip">
        <div>
          <p className="section-label">NEXT STEP</p>
          <strong>进入横向对比，快速找出可复用的钩子、题材和制作方式。</strong>
          <p>本 demo 只展示吸量侧，不展示商业价值或转化指标。</p>
        </div>
        <Link className="cds--btn cds--btn--primary" to="/compare">
          进入素材对比
        </Link>
      </section>
    </div>
  );
}
