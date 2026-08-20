import { ArrowLeft } from "@carbon/icons-react";
import { Link, Navigate, useParams } from "react-router-dom";
import { getMaterialExternalLinks } from "../data/materialLinks";
import { allMaterials } from "../data/materialWeeks";
import { withWeek } from "../data/useMaterialWeek";

export function MaterialDetailPage() {
  const { materialId } = useParams();
  const material = allMaterials.find((item) => item.id === materialId);

  if (!material) return <Navigate replace to="/materials" />;
  const links = getMaterialExternalLinks(material);

  return (
    <div className="page material-detail-page">
      <Link
        aria-label="返回竞品吸量素材调研"
        className="icon-back-button"
        title="返回竞品吸量素材调研"
        to={withWeek("/materials", material.weekId ?? "week-1")}
      >
        <ArrowLeft size={20} />
      </Link>
      <section className="page-heading detail-page-heading">
        <div>
          <p className="eyebrow">MATERIAL RECORD / {material.id}</p>
          <h1>{material.name}</h1>
        </div>
        <div className="heading-actions">
          <span className={`review-status status-${material.status}`}>{material.statusLabel}</span>
        </div>
      </section>

      <section className="detail-summary-grid">
        <div className="detail-summary-primary">
          <span>核心卖点</span>
          <strong>{material.coreSellingPoint}</strong>
          <p>{material.audience}</p>
        </div>
        <dl className="detail-summary-facts">
          <Fact label="展示估值" value={material.displayEstimate} />
          <Fact label="热度" value={material.heat} />
          <Fact label="投放天数" value={material.runDays} />
          <Fact label="数据来源" value={material.dataSource} />
        </dl>
      </section>

      <section className="external-evidence" aria-label="素材外部链接">
        <div>
          <span className="section-label">EXTERNAL EVIDENCE</span>
          <strong>素材链接</strong>
          <p>网站不保存或播放视频，所有链接在新标签页打开。</p>
        </div>
        <div className="external-actions">
          {links.directVideo ? (
            <a className="primary-external-link" href={links.directVideo.href} rel="noreferrer" target="_blank">
              {links.directVideo.label}
            </a>
          ) : (
            <span className="disabled-link">视频链接待补充</span>
          )}
          {links.detailPage ? (
            <a href={links.detailPage.href} rel="noreferrer" target="_blank">{links.detailPage.label}</a>
          ) : null}
        </div>
        {links.warning ? (
          <div className="external-link-note">
            <p className="link-expiry-note">{links.warning}</p>
            <span>视频直链采集时间：{links.collectedAt ?? "未提供"}</span>
          </div>
        ) : null}
      </section>

      <div className="detail-content-grid">
        <section className="record-section" aria-labelledby="acquisition-title">
          <SectionTitle eyebrow="ACQUISITION" id="acquisition-title" title="吸量与投放" />
          <dl className="record-facts">
            <Fact label="公司" value={material.company} />
            <Fact label="广告平台" value={listOrMissing(material.platforms)} />
            <Fact label="投放地区" value={listOrMissing(material.regions)} />
            <Fact label="投放时间" value={material.dateRange} />
            <Fact label="后端品类" value={material.category} />
            <Fact label="题材" value={material.theme} />
            <Fact label="上线阶段" value={material.launchStage} />
            <Fact label="分析来源" value={material.analysisSource} />
          </dl>
          <div className="selling-point-groups">
            <TagGroup label="卖点一级标签" values={material.sellingPointPrimary} />
            <TagGroup label="卖点二级标签" values={material.sellingPointSecondary} />
          </div>
        </section>

        <section className="record-section" aria-labelledby="creative-title">
          <SectionTitle eyebrow="CREATIVE BREAKDOWN" id="creative-title" title="创意拆解" />
          <dl className="record-facts single-column-facts">
            <Fact label="前3秒钩子" value={material.hookTypes.join("、")} />
            <Fact label="第一画面" value={material.firstFrame} />
            <Fact label="是否展示结果" value={material.result} />
            <Fact label="角色" value={material.character} />
            <Fact label="口播" value={material.voiceover} />
            <Fact label="实机" value={material.gameplay} />
            <Fact label="假玩法" value={material.fakeGameplay} />
            <Fact label="画面风格" value={material.visualStyle.join("、")} />
            <Fact label="剪辑节奏" value={material.editingPace} />
            <Fact label="落版方式" value={material.endCard} />
            <Fact label="本地化" value={material.localization} />
          </dl>
        </section>
      </div>

      <section className="record-section production-section" aria-labelledby="production-title">
        <SectionTitle eyebrow="PRODUCTION" id="production-title" title="制作方式" />
        <div className="production-layout">
          <div className="production-primary">
            <span>主要方式</span>
            <strong>{material.productionMethod}</strong>
          </div>
          <TagGroup label="制作组成" values={material.productionComponents} />
          <TagGroup label="制作备注" values={material.productionNotes} />
        </div>
      </section>

      <details className="auxiliary-analysis">
        <summary>查看辅助分析</summary>
        <div>
          <Fact label="可见文案" value={material.hookCopy} />
          <Fact label="钩子机制" value={material.hookMechanism} />
          <Fact
            label="辅助卖点"
            value={material.supportingSellingPoints.map((point) => point.message).join("；")}
          />
        </div>
      </details>

      <section className="script-analysis" aria-labelledby="script-analysis-title">
        <div className="reserved-heading">
          <div>
            <p className="section-label">SCRIPT PATTERN</p>
            <h2 id="script-analysis-title">脚本规律</h2>
          </div>
          <span>已完成分析</span>
        </div>
        <div className="script-analysis-grid">
          <article>
            <span>SUMMARY</span>
            <h3>脚本总结</h3>
            <p>{material.scriptAnalysis.summary}</p>
          </article>
          <article>
            <span>STRUCTURE</span>
            <h3>结构与节奏</h3>
            <ol>
              {material.scriptAnalysis.structureAndRhythm.map((item) => <li key={item}>{item}</li>)}
            </ol>
          </article>
          <article>
            <span>EMOTION</span>
            <h3>情绪曲线</h3>
            <ol>
              {material.scriptAnalysis.emotionCurve.map((item) => <li key={item}>{item}</li>)}
            </ol>
          </article>
        </div>
      </section>
    </div>
  );
}

function SectionTitle({ eyebrow, id, title }: { eyebrow: string; id: string; title: string }) {
  return (
    <div className="record-section-title">
      <p className="section-label">{eyebrow}</p>
      <h2 id={id}>{title}</h2>
    </div>
  );
}

function Fact({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <dt>{label}</dt>
      <dd>{value || "未提供"}</dd>
    </div>
  );
}

function TagGroup({ label, values }: { label: string; values: string[] }) {
  return (
    <div className="tag-group">
      <span>{label}</span>
      <div className="detail-tags">
        {values.length > 0 ? values.map((value) => <strong key={value}>{value}</strong>) : "未提供"}
      </div>
    </div>
  );
}

function listOrMissing(values: string[]) {
  return values.length > 0 ? values.join("、") : "未提供";
}
