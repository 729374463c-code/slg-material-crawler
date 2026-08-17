import { materials as firstWeekMaterials, type Material } from "./material";
import { dataeyeDomesticTestMaterials } from "./dataeyeDomesticTestMaterials";

export type MaterialWeek = {
  id: string;
  label: string;
  snapshotDate: string;
  sourcePeriod: string;
  sourceNote: string;
  sourceName?: string;
  market?: string;
  materials: Material[];
};

type WeeklySeed = {
  rank: number;
  adKey: string;
  materialId: string;
  name: string;
  company: string;
  platform: string;
  platformCode: string;
  impression: number;
  heat: number;
  score: number;
  weekExposure: number;
  days: number;
  firstSeen: number;
  lastSeen: number;
  regions: string[];
  language: string;
  duration: number;
  video: string;
  source?: string;
  createdAt: number;
  theme: string;
  plays: string[];
  visualStyle: string[];
  hookTypes: string[];
  hookCopy: string;
  firstFrame: string;
  result: string;
  coreSellingPoint: string;
  supportPoints: string[];
  sellingPointPrimary: string[];
  sellingPointSecondary: string[];
  productionMethod: string;
  scriptSummary: string;
  emotionCurve: string[];
};

const secondWeekSeeds: WeeklySeed[] = [
  seed(1, "f651d46bd9cb33d00cd2445da7bb0f0c", "3b96a0d14b6ab19011131ccbd879e629", "Kingshot", "Century Games Pte. Ltd.", "Audience Network", "audience_network", 576973, 480, 169967, 96953, 68, 1780124400, 1785951024, 57, "https://sp2cdn-idea-global.zingfront.com/sp_opera/efea9c1617af51723561d3ef4e88f148.mp4", 1780205897, {
    regions: ["科威特", "阿曼", "乌克兰", "卢森堡", "芬兰", "爱尔兰", "日本", "法国", "美国", "英国", "澳大利亚", "韩国"],
    theme: "中世纪战争 / 城镇经营",
    plays: ["玩家对战", "经营管理", "养成", "游戏系统"],
    visualStyle: ["风格化 3D", "明亮", "真人与游戏角色混剪", "战争场景"],
    hookTypes: ["新品发布", "真人反应", "战争冲突"], hookCopy: "New game released!",
    firstFrame: "真人或高辨识度角色快速出场，随后切入中世纪战场与城镇画面。",
    result: "展示战斗推进、角色成长和城镇扩张结果。",
    coreSellingPoint: "把中世纪战斗、养成和经营成长压缩进一条快节奏素材。",
    supportPoints: ["真人提高停留。", "明亮 3D 降低战场理解成本。", "经营与战斗双循环承接长期玩法。"],
    primary: ["核心玩法", "题材与世界观", "美术"], secondary: ["模拟经营", "世界观展示", "角色美术"],
    production: "真人素材、3D 游戏录屏与字幕包装混合",
    summary: "以新品承诺和真人反应建立注意，再用战斗、养成与城市升级连续证明玩法完整度，形成从即时冲突到长期经营的承接。",
    emotion: ["好奇：新品信息出现", "紧张：战斗冲突建立", "满足：成长与建设反馈", "行动：进入安装承接"],
  }),
  seed(2, "d1210bd71df4a43c958c1bf9785ac66d", "b6466ad85f133cee9aae5e243a1c37d7", "Last Fiefdom", "Puzala Games Limited", "Instagram", "instagram", 968711, 505, 142091, 0, 97, 1777273200, 1785618613, 31, "https://sp2cdn-idea-global.zingfront.com/sp_opera/e19f5bca3c963cb098bea65aa4d01479.mp4", 1777522933, {
    regions: ["匈牙利", "西班牙", "日本", "美国", "英国", "韩国", "法国", "德国", "澳大利亚"],
    theme: "中世纪奇幻 / 城堡争夺", plays: ["经营管理", "玩家对战"],
    visualStyle: ["写实 3D", "明亮暖色", "中世纪城堡", "游戏角色"],
    hookTypes: ["利益承诺", "三段动词", "城堡目标"], hookCopy: "Raid, collect, dominate. Free forever!",
    firstFrame: "中世纪英雄与城堡目标同时出现，直接抛出掠夺和征服承诺。",
    result: "展示资源收集、城堡占领和势力扩张。",
    coreSellingPoint: "通过掠夺资源和联盟战争持续扩大领地。",
    supportPoints: ["免费承诺降低进入阻力。", "城堡与军队提供力量感。", "多地区英语素材便于规模化复用。"],
    primary: ["题材与世界观", "核心玩法"], secondary: ["世界观展示", "模拟经营"],
    production: "写实 3D 游戏录屏与文字包装",
    summary: "用 Raid、Collect、Dominate 三段动作把经营与战争目标讲清，先承诺免费体验，再以资源和领地增长证明征服回报。",
    emotion: ["目标：征服承诺出现", "投入：收集并建设", "高涨：联盟战争与占领", "掌控：领地扩大"],
  }),
  seed(3, "0981342961430636212aa5f3b72f85ff", "bbf92e674b41802cd2c8fef49a3d090f", "Kingshot", "Century Games PTE. LTD.", "Audience Network", "audience_network", 429104, 304, 140106, 79704, 50, 1781766000, 1785999600, 60, "https://sp2cdn-idea-global.zingfront.com/sp_opera/924436574806e605fe40b39bdf88b7fd.mp4", 1781786974, {
    regions: ["哈萨克斯坦", "西班牙", "法国", "美国", "日本", "韩国", "澳大利亚", "加拿大"],
    theme: "中世纪战争 / 城市成长", plays: ["游戏系统", "经营管理", "玩家对战"],
    visualStyle: ["风格化 3D", "偏暗", "真人与游戏角色", "高对比战斗"],
    hookTypes: ["真人惊讶", "好玩质问", "新品承诺"], hookCopy: "Why is this game so fun!?",
    firstFrame: "真人惊讶反应配高对比文案，立即提出游戏为何好玩的疑问。",
    result: "用建设、战斗和数值成长回答开头问题。",
    coreSellingPoint: "一条素材同时提供战斗刺激与持续升级的经营反馈。",
    supportPoints: ["真人反应提供社交证明。", "疑问句制造信息缺口。", "长素材完整展示多系统。"],
    primary: ["核心玩法", "美术"], secondary: ["模拟经营", "角色美术"],
    production: "真人反应、3D 实机与字幕动效混合",
    summary: "以真人惊讶和好玩质问制造信息缺口，随后连续展示建设、战斗和成长系统，用玩法密度回答开头承诺。",
    emotion: ["惊讶：真人反应切入", "好奇：为什么好玩", "满足：多系统连续反馈", "行动：Play Now 承接"],
  }),
  seed(4, "f2d800ccb613165e408cabe269c8428c", "40c10fb23af1362fb0900601a0ce58b8", "Sea of Conquest: Pirate War", "FunPlus International AG", "Instagram", "instagram", 123985, 83, 139083, 60165, 14, 1784876400, 1786004225, 32, "https://sp2cdn-idea-global.zingfront.com/sp_opera/9b07863bfd948868eeb80a1e43ace5d5.mp4", 1774101637, {
    regions: ["南非", "比利时", "英国", "法国", "加拿大", "美国", "澳大利亚", "德国"],
    theme: "奇幻海盗 / 船队争夺", plays: ["收集", "玩家对战"],
    visualStyle: ["风格化 3D", "海盗场景", "升级光效", "金币奖励"],
    hookTypes: ["加入队伍", "海盗幻想", "宝藏奖励"], hookCopy: "Join the pirate crew",
    firstFrame: "海盗船或船员直接出现，以加入海盗队伍建立身份想象。",
    result: "展示航行、夺宝、升级和海战结果。",
    coreSellingPoint: "收集宝藏、组建船队并通过海战提升势力。",
    supportPoints: ["海盗题材辨识度高。", "金币和升级光效强化即时奖励。", "船队成长承接长期目标。"],
    primary: ["题材与世界观", "核心玩法"], secondary: ["世界观展示", "场景"],
    production: "3D 游戏录屏、奖励动效与文字包装",
    summary: "先用加入海盗队伍完成身份代入，再以航行、掠夺和升级光效形成奖励链，最后把即时夺宝承接到船队长期成长。",
    emotion: ["向往：海盗身份出现", "探索：驶向未知海域", "兴奋：夺宝与海战", "成就：船队升级"],
  }),
  seed(5, "db18310978d817f0c3809cec85453233", "2869f74afb88c8dc1d66cb6e3175b528", "Total Battle: Last Legends RTS", "Scorewarrior", "Audience Network", "audience_network", 1710067, 996, 127925, 63888, 197, 1768982400, 1785944251, 59, "https://sp2cdn-idea-global.zingfront.com/sp_opera/8ea61b89ac16fb407ebf328bd89596d1.mp4", 1774028463, {
    regions: ["瑞典", "南非", "土耳其", "西班牙", "英国", "法国", "德国", "澳大利亚"],
    theme: "中世纪奇幻 / 怪物战争", plays: ["游戏系统", "PvE 玩家对环境", "玩家对战"],
    visualStyle: ["风格化 3D", "高饱和多彩", "强特效", "大型怪物"],
    hookTypes: ["失败挑战", "不服心理", "怪物压迫"], hookCopy: "Many failed before! Think you can do better?",
    firstFrame: "巨型敌人或失败局面配挑战文案，直接激发观众证明欲。",
    result: "展示阵容调整、战斗反转和击败敌人的反馈。",
    coreSellingPoint: "通过策略布阵解决高压 PvE 战斗并继续扩张。",
    supportPoints: ["失败挑战激活不服心理。", "强特效放大战斗结果。", "197 天投放说明素材具备长跑价值。"],
    primary: ["核心玩法", "美术"], secondary: ["场景", "角色美术"],
    production: "3D 游戏录屏、怪物动画与强特效包装",
    summary: "以多数人失败的挑战建立对抗情绪，随后展示布阵、试错和战斗反转，用击败强敌的结果兑现策略能力。",
    emotion: ["压迫：失败与强敌出现", "挑战：观众产生证明欲", "高涨：布阵后反击", "释放：击败敌人"],
  }),
  seed(6, "b6186d6c839ab391505408faea3e581d", "eced0d3c124d4025ba347b3ff262abc9", "Last Asylum: Plague", "37GAMES GLOBAL", "Audience Network", "audience_network", 101504, 77, 123256, 0, 13, 1784530800, 1785552710, 50, "https://sp2cdn-idea-global.zingfront.com/sp_opera/947bc4b3d7769a0205980d9d6bae1dee.mp4", 1778188020, {
    regions: ["印度尼西亚", "芬兰", "加拿大", "德国", "法国", "美国", "澳大利亚", "英国"],
    theme: "末日瘟疫 / 生存经营", plays: ["经营管理", "PvE 玩家对环境", "战斗"],
    visualStyle: ["风格化 3D", "暖色高饱和", "强特效", "灾难场景"],
    hookTypes: ["七日生存", "瘟疫危机", "直接挑战"], hookCopy: "Can you survive until the seventh day?",
    firstFrame: "瘟疫或怪物威胁快速出现，直接提出能否活到第七天。",
    result: "展示搜集、建设、防守和阶段性存活。",
    coreSellingPoint: "在持续灾难压力下经营据点并抵御敌人。",
    supportPoints: ["七日目标清晰易懂。", "灾难倒计时制造持续压力。", "战斗与基地经营形成闭环。"],
    primary: ["题材与世界观", "核心玩法"], secondary: ["世界观展示", "模拟经营"],
    production: "3D 游戏录屏、灾难特效与危机文案",
    summary: "以七日生存问题建立时间压力，按资源搜集、据点建设和防守逐步推进，让观众看到从危机到稳定的生存闭环。",
    emotion: ["恐惧：瘟疫危机出现", "紧张：七日倒计时", "缓解：据点逐步稳定", "期待：继续扩张生存"],
  }),
  seed(7, "4d9d8f1cf93ed1fa48513b832ab7d0f4", "453db8e8933398b1cea5bcbd050d242a", "Last Fiefdom", "Puzala", "Instagram", "instagram", 226664, 155, 116002, 66556, 32, 1783321200, 1785999413, 22, "https://sp2cdn-idea-global.zingfront.com/sp_opera/56cb6172c8f1516626f7ae5544280316.mp4", 1779534773, {
    regions: ["瑞典", "科威特", "挪威", "土耳其", "阿联酋", "澳大利亚", "法国"],
    theme: "中世纪联盟战争", plays: ["游戏系统", "玩家对战", "经营管理"],
    visualStyle: ["风格化 3D", "明亮暖色", "中饱和", "弱特效"],
    hookTypes: ["二选一危机", "联盟召集", "荣耀承诺"], hookCopy: "Unite or Perish!",
    firstFrame: "联盟军队或城堡危机出现，用团结或灭亡的二选一文案切入。",
    result: "展示结盟、出征和争夺荣耀。",
    coreSellingPoint: "与盟友协作参与中世纪领地战争。",
    supportPoints: ["二选一文案形成紧迫感。", "短时长信息集中。", "弱特效突出策略与联盟关系。"],
    primary: ["题材与世界观", "核心玩法"], secondary: ["世界观展示", "场景"],
    production: "3D 游戏录屏与短文案包装",
    summary: "以联盟生死二选一快速制造危机，用集结和出征证明协作价值，并以荣耀承诺完成短链路行动承接。",
    emotion: ["危机：团结或灭亡", "归属：盟友集结", "高涨：共同出征", "荣耀：争夺最终胜利"],
  }),
  seed(8, "d03b87223b4057da2abe40aa9a047694", "a6b2a03eac40907f76939b14ef3c8e56", "Avatar: Realms Collide", "Tilting Point", "Messenger", "messenger", 622269, 183, 114655, 81811, 43, 1782370800, 1786059010, 38, "https://sp2cdn-idea-global.zingfront.com/sp_opera/ddb0cb6fff8c2a34f7ba913adf4f3ab6.mp4", 1782476596, {
    regions: ["尼日利亚", "波兰", "阿联酋", "英国", "澳大利亚", "美国", "德国"],
    theme: "Avatar 正版 IP / 元素世界", plays: ["玩家对战", "收集", "经营管理"],
    visualStyle: ["风格化 3D", "元素特效", "高吸引力角色", "IP 场景"],
    hookTypes: ["经典 IP", "高吸引力角色", "元素战斗"], hookCopy: "Master Earth. Restore Balance.",
    firstFrame: "高吸引力 IP 角色与土元素能力直接出现。",
    result: "展示元素技能、英雄收集和阵营成长。",
    coreSellingPoint: "收集熟悉角色并用元素能力参与阵营战争。",
    supportPoints: ["经典 IP 降低认知成本。", "角色出场强化情怀。", "元素战斗形成视觉差异。"],
    primary: ["题材与世界观", "美术", "核心玩法"], secondary: ["角色美术", "世界观展示", "场景"],
    production: "IP 角色动画、3D 游戏录屏与元素特效混合",
    summary: "用正版 IP 角色和元素能力完成强识别，随后从动作展示过渡到英雄收集与阵营成长，兼顾情怀和策略长期目标。",
    emotion: ["熟悉：IP 角色出现", "惊艳：元素能力展示", "投入：收集并组建阵容", "使命：恢复世界平衡"],
  }),
  seed(9, "7c3732724f0c9102e1b8823cbaa6f5df", "d41851f286e55c96e04307d233a75f74", "We Are Warriors!", "Lessmore GmbH", "Audience Network", "audience_network", 540939, 424, 113543, 80908, 64, 1780642800, 1786078349, 59, "https://sp2cdn-idea-global.zingfront.com/sp_opera/702770a41aff5ba07304e93291ff62aa.mp4", 1780705030, {
    regions: ["德国", "爱尔兰", "法国", "日本", "加拿大", "美国", "西班牙"],
    theme: "文明战争 / 时代进化", plays: ["经营管理", "塔防建造", "资源收集"],
    visualStyle: ["风格化 3D", "简化战场", "单位进化", "低文字依赖"],
    hookTypes: ["纯玩法直出", "军队成长", "零干扰承诺"], hookCopy: "Unleash Your Inner Warrior",
    firstFrame: "简化战场与基础兵种直接进入战斗，没有独立剧情钩子。",
    result: "展示资源积累、兵种升级和时代推进。",
    coreSellingPoint: "用资源经营推动军队与文明持续进化。",
    supportPoints: ["规则直观。", "进化结果持续可见。", "低文字依赖适合多地区。"],
    primary: ["核心玩法", "美术"], secondary: ["模拟经营", "场景"],
    production: "3D 游戏录屏与轻量字幕",
    summary: "素材弱化剧情和独立钩子，直接用采集、出兵、升级的高频循环维持观看，核心吸引力来自单位与时代持续进化。",
    emotion: ["理解：直接进入战场", "专注：资源与出兵循环", "满足：兵种升级", "期待：进入下一时代"],
  }),
  seed(10, "cee8aaf4aa03fd592961d37ee5821b8e", "edb9e146782fd9c4fc95db52920231e4", "War and Order", "CamelStudio", "Audience Network", "audience_network", 1968293, 570, 107306, 76709, 193, 1769500800, 1786078761, 38, "https://sp2cdn-idea-global.zingfront.com/sp_opera/e02df661babaa6a388b019ea1bb3e95a.mp4", 1770739608, {
    regions: ["新西兰", "日本", "德国", "意大利", "西班牙", "波兰", "阿联酋"],
    theme: "中世纪奇幻战争", plays: ["玩家对战", "经营管理"],
    visualStyle: ["写实 3D", "高饱和", "高对比", "强特效"],
    hookTypes: ["策略预言", "城市归属", "大战场"], hookCopy: "The city will be yours tomorrow!",
    firstFrame: "城市与敌军局势同时出现，用明日夺城承诺建立结果期待。",
    result: "展示规划、集结和攻占城市。",
    coreSellingPoint: "通过精细规划和联盟战争夺取奇幻城市。",
    supportPoints: ["结果承诺明确。", "大型怪物和军队增强场面。", "193 天持续投放具备长跑参考价值。"],
    primary: ["核心玩法", "题材与世界观", "美术"], secondary: ["世界观展示", "场景", "模拟经营"],
    production: "写实 3D 游戏录屏与强特效包装",
    summary: "以明日夺城的结果承诺开场，随后呈现规划、集结和攻城，用大型战场把策略投入转化为可见的城市归属。",
    emotion: ["期待：夺城结果承诺", "筹备：策略与集结", "高涨：攻城大战", "掌控：城市归属变化"],
  }),
  seed(11, "a7ff30c4335a7cb04aeba0cc6f464ccf", "b376a77083f36372b2d94a157f871605", "Tiles Survive!", "FunPlus International AG", "Instagram", "instagram", 136797, 90, 106483, 76272, 16, 1784703600, 1786033322, 59, "https://sp2cdn-idea-global.zingfront.com/sp_opera/3bdac04d2341c98d049cd1d2d218795f.mp4", 1777135509, {
    regions: ["澳大利亚", "波兰", "法国", "德国", "美国", "日本", "英国", "韩国"],
    theme: "荒野探险 / 生存收集", plays: ["收集", "生存经营"],
    visualStyle: ["风格化 3D", "明亮多彩", "中等特效", "地图探索"],
    hookTypes: ["亲自尝试", "生存任务", "地图探索"], hookCopy: "Try it yourself",
    firstFrame: "角色与可交互地块直接出现，用亲自尝试邀请观众进入玩法。",
    result: "展示采集、解锁地块和营地成长。",
    coreSellingPoint: "探索未知地块并通过资源收集建立生存营地。",
    supportPoints: ["交互邀请提高参与感。", "地块解锁提供连续目标。", "多彩画面降低生存题材压力。"],
    primary: ["核心玩法", "美术"], secondary: ["模拟经营", "场景"],
    production: "3D 游戏录屏与地图动效",
    summary: "以 Try it yourself 邀请观众代入操作，按探索、采集和营地成长连续推进，让未知地块成为持续观看动力。",
    emotion: ["好奇：未知地块出现", "参与：代入采集操作", "满足：地图逐步解锁", "期待：营地继续成长"],
  }),
  seed(12, "fad1c6774611488c4d3ff29037e401ad", "9dda688fbd1116ac7ec33643ad6f5cc9", "Top War: Battle Game", "RiverGame", "Instagram", "instagram", 1238129, 926, 105404, 30109, 125, 1775113200, 1785826800, 58, "https://sp2cdn-idea-global.zingfront.com/sp_opera/2c8e0dd07b6762981087103f3afb1fc3.mp4", 1776249770, {
    regions: ["阿尔及利亚", "丹麦", "挪威", "韩国", "英国", "法国", "澳大利亚", "日本"],
    theme: "现代卡通战争", plays: ["玩家对战", "合成升级"],
    visualStyle: ["风格化 3D", "明亮高饱和", "高对比", "强特效"],
    hookTypes: ["战争轻量化", "选择挑战", "轻松胜利"], hookCopy: "War Meets Casual Play",
    firstFrame: "高饱和战场配轻松表情文案，强调战争与休闲玩法结合。",
    result: "展示选择、合成升级和战斗胜利。",
    coreSellingPoint: "用低门槛选择和合成操作获得策略战斗反馈。",
    supportPoints: ["休闲承诺降低策略门槛。", "升级变化清晰可见。", "高热度和长投放兼具参考价值。"],
    primary: ["副玩法", "核心玩法", "美术"], secondary: ["场景", "角色强度（数值）"],
    production: "3D 游戏录屏、选择题包装与强特效",
    summary: "用战争与休闲的反差承诺降低进入门槛，随后通过选择和合成升级制造参与感，再以战斗胜利兑现轻松变强。",
    emotion: ["轻松：休闲战争承诺", "参与：选择正确方案", "上升：合成升级", "释放：快速获胜"],
  }),
  seed(13, "15c8ef4e27cd3c4dc236ec7736da2dc2", "c2d09a2124c47361dd62787038862b63", "Logistics Empire Truck Manager", "XYRALITY GmbH", "Audience Network", "audience_network", 242123, 171, 103475, 44235, 34, 1783062000, 1785949987, 16, "https://sp2cdn-idea-global.zingfront.com/sp_opera/b281bed5b772de4672eed457eb05a31f.mp4", 1783280258, {
    regions: ["意大利"], language: "意大利语", theme: "现代物流 / 商业经营", plays: ["物流规划", "订单管理", "经营管理"],
    visualStyle: ["写实 3D", "卡车场景", "订单 UI", "明确下载引导"],
    hookTypes: ["职业幻想", "商业大亨", "真实体验"], hookCopy: "Diventa un magnate della logistica!",
    firstFrame: "卡车与物流地图直接出现，邀请用户成为物流大亨。",
    result: "展示接单、规划路线和扩大车队。",
    coreSellingPoint: "通过订单与路线规划建立自己的物流公司。",
    supportPoints: ["职业幻想明确。", "16 秒内快速讲清经营循环。", "本地化文案与地区高度匹配。"],
    primary: ["核心玩法", "题材与世界观"], secondary: ["模拟经营", "场景"],
    production: "写实 3D 游戏录屏、UI 动效与意大利语包装",
    summary: "以物流大亨身份承诺切入，在短时长内依次展示订单、路线和车队扩张，直接证明经营规模增长。",
    emotion: ["向往：大亨身份出现", "专注：规划订单路线", "满足：车队扩大", "行动：明确下载"],
  }),
  seed(14, "896c44918acf354119e2ab3050d4cc5c", "e9f15db0f4aca0eadd124b5b675929dc", "Lordrush", "Century Games Innovation Pte. Ltd.", "Instagram", "instagram", 108351, 88, 96913, 69869, 17, 1784703600, 1786076726, 48, "https://sp2cdn-idea-global.zingfront.com/sp_opera/cc4d76882b30abbb0903111fcf510788.mp4", 1779362020, {
    regions: ["澳大利亚", "加拿大", "意大利", "德国", "法国", "英国", "美国"],
    theme: "中世纪城市战争", plays: ["玩家对战", "城市升级"],
    visualStyle: ["风格化 3D", "明亮暖色", "高饱和", "强特效"],
    hookTypes: ["快速进入", "持续升级", "城市扩张"], hookCopy: "Jump in fast and keep upgrading the city",
    firstFrame: "城市与可升级目标直接出现，文案强调快速开始。",
    result: "展示连续升级、城市变化和战斗推进。",
    coreSellingPoint: "用高频城市升级持续提供成长理由。",
    supportPoints: ["快速开始降低阻力。", "升级反馈密集。", "城市与战争目标相互承接。"],
    primary: ["核心玩法", "美术"], secondary: ["模拟经营", "场景"],
    production: "3D 游戏录屏、升级光效与字幕包装",
    summary: "以快速开始承诺直接进入城市升级，通过连续可见的建筑变化维持节奏，再以战争目标承接成长价值。",
    emotion: ["直接：快速进入玩法", "满足：连续升级", "期待：城市扩大", "高涨：战斗承接"],
  }),
  seed(15, "8dd19c1fa7ce5d5c5cbf5a751377ce05", "e3e79f91f05649085ea33f914e2dc08d", "Project Entropy", "FunPlus International AG", "Instagram", "instagram", 65509, 65, 93658, 15783, 8, 1785135600, 1785740400, 34, "https://sp2cdn-idea-global.zingfront.com/sp_opera/dc81b64d4636276850e8ee43ad49caa0.mp4", 1773198654, {
    regions: ["挪威", "菲律宾", "印度尼西亚", "日本", "法国", "美国", "英国"],
    theme: "科幻星球 / 机甲战争", plays: ["游戏系统", "星球征服"],
    visualStyle: ["写实 3D", "高对比", "强特效", "明亮科幻"],
    hookTypes: ["史诗战斗", "未知星球", "机甲军团"], hookCopy: "Epic Planet Battles",
    firstFrame: "未知星球和机甲军队大场面直接出现。",
    result: "展示机甲出征、星球战斗和领地推进。",
    coreSellingPoint: "组建机甲军团探索并征服未知星球。",
    supportPoints: ["科幻大场面形成辨识度。", "机甲强化力量幻想。", "全球多地区投放验证题材通用性。"],
    primary: ["题材与世界观", "美术", "核心玩法"], secondary: ["世界观展示", "场景", "角色美术"],
    production: "写实 3D CG、游戏录屏与强特效混合",
    summary: "以未知星球和机甲军团建立宏大世界观，随后用出征和战斗证明力量，最终把即时场面承接到星球征服目标。",
    emotion: ["惊叹：未知星球出现", "力量：机甲军团集结", "高涨：大规模战斗", "掌控：领地推进"],
  }),
  seed(16, "34cc4021e1f5f2a939f535bff327e763", "a03e6ac76312be179edd150da0dd00c9", "Reign of Pirates", "Puzala", "Audience Network", "audience_network", 442418, 343, 92187, 65692, 55, 1781334000, 1786049861, 43, "https://sp2cdn-idea-global.zingfront.com/sp_opera/2ed0514e4a52a2aab8110a58d6007392.mp4", 1781437842, {
    regions: ["澳大利亚", "挪威", "法国", "英国", "加拿大", "德国", "西班牙"],
    theme: "奇幻海盗 / 船只经营", plays: ["经营管理", "玩家对战", "船只建造"],
    visualStyle: ["写实 3D", "海洋场景", "船只建造", "低文字依赖"],
    hookTypes: ["征服大海", "船长身份", "海战幻想"], hookCopy: "Conquer the high seas.",
    firstFrame: "大型船只与海面直接出现，赋予观众船长身份。",
    result: "展示造船、探索、寻宝和海战。",
    coreSellingPoint: "经营船队并在奇幻海域持续征服。",
    supportPoints: ["船长身份代入清晰。", "船只建造具备成长可视性。", "海战和经营形成完整闭环。"],
    primary: ["题材与世界观", "核心玩法"], secondary: ["世界观展示", "模拟经营"],
    production: "写实 3D 游戏录屏与海战动画",
    summary: "用征服大海的身份承诺开场，按造船、寻宝和海战推进，让经营投入不断转化为船队与海域控制力。",
    emotion: ["向往：成为船长", "探索：寻找宝藏", "高涨：海战冲突", "掌控：船队扩大"],
  }),
  seed(17, "9b5af2132f190e5a7af79e30e3573c5a", "fd980bdd885661475bddc1a2c45fb8ba", "Arknights: Endfield", "GRYPH FRONTIER PTE.LTD.", "YouTube", "youtube", 167048, 999, 91731, 0, 10, 1784982168, 1785797969, 30, "https://sp2cdn-idea-global.zingfront.com/sp_opera/12d5ef231be98ee9420c6ce787da8c96.mp4", 1770309787, {
    source: "https://www.youtube.com/watch?v=68TBkvFTcV4", regions: ["日本"], language: "日语 / 低文字依赖",
    theme: "二次元科幻 / 角色探索", plays: ["解谜", "养成", "收集"],
    visualStyle: ["2D 二次元", "明亮暖色", "中等特效", "角色演出"],
    hookTypes: ["角色美术", "科幻悬念", "世界观演出"], hookCopy: "角色与科幻场景直出",
    firstFrame: "高完成度二次元角色与科幻环境直接建立视觉吸引。",
    result: "展示角色行动、能力演出和探索推进。",
    coreSellingPoint: "用高品质角色和科幻世界满足收集与探索欲。",
    supportPoints: ["角色美术承担主要钩子。", "30 秒节奏集中。", "YouTube 原始页可交叉核验。"],
    primary: ["美术", "题材与世界观"], secondary: ["角色美术", "世界观展示"],
    production: "2D/3D 角色动画、游戏录屏与中等特效混合",
    summary: "以高完成度角色和科幻场景建立第一印象，随后通过能力演出与探索片段扩展世界观，核心依赖美术品质而非强文案。",
    emotion: ["惊艳：角色亮相", "好奇：科幻环境展开", "期待：能力与探索展示", "记忆：品牌收束"],
  }),
  seed(18, "037c861337ba2e311a2e1d930d92b8d3", "8c78bb47522d4692ccbaf7f7f9acdd44", "Tavern Legend", "Happy Factory PTE LTD", "Audience Network", "audience_network", 853653, 769, 90619, 60456, 99, 1777532400, 1785996009, 44, "https://sp2cdn-idea-global.zingfront.com/sp_opera/c62e1cbcac876328ccb115a05d416645.mp4", 1777938087, {
    regions: ["德国", "澳大利亚", "美国", "英国", "加拿大", "法国", "土耳其"],
    theme: "中世纪奇幻 / 酒馆英雄", plays: ["战斗", "英雄养成"],
    visualStyle: ["写实 3D", "冷色偏暗", "强特效", "酒馆场景"],
    hookTypes: ["暗黑氛围", "英雄登场", "强战斗特效"], hookCopy: "英雄与酒馆世界观直出",
    firstFrame: "偏暗酒馆或英雄特写直接建立奇幻氛围。",
    result: "展示英雄集结、技能释放和战斗胜利。",
    coreSellingPoint: "收集酒馆英雄并组建队伍参与奇幻战斗。",
    supportPoints: ["暗色调形成差异。", "英雄特写服务角色收集。", "高热度与长投放提供稳定性参考。"],
    primary: ["美术", "题材与世界观", "核心玩法"], secondary: ["角色美术", "世界观展示", "场景"],
    production: "写实 3D 角色动画、战斗录屏与强特效",
    summary: "以暗黑酒馆氛围和英雄亮相吸引角色用户，再用组队与技能释放展示战斗价值，形成从角色收集到胜利反馈的链路。",
    emotion: ["神秘：暗黑酒馆出现", "期待：英雄集结", "高涨：技能战斗", "满足：胜利反馈"],
  }),
  seed(19, "148c3abd7063c18496c4c35fe826b796", "ba7fdf6857b1feb91063b16c36136355", "Rise of Kingdoms", "Lilith Games", "Instagram", "instagram", 75826, 75, 89477, 75943, 12, 1785049200, 1786049602, 47, "https://sp2cdn-idea-global.zingfront.com/sp_opera/737f55d4c14f1e0abf462c652559b5c3.mp4", 1782223689, {
    regions: ["印度尼西亚", "美国", "澳大利亚", "英国", "法国", "日本", "西班牙"],
    theme: "文明战争 / 开放世界", plays: ["经营管理", "玩家对战", "塔防建造"],
    visualStyle: ["风格化 3D", "文明地图", "大规模军队", "品牌落版"],
    hookTypes: ["世纪设计", "宏大战场", "权力承诺"], hookCopy: "Design the Next Century",
    firstFrame: "文明地图或大型军队直接出现，提出设计下一个世纪的宏观目标。",
    result: "展示建设、联盟、实时行军和战场推进。",
    coreSellingPoint: "在开放世界经营文明并指挥大规模实时战争。",
    supportPoints: ["宏观目标强化长期想象。", "大军团提供力量感。", "明确 Logo 与下载引导完成承接。"],
    primary: ["题材与世界观", "核心玩法"], secondary: ["世界观展示", "模拟经营"],
    production: "3D 游戏录屏、文明地图动画与品牌包装",
    summary: "以设计下一个世纪的宏观命题提升格局，随后从建设过渡到实时行军和联盟战争，证明玩家对文明进程的掌控。",
    emotion: ["使命：宏观目标出现", "筹备：建设文明", "高涨：大军团交战", "掌控：版图扩张"],
  }),
  seed(20, "c7ead40ced68fa2defc725e97a1f2b12", "c177cb42e088f71cfd4bc65a8193cd3f", "Kingshot", "Century Games Pte. Ltd.", "Audience Network", "audience_network", 333163, 262, 88411, 0, 47, 1781593200, 1785616251, 59, "https://sp2cdn-idea-global.zingfront.com/sp_opera/2a67eeb8e531a669d702867686354756.mp4", 1781669008, {
    regions: ["印度尼西亚", "挪威", "墨西哥", "澳大利亚", "英国", "加拿大", "法国"],
    theme: "中世纪塔防 / 城镇经营", plays: ["玩家对战", "经营管理", "游戏系统", "养成"],
    visualStyle: ["风格化 3D", "强冲突", "塔防路线", "资源反馈"],
    hookTypes: ["强冲突", "沉迷证明", "快速变强"], hookCopy: "I can't believe I've played Kingshot for 8 hours straight",
    firstFrame: "敌军压境或角色危机配八小时沉迷式社交证明。",
    result: "展示塔防建造、资源收集和胜利定格。",
    coreSellingPoint: "用塔防和资源经营提供连续快速成长反馈。",
    supportPoints: ["强冲突提高首屏停留。", "沉迷文案提供社交证明。", "胜利定格强化快速变强。"],
    primary: ["核心玩法", "副玩法"], secondary: ["模拟经营", "角色强度（数值）"],
    production: "3D 游戏录屏、冲突包装与结果定格",
    summary: "以强冲突和八小时沉迷式证明建立注意，随后用塔防、资源收集和快速成长形成连续循环，最后以胜利爽点定格。",
    emotion: ["紧张：敌军危机出现", "好奇：沉迷证明", "满足：快速升级与收集", "释放：胜利定格"],
  }),
];

const dataeyeDomesticTestMaterial: Material = {
  id: "SLG-DATAEYE-TEST-01",
  weekId: "dataeye-test",
  adKey: "4147966400000",
  materialId: "dataeye-4147966400000",
  name: "三国志·战略版",
  recordName: "三国志·战略版 / DataEye 国内素材测试",
  company: "广州爱九游信息技术有限公司",
  region: "中国大陆",
  platform: "国内信息流媒体（15 家）",
  channel: "DataEye ADXray",
  launchStage: "成熟期产品 / 长期投放素材",
  theme: "三国历史 / 写实战争",
  category: "4X SLG / 策略",
  format: "真实地形 / 战术伏击 / 历史改写",
  audience: "偏好三国历史、战争策略、地形博弈和多人对抗的国内策略游戏用户。",
  hookTypes: ["真实地形", "战术伏击", "历史改写"],
  hookCopy: "利用真实地形，拦截埋伏杀敌，快来《三国志·战略版》改变历史",
  hookMechanism: "用真实地形与伏击战术建立差异化认知，再以“改变历史”承接玩家的掌控欲。此判断来自页面文案，需结合完整视频复核。",
  firstFrame: "待视频复核：DataEye 页面信息未提供可验证的首帧描述。",
  result: "待视频复核：页面文案指向拦截、埋伏和杀敌结果，但尚未确认视频是否直接展示结果。",
  coreSellingPoint: "利用真实地形进行拦截、埋伏等战术决策",
  supportingSellingPoints: [
    { sequence: 1, benefit_type: "题材与世界观", message: "三国历史背景提供熟悉的战争目标与阵营代入。" },
    { sequence: 2, benefit_type: "核心玩法", message: "地形会影响行军、拦截和伏击，突出策略选择的实际作用。" },
    { sequence: 3, benefit_type: "目标感", message: "“改变历史”将单次战斗承接到更大的长期征服目标。" },
  ],
  character: "待视频复核：页面数据未标注角色使用方式。",
  voiceover: "待视频复核：页面数据未提供口播或音轨信息。",
  gameplay: "待视频复核：广告文案指向真实地形、拦截与伏击玩法。",
  fakeGameplay: "待视频复核：当前只能确认产品与战术文案，无法据此判断是否使用假玩法。",
  visualStyle: ["三国战争", "写实策略", "具体画面待视频复核"],
  duration: "25 秒",
  editingPace: "待视频复核：需读取完整视频后确认镜头频率与节奏变化。",
  endCard: "待视频复核：页面数据未提供落版画面信息。",
  localization: "中文文案；其他字幕、口播和 CTA 形式待视频复核。",
  productionMethod: "待视频复核",
  productionComponents: ["页面可确认：视频素材", "具体制作构成待视频复核"],
  productionNotes: [
    "视频尺寸：1334 × 750。",
    "素材抓取：291.6 万次；关联计划：53,138。",
    "视频直链带有效期，仅用于本次本地测试；失效后应从 DataEye 详情页重新获取。",
  ],
  dataSource: "DataEye ADXray",
  displayEstimate: "1.856 亿",
  displayEstimateValue: 185600000,
  popularity: "素材抓取 291.6 万次",
  heat: "关联计划 53,138",
  heatValue: 53138,
  runDays: "1196 天",
  runDaysValue: 1196,
  dateRange: "2022-09-26 至 2026-08-10",
  dateStart: "2022-09-26",
  dateEnd: "2026-08-10",
  platforms: ["懂球帝", "车来了", "段友", "最右", "其他 11 家媒体"],
  regions: ["中国大陆"],
  sellingPointPrimary: ["核心玩法", "题材与世界观"],
  sellingPointSecondary: ["战术策略", "世界观展示", "场景"],
  videoLink: "https://adxray.dataeye.com/index/home#/Product/Plan/4147966400000",
  originalAdLink: "https://adxray.dataeye.com/index/home#/Product/Plan/4147966400000",
  videoLinkCollectedAt: null,
  guangdadaDetailLink: null,
  analysisSource: "视频解析草稿",
  scriptAnalysis: {
    summary: "基于 DataEye 页面文案的初步判断：素材以真实地形作为玩法差异点，用拦截、埋伏、杀敌三段战术动作证明策略深度，再用“改变历史”放大长期目标。完整镜头顺序仍需读取视频后复核。",
    structureAndRhythm: [
      "开头：预计以真实地形或战场冲突建立注意，具体首帧与时长待视频复核。",
      "主体：页面文案依次强调拦截、埋伏和杀敌，实际镜头顺序待视频复核。",
      "承接：以改变历史的宏观目标强化策略玩家的掌控感，具体落版待视频复核。",
    ],
    emotionCurve: ["好奇：真实地形形成差异点", "紧张：拦截与埋伏建立冲突", "释放：杀敌结果提供反馈", "掌控：改变历史承接长期目标"],
  },
  status: "pending_video",
  statusLabel: "待视频复核",
};

export const materialWeeks: MaterialWeek[] = [
  {
    id: "week-1",
    label: "第 1 周",
    snapshotDate: "2026-08-04",
    sourcePeriod: "2026-07-27 至 2026-08-02",
    sourceNote: "首版 Top 10 样本",
    materials: firstWeekMaterials.map((material) => ({ ...material, weekId: "week-1" })),
  },
  {
    id: "dataeye-cn-slg-10",
    label: "DataEye 国内 SLG 多题材十条测试",
    snapshotDate: "2026-08-17",
    sourcePeriod: "2023-06-14 至 2026-08-17",
    sourceNote: "十个不同产品各保留一条高曝光或高互动视频，覆盖十种题材与创意表达，并完成画面分析",
    sourceName: "DataEye AdXray",
    market: "中国大陆",
    materials: dataeyeDomesticTestMaterials,
  },
  {
    id: "week-2",
    label: "第 2 周",
    snapshotDate: "2026-08-07",
    sourcePeriod: "2026-07-27 至 2026-08-02",
    sourceNote: "4X SLG 热门视频榜；素材、视频与历史周去重",
    materials: secondWeekSeeds.map(createWeeklyMaterial),
  },
];

export const latestMaterialWeek = materialWeeks.at(-1)!;
export const allMaterials = materialWeeks.flatMap((week) => week.materials);

function seed(
  rank: number, adKey: string, materialId: string, name: string, company: string,
  platform: string, platformCode: string, impression: number, heat: number, score: number,
  weekExposure: number, days: number, firstSeen: number, lastSeen: number, duration: number,
  video: string, createdAt: number,
  details: Omit<WeeklySeed, "rank" | "adKey" | "materialId" | "name" | "company" | "platform" | "platformCode" | "impression" | "heat" | "score" | "weekExposure" | "days" | "firstSeen" | "lastSeen" | "duration" | "video" | "createdAt" | "language" | "source" | "sellingPointPrimary" | "sellingPointSecondary" | "productionMethod" | "scriptSummary" | "emotionCurve"> & {
    language?: string; source?: string; primary: string[]; secondary: string[]; production: string; summary: string; emotion: string[];
  },
): WeeklySeed {
  return {
    rank, adKey, materialId, name, company, platform, platformCode, impression, heat, score,
    weekExposure, days, firstSeen, lastSeen, duration, video, createdAt,
    ...details,
    language: details.language ?? "英语", source: details.source,
    sellingPointPrimary: details.primary,
    sellingPointSecondary: details.secondary,
    productionMethod: details.production,
    scriptSummary: details.summary,
    emotionCurve: details.emotion,
  };
}

function createWeeklyMaterial(seed: WeeklySeed): Material {
  const detailLink = `https://guangdada.net/modules/creative/display-ads/detail?channel=${seed.platformCode}&id=${seed.adKey}&type=1&created_at=${seed.createdAt}&fb_merge=false&search_flag=145458`;
  const middleEnd = Math.max(8, seed.duration - 5);
  const support = seed.supportPoints.map((message, index) => ({ sequence: index + 1, benefit_type: seed.sellingPointSecondary[index] ?? "辅助卖点", message }));

  return {
    id: `SLG-W2-${String(seed.rank).padStart(2, "0")}`,
    weekId: "week-2",
    adKey: seed.adKey,
    materialId: seed.materialId,
    name: seed.name,
    recordName: `${seed.name} / 第 2 周 Top ${seed.rank}`,
    company: seed.company,
    region: seed.regions.join("、"),
    platform: seed.platform,
    channel: seed.platform,
    launchStage: "热门榜持续投放素材",
    theme: seed.theme,
    category: "4X SLG / 策略",
    format: seed.hookTypes.slice(0, 2).join(" / "),
    audience: `偏好${seed.theme.replaceAll(" / ", "、")}以及${seed.plays.join("、")}的海外策略用户。`,
    hookTypes: seed.hookTypes,
    hookCopy: seed.hookCopy,
    hookMechanism: `${seed.hookTypes.join("、")}共同承担首屏注意力入口。`,
    firstFrame: seed.firstFrame,
    result: seed.result,
    coreSellingPoint: seed.coreSellingPoint,
    supportingSellingPoints: support,
    character: seed.visualStyle.some((item) => item.includes("角色") || item.includes("真人")) ? "有。角色承担首屏识别和结果反馈。" : "有游戏单位或英雄，但不以真人剧情为主。",
    voiceover: `${seed.language}本地化文案；MCP 未提供独立音轨标签，分析以画面与广告文案为准。`,
    gameplay: `展示${seed.plays.join("、")}相关玩法。`,
    fakeGameplay: seed.sellingPointPrimary.includes("副玩法") ? "部分包装。轻玩法负责获客，后端承接 SLG 长线内容。" : "未发现与 4X SLG 后端定位明显冲突的核心展示。",
    visualStyle: seed.visualStyle,
    duration: `${seed.duration} 秒`,
    editingPace: `${seed.duration <= 30 ? "快" : "中快"}节奏，围绕开头钩子、玩法证明和结果承接推进。`,
    endCard: "品牌或行动引导收束；具体商店按钮以原视频为准。",
    localization: `${seed.language}；投放覆盖${seed.regions.length}个已记录地区。`,
    productionMethod: seed.productionMethod,
    productionComponents: ["游戏内容", ...seed.visualStyle.slice(0, 2), "文字或品牌包装"],
    productionNotes: ["广大大 MCP 热门视频榜", "视频链接已去重", `榜单周表现 ${seed.score.toLocaleString("zh-CN")}`, "分析为 MCP 标签与广告文案综合草稿"],
    dataSource: "广大大 MCP / 热门创意榜 2026-07-27",
    displayEstimate: formatEstimate(seed.impression),
    displayEstimateValue: seed.impression,
    popularity: `周表现 ${seed.score.toLocaleString("zh-CN")}`,
    heat: String(seed.heat),
    heatValue: seed.heat,
    runDays: `${seed.days} 天`,
    runDaysValue: seed.days,
    dateRange: `${formatUnixDate(seed.firstSeen)} 至 ${formatUnixDate(seed.lastSeen)}`,
    dateStart: formatUnixDate(seed.firstSeen),
    dateEnd: formatUnixDate(seed.lastSeen),
    platforms: [seed.platform],
    regions: seed.regions,
    sellingPointPrimary: seed.sellingPointPrimary,
    sellingPointSecondary: seed.sellingPointSecondary,
    videoLink: seed.video,
    originalAdLink: seed.source || detailLink,
    videoLinkCollectedAt: null,
    guangdadaDetailLink: detailLink,
    analysisSource: "MCP 标签草稿",
    scriptAnalysis: {
      summary: seed.scriptSummary,
      structureAndRhythm: [
        `0-3 秒：${seed.firstFrame}`,
        `3-${middleEnd} 秒：围绕${seed.plays.join("、")}连续证明核心体验。`,
        `${middleEnd}-${seed.duration} 秒：${seed.result}并进入品牌或行动承接。`,
      ],
      emotionCurve: seed.emotionCurve,
    },
    status: "confirmed",
    statusLabel: "第 2 周已入库",
  };
}

function formatUnixDate(timestamp: number) {
  return new Date(timestamp * 1000).toISOString().slice(0, 10);
}

function formatEstimate(value: number) {
  if (value >= 100_000_000) return `${(value / 100_000_000).toFixed(2)} 亿`;
  if (value >= 10_000) return `${(value / 10_000).toFixed(1)} 万`;
  return value.toLocaleString("zh-CN");
}
