export type ReviewStatus = "confirmed" | "pending_review" | "pending_video";

export type Material = {
  id: string;
  name: string;
  recordName: string;
  company: string;
  region: string;
  platform: string;
  channel: string;
  launchStage: string;
  theme: string;
  category: string;
  format: string;
  audience: string;
  hookTypes: string[];
  hookCopy: string;
  hookMechanism: string;
  firstFrame: string;
  result: string;
  coreSellingPoint: string;
  supportingSellingPoints: Array<{ sequence: number; benefit_type: string; message: string }>;
  character: string;
  voiceover: string;
  gameplay: string;
  fakeGameplay: string;
  visualStyle: string[];
  duration: string;
  editingPace: string;
  endCard: string;
  localization: string;
  productionMethod: string;
  productionComponents: string[];
  productionNotes: string[];
  dataSource: string;
  displayEstimate: string;
  popularity: string;
  heat: string;
  runDays: string;
  dateRange: string;
  videoUrl: string | null;
  videoLink: string | null;
  sourceLink: string;
  localArchivePath?: string;
  status: ReviewStatus;
  statusLabel: string;
};

const guangdadaPage = "https://guangdada.net/modules/creative/display-ads";

export const materials: Material[] = [
  {
    id: "SLG-0001",
    name: "Clash of Clans",
    recordName: "Clash of Clans / 5 Reasons to Return",
    company: "Supercell",
    region: "未提供",
    platform: "YouTube",
    channel: "YouTube",
    launchStage: "成熟期产品 / 老玩家回流召回",
    theme: "欧美卡通奇幻战争",
    category: "SLG / 村庄建设 / 联盟战争",
    format: "五点理由清单 / 老玩家召回",
    audience: "曾经玩过但已流失或长期未登录的 Clash of Clans 老玩家。",
    hookTypes: ["数字清单", "老玩家召回", "利益承诺", "强品牌识别"],
    hookCopy: "Here’s 5 Reasons Why You Should Log Back Into Your Old Clash of Clans Account",
    hookMechanism: "用 5 个回坑理由制造信息缺口，并直接点名旧账号玩家。",
    firstFrame: "游戏草地地图背景，中央出现高对比黄色英文 Here’s。",
    result: "否。开头直接承诺提供回到旧账号的 5 个理由。",
    coreSellingPoint: "老玩家回归后的追赶成本更低，可以更快恢复成长。",
    supportingSellingPoints: [
      { sequence: 1, benefit_type: "离线追赶", message: "离线期间自动完成部分升级。" },
      { sequence: 2, benefit_type: "减少等待", message: "移除部队训练等待。" },
      { sequence: 3, benefit_type: "成长加速", message: "缩短建筑升级时间。" },
      { sequence: 4, benefit_type: "免费友好", message: "奖励、宝箱和联赛商店对免费玩家更友好。" },
      { sequence: 5, benefit_type: "便利优化", message: "清理障碍物不再占用建筑工人。" },
    ],
    character: "是。有游戏兵种和野蛮人图标，但没有角色剧情。",
    voiceover: "是。英语旁白配英语逐词字幕。",
    gameplay: "是。主体为游戏实机及游戏 UI。",
    fakeGameplay: "否。未发现与真实游戏系统明显不符的内容。",
    visualStyle: ["高饱和实机", "粗描边字幕", "数字章节卡", "局部放大和模糊转场"],
    duration: "35.06 秒",
    editingPace: "快节奏，约每 4 到 7 秒切换一个理由。",
    endCard: "官方 Logo、App Store 与 Google Play 标识、绿色 PLAY NOW 按钮。",
    localization: "英语口播、英语字幕、英语 CTA、全球双商店下载标识。",
    productionMethod: "混合制作",
    productionComponents: ["实机录屏", "游戏 UI", "口播", "2D 动效", "官方落版"],
    productionNotes: ["3D 动画：否", "真人剧情：否", "AI 生成：否", "可玩广告：否"],
    dataSource: "广大大",
    displayEstimate: "3.2 亿",
    popularity: "约 1.6 万周人气",
    heat: "Top10% 标签",
    runDays: "33 天",
    dateRange: "2026-06-07 至 2026-07-09",
    videoUrl: "/media/clash-of-clans-return.mp4",
    videoLink: "/media/clash-of-clans-return.mp4",
    sourceLink: guangdadaPage,
    status: "confirmed",
    statusLabel: "已确认",
  },
  {
    id: "SLG-0002",
    name: "Whiteout Survival",
    recordName: "Whiteout Survival / River Fish Fake Gameplay Hook",
    company: "Century Games PTE. LTD.",
    region: "未提供",
    platform: "Google Play",
    channel: "ironSource",
    launchStage: "成熟期产品",
    theme: "冰雪末日生存",
    category: "SLG / 生存建造 / 联盟战争",
    format: "假玩法选择 / 真人反应",
    audience: "对低门槛资源选择玩法有兴趣的泛策略用户。",
    hookTypes: ["假玩法误判", "真人反应", "资源选择", "失败悬念"],
    hookCopy: "is that a river",
    hookMechanism: "用河道、鱼群和资源选择制造低理解成本悬念。",
    firstFrame: "雪地河道与大量鱼群的俯视伪玩法场景，左上角叠加真人玩家小窗。",
    result: "否。开头用误判和选择制造悬念。",
    coreSellingPoint: "用轻量资源选择伪玩法降低进入门槛，再承接冰雪生存品牌氛围。",
    supportingSellingPoints: [
      { sequence: 1, benefit_type: "低门槛判断", message: "鱼、木材、火炉等资源选择非常直观。" },
      { sequence: 2, benefit_type: "真人代入", message: "真人小窗强化观看反应。" },
      { sequence: 3, benefit_type: "题材承接", message: "雪地、河流、北极熊贴合冰雪生存题材。" },
    ],
    character: "是。有真人玩家小窗、伪玩法角色和雪地角色。",
    voiceover: "是。英文反应式旁白和字幕。",
    gameplay: "部分。末段有品牌承接画面，主体不是正式 SLG 核心实机。",
    fakeGameplay: "是。主体为收集鱼、搭桥、资源格选择等超休闲伪玩法。",
    visualStyle: ["高饱和 3D 伪玩法", "雪地生存", "真人反应小窗", "粗描边字幕"],
    duration: "31.14 秒",
    editingPace: "中快节奏，连续操作与错误选择推进，末段快速落版。",
    endCard: "Whiteout Survival Logo、PLAY FREE NOW、搜索框、双商店标识。",
    localization: "英文口播、英文字幕、英文 CTA、全球双商店下载标识。",
    productionMethod: "混合制作",
    productionComponents: ["3D 假玩法", "真人小窗", "2D 字幕", "品牌落版"],
    productionNotes: ["实机录屏：少量", "真人剧情：反应小窗", "AI 生成：未确认", "可玩广告：否"],
    dataSource: "广大大",
    displayEstimate: "4.2K",
    popularity: "1640",
    heat: "51",
    runDays: "1 天",
    dateRange: "2026-07-30 至 2026-07-30",
    videoUrl: "https://sp2cdn-idea-global.zingfront.com/sp_opera/d772f8a92059d22079a10f4c6037fdf0.webm",
    videoLink: "https://sp2cdn-idea-global.zingfront.com/sp_opera/d772f8a92059d22079a10f4c6037fdf0.webm",
    sourceLink:
      "https://guangdada.net/modules/creative/display-ads/detail?channel=ironsource&id=a031b1fc4017d1bf2d5e7209e4f6bc21&type=1&created_at=1785379112&fb_merge=false&search_flag=145459",
    localArchivePath:
      "C:/Users/chenzhiqi/Downloads/slg-ad-videos/guangdada-whiteout-survival/001-whiteout-survival-a031b1fc.webm",
    status: "pending_review",
    statusLabel: "自动拆解草稿",
  },
  {
    id: "SLG-0003",
    name: "Top War: Battle Game",
    recordName: "Top War: Battle Game / Runway Merge Hook",
    company: "River Game HK Limited",
    region: "不限地区",
    platform: "Google Play",
    channel: "广大大策略筛选",
    launchStage: "成熟期产品",
    theme: "现代军事合成战争",
    category: "SLG / 合成战斗 / 基地成长",
    format: "合成升级 / 数值成长",
    audience: "偏好即时合成、数值变强和轻策略表达的用户。",
    hookTypes: ["合成升级", "数值刺激", "路径推进"],
    hookCopy: "Top War: Battle Game",
    hookMechanism: "用跑道推进和等级数值变化，把成长反馈压缩到几秒内。",
    firstFrame: "竖屏跑道式战斗画面，单位沿路径推进并出现等级提升反馈。",
    result: "部分。直接展示单位升级和战力增长过程。",
    coreSellingPoint: "合成升级反馈快，策略成长可被快速理解。",
    supportingSellingPoints: [
      { sequence: 1, benefit_type: "即时反馈", message: "等级和数量变化可快速吸引注意。" },
      { sequence: 2, benefit_type: "低门槛策略", message: "用合成表达复杂成长。" },
    ],
    character: "是。以作战单位和军队形象为主。",
    voiceover: "待确认。当前列表页未提供完整音频信息。",
    gameplay: "待确认。列表页显示类游戏画面，需要详情页核验。",
    fakeGameplay: "待确认。需要继续核验是否为真实系统。",
    visualStyle: ["竖屏", "高饱和", "合成跑道", "数值强化"],
    duration: "43 秒",
    editingPace: "中快节奏，围绕合成、升级和路径推进展开。",
    endCard: "待确认。",
    localization: "待确认。",
    productionMethod: "待审稿",
    productionComponents: ["类游戏画面", "数值动效", "竖屏素材"],
    productionNotes: ["视频链接待补充", "详情页待复核"],
    dataSource: "广大大",
    displayEstimate: "4.3K",
    popularity: "1791",
    heat: "51",
    runDays: "1 天",
    dateRange: "2026-07-30 至 2026-07-30",
    videoUrl: null,
    videoLink: null,
    sourceLink: guangdadaPage,
    status: "pending_video",
    statusLabel: "待补充视频链接",
  },
  {
    id: "SLG-0004",
    name: "Lords Glory",
    recordName: "Lords Glory / Camp Survival Opening",
    company: "SkyRise Digital Pte. Ltd.",
    region: "不限地区",
    platform: "Google Play",
    channel: "广大大策略筛选",
    launchStage: "待确认",
    theme: "中世纪营地 / 领主战争",
    category: "SLG / 王国建设 / 战争经营",
    format: "营地开局 / 生存氛围",
    audience: "对中世纪建设、营地成长和战争题材感兴趣的用户。",
    hookTypes: ["营地开局", "生存氛围", "题材识别"],
    hookCopy: "Lords Glory",
    hookMechanism: "用夜晚营地、火光和领主题材建立策略战争氛围。",
    firstFrame: "夜间帐篷营地与火光画面，中心有播放按钮。",
    result: "否。首屏重点是氛围和题材识别。",
    coreSellingPoint: "中世纪领主战争题材明确，适合策略用户快速识别。",
    supportingSellingPoints: [
      { sequence: 1, benefit_type: "题材明确", message: "营地、火光、领主关键词形成中世纪战争联想。" },
      { sequence: 2, benefit_type: "氛围吸引", message: "暗色场景和火光制造危机感。" },
    ],
    character: "待确认。",
    voiceover: "待确认。",
    gameplay: "待确认。列表页仅确认视频缩略画面。",
    fakeGameplay: "待确认。",
    visualStyle: ["中世纪", "夜间营地", "暗色火光", "竖屏视频"],
    duration: "27 秒",
    editingPace: "待确认。需播放完整视频后复核。",
    endCard: "待确认。",
    localization: "待确认。",
    productionMethod: "待审稿",
    productionComponents: ["3D 或类游戏画面", "场景氛围", "竖屏素材"],
    productionNotes: ["视频链接待补充", "详情页待复核"],
    dataSource: "广大大",
    displayEstimate: "4.3K",
    popularity: "1791",
    heat: "51",
    runDays: "1 天",
    dateRange: "2026-07-30 至 2026-07-30",
    videoUrl: null,
    videoLink: null,
    sourceLink: guangdadaPage,
    status: "pending_video",
    statusLabel: "待补充视频链接",
  },
  {
    id: "SLG-0005",
    name: "Savage Survival: Jurassic Isle",
    recordName: "Savage Survival / Jurassic Isle Survival Hook",
    company: "Phantix Games",
    region: "不限地区",
    platform: "Google Play",
    channel: "广大大策略筛选",
    launchStage: "待确认",
    theme: "侏罗纪荒岛生存",
    category: "SLG / 生存建造 / 荒岛战争",
    format: "生存冒险 / 资源压力",
    audience: "对荒岛生存、恐龙题材和基地成长感兴趣的用户。",
    hookTypes: ["生存危机", "恐龙题材", "资源压力"],
    hookCopy: "Savage Survival: Jurassic Isle",
    hookMechanism: "用侏罗纪和荒岛关键词提供强题材识别。",
    firstFrame: "待确认。当前来自广大大策略列表文字记录。",
    result: "待确认。",
    coreSellingPoint: "恐龙荒岛生存题材与 SLG 生存建造框架结合。",
    supportingSellingPoints: [
      { sequence: 1, benefit_type: "强题材", message: "侏罗纪和荒岛关键词具备快速识别度。" },
      { sequence: 2, benefit_type: "生存压力", message: "适合承接资源、建造、防守等 SLG 表达。" },
    ],
    character: "待确认。",
    voiceover: "待确认。",
    gameplay: "待确认。",
    fakeGameplay: "待确认。",
    visualStyle: ["侏罗纪", "荒岛生存", "策略题材"],
    duration: "1 分 10 秒",
    editingPace: "待确认。需播放完整视频后复核。",
    endCard: "待确认。",
    localization: "待确认。",
    productionMethod: "待审稿",
    productionComponents: ["类游戏画面", "题材包装", "竖屏素材"],
    productionNotes: ["视频链接待补充", "详情页待复核"],
    dataSource: "广大大",
    displayEstimate: "4.3K",
    popularity: "1771",
    heat: "51",
    runDays: "1 天",
    dateRange: "2026-07-30 至 2026-07-30",
    videoUrl: null,
    videoLink: null,
    sourceLink: guangdadaPage,
    status: "pending_video",
    statusLabel: "待补充视频链接",
  },
];

export const confirmedMaterials = materials.filter((material) => material.status !== "pending_video");
export const comparableMaterials = materials.slice(0, 3);
export const minimumComparisonReason = "至少需要 2 条素材才能开始对比";
