import type { Material } from "./material";

export type TwoProductResearchGroup = {
  id: string;
  name: string;
  targetCount: number;
  qualificationNote: string;
  materials: Material[];
};

type GddSeed = {
  gameId: string; gameName: string; sourceName: string; rank: number; company: string;
  category: string; theme: string; adKey: string; materialId: string;
  platformCode: string; platformName: string; impression: number; heat: number; days: number;
  firstSeen: number; lastSeen: number; regions: string[]; language: string; duration: number;
  video: string; createdAt: number; searchFlag: number; copy: string; tags: Record<string, string[]>;
};

type AdxSeed = {
  gameId: string; gameName: string; sourceName: string; category: string; theme: string;
  rank: number; id: string; productId: number; title: string; publisherName: string;
  media: string[]; durationSeconds: number; exposureNum: number; materialDays: number;
  materialFirstSeen: string; materialLastSeen: string; videoUrl: string; coverUrl: string;
  detailUrl: string; audioTexts: string; score: number;
};

const WEEK_ID = "two-products-2026-08-31";
const GDD_COLLECTED_AT = "2026-08-31";

const gddSeeds: GddSeed[] = [
  {
    "gameId": "cookie-gdd",
    "gameName": "姜饼人王国（广大大）",
    "sourceName": "广大大",
    "rank": 1,
    "company": "Devsisters Corporation",
    "category": "策略 / 王国建设 / RPG",
    "theme": "奇幻童话 / 姜饼人世界",
    "adKey": "cf2097ae1749722542cef7eb9b918f5f",
    "materialId": "8caa9c7d03bd7ab6ba97275e664467dc",
    "platformCode": "youtube",
    "platformName": "YouTube",
    "impression": 3776177,
    "heat": 1000,
    "days": 125,
    "firstSeen": 1774987244,
    "lastSeen": 1785669269,
    "regions": [
      "韩国"
    ],
    "language": "未标注语言",
    "duration": 24,
    "video": "https://sp2cdn-idea-global.zingfront.com/sp_opera/688e529bf2c9e99b35d6fffcb94e9357.mp4",
    "createdAt": 1761171153,
    "searchFlag": 145359,
    "copy": "",
    "tags": {
      "色彩调性-整体饱和度": [
        "高饱和"
      ],
      "色彩调性-主色系": [
        "多彩/彩色"
      ],
      "视觉特效程度": [
        "强特效"
      ],
      "美术风格": [
        "2D卡通"
      ],
      "色彩调性-明暗度": [
        "明亮"
      ],
      "角色类型": [
        "游戏角色"
      ],
      "主要场景": [
        "地牢",
        "战场"
      ],
      "视频类型": [
        "游戏录屏"
      ],
      "营销卖点": [
        "无明确卖点"
      ],
      "结尾引导": [
        "失败引导/你来试试"
      ],
      "核心玩法": [
        "角色合成"
      ],
      "视频主题": [
        "玩法展示",
        "失败不服"
      ],
      "内容题材": [
        "奇幻童话"
      ],
      "游戏元素": [
        "波次倒计时",
        "角色合成",
        "金币消耗"
      ],
      "情绪触发点": [
        "倒计时压力",
        "失败画面"
      ]
    }
  },
  {
    "gameId": "cookie-gdd",
    "gameName": "姜饼人王国（广大大）",
    "sourceName": "广大大",
    "rank": 2,
    "company": "Devsisters Corporation",
    "category": "策略 / 王国建设 / RPG",
    "theme": "奇幻童话 / 姜饼人世界",
    "adKey": "3e496bdfc11da401d7bd1e7591659d59",
    "materialId": "7800fed8caa7ce9433062edb00a5ba6d",
    "platformCode": "youtube",
    "platformName": "YouTube",
    "impression": 795734,
    "heat": 1000,
    "days": 439,
    "firstSeen": 1748828300,
    "lastSeen": 1786672060,
    "regions": [
      "利比亚",
      "墨西哥",
      "阿塞拜疆",
      "阿曼",
      "中国澳门",
      "卢森堡",
      "意大利",
      "蒙古",
      "马来西亚",
      "阿联酋",
      "阿根廷",
      "匈牙利",
      "孟加拉国",
      "波兰",
      "新西兰",
      "印度",
      "葡萄牙",
      "德国",
      "哥伦比亚",
      "巴基斯坦",
      "巴西",
      "沙特阿拉伯",
      "卡塔尔",
      "巴拿马",
      "乌克兰",
      "比利时",
      "英国",
      "瑞典",
      "ARM",
      "加纳",
      "智利",
      "罗马尼亚",
      "加拿大",
      "西班牙",
      "希腊",
      "阿尔及利亚",
      "菲律宾",
      "黎巴嫩",
      "斯洛文尼亚",
      "巴林",
      "丹麦",
      "以色列",
      "LAO",
      "塞内加尔",
      "秘鲁",
      "巴拉圭",
      "法国",
      "瑞士",
      "中国台湾",
      "委内瑞拉",
      "土耳其",
      "埃及",
      "尼日利亚",
      "荷兰",
      "肯尼亚",
      "缅甸",
      "尼泊尔",
      "CHN",
      "哈萨克斯坦",
      "澳大利亚",
      "坦桑尼亚",
      "格鲁吉亚",
      "奥地利",
      "摩洛哥",
      "柬埔寨",
      "印度尼西亚",
      "伊拉克",
      "中国香港",
      "爱尔兰",
      "新加坡",
      "科特迪瓦",
      "挪威",
      "科威特",
      "芬兰"
    ],
    "language": "英语",
    "duration": 31,
    "video": "https://sp2cdn-idea-global.zingfront.com/sp_opera/b3d48b3705459476c967eff7137c08c4.mp4",
    "createdAt": 1774629128,
    "searchFlag": 145458,
    "copy": "Build your Cookie Kingdom and team! An epic town building & adventure RPG game",
    "tags": {
      "色彩调性-整体饱和度": [
        "高饱和"
      ],
      "色彩调性-主色系": [
        "多彩/彩色"
      ],
      "视觉特效程度": [
        "强特效"
      ],
      "美术风格": [
        "2D卡通"
      ],
      "色彩调性-明暗度": [
        "明亮"
      ],
      "角色类型": [
        "游戏角色"
      ],
      "主要场景": [
        "战斗场景",
        "角色选择界面"
      ],
      "视频类型": [
        "游戏录屏"
      ],
      "营销卖点": [
        "高品质感"
      ],
      "结尾引导": [
        "明确下载引导"
      ],
      "核心玩法": [
        "团队战斗",
        "角色收集"
      ],
      "视频主题": [
        "角色展示",
        "爽快战斗"
      ],
      "游戏元素": [
        "战斗特效",
        "胜利结算",
        "角色选择"
      ],
      "情绪触发点": [
        "华丽技能特效",
        "胜利庆祝画面"
      ]
    }
  },
  {
    "gameId": "cookie-gdd",
    "gameName": "姜饼人王国（广大大）",
    "sourceName": "广大大",
    "rank": 3,
    "company": "Devsisters Corporation",
    "category": "策略 / 王国建设 / RPG",
    "theme": "奇幻童话 / 姜饼人世界",
    "adKey": "a3ce9f89091dbb0c0cdade7412c96b4d",
    "materialId": "9e141a307c65769a9862ea9664d7b19c",
    "platformCode": "youtube",
    "platformName": "YouTube",
    "impression": 667897,
    "heat": 1000,
    "days": 142,
    "firstSeen": 1773205348,
    "lastSeen": 1785411927,
    "regions": [
      "美国"
    ],
    "language": "英语",
    "duration": 29,
    "video": "https://sp2cdn-idea-global.zingfront.com/sp_opera/fb1a0d8afbb777f21c5f86c96d4062ef.mp4",
    "createdAt": 1775308280,
    "searchFlag": 145458,
    "copy": "Build your Cookie Kingdom and team! An epic town building & adventure RPG game",
    "tags": {
      "色彩调性-整体饱和度": [
        "高饱和"
      ],
      "色彩调性-主色系": [
        "多彩/彩色"
      ],
      "视觉特效程度": [
        "强特效"
      ],
      "色彩调性-明暗度": [
        "明亮"
      ],
      "角色类型": [
        "敌人/怪物",
        "游戏角色"
      ],
      "主要场景": [
        "战斗场景",
        "游戏关卡场景"
      ],
      "视频类型": [
        "游戏录屏"
      ],
      "营销卖点": [
        "快速变强"
      ],
      "结尾引导": [
        "明确下载引导"
      ],
      "核心玩法": [
        "团队战斗",
        "装备养成"
      ],
      "开头钩子": [
        "直接卖点抛出"
      ],
      "视频主题": [
        "玩法展示",
        "数值成长"
      ],
      "游戏元素": [
        "属性加成"
      ],
      "玩家动机": [
        "成就进步",
        "掌控力量"
      ]
    }
  },
  {
    "gameId": "cookie-gdd",
    "gameName": "姜饼人王国（广大大）",
    "sourceName": "广大大",
    "rank": 4,
    "company": "Devsisters",
    "category": "策略 / 王国建设 / RPG",
    "theme": "奇幻童话 / 姜饼人世界",
    "adKey": "763562c4d6a8e5a7b4b6cb41c1cd5296",
    "materialId": "94b46275f1265f709f370ca250e006da",
    "platformCode": "youtube",
    "platformName": "YouTube",
    "impression": 334140,
    "heat": 1000,
    "days": 57,
    "firstSeen": 1783062555,
    "lastSeen": 1787907218,
    "regions": [
      "韩国"
    ],
    "language": "未标注语言",
    "duration": 26,
    "video": "https://sp2cdn-idea-global.zingfront.com/sp_opera/4840a5a864ff99dddb4bddbfbc4fc0f5.mp4",
    "createdAt": 1783063086,
    "searchFlag": 145459,
    "copy": "",
    "tags": {
      "营销卖点": [
        "无明确卖点"
      ],
      "结尾引导": [
        "明确下载引导"
      ],
      "核心玩法": [
        "技能战斗",
        "角色召唤"
      ],
      "开头钩子": [
        "视觉异常/违和感"
      ],
      "色彩调性-主色系": [
        "多彩/彩色"
      ],
      "美术风格": [
        "2D卡通"
      ],
      "视频主题": [
        "角色展示",
        "爽快战斗"
      ],
      "色彩调性-明暗度": [
        "明亮"
      ],
      "角色类型": [
        "敌人/怪物",
        "游戏角色"
      ],
      "视频类型": [
        "游戏录屏"
      ],
      "色彩调性-整体饱和度": [
        "高饱和"
      ],
      "游戏元素": [
        "多场景关卡",
        "技能释放",
        "角色召唤"
      ],
      "情绪触发点": [
        "技能炫酷特效"
      ],
      "视觉特效程度": [
        "强特效"
      ],
      "玩家动机": [
        "掌控力量"
      ]
    }
  },
  {
    "gameId": "cookie-gdd",
    "gameName": "姜饼人王国（广大大）",
    "sourceName": "广大大",
    "rank": 5,
    "company": "Devsisters Corporation",
    "category": "策略 / 王国建设 / RPG",
    "theme": "奇幻童话 / 姜饼人世界",
    "adKey": "5b634f0286997c4f48192afa92acaa0e",
    "materialId": "eb5f1899284f46d685af148dc5b0efd9",
    "platformCode": "youtube",
    "platformName": "YouTube",
    "impression": 296921,
    "heat": 1000,
    "days": 114,
    "firstSeen": 1776904496,
    "lastSeen": 1786672060,
    "regions": [
      "美国",
      "加拿大"
    ],
    "language": "英语",
    "duration": 31,
    "video": "https://sp2cdn-idea-global.zingfront.com/sp_opera/ade3f678d7b84ac468785f67365d4161.mp4",
    "createdAt": 1770534262,
    "searchFlag": 145458,
    "copy": "Build your Cookie Kingdom and team! An epic town building & adventure RPG game",
    "tags": {
      "内容题材": [
        "奇幻童话"
      ],
      "核心玩法": [
        "团队战斗"
      ],
      "开头钩子": [
        "无独立hook"
      ],
      "游戏元素": [
        "关卡进度",
        "地图编辑器",
        "技能释放",
        "装饰系统"
      ],
      "玩家动机": [
        "创造表达",
        "情绪宣泄"
      ],
      "美术风格": [
        "2D卡通"
      ],
      "视频类型": [
        "游戏录屏"
      ],
      "色彩调性-整体饱和度": [
        "高饱和"
      ],
      "色彩调性-主色系": [
        "暖色系"
      ],
      "视觉特效程度": [
        "强特效"
      ],
      "色彩调性-明暗度": [
        "明亮"
      ],
      "角色类型": [
        "敌人/怪物",
        "游戏角色"
      ],
      "主要场景": [
        "游戏启动界面",
        "游戏战斗场景"
      ],
      "营销卖点": [
        "无明确卖点"
      ]
    }
  },
  {
    "gameId": "cookie-gdd",
    "gameName": "姜饼人王国（广大大）",
    "sourceName": "广大大",
    "rank": 6,
    "company": "Devsisters Corporation",
    "category": "策略 / 王国建设 / RPG",
    "theme": "奇幻童话 / 姜饼人世界",
    "adKey": "d46e19cf8914b93b02d554ae1934e421",
    "materialId": "bd3acd022c00eb2b8828f3d8abb084a0",
    "platformCode": "youtube",
    "platformName": "YouTube",
    "impression": 4936623,
    "heat": 999,
    "days": 418,
    "firstSeen": 1750258847,
    "lastSeen": 1786319854,
    "regions": [
      "德国",
      "法国",
      "芬兰",
      "土耳其",
      "卢森堡",
      "阿根廷",
      "印度",
      "西班牙",
      "瑞典",
      "菲律宾",
      "荷兰",
      "葡萄牙",
      "巴西",
      "新加坡",
      "秘鲁",
      "加拿大",
      "丹麦",
      "意大利",
      "中国台湾",
      "澳大利亚",
      "匈牙利",
      "英国",
      "斯洛文尼亚",
      "爱尔兰",
      "马来西亚",
      "奥地利",
      "挪威",
      "希腊",
      "中国香港",
      "智利",
      "罗马尼亚",
      "乌克兰",
      "以色列",
      "墨西哥",
      "波兰",
      "比利时",
      "印度尼西亚"
    ],
    "language": "英语",
    "duration": 32,
    "video": "https://sp2cdn-idea-global.zingfront.com/sp_opera/e623926db831bed1d065d5db1e933ce3.mp4",
    "createdAt": 1758815499,
    "searchFlag": 145359,
    "copy": "Build your Cookie Kingdom and team! An epic town building & adventure RPG game",
    "tags": {
      "内容题材": [
        "冒险旅程"
      ],
      "核心玩法": [
        "冒险",
        "团队合作",
        "模拟经营",
        "角色扮演"
      ],
      "开头钩子": [
        "视觉异常/违和感"
      ],
      "游戏元素": [
        "升级系统",
        "战斗特效",
        "角色技能展示"
      ],
      "玩家动机": [
        "成就进步",
        "探索好奇",
        "创造表达"
      ],
      "美术风格": [
        "2D卡通"
      ],
      "视频类型": [
        "CG动画"
      ]
    }
  },
  {
    "gameId": "cookie-gdd",
    "gameName": "姜饼人王国（广大大）",
    "sourceName": "广大大",
    "rank": 7,
    "company": "Devsisters",
    "category": "策略 / 王国建设 / RPG",
    "theme": "奇幻童话 / 姜饼人世界",
    "adKey": "2b34e37ec8bb7e9183b208820e642472",
    "materialId": "502ea42c5fa6db5a53056e743392266c",
    "platformCode": "facebook",
    "platformName": "FB News Feed",
    "impression": 3022438,
    "heat": 999,
    "days": 347,
    "firstSeen": 1757314800,
    "lastSeen": 1787209200,
    "regions": [
      "中国台湾",
      "马来西亚",
      "美国",
      "墨西哥",
      "挪威",
      "巴西",
      "加拿大",
      "安哥拉",
      "伊拉克",
      "尼泊尔",
      "巴拿马",
      "澳大利亚",
      "格鲁吉亚",
      "英国",
      "CMR",
      "罗马尼亚",
      "印度",
      "巴林",
      "委内瑞拉",
      "印度尼西亚",
      "中国澳门",
      "荷兰",
      "乌克兰",
      "巴拉圭",
      "中国香港",
      "埃塞俄比亚",
      "日本",
      "加纳",
      "意大利",
      "阿塞拜疆"
    ],
    "language": "英语",
    "duration": 26,
    "video": "https://sp2cdn-idea-global.zingfront.com/sp_opera/bfd1de83005a4d331ff5726c16f21df0.mp4",
    "createdAt": 1759497953,
    "searchFlag": 145359,
    "copy": "Easy-peasy fun! Build and battle it out! 🏡\nMake your very own Cookie Kingdom\nand go on adventures with Cookie friends!",
    "tags": {
      "色彩调性-整体饱和度": [
        "高饱和"
      ],
      "色彩调性-主色系": [
        "多彩/彩色"
      ],
      "视觉特效程度": [
        "中等特效"
      ],
      "美术风格": [
        "混合"
      ],
      "色彩调性-明暗度": [
        "明亮"
      ],
      "角色类型": [
        "真人",
        "游戏角色"
      ],
      "主要场景": [
        "室内办公桌",
        "家庭客厅"
      ],
      "视频类型": [
        "真人讲解/口播"
      ],
      "营销卖点": [
        "自由定制",
        "无明确卖点"
      ],
      "核心玩法": [
        "资源管理"
      ],
      "开头钩子": [
        "真人强情绪"
      ],
      "视频主题": [
        "建造经营/模拟",
        "休闲解压"
      ],
      "情绪触发点": [
        "真人夸张反应"
      ],
      "玩家动机": [
        "创造表达",
        "收集拥有"
      ]
    }
  },
  {
    "gameId": "cookie-gdd",
    "gameName": "姜饼人王国（广大大）",
    "sourceName": "广大大",
    "rank": 8,
    "company": "Devsisters",
    "category": "策略 / 王国建设 / RPG",
    "theme": "奇幻童话 / 姜饼人世界",
    "adKey": "f0ea1c2cfacf0311db67e878dca00aa5",
    "materialId": "aba1dd9163da537a2cd14a7d2153e4f4",
    "platformCode": "facebook",
    "platformName": "FB News Feed",
    "impression": 2975760,
    "heat": 999,
    "days": 347,
    "firstSeen": 1757314800,
    "lastSeen": 1787209200,
    "regions": [
      "中国澳门",
      "巴林",
      "伊拉克",
      "CMR",
      "印度尼西亚",
      "乌克兰",
      "意大利",
      "委内瑞拉",
      "安哥拉",
      "日本",
      "巴拉圭",
      "中国台湾",
      "加拿大",
      "埃塞俄比亚",
      "马来西亚",
      "荷兰",
      "巴西",
      "墨西哥",
      "尼泊尔",
      "罗马尼亚",
      "格鲁吉亚",
      "澳大利亚",
      "美国",
      "挪威",
      "中国香港",
      "巴拿马",
      "加纳",
      "印度",
      "阿塞拜疆"
    ],
    "language": "英语",
    "duration": 26,
    "video": "https://sp2cdn-idea-global.zingfront.com/sp_opera/60f4bf32fccd5206efdd226fb3a701af.mp4",
    "createdAt": 1760056561,
    "searchFlag": 145359,
    "copy": "Easy-peasy fun! Build and battle it out! 🏡\nMake your very own Cookie Kingdom\nand go on adventures with Cookie friends!",
    "tags": {
      "色彩调性-整体饱和度": [
        "高饱和"
      ],
      "色彩调性-主色系": [
        "多彩/彩色"
      ],
      "视觉特效程度": [
        "中等特效"
      ],
      "美术风格": [
        "混合"
      ],
      "色彩调性-明暗度": [
        "明亮"
      ],
      "角色类型": [
        "真人",
        "游戏角色"
      ],
      "主要场景": [
        "室内客厅"
      ],
      "视频类型": [
        "真人讲解/口播"
      ],
      "营销卖点": [
        "自由定制"
      ],
      "核心玩法": [
        "角色养成"
      ],
      "视频主题": [
        "建造经营/模拟",
        "休闲解压"
      ],
      "情绪触发点": [
        "真人夸张反应"
      ],
      "玩家动机": [
        "创造表达",
        "收集拥有"
      ]
    }
  },
  {
    "gameId": "cookie-gdd",
    "gameName": "姜饼人王国（广大大）",
    "sourceName": "广大大",
    "rank": 9,
    "company": "Devsisters",
    "category": "策略 / 王国建设 / RPG",
    "theme": "奇幻童话 / 姜饼人世界",
    "adKey": "5ced54fe67360767cbc52c2e87541983",
    "materialId": "da58c7a6c04c4cf74273dde94a114243",
    "platformCode": "facebook",
    "platformName": "FB News Feed",
    "impression": 2912685,
    "heat": 999,
    "days": 347,
    "firstSeen": 1757314800,
    "lastSeen": 1787209200,
    "regions": [
      "中国台湾",
      "阿塞拜疆",
      "CMR",
      "乌克兰",
      "伊拉克",
      "荷兰",
      "美国",
      "马来西亚",
      "中国澳门",
      "澳大利亚",
      "挪威",
      "意大利",
      "日本",
      "委内瑞拉",
      "巴西",
      "埃塞俄比亚",
      "印度",
      "安哥拉",
      "巴拉圭",
      "中国香港",
      "印度尼西亚",
      "巴拿马",
      "加纳",
      "巴林",
      "墨西哥",
      "罗马尼亚",
      "格鲁吉亚",
      "尼泊尔",
      "加拿大"
    ],
    "language": "英语",
    "duration": 26,
    "video": "https://sp2cdn-idea-global.zingfront.com/sp_opera/1dfe236b7f600e2c1a1cec8dc01032d6.mp4",
    "createdAt": 1759497945,
    "searchFlag": 145359,
    "copy": "Easy-peasy fun! Build and battle it out! 🏡\nMake your very own Cookie Kingdom\nand go on adventures with Cookie friends!",
    "tags": {
      "营销卖点": [
        "自由定制",
        "成长收集"
      ],
      "结尾引导": [
        "明确下载引导"
      ],
      "核心玩法": [
        "角色养成"
      ],
      "开头钩子": [
        "真人强情绪",
        "搞笑/荒诞"
      ],
      "色彩调性-主色系": [
        "多彩/彩色"
      ],
      "美术风格": [
        "2D卡通"
      ],
      "视频主题": [
        "建造经营/模拟"
      ],
      "色彩调性-明暗度": [
        "明亮"
      ],
      "角色类型": [
        "真人",
        "游戏角色"
      ],
      "视频类型": [
        "真人口播"
      ],
      "色彩调性-整体饱和度": [
        "高饱和"
      ],
      "游戏元素": [
        "每日奖励",
        "活动任务",
        "角色装备",
        "资源生产"
      ],
      "情绪触发点": [
        "真人夸张反应"
      ],
      "视觉特效程度": [
        "强特效"
      ]
    }
  },
  {
    "gameId": "cookie-gdd",
    "gameName": "姜饼人王国（广大大）",
    "sourceName": "广大大",
    "rank": 10,
    "company": "Devsisters Corporation",
    "category": "策略 / 王国建设 / RPG",
    "theme": "奇幻童话 / 姜饼人世界",
    "adKey": "0de7e88b82ad07d41abd63ebad779ffa",
    "materialId": "c7f34ecb50a918b9404df86f02a902a7",
    "platformCode": "admob",
    "platformName": "Admob",
    "impression": 1742574,
    "heat": 999,
    "days": 312,
    "firstSeen": 1761097452,
    "lastSeen": 1788003955,
    "regions": [
      "韩国"
    ],
    "language": "英语",
    "duration": 26,
    "video": "https://sp2cdn-idea-global.zingfront.com/sp_opera/15059f87f10a7bf12d8422e5e9affb05.mp4",
    "createdAt": 1786433686,
    "searchFlag": 145459,
    "copy": "Build your Cookie Kingdom and team! An epic town building & adventure RPG game",
    "tags": {
      "营销卖点": [
        "高品质感"
      ],
      "结尾引导": [
        "明确下载引导"
      ],
      "核心玩法": [
        "回合战斗",
        "技能释放"
      ],
      "开头钩子": [
        "无独立hook"
      ],
      "色彩调性-主色系": [
        "多彩/彩色"
      ],
      "美术风格": [
        "2D卡通"
      ],
      "视频主题": [
        "角色展示",
        "爽快战斗"
      ],
      "色彩调性-明暗度": [
        "明亮"
      ],
      "角色类型": [
        "敌人/怪物",
        "游戏角色"
      ],
      "视频类型": [
        "游戏录屏"
      ],
      "色彩调性-整体饱和度": [
        "高饱和"
      ],
      "游戏元素": [
        "战斗关卡",
        "技能系统"
      ],
      "情绪触发点": [
        "华丽特效",
        "技能全屏清怪"
      ],
      "视觉特效程度": [
        "强特效"
      ],
      "玩家动机": [
        "掌控力量"
      ]
    }
  },
  {
    "gameId": "cookie-gdd",
    "gameName": "姜饼人王国（广大大）",
    "sourceName": "广大大",
    "rank": 11,
    "company": "Devsisters",
    "category": "策略 / 王国建设 / RPG",
    "theme": "奇幻童话 / 姜饼人世界",
    "adKey": "d4987b3f675679f807a37fcd553619b8",
    "materialId": "1eeceaf5665738169e9c5df306e9cc6c",
    "platformCode": "admob",
    "platformName": "Admob",
    "impression": 1114050,
    "heat": 996,
    "days": 212,
    "firstSeen": 1767583131,
    "lastSeen": 1785813879,
    "regions": [
      "美国"
    ],
    "language": "未标注语言",
    "duration": 28,
    "video": "https://sp2cdn-idea-global.zingfront.com/sp_opera/ce2c0827f584157f2a45c85435577052.mp4",
    "createdAt": 1785463422,
    "searchFlag": 145459,
    "copy": "",
    "tags": {
      "营销卖点": [
        "自由定制",
        "解压治愈"
      ],
      "结尾引导": [
        "明确下载引导"
      ],
      "核心玩法": [
        "自由建造",
        "装饰布置"
      ],
      "开头钩子": [
        "熟悉场景/代入感"
      ],
      "色彩调性-主色系": [
        "冷色系"
      ],
      "美术风格": [
        "2D卡通"
      ],
      "视频主题": [
        "节日营销",
        "建造经营/模拟"
      ],
      "色彩调性-明暗度": [
        "明亮"
      ],
      "角色类型": [
        "游戏角色"
      ],
      "视频类型": [
        "游戏录屏"
      ],
      "色彩调性-整体饱和度": [
        "高饱和"
      ],
      "游戏元素": [
        "主题切换",
        "角色互动"
      ],
      "情绪触发点": [
        "可爱角色",
        "节日氛围"
      ],
      "视觉特效程度": [
        "强特效"
      ],
      "玩家动机": [
        "创造表达"
      ]
    }
  },
  {
    "gameId": "cookie-gdd",
    "gameName": "姜饼人王国（广大大）",
    "sourceName": "广大大",
    "rank": 12,
    "company": "Devsisters Corporation",
    "category": "策略 / 王国建设 / RPG",
    "theme": "奇幻童话 / 姜饼人世界",
    "adKey": "02b2f0648bf99141d038aead6ddf5b85",
    "materialId": "a331aa7b80b751bbd478d54717a7f47b",
    "platformCode": "admob",
    "platformName": "Admob",
    "impression": 1702742,
    "heat": 985,
    "days": 260,
    "firstSeen": 1761201411,
    "lastSeen": 1783578520,
    "regions": [
      "韩国"
    ],
    "language": "未标注语言",
    "duration": 25,
    "video": "https://sp2cdn-idea-global.zingfront.com/sp_opera/2014a0f86adb504dec4976c095f40514.mp4",
    "createdAt": 1758123527,
    "searchFlag": 145359,
    "copy": "",
    "tags": {
      "内容题材": [
        "卡通世界"
      ],
      "核心玩法": [
        "冒险探索",
        "模拟经营",
        "角色扮演",
        "解谜"
      ],
      "开头钩子": [
        "强冲突/矛盾开场"
      ],
      "游戏元素": [
        "关卡挑战",
        "建筑升级",
        "角色收集",
        "资源管理"
      ],
      "玩家动机": [
        "技巧挑战",
        "探索好奇",
        "创造表达"
      ],
      "美术风格": [
        "2D卡通"
      ],
      "视频类型": [
        "CG动画"
      ]
    }
  },
  {
    "gameId": "cookie-gdd",
    "gameName": "姜饼人王国（广大大）",
    "sourceName": "广大大",
    "rank": 13,
    "company": "Devsisters",
    "category": "策略 / 王国建设 / RPG",
    "theme": "奇幻童话 / 姜饼人世界",
    "adKey": "8b44ab263039b46d01ce47aad2f83fc0",
    "materialId": "ad92f9ee2da8c3af714fa2d162113461",
    "platformCode": "admob",
    "platformName": "Admob",
    "impression": 1499753,
    "heat": 949,
    "days": 210,
    "firstSeen": 1767418553,
    "lastSeen": 1785456009,
    "regions": [
      "新加坡",
      "智利",
      "瑞典",
      "荷兰",
      "巴西",
      "德国",
      "英国",
      "日本",
      "美国",
      "印度",
      "罗马尼亚",
      "意大利"
    ],
    "language": "英语",
    "duration": 27,
    "video": "https://sp2cdn-idea-global.zingfront.com/sp_opera/c7ea04a893a2c1956e928e44585cf52a.mp4",
    "createdAt": 1758834528,
    "searchFlag": 145359,
    "copy": "CookieRun: Kingdom",
    "tags": {
      "内容题材": [
        "冒险旅程"
      ],
      "核心玩法": [
        "团队战斗",
        "模拟经营",
        "角色扮演",
        "解谜"
      ],
      "游戏元素": [
        "战斗系统",
        "技能选择",
        "角色创建",
        "道具收集"
      ],
      "玩家动机": [
        "探索好奇",
        "社交归属",
        "创造表达"
      ],
      "美术风格": [
        "2D卡通"
      ],
      "视频类型": [
        "CG动画"
      ]
    }
  },
  {
    "gameId": "cookie-gdd",
    "gameName": "姜饼人王国（广大大）",
    "sourceName": "广大大",
    "rank": 14,
    "company": "Devsisters Corporation",
    "category": "策略 / 王国建设 / RPG",
    "theme": "奇幻童话 / 姜饼人世界",
    "adKey": "b97c73f6e99402a65617e9e9229b21b8",
    "materialId": "aa5afe7c7e5c73bc4ecb5deb219e7e94",
    "platformCode": "ironsource",
    "platformName": "ironSource",
    "impression": 774434,
    "heat": 855,
    "days": 183,
    "firstSeen": 1769497307,
    "lastSeen": 1785272736,
    "regions": [
      "美国",
      "印度尼西亚"
    ],
    "language": "未标注语言",
    "duration": 21,
    "video": "https://sp2cdn-idea-global.zingfront.com/sp_opera/64c6e66a4293425cf238f7b727bb5977.mp4",
    "createdAt": 1769497335,
    "searchFlag": 145458,
    "copy": "",
    "tags": {
      "内容题材": [
        "奇幻世界"
      ],
      "核心玩法": [
        "策略战斗",
        "角色养成"
      ],
      "开头钩子": [
        "视觉异常/违和感"
      ],
      "玩家动机": [
        "技巧挑战",
        "探索好奇"
      ]
    }
  },
  {
    "gameId": "cookie-gdd",
    "gameName": "姜饼人王国（广大大）",
    "sourceName": "广大大",
    "rank": 15,
    "company": "Devsisters",
    "category": "策略 / 王国建设 / RPG",
    "theme": "奇幻童话 / 姜饼人世界",
    "adKey": "7fae290cf7802d74a17d1df363a5a8e0",
    "materialId": "d4ddbace8d9ecf06043f9b36c2c5959c",
    "platformCode": "threads",
    "platformName": "Threads",
    "impression": 1168111,
    "heat": 746,
    "days": 136,
    "firstSeen": 1775545200,
    "lastSeen": 1787266293,
    "regions": [
      "葡萄牙",
      "科威特",
      "澳大利亚",
      "中国台湾",
      "匈牙利",
      "斯洛文尼亚",
      "安哥拉",
      "卡塔尔",
      "挪威",
      "巴基斯坦",
      "罗马尼亚",
      "新西兰",
      "乌克兰",
      "摩洛哥",
      "巴拉圭",
      "塞内加尔",
      "格鲁吉亚",
      "日本",
      "加纳",
      "LAO",
      "CMR",
      "阿尔及利亚",
      "中国香港",
      "黎巴嫩",
      "印度",
      "中国澳门",
      "坦桑尼亚",
      "意大利",
      "卢森堡",
      "泰国",
      "科特迪瓦",
      "哈萨克斯坦",
      "智利",
      "西班牙",
      "孟加拉国",
      "沙特阿拉伯",
      "肯尼亚",
      "秘鲁",
      "菲律宾",
      "ARM",
      "巴拿马",
      "法国",
      "波兰",
      "马来西亚",
      "丹麦",
      "土耳其",
      "瑞士",
      "伊拉克",
      "阿曼",
      "奥地利",
      "缅甸",
      "柬埔寨",
      "美国",
      "以色列",
      "墨西哥",
      "比利时",
      "阿联酋",
      "尼日利亚",
      "委内瑞拉",
      "埃及",
      "巴西",
      "芬兰",
      "南非",
      "巴林",
      "阿根廷",
      "埃塞俄比亚",
      "英国",
      "瑞典",
      "德国",
      "希腊",
      "爱尔兰",
      "荷兰",
      "哥伦比亚",
      "新加坡",
      "蒙古",
      "阿塞拜疆",
      "印度尼西亚",
      "加拿大",
      "尼泊尔"
    ],
    "language": "英语",
    "duration": 30,
    "video": "https://sp2cdn-idea-global.zingfront.com/sp_opera/47038cf4fd41e032ffcfa748dde820dd.mp4",
    "createdAt": 1776283972,
    "searchFlag": 145458,
    "copy": "Get Legendaries!",
    "tags": {
      "美术风格": [
        "2D卡通"
      ],
      "色彩调性-明暗度": [
        "明亮"
      ],
      "角色类型": [
        "游戏角色"
      ],
      "色彩调性-主色系": [
        "多彩/彩色"
      ],
      "玩家动机": [
        "收集拥有",
        "情绪宣泄"
      ],
      "游戏元素": [
        "战斗场景",
        "角色技能"
      ],
      "色彩调性-整体饱和度": [
        "高饱和"
      ],
      "主要场景": [
        "奇幻森林",
        "战斗场地"
      ],
      "营销卖点": [
        "高品质感"
      ],
      "视频主题": [
        "角色展示",
        "爽快战斗"
      ],
      "核心玩法": [
        "技能战斗",
        "角色收集"
      ],
      "情绪触发点": [
        "华丽特效",
        "失败重试"
      ],
      "结尾引导": [
        "明确下载引导"
      ],
      "开头钩子": [
        "剧情悬念"
      ]
    }
  },
  {
    "gameId": "cookie-gdd",
    "gameName": "姜饼人王国（广大大）",
    "sourceName": "广大大",
    "rank": 16,
    "company": "Devsisters",
    "category": "策略 / 王国建设 / RPG",
    "theme": "奇幻童话 / 姜饼人世界",
    "adKey": "564ded257872a0e512fd78faad8c2f16",
    "materialId": "ba1cf738171548a5f93027a823432b32",
    "platformCode": "messenger",
    "platformName": "Messenger",
    "impression": 1123559,
    "heat": 744,
    "days": 136,
    "firstSeen": 1775545200,
    "lastSeen": 1787266293,
    "regions": [
      "法国",
      "塞内加尔",
      "中国澳门",
      "罗马尼亚",
      "科特迪瓦",
      "蒙古",
      "阿尔及利亚",
      "挪威",
      "巴基斯坦",
      "瑞士",
      "缅甸",
      "巴林",
      "波兰",
      "中国香港",
      "尼日利亚",
      "坦桑尼亚",
      "新西兰",
      "卡塔尔",
      "委内瑞拉",
      "巴拿马",
      "丹麦",
      "摩洛哥",
      "印度",
      "澳大利亚",
      "哈萨克斯坦",
      "意大利",
      "乌克兰",
      "芬兰",
      "日本",
      "土耳其",
      "爱尔兰",
      "阿联酋",
      "柬埔寨",
      "CMR",
      "卢森堡",
      "沙特阿拉伯",
      "德国",
      "伊拉克",
      "阿根廷",
      "泰国",
      "孟加拉国",
      "智利",
      "科威特",
      "马来西亚",
      "LAO",
      "安哥拉",
      "中国台湾",
      "埃塞俄比亚",
      "加拿大",
      "印度尼西亚",
      "ARM",
      "菲律宾",
      "斯洛文尼亚",
      "巴拉圭",
      "荷兰",
      "阿塞拜疆",
      "秘鲁",
      "哥伦比亚",
      "葡萄牙",
      "南非",
      "墨西哥",
      "巴西",
      "匈牙利",
      "希腊",
      "比利时",
      "阿曼",
      "格鲁吉亚",
      "西班牙",
      "以色列",
      "埃及",
      "加纳",
      "肯尼亚",
      "黎巴嫩",
      "尼泊尔",
      "新加坡",
      "英国",
      "奥地利",
      "瑞典"
    ],
    "language": "英语",
    "duration": 30,
    "video": "https://sp2cdn-idea-global.zingfront.com/sp_opera/c3a4ee88291248ed0ebb72ca6aad0e51.mp4",
    "createdAt": 1778099039,
    "searchFlag": 145458,
    "copy": "Get Legendaries!",
    "tags": {
      "色彩调性-整体饱和度": [
        "高饱和"
      ],
      "色彩调性-主色系": [
        "多彩/彩色"
      ],
      "视觉特效程度": [
        "强特效"
      ],
      "美术风格": [
        "2D卡通"
      ],
      "色彩调性-明暗度": [
        "明亮"
      ],
      "角色类型": [
        "敌人/怪物",
        "游戏角色"
      ],
      "主要场景": [
        "奇幻森林",
        "战术战场",
        "烘焙厨房"
      ],
      "视频类型": [
        "CG动画"
      ],
      "营销卖点": [
        "高品质感"
      ],
      "结尾引导": [
        "明确下载引导"
      ],
      "核心玩法": [
        "技能战斗",
        "角色收集"
      ],
      "开头钩子": [
        "剧情悬念"
      ],
      "视频主题": [
        "角色展示",
        "玩法展示"
      ],
      "内容题材": [
        "奇幻童话"
      ],
      "游戏元素": [
        "战斗关卡"
      ]
    }
  },
  {
    "gameId": "cookie-gdd",
    "gameName": "姜饼人王国（广大大）",
    "sourceName": "广大大",
    "rank": 17,
    "company": "Devsisters Corporation",
    "category": "策略 / 王国建设 / RPG",
    "theme": "奇幻童话 / 姜饼人世界",
    "adKey": "cfccc819f0be6287cfee55c17b228e5f",
    "materialId": "c2aa80ac590cb69d7efbe55949244b14",
    "platformCode": "admob",
    "platformName": "Admob",
    "impression": 712979,
    "heat": 701,
    "days": 90,
    "firstSeen": 1778144664,
    "lastSeen": 1785862002,
    "regions": [
      "美国"
    ],
    "language": "未标注语言",
    "duration": 0,
    "video": "https://sp2cdn-idea-global.zingfront.com/sp_opera/0750e34232c6353f3d8a807ec3530479.mp4",
    "createdAt": 1781401859,
    "searchFlag": 145458,
    "copy": "",
    "tags": {
      "营销卖点": [
        "高品质感"
      ],
      "结尾引导": [
        "明确下载引导"
      ],
      "核心玩法": [
        "团队战斗",
        "技能释放"
      ],
      "开头钩子": [
        "强冲突/矛盾开场"
      ],
      "色彩调性-主色系": [
        "多彩/彩色"
      ],
      "美术风格": [
        "2D卡通"
      ],
      "视频主题": [
        "爽快战斗",
        "角色展示"
      ],
      "色彩调性-明暗度": [
        "明亮"
      ],
      "角色类型": [
        "敌人/怪物",
        "游戏角色"
      ],
      "视频类型": [
        "CG动画"
      ],
      "色彩调性-整体饱和度": [
        "高饱和"
      ],
      "游戏元素": [
        "关卡挑战",
        "团队协作",
        "技能特效"
      ],
      "情绪触发点": [
        "快速战斗节奏"
      ],
      "视觉特效程度": [
        "强特效"
      ],
      "玩家动机": [
        "情绪宣泄"
      ]
    }
  },
  {
    "gameId": "cookie-gdd",
    "gameName": "姜饼人王国（广大大）",
    "sourceName": "广大大",
    "rank": 18,
    "company": "Devsisters",
    "category": "策略 / 王国建设 / RPG",
    "theme": "奇幻童话 / 姜饼人世界",
    "adKey": "1659e386903ba889e70feb20a918e8d9",
    "materialId": "a198cebb26706f997cccab22b0be9ddb",
    "platformCode": "instagram",
    "platformName": "Instagram",
    "impression": 1212230,
    "heat": 673,
    "days": 119,
    "firstSeen": 1772784000,
    "lastSeen": 1782975600,
    "regions": [
      "罗马尼亚",
      "科威特",
      "印度",
      "比利时",
      "摩洛哥",
      "巴拉圭",
      "尼日利亚",
      "芬兰",
      "阿根廷",
      "阿曼",
      "安哥拉",
      "LAO",
      "伊拉克",
      "以色列",
      "意大利",
      "卡塔尔",
      "匈牙利",
      "法国",
      "格鲁吉亚",
      "瑞典",
      "哥伦比亚",
      "蒙古",
      "中国香港",
      "卢森堡",
      "秘鲁",
      "加纳",
      "英国",
      "爱尔兰",
      "葡萄牙",
      "CMR",
      "缅甸",
      "柬埔寨",
      "尼泊尔",
      "新加坡",
      "塞内加尔",
      "埃塞俄比亚",
      "埃及",
      "泰国",
      "奥地利",
      "美国",
      "马来西亚",
      "土耳其",
      "加拿大",
      "瑞士",
      "沙特阿拉伯",
      "荷兰",
      "斯洛文尼亚",
      "巴拿马",
      "中国台湾",
      "南非",
      "西班牙",
      "坦桑尼亚",
      "肯尼亚",
      "ARM",
      "科特迪瓦",
      "波兰",
      "委内瑞拉",
      "阿塞拜疆",
      "乌克兰",
      "智利",
      "孟加拉国",
      "中国澳门",
      "丹麦",
      "德国",
      "挪威",
      "新西兰",
      "黎巴嫩",
      "希腊",
      "阿尔及利亚",
      "巴基斯坦",
      "哈萨克斯坦",
      "澳大利亚",
      "巴林"
    ],
    "language": "英语",
    "duration": 31,
    "video": "https://sp2cdn-idea-global.zingfront.com/sp_opera/80ef8906d4fea03dc60683239dae9d63.mp4",
    "createdAt": 1773239410,
    "searchFlag": 145458,
    "copy": "Explore Cookie Run: Kingdom",
    "tags": {
      "色彩调性-整体饱和度": [
        "高饱和"
      ],
      "色彩调性-主色系": [
        "多彩/彩色"
      ],
      "视觉特效程度": [
        "强特效"
      ],
      "美术风格": [
        "2D卡通"
      ],
      "色彩调性-明暗度": [
        "明亮"
      ],
      "角色类型": [
        "游戏角色"
      ],
      "视频类型": [
        "游戏录屏"
      ],
      "营销卖点": [
        "高品质感"
      ],
      "核心玩法": [
        "团队战斗"
      ],
      "视频主题": [
        "角色展示",
        "爽快战斗"
      ],
      "游戏元素": [
        "技能释放",
        "角色选择"
      ],
      "情绪触发点": [
        "华丽技能特效",
        "胜利庆祝画面"
      ],
      "玩家动机": [
        "掌控力量",
        "收集拥有"
      ]
    }
  },
  {
    "gameId": "cookie-gdd",
    "gameName": "姜饼人王国（广大大）",
    "sourceName": "广大大",
    "rank": 19,
    "company": "Devsisters Corporation",
    "category": "策略 / 王国建设 / RPG",
    "theme": "奇幻童话 / 姜饼人世界",
    "adKey": "507d9ff3bc866f7f0fff15dcaf0df1e9",
    "materialId": "a3afba5e2eae8d9775766b71f5ae0d35",
    "platformCode": "admob",
    "platformName": "Admob",
    "impression": 453900,
    "heat": 646,
    "days": 90,
    "firstSeen": 1778144664,
    "lastSeen": 1785862002,
    "regions": [
      "中国香港",
      "加拿大",
      "匈牙利",
      "挪威",
      "阿曼",
      "柬埔寨",
      "ARM",
      "丹麦",
      "伊拉克",
      "孟加拉国",
      "墨西哥",
      "奥地利",
      "波兰",
      "委内瑞拉",
      "瑞典",
      "阿塞拜疆",
      "新西兰",
      "加纳",
      "利比亚",
      "格鲁吉亚",
      "沙特阿拉伯",
      "印度尼西亚",
      "希腊",
      "罗马尼亚",
      "缅甸",
      "印度",
      "巴拉圭",
      "科特迪瓦",
      "尼泊尔",
      "新加坡",
      "英国",
      "葡萄牙",
      "意大利",
      "卢森堡",
      "爱尔兰",
      "秘鲁",
      "智利",
      "LAO",
      "荷兰",
      "卡塔尔",
      "澳大利亚",
      "马来西亚",
      "中国台湾",
      "阿联酋",
      "科威特",
      "瑞士",
      "哥伦比亚",
      "摩洛哥",
      "哈萨克斯坦",
      "比利时",
      "黎巴嫩",
      "巴拿马",
      "尼日利亚",
      "乌克兰",
      "德国",
      "蒙古",
      "以色列",
      "阿根廷",
      "巴基斯坦",
      "斯洛文尼亚",
      "芬兰",
      "巴林",
      "巴西",
      "塞内加尔",
      "法国",
      "西班牙",
      "菲律宾",
      "埃及",
      "阿尔及利亚",
      "土耳其",
      "肯尼亚"
    ],
    "language": "未标注语言",
    "duration": 30,
    "video": "https://sp2cdn-idea-global.zingfront.com/sp_opera/2beeef4324574afc3902352822219f64.mp4",
    "createdAt": 1785462825,
    "searchFlag": 145459,
    "copy": "",
    "tags": {
      "营销卖点": [
        "高品质感"
      ],
      "结尾引导": [
        "明确下载引导"
      ],
      "核心玩法": [
        "团队战斗",
        "技能释放"
      ],
      "开头钩子": [
        "强冲突/矛盾开场"
      ],
      "色彩调性-主色系": [
        "多彩/彩色"
      ],
      "美术风格": [
        "2D卡通"
      ],
      "视频主题": [
        "爽快战斗",
        "角色展示"
      ],
      "色彩调性-明暗度": [
        "明亮"
      ],
      "角色类型": [
        "游戏角色"
      ],
      "视频类型": [
        "CG动画"
      ],
      "色彩调性-整体饱和度": [
        "高饱和"
      ],
      "游戏元素": [
        "团队合作",
        "技能释放"
      ],
      "情绪触发点": [
        "危机倒计时感",
        "战斗激烈特效"
      ],
      "视觉特效程度": [
        "强特效"
      ],
      "玩家动机": [
        "情绪宣泄",
        "掌控力量"
      ]
    }
  },
  {
    "gameId": "cookie-gdd",
    "gameName": "姜饼人王国（广大大）",
    "sourceName": "广大大",
    "rank": 20,
    "company": "Devsisters Corporation",
    "category": "策略 / 王国建设 / RPG",
    "theme": "奇幻童话 / 姜饼人世界",
    "adKey": "8348f9111a8a5bc1d84a7de3d66f1651",
    "materialId": "4fabc9c312cff700956a35900d902942",
    "platformCode": "admob",
    "platformName": "Admob",
    "impression": 714114,
    "heat": 645,
    "days": 84,
    "firstSeen": 1778144664,
    "lastSeen": 1785287461,
    "regions": [
      "智利",
      "挪威",
      "埃及",
      "中国台湾",
      "荷兰",
      "阿塞拜疆",
      "爱尔兰",
      "澳大利亚",
      "新加坡",
      "土耳其",
      "法国",
      "瑞典",
      "奥地利",
      "印度",
      "沙特阿拉伯",
      "巴林",
      "希腊",
      "罗马尼亚",
      "阿曼",
      "哥伦比亚",
      "葡萄牙",
      "中国香港",
      "黎巴嫩",
      "菲律宾",
      "波兰",
      "瑞士",
      "巴拿马",
      "格鲁吉亚",
      "墨西哥",
      "阿联酋",
      "哈萨克斯坦",
      "科威特",
      "印度尼西亚",
      "委内瑞拉",
      "摩洛哥",
      "德国",
      "加拿大",
      "LAO",
      "马来西亚",
      "秘鲁",
      "巴西",
      "利比亚",
      "巴基斯坦",
      "阿根廷",
      "匈牙利",
      "意大利",
      "卢森堡",
      "斯洛文尼亚",
      "卡塔尔",
      "芬兰",
      "柬埔寨",
      "巴拉圭",
      "阿尔及利亚",
      "新西兰",
      "英国",
      "西班牙",
      "比利时",
      "丹麦",
      "伊拉克",
      "以色列",
      "乌克兰"
    ],
    "language": "英语",
    "duration": 59,
    "video": "https://sp2cdn-idea-global.zingfront.com/sp_opera/16d5c500b3ab09dc5355827daa048ac3.mp4",
    "createdAt": 1778779271,
    "searchFlag": 145458,
    "copy": "Build your Cookie Kingdom and team! An epic town building & adventure RPG game",
    "tags": {
      "色彩调性-整体饱和度": [
        "高饱和"
      ],
      "色彩调性-主色系": [
        "多彩/彩色"
      ],
      "视觉特效程度": [
        "强特效"
      ],
      "美术风格": [
        "风格化3D"
      ],
      "色彩调性-明暗度": [
        "明亮"
      ],
      "角色类型": [
        "游戏角色"
      ],
      "主要场景": [
        "华丽房间",
        "黑暗空间"
      ],
      "视频类型": [
        "CG动画"
      ],
      "营销卖点": [
        "高品质感"
      ],
      "结尾引导": [
        "明确下载引导"
      ],
      "核心玩法": [
        "卡牌对战",
        "技能释放"
      ],
      "开头钩子": [
        "视觉异常/违和感"
      ],
      "视频主题": [
        "角色展示",
        "剧情叙事"
      ],
      "内容题材": [
        "蒸汽朋克"
      ],
      "游戏元素": [
        "卡牌",
        "角色技能"
      ],
      "情绪触发点": [
        "华丽特效"
      ]
    }
  },
  {
    "gameId": "heartopia-gdd",
    "gameName": "心动小镇（广大大）",
    "sourceName": "广大大",
    "rank": 1,
    "company": "XD Entertainment Co., Ltd.",
    "category": "生活模拟 / 模拟经营",
    "theme": "现代田园 / 治愈生活",
    "adKey": "f83b121a3661063537b93a04f25262ca",
    "materialId": "067d5185d7bffb024c1f4e7a3322a2db",
    "platformCode": "youtube",
    "platformName": "YouTube",
    "impression": 26398172,
    "heat": 1000,
    "days": 185,
    "firstSeen": 1767807883,
    "lastSeen": 1783683443,
    "regions": [
      "印度尼西亚"
    ],
    "language": "英语",
    "duration": 76,
    "video": "https://sp2cdn-idea-global.zingfront.com/sp_opera/4b466e709915454e3afff7e408e5b03d.mp4",
    "createdAt": 1767808120,
    "searchFlag": 145458,
    "copy": "Dreamy Life in a Cozy Town",
    "tags": {
      "内容题材": [
        "现代田园"
      ],
      "核心玩法": [
        "休闲种植",
        "模拟装修"
      ],
      "开头钩子": [
        "无独立hook"
      ],
      "游戏元素": [
        "作物收割",
        "宠物收集",
        "家具布置",
        "角色换装"
      ],
      "玩家动机": [
        "创造表达",
        "放松逃离"
      ],
      "美术风格": [
        "风格化3D"
      ],
      "视频类型": [
        "游戏录屏"
      ],
      "色彩调性-整体饱和度": [
        "高饱和"
      ],
      "色彩调性-主色系": [
        "暖色系"
      ],
      "视觉特效程度": [
        "中等特效"
      ],
      "色彩调性-明暗度": [
        "明亮"
      ],
      "角色类型": [
        "游戏角色"
      ],
      "主要场景": [
        "卧室",
        "商店",
        "庭院"
      ]
    }
  },
  {
    "gameId": "heartopia-gdd",
    "gameName": "心动小镇（广大大）",
    "sourceName": "广大大",
    "rank": 2,
    "company": "XD Entertainment Co., Ltd.",
    "category": "生活模拟 / 模拟经营",
    "theme": "现代田园 / 治愈生活",
    "adKey": "f5d248a6f5cec3943c8dd3086531853c",
    "materialId": "51b338b2315624dd63fa43e078467ff1",
    "platformCode": "youtube",
    "platformName": "YouTube",
    "impression": 9876051,
    "heat": 1000,
    "days": 185,
    "firstSeen": 1767801600,
    "lastSeen": 1783683443,
    "regions": [
      "SGP"
    ],
    "language": "英语",
    "duration": 57,
    "video": "https://sp2cdn-idea-global.zingfront.com/sp_opera/03a8928648d891a58df4b6a4c7b0ea23.mp4",
    "createdAt": 1767811198,
    "searchFlag": 145458,
    "copy": "Dreamy Life in a Cozy Town",
    "tags": {
      "内容题材": [
        "现代乡村"
      ],
      "核心玩法": [
        "自由建造",
        "角色定制"
      ],
      "开头钩子": [
        "无独立hook"
      ],
      "游戏元素": [
        "房屋建造",
        "角色捏脸",
        "角色换装",
        "载具"
      ],
      "玩家动机": [
        "创造表达",
        "放松逃离"
      ],
      "美术风格": [
        "风格化3D"
      ],
      "视频类型": [
        "游戏录屏"
      ],
      "色彩调性-整体饱和度": [
        "高饱和"
      ],
      "色彩调性-主色系": [
        "暖色系"
      ],
      "视觉特效程度": [
        "中等特效"
      ],
      "色彩调性-明暗度": [
        "明亮"
      ],
      "角色类型": [
        "游戏角色"
      ],
      "主要场景": [
        "乡村街道",
        "家庭客厅",
        "角色创建界面"
      ]
    }
  },
  {
    "gameId": "heartopia-gdd",
    "gameName": "心动小镇（广大大）",
    "sourceName": "广大大",
    "rank": 3,
    "company": "XD Entertainment Co., Ltd.",
    "category": "生活模拟 / 模拟经营",
    "theme": "现代田园 / 治愈生活",
    "adKey": "470aef669fcda9f9bbd24d157210484d",
    "materialId": "cc5edc35853738b0da5041b61ef8207c",
    "platformCode": "youtube",
    "platformName": "YouTube",
    "impression": 2942999,
    "heat": 1000,
    "days": 161,
    "firstSeen": 1769762008,
    "lastSeen": 1783569576,
    "regions": [
      "日本"
    ],
    "language": "未标注语言",
    "duration": 58,
    "video": "https://sp2cdn-idea-global.zingfront.com/sp_opera/250abd24ffc0dbba1d761b513b43ad35.mp4",
    "createdAt": 1782407787,
    "searchFlag": 145458,
    "copy": "",
    "tags": {
      "美术风格": [
        "风格化3D"
      ],
      "色彩调性-明暗度": [
        "明亮"
      ],
      "角色类型": [
        "游戏角色"
      ],
      "内容题材": [
        "现代乡村"
      ],
      "色彩调性-主色系": [
        "暖色系"
      ],
      "玩家动机": [
        "创造表达",
        "放松逃离"
      ],
      "游戏元素": [
        "多人联机",
        "房屋建造系统",
        "角色自定义界面"
      ],
      "色彩调性-整体饱和度": [
        "高饱和"
      ],
      "主要场景": [
        "乡村街道",
        "公园",
        "农场",
        "家庭客厅",
        "海滩",
        "角色自定义界面"
      ],
      "营销卖点": [
        "自由定制",
        "解压治愈"
      ],
      "视频主题": [
        "建造经营/模拟"
      ]
    }
  },
  {
    "gameId": "heartopia-gdd",
    "gameName": "心动小镇（广大大）",
    "sourceName": "广大大",
    "rank": 4,
    "company": "XD Entertainment Co., Ltd.",
    "category": "生活模拟 / 模拟经营",
    "theme": "现代田园 / 治愈生活",
    "adKey": "5856be93eba3cd946e4602caadd3cc3c",
    "materialId": "21c68f8994da47ae2153d1ea2a90467d",
    "platformCode": "youtube",
    "platformName": "YouTube",
    "impression": 2675123,
    "heat": 1000,
    "days": 222,
    "firstSeen": 1767801600,
    "lastSeen": 1786915941,
    "regions": [
      "韩国"
    ],
    "language": "未标注语言",
    "duration": 43,
    "video": "https://sp2cdn-idea-global.zingfront.com/sp_opera/e2f6d4e4436f80d628af503d65accb86.mp4",
    "createdAt": 1772183948,
    "searchFlag": 145458,
    "copy": "",
    "tags": {
      "内容题材": [
        "现代田园"
      ],
      "核心玩法": [
        "农场模拟",
        "角色定制"
      ],
      "开头钩子": [
        "无独立hook"
      ],
      "游戏元素": [
        "农场建设",
        "服装搭配",
        "角色外观自定义"
      ],
      "玩家动机": [
        "创造表达",
        "放松逃离"
      ],
      "视频类型": [
        "游戏录屏"
      ],
      "色彩调性-整体饱和度": [
        "高饱和"
      ],
      "色彩调性-主色系": [
        "暖色系"
      ],
      "视觉特效程度": [
        "中等特效"
      ],
      "美术风格": [
        "风格化3D"
      ],
      "色彩调性-明暗度": [
        "明亮"
      ],
      "角色类型": [
        "游戏角色"
      ],
      "主要场景": [
        "农场",
        "城镇街道",
        "海滩",
        "自定义界面"
      ]
    }
  },
  {
    "gameId": "heartopia-gdd",
    "gameName": "心动小镇（广大大）",
    "sourceName": "广大大",
    "rank": 5,
    "company": "XD Entertainment Co., Ltd.",
    "category": "生活模拟 / 模拟经营",
    "theme": "现代田园 / 治愈生活",
    "adKey": "6411155a9a5f9d35337190c80268e5e4",
    "materialId": "1820b888bcb8f54a0d3dffbcb9647dec",
    "platformCode": "youtube",
    "platformName": "YouTube",
    "impression": 2439233,
    "heat": 1000,
    "days": 65,
    "firstSeen": 1782308011,
    "lastSeen": 1787854970,
    "regions": [
      "日本"
    ],
    "language": "日语",
    "duration": 48,
    "video": "https://sp2cdn-idea-global.zingfront.com/sp_opera/b6b26b8e842f4a42c8d6b8e3cc7fde80.mp4",
    "createdAt": 1782308619,
    "searchFlag": 145458,
    "copy": "心安らぐ生活シミュレーション",
    "tags": {
      "营销卖点": [
        "自由定制",
        "解压治愈"
      ],
      "结尾引导": [
        "明确下载引导"
      ],
      "核心玩法": [
        "生活模拟",
        "角色定制"
      ],
      "开头钩子": [
        "直接卖点抛出"
      ],
      "色彩调性-主色系": [
        "暖色系"
      ],
      "美术风格": [
        "风格化3D"
      ],
      "视频主题": [
        "角色展示",
        "休闲解压"
      ],
      "色彩调性-明暗度": [
        "明亮"
      ],
      "角色类型": [
        "游戏角色"
      ],
      "视频类型": [
        "游戏录屏"
      ],
      "色彩调性-整体饱和度": [
        "高饱和"
      ],
      "游戏元素": [
        "宠物互动",
        "家园互动",
        "角色定制",
        "载具"
      ],
      "视觉特效程度": [
        "强特效"
      ],
      "玩家动机": [
        "创造表达"
      ]
    }
  },
  {
    "gameId": "heartopia-gdd",
    "gameName": "心动小镇（广大大）",
    "sourceName": "广大大",
    "rank": 6,
    "company": "XD Entertainment Co., Ltd.",
    "category": "生活模拟 / 模拟经营",
    "theme": "现代田园 / 治愈生活",
    "adKey": "79e6906a6db3c458c21124438c41bf20",
    "materialId": "195c934c3a57909a5d63c435c836c187",
    "platformCode": "youtube",
    "platformName": "YouTube",
    "impression": 1542658,
    "heat": 1000,
    "days": 64,
    "firstSeen": 1782307740,
    "lastSeen": 1787770771,
    "regions": [
      "日本"
    ],
    "language": "日语",
    "duration": 41,
    "video": "https://sp2cdn-idea-global.zingfront.com/sp_opera/37ba03c731e3a4632dfa5c39d8537d95.mp4",
    "createdAt": 1782307967,
    "searchFlag": 145458,
    "copy": "「なりたい私」に、なれる場所",
    "tags": {
      "营销卖点": [
        "解压治愈"
      ],
      "结尾引导": [
        "明确下载引导"
      ],
      "核心玩法": [
        "休闲互动",
        "生活模拟"
      ],
      "开头钩子": [
        "熟悉场景/代入感"
      ],
      "色彩调性-主色系": [
        "暖色系"
      ],
      "美术风格": [
        "风格化3D"
      ],
      "视频主题": [
        "休闲解压",
        "角色展示"
      ],
      "色彩调性-明暗度": [
        "明亮"
      ],
      "角色类型": [
        "游戏角色"
      ],
      "视频类型": [
        "游戏录屏"
      ],
      "色彩调性-整体饱和度": [
        "高饱和"
      ],
      "游戏元素": [
        "家具互动",
        "烹饪系统",
        "角色换装"
      ],
      "视觉特效程度": [
        "弱特效/几乎无"
      ],
      "玩家动机": [
        "放松逃离"
      ],
      "主要场景": [
        "卧室",
        "厨房"
      ]
    }
  },
  {
    "gameId": "heartopia-gdd",
    "gameName": "心动小镇（广大大）",
    "sourceName": "广大大",
    "rank": 7,
    "company": "XD Entertainment Co., Ltd.",
    "category": "生活模拟 / 模拟经营",
    "theme": "现代田园 / 治愈生活",
    "adKey": "0ea2b16c6a65122ca933317b06afa8eb",
    "materialId": "3d0b59c412ea10c788f94e0640e56db2",
    "platformCode": "youtube",
    "platformName": "YouTube",
    "impression": 285440,
    "heat": 1000,
    "days": 160,
    "firstSeen": 1769762008,
    "lastSeen": 1783517731,
    "regions": [
      "日本"
    ],
    "language": "未标注语言",
    "duration": 44,
    "video": "https://sp2cdn-idea-global.zingfront.com/sp_opera/1636419c9216d48ada5d2e349b18128a.mp4",
    "createdAt": 1782407305,
    "searchFlag": 145458,
    "copy": "",
    "tags": {
      "营销卖点": [
        "解压治愈"
      ],
      "结尾引导": [
        "明确下载引导"
      ],
      "核心玩法": [
        "家具布置",
        "生活模拟"
      ],
      "开头钩子": [
        "熟悉场景/代入感"
      ],
      "色彩调性-主色系": [
        "暖色系"
      ],
      "美术风格": [
        "风格化3D"
      ],
      "视频主题": [
        "休闲解压",
        "建造经营/模拟"
      ],
      "色彩调性-明暗度": [
        "明亮"
      ],
      "角色类型": [
        "游戏角色"
      ],
      "视频类型": [
        "游戏录屏"
      ],
      "色彩调性-整体饱和度": [
        "高饱和"
      ],
      "内容题材": [
        "现代都市"
      ],
      "游戏元素": [
        "互动动作",
        "家具布置",
        "金币数值"
      ],
      "情绪触发点": [
        "可爱角色"
      ],
      "视觉特效程度": [
        "强特效"
      ],
      "玩家动机": [
        "放松逃离"
      ]
    }
  },
  {
    "gameId": "heartopia-gdd",
    "gameName": "心动小镇（广大大）",
    "sourceName": "广大大",
    "rank": 8,
    "company": "XD Entertainment Co., Ltd.",
    "category": "生活模拟 / 模拟经营",
    "theme": "现代田园 / 治愈生活",
    "adKey": "c988dbdbb86af79c36b5ffcf635fbbe4",
    "materialId": "5984e89d9df25da1ae47e165c877d895",
    "platformCode": "youtube",
    "platformName": "YouTube",
    "impression": 2821909,
    "heat": 999,
    "days": 247,
    "firstSeen": 1766695358,
    "lastSeen": 1787942229,
    "regions": [
      "日本"
    ],
    "language": "未标注语言",
    "duration": 188,
    "video": "https://sp2cdn-idea-global.zingfront.com/sp_opera/8ea216c1ec78e083d285cddfdce08464.mp4",
    "createdAt": 1766695502,
    "searchFlag": 145359,
    "copy": "",
    "tags": {
      "内容题材": [
        "都市现实"
      ],
      "核心玩法": [
        "宠物互动",
        "生活模拟"
      ],
      "开头钩子": [
        "熟悉场景/代入感"
      ],
      "游戏元素": [
        "宠物养成",
        "时间系统"
      ],
      "玩家动机": [
        "放松逃离",
        "收集拥有"
      ],
      "美术风格": [
        "风格化3D"
      ],
      "视频类型": [
        "游戏录屏"
      ],
      "色彩调性-整体饱和度": [
        "高饱和"
      ],
      "色彩调性-主色系": [
        "暖色系"
      ],
      "视觉特效程度": [
        "中等特效"
      ],
      "色彩调性-明暗度": [
        "中等"
      ],
      "角色类型": [
        "游戏角色"
      ],
      "主要场景": [
        "卧室",
        "厨房",
        "宠物店",
        "家庭客厅",
        "庭院"
      ]
    }
  },
  {
    "gameId": "heartopia-gdd",
    "gameName": "心动小镇（广大大）",
    "sourceName": "广大大",
    "rank": 9,
    "company": "XD Entertainment Co., Ltd.",
    "category": "生活模拟 / 模拟经营",
    "theme": "现代田园 / 治愈生活",
    "adKey": "748cfda87b964f591c4c32bf3cc30d57",
    "materialId": "980af751378d4929ed656e58df3c1e17",
    "platformCode": "youtube",
    "platformName": "YouTube",
    "impression": 2522364,
    "heat": 999,
    "days": 229,
    "firstSeen": 1767811401,
    "lastSeen": 1787485782,
    "regions": [
      "日本"
    ],
    "language": "未标注语言",
    "duration": 31,
    "video": "https://sp2cdn-idea-global.zingfront.com/sp_opera/f95385ee7de49fc30abb378227bc1617.mp4",
    "createdAt": 1767855624,
    "searchFlag": 145458,
    "copy": "",
    "tags": {
      "内容题材": [
        "现代田园"
      ],
      "核心玩法": [
        "双人协作",
        "生活模拟"
      ],
      "开头钩子": [
        "无独立hook"
      ],
      "游戏元素": [
        "双人模式",
        "生活技能"
      ],
      "玩家动机": [
        "放松逃离",
        "社交归属"
      ],
      "美术风格": [
        "风格化3D"
      ],
      "视频类型": [
        "游戏录屏"
      ],
      "色彩调性-整体饱和度": [
        "高饱和"
      ],
      "色彩调性-主色系": [
        "暖色系"
      ],
      "视觉特效程度": [
        "强特效"
      ],
      "色彩调性-明暗度": [
        "明亮"
      ],
      "角色类型": [
        "游戏角色"
      ],
      "主要场景": [
        "乡村道路",
        "厨房",
        "池塘",
        "菜园",
        "雪景小镇"
      ]
    }
  },
  {
    "gameId": "heartopia-gdd",
    "gameName": "心动小镇（广大大）",
    "sourceName": "广大大",
    "rank": 10,
    "company": "XD Entertainment Co., Ltd.",
    "category": "生活模拟 / 模拟经营",
    "theme": "现代田园 / 治愈生活",
    "adKey": "23eeec3aa7cdb89ac56fa1d4d33440f4",
    "materialId": "bff67622cd1edfc822ed902691dde698",
    "platformCode": "youtube",
    "platformName": "YouTube",
    "impression": 2517248,
    "heat": 999,
    "days": 228,
    "firstSeen": 1767835915,
    "lastSeen": 1787464652,
    "regions": [
      "日本"
    ],
    "language": "未标注语言",
    "duration": 40,
    "video": "https://sp2cdn-idea-global.zingfront.com/sp_opera/b2471a804d20104e86356d223df14f77.mp4",
    "createdAt": 1768651826,
    "searchFlag": 145458,
    "copy": "",
    "tags": {
      "内容题材": [
        "都市现实"
      ],
      "核心玩法": [
        "宠物互动",
        "生活模拟"
      ],
      "开头钩子": [
        "熟悉场景/代入感"
      ],
      "游戏元素": [
        "宠物互动",
        "家居布置",
        "每日任务"
      ],
      "玩家动机": [
        "放松逃离"
      ],
      "美术风格": [
        "风格化3D"
      ],
      "视频类型": [
        "游戏录屏"
      ],
      "色彩调性-整体饱和度": [
        "高饱和"
      ],
      "色彩调性-主色系": [
        "暖色系"
      ],
      "视觉特效程度": [
        "中等特效"
      ],
      "色彩调性-明暗度": [
        "中等"
      ],
      "角色类型": [
        "游戏角色"
      ],
      "主要场景": [
        "家庭客厅",
        "浴室",
        "游戏宣传场景",
        "街道"
      ],
      "营销卖点": [
        "解压治愈"
      ]
    }
  },
  {
    "gameId": "heartopia-gdd",
    "gameName": "心动小镇（广大大）",
    "sourceName": "广大大",
    "rank": 11,
    "company": "XD Entertainment Co., Ltd.",
    "category": "生活模拟 / 模拟经营",
    "theme": "现代田园 / 治愈生活",
    "adKey": "84747fd2d7dd4d5cdc55a5a998f7293a",
    "materialId": "f933f00d85cf8376d86d44ac3e1f16be",
    "platformCode": "youtube",
    "platformName": "YouTube",
    "impression": 2431908,
    "heat": 999,
    "days": 223,
    "firstSeen": 1767811401,
    "lastSeen": 1786963319,
    "regions": [
      "日本"
    ],
    "language": "未标注语言",
    "duration": 31,
    "video": "https://sp2cdn-idea-global.zingfront.com/sp_opera/57760c8108262eac19d2aa954a8b50a8.mp4",
    "createdAt": 1768651910,
    "searchFlag": 145458,
    "copy": "",
    "tags": {
      "内容题材": [
        "田园乡村"
      ],
      "核心玩法": [
        "双人协作",
        "生活模拟"
      ],
      "开头钩子": [
        "无独立hook"
      ],
      "游戏元素": [
        "双人模式",
        "收益数值",
        "生活技能"
      ],
      "玩家动机": [
        "社交归属",
        "放松逃离"
      ],
      "美术风格": [
        "风格化3D"
      ],
      "视频类型": [
        "游戏录屏"
      ],
      "色彩调性-整体饱和度": [
        "高饱和"
      ],
      "色彩调性-主色系": [
        "暖色系"
      ],
      "视觉特效程度": [
        "强特效"
      ],
      "色彩调性-明暗度": [
        "明亮"
      ],
      "角色类型": [
        "游戏角色"
      ],
      "主要场景": [
        "乡村道路",
        "农田",
        "厨房",
        "池塘"
      ]
    }
  },
  {
    "gameId": "heartopia-gdd",
    "gameName": "心动小镇（广大大）",
    "sourceName": "广大大",
    "rank": 12,
    "company": "XD Entertainment Co., Ltd.",
    "category": "生活模拟 / 模拟经营",
    "theme": "现代田园 / 治愈生活",
    "adKey": "a3e188c4561947bf9ea6a37b594e87cd",
    "materialId": "bf3fcb563fb3783ffa998f5be7d82833",
    "platformCode": "youtube",
    "platformName": "YouTube",
    "impression": 2369197,
    "heat": 998,
    "days": 218,
    "firstSeen": 1768203446,
    "lastSeen": 1786963202,
    "regions": [
      "日本"
    ],
    "language": "未标注语言",
    "duration": 87,
    "video": "https://sp2cdn-idea-global.zingfront.com/sp_opera/98030838c918217fe465a03541eccff5.mp4",
    "createdAt": 1768669717,
    "searchFlag": 145458,
    "copy": "",
    "tags": {
      "内容题材": [
        "幻想世界"
      ],
      "核心玩法": [
        "家园建造",
        "角色定制"
      ],
      "游戏元素": [
        "宠物互动",
        "家具摆放",
        "房屋建造",
        "装扮系统",
        "角色创建"
      ],
      "玩家动机": [
        "放松逃离",
        "创造表达"
      ],
      "美术风格": [
        "风格化3D"
      ],
      "视频类型": [
        "游戏录屏"
      ],
      "色彩调性-整体饱和度": [
        "高饱和"
      ],
      "色彩调性-主色系": [
        "暖色系"
      ],
      "视觉特效程度": [
        "强特效"
      ],
      "色彩调性-明暗度": [
        "明亮"
      ],
      "角色类型": [
        "游戏角色"
      ],
      "主要场景": [
        "卧室",
        "室内厨房",
        "家具店"
      ]
    }
  },
  {
    "gameId": "heartopia-gdd",
    "gameName": "心动小镇（广大大）",
    "sourceName": "广大大",
    "rank": 13,
    "company": "XD Entertainment Co., Ltd.",
    "category": "生活模拟 / 模拟经营",
    "theme": "现代田园 / 治愈生活",
    "adKey": "103fba249ce8603c356cb8be6b5f51f0",
    "materialId": "b3dedaa914853c7985a6098578b3cf64",
    "platformCode": "youtube",
    "platformName": "YouTube",
    "impression": 1274566,
    "heat": 998,
    "days": 232,
    "firstSeen": 1767836041,
    "lastSeen": 1787789967,
    "regions": [
      "日本"
    ],
    "language": "未标注语言",
    "duration": 64,
    "video": "https://sp2cdn-idea-global.zingfront.com/sp_opera/d9eed2a97bda00fa4dcd40dd6e3300cd.mp4",
    "createdAt": 1786212961,
    "searchFlag": 145459,
    "copy": "",
    "tags": {
      "美术风格": [
        "风格化3D"
      ],
      "色彩调性-明暗度": [
        "明亮"
      ],
      "角色类型": [
        "真人",
        "游戏角色"
      ],
      "色彩调性-主色系": [
        "暖色系"
      ],
      "玩家动机": [
        "技巧挑战",
        "放松逃离"
      ],
      "游戏元素": [
        "多视角切换",
        "家具布置",
        "能量条"
      ],
      "色彩调性-整体饱和度": [
        "高饱和"
      ],
      "主要场景": [
        "室内厨房",
        "户外草地",
        "日式街道"
      ],
      "营销卖点": [
        "自由定制"
      ],
      "视频主题": [
        "玩法展示",
        "休闲解压"
      ],
      "核心玩法": [
        "场景互动",
        "潜行躲避"
      ],
      "情绪触发点": [
        "紧张倒计时"
      ]
    }
  },
  {
    "gameId": "heartopia-gdd",
    "gameName": "心动小镇（广大大）",
    "sourceName": "广大大",
    "rank": 14,
    "company": "XD Entertainment Co., Ltd.",
    "category": "生活模拟 / 模拟经营",
    "theme": "现代田园 / 治愈生活",
    "adKey": "26a44634919c30b9879f68695de9177d",
    "materialId": "d48e3cb0dc70499062e68c11f54a9d2b",
    "platformCode": "youtube",
    "platformName": "YouTube",
    "impression": 1198785,
    "heat": 998,
    "days": 235,
    "firstSeen": 1767802513,
    "lastSeen": 1788018114,
    "regions": [
      "韩国"
    ],
    "language": "韩语",
    "duration": 0,
    "video": "https://sp2cdn-idea-global.zingfront.com/sp_opera/8d8b81820228bbdbac91484a1397f7e5.mp4",
    "createdAt": 1787068545,
    "searchFlag": 145459,
    "copy": "힐링 라이프 시뮬레이션 게임",
    "tags": {
      "色彩调性-主色系": [
        "多彩/彩色"
      ],
      "美术风格": [
        "风格化3D"
      ],
      "色彩调性-明暗度": [
        "明亮"
      ],
      "角色类型": [
        "游戏角色"
      ],
      "视频类型": [
        "游戏录屏"
      ],
      "色彩调性-整体饱和度": [
        "高饱和"
      ],
      "视觉特效程度": [
        "中等特效"
      ],
      "主要场景": [
        "商店",
        "城镇",
        "海滩"
      ]
    }
  },
  {
    "gameId": "heartopia-gdd",
    "gameName": "心动小镇（广大大）",
    "sourceName": "广大大",
    "rank": 15,
    "company": "XD Entertainment Co., Ltd.",
    "category": "生活模拟 / 模拟经营",
    "theme": "现代田园 / 治愈生活",
    "adKey": "218517d5f2502e8f50421bd1a498acf2",
    "materialId": "ec8c1369655d2343a20ce79efe26093f",
    "platformCode": "youtube",
    "platformName": "YouTube",
    "impression": 1187340,
    "heat": 998,
    "days": 232,
    "firstSeen": 1767802424,
    "lastSeen": 1787784619,
    "regions": [
      "韩国"
    ],
    "language": "韩语",
    "duration": 0,
    "video": "https://sp2cdn-idea-global.zingfront.com/sp_opera/fddc6e391cf4c4e24fbb85de0bdb6bae.mp4",
    "createdAt": 1787068275,
    "searchFlag": 145459,
    "copy": "힐링 라이프 시뮬레이션 게임",
    "tags": {
      "色彩调性-主色系": [
        "多彩/彩色"
      ],
      "美术风格": [
        "风格化3D"
      ],
      "色彩调性-明暗度": [
        "明亮"
      ],
      "角色类型": [
        "游戏角色"
      ],
      "视频类型": [
        "游戏录屏"
      ],
      "色彩调性-整体饱和度": [
        "高饱和"
      ],
      "视觉特效程度": [
        "中等特效"
      ],
      "主要场景": [
        "小镇街道",
        "角色创建界面"
      ]
    }
  },
  {
    "gameId": "heartopia-gdd",
    "gameName": "心动小镇（广大大）",
    "sourceName": "广大大",
    "rank": 16,
    "company": "XD Entertainment Co., Ltd.",
    "category": "生活模拟 / 模拟经营",
    "theme": "现代田园 / 治愈生活",
    "adKey": "4cb51b525713a77283dedd3594676f4f",
    "materialId": "f7d00d811b0852b03d8998e8c795015e",
    "platformCode": "admob",
    "platformName": "admob",
    "impression": 1105456,
    "heat": 998,
    "days": 232,
    "firstSeen": 1767802424,
    "lastSeen": 1787784619,
    "regions": [
      "韩国"
    ],
    "language": "韩语",
    "duration": 36,
    "video": "https://sp2cdn-idea-global.zingfront.com/sp_opera/c061953526b2c581f1b803dba5b2e63b.mp4",
    "createdAt": 1787424708,
    "searchFlag": 145459,
    "copy": "힐링 라이프 시뮬레이션 게임",
    "tags": {
      "色彩调性-主色系": [
        "多彩/彩色"
      ],
      "美术风格": [
        "风格化3D"
      ],
      "色彩调性-明暗度": [
        "明亮"
      ],
      "角色类型": [
        "游戏角色"
      ],
      "视频类型": [
        "游戏录屏"
      ],
      "色彩调性-整体饱和度": [
        "高饱和"
      ],
      "视觉特效程度": [
        "弱特效/几乎无"
      ],
      "主要场景": [
        "农场",
        "草地",
        "雪景小镇"
      ]
    }
  },
  {
    "gameId": "heartopia-gdd",
    "gameName": "心动小镇（广大大）",
    "sourceName": "广大大",
    "rank": 17,
    "company": "XD Entertainment Co., Ltd.",
    "category": "生活模拟 / 模拟经营",
    "theme": "现代田园 / 治愈生活",
    "adKey": "6cea6977f9588804666dac5b9191d7f5",
    "materialId": "a70657eb751d75f9b56a335a2e765f4f",
    "platformCode": "admob",
    "platformName": "admob",
    "impression": 1108351,
    "heat": 997,
    "days": 232,
    "firstSeen": 1767802460,
    "lastSeen": 1787750778,
    "regions": [
      "韩国"
    ],
    "language": "韩语",
    "duration": 38,
    "video": "https://sp2cdn-idea-global.zingfront.com/sp_opera/4c3eb4bf4bf20c083128d442b45fa56d.mp4",
    "createdAt": 1787424446,
    "searchFlag": 145459,
    "copy": "힐링 라이프 시뮬레이션 게임",
    "tags": {
      "色彩调性-主色系": [
        "多彩/彩色"
      ],
      "美术风格": [
        "风格化3D"
      ],
      "色彩调性-明暗度": [
        "明亮"
      ],
      "角色类型": [
        "游戏角色"
      ],
      "视频类型": [
        "游戏录屏"
      ],
      "色彩调性-整体饱和度": [
        "高饱和"
      ],
      "视觉特效程度": [
        "中等特效"
      ],
      "主要场景": [
        "农场",
        "厨房",
        "街道"
      ]
    }
  },
  {
    "gameId": "heartopia-gdd",
    "gameName": "心动小镇（广大大）",
    "sourceName": "广大大",
    "rank": 18,
    "company": "XD Entertainment Co., Ltd.",
    "category": "生活模拟 / 模拟经营",
    "theme": "现代田园 / 治愈生活",
    "adKey": "fe62710b9d0f281ecd4a2542901f04d7",
    "materialId": "336a7a787a9610743267417384100f18",
    "platformCode": "youtube",
    "platformName": "YouTube",
    "impression": 1105727,
    "heat": 997,
    "days": 226,
    "firstSeen": 1767841357,
    "lastSeen": 1787343404,
    "regions": [
      "韩国"
    ],
    "language": "韩语",
    "duration": 0,
    "video": "https://sp2cdn-idea-global.zingfront.com/sp_opera/13df065cfbac944b98e83e9a77ce0830.mp4",
    "createdAt": 1787069383,
    "searchFlag": 145459,
    "copy": "일상 속 행복을 만나보세요",
    "tags": {
      "色彩调性-主色系": [
        "暖色系"
      ],
      "美术风格": [
        "风格化3D"
      ],
      "色彩调性-明暗度": [
        "明亮"
      ],
      "角色类型": [
        "游戏角色"
      ],
      "视频类型": [
        "游戏录屏"
      ],
      "色彩调性-整体饱和度": [
        "高饱和"
      ],
      "视觉特效程度": [
        "中等特效"
      ],
      "主要场景": [
        "厨房",
        "室外摊位",
        "甜品店"
      ]
    }
  },
  {
    "gameId": "heartopia-gdd",
    "gameName": "心动小镇（广大大）",
    "sourceName": "广大大",
    "rank": 19,
    "company": "XD Entertainment Co., Ltd.",
    "category": "生活模拟 / 模拟经营",
    "theme": "现代田园 / 治愈生活",
    "adKey": "c07eabbd1c5f0db213078d050d08472b",
    "materialId": "9cbf62e4f0a3030b6359e22df01d7224",
    "platformCode": "youtube",
    "platformName": "YouTube",
    "impression": 1103580,
    "heat": 997,
    "days": 226,
    "firstSeen": 1767802424,
    "lastSeen": 1787242704,
    "regions": [
      "韩国"
    ],
    "language": "韩语",
    "duration": 0,
    "video": "https://sp2cdn-idea-global.zingfront.com/sp_opera/443dffdb84a5be7c327375f5fae46ddf.mp4",
    "createdAt": 1787068800,
    "searchFlag": 145459,
    "copy": "건축 시스템으로 나만의 드림하우스를 만들어 보세요!",
    "tags": {
      "色彩调性-主色系": [
        "多彩/彩色"
      ],
      "美术风格": [
        "风格化3D"
      ],
      "色彩调性-明暗度": [
        "明亮"
      ],
      "角色类型": [
        "游戏角色"
      ],
      "视频类型": [
        "游戏录屏"
      ],
      "色彩调性-整体饱和度": [
        "高饱和"
      ],
      "视觉特效程度": [
        "弱特效/几乎无"
      ],
      "主要场景": [
        "农田",
        "厨房",
        "城镇街道",
        "室内",
        "花田"
      ]
    }
  },
  {
    "gameId": "heartopia-gdd",
    "gameName": "心动小镇（广大大）",
    "sourceName": "广大大",
    "rank": 20,
    "company": "XD Entertainment Co., Ltd.",
    "category": "生活模拟 / 模拟经营",
    "theme": "现代田园 / 治愈生活",
    "adKey": "3515f932941aa455d64a9f89ce4b2102",
    "materialId": "174c19347907b3de7b6b6e278e057ee3",
    "platformCode": "youtube",
    "platformName": "YouTube",
    "impression": 1101433,
    "heat": 997,
    "days": 226,
    "firstSeen": 1767802424,
    "lastSeen": 1787242704,
    "regions": [
      "韩国"
    ],
    "language": "韩语",
    "duration": 0,
    "video": "https://sp2cdn-idea-global.zingfront.com/sp_opera/6e86040a65b2fdea6a385fa82018c028.mp4",
    "createdAt": 1787285889,
    "searchFlag": 145459,
    "copy": "힐링 라이프 시뮬레이션 게임",
    "tags": {}
  }
];

const adxSeeds: AdxSeed[] = [
  {
    "rank": 1,
    "id": "19014267100000",
    "productId": 88484,
    "title": "",
    "publisherName": "心动网络股份有限公司",
    "media": [
      "抖音"
    ],
    "durationSeconds": 62.8,
    "exposureNum": 20238209,
    "materialDays": 182,
    "materialFirstSeen": "2024-08-08",
    "materialLastSeen": "2026-08-20",
    "videoUrl": "https://adxvideo.dataeye.com/9538/e171d2a2b359299e22cca651f4bbba00.mp4?auth_key=1788146979-0-gameWeb_4537-bb609167997321ace325e7d46404fb04",
    "coverUrl": "https://adxvideo.dataeye.com/6878/fc39770b06088f77d6b89aa06f82ae42.webp?auth_key=1788146979-0-gameWeb_4537-fb9e69a3df1dfb5d9000151ee2c36fb6",
    "detailUrl": "https://adxray.dataeye.com/index/home#/Product/Plan/19014267100000",
    "audioTexts": "兄弟们，小镇已经卷成这个样子了吗？起初是我骑着小电驴出去想买件衣服，结果遇到一个人追着给我喂饭，我以为是来求盖章的，然后我就吃了。炸裂的事情来了，出于礼貌我加了他们好友这话我还没意识到这两个名字的杀伤力正片来了，他们说他们是陪玩团的师哥，我一大老爷们，特别是旁边这个长得像电击小子的，我定住了，他们问我需不需要，我这里想打，不需要来着，结果打成不喜欢了，我勒个斗，离谱的事情终究还是来了，你们可能不知道这一句话是在说什么，看好了。这是你们团的招牌吗？看名字确定是一个团的了，然后我解释了，我是男的，别搞我。你们猜接下来发生了啥？他进了草丛，你们是要逼疯我吗？换了个女装出来。",
    "score": 0.806932,
    "gameId": "heartopia-adx",
    "gameName": "心动小镇（ADXray）",
    "sourceName": "DataEye AdXray",
    "category": "生活模拟 / 模拟经营",
    "theme": "现代田园 / 治愈生活"
  },
  {
    "rank": 2,
    "id": "32985473600000",
    "productId": 88484,
    "title": "你是否在寻找一款能让你沉浸其中的小镇模拟经营游戏？《心动小镇》将带给你全新的游戏体验！在这个游戏中，你可以建造梦幻小镇，成为镇长，逆袭暴富。这款休闲策略经营游戏，海外刚上3天就霸榜了！你可以打造传奇装备，狩猎魔物，挑战地狱BOSS，阻止末日侵袭。快来下载《心动小镇》，体验这款好玩的休闲卡牌游戏吧！",
    "publisherName": "未知公司",
    "media": [
      "番茄小说",
      "今日头条",
      "西瓜视频",
      "抖音",
      "抖音火山版",
      "虎扑",
      "优量汇",
      "穿山甲联盟",
      "快手联盟",
      "QQ音乐",
      "酷狗音乐",
      "QQ阅读",
      "欢乐斗地主",
      "红果免费短剧"
    ],
    "durationSeconds": 39.62,
    "exposureNum": 4135817,
    "materialDays": 369,
    "materialFirstSeen": "2024-12-17",
    "materialLastSeen": "2026-08-28",
    "videoUrl": "https://adxvideo.dataeye.com/3061/a43603a142dc22fd91feaa71566c1918.mp4?auth_key=1788146971-0-gameWeb_4537-e1276e34a42f81427308d0d290a08010",
    "coverUrl": "https://adxvideo.dataeye.com/7369/1f3add907de87cd1eb3d099607a4f6e0.png?auth_key=1788146971-0-gameWeb_4537-c842e4bb1c9e03cc34e077e0d134d436",
    "detailUrl": "https://adxray.dataeye.com/index/home#/Product/Plan/32985473600000",
    "audioTexts": "有没有比较耐玩的游戏？就这个集冒险策略、经营养成、沉浸式战略布局、资源应酬，构建发展策略布局的经营小镇。你作为村长啊，是不能操作他们移动的n p c，他们啊都是全自动打怪。但就这样我都能看他们打怪，看上一天，我跟你们说就特别的有劲啊，像是那种嗯第三人称的那种建设的成就感啊，像把自己的孩子慢慢养大的感觉。你只能控制他们啊，出门打打怪什么的，其他的什么问他们要收钱啊，要资源啊，那是一概都要不到的，都是要自己花钱问他们收购的。",
    "score": 0.656824,
    "gameId": "heartopia-adx",
    "gameName": "心动小镇（ADXray）",
    "sourceName": "DataEye AdXray",
    "category": "生活模拟 / 模拟经营",
    "theme": "现代田园 / 治愈生活"
  },
  {
    "rank": 3,
    "id": "931146132",
    "productId": 88484,
    "title": "小雨摇(ゝω・´★) #冰原守卫者 清冷波波长辫搭配#小雨摇 #心动小镇#心动小镇创作计划#心动小镇冰雪季",
    "publisherName": "心动网络股份有限公司",
    "media": [
      "抖音"
    ],
    "durationSeconds": 10.13,
    "exposureNum": 7773611,
    "materialDays": 69,
    "materialFirstSeen": "2026-03-07",
    "materialLastSeen": "2026-07-28",
    "videoUrl": "https://adxvideo.dataeye.com/8231/6091a8325344027e91dabe208b185c9b.mp4?auth_key=1788146998-0-gameWeb_4537-63404c9128d4c05ecad2850160a8d902",
    "coverUrl": "https://adxvideo.dataeye.com/7219/58dcb4fcfab0e0350aa7bbdb383a1e22.jpeg?auth_key=1788146998-0-gameWeb_4537-5679947e5901428910f070a51bd62958",
    "detailUrl": "https://adxray.dataeye.com/index/home#/Product/Plan/931146132",
    "audioTexts": "",
    "score": 0.483473,
    "gameId": "heartopia-adx",
    "gameName": "心动小镇（ADXray）",
    "sourceName": "DataEye AdXray",
    "category": "生活模拟 / 模拟经营",
    "theme": "现代田园 / 治愈生活"
  },
  {
    "rank": 4,
    "id": "312855641",
    "productId": 88484,
    "title": "心动小镇雪夜loft#心动小镇 #心动小镇创作计划 #心动小镇线条小狗联动",
    "publisherName": "心动网络股份有限公司",
    "media": [
      "抖音"
    ],
    "durationSeconds": 10.68,
    "exposureNum": 3083029,
    "materialDays": 204,
    "materialFirstSeen": "2025-01-06",
    "materialLastSeen": "2026-08-14",
    "videoUrl": "https://adxvideo.dataeye.com/4258/f0e6197ff88550dfa515e5aced8bfa43.mp4?auth_key=1788146973-0-gameWeb_4537-40821aa1de4024c1baad883b1649ea06",
    "coverUrl": "https://adxvideo.dataeye.com/2375/fed132d78a5c8191b235b0ccfada3541.jpeg?auth_key=1788146973-0-gameWeb_4537-71042ba3ac9e71ee1cacb27b93e84143",
    "detailUrl": "https://adxray.dataeye.com/index/home#/Product/Plan/312855641",
    "audioTexts": "",
    "score": 0.42298,
    "gameId": "heartopia-adx",
    "gameName": "心动小镇（ADXray）",
    "sourceName": "DataEye AdXray",
    "category": "生活模拟 / 模拟经营",
    "theme": "现代田园 / 治愈生活"
  },
  {
    "rank": 5,
    "id": "184375087",
    "productId": 88484,
    "title": "在《心动小镇》偶遇你的多巴胺时装！邂逅怦然心动的Ta吧～",
    "publisherName": "心动网络股份有限公司",
    "media": [
      "抖音"
    ],
    "durationSeconds": 85.96,
    "exposureNum": 6024173,
    "materialDays": 46,
    "materialFirstSeen": "2024-07-28",
    "materialLastSeen": "2026-08-30",
    "videoUrl": "https://adxvideo.dataeye.com/7078/0d61d422026dc8231b982dd521289098.mp4?auth_key=1788147001-0-gameWeb_4537-fa42404b8dcc8fa00ec7cdd3bfe3b672",
    "coverUrl": "https://adxvideo.dataeye.com/1725/87015ebc9fd2d59c48eed3a4c19df002.heic?auth_key=1788147001-0-gameWeb_4537-6ea7b86c3000ecccfed3c3ba1d02687f",
    "detailUrl": "https://adxray.dataeye.com/index/home#/Product/Plan/184375087",
    "audioTexts": "",
    "score": 0.404625,
    "gameId": "heartopia-adx",
    "gameName": "心动小镇（ADXray）",
    "sourceName": "DataEye AdXray",
    "category": "生活模拟 / 模拟经营",
    "theme": "现代田园 / 治愈生活"
  },
  {
    "rank": 6,
    "id": "318243435",
    "productId": 88484,
    "title": "大家期待的18地奶油风来啦 也是我们第一个共创的作品嘿嘿 #心动小镇 #心动小镇创作计划 #心动小镇线条小狗联动",
    "publisherName": "心动网络股份有限公司",
    "media": [
      "抖音"
    ],
    "durationSeconds": 22.93,
    "exposureNum": 1435661,
    "materialDays": 312,
    "materialFirstSeen": "2025-01-12",
    "materialLastSeen": "2026-08-19",
    "videoUrl": "https://adxvideo.dataeye.com/5105/3bcdd2d1036ba516addeb27c9bfe3bd8.mp4?auth_key=1788146971-0-gameWeb_4537-33207b0654846d6991f8f46976e3e440",
    "coverUrl": "https://adxvideo.dataeye.com/5816/53694953d769d6f7b2c9bad6a1f39ec4.jpeg?auth_key=1788146971-0-gameWeb_4537-136c0a811d36587cd5d413399ff05b28",
    "detailUrl": "https://adxray.dataeye.com/index/home#/Product/Plan/318243435",
    "audioTexts": "",
    "score": 0.369305,
    "gameId": "heartopia-adx",
    "gameName": "心动小镇（ADXray）",
    "sourceName": "DataEye AdXray",
    "category": "生活模拟 / 模拟经营",
    "theme": "现代田园 / 治愈生活"
  },
  {
    "rank": 7,
    "id": "467739978",
    "productId": 88484,
    "title": "心动小镇挑空客厅\n遛一下新房的客厅‘=͟͟͞͞(･∇･ ‧̣̥̇)\n喜欢木质调\n#心动小镇 \n#心动小镇创作计划 \n#小镇庆典稚趣园 \n#心动小镇建房 \n#心动小镇装修",
    "publisherName": "心动网络股份有限公司",
    "media": [
      "抖音"
    ],
    "durationSeconds": 12.57,
    "exposureNum": 2761308,
    "materialDays": 165,
    "materialFirstSeen": "2025-05-23",
    "materialLastSeen": "2026-08-28",
    "videoUrl": "https://adxvideo.dataeye.com/8419/05933a383d8b0a54230657f40257af03.mp4?auth_key=1788146983-0-gameWeb_4537-9d8015a8b936e77320f9887f0773b7a8",
    "coverUrl": "https://adxvideo.dataeye.com/1697/0209834ecc23c03577f5d311f005b54d.jpeg?auth_key=1788146983-0-gameWeb_4537-5994f4c252292ccecba9b53d705e6fdb",
    "detailUrl": "https://adxray.dataeye.com/index/home#/Product/Plan/467739978",
    "audioTexts": "",
    "score": 0.358896,
    "gameId": "heartopia-adx",
    "gameName": "心动小镇（ADXray）",
    "sourceName": "DataEye AdXray",
    "category": "生活模拟 / 模拟经营",
    "theme": "现代田园 / 治愈生活"
  },
  {
    "rank": 8,
    "id": "33190737900000",
    "productId": 88484,
    "title": "视频来源#心动小镇 官方视频  大家记得开始存星星 开启属于自己的 全新岛屿 @心动小镇 #心动小镇 #心动小镇创作计划 #心动小镇线条小狗联动",
    "publisherName": "心动网络股份有限公司",
    "media": [
      "抖音"
    ],
    "durationSeconds": 168.51,
    "exposureNum": 1946090,
    "materialDays": 198,
    "materialFirstSeen": "2025-01-15",
    "materialLastSeen": "2026-08-22",
    "videoUrl": "https://adxvideo.dataeye.com/4507/b3852e0f8d84a4bd400f976eb6665677.mp4?auth_key=1788146974-0-gameWeb_4537-7e6dcf7536c3d3c6865fa23f633979c9",
    "coverUrl": "https://adxvideo.dataeye.com/9259/bf9ac85a8203a7bf05dff45ae81f6884.jpeg?auth_key=1788146974-0-gameWeb_4537-997c5a58c21dd427f7fb1f4013558931",
    "detailUrl": "https://adxray.dataeye.com/index/home#/Product/Plan/33190737900000",
    "audioTexts": "",
    "score": 0.31735,
    "gameId": "heartopia-adx",
    "gameName": "心动小镇（ADXray）",
    "sourceName": "DataEye AdXray",
    "category": "生活模拟 / 模拟经营",
    "theme": "现代田园 / 治愈生活"
  },
  {
    "rank": 9,
    "id": "348592215",
    "productId": 88484,
    "title": "“什么都可以删除拉黑，却唯独记忆删除不了，一场相遇却留下了一生的回忆，前一秒还是嘴角上扬，下一秒就湿了眼眶...”#心动小镇 #心动小镇创作计划 #心动小镇新春季",
    "publisherName": "心动网络股份有限公司",
    "media": [
      "抖音"
    ],
    "durationSeconds": 23.07,
    "exposureNum": 1240107,
    "materialDays": 278,
    "materialFirstSeen": "2025-02-15",
    "materialLastSeen": "2026-08-23",
    "videoUrl": "https://adxvideo.dataeye.com/4815/85854baf1338431cdd798daf86a752c6.mp4?auth_key=1788146971-0-gameWeb_4537-47133621b0e512743066ce25af115963",
    "coverUrl": "https://adxvideo.dataeye.com/1335/4db2bb2a7fa9a381d4d2b2f9d863f1c2.jpeg?auth_key=1788146971-0-gameWeb_4537-fc513ddf52e3838fc40e8ca3b55772a6",
    "detailUrl": "https://adxray.dataeye.com/index/home#/Product/Plan/348592215",
    "audioTexts": "",
    "score": 0.302556,
    "gameId": "heartopia-adx",
    "gameName": "心动小镇（ADXray）",
    "sourceName": "DataEye AdXray",
    "category": "生活模拟 / 模拟经营",
    "theme": "现代田园 / 治愈生活"
  },
  {
    "rank": 10,
    "id": "407321876",
    "productId": 88484,
    "title": "新发现️手册的柱子木质支撑住可以得到一个褶皱自然的窗帘 窗帘原创@夜希yoki \n灯带吊顶来自@蒸汽撞墙 \n感谢各位老师\n#心动小镇 #心动小镇创作计划 #小镇庆典春野令 \n#心动小镇建房 #心动小镇装修",
    "publisherName": "心动网络股份有限公司",
    "media": [
      "抖音"
    ],
    "durationSeconds": 19.6,
    "exposureNum": 1889627,
    "materialDays": 183,
    "materialFirstSeen": "2025-04-11",
    "materialLastSeen": "2026-08-24",
    "videoUrl": "https://adxvideo.dataeye.com/4297/6c4aec9591cd3744e154126a06bf29f1.mp4?auth_key=1788146978-0-gameWeb_4537-b06df734853fcb2d41fd3b42b34c9789",
    "coverUrl": "https://adxvideo.dataeye.com/1213/476cd21e13a26ff828f255b79d18481f.jpeg?auth_key=1788146978-0-gameWeb_4537-78321accc283082f84deacceb954412c",
    "detailUrl": "https://adxray.dataeye.com/index/home#/Product/Plan/407321876",
    "audioTexts": "",
    "score": 0.2955,
    "gameId": "heartopia-adx",
    "gameName": "心动小镇（ADXray）",
    "sourceName": "DataEye AdXray",
    "category": "生活模拟 / 模拟经营",
    "theme": "现代田园 / 治愈生活"
  },
  {
    "rank": 11,
    "id": "346265322",
    "productId": 88484,
    "title": "心动小镇▏「绮梦小屋」内饰教程（视频版） 我所有的小屋基本都是类似装修，大家可以总体参考一下，楼梯就是长楼梯或转角楼梯，所以不用一直问怎么放楼梯哦～#心动小镇 #心动小镇创想团 #心动小镇新春季 #心动小镇内饰 #心动小镇装修",
    "publisherName": "心动网络股份有限公司",
    "media": [
      "抖音"
    ],
    "durationSeconds": 95.57,
    "exposureNum": 1726931,
    "materialDays": 190,
    "materialFirstSeen": "2025-02-13",
    "materialLastSeen": "2026-08-19",
    "videoUrl": "https://adxvideo.dataeye.com/6530/4d516ffb67a4c011abaa8c5b1d2d8bd2.mp4?auth_key=1788146976-0-gameWeb_4537-f04e3d179851af8572b1f42f6e7335e9",
    "coverUrl": "https://adxvideo.dataeye.com/9356/33df2acd72860da09b8f10a6538d23db.jpeg?auth_key=1788146976-0-gameWeb_4537-b5c30179d5c5085722268e8c95129fb7",
    "detailUrl": "https://adxray.dataeye.com/index/home#/Product/Plan/346265322",
    "audioTexts": "",
    "score": 0.283269,
    "gameId": "heartopia-adx",
    "gameName": "心动小镇（ADXray）",
    "sourceName": "DataEye AdXray",
    "category": "生活模拟 / 模拟经营",
    "theme": "现代田园 / 治愈生活"
  },
  {
    "rank": 12,
    "id": "621321345",
    "productId": 88484,
    "title": "更新后的温泉珊瑚湖底出现了个大坑！喊上搭子来拍，超简单的自带深海滤镜宿命感照片！#心动小镇 #心动小镇创想团 #小马宝莉心动小镇周年联动 #心动小镇深海滤镜 #心动小镇我会发光",
    "publisherName": "心动网络股份有限公司",
    "media": [
      "抖音"
    ],
    "durationSeconds": 31.35,
    "exposureNum": 2262384,
    "materialDays": 124,
    "materialFirstSeen": "2025-08-22",
    "materialLastSeen": "2026-08-24",
    "videoUrl": "https://adxvideo.dataeye.com/965/6a40b9cc114fabb5c01a8c09717be850.mp4?auth_key=1788146994-0-gameWeb_4537-8f9aedd770f3b1af092f71fa50417c0a",
    "coverUrl": "https://adxvideo.dataeye.com/6093/82c5c1aeb2ea74ee1c3dd71b0241a8d9.jpeg?auth_key=1788146994-0-gameWeb_4537-6b536fbfd851fc3eb95ba241d133cb8f",
    "detailUrl": "https://adxray.dataeye.com/index/home#/Product/Plan/621321345",
    "audioTexts": "",
    "score": 0.273496,
    "gameId": "heartopia-adx",
    "gameName": "心动小镇（ADXray）",
    "sourceName": "DataEye AdXray",
    "category": "生活模拟 / 模拟经营",
    "theme": "现代田园 / 治愈生活"
  },
  {
    "rank": 13,
    "id": "46065548500000",
    "productId": 88484,
    "title": "#心动小镇 #学校 #上课 #热门 @DOU+上热门 #校园里的精选",
    "publisherName": "心动网络股份有限公司",
    "media": [
      "抖音"
    ],
    "durationSeconds": 200.7,
    "exposureNum": 1522965,
    "materialDays": 166,
    "materialFirstSeen": "2025-05-19",
    "materialLastSeen": "2026-08-23",
    "videoUrl": "https://adxvideo.dataeye.com/9193/8c4f8e54bfe594ee0369e0d4267ae3f5.mp4?auth_key=1788146983-0-gameWeb_4537-accb43b03dc6c3b60b644b49edf823fe",
    "coverUrl": "https://adxvideo.dataeye.com/9743/8a8db4716a604f603a8eea6427531b8b.jpeg?auth_key=1788146983-0-gameWeb_4537-9c4fb8f637f4c2f5a8b97c3ea0f7f66d",
    "detailUrl": "https://adxray.dataeye.com/index/home#/Product/Plan/46065548500000",
    "audioTexts": "",
    "score": 0.231326,
    "gameId": "heartopia-adx",
    "gameName": "心动小镇（ADXray）",
    "sourceName": "DataEye AdXray",
    "category": "生活模拟 / 模拟经营",
    "theme": "现代田园 / 治愈生活"
  },
  {
    "rank": 14,
    "id": "309517110",
    "productId": 88484,
    "title": "心动小镇超大落地窗温馨loft #心动小镇 #心动小镇创作计划 #心动小镇线条小狗联动",
    "publisherName": "心动网络股份有限公司",
    "media": [
      "抖音"
    ],
    "durationSeconds": 7.87,
    "exposureNum": 1323017,
    "materialDays": 194,
    "materialFirstSeen": "2025-01-02",
    "materialLastSeen": "2026-08-18",
    "videoUrl": "https://adxvideo.dataeye.com/8879/85f2fe968a88b0f0c44192aaa5d35cbb.mp4?auth_key=1788146975-0-gameWeb_4537-4e88359636bb31a16b94fa22907977c0",
    "coverUrl": "https://adxvideo.dataeye.com/3100/886da89d2ce72aa4c49f1e57654cf081.jpeg?auth_key=1788146975-0-gameWeb_4537-e79f46cbc9ad2d16ef1d519ddbd95869",
    "detailUrl": "https://adxray.dataeye.com/index/home#/Product/Plan/309517110",
    "audioTexts": "",
    "score": 0.229817,
    "gameId": "heartopia-adx",
    "gameName": "心动小镇（ADXray）",
    "sourceName": "DataEye AdXray",
    "category": "生活模拟 / 模拟经营",
    "theme": "现代田园 / 治愈生活"
  },
  {
    "rank": 15,
    "id": "582076313",
    "productId": 88484,
    "title": "艳阳高照好天气！#心动小镇 #小马宝莉联动 #友谊是心动的魔法 #心动小镇1周年庆 #小镇里的生日派对",
    "publisherName": "心动网络股份有限公司",
    "media": [
      "抖音"
    ],
    "durationSeconds": 125.43,
    "exposureNum": 2832163,
    "materialDays": 33,
    "materialFirstSeen": "2025-07-29",
    "materialLastSeen": "2026-08-28",
    "videoUrl": "https://adxvideo.dataeye.com/7085/04c7c4c770adfbb20123b2c92289f129.mp4?auth_key=1788147004-0-gameWeb_4537-1df004709fd554d734412dd3b36953e6",
    "coverUrl": "https://adxvideo.dataeye.com/1133/d603b226b39ecab543787baf083be0e5.jpeg?auth_key=1788147004-0-gameWeb_4537-866296cf042ec5210b61ef42b5b29c45",
    "detailUrl": "https://adxray.dataeye.com/index/home#/Product/Plan/582076313",
    "audioTexts": "",
    "score": 0.228088,
    "gameId": "heartopia-adx",
    "gameName": "心动小镇（ADXray）",
    "sourceName": "DataEye AdXray",
    "category": "生活模拟 / 模拟经营",
    "theme": "现代田园 / 治愈生活"
  },
  {
    "rank": 16,
    "id": "584091888",
    "productId": 88484,
    "title": "#心动小镇 #心动小镇创作计划 #小马宝莉心动小镇周年联动 #热门 @DOU+上热门",
    "publisherName": "心动网络股份有限公司",
    "media": [
      "抖音"
    ],
    "durationSeconds": 150.8,
    "exposureNum": 1687869,
    "materialDays": 128,
    "materialFirstSeen": "2025-07-30",
    "materialLastSeen": "2026-08-23",
    "videoUrl": "https://adxvideo.dataeye.com/1989/38daaa066bcd41bc1fc09889d3c21e72.mp4?auth_key=1788146993-0-gameWeb_4537-625176099337f242d2983910b0890c50",
    "coverUrl": "https://adxvideo.dataeye.com/3227/9d99d538f72e778f2a57336051423716.jpeg?auth_key=1788146993-0-gameWeb_4537-3799e80fc1cff04b62b74fbbb75055d8",
    "detailUrl": "https://adxray.dataeye.com/index/home#/Product/Plan/584091888",
    "audioTexts": "",
    "score": 0.214312,
    "gameId": "heartopia-adx",
    "gameName": "心动小镇（ADXray）",
    "sourceName": "DataEye AdXray",
    "category": "生活模拟 / 模拟经营",
    "theme": "现代田园 / 治愈生活"
  },
  {
    "rank": 17,
    "id": "625500665",
    "productId": 88484,
    "title": "穿搭基础，载具就不基础。#心动小镇#心动小镇创作计划#小马宝莉心动小镇周年联动 #心动小镇单车",
    "publisherName": "心动网络股份有限公司",
    "media": [
      "抖音"
    ],
    "durationSeconds": 23.2,
    "exposureNum": 1682327,
    "materialDays": 120,
    "materialFirstSeen": "2025-08-25",
    "materialLastSeen": "2026-08-27",
    "videoUrl": "https://adxvideo.dataeye.com/8457/46d170c058c326cfe1ae71adeeec6673.mp4?auth_key=1788146995-0-gameWeb_4537-89b32fcf15d9b3d2e27aaaaa612b8e02",
    "coverUrl": "https://adxvideo.dataeye.com/3985/340f52aeab83438ca057743503582b0c.jpeg?auth_key=1788146995-0-gameWeb_4537-99a0e07e3d7c3ecd64154a3e644e6e93",
    "detailUrl": "https://adxray.dataeye.com/index/home#/Product/Plan/625500665",
    "audioTexts": "",
    "score": 0.205342,
    "gameId": "heartopia-adx",
    "gameName": "心动小镇（ADXray）",
    "sourceName": "DataEye AdXray",
    "category": "生活模拟 / 模拟经营",
    "theme": "现代田园 / 治愈生活"
  },
  {
    "rank": 18,
    "id": "300103373",
    "productId": 88484,
    "title": "#心动小镇 #心动小镇创作计划 #心动小镇线条小狗联动 #游戏主播 #你干嘛我干嘛 闲着没事看看温馨小动画也不不能哈",
    "publisherName": "心动网络股份有限公司",
    "media": [
      "抖音"
    ],
    "durationSeconds": 6.9,
    "exposureNum": 1045228,
    "materialDays": 219,
    "materialFirstSeen": "2024-12-23",
    "materialLastSeen": "2026-08-22",
    "videoUrl": "https://adxvideo.dataeye.com/2629/07edd56c848c1bd81614882ba9232850.mp4?auth_key=1788146971-0-gameWeb_4537-12f150d9d5deef3e7373de10962f2fd5",
    "coverUrl": "https://adxvideo.dataeye.com/2716/c98a1588bd7218f6857a7bdd6180fa61.jpeg?auth_key=1788146971-0-gameWeb_4537-c673f0fd4c4aa2c82583dcbb3a1a31de",
    "detailUrl": "https://adxray.dataeye.com/index/home#/Product/Plan/300103373",
    "audioTexts": "",
    "score": 0.204693,
    "gameId": "heartopia-adx",
    "gameName": "心动小镇（ADXray）",
    "sourceName": "DataEye AdXray",
    "category": "生活模拟 / 模拟经营",
    "theme": "现代田园 / 治愈生活"
  },
  {
    "rank": 19,
    "id": "351391194",
    "productId": 88484,
    "title": "冰川遗迹 快带着你的好朋友一起看看吧 #心动小镇 #心动小镇创作计划 #心动小镇新春季",
    "publisherName": "心动网络股份有限公司",
    "media": [
      "抖音"
    ],
    "durationSeconds": 52.97,
    "exposureNum": 1164764,
    "materialDays": 182,
    "materialFirstSeen": "2025-02-18",
    "materialLastSeen": "2026-08-30",
    "videoUrl": "https://adxvideo.dataeye.com/1883/511767b01449913eb851d7282b0a7a3b.mp4?auth_key=1788146979-0-gameWeb_4537-f12720e7927386f30b7ac0e1e6c1a9a3",
    "coverUrl": "https://adxvideo.dataeye.com/5475/7ad71b602ccefc11366727b30845ccfd.jpeg?auth_key=1788146979-0-gameWeb_4537-c18a93e8b6ee4fd0a68c14bf69704e34",
    "detailUrl": "https://adxray.dataeye.com/index/home#/Product/Plan/351391194",
    "audioTexts": "",
    "score": 0.189895,
    "gameId": "heartopia-adx",
    "gameName": "心动小镇（ADXray）",
    "sourceName": "DataEye AdXray",
    "category": "生活模拟 / 模拟经营",
    "theme": "现代田园 / 治愈生活"
  },
  {
    "rank": 20,
    "id": "306481025",
    "productId": 88484,
    "title": "要过年了，马上春运了，大家都抢到车票了吗？快来我的火车站坐车车吧！#心动小镇 #心动小镇创作计划 #心动小镇线条小狗联动 \n#春运 #春节返乡",
    "publisherName": "心动网络股份有限公司",
    "media": [
      "抖音"
    ],
    "durationSeconds": 67.57,
    "exposureNum": 1002348,
    "materialDays": 213,
    "materialFirstSeen": "2024-12-30",
    "materialLastSeen": "2026-08-30",
    "videoUrl": "https://adxvideo.dataeye.com/5436/c3a0232c54fcb09c7d673b0f781e6ffb.mp4?auth_key=1788146971-0-gameWeb_4537-1f9fe1cf4707e0d92505d1635b002317",
    "coverUrl": "https://adxvideo.dataeye.com/8870/4f158f986c33ab961c57edfbae41b3eb.jpeg?auth_key=1788146971-0-gameWeb_4537-ad8e82fba53a7415cff71e46fca67596",
    "detailUrl": "https://adxray.dataeye.com/index/home#/Product/Plan/306481025",
    "audioTexts": "",
    "score": 0.189445,
    "gameId": "heartopia-adx",
    "gameName": "心动小镇（ADXray）",
    "sourceName": "DataEye AdXray",
    "category": "生活模拟 / 模拟经营",
    "theme": "现代田园 / 治愈生活"
  }
];

function unique(values: string[]) {
  return [...new Set(values.filter(Boolean))];
}

function tagValues(seed: GddSeed, key: string, fallback: string[]) {
  return seed.tags[key]?.length ? seed.tags[key] : fallback;
}

function formatDate(timestamp: number) {
  return new Date(timestamp * 1000).toISOString().slice(0, 10);
}

function formatEstimate(value: number) {
  if (value >= 100_000_000) return (value / 100_000_000).toFixed(2) + " 亿";
  if (value >= 10_000) return (value / 10_000).toFixed(1) + " 万";
  return value.toLocaleString("zh-CN");
}

function createGddMaterial(seed: GddSeed): Material {
  const isCookie = seed.gameId === "cookie-gdd";
  const hookTypes = tagValues(seed, "开头钩子", ["玩法直出"]);
  const corePlay = tagValues(seed, "核心玩法", isCookie ? ["角色养成", "王国建设"] : ["生活模拟", "模拟经营"]);
  const content = tagValues(seed, "内容题材", [seed.theme]);
  const elements = tagValues(seed, "游戏元素", []);
  const motivations = tagValues(seed, "玩家动机", ["持续体验"]);
  const marketing = tagValues(seed, "营销卖点", []);
  const scenes = tagValues(seed, "主要场景", []);
  const endings = tagValues(seed, "结尾引导", ["品牌或下载承接"]);
  const videoTypes = tagValues(seed, "视频类型", ["视频广告"]);
  const visual = unique([
    ...tagValues(seed, "美术风格", []),
    ...tagValues(seed, "色彩调性-主色系", []),
    ...tagValues(seed, "色彩调性-明暗度", []),
    ...tagValues(seed, "色彩调性-整体饱和度", []),
  ]);
  const detail = "https://guangdada.net/modules/creative/display-ads/detail?channel=" + seed.platformCode
    + "&id=" + seed.adKey + "&type=1&created_at=" + seed.createdAt
    + "&fb_merge=false&search_flag=" + seed.searchFlag;
  const middleEnd = Math.max(4, seed.duration - Math.max(3, Math.round(seed.duration * 0.18)));
  const secondary = unique([...corePlay.slice(0, 2), ...content.slice(0, 1), ...(scenes.length ? ["场景"] : [])]).slice(0, 4);
  const summary = "以“" + hookTypes.join("、") + "”建立注意，主体连续展示"
    + corePlay.join("、") + "，通过" + (elements.slice(0, 3).join("、") || "角色、场景与成长反馈")
    + "证明体验价值，最后由" + endings.join("、") + "完成行动承接。";

  return {
    id: "TPR-" + seed.gameId + "-" + String(seed.rank).padStart(2, "0"),
    weekId: WEEK_ID,
    adKey: seed.adKey,
    materialId: seed.materialId,
    name: seed.gameName,
    recordName: seed.gameName + " / 热度 Top " + seed.rank,
    company: seed.company,
    region: seed.regions.join("、"),
    platform: seed.platformName,
    channel: seed.platformName,
    launchStage: "2026 年 7—8 月持续投放素材",
    theme: unique([seed.theme, ...content]).join(" / "),
    category: seed.category,
    format: hookTypes.join(" / "),
    audience: "偏好" + seed.theme + "、" + corePlay.join("、") + "和" + motivations.join("、") + "的游戏用户。",
    hookTypes,
    hookCopy: seed.copy || hookTypes.join("、"),
    hookMechanism: hookTypes.join("、") + "承担注意入口，并以" + tagValues(seed, "情绪触发点", hookTypes).join("、") + "推动观看。",
    firstFrame: "首屏围绕" + hookTypes.join("、") + "展开，主要视觉为" + (scenes.slice(0, 2).join("、") || "游戏角色与核心场景") + "。",
    result: "展示" + corePlay.join("、") + "带来的" + (elements.slice(0, 3).join("、") || "成长、收集或经营反馈") + "。",
    coreSellingPoint: corePlay.join("、") + "构成核心体验，" + (marketing.join("、") || "清晰的玩法反馈") + "降低理解门槛。",
    supportingSellingPoints: unique([...marketing, ...elements, ...motivations]).slice(0, 4).map((message, index) => ({
      sequence: index + 1,
      benefit_type: secondary[index] || "辅助卖点",
      message,
    })),
    character: tagValues(seed, "角色类型", []).length ? "有，主要为" + tagValues(seed, "角色类型", []).join("、") + "。" : "以游戏角色和玩法单位为主。",
    voiceover: seed.language + "；MCP未提供独立音轨识别，口播以原视频为准。",
    gameplay: "展示" + corePlay.join("、") + "，可见元素包括" + (elements.join("、") || "角色、场景与系统反馈") + "。",
    fakeGameplay: "MCP标签未发现广告主身份与素材内容明显冲突；实机比例以原视频为准。",
    visualStyle: visual.length ? visual : ["游戏画面"],
    duration: seed.duration + " 秒",
    editingPace: (seed.duration <= 20 ? "快" : seed.duration <= 45 ? "中快" : "中等") + "节奏，按钩子、体验证明和结果承接推进。",
    endCard: endings.join("、"),
    localization: seed.language + "；投放地区：" + seed.regions.join("、") + "。",
    productionMethod: videoTypes.join("、"),
    productionComponents: unique([...videoTypes, ...visual.slice(0, 2), "文字或品牌包装"]),
    productionNotes: ["来源为广大大MCP 2026-08-31扫描", "按广告主、素材ID与视频链接去重", "脚本由AI视频标签、文案和投放数据综合生成"],
    dataSource: "广大大",
    displayEstimate: formatEstimate(seed.impression),
    displayEstimateValue: seed.impression,
    popularity: "热度 " + seed.heat,
    heat: String(seed.heat),
    heatValue: seed.heat,
    runDays: seed.days + " 天",
    runDaysValue: seed.days,
    dateRange: formatDate(seed.firstSeen) + " 至 " + formatDate(seed.lastSeen),
    dateStart: formatDate(seed.firstSeen),
    dateEnd: formatDate(seed.lastSeen),
    platforms: [seed.platformName],
    regions: seed.regions,
    sellingPointPrimary: unique(["核心玩法", ...(visual.length ? ["美术"] : []), "题材与世界观"]),
    sellingPointSecondary: secondary,
    videoLink: seed.video,
    originalAdLink: detail,
    videoLinkCollectedAt: GDD_COLLECTED_AT,
    guangdadaDetailLink: detail,
    analysisSource: "MCP 标签草稿",
    scriptAnalysis: {
      summary,
      structureAndRhythm: [
        "0-3秒：以" + hookTypes.join("、") + "完成首屏筛选。",
        "3-" + middleEnd + "秒：围绕" + corePlay.join("、") + "连续展示玩法和反馈。",
        middleEnd + "-" + seed.duration + "秒：用" + endings.join("、") + "完成收束。",
      ],
      emotionCurve: [
        "注意：" + tagValues(seed, "情绪触发点", hookTypes).join("、"),
        "兴趣：" + corePlay.join("、") + "展开",
        "满足：" + (elements.slice(0, 3).join("、") || "获得成长与经营反馈"),
        "行动：" + endings.join("、"),
      ],
    },
    status: "confirmed",
    statusLabel: "专项素材已入库",
  };
}

function createAdxMaterial(seed: AdxSeed): Material {
  const evidence = (seed.audioTexts || seed.title || "生活模拟玩法展示").replace(/\s+/g, " ").slice(0, 56);
  const media = seed.media.length ? seed.media : ["未知媒体"];
  return {
    id: "TPR-heartopia-adx-" + String(seed.rank).padStart(2, "0"),
    weekId: WEEK_ID,
    adKey: seed.id,
    materialId: seed.id,
    name: seed.gameName,
    recordName: seed.gameName + " / 综合表现 Top " + seed.rank,
    company: seed.publisherName,
    region: "中国大陆",
    platform: media.join("、"),
    channel: media.join("、"),
    launchStage: "长期持续投放素材",
    theme: seed.theme,
    category: seed.category,
    format: seed.audioTexts ? "情境剧情 / 口播" : "玩法展示",
    audience: "偏好治愈生活、自由建造、角色装扮与轻社交的国内用户。",
    hookTypes: seed.audioTexts ? ["情境剧情", "口播"] : ["玩法展示"],
    hookCopy: evidence,
    hookMechanism: "用生活化事件、社交关系或自由创造场景降低广告感，并形成继续观看的信息缺口。",
    firstFrame: "预计以小镇角色或生活场景切入，具体首帧通过视频直链复核。",
    result: "展示自由生活、建造装扮、社交互动或收集经营带来的体验反馈。",
    coreSellingPoint: "在治愈小镇中自由生活和创造，是核心体验承诺。",
    supportingSellingPoints: [
      { sequence: 1, benefit_type: "场景", message: "小镇生活与多样空间提供持续探索目标。" },
      { sequence: 2, benefit_type: "角色美术", message: "角色装扮和个性表达强化代入感。" },
      { sequence: 3, benefit_type: "模拟经营", message: "建造、收集和社交形成长期内容循环。" },
    ],
    character: "有，以玩家角色、居民或社交对象承担剧情和体验展示。",
    voiceover: seed.audioTexts ? "检测到中文音频文本；具体口播与字幕以原视频为准。" : "未获得稳定音频文本，需通过视频复核。",
    gameplay: "围绕小镇生活、角色互动、建造装扮和收集经营展开。",
    fakeGameplay: "主产品ID已核验为心动网络《心动小镇》；具体实机比例待视频复核。",
    visualStyle: ["风格化3D", "明亮", "生活化场景"],
    duration: seed.durationSeconds + " 秒",
    editingPace: seed.durationSeconds <= 30 ? "快节奏生活片段组合。" : "中等节奏，以情境推进和生活反馈组织内容。",
    endCard: "产品识别与下载承接待视频复核。",
    localization: "中文内容；中国大陆媒体投放。",
    productionMethod: "游戏录屏 / 口播与包装混合",
    productionComponents: ["游戏画面", "角色或生活剧情", "口播或字幕", "品牌包装"],
    productionNotes: ["主产品ID88484已核验", "投放数据来自DataEye AdXray", "视频直链为临时地址，失败时使用详情页"],
    dataSource: "DataEye AdXray",
    displayEstimate: seed.exposureNum.toLocaleString("zh-CN") + " 次曝光",
    displayEstimateValue: seed.exposureNum,
    popularity: "综合估值",
    heat: String(Math.round(seed.score * 1000)),
    heatValue: Math.round(seed.score * 1000),
    runDays: seed.materialDays + " 天",
    runDaysValue: seed.materialDays,
    dateRange: seed.materialFirstSeen + " 至 " + seed.materialLastSeen,
    dateStart: seed.materialFirstSeen,
    dateEnd: seed.materialLastSeen,
    platforms: media,
    regions: ["中国大陆"],
    sellingPointPrimary: ["核心玩法", "题材与世界观", "美术"],
    sellingPointSecondary: ["模拟经营", "场景", "角色美术"],
    videoLink: seed.videoUrl,
    originalAdLink: seed.detailUrl,
    videoLinkCollectedAt: "2026-08-31",
    guangdadaDetailLink: null,
    analysisSource: "视频解析草稿",
    scriptAnalysis: {
      summary: "以“" + evidence + "”所代表的生活情境切入，将社交、装扮、建造或收集反馈组织为连续体验，最后承接到小镇长期生活目标。",
      structureAndRhythm: [
        "开头0-3秒：用角色、生活事件或结果画面建立注意。",
        "主体：围绕小镇生活与自由创造展开体验证明。",
        "结尾：以产品识别或下载利益完成行动承接；精确时间点待视频复核。",
      ],
      emotionCurve: ["注意：生活化事件建立好奇", "兴趣：自由创造与社交展开", "满足：装扮、建造或收集反馈", "行动：进入小镇继续体验"],
    },
    status: "pending_video",
    statusLabel: "投放数据已核验 / 待视频复核",
  };
}

const gddMaterials = gddSeeds.map(createGddMaterial);
const adxMaterials = adxSeeds.map(createAdxMaterial);

export const twoProductResearchGroups: TwoProductResearchGroup[] = [
  {
    id: "cookie-gdd",
    name: "姜饼人王国（广大大）",
    targetCount: 20,
    qualificationNote: "广大大：投放>30天、展现>200K、持续至2026年7—8月，按热度排序并智能去重。",
    materials: gddMaterials.filter((material) => material.name === "姜饼人王国（广大大）"),
  },
  {
    id: "heartopia-gdd",
    name: "心动小镇（广大大）",
    targetCount: 20,
    qualificationNote: "广大大：投放>30天、展现>200K、持续至2026年7—8月，按热度排序并智能去重。",
    materials: gddMaterials.filter((material) => material.name === "心动小镇（广大大）"),
  },
  {
    id: "heartopia-adx",
    name: "心动小镇（ADXray）",
    targetCount: 20,
    qualificationNote: "ADXray：主产品匹配、曝光>100万、投放>30天、持续至2026年7—8月。",
    materials: adxMaterials,
  },
];

export const twoProductResearchMaterials = twoProductResearchGroups.flatMap((group) => group.materials);

