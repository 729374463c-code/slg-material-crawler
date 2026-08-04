# 广大大 MCP 可行性测试与网站数据契约

## 当前 Top 10 样本口径（2026-08-04）

- 数据源：广大大 MCP `search_creatives`；
- 时间窗口：接口默认最近 7 天；
- 品类：游戏，4X SLG 标签；
- 素材类型：视频；
- 去重方式：素材去重；
- 排序：热度降序；热度相同时按接口返回顺序保留；
- 数量：10 条广告素材，允许同一产品的不同广告分别入榜；
- 链接：优先视频直链，没有直链时使用原始 YouTube 播放页；
- 详情：每条素材均保存精确到创意 ID 的广大大详情链接。

## 1. 结论

广大大 MCP 可以作为 SLG 素材库的主要取数入口，能够替代原方案中大部分“打开内置浏览器、登录广大大、手工检索和抄录字段”的工作。

本次测试确认可自动完成：

- 精确筛选 `策略 → 4X SLG`；
- 不限制投放国家或地区；
- 只取视频广告；
- 按素材去重；
- 按展示估值从高到低选择 Top 素材；
- 获取产品、公司、平台、国家、语言、展示估值、热度、投放天数、首次和最后发现时间；
- 获取视频直链、原始广告链接、缩略图、素材时长和稳定识别字段；
- 获取游戏玩法、题材、核心赛道和部分 AI 视频标签；
- 用创意详情接口获取近 30 天人气趋势、周参考线和相同素材信息。

因此，后续网站取数方案改为：

```text
广大大 MCP
→ 原始响应快照
→ 字段清洗、去重与标准化
→ 读取视频直链并生成创意拆解草稿
→ 待复核素材数据
→ 本地网站预览
→ 用户确认
→ 才允许提交和发布
```

MCP 可以稳定解决“找什么素材、素材表现如何、链接在哪里”的问题；脚本总结、结构与节奏、情绪曲线仍属于内容理解任务，不能仅凭 MCP 的基础字段直接视为正式分析结论。

创意拆解和制作方式采用两级来源：MCP 自带 AI 标签负责预填可以明确映射的字段，视频直链解析负责补充时序、画面和音频证据。两级结果都先进入待复核状态，不能未经确认直接变成正式结论。

## 2. 实测范围

测试日期：2026-08-04。

### 2.1 字典测试

广大大字典返回以下精确分类：

| 层级 | ID | 名称 |
|---|---:|---|
| 一级分类 | 14 | 策略 |
| 二级分类 | 3046 | 4X SLG |

网站和自动任务必须使用二级分类 `3046`。只使用一级分类“策略”会混入 RTS、塔防、卡牌、自走棋及其他策略产品，不符合“只服务 SLG”的要求。

### 2.2 已知产品检索测试

以 `Whiteout Survival` 为关键词、视频类型、素材去重进行小范围检索，接口正常返回：

- 产品及开发商；
- YouTube、Admob 等投放平台；
- 国家和语言；
- 展示估值、热度、投放天数；
- 视频 MP4 直链；
- YouTube 原始广告链接；
- 分类、玩法和核心赛道；
- 部分素材的 AI 视频标签。

该测试证明 MCP 不只能够返回产品列表，还能够返回网站所需的单条素材级数据。

### 2.3 不限地区 Top 4X SLG 测试

实测查询：

```json
{
  "app_type": 1,
  "tag_ids": [3046],
  "ads_type": [2],
  "duplicate_removal": 1,
  "sort_field": "-impression",
  "page": 1,
  "page_size": 5,
  "include_ai_tags": true
}
```

国家参数 `geo` 被有意省略，表示不限制投放国家。响应中的 `region: "cn"` 表示本次调用使用的 API 服务区域，不代表只检索中国广告，不能写入网站的“投放地区”。

接口成功返回按展示估值排序的 5 条素材，包括 X-Clash、Clash of Clans、Kingshot 等 4X SLG 素材。返回国家覆盖英国、加拿大、澳大利亚及多个欧洲、拉美、中东和亚洲市场，证明“不限地区”筛选有效。

### 2.4 链接测试

对一条 Clash of Clans 记录进行实际访问验证：

| 链接类型 | 结果 |
|---|---|
| 广大大 CDN MP4 视频直链 | HTTP 200，`video/mp4` |
| YouTube 原始广告链接 | HTTP 200，网页可访问 |

并非每条返回记录都有 CDN 视频直链。部分记录只有 `source_url`，因此网站必须允许：

- 有视频直链时显示“打开视频”；
- 没有视频直链、但有原始广告链接时显示“打开原始广告”；
- 两者都缺失时禁用链接操作并标记“链接待复核”；
- 不因为缺少视频直链就伪造链接或重新启用本地视频打包。

### 2.5 创意详情测试

使用 `ad_key + app_type + search_flag` 成功调用创意详情接口，返回：

- 近 30 天人气趋势；
- 每周 Top 1、Top 5、Top 10、Top 50 参考线；
- 相同素材广告；
- 相同素材广告主；
- 相关文案数量。

首版网站不必立即展示全部趋势数据，但必须保留这三个查询身份字段，方便后续刷新详情和增加周度复盘。

### 2.6 创意拆解字段覆盖测试

使用 `Clash of Clans` Top 素材并启用 `include_ai_tags` 实测，MCP 返回了以下 AI 标签组：

- 开头钩子：熟悉场景 / 代入感；
- 营销卖点：省时不肝 / 不氪、快速变强；
- 核心玩法：基地建设、资源收集；
- 视频类型：游戏录屏；
- 角色类型：游戏角色、敌人 / 怪物；
- 主要场景：商店界面、战斗场景、游戏基地；
- 美术风格：风格化 3D；
- 色彩调性：高饱和、多彩、明亮；
- 视频主题：玩家回归、数值成长；
- 结尾引导：明确下载引导；
- 内容题材：卡通奇幻。

这证明 MCP 能够直接预填一部分创意拆解和制作方式字段，但不能稳定提供完整拆解。

| 需求字段 | MCP 直接覆盖 | 处理结论 |
|---|---|---|
| 前 3 秒钩子类型 | 部分覆盖 | 使用 MCP 标签预填，视频解析复核 |
| 第一画面 | 不覆盖具体描述 | 必须读取视频 0 至 1 秒画面 |
| 是否直接展示结果 | 不稳定 | 根据前 3 秒与后续结果画面判断 |
| 核心卖点 | 部分覆盖 | MCP 营销卖点与核心玩法作为草稿 |
| 辅助卖点 | 不完整 | 视频解析按时间顺序提取 |
| 是否有角色 | 部分覆盖 | MCP 角色类型预填，视频复核 |
| 是否有口播 | 不覆盖 | 必须检查音轨和语音内容 |
| 是否有实机 | 部分覆盖 | “游戏录屏”只能作为线索，需视频复核 |
| 是否使用假玩法 | 不覆盖 | 必须结合画面和产品真实玩法判断 |
| 画面风格 | 覆盖较好 | MCP 标签预填，视频补充具体表现 |
| 时长 | 直接覆盖 | 使用 `video_duration` |
| 剪辑节奏 | 不覆盖 | 必须分析镜头变化和时间轴 |
| 落版方式 | 部分覆盖 | MCP 只给引导类型，视频解析末段内容 |
| 本地化形式 | 仅有语言线索 | 结合字幕、口播、CTA 和商店标识判断 |
| 制作方式 | 部分覆盖 | 视频类型标签预填，视频解析制作组成 |

结论：不能只使用 MCP 字段生成正式的“创意拆解”和“制作方式”。正确方案是 MCP 预填加视频直链解析。

### 2.7 视频直链解析可行性

MCP 返回的 Clash of Clans MP4 直链已验证为 HTTP 200 且内容类型为 `video/mp4`，满足直接读取和临时解析的技术条件。

视频解析不把素材长期下载到项目。允许在任务运行期间使用临时目录进行以下处理：

1. 校验 URL、内容类型和文件大小；
2. 读取视频元数据和音轨状态；
3. 提取 0、1、2、3 秒关键帧；
4. 按场景切换或固定间隔提取主体帧；
5. 提取结尾 3 秒用于识别 Logo、CTA 和商店落版；
6. 有语音时生成转写或语言判断；
7. 生成带时间戳证据的结构化拆解；
8. 分析结束后清理临时媒体文件，网站只保存外部链接和文本结果。

当前桌面运行环境未预装 `ffmpeg`，因此正式实现视频解析任务时必须增加媒体解析前置检查，并提供独立的解析运行环境或受控的 `ffmpeg` 工具。该依赖只属于采集分析任务，不进入公开网站的前端构建包。

## 3. 可行性边界

| 能力 | 判断 | 网站处理方式 |
|---|---|---|
| 精确检索 4X SLG | 可行 | 固定使用分类 ID 3046 |
| 不限地区检索 | 可行 | 不传 `geo`，使用返回的 `countries` |
| 获取 Top 表现素材 | 可行 | `sort_field=-impression` |
| 素材去重 | 基本可行 | 接口素材去重后，网站再按 `material_id` 二次去重 |
| 展示估值等吸量数据 | 可行 | 保存原始数值，不只保存格式化文本 |
| 视频链接 | 部分可行 | `video_url` 可空，使用 `source_url` 兜底 |
| 广大大详情页链接 | 当前未直接提供 | 不得把 `source_url` 冒充广大大详情页 |
| 自动卖点标签 | 部分可行 | AI 标签仅作为待复核草稿 |
| 创意拆解和制作方式 | 需二次分析 | MCP 预填，视频直链解析补全并人工确认 |
| 脚本总结与节奏分析 | 需二次分析 | 视频时序分析生成草稿并人工确认 |
| 情绪曲线 | 暂不自动生成 | 保留空模块，不伪造 |
| 转化率、ROAS、收入 | 不可用且不在范围内 | 网站不展示 |

## 4. MCP 与网站的职责边界

公开网站不能直接调用 MCP，也不能包含 MCP 凭证。当前项目是静态前端，正确架构是：

```text
Codex 任务调用 MCP
→ 保存经过筛选的 JSON 快照
→ 项目内纯代码完成标准化
→ 分析任务临时读取视频直链并输出结构化拆解 JSON
→ React 网站读取标准化 JSON
```

这样可以避免：

- 在浏览器中泄露 MCP 身份认证；
- 访问网站时重复消耗数据额度；
- MCP 临时不可用导致网站无法打开；
- 每次刷新页面得到不同结果，影响周度复盘；
- 未复核的新素材自动出现在公开站点。

## 5. 字段数据契约

### 5.1 原始 MCP 身份字段

每条记录必须保留：

```ts
type GuangdadaIdentity = {
  adKey: string;
  searchFlag: number;
  materialId: string | null;
  postId: string | null;
  appType: 1;
};
```

用途：详情查询、去重、追踪来源和后续刷新。不得在 UI 中默认展示 `adKey`，但应保存在数据文件中。

### 5.2 标准化素材字段

```ts
type Material = {
  id: string;
  sourceIdentity: GuangdadaIdentity;
  product: {
    name: string;
    company: string | null;
    category: "SLG";
    categoryTags: string[];
  };
  links: {
    videoUrl: string | null;
    originalAdUrl: string | null;
    guangdadaDetailUrl: string | null;
    previewImageUrl: string | null;
    lastCheckedAt: string | null;
  };
  acquisition: {
    rank: number | null;
    displayEstimate: number | null;
    heat: number | null;
    runDays: number | null;
    firstSeen: string | null;
    lastSeen: string | null;
    platforms: string[];
    countries: string[];
    language: string | null;
    collectedAt: string;
    queryWindow: string;
  };
  mcpDraftTags: {
    summary: string | null;
    tags: Array<{ group: string; name: string }>;
  };
  videoAnalysis: {
    status: "not_started" | "completed" | "failed" | "manual_required";
    analyzedAt: string | null;
    sourceUrl: string | null;
    evidence: Array<{
      startSecond: number;
      endSecond: number;
      observation: string;
    }>;
    error: string | null;
  };
  analysis: {
    primarySellingPoints: string[];
    secondarySellingPoints: string[];
    coreSummary: string | null;
    auxiliaryAnalysis: Record<string, unknown> | null;
    scriptSummary: string | null;
    structureAndRhythm: Array<unknown>;
    emotionCurve: Array<unknown>;
  };
  review: {
    status: "pending_review" | "confirmed" | "rejected";
    reviewedAt: string | null;
    notes: string | null;
  };
};
```

### 5.3 字段映射

| MCP 字段 | 网站字段 | 规则 |
|---|---|---|
| `ad_key` | `sourceIdentity.adKey` | 原样保存 |
| `search_flag` | `sourceIdentity.searchFlag` | 原样保存 |
| `material_id` | `sourceIdentity.materialId` | 可空；主去重键 |
| `advertiser_name` | `product.name` | 产品名 |
| `app_developer` | `product.company` | 缺失为 `null` |
| `category_tag` + `resolved_labels` | `product.categoryTags` | 保存解析后的中文标签 |
| `impression` | `acquisition.displayEstimate` | 保存数值，不保存为“3.2 亿”字符串 |
| `heat` | `acquisition.heat` | 数值 |
| `days_count` | `acquisition.runDays` | 整数天 |
| `first_seen` | `acquisition.firstSeen` | Unix 秒转 `YYYY-MM-DD` |
| `last_seen` | `acquisition.lastSeen` | Unix 秒转 `YYYY-MM-DD` |
| `platform` | `acquisition.platforms` | 使用 `resolved_labels` 转中文显示名 |
| `countries` | `acquisition.countries` | 使用 `resolved_labels` 转中文显示名 |
| `language` | `acquisition.language` | 使用 `resolved_labels` |
| `resource_urls[].video_url` | `links.videoUrl` | 取第一个非空视频地址 |
| `source_url` | `links.originalAdUrl` | 原始媒体链接，不是广大大详情页 |
| `preview_img_url` | `links.previewImageUrl` | 仅用于缩略图，可空 |
| `ai_video_tags_new` | `mcpDraftTags` | 待复核，不直接当人工结论 |

### 5.4 创意拆解来源与冲突规则

每个分析字段需要记录来源和确认状态：

```ts
type AnalysisField<T> = {
  value: T | null;
  source: "mcp" | "video_analysis" | "human";
  confidence: "low" | "medium" | "high";
  evidenceTimestamps: number[];
  reviewStatus: "pending_review" | "confirmed";
};
```

合并优先级：

1. 人工确认结果最高；
2. 有时间戳证据的视频解析高于 MCP 泛化标签；
3. MCP 标签只负责预填；
4. MCP 与视频解析冲突时不得自动覆盖，标记为待复核；
5. 没有证据的字段保持 `null`，不根据产品常识推测。

### 5.5 两步处理状态

| 状态 | 含义 | 是否进入正式网站 |
|---|---|---|
| `mcp_collected` | 已取得基础数据和链接 | 否 |
| `analysis_pending` | 等待视频解析 | 否 |
| `analysis_completed` | 已生成拆解草稿 | 仅内部待复核区 |
| `manual_required` | 无可解析视频或解析失败 | 否，等待人工处理 |
| `confirmed` | 数据和拆解已经确认 | 是 |
| `rejected` | 非 SLG、重复、无有效链接或质量不足 | 否 |

## 6. 去重与 Top 选择规则

1. 查询端使用 `duplicate_removal: 1` 做素材去重。
2. 本地再次按 `material_id` 去重。
3. `material_id` 缺失时，依次使用 `video_url`、`source_url + post_id`、`ad_key` 作为后备键。
4. 同一素材在多个国家或多个广告记录中出现时，合并平台和国家，展示估值取本次查询中最高值，并保留原始记录数量。
5. 默认按 `displayEstimate` 降序。
6. 进入网站候选池前必须满足 `4X SLG` 分类；若分类同时包含其他标签仍可保留，但必须人工确认其主要产品确属 SLG。
7. 没有视频直链但存在原始广告链接的 Top 素材可以进入候选池；两者都缺失的素材标记为 `rejected`，不进入当前演示站。

## 7. 额度与稳定性

MCP 返回 `cost_volume` 和 `remaining_volume`。实测时，返回 5 条创意消耗 5 个数据量，单条详情查询消耗 1 个数据量。

后续任务必须：

- 小页验证后再扩大页数；
- 不对同一批素材重复调用详情接口；
- 原始响应按周保存，避免重复取数；
- 只有进入候选池的素材才查询详情；
- 只有进入候选池且存在可访问视频直链的素材才执行视频解析；
- 任务日志记录查询时间、返回数量、消耗量和失败原因，但不记录身份凭证。

## 8. 本次不改变的产品规则

- 网站只服务 SLG。
- 核心指标仍是展示估值，热度和投放天数为辅助指标。
- 不展示转化率和商业价值。
- 网页不嵌入或托管广告视频，只提供链接。
- 创意拆解和制作方式可以由两步流程生成待复核草稿。
- 脚本总结、结构与节奏可在视频解析能力稳定后生成草稿；情绪曲线当前仍为预留模块。
- 新数据先进入待复核状态。
- 网站修改必须先本地预览，用户明确同意后才允许提交、推送或部署。

## 9. 最终判断

MCP 已满足网站下一阶段的核心数据需求，建议立即将后续搭建从“浏览器手工采集优先”调整为“MCP 结构化取数优先、浏览器人工核验兜底”。当前不需要为取数单独建设数据库或后台；先用版本化 JSON 快照跑通 4 条现有素材和一批 MCP 候选素材，再决定是否增加每周自动任务与持久化服务。
