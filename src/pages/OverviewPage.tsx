import { Link } from "react-router-dom";
import { WeekSelector } from "../components/WeekSelector";
import { sortMaterials } from "../data/materialExport";
import { useMaterialWeek, withWeek } from "../data/useMaterialWeek";

const evidenceSteps = ["素材采集", "统一拆解", "吸量表现", "对比观察"];

export function OverviewPage() {
  const { selectedWeek } = useMaterialWeek();
  const materials = selectedWeek.materials;
  const linkedCount = materials.filter((item) => item.videoLink || item.originalAdLink).length;
  const rankedMaterials = sortMaterials(materials, "display");
  const sampleCount = String(materials.length).padStart(2, "0");

  return (
    <div className="page overview-page">
      <section className="page-heading">
        <div>
          <p className="eyebrow">WEEKLY TOP ADS / SLG</p>
          <h1>{selectedWeek.label} Top 吸量素材</h1>
        </div>
        <Link className="text-link" to={withWeek("/materials", selectedWeek.id)}>
          查看竞品吸量素材调研
        </Link>
      </section>

      <WeekSelector />

      <section className="observation-panel" aria-labelledby="observation-title">
        <p className="section-label">DEMO OBJECTIVE / 01</p>
        <h2 id="observation-title">
          把海外 SLG 吸量判断从经验感受，推进到可复盘、可对比、可验证的素材证据库。
        </h2>
        <p>
          当前版本先接入 {materials.length} 条 SLG 素材，其中 {linkedCount}
          条已有可核验的外部素材链接；网页不保存、不播放广告视频。
        </p>
      </section>

      <div className="overview-grid">
        <section className="surface-section" aria-labelledby="sample-title">
          <div className="section-heading">
            <div>
              <p className="section-label">EVIDENCE SET</p>
              <h2 id="sample-title">样本列表</h2>
            </div>
            <span className="section-count">
              {sampleCount} / {sampleCount}
            </span>
          </div>
          <p className="ranking-note">排序依据：广大大展示估值</p>
          <div className="material-list">
            {rankedMaterials.map((item, index) => (
              <Link
                className="material-row real-material"
                data-testid="material-row"
                key={item.id}
                to={withWeek(`/materials/${item.id}`, selectedWeek.id)}
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
              <dd>广大大 MCP Top 表现素材</dd>
            </div>
            <div>
              <dt>服务范围</dt>
              <dd>仅 SLG</dd>
            </div>
            <div>
              <dt>当前指标</dt>
              <dd>展示估值、热度、投放天数</dd>
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
        <Link className="cds--btn cds--btn--primary" to={withWeek("/compare", selectedWeek.id)}>
          进入素材对比
        </Link>
      </section>
    </div>
  );
}
