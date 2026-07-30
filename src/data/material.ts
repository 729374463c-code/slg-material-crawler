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
    localArchivePath: "C:/Users/chenzhiqi/Downloads/1 (1).mp4",
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
    productionNotes: ["实机录屏：少量", "真人剧情：反应小窗", "AI 生成：未见明确证据", "可玩广告：否"],
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
    name: "Lords Glory",
    recordName: "Lords Glory / Forest Combat Hook",
    company: "SkyRise Digital Pte. Ltd.",
    region: "不限地区",
    platform: "Google Play",
    channel: "广大大策略筛选",
    launchStage: "投放中素材 / 当日 Top 样本",
    theme: "奇幻冒险战斗",
    category: "SLG / 英雄养成 / 战斗推进",
    format: "怪物威胁 / 小队推进 / 剧情小窗",
    audience: "对英雄小队、怪物战斗和轻策略推进反馈感兴趣的泛策略用户。",
    hookTypes: ["怪物威胁", "小队战斗", "路径推进", "剧情插片"],
    hookCopy: "Lords Glory",
    hookMechanism: "用森林路径上的巨型怪物和小队推进制造即时威胁，再穿插剧情小窗增强世界观感。",
    firstFrame: "竖屏森林道路，小队角色向前推进，右侧出现大型黑色怪物；画面两侧使用模糊背景填充。",
    result: "部分。开头直接展示小队遭遇怪物与战斗推进，但没有直接展示最终胜负或落版转化结果。",
    coreSellingPoint: "轻量战斗反馈和奇幻角色题材进入门槛低，能快速吸引偏英雄养成与策略战斗的用户。",
    supportingSellingPoints: [
      { sequence: 1, benefit_type: "威胁明确", message: "巨型怪物在前 3 秒内形成清晰冲突，降低理解成本。" },
      { sequence: 2, benefit_type: "成长反馈", message: "小队推进、英雄头像和技能 UI 强化战斗成长感。" },
      { sequence: 3, benefit_type: "剧情承接", message: "中段插入手部、室内角色等剧情画面，补充奇幻世界观。" },
    ],
    character: "是。有小队英雄、怪物、剧情插片中的角色形象。",
    voiceover: "有音频流；抽帧未见逐字字幕，本 demo 先按配乐/音效型素材记录。",
    gameplay: "是。主体为竖屏战斗画面和游戏 UI，包含小队、技能头像、暂停按钮等元素。",
    fakeGameplay: "未见明显假玩法。当前画面更接近类实机战斗展示与剧情剪辑混合。",
    visualStyle: ["竖屏 3D 奇幻", "森林路径战斗", "模糊背景填充", "剧情小窗插片"],
    duration: "22.42 秒",
    editingPace: "快节奏，战斗推进与剧情插片交替出现，约 4 到 6 秒切换一次视觉重点。",
    endCard: "抽帧未见独立商店落版，主要以游戏内容和内置 UI 承接。",
    localization: "低文字依赖，画面以角色行动、怪物威胁和图标 UI 为主，出现少量英文 UI。",
    productionMethod: "混合制作",
    productionComponents: ["类实机战斗画面", "剧情插片", "游戏 UI", "竖屏视频剪辑"],
    productionNotes: ["实机录屏：是，偏类实机战斗展示", "3D 动画：游戏内 3D/类 3D 画面", "真人剧情：否", "AI 生成：未见明确证据", "可玩广告：否"],
    dataSource: "广大大",
    displayEstimate: "4.3K",
    popularity: "1791",
    heat: "51",
    runDays: "1 天",
    dateRange: "2026-07-30 至 2026-07-30",
    videoUrl: "/media/lords-glory-22s.mp4",
    videoLink: "https://sp2cdn-idea-global.zingfront.com/sp_opera/07a6689ced20c9de5899080841e733df.mp4",
    sourceLink: guangdadaPage,
    localArchivePath:
      "C:/Users/chenzhiqi/Downloads/slg-ad-videos/guangdada-lords-glory/001-lords-glory-22s.mp4",
    status: "pending_review",
    statusLabel: "已抽帧拆解",
  },
  {
    id: "SLG-0004",
    name: "Savage Survival: Jurassic Isle",
    recordName: "Savage Survival / Jurassic Isle Survival Hook",
    company: "Phantix Games",
    region: "不限地区",
    platform: "Google Play",
    channel: "广大大策略筛选",
    launchStage: "投放中素材 / 当日 Top 样本",
    theme: "侏罗纪荒岛生存",
    category: "SLG / 生存建造 / 荒岛战争",
    format: "部落基地建设 / 狩猎防守 / 资源成长",
    audience: "对原始部落、生存建造、基地成长和防守经营感兴趣的策略用户。",
    hookTypes: ["基地建设", "生存压力", "狩猎防守", "资源成长"],
    hookCopy: "Savage Survival: Jurassic Isle",
    hookMechanism: "用原始部落营地、任务列表和持续建造动作，把生存成长目标直接摆到首屏。",
    firstFrame: "竖屏原始部落营地，画面中有茅草屋、火堆、资源 UI、任务列表和多个角色行动。",
    result: "是。直接展示基地建设、资源成长、狩猎动物和修建围栏等结果型过程。",
    coreSellingPoint: "原始部落生存题材和基地建设循环清晰，能让 SLG 用户快速理解成长、防守和资源管理目标。",
    supportingSellingPoints: [
      { sequence: 1, benefit_type: "建设反馈", message: "茅草屋、木架、火堆和围栏持续出现，强化基地从无到有的成长感。" },
      { sequence: 2, benefit_type: "生存冲突", message: "狩猎野兽、应对熊类威胁，让资源获取和防守压力更直观。" },
      { sequence: 3, benefit_type: "系统可见", message: "任务列表、资源栏、底部功能入口完整露出，利于承接 SLG 长线玩法。" },
    ],
    character: "是。有部落角色、工人/猎人形象，以及熊等野生动物。",
    voiceover: "有音频流；画面未见逐字字幕，本 demo 先按配乐/音效型素材记录。",
    gameplay: "是。主体为游戏实机感 UI 与基地操作画面，包括任务、资源、地图入口和建筑互动。",
    fakeGameplay: "未见明显假玩法。画面逻辑与生存建造、基地经营系统一致。",
    visualStyle: ["竖屏实机感", "原始部落", "高细节自然环境", "资源 UI 常驻"],
    duration: "21.18 秒",
    editingPace: "中快节奏，连续展示营地、建造、狩猎、围栏等场景，保持同一套游戏 UI 贯穿。",
    endCard: "抽帧未见独立商店落版，主要以实机画面和游戏 UI 结束。",
    localization: "英文 UI 本地化，包括 QUESTS、Hunt Animal、Campaign、World 等入口；无大段口播字幕。",
    productionMethod: "实机录屏 / 类实机展示",
    productionComponents: ["游戏实机感录屏", "资源与任务 UI", "部落角色动画", "竖屏素材"],
    productionNotes: ["实机录屏：是，表现为可操作游戏 UI", "3D 动画：游戏内 3D/类 3D 画面", "真人剧情：否", "AI 生成：未见明确证据", "可玩广告：否"],
    dataSource: "广大大",
    displayEstimate: "5.1K",
    popularity: "1858",
    heat: "51",
    runDays: "1 天",
    dateRange: "2026-07-30 至 2026-07-30",
    videoUrl: "/media/savage-survival-21s.mp4",
    videoLink: "https://sp2cdn-idea-global.zingfront.com/sp_opera/b8d1b9c22e13cebe61bf878e82c476bf.mp4",
    sourceLink: guangdadaPage,
    localArchivePath:
      "C:/Users/chenzhiqi/Downloads/slg-ad-videos/guangdada-savage-survival/001-savage-survival-21s.mp4",
    status: "pending_review",
    statusLabel: "已抽帧拆解",
  },
];

export const confirmedMaterials = materials.filter((material) => material.status !== "pending_video");
export const comparableMaterials = materials.slice(0, 3);
export const minimumComparisonReason = "至少需要 2 条素材才能开始对比";
