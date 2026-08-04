export type ReviewStatus = "confirmed" | "pending_review" | "pending_video";

export type ScriptAnalysis = {
  summary: null;
  structureAndRhythm: [];
  emotionCurve: [];
};

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
  displayEstimateValue: number | null;
  popularity: string;
  heat: string;
  heatValue: number | null;
  runDays: string;
  runDaysValue: number | null;
  dateRange: string;
  dateStart: string | null;
  dateEnd: string | null;
  platforms: string[];
  regions: string[];
  sellingPointPrimary: string[];
  sellingPointSecondary: string[];
  videoLink: string | null;
  originalAdLink: string | null;
  guangdadaDetailLink: string | null;
  analysisSource: "人工确认" | "MCP 标签草稿" | "视频解析草稿";
  scriptAnalysis: ScriptAnalysis;
  status: ReviewStatus;
  statusLabel: string;
};

type MaterialSeed = Omit<
  Material,
  | "recordName"
  | "region"
  | "platform"
  | "channel"
  | "launchStage"
  | "category"
  | "supportingSellingPoints"
  | "dataSource"
  | "popularity"
  | "heat"
  | "runDays"
  | "dateRange"
  | "platforms"
  | "scriptAnalysis"
  | "status"
  | "statusLabel"
  | "analysisSource"
> & {
  rank: number;
  platformName: string;
  supportPoints: string[];
};

function createMaterial(seed: MaterialSeed): Material {
  return {
    ...seed,
    recordName: `${seed.name} / 本周热度 Top ${seed.rank}`,
    region: seed.regions.join("、"),
    platform: seed.platformName,
    channel: seed.platformName,
    launchStage: "本周热度 Top 素材 / 持续投放",
    category: "4X SLG / 策略",
    supportingSellingPoints: seed.supportPoints.map((message, index) => ({
      sequence: index + 1,
      benefit_type: seed.sellingPointSecondary[index] ?? "辅助卖点",
      message,
    })),
    dataSource: "广大大 MCP / 2026-08-04",
    popularity: `热度 ${seed.heatValue}`,
    heat: String(seed.heatValue),
    runDays: `${seed.runDaysValue} 天`,
    dateRange: `${seed.dateStart} 至 ${seed.dateEnd}`,
    platforms: [seed.platformName],
    analysisSource: "MCP 标签草稿",
    scriptAnalysis: { summary: null, structureAndRhythm: [], emotionCurve: [] },
    status: "confirmed",
    statusLabel: "MCP 已补全",
  };
}

export const materials: Material[] = [
  createMaterial({
    rank: 1,
    id: "SLG-WEEK-01",
    name: "X-Clash",
    company: "Glaciers Game",
    platformName: "YouTube",
    theme: "卡通奇幻 / 画线救援",
    format: "画线救狗解谜 / 轻玩法获客",
    audience: "偏好低门槛解谜、救援反馈和卡通题材的泛游戏用户。",
    hookTypes: ["宠物危机", "画线解谜", "开放答案"],
    hookCopy: "Draw a line to save the dog!",
    hookMechanism: "用小狗遇险和立即画线的动作，在首屏形成清晰目标与参与冲动。",
    firstFrame: "卡通小狗处于怪物威胁中，画面要求玩家立即画线完成救援。",
    result: "直接展示画线后的救援成败反馈。",
    coreSellingPoint: "无需理解复杂规则，用户可立即通过画线获得解谜和救援反馈。",
    supportPoints: ["宠物危机降低理解门槛。", "开放画线强调创造空间。", "轻玩法负责获客，后端承接 SLG 长线内容。"],
    character: "有。小狗、怪物和卡通英雄承担冲突与反馈。",
    voiceover: "英语文案驱动，主要依赖画面动作与短字幕理解。",
    gameplay: "展示画线救援玩法和卡通战斗反馈。",
    fakeGameplay: "是。前端画线解谜与后端 4X SLG 核心循环不同。",
    visualStyle: ["2D 卡通", "高对比危机场景", "画线轨迹", "即时失败反馈"],
    duration: "原始 YouTube 视频",
    editingPace: "快节奏，围绕遇险、画线、验证结果形成短循环。",
    endCard: "以产品名称和下载跳转承接。",
    localization: "英语短文案，画面叙事占主导，可跨地区理解。",
    productionMethod: "2D 游戏录屏与动效混合",
    productionComponents: ["画线玩法", "卡通角色", "结果反馈", "下载承接"],
    productionNotes: ["MCP 创意详情已核验", "YouTube 原始播放页可访问", "非真人剧情", "线性视频广告"],
    displayEstimate: "3.86 亿",
    displayEstimateValue: 386480381,
    heatValue: 1000,
    runDaysValue: 33,
    dateStart: "2026-07-02",
    dateEnd: "2026-08-03",
    regions: ["英国", "加拿大"],
    sellingPointPrimary: ["轻玩法获客", "情绪刺激"],
    sellingPointSecondary: ["画线解谜", "宠物救援", "失败反馈"],
    videoLink: "https://www.youtube.com/watch?v=7bALUoR4D7c",
    originalAdLink: "https://www.youtube.com/watch?v=7bALUoR4D7c",
    guangdadaDetailLink: "https://guangdada.net/modules/creative/display-ads/detail?channel=youtube&id=1d809c3bcefa511a5837ea5daf873571&type=1&created_at=1783049414&fb_merge=false&search_flag=145459",
  }),
  createMaterial({
    rank: 2,
    id: "SLG-WEEK-02",
    name: "Clash of Clans",
    company: "Supercell",
    platformName: "YouTube",
    theme: "卡通奇幻战争",
    format: "五点理由清单 / 老玩家召回",
    audience: "曾经玩过但已流失或长期未登录的老玩家。",
    hookTypes: ["熟悉场景", "数字清单", "玩家回归"],
    hookCopy: "5 Reasons Why You Should Log Back Into Your Old Account",
    hookMechanism: "以老账号和五个回归理由建立信息缺口，并借助强品牌识别召回用户。",
    firstFrame: "游戏草地地图背景配高对比黄色标题，直接点明回归主题。",
    result: "先给出理由承诺，再逐项展示成长优化结果。",
    coreSellingPoint: "回归玩家可以用更低追赶成本恢复成长。",
    supportPoints: ["离线升级减少追赶压力。", "训练与建筑等待缩短。", "奖励和资源获取对回归玩家更友好。"],
    character: "有。游戏兵种、野蛮人和敌方单位承担品牌识别。",
    voiceover: "英语旁白配逐词字幕。",
    gameplay: "主体为真实游戏录屏、基地和商店 UI。",
    fakeGameplay: "否。展示内容与基地建设和资源收集系统一致。",
    visualStyle: ["高饱和风格化 3D", "游戏录屏", "数字章节卡", "粗描边字幕"],
    duration: "35 秒",
    editingPace: "快节奏，每个理由约占 4 到 7 秒。",
    endCard: "品牌 Logo、商店标识和明确下载按钮。",
    localization: "英语旁白、字幕和 CTA。",
    productionMethod: "实机录屏与 2D 动效混合",
    productionComponents: ["实机录屏", "游戏 UI", "英语口播", "字幕动效", "官方落版"],
    productionNotes: ["MCP 视频标签完整", "省时不肝", "快速变强", "明确下载引导"],
    displayEstimate: "3.22 亿",
    displayEstimateValue: 321799351,
    heatValue: 1000,
    runDaysValue: 251,
    dateStart: "2025-11-26",
    dateEnd: "2026-08-03",
    regions: ["澳大利亚"],
    sellingPointPrimary: ["玩家召回", "核心玩法"],
    sellingPointSecondary: ["省时不肝", "快速变强", "基地建设"],
    videoLink: "https://sp2cdn-idea-global.zingfront.com/sp_opera/0ad50ee0d1cc79761aa691436f2e6097.mp4",
    originalAdLink: "https://www.youtube.com/watch?v=eHNKgqt_qaI",
    guangdadaDetailLink: "https://guangdada.net/modules/creative/display-ads/detail?channel=youtube&id=3d5bee4666f975102f4c3287f3e77f3c&type=1&created_at=1764200624&fb_merge=false&search_flag=145359",
  }),
  createMaterial({
    rank: 3,
    id: "SLG-WEEK-03",
    name: "Clash of Clans",
    company: "Supercell",
    platformName: "YouTube",
    theme: "卡通奇幻 / 村庄经营",
    format: "基地成长 / 奖励收集",
    audience: "关注村庄升级、资源积累和长期成长反馈的策略用户。",
    hookTypes: ["熟悉品牌", "建筑升级", "奖励反馈"],
    hookCopy: "Build, collect and grow your village",
    hookMechanism: "连续展示建筑、宝箱和资源增长，让用户快速看到长期经营回报。",
    firstFrame: "高饱和游戏基地与角色 UI，直接进入村庄经营场景。",
    result: "直接展示建筑升级、宝箱奖励和资源增长结果。",
    coreSellingPoint: "基地建设和持续数值成长提供明确的长期目标。",
    supportPoints: ["宝箱强化即时奖励。", "建筑升级强化成长反馈。", "跨地区低文字素材便于规模化投放。"],
    character: "有。游戏角色和兵种贯穿实机画面。",
    voiceover: "低文字依赖，以配乐、音效和游戏反馈为主。",
    gameplay: "真实基地建设、资源获取和游戏 UI 录屏。",
    fakeGameplay: "否。核心展示与后端经营玩法一致。",
    visualStyle: ["高饱和风格化 3D", "基地 UI", "宝箱奖励", "数值反馈"],
    duration: "35 秒",
    editingPace: "中快节奏，以升级和奖励节点连续推进。",
    endCard: "明确下载引导与品牌承接。",
    localization: "低文字依赖，多地区复用。",
    productionMethod: "游戏录屏",
    productionComponents: ["实机 UI", "建筑升级", "资源反馈", "官方落版"],
    productionNotes: ["MCP 视频标签完整", "风格化 3D", "非真人剧情", "线性视频广告"],
    displayEstimate: "3.21 亿",
    displayEstimateValue: 321173890,
    heatValue: 1000,
    runDaysValue: 257,
    dateStart: "2025-11-19",
    dateEnd: "2026-08-02",
    regions: ["巴拉圭", "埃及", "哥伦比亚", "奥地利", "缅甸", "荷兰", "沙特阿拉伯", "瑞典", "智利", "委内瑞拉", "哈萨克斯坦", "葡萄牙", "匈牙利", "黎巴嫩", "尼泊尔", "丹麦", "波兰", "意大利", "乌克兰", "伊拉克", "秘鲁", "土耳其", "墨西哥", "斯洛文尼亚", "阿塞拜疆", "南非", "柬埔寨", "芬兰", "西班牙", "巴拿马"],
    sellingPointPrimary: ["核心玩法", "成长反馈"],
    sellingPointSecondary: ["基地建设", "宝箱奖励", "数值成长"],
    videoLink: "https://sp2cdn-idea-global.zingfront.com/sp_opera/86f4870881121ecc50ae807383df8850.mp4",
    originalAdLink: "https://www.youtube.com/watch?v=eHNKgqt_qaI",
    guangdadaDetailLink: "https://guangdada.net/modules/creative/display-ads/detail?channel=youtube&id=766f09e1c50b2db3cdeb9b974220890e&type=1&created_at=1764323909&fb_merge=false&search_flag=145359",
  }),
  createMaterial({
    rank: 4,
    id: "SLG-WEEK-04",
    name: "Clash of Clans",
    company: "Supercell",
    platformName: "YouTube",
    theme: "卡通奇幻战争",
    format: "品牌实机 / 随时开战",
    audience: "熟悉 Clash of Clans、重视随时开战与联盟竞争的策略用户。",
    hookTypes: ["品牌识别", "战斗承诺", "移动便利"],
    hookCopy: "Battle anytime, anywhere",
    hookMechanism: "以明确战斗口号和强品牌实机快速完成产品识别。",
    firstFrame: "品牌游戏画面配战斗主张，直接进入村庄和战争场景。",
    result: "展示基地发展与战斗行动结果。",
    coreSellingPoint: "随时建设村庄、组织部队并参与联盟战斗。",
    supportPoints: ["成熟品牌降低认知成本。", "移动端随时开战强化便利性。", "建设与战斗双循环承接长期留存。"],
    character: "有。品牌兵种和英雄承担识别。",
    voiceover: "英语广告文案配游戏音效。",
    gameplay: "真实游戏战斗与村庄经营画面。",
    fakeGameplay: "否。素材主张与后端核心玩法一致。",
    visualStyle: ["风格化 3D", "品牌实机", "战斗场景", "高饱和"],
    duration: "35 秒（同源视频）",
    editingPace: "中快节奏，在建设和战斗之间切换。",
    endCard: "品牌与安装 CTA。",
    localization: "英语标题与文案。",
    productionMethod: "游戏录屏与品牌包装",
    productionComponents: ["实机录屏", "英语文案", "战斗音效", "下载引导"],
    productionNotes: ["MCP 创意详情已补全", "同源 YouTube 视频", "Android 投放", "线性视频广告"],
    displayEstimate: "3.20 亿",
    displayEstimateValue: 319922970,
    heatValue: 1000,
    runDaysValue: 70,
    dateStart: "2026-05-25",
    dateEnd: "2026-08-02",
    regions: ["比利时", "法国", "阿曼", "中国台湾", "阿联酋", "英国", "德国"],
    sellingPointPrimary: ["品牌识别", "核心玩法"],
    sellingPointSecondary: ["随时开战", "村庄建设", "联盟竞争"],
    videoLink: "https://www.youtube.com/watch?v=eHNKgqt_qaI",
    originalAdLink: "https://www.youtube.com/watch?v=eHNKgqt_qaI",
    guangdadaDetailLink: "https://guangdada.net/modules/creative/display-ads/detail?channel=youtube&id=cbfdaf7917d258d58e121bf5479e3ec8&type=1&created_at=1770399273&fb_merge=false&search_flag=145458",
  }),
  createMaterial({
    rank: 5,
    id: "SLG-WEEK-05",
    name: "Kingshot",
    company: "Century Games PTE. LTD.",
    platformName: "YouTube",
    theme: "中世纪资源争夺",
    format: "塔防战斗 / 资源抢占",
    audience: "喜欢塔防、技能操作和资源竞争的中重度策略用户。",
    hookTypes: ["强冲突", "敌军压境", "资源争夺"],
    hookCopy: "Defend the route and seize the resources",
    hookMechanism: "以敌军压境和资源点争夺迅速建立战斗压力。",
    firstFrame: "风格化 3D 战场出现敌人、塔防路径和资源点。",
    result: "直接展示技能释放、击败敌军和资源获取。",
    coreSellingPoint: "塔防操作与资源经营结合，提供即时战斗和长期成长双反馈。",
    supportPoints: ["强冲突开场提高停留。", "技能释放强化操作反馈。", "资源点把战斗与经营目标连接起来。"],
    character: "有。士兵、敌军和中世纪英雄参与战斗。",
    voiceover: "以战斗音效和画面引导为主。",
    gameplay: "游戏录屏，包含塔防、技能和资源收集。",
    fakeGameplay: "部分包装。塔防展示比后端 4X 经营更轻量。",
    visualStyle: ["风格化 3D", "中世纪", "塔防路径", "技能特效"],
    duration: "56 秒",
    editingPace: "快节奏，冲突、技能、资源反馈连续推进。",
    endCard: "产品品牌和安装引导。",
    localization: "低文字依赖，依靠战斗动作跨地区传播。",
    productionMethod: "游戏录屏",
    productionComponents: ["塔防实机", "技能特效", "资源 UI", "品牌落版"],
    productionNotes: ["MCP 视频标签完整", "强冲突开场", "资源收集", "风格化 3D"],
    displayEstimate: "2.94 亿",
    displayEstimateValue: 294224824,
    heatValue: 1000,
    runDaysValue: 97,
    dateStart: "2026-04-30",
    dateEnd: "2026-08-04",
    regions: ["瑞典"],
    sellingPointPrimary: ["核心玩法", "战斗体验"],
    sellingPointSecondary: ["塔防", "资源争夺", "技能释放"],
    videoLink: "https://sp2cdn-idea-global.zingfront.com/sp_opera/2f7233d384428dc1b17c29ce7164cda6.mp4",
    originalAdLink: "https://www.youtube.com/watch?v=2VikIR_EvnE",
    guangdadaDetailLink: "https://guangdada.net/modules/creative/display-ads/detail?channel=youtube&id=afc243631b79e128fd728328ac064e63&type=1&created_at=1753192635&fb_merge=false&search_flag=145359",
  }),
  createMaterial({
    rank: 6,
    id: "SLG-WEEK-06",
    name: "X-Clash",
    company: "Glaciers Game",
    platformName: "YouTube",
    theme: "卡通奇幻 / 休闲解谜",
    format: "轻松画线解谜 / 放置包装",
    audience: "偏好轻松解谜和低操作负担的休闲用户。",
    hookTypes: ["轻松好玩", "画线解谜", "失败重试"],
    hookCopy: "Why is this game so fun",
    hookMechanism: "先用轻松好玩的承诺降低进入门槛，再用画线结果保持观看。",
    firstFrame: "卡通角色与画线谜题直接进入可操作场景。",
    result: "展示画线路径和成功或失败反馈。",
    coreSellingPoint: "用轻量解谜提供即时满足，并向放置与 SLG 长线成长承接。",
    supportPoints: ["轻松承诺降低心理负担。", "失败重试形成短循环。", "卡通角色扩大泛用户覆盖。"],
    character: "有。卡通英雄与怪物构成主要视觉。",
    voiceover: "英语标题配画面和游戏音效。",
    gameplay: "画线解谜与放置游戏包装。",
    fakeGameplay: "是。画线玩法与后端 4X SLG 循环存在差异。",
    visualStyle: ["2D 卡通", "暖色高饱和", "洞穴场景", "画线路径"],
    duration: "44 秒（同源视频）",
    editingPace: "快节奏，按关卡结果连续推进。",
    endCard: "产品安装引导。",
    localization: "英语短标题，主要依赖画面理解。",
    productionMethod: "2D 游戏录屏",
    productionComponents: ["画线玩法", "关卡反馈", "卡通角色", "下载承接"],
    productionNotes: ["MCP 创意详情已补全", "与 Top 7 同源视频", "Android 投放", "线性视频广告"],
    displayEstimate: "2.81 亿",
    displayEstimateValue: 280792431,
    heatValue: 1000,
    runDaysValue: 178,
    dateStart: "2026-02-06",
    dateEnd: "2026-08-02",
    regions: ["泰国", "缅甸", "老挝", "美国", "柬埔寨"],
    sellingPointPrimary: ["轻玩法获客", "休闲体验"],
    sellingPointSecondary: ["画线解谜", "失败重试", "放置包装"],
    videoLink: "https://www.youtube.com/watch?v=Fui4Ur28glk",
    originalAdLink: "https://www.youtube.com/watch?v=Fui4Ur28glk",
    guangdadaDetailLink: "https://guangdada.net/modules/creative/display-ads/detail?channel=youtube&id=c5b3e5160b41e388ea5f8bc5cb9cd8bd&type=1&created_at=1770396227&fb_merge=false&search_flag=145458",
  }),
  createMaterial({
    rank: 7,
    id: "SLG-WEEK-07",
    name: "X-Clash",
    company: "Glaciers Game",
    platformName: "YouTube",
    theme: "卡通洞穴解谜",
    format: "画线解谜 / 倒计时压力",
    audience: "对路径规划、失败重试和卡通关卡感兴趣的休闲用户。",
    hookTypes: ["画线挑战", "倒计时压力", "失败不服"],
    hookCopy: "Can you draw the right path?",
    hookMechanism: "用倒计时和可见错误答案激发用户纠错与挑战欲。",
    firstFrame: "地底洞穴中的角色和障碍构成画线路径题。",
    result: "直接呈现关卡成功或失败。",
    coreSellingPoint: "简单画线输入带来高频验证反馈。",
    supportPoints: ["倒计时提升紧张感。", "失败重试延长观看。", "卡通高饱和画面提高可读性。"],
    character: "有。游戏角色承担路径选择和失败反馈。",
    voiceover: "低文字依赖，依靠游戏音效和画面反馈。",
    gameplay: "游戏录屏，核心为画线解谜和路径规划。",
    fakeGameplay: "是。轻解谜用于前端获客，后端为 4X SLG。",
    visualStyle: ["2D 卡通", "高饱和暖色", "地底洞穴", "强结果反馈"],
    duration: "44 秒",
    editingPace: "快节奏，多次关卡尝试组成循环。",
    endCard: "弱落版，以游戏结果和下载跳转承接。",
    localization: "低文字依赖，适合印度尼西亚投放。",
    productionMethod: "2D 游戏录屏",
    productionComponents: ["画线玩法", "路径规划", "倒计时", "失败反馈"],
    productionNotes: ["MCP 视频标签完整", "无真人剧情", "无独立口播依赖", "线性视频广告"],
    displayEstimate: "2.78 亿",
    displayEstimateValue: 277605558,
    heatValue: 1000,
    runDaysValue: 318,
    dateStart: "2025-09-19",
    dateEnd: "2026-08-02",
    regions: ["印度尼西亚"],
    sellingPointPrimary: ["轻玩法获客", "情绪刺激"],
    sellingPointSecondary: ["画线解谜", "倒计时", "失败重试"],
    videoLink: "https://sp2cdn-idea-global.zingfront.com/sp_opera/8940c4be507f5a19566526d214162935.mp4",
    originalAdLink: "https://www.youtube.com/watch?v=Fui4Ur28glk",
    guangdadaDetailLink: "https://guangdada.net/modules/creative/display-ads/detail?channel=youtube&id=fd2a5f22d3eca3cdf5a5c926b4c06ad9&type=1&created_at=1760082453&fb_merge=false&search_flag=145359",
  }),
  createMaterial({
    rank: 8,
    id: "SLG-WEEK-08",
    name: "Lords Mobile: Kingdom Wars",
    company: "IGG.COM",
    platformName: "YouTube",
    theme: "中世纪奇幻王国",
    format: "战争冲突 / 策略经营",
    audience: "喜欢军队建设、王国经营和大规模战斗的重度策略用户。",
    hookTypes: ["强冲突", "军队压境", "王国危机"],
    hookCopy: "Build the army and defend the kingdom",
    hookMechanism: "以军队冲突和王国危机快速建立策略战斗目标。",
    firstFrame: "古代王国战场出现军队、武器和建筑。",
    result: "展示军队建设、建筑升级和战斗推进。",
    coreSellingPoint: "经营王国并通过军队建设扩大掌控力。",
    supportPoints: ["军队规模制造力量感。", "建筑升级提供长期成长。", "资源收集连接经营与战争。"],
    character: "有。士兵、英雄和敌军共同构成战场。",
    voiceover: "低文字依赖，以战斗音效和场面驱动。",
    gameplay: "真实策略经营、军队和战斗场面录屏。",
    fakeGameplay: "否。展示内容与 4X SLG 核心循环一致。",
    visualStyle: ["风格化 3D", "中世纪奇幻", "军队战场", "武器展示"],
    duration: "51 秒",
    editingPace: "中快节奏，经营和战斗交替推进。",
    endCard: "品牌与安装 CTA。",
    localization: "低文字依赖，面向中国台湾地区。",
    productionMethod: "游戏录屏",
    productionComponents: ["实机经营", "军队战斗", "建筑升级", "品牌落版"],
    productionNotes: ["MCP 视频标签完整", "策略经营", "资源收集", "风格化 3D"],
    displayEstimate: "1.72 亿",
    displayEstimateValue: 172256118,
    heatValue: 1000,
    runDaysValue: 564,
    dateStart: "2025-01-17",
    dateEnd: "2026-08-03",
    regions: ["中国台湾"],
    sellingPointPrimary: ["核心玩法", "题材世界观"],
    sellingPointSecondary: ["策略经营", "军队建设", "资源收集"],
    videoLink: "https://sp2cdn-idea-global.zingfront.com/sp_opera/80e8b660ce4a14e4b76eb551c224c7f5.mp4",
    originalAdLink: "https://www.youtube.com/watch?v=4JnCWFQEczA",
    guangdadaDetailLink: "https://guangdada.net/modules/creative/display-ads/detail?channel=youtube&id=9cbc870795cb316320bdd19f9a9f9b99&type=1&created_at=1751876482&fb_merge=false&search_flag=145359",
  }),
  createMaterial({
    rank: 9,
    id: "SLG-WEEK-09",
    name: "Kingshot",
    company: "Century Games PTE. LTD.",
    platformName: "YouTube",
    theme: "中世纪城堡追逐",
    format: "追逐危机 / 城堡成长",
    audience: "喜欢追逐压力、城堡建设和军队成长的策略用户。",
    hookTypes: ["追逐危机", "直接警告", "征服目标"],
    hookCopy: "Watch out! You're being chased!",
    hookMechanism: "用角色被追逐的即时危险建立注意力，再转向城堡与军队成长。",
    firstFrame: "风格化 3D 道路中出现追逐场面、士兵和城堡环境。",
    result: "展示逃脱、金币获取和城堡势力成长。",
    coreSellingPoint: "从即时生存压力过渡到城堡经营和力量扩张。",
    supportPoints: ["追逐开场形成高压力。", "金币与士兵提供成长反馈。", "城堡目标承接长期经营。"],
    character: "有。被追逐角色、士兵和敌人推动叙事。",
    voiceover: "英语广告文案与追逐音效结合。",
    gameplay: "展示道路追逐、金币、士兵和城堡场景。",
    fakeGameplay: "部分包装。追逐玩法承担获客，后端承接 SLG 经营。",
    visualStyle: ["风格化 3D", "中饱和暖色", "道路追逐", "城堡场景"],
    duration: "59 秒",
    editingPace: "快节奏追逐开场，随后转入成长展示。",
    endCard: "产品品牌、评分文案和安装 CTA。",
    localization: "英语标题和说明，面向巴基斯坦投放。",
    productionMethod: "3D 游戏录屏与广告包装",
    productionComponents: ["追逐玩法", "金币反馈", "军队成长", "安装落版"],
    productionNotes: ["MCP 标签与创意详情已补全", "59 秒原始视频", "Android 投放", "线性视频广告"],
    displayEstimate: "1.45 亿",
    displayEstimateValue: 144885364,
    heatValue: 1000,
    runDaysValue: 42,
    dateStart: "2026-06-19",
    dateEnd: "2026-07-30",
    regions: ["巴基斯坦"],
    sellingPointPrimary: ["情绪刺激", "成长反馈"],
    sellingPointSecondary: ["追逐危机", "城堡经营", "力量扩张"],
    videoLink: "https://www.youtube.com/watch?v=ZN9P_r2SAeI",
    originalAdLink: "https://www.youtube.com/watch?v=ZN9P_r2SAeI",
    guangdadaDetailLink: "https://guangdada.net/modules/creative/display-ads/detail?channel=youtube&id=768d3b234a4613a2924c69fa3c4cb344&type=1&created_at=1774311608&fb_merge=false&search_flag=145458",
  }),
  createMaterial({
    rank: 10,
    id: "SLG-WEEK-10",
    name: "Whiteout Survival",
    company: "Century Games PTE. LTD.",
    platformName: "YouTube",
    theme: "极地末日生存",
    format: "生存挑战 / 基地成长",
    audience: "喜欢极地生存、资源管理和基地经营的策略用户。",
    hookTypes: ["直接卖点", "极寒危机", "生存目标"],
    hookCopy: "Survive the cold and rebuild the settlement",
    hookMechanism: "直接抛出极寒生存目标，用环境压力和资源短缺建立持续观看动力。",
    firstFrame: "冰雪环境中的角色、建筑和资源危机直接进入生存场景。",
    result: "展示资源收集、建筑升级和聚落成长。",
    coreSellingPoint: "在极寒环境中经营资源、升级建筑并扩大幸存者聚落。",
    supportPoints: ["极地题材形成高辨识度。", "资源短缺制造经营压力。", "建筑升级提供长期成长回报。"],
    character: "有。幸存者角色通过环境互动和协作推动内容。",
    voiceover: "低文字依赖，环境音效和画面叙事为主。",
    gameplay: "建筑升级、生存挑战、策略经营与资源收集。",
    fakeGameplay: "否。核心展示与生存经营后端一致。",
    visualStyle: ["风格化 3D", "冰雪环境", "聚落建设", "资源 UI"],
    duration: "100 秒",
    editingPace: "中节奏长素材，按生存、采集、建设、扩张逐步推进。",
    endCard: "品牌与安装 CTA。",
    localization: "低文字依赖，面向美国地区。",
    productionMethod: "3D 游戏内容与实机展示混合",
    productionComponents: ["生存场景", "角色互动", "建筑升级", "资源收集"],
    productionNotes: ["MCP 视频标签完整", "极地生存", "直接卖点开场", "线性视频广告"],
    displayEstimate: "1.30 亿",
    displayEstimateValue: 129956279,
    heatValue: 1000,
    runDaysValue: 35,
    dateStart: "2026-06-30",
    dateEnd: "2026-08-03",
    regions: ["美国"],
    sellingPointPrimary: ["题材世界观", "核心玩法"],
    sellingPointSecondary: ["极地生存", "建筑升级", "资源经营"],
    videoLink: "https://sp2cdn-idea-global.zingfront.com/sp_opera/08ff5414982f7ede278c24613ef83f65.mp4",
    originalAdLink: "https://www.youtube.com/watch?v=BVBILd17cD8",
    guangdadaDetailLink: "https://guangdada.net/modules/creative/display-ads/detail?channel=youtube&id=24ec61fd3524168f45ec93916fb9c843&type=1&created_at=1758526101&fb_merge=false&search_flag=145359",
  }),
];

export const confirmedMaterials = materials;
export const comparableMaterials = materials;
export const minimumComparisonReason = "请选择两条不同素材开始对比";
