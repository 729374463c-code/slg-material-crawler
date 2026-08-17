import type { Material } from "./material";

type DataEyeSeed = {
  materialId: string;
  creativeId: string;
  productName: string;
  company: string;
  title: string;
  videoUrl: string;
  durationMillis: number;
  width: number;
  height: number;
  exposure: number;
  downloads: number;
  likes: number;
  comments: number;
  forwards: number;
  firstSeen: string;
  lastSeen: string;
  days: number;
  platforms: string[];
  theme: string;
  format: string;
  audience: string;
  hookTypes: string[];
  firstFrame: string;
  hookMechanism: string;
  result: string;
  coreSellingPoint: string;
  supportPoints: string[];
  character: string;
  voiceover: string;
  gameplay: string;
  fakeGameplay: string;
  visualStyle: string[];
  editingPace: string;
  endCard: string;
  productionMethod: string;
  productionComponents: string[];
  primary: string[];
  secondary: string[];
  summary: string;
  rhythm: string[];
  emotion: string[];
};

const collectedAt = "2026-08-17 16:34";

function createDataEyeMaterial(seed: DataEyeSeed, index: number): Material {
  const engagement = seed.likes + seed.comments + seed.forwards;
  return {
    id: `SLG-DATAEYE-CN-${String(index + 1).padStart(2, "0")}`,
    weekId: "dataeye-cn-slg-10",
    adKey: seed.creativeId,
    materialId: seed.materialId,
    name: seed.productName,
    recordName: `${seed.productName} / 国内多题材测试 ${String(index + 1).padStart(2, "0")}`,
    company: seed.company,
    region: "中国大陆",
    platform: seed.platforms.join(" / "),
    channel: "DataEye AdXray",
    launchStage: `成熟期产品 / ${seed.firstSeen} 素材`,
    theme: seed.theme,
    category: "SLG / 策略",
    format: seed.format,
    audience: seed.audience,
    hookTypes: seed.hookTypes,
    hookCopy: seed.title,
    hookMechanism: seed.hookMechanism,
    firstFrame: seed.firstFrame,
    result: seed.result,
    coreSellingPoint: seed.coreSellingPoint,
    supportingSellingPoints: seed.supportPoints.map((message, supportIndex) => ({
      sequence: supportIndex + 1,
      benefit_type: seed.secondary[supportIndex] ?? "辅助卖点",
      message,
    })),
    character: seed.character,
    voiceover: seed.voiceover,
    gameplay: seed.gameplay,
    fakeGameplay: seed.fakeGameplay,
    visualStyle: seed.visualStyle,
    duration: `${(seed.durationMillis / 1000).toFixed(1)} 秒`,
    editingPace: seed.editingPace,
    endCard: seed.endCard,
    localization: "中文标题、中文字幕和国内信息流媒体语境。",
    productionMethod: seed.productionMethod,
    productionComponents: seed.productionComponents,
    productionNotes: [
      `视频尺寸：${seed.width} × ${seed.height}。`,
      `DataEye 页面数据：曝光 ${seed.exposure.toLocaleString("zh-CN")}；下载 ${seed.downloads}；点赞 ${seed.likes}；评论 ${seed.comments}；转发 ${seed.forwards}。`,
      "画面分析基于五个时间点抽帧；未单独转写音轨，声音相关结论保持保守。",
      "视频直链带临时签名，失效时使用 AdXray 精确详情页重新核验。",
    ],
    dataSource: "DataEye AdXray / 2026-08-17",
    displayEstimate: `${seed.exposure.toLocaleString("zh-CN")} 次曝光`,
    displayEstimateValue: seed.exposure,
    popularity: `互动 ${engagement}（赞 ${seed.likes} / 评 ${seed.comments} / 转 ${seed.forwards}）`,
    heat: `曝光 ${seed.exposure.toLocaleString("zh-CN")}`,
    heatValue: seed.exposure,
    runDays: `${seed.days} 天`,
    runDaysValue: seed.days,
    dateRange: `${seed.firstSeen} 至 ${seed.lastSeen}`,
    dateStart: seed.firstSeen,
    dateEnd: seed.lastSeen,
    platforms: seed.platforms,
    regions: ["中国大陆"],
    sellingPointPrimary: seed.primary,
    sellingPointSecondary: seed.secondary,
    videoLink: seed.videoUrl,
    originalAdLink: `https://adxray.dataeye.com/index/home#/Product/Plan/${seed.materialId}`,
    videoLinkCollectedAt: collectedAt,
    guangdadaDetailLink: null,
    analysisSource: "视频解析草稿",
    scriptAnalysis: {
      summary: seed.summary,
      structureAndRhythm: seed.rhythm,
      emotionCurve: seed.emotion,
    },
    status: "confirmed",
    statusLabel: "已完成画面分析",
  };
}

const seeds: DataEyeSeed[] = [
  {
    materialId: "71601137", creativeId: "392883456", productName: "战火与永恒", company: "上海游族信息技术有限公司",
    title: "SLG骨灰级玩家泪荐！真实兵种自由搭配！成败靠脑不靠肝！",
    videoUrl: "https://adxvideo.dataeye.com/86/03f3d72f674a43809e49ac8d4496c486.mp4?auth_key=1786957445-0-gameWeb_4537-c70fd80e47eeb211775d13215f10568d",
    durationMillis: 15280, width: 1280, height: 720, exposure: 190416, downloads: 443, likes: 0, comments: 0, forwards: 0,
    firstSeen: "2023-06-14", lastSeen: "2023-06-21", days: 8, platforms: ["今日头条", "抖音", "番茄小说"],
    theme: "魔幻炼金 / 英灵军团", format: "真人悬念转场 / 魔幻战斗实机",
    audience: "偏好魔幻英雄、兵种搭配和快节奏战斗反馈的策略用户。",
    hookTypes: ["真人悬念", "骨灰玩家背书", "策略不靠肝"],
    firstFrame: "真人在车辆轮胎旁制造不明状况，先以现实悬念抢注意，再迅速切入游戏。",
    hookMechanism: "用现实画面制造信息差，再以高饱和英雄技能和兵种战斗兑现视觉刺激。",
    result: "连续展示不同英雄与兵种组合，最终进入金色品牌世界观落版。",
    coreSellingPoint: "英雄技能与兵种自由组合决定战斗结果，突出策略选择而非单纯数值堆叠。",
    supportPoints: ["真人转场降低首屏广告感。", "多英雄技能快速证明阵容深度。", "品牌落版完整承接产品识别。"],
    character: "有，真人只承担开场钩子，主体为多名魔幻英雄。", voiceover: "画面以短字幕和技能反馈为主，是否持续口播未单独确认。",
    gameplay: "展示英雄编队、技能释放和战斗界面。", fakeGameplay: "未发现明显假玩法，核心镜头来自游戏战斗系统。",
    visualStyle: ["真人实拍", "高饱和魔幻", "英雄技能特效", "横版战斗 UI"], editingPace: "极快，真人钩子后连续切换角色和技能，15 秒内完成展示。",
    endCard: "金色传送门与《战火与永恒》品牌主视觉。", productionMethod: "真人实拍、游戏录屏与 2D/3D 特效混合",
    productionComponents: ["真人钩子", "英雄战斗实机", "技能特效", "品牌落版"], primary: ["核心玩法", "美术"], secondary: ["角色强度（数值）", "角色美术", "场景"],
    summary: "先用真人现实悬念打断滑动，再切入英雄技能和兵种搭配，以连续战斗反馈证明“成败靠策略”，最后用魔幻品牌落版收束。",
    rhythm: ["0-2 秒：真人轮胎场景制造信息差。", "2-11 秒：多名英雄和兵种连续释放技能。", "11-15 秒：金色世界观过渡并完成品牌落版。"],
    emotion: ["疑问：现实场景为何出现", "惊艳：魔幻技能快速爆发", "掌控：阵容组合决定战局", "确认：品牌世界观落版"],
  },
  {
    materialId: "77638677000000", creativeId: "3643702957", productName: "王国纪元", company: "IGG SINGAPORE PTE. LTD.",
    title: "策略圈地，智趣攻防，点击领取地盘，开始打造全新家园",
    videoUrl: "https://adxvideo.dataeye.com/5685/11ad17fda0b3c278496b783d91112ca0.mp4?auth_key=1786957452-0-gameWeb_4537-97b0118fb3a0cbdcd1d9a38a40696f71",
    durationMillis: 50430, width: 1280, height: 720, exposure: 80181, downloads: 188, likes: 0, comments: 0, forwards: 0,
    firstSeen: "2025-11-28", lastSeen: "2025-11-29", days: 2, platforms: ["腾讯新闻", "腾讯视频", "优量汇", "QQ音乐", "酷我音乐", "酷狗音乐", "QQ阅读", "欢乐斗地主"],
    theme: "奇幻王国 / 圈地扩张", format: "数字军团 / 圈地攻防演示",
    audience: "偏好数字成长、领地扩张和轻量战术判断的泛策略用户。",
    hookTypes: ["巨兽威胁", "数字对抗", "一眼可懂"], firstFrame: "巨型怪物与小规模军团形成强体量反差，立即建立战斗压力。",
    hookMechanism: "把复杂 SLG 压缩为颜色、数字和领地边界，让观众无需说明即可判断强弱。",
    result: "军团通过吞并小目标持续增长，扩张路线和兵力变化被清晰可视化。",
    coreSellingPoint: "判断路线、吃小避大并持续扩张，让军团规模获得即时可见的增长。",
    supportPoints: ["数字反馈降低策略理解门槛。", "颜色领地强化攻防关系。", "连续吞并形成稳定爽感循环。"],
    character: "有，卡通军团和巨兽承担强弱对比。", voiceover: "主要依赖画面、数字和底部提示字幕，口播未确认。",
    gameplay: "展示圈地、行军和兵力增长式轻玩法。", fakeGameplay: "与完整 4X 核心存在简化差异，更接近获客用副玩法表达。",
    visualStyle: ["卡通 3D", "高饱和草地", "数字兵团", "彩色领地边界"], editingPace: "中快节奏，围绕移动、吞并、增长循环推进。",
    endCard: "末段以灰度战场继续展示规模差，没有明显标准下载落版。", productionMethod: "3D 轻玩法录屏与数字 UI 包装",
    productionComponents: ["数字军团", "领地边界", "怪物模型", "提示字幕"], primary: ["副玩法", "核心玩法"], secondary: ["角色强度（数值）", "场景", "模拟经营"],
    summary: "把王国战争简化为数字军团圈地，用吃小避大和兵力膨胀形成重复爽点；低理解成本适合广泛获客，但与完整 4X 体验存在距离。",
    rhythm: ["0-6 秒：巨兽与弱小军团建立悬殊对比。", "6-38 秒：选择路线、连续吞并并扩大兵力。", "38-50 秒：更大规模冲突与结果反馈收束。"],
    emotion: ["压力：强敌体量压制", "参与：判断安全路线", "满足：兵力连续膨胀", "野心：继续扩大领地"],
  },
  {
    materialId: "108927604", creativeId: "666146789", productName: "蚁族崛起", company: "广州亿企玩网络科技有限公司",
    title: "全新地穴探索玩法，休闲益智策略，休闲好玩不烧脑！",
    videoUrl: "https://adxvideo.dataeye.com/1708/bc2569126ae845aa471e25cda3c69715.mp4?auth_key=1786957553-0-gameWeb_4537-c4e73aecbf053a868a81363ebb1cce04",
    durationMillis: 22990, width: 720, height: 1280, exposure: 28978, downloads: 66, likes: 0, comments: 0, forwards: 0,
    firstSeen: "2023-12-28", lastSeen: "2023-12-30", days: 3, platforms: ["今日头条"],
    theme: "微观蚁国 / 地穴经营", format: "资源强化 / 地穴探索实机",
    audience: "偏好微观世界、地下探索、资源经营和轻量策略成长的用户。",
    hookTypes: ["稀缺资源", "百分比强化", "地穴探索"], firstFrame: "竖屏游戏商店和稀缺道具价格直接出现，以资源价值切入。",
    hookMechanism: "先用高价值资源和 100% 强化建立成长期待，再把收益带入地穴探索和家园扩张。",
    result: "展示英雄强化、地穴奖励、蚁巢地图和多人单位战斗，形成资源—成长—扩张闭环。",
    coreSellingPoint: "通过地穴探索获取资源，强化英雄并推动蚁巢版图持续扩张。",
    supportPoints: ["高价值奖励提供即时目标。", "竖屏实机连续呈现成长反馈。", "微观蚁国题材形成明显视觉区隔。"],
    character: "有，蚁族英雄与小型军团承担养成和战斗展示。", voiceover: "画面以大字字幕解释收益，是否配口播未单独确认。",
    gameplay: "真实展示购买、强化、地图探索和战斗 UI。", fakeGameplay: "未发现明显假玩法，主要是游戏内系统录屏。",
    visualStyle: ["竖屏实机", "暖色地下世界", "资源数值", "多层地图 UI"], editingPace: "中快节奏，每 4—6 秒切换一次资源、强化或探索节点。",
    endCard: "停留在蚁巢地图和单位战斗，没有独立品牌落版。", productionMethod: "竖屏游戏录屏与字幕动效",
    productionComponents: ["资源商店 UI", "英雄强化", "地穴地图", "战斗录屏"], primary: ["核心玩法", "题材与世界观"], secondary: ["模拟经营", "角色强度（数值）", "世界观展示"],
    summary: "从稀缺资源和百分比强化进入，依次展示英雄成长、地穴奖励与蚁巢扩张，让微观题材和经营循环同时可见。",
    rhythm: ["0-6 秒：高价值道具和强化收益设钩。", "6-15 秒：领取资源并完成英雄强化。", "15-23 秒：进入地穴地图和军团战斗。"],
    emotion: ["渴望：稀缺资源出现", "满足：强化立即完成", "探索：地穴地图展开", "成长：蚁巢实力扩大"],
  },
  {
    materialId: "1266903381", creativeId: "5316851947", productName: "口袋奇兵", company: "北京江娱互动科技有限公司",
    title: "口袋奇兵",
    videoUrl: "https://adxvideo.dataeye.com/4820/9a160f6598b59e834518a3611ded039e.mp4?auth_key=1786957443-0-gameWeb_4537-9376a593477d936babb485c5d7b2028d",
    durationMillis: 55730, width: 720, height: 1280, exposure: 23340, downloads: 54, likes: 0, comments: 0, forwards: 0,
    firstSeen: "2026-08-16", lastSeen: "2026-08-17", days: 2, platforms: ["优量汇", "酷狗音乐", "QQ音乐", "酷我音乐"],
    theme: "卡通现代军团 / 路线解谜", format: "路线规划 / 数字战斗副玩法",
    audience: "偏好竖屏休闲解谜、数字成长和卡通军事题材的泛游戏用户。",
    hookTypes: ["路线选择", "敌我数字", "胜负可预测"], firstFrame: "蓝色棋盘中主角从低等级起步，路线与敌人数字同时可见。",
    hookMechanism: "用一条路线是否走对的低门槛问题激发参与感，持续用数值胜负验证选择。",
    result: "角色依次击败较弱敌人并累积等级，最后出现醒目的胜利标识。",
    coreSellingPoint: "通过路线规划选择正确战斗顺序，让战力连续增长并完成关卡。",
    supportPoints: ["规则一眼可懂。", "每次战斗都提供即时数值反馈。", "竖屏适配国内信息流浏览。"],
    character: "有，卡通士兵作为可成长主角。", voiceover: "画面几乎只依赖数字、路径和胜利反馈，口播未确认。",
    gameplay: "展示路线解谜和数字战斗关卡。", fakeGameplay: "与产品传统合成 SLG 核心差异较大，建议按副玩法或获客玩法看待。",
    visualStyle: ["竖屏蓝色棋盘", "极简路径", "红蓝数值", "胜利动效"], editingPace: "稳定连续操作，靠路线推进而非频繁切镜。",
    endCard: "以胜利徽章定格，没有完整商店下载落版。", productionMethod: "轻玩法录屏与数字 UI 动效",
    productionComponents: ["路线棋盘", "数字敌人", "角色移动", "胜利徽章"], primary: ["副玩法"], secondary: ["角色强度（数值）", "场景"],
    summary: "把复杂军事经营降维成路线与数字判断，通过连续以小博大形成成长爽感；优势是理解成本低，风险是与真实 SLG 核心体验距离较大。",
    rhythm: ["0-5 秒：展示初始战力与可选路线。", "5-45 秒：连续选择敌人并累积等级。", "45-56 秒：完成最后战斗并定格胜利。"],
    emotion: ["判断：寻找安全路线", "紧张：接近高数值敌人", "满足：等级连续上涨", "释放：胜利标识出现"],
  },
  {
    materialId: "1269672977", creativeId: "5319296158", productName: "万国觉醒", company: "上海莉莉丝网络科技有限公司",
    title: "零氪新手也能崛起，万国觉醒等你体验策略乐趣！",
    videoUrl: "https://adxvideo.dataeye.com/8319/0157ed5c1936f02bc74b709c242bec2d.mp4?auth_key=1786957443-0-gameWeb_4537-1711ca85694f583bee2a3b4ef7f48363",
    durationMillis: 28700, width: 1280, height: 720, exposure: 16643, downloads: 38, likes: 0, comments: 0, forwards: 0,
    firstSeen: "2026-08-17", lastSeen: "2026-08-17", days: 1, platforms: ["腾讯视频", "优量汇", "QQ音乐", "酷狗音乐", "QQ阅读"],
    theme: "多文明历史 / AI 职场短剧", format: "历史人物现代短剧 / 零氪诉求",
    audience: "偏好多文明历史人物、轻剧情和低付费门槛的国内策略用户。",
    hookTypes: ["台风危机", "资源损失", "零氪反问"], firstFrame: "现代会议室中多人争执，历史人物造型与职场环境形成明显错位。",
    hookMechanism: "用台风导致资源损失的危机推进对话，再由角色抛出“钱哪有命重要”强化零氪立场。",
    result: "短剧围绕资源、风险和投入争论收束，没有直接展示游戏操作结果。",
    coreSellingPoint: "用现代危机短剧表达零氪玩家也可依靠策略崛起的产品承诺。",
    supportPoints: ["历史人物现代化提高新鲜感。", "资源危机映射 SLG 决策。", "零氪主张降低进入顾虑。"],
    character: "有，多名疑似 AI 生成的历史人物承担职场式对话。", voiceover: "画面有连续对白字幕，具体配音来源未单独验证。",
    gameplay: "无实机玩法，主要通过角色短剧隐喻资源经营。", fakeGameplay: "否，没有把剧情伪装成操作；但产品玩法证明较弱。",
    visualStyle: ["AI 角色", "现代会议室", "电影化横屏", "对白字幕"], editingPace: "中节奏，围绕多人对话和近景反应切换。",
    endCard: "剧情以人物独白收尾，未观察到标准下载 CTA。", productionMethod: "AI 角色短剧与影视化剪辑",
    productionComponents: ["AI 历史人物", "现代场景", "对白字幕", "剧情剪辑"], primary: ["题材与世界观", "美术"], secondary: ["角色美术", "场景", "世界观展示"],
    summary: "把历史人物置入现代会议室，用资源损失和生命风险冲突包装零氪诉求；创意记忆点强，但需要详情页或后续素材补足真实玩法证明。",
    rhythm: ["0-5 秒：多人闯入会议室并抛出台风危机。", "5-21 秒：围绕资源损失和投入展开争论。", "21-29 秒：角色用零氪立场完成观点收束。"],
    emotion: ["意外：历史人物进入现代职场", "焦虑：资源因灾害受损", "冲突：投入与安全发生争论", "释然：零氪立场完成反转"],
  },
  {
    materialId: "1269664515", creativeId: "5319162489", productName: "无尽冬日", company: "Century Games",
    title: "起初大家都以为，这是个普通的冬天……",
    videoUrl: "https://adxvideo.dataeye.com/7185/875f10a00382ce8e3b92a38b5d18c94f.mp4?auth_key=1786957443-0-gameWeb_4537-f5f3bcd94130b4c886c36a9aca77ced5",
    durationMillis: 47900, width: 1280, height: 720, exposure: 13140, downloads: 31, likes: 0, comments: 0, forwards: 0,
    firstSeen: "2026-08-17", lastSeen: "2026-08-17", days: 1, platforms: ["优量汇", "QQ音乐", "酷狗音乐"],
    theme: "冰雪末日 / 移动避难所", format: "末日列车 / 切冰救援副玩法",
    audience: "偏好冰雪生存、灾难危机、基地经营和轻操作关卡的用户。",
    hookTypes: ["极寒灾难", "列车避难所", "切割挑战"], firstFrame: "重型末日列车驶过暴雪环境，红色文案强调“赤雪熔炉避难所”。",
    hookMechanism: "先用巨大移动避难所建立世界观，再切到冰层切割挑战，让观众参与判断救援路径。",
    result: "切冰操作释放单位并对抗怪物，末段展示熔炉营地和产品品牌。",
    coreSellingPoint: "在极寒世界经营移动避难所，通过资源与战斗决策保护幸存者。",
    supportPoints: ["列车避难所形成差异化视觉符号。", "切割关卡提供即时参与。", "熔炉营地承接长期经营目标。"],
    character: "有，幸存者小队和怪物承担救援冲突。", voiceover: "持续中文字幕引导操作，口播形式未单独确认。",
    gameplay: "展示切冰救援、单位移动、怪物战斗和营地画面。", fakeGameplay: "切冰部分更像获客副玩法，与核心经营体验存在简化差异。",
    visualStyle: ["冰雪蓝色", "末日列车", "切割轨迹", "卡通营地"], editingPace: "前段电影化建立世界，主体用连续操作维持节奏，结尾快速落版。",
    endCard: "熔炉营地、产品名和“点击即玩”提示。", productionMethod: "3D 世界观动画、轻玩法录屏与品牌落版混合",
    productionComponents: ["末日列车", "切冰玩法", "怪物战斗", "品牌落版"], primary: ["题材与世界观", "副玩法"], secondary: ["世界观展示", "场景", "模拟经营"],
    summary: "以末日列车和暴雪建立强世界观，再用切冰救援提供可理解的操作循环，最终回到熔炉营地完成从即时危机到长期经营的承接。",
    rhythm: ["0-8 秒：末日列车和极寒环境设定危机。", "8-39 秒：切割冰层、解救单位并击败怪物。", "39-48 秒：熔炉营地与品牌 CTA 收束。"],
    emotion: ["压迫：极寒末日降临", "参与：判断切割路径", "释放：队伍战胜怪物", "安全：避难所重新出现"],
  },
  {
    materialId: "1208047384", creativeId: "5145392915", productName: "旭日之城", company: "北京壳木软件有限责任公司",
    title: "生存危机到来，挑战末日求生，集结盟友，共建庇护所！",
    videoUrl: "https://adxvideo.dataeye.com/8771/21b8d422c47c2f710022b3b13e708ec5.mp4?auth_key=1786957448-0-gameWeb_4537-4c67821e72ab5394464b563ac49bd2d1",
    durationMillis: 32290, width: 1080, height: 1920, exposure: 12240, downloads: 30, likes: 0, comments: 0, forwards: 0,
    firstSeen: "2026-07-24", lastSeen: "2026-07-26", days: 3, platforms: ["今日头条"],
    theme: "现代末日 / 第一人称救援", format: "FPS 生存演示 / 庇护所承接",
    audience: "偏好写实末日、第一人称射击、救援任务和联盟建设的用户。",
    hookTypes: ["室内遇袭", "第一人称代入", "救援目标"], firstFrame: "第一人称视角在废弃室内发现倒地角色，枪械和暗光立即建立危险。",
    hookMechanism: "用 FPS 视角把观众直接放入灾难现场，通过搜寻、战斗和救援持续制造行动目标。",
    result: "镜头从室内战斗推进到直升机和山谷聚落，最后以产品名与庇护所主张收束。",
    coreSellingPoint: "在现代末日世界完成战斗救援，并把幸存者带回可持续建设的庇护所。",
    supportPoints: ["第一人称视角强化临场感。", "救援目标让冲突具有情感方向。", "聚落远景承接联盟建设。"],
    character: "有，玩家第一人称与被救幸存者共同构成任务关系。", voiceover: "有竖排提示和少量字幕，具体配音未单独确认。",
    gameplay: "展示第一人称射击、探索、直升机转场和基地远景。", fakeGameplay: "FPS 表达与 SLG 核心经营差异较大，属于强情境获客或副玩法式包装。",
    visualStyle: ["写实 FPS", "暗色废墟", "军事直升机", "山谷聚落"], editingPace: "快节奏，以探索、交火、转场和基地揭示逐层升级场面。",
    endCard: "《旭日之城》品牌图与末日角色海报。", productionMethod: "第一人称 3D 演示、剧情转场与品牌海报混合",
    productionComponents: ["FPS 视角", "末日废墟", "直升机", "基地远景", "品牌落版"], primary: ["题材与世界观", "副玩法"], secondary: ["场景", "世界观展示", "模拟经营"],
    summary: "用第一人称救援将观众直接投入末日危机，随后借直升机和聚落远景把短期战斗目标承接到联盟与庇护所建设。",
    rhythm: ["0-7 秒：室内倒地角色和危险环境设钩。", "7-22 秒：第一人称探索与交火推进救援。", "22-32 秒：直升机、聚落远景和品牌落版。"],
    emotion: ["恐惧：废墟中发现受害者", "紧张：持枪探索并交火", "希望：救援与撤离出现", "使命：共同建设庇护所"],
  },
  {
    materialId: "1264710489", creativeId: "5302845605", productName: "重返帝国", company: "深圳市腾讯计算机系统有限公司",
    title: "S1轻松服，主打一个轻松！7.25上线领奖励了",
    videoUrl: "https://adx-game-material.dataeye.com/307d02eed9e5c26cf772a61fbd8a7116.mp4?auth_key=1786957444-0-gameWeb_4537-15d2b9fe49e78cc1822b994f0536ec6e",
    durationMillis: 45535, width: 1920, height: 1080, exposure: 1572, downloads: 3, likes: 447, comments: 54, forwards: 30,
    firstSeen: "2026-08-15", lastSeen: "2026-08-15", days: 1, platforms: ["抖音"],
    theme: "中世纪帝国 / 轻松服攻略", format: "版本福利说明 / 影视梗收尾",
    audience: "关注新服福利、低肝养成、开荒资源和版本节奏的中重度 SLG 用户。",
    hookTypes: ["新服上线", "即时攻防", "福利清单"], firstFrame: "武将主视觉配“即时攻防、放开了打”的大字口号，直接宣布 S1 轻松服。",
    hookMechanism: "先给出版本利益承诺，再用表格和数字逐项证明资源、技能和升级成本更轻。",
    result: "福利说明后切入影视剧梗图，以“此时的你”制造轻松情绪收尾。",
    coreSellingPoint: "轻松服通过资源、技能和升级福利降低新玩家的开荒负担。",
    supportPoints: ["主题服上线提供时效性。", "表格与数字让福利可核对。", "影视梗降低说明型素材的枯燥感。"],
    character: "有，开头为游戏武将，后段使用影视剧人物片段。", voiceover: "信息主要由字幕和页面说明承载，音轨未单独转写。",
    gameplay: "以版本说明、资源表格和活动信息为主，实机操作较少。", fakeGameplay: "否，属于版本福利解释，不冒充操作玩法。",
    visualStyle: ["白底攻略页", "红框重点", "古装影视梗", "黑底大字"], editingPace: "前段中慢速阅读信息，后段用影视梗和黑底大字快速调节节奏。",
    endCard: "黑底“此时的你”梗图式收尾，标准下载 CTA 较弱。", productionMethod: "活动页面、信息图、影视素材与字幕混剪",
    productionComponents: ["版本主视觉", "福利表格", "红框标注", "影视梗片段"], primary: ["核心玩法", "题材与世界观"], secondary: ["模拟经营", "角色强度（数值）", "场景"],
    summary: "用新服利益点筛选高意向玩家，以表格和数值完成福利证明，再用影视梗降低阅读疲劳；适合版本节点获客和老玩家召回。",
    rhythm: ["0-5 秒：S1 轻松服和即时攻防口号出现。", "5-31 秒：逐项解释资源、技能与升级福利。", "31-46 秒：影视梗和黑底大字完成情绪收尾。"],
    emotion: ["期待：新服福利出现", "安心：资源成本被逐项降低", "轻松：影视梗打断说明", "行动：准备进入新服"],
  },
  {
    materialId: "1247763355", creativeId: "5253011307", productName: "文明与征服", company: "广州四三九九信息科技有限公司",
    title: "绷不住就流放！#大绷住时代 #李世民",
    videoUrl: "https://adx-game-material.dataeye.com/f979e001e036c777fad14c4ccc8d841c.mp4?auth_key=1786957444-0-gameWeb_4537-8f20fe324b0e6ebba085997ac14be944",
    durationMillis: 20736, width: 1080, height: 1918, exposure: 1570, downloads: 3, likes: 243, comments: 53, forwards: 28,
    firstSeen: "2026-08-08", lastSeen: "2026-08-08", days: 1, platforms: ["抖音"],
    theme: "历史名人 / 唐风动画喜剧", format: "历史人物动画梗 / 角色传播",
    audience: "熟悉中国历史人物、偏好轻喜剧短视频和角色二创内容的泛用户。",
    hookTypes: ["朝堂冲突", "网络热梗", "李世民角色"], firstFrame: "卡通朝堂全景配“大唐盛世，绷不住了”，首屏同时交代历史背景和热梗。",
    hookMechanism: "把现代网络词“绷不住”放入唐代朝堂，通过时代错位和皇帝反应制造幽默。",
    result: "群臣与皇帝围绕是否流放展开连贯对话，最终由角色表情和反问完成笑点。",
    coreSellingPoint: "让历史名人具备现代语感和轻喜剧人格，降低多文明题材的理解门槛。",
    supportPoints: ["历史人物识别度高。", "网络梗适合评论和转发。", "竖屏动画完整适配短视频平台。"],
    character: "有，李世民、群臣等历史人物承担完整剧情。", voiceover: "画面持续出现对白字幕，是否采用角色配音未单独确认。",
    gameplay: "无实机玩法，侧重历史角色和世界观传播。", fakeGameplay: "否，没有展示或伪装玩法。",
    visualStyle: ["唐风卡通", "竖屏动画", "朝堂场景", "对白字幕"], editingPace: "中快节奏，通过角色切换、表情和台词连续制造笑点。",
    endCard: "以人物近景和反问笑点结束，没有标准品牌下载落版。", productionMethod: "2D 历史动画与对白字幕",
    productionComponents: ["角色动画", "朝堂背景", "网络梗文案", "对白字幕"], primary: ["题材与世界观", "美术"], secondary: ["角色美术", "场景", "世界观展示"],
    summary: "把现代热梗植入唐代朝堂，用历史人物身份与网络语气的错位制造传播性；强在角色记忆，弱在玩法和行动承接。",
    rhythm: ["0-4 秒：朝堂与“绷不住”热梗直接出现。", "4-16 秒：群臣争论和皇帝反应连续推进。", "16-21 秒：人物近景反问完成笑点。"],
    emotion: ["熟悉：历史朝堂出现", "意外：现代热梗进入古代", "轻松：角色反应升级", "幽默：反问笑点收束"],
  },
  {
    materialId: "1269810967", creativeId: "5319625114", productName: "三国志·战略版", company: "广州简悦信息科技有限公司",
    title: "三代从军的亲家，家族终于有机会更上一层楼",
    videoUrl: "https://adx-game-material.dataeye.com/88d6b8995a4ae4966a696c6443e5fbf9.mp4?auth_key=1786957442-0-gameWeb_4537-09f03c989dbefb7149df4c942b9f4b7a",
    durationMillis: 29000, width: 1920, height: 1080, exposure: 1342, downloads: 3, likes: 318, comments: 29, forwards: 3,
    firstSeen: "2026-08-17", lastSeen: "2026-08-17", days: 1, platforms: ["抖音"],
    theme: "三国人物 / AI 家族短剧", format: "AI 角色短剧 / 家族联姻",
    audience: "熟悉三国武将、偏好身份反转和家庭关系短剧的国内用户。",
    hookTypes: ["一见钟情", "三代从军", "家族跃迁"], firstFrame: "虎哥父亲与虎痴虎哥在现代园区同框，顶部字幕直接追问恋爱关系。",
    hookMechanism: "用婚恋八卦建立低门槛入口，再以军人背景和家族利益放大天才指挥的身份价值。",
    result: "父亲把婚恋关系解释成家族继承机会，完成由私人情感到事业跃迁的反转。",
    coreSellingPoint: "通过现代家族关系重写三国角色，让武将人格从战场延伸到连续短剧。",
    supportPoints: ["婚恋话题扩大泛用户可读性。", "三代从军强化身份标签。", "家族利益带来明确剧情结果。"],
    character: "有，虎痴虎哥与父亲承担双人家庭对话。", voiceover: "画面有连续对白字幕，具体配音来源未单独确认。",
    gameplay: "无实机玩法，属于品牌角色世界观短剧。", fakeGameplay: "否，没有把剧情包装成可操作玩法。",
    visualStyle: ["疑似 AI 角色动画", "古装现代混搭", "角色名黄字", "对白近景"], editingPace: "中节奏，依靠双人对话、反应镜头和身份揭示推进。",
    endCard: "以父亲确认继承价值的对话结果收束，无标准下载 CTA。", productionMethod: "AI 角色动画、现代场景与 2D 字幕混合",
    productionComponents: ["AI 人物", "现代园区", "家庭对白", "身份钩子"], primary: ["题材与世界观", "美术"], secondary: ["角色美术", "场景", "世界观展示"],
    summary: "以婚恋八卦进入三国人物关系，再把三代从军背景转化为家族事业价值，形成情感关系—身份揭示—家族跃迁的短剧闭环。",
    rhythm: ["0-5 秒：父亲追问一见钟情关系。", "5-20 秒：虎哥解释感情和身份背景。", "20-29 秒：父亲给出家族继承结论。"],
    emotion: ["好奇：婚恋八卦出现", "意外：强身份背景揭示", "期待：父亲态度变化", "满足：关系获得认可"],
  },
];

export const dataeyeDomesticTestMaterials: Material[] = seeds.map(createDataEyeMaterial);
