import { Button, Select, SelectItem } from "@carbon/react";
import { useState } from "react";
import { EmptyMaterialSlot } from "../components/EmptyMaterialSlot";
import { material, minimumComparisonReason } from "../data/material";

export function MaterialsPage() {
  const [platform, setPlatform] = useState("YouTube");
  const hasMatch = platform === "YouTube";

  return (
    <div className="page materials-page">
      <section className="page-heading">
        <div>
          <p className="eyebrow">MATERIAL EVIDENCE LIBRARY</p>
          <h1>素材库</h1>
        </div>
        <p className="heading-note">1 条真实样本 · 4 个保留位</p>
      </section>

      <section className="filter-bar" aria-label="素材筛选">
        <Select id="product-filter" labelText="产品" defaultValue="all">
          <SelectItem value="all" text="全部产品" />
          <SelectItem value="clash-of-clans" text="Clash of Clans" />
        </Select>
        <Select id="region-filter" labelText="地区" defaultValue="all">
          <SelectItem value="all" text="全部地区" />
          <SelectItem value="unavailable" text="未提供" />
        </Select>
        <Select
          id="platform-filter"
          labelText="平台"
          value={platform}
          onChange={(event) => setPlatform(event.target.value)}
        >
          <SelectItem value="YouTube" text="YouTube" />
          <SelectItem value="TikTok" text="TikTok" />
        </Select>
        <Select id="hook-filter" labelText="钩子类型" defaultValue="all">
          <SelectItem value="all" text="全部钩子" />
          <SelectItem value="number-list" text="数字清单" />
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
          {hasMatch ? (
            <div className="material-list">
              <div className="material-row real-material selected-material">
                <span className="material-index">01</span>
                <div>
                  <strong>{material.name}</strong>
                  <p>{material.hookTypes.slice(0, 2).join(" · ")}</p>
                </div>
                <span className="metric-value">{material.displayEstimate}</span>
              </div>
              {Array.from({ length: 4 }, (_, index) => (
                <EmptyMaterialSlot key={index} />
              ))}
            </div>
          ) : (
            <div className="empty-filter-result">
              <strong>没有符合当前条件的素材</strong>
              <p>切换平台筛选可查看已接入样本。</p>
            </div>
          )}
        </aside>

        <section className="material-detail" aria-labelledby="detail-title">
          {hasMatch ? (
            <>
              <div className="detail-hero">
                <div>
                  <p className="section-label">SELECTED / {material.id}</p>
                  <h2 id="detail-title">{material.recordName}</h2>
                  <p>{material.audience}</p>
                </div>
                <span className="selected-pill">已选入对比 · 1</span>
              </div>

              <div className="video-evidence">
                <video src={material.videoUrl} controls preload="metadata">
                  视频文件不可用，文字拆解仍可查看
                </video>
                <div className="video-caption">
                  <span>9:16 / {material.duration}</span>
                  <span>原始证据文件</span>
                </div>
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
                </dl>
              </DetailSection>

              <DetailSection title="创意拆解" index="02">
                <dl className="detail-list">
                  <Fact label="前 3 秒钩子" value={material.hookTypes.join("、")} />
                  <Fact label="可见文案" value={material.hookCopy} />
                  <Fact label="钩子机制" value={material.hookMechanism} />
                  <Fact
                    label="第一画面"
                    value={`${material.firstFrame}；焦点：${material.firstFrameFocus}；${material.brandRecognition}`}
                  />
                  <Fact label="核心卖点" value={material.coreSellingPoint} />
                  <Fact label="是否直接展示结果" value={material.result} />
                  <Fact label="角色" value={material.character} />
                  <Fact label="口播" value={material.voiceover} />
                  <Fact label="实机" value={material.gameplay} />
                  <Fact label="假玩法" value={material.fakeGameplay} />
                  <Fact label="画面风格" value={material.visualStyle.join("、")} />
                  <Fact label="剪辑节奏" value={material.editingPace} />
                  <Fact
                    label="画面规格"
                    value={`${material.duration} · ${material.resolution} · ${material.aspectRatio} · ${material.frameRate}`}
                  />
                  <Fact label="落版" value={material.endCard} />
                  <Fact label="本地化" value={material.localization} />
                </dl>
                <div className="selling-points">
                  <p className="section-label">FIVE SUPPORTING REASONS</p>
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
                  <Fact
                    label="制作组成"
                    value={material.productionComponents.join("、")}
                  />
                  <Fact label="排除项" value={material.productionNotes.join("；")} />
                </dl>
              </DetailSection>

              <DetailSection title="吸量数据" index="04">
                <div className="performance-grid">
                  <div className="primary-metric">
                    <span>展示量预估</span>
                    <strong>{material.displayEstimate}</strong>
                  </div>
                  <dl className="fact-grid">
                    <Fact label="数据来源" value={material.dataSource} />
                    <Fact label="平台" value={material.platform} />
                    <Fact label="投放天数" value={`${material.runDays} 天`} />
                    <Fact label="统计区间" value={material.dateRange} />
                  </dl>
                </div>
              </DetailSection>

              <div className="detail-action">
                <p>{minimumComparisonReason}</p>
                <Button disabled>进入对比</Button>
              </div>
            </>
          ) : (
            <div className="empty-detail">
              <p className="section-label">NO MATCH</p>
              <h2 id="detail-title">没有符合当前条件的素材</h2>
              <p>当前详情已隐藏，调整筛选条件后重新显示。</p>
            </div>
          )}
        </section>
      </div>
    </div>
  );
}

function DetailSection({
  title,
  index,
  children,
}: {
  title: string;
  index: string;
  children: React.ReactNode;
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
