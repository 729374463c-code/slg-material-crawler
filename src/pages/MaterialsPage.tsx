import { Button, Select, SelectItem } from "@carbon/react";
import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { materials } from "../data/material";
import {
  buildMaterialsCsv,
  getMaterialRanks,
  isPreciseGuangdadaDetail,
  sortMaterials,
} from "../data/materialExport";
import type { MaterialSortKey } from "../data/materialExport";

const ranks = getMaterialRanks(materials);

export function MaterialsPage() {
  const [search, setSearch] = useState("");
  const [platform, setPlatform] = useState("all");
  const [region, setRegion] = useState("all");
  const [sellingPoint, setSellingPoint] = useState("all");
  const [sortKey, setSortKey] = useState<MaterialSortKey>("display");

  const platformOptions = unique(materials.flatMap((item) => item.platforms));
  const regionOptions = unique(materials.flatMap((item) => item.regions));
  const sellingPointOptions = unique(materials.flatMap((item) => item.sellingPointPrimary));

  const filteredMaterials = useMemo(() => {
    const keyword = search.trim().toLocaleLowerCase();
    const filtered = materials.filter((item) => {
      const matchesSearch =
        !keyword ||
        item.name.toLocaleLowerCase().includes(keyword) ||
        item.company.toLocaleLowerCase().includes(keyword);
      const matchesPlatform = platform === "all" || item.platforms.includes(platform);
      const matchesRegion = region === "all" || item.regions.includes(region);
      const matchesSellingPoint =
        sellingPoint === "all" || item.sellingPointPrimary.includes(sellingPoint);
      return (
        matchesSearch &&
        matchesPlatform &&
        matchesRegion &&
        matchesSellingPoint
      );
    });

    return sortMaterials(filtered, sortKey);
  }, [platform, region, search, sellingPoint, sortKey]);

  function clearFilters() {
    setSearch("");
    setPlatform("all");
    setRegion("all");
    setSellingPoint("all");
    setSortKey("display");
  }

  function exportCurrentResults() {
    const csv = buildMaterialsCsv(filteredMaterials, materials);
    const url = URL.createObjectURL(new Blob([csv], { type: "text/csv;charset=utf-8" }));
    const anchor = document.createElement("a");
    anchor.href = url;
    anchor.download = `竞品吸量素材调研_${new Date().toISOString().slice(0, 10)}.csv`;
    anchor.click();
    URL.revokeObjectURL(url);
  }

  return (
    <div className="page materials-page">
      <section className="page-heading data-table-heading">
        <div>
          <p className="eyebrow">COMPETITOR CREATIVE RESEARCH / SLG</p>
          <h1>竞品吸量素材调研</h1>
          <p className="page-description">
            独立保存本周 Top 10 竞品素材的投放表现与卖点标签，供筛选、复盘和后续飞书导出使用。
          </p>
        </div>
        <div className="heading-actions">
          <span className="heading-note">当前结果 {filteredMaterials.length} 条</span>
          <Button disabled title="飞书接入将在后续版本实现">
            飞书导出（预留）
          </Button>
          <Button disabled={filteredMaterials.length === 0} onClick={exportCurrentResults}>
            导出 CSV
          </Button>
        </div>
      </section>

      <section className="dataset-scope" aria-label="数据口径">
        <div>
          <span>分类</span>
          <strong>策略：4X SLG</strong>
        </div>
        <div>
          <span>地区</span>
          <strong>不限地区</strong>
        </div>
        <div>
          <span>排序基准</span>
          <strong>展示估值</strong>
        </div>
        <div>
          <span>模块边界</span>
          <strong>不含创意拆解</strong>
        </div>
      </section>

      <section className="table-toolbar" aria-label="素材筛选与排序">
        <label className="search-field">
          <span>产品或公司</span>
          <input
            onChange={(event) => setSearch(event.target.value)}
            placeholder="搜索产品或公司"
            type="search"
            value={search}
          />
        </label>
        <Select
          id="platform-filter"
          labelText="广告平台"
          onChange={(event) => setPlatform(event.target.value)}
          value={platform}
        >
          <SelectItem text="全部平台" value="all" />
          {platformOptions.map((option) => (
            <SelectItem key={option} text={option} value={option} />
          ))}
        </Select>
        <Select
          id="region-filter"
          labelText="投放地区"
          onChange={(event) => setRegion(event.target.value)}
          value={region}
        >
          <SelectItem text="全部地区" value="all" />
          {regionOptions.map((option) => (
            <SelectItem key={option} text={option} value={option} />
          ))}
        </Select>
        <Select
          id="selling-point-filter"
          labelText="卖点一级标签"
          onChange={(event) => setSellingPoint(event.target.value)}
          value={sellingPoint}
        >
          <SelectItem text="全部卖点" value="all" />
          {sellingPointOptions.map((option) => (
            <SelectItem key={option} text={option} value={option} />
          ))}
        </Select>
        <Select
          id="sort-filter"
          labelText="排序"
          onChange={(event) => setSortKey(event.target.value as MaterialSortKey)}
          value={sortKey}
        >
          <SelectItem text="展示估值最高" value="display" />
          <SelectItem text="热度最高" value="heat" />
          <SelectItem text="投放最久" value="days" />
          <SelectItem text="最近投放" value="recent" />
        </Select>
        <button className="clear-filters" onClick={clearFilters} type="button">
          清空筛选
        </button>
      </section>

      <section className="materials-table-shell" aria-label="竞品吸量素材调研数据">
        {filteredMaterials.length > 0 ? (
          <div className="materials-table-scroll">
            <table className="materials-table">
              <thead>
                <tr className="table-groups">
                  <th colSpan={2} scope="colgroup">产品与素材</th>
                  <th colSpan={7} scope="colgroup">吸量与投放</th>
                  <th colSpan={2} scope="colgroup">卖点类型</th>
                </tr>
                <tr>
                  <th scope="col">产品信息</th>
                  <th scope="col">视频素材</th>
                  <th scope="col">排名</th>
                  <th scope="col">广告平台</th>
                  <th scope="col">热度</th>
                  <th scope="col">投放天数</th>
                  <th scope="col">展示估值</th>
                  <th scope="col">投放时间</th>
                  <th scope="col">投放地区</th>
                  <th scope="col">一级标签</th>
                  <th scope="col">二级标签</th>
                </tr>
              </thead>
              <tbody>
                {filteredMaterials.map((material) => (
                  <tr data-testid="material-data-row" key={material.id}>
                    <td className="product-cell">
                      <Link to={`/materials/${material.id}`}>{material.name}</Link>
                      <span>{material.company}</span>
                      <small>{material.dataSource}</small>
                    </td>
                    <td className="link-cell">
                      {material.videoLink ? (
                        <a href={material.videoLink} rel="noreferrer" target="_blank">
                          打开视频
                        </a>
                      ) : material.originalAdLink ? (
                        <a href={material.originalAdLink} rel="noreferrer" target="_blank">
                          打开原始广告
                        </a>
                      ) : (
                        <span>链接待补充</span>
                      )}
                      {isPreciseGuangdadaDetail(material.guangdadaDetailLink) ? (
                        <a
                          className="secondary-table-link"
                          href={material.guangdadaDetailLink ?? undefined}
                          rel="noreferrer"
                          target="_blank"
                        >
                          广大大详情
                        </a>
                      ) : null}
                    </td>
                    <td className="numeric-cell">{ranks.get(material.id) ?? "未提供"}</td>
                    <td>{listOrMissing(material.platforms)}</td>
                    <td className="numeric-cell">{material.heatValue ?? "未提供"}</td>
                    <td className="numeric-cell">{material.runDaysValue ?? "未提供"}</td>
                    <td className="estimate-cell">{material.displayEstimate}</td>
                    <td className="date-cell">
                      <span>{material.dateStart ?? "未提供"}</span>
                      <span>{material.dateEnd ?? "未提供"}</span>
                    </td>
                    <td>{tagList(material.regions, 3)}</td>
                    <td>{tagList(material.sellingPointPrimary)}</td>
                    <td>{tagList(material.sellingPointSecondary)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="empty-filter-result">
            <strong>没有符合当前条件的素材</strong>
            <p>清空筛选后可重新查看全部记录。</p>
            <button className="clear-filters" onClick={clearFilters} type="button">
              清空筛选
            </button>
          </div>
        )}
      </section>

      <p className="table-footnote">
        本模块只展示并导出竞品调研字段。创意拆解、制作方式、素材对比和分析方法均在其他模块维护。
      </p>
    </div>
  );
}

function unique(values: string[]) {
  return [...new Set(values.filter(Boolean))].sort((left, right) => left.localeCompare(right));
}

function listOrMissing(values: string[]) {
  return values.length > 0 ? values.join("、") : "未提供";
}

function tagList(values: string[], limit = values.length) {
  if (values.length === 0) return <span className="missing-value">未提供</span>;
  const visible = values.slice(0, limit);

  return (
    <div className="table-tags">
      {visible.map((value) => (
        <span key={value}>{value}</span>
      ))}
      {values.length > limit ? <small>+{values.length - limit}</small> : null}
    </div>
  );
}
