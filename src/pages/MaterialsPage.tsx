import { Select, SelectItem } from "@carbon/react";
import { useMemo, useState } from "react";
import type { ReactNode } from "react";
import { materials } from "../data/material";
import type { Material } from "../data/material";

export function MaterialsPage() {
  const [platform, setPlatform] = useState("all");
  const [selectedId, setSelectedId] = useState(materials[0].id);

  const filteredMaterials = useMemo(
    () => materials.filter((item) => platform === "all" || item.platform === platform),
    [platform],
  );
  const selected = materials.find((item) => item.id === selectedId) ?? materials[0];

  return (
    <div className="page materials-page">
      <section className="page-heading">
        <div>
          <p className="eyebrow">MATERIAL EVIDENCE LIBRARY</p>
          <h1>素材库</h1>
        </div>
        <p className="heading-note">5 条样本位 / 2 条可播放 / 3 条待补视频</p>
      </section>

      <section className="filter-bar" aria-label="素材筛选">
        <Select id="product-filter" labelText="产品" defaultValue="all">
          <SelectItem value="all" text="全部产品" />
          {materials.map((item) => (
            <SelectItem key={item.id} value={item.id} text={item.name} />
          ))}
        </Select>
        <Select id="region-filter" labelText="地区" defaultValue="all">
          <SelectItem value="all" text="不限地区" />
          <SelectItem value="unknown" text="未提供" />
        </Select>
        <Select
          id="platform-filter"
          labelText="平台"
          value={platform}
          onChange={(event) => setPlatform(event.target.value)}
        >
          <SelectItem value="all" text="全部平台" />
          <SelectItem value="YouTube" text="YouTube" />
          <SelectItem value="Google Play" text="Google Play" />
        </Select>
        <Select id="status-filter" labelText="状态" defaultValue="all">
          <SelectItem value="all" text="全部状态" />
          <SelectItem value="confirmed" text="已确认" />
          <SelectItem value="pending" text="待复核" />
        </Select>
      </section>

      <div className="master-detail">
        <aside className="material-master" aria-labelledby="material-list-title">
          <div className="section-heading compact-heading">
            <div>
              <p className="section-label">MATERIAL INDEX</p>
              <h2 id="material-list-title">素材列表</h2>
            </div>
          </div>
          {filteredMaterials.length > 0 ? (
            <div className="material-list">
              {filteredMaterials.map((item, index) => (
                <button
                  className={`material-row material-button ${
                    item.id === selected.id ? "selected-material" : ""
                  }`}
                  key={item.id}
                  onClick={() => setSelectedId(item.id)}
                  type="button"
                >
                  <span className="material-index">{String(index + 1).padStart(2, "0")}</span>
                  <div>
                    <strong>{item.name}</strong>
                    <p>{item.hookTypes.slice(0, 2).join(" / ")}</p>
                  </div>
                  <span className="metric-value">{item.displayEstimate}</span>
                </button>
              ))}
            </div>
          ) : (
            <div className="empty-filter-result">
              <strong>没有符合当前条件的素材</strong>
              <p>切换平台筛选可查看已接入样本。</p>
            </div>
          )}
        </aside>

        <MaterialDetail material={selected} />
      </div>
    </div>
  );
}

function MaterialDetail({ material }: { material: Material }) {
  return (
    <section className="material-detail" aria-labelledby="detail-title">
      <div className="detail-hero">
        <div>
          <p className="section-label">SELECTED / {material.id}</p>
          <h2 id="detail-title">{material.recordName}</h2>
          <p>{material.audience}</p>
        </div>
        <span className={`selected-pill status-${material.status}`}>{material.statusLabel}</span>
      </div>

      <div className="video-evidence">
        {material.videoUrl ? (
          <video src={material.videoUrl} controls preload="metadata">
            视频文件不可用，文字拆解仍可查看。
          </video>
        ) : (
          <div className="no-video-panel">
            <strong>视频待补充</strong>
            <p>当前只保留广大大 Top 列表记录，待拿到视频链接后再做完整拆解。</p>
          </div>
        )}
        <div className="video-caption">
          <span>{material.duration}</span>
          <span>{material.videoUrl ? "可在线播放" : "待补视频"}</span>
        </div>
      </div>

      <div className="link-strip">
        {material.videoLink ? (
          <a href={material.videoLink} rel="noreferrer" target="_blank">
            打开视频链接
          </a>
        ) : (
          <span>视频链接待补充</span>
        )}
        <a href={material.sourceLink} rel="noreferrer" target="_blank">
          查看广大大详情
        </a>
      </div>

      <DetailSection title="基础信息" index="01">
        <dl className="fact-grid">
          <Fact label="产品" value={material.name} />
          <Fact label="公司" value={material.company} />
          <Fact label="地区" value={material.region} />
          <Fact label="平台" value={material.platform} />
          <Fact label="上线阶段" value={material.launchStage} />
          <Fact label="题材" value={material.theme} />
          <Fact label="后端品类" value={material.category} />
          <Fact label="状态" value={material.statusLabel} />
        </dl>
      </DetailSection>

      <DetailSection title="创意拆解" index="02">
        <dl className="detail-list">
          <Fact label="前 3 秒钩子" value={material.hookTypes.join("、")} />
          <Fact label="可见文案" value={material.hookCopy} />
          <Fact label="钩子机制" value={material.hookMechanism} />
          <Fact label="第一画面" value={material.firstFrame} />
          <Fact label="核心卖点" value={material.coreSellingPoint} />
          <Fact label="是否展示结果" value={material.result} />
          <Fact label="角色" value={material.character} />
          <Fact label="口播" value={material.voiceover} />
          <Fact label="实机" value={material.gameplay} />
          <Fact label="假玩法" value={material.fakeGameplay} />
          <Fact label="画面风格" value={material.visualStyle.join("、")} />
          <Fact label="剪辑节奏" value={material.editingPace} />
          <Fact label="落版" value={material.endCard} />
          <Fact label="本地化" value={material.localization} />
        </dl>
        <div className="selling-points">
          <p className="section-label">SUPPORTING SELLING POINTS</p>
          <ol>
            {material.supportingSellingPoints.map((point) => (
              <li key={point.sequence}>
                <span>{String(point.sequence).padStart(2, "0")}</span>
                <div>
                  <strong>{point.benefit_type}</strong>
                  <p>{point.message}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </DetailSection>

      <DetailSection title="制作方式" index="03">
        <dl className="detail-list">
          <Fact label="主要方式" value={material.productionMethod} />
          <Fact label="制作组成" value={material.productionComponents.join("、")} />
          <Fact label="备注" value={material.productionNotes.join("；")} />
        </dl>
      </DetailSection>

      <DetailSection title="吸量数据" index="04">
        <div className="performance-grid">
          <div className="primary-metric">
            <span>展示估值</span>
            <strong>{material.displayEstimate}</strong>
          </div>
          <dl className="fact-grid">
            <Fact label="数据来源" value={material.dataSource} />
            <Fact label="人气值" value={material.popularity} />
            <Fact label="热度" value={material.heat} />
            <Fact label="统计区间" value={material.dateRange} />
          </dl>
        </div>
      </DetailSection>
    </section>
  );
}

function DetailSection({
  title,
  index,
  children,
}: {
  title: string;
  index: string;
  children: ReactNode;
}) {
  return (
    <section className="detail-section">
      <div className="detail-section-title">
        <span>{index}</span>
        <h3>{title}</h3>
      </div>
      <div>{children}</div>
    </section>
  );
}

function Fact({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <dt>{label}</dt>
      <dd>{value}</dd>
    </div>
  );
}
