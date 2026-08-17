import { Link } from "react-router-dom";
import { WeekSelector } from "../components/WeekSelector";
import { useMaterialWeek, withWeek } from "../data/useMaterialWeek";
import { buildWeeklyReview, type RankedSignal } from "../data/weeklyReview";

export function WeeklyReviewPage() {
  const { selectedWeek } = useMaterialWeek();
  const review = buildWeeklyReview(selectedWeek.materials);
  return (
    <div className="page weekly-review-page">
      <section className="page-heading">
        <div>
          <p className="eyebrow">WEEKLY DECISION REVIEW / SLG</p>
          <h1>周度复盘</h1>
          <p className="page-description">
            把本周 Top 素材自动汇总为可讨论的判断，帮助团队在集中复盘时快速找到重复出现的吸量方向。
          </p>
        </div>
        <span className="heading-note">{selectedWeek.label} · 数据快照：{selectedWeek.snapshotDate}</span>
      </section>

      <WeekSelector />

      <section className="weekly-thesis" aria-labelledby="weekly-thesis-title">
        <div>
          <p className="section-label">THIS WEEK / DECISION BRIEF</p>
          <h2 id="weekly-thesis-title">轻玩法负责抢注意，核心经营负责承接长期想象。</h2>
          <p>
            当前样本中，“美术”和“核心玩法”覆盖最广；画线、追逐和生存危机负责快速建立观看动机，建设、资源和军力成长负责证明 SLG 的长期目标。
          </p>
        </div>
        <Link className="weekly-thesis-action" to={withWeek("/compare", selectedWeek.id)}>
          选择两条素材验证判断
          <span aria-hidden="true">→</span>
        </Link>
      </section>

      <section className="review-metrics" aria-label="本周样本概览">
        <ReviewMetric label="入库素材" value={`${review.sampleCount} 条`} note={`${review.linkedCount} 条具备外部链接`} />
        <ReviewMetric label="覆盖产品" value={`${review.productCount} 款`} note={`${review.companyCount} 家公司`} />
        <ReviewMetric label="平均投放" value={`${review.averageRunDays} 天`} note="用于观察素材长跑能力" />
        <ReviewMetric label="复盘口径" value="吸量侧" note="不包含商业价值与转化率" />
      </section>

      <div className="review-analysis-grid">
        <SignalPanel eyebrow="SELLING POINT / PRIMARY" title="一级标签集中度" signals={review.primarySignals} />
        <SignalPanel eyebrow="SELLING POINT / SECONDARY" title="二级标签集中度" signals={review.secondarySignals} />
        <SignalPanel eyebrow="ATTENTION / HOOK" title="开头钩子信号" signals={review.hookSignals} />
      </div>

      <div className="review-lower-grid">
        <section className="review-panel" aria-labelledby="conclusion-title">
          <div className="review-panel-heading">
            <div>
              <p className="section-label">REVIEW NOTES</p>
              <h2 id="conclusion-title">本周可执行结论</h2>
            </div>
            <span>自动汇总 / 待团队复盘</span>
          </div>
          <ol className="review-conclusions">
            {review.conclusions.map((conclusion, index) => (
              <li key={conclusion}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <p>{conclusion}</p>
              </li>
            ))}
          </ol>
        </section>

        <section className="review-panel" aria-labelledby="top-materials-title">
          <div className="review-panel-heading">
            <div>
              <p className="section-label">TOP EVIDENCE</p>
              <h2 id="top-materials-title">展示估值 Top 5</h2>
            </div>
            <Link to={withWeek("/materials", selectedWeek.id)}>查看完整台账</Link>
          </div>
          <div className="review-ranking">
            {review.topMaterials.map((material, index) => (
              <Link key={material.id} to={withWeek(`/materials/${material.id}`, selectedWeek.id)}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <div>
                  <strong>{material.name}</strong>
                  <small>{material.sellingPointPrimary.join(" / ")}</small>
                </div>
                <b>{material.displayEstimate}</b>
              </Link>
            ))}
          </div>
        </section>
      </div>

      <section className="quality-panel" aria-labelledby="quality-title">
        <div className="quality-intro">
          <p className="section-label">DATA QUALITY</p>
          <h2 id="quality-title">数据完整度检查</h2>
          <p>这里检查字段和链接格式是否齐全，不代表外部网页当前一定可访问。</p>
        </div>
        <div className="quality-checks">
          {review.qualityChecks.map((check) => {
            const complete = check.count === check.total;
            return (
              <article key={check.label}>
                <span className={complete ? "quality-status complete" : "quality-status"}>
                  {complete ? "完整" : "待补充"}
                </span>
                <strong>{check.label}</strong>
                <b>{check.count} / {check.total}</b>
                <small>{check.note}</small>
              </article>
            );
          })}
        </div>
      </section>

      <section className="upgrade-roadmap" aria-labelledby="upgrade-roadmap-title">
        <div>
          <p className="section-label">NEXT CAPABILITIES</p>
          <h2 id="upgrade-roadmap-title">后续能力接入顺序</h2>
          <p>已完成历史周归档；飞书导出仍暂缓，周一任务保持“先询问、确认后执行”。</p>
        </div>
        <ol>
          <li className="current"><span>01</span><strong>周度自动汇总</strong><small>本版已加入</small></li>
          <li className="current"><span>02</span><strong>数据质量检查</strong><small>本版已加入</small></li>
          <li className="current"><span>03</span><strong>对比结论增强</strong><small>本版已加入</small></li>
          <li className="current"><span>04</span><strong>历史周归档</strong><small>本版已加入</small></li>
        </ol>
      </section>
    </div>
  );
}

function ReviewMetric({ label, note, value }: { label: string; note: string; value: string }) {
  return (
    <article>
      <span>{label}</span>
      <strong>{value}</strong>
      <small>{note}</small>
    </article>
  );
}

function SignalPanel({ eyebrow, signals, title }: { eyebrow: string; signals: RankedSignal[]; title: string }) {
  return (
    <section className="review-panel signal-panel" aria-label={title}>
      <p className="section-label">{eyebrow}</p>
      <h2>{title}</h2>
      <div className="signal-list">
        {signals.map((signal) => (
          <div key={signal.label}>
            <div>
              <strong>{signal.label}</strong>
              <span>{signal.count} 条</span>
            </div>
            <span className="signal-track" aria-label={`${signal.label} 覆盖 ${signal.share}%`}>
              <i style={{ width: `${signal.share}%` }} />
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
