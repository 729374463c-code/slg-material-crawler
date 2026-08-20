import type { Material } from "./material";

export type SevenGameResearchGroup = {
  id: string;
  name: string;
  targetCount: number;
  qualificationNote: string;
  materials: Material[];
};

type ResearchSeed = {
  gameId: string;
  gameName: string;
  rank: number;
  company: string;
  advertiserName: string;
  category: string;
  theme: string;
  adKey: string;
  materialId: string;
  platformCode: string;
  platformName: string;
  impression: number;
  heat: number;
  days: number;
  firstSeen: number;
  lastSeen: number;
  regions: string[];
  language: string;
  duration: number;
  video: string;
  createdAt: number;
  searchFlag: number;
  copy: string;
  tags: Record<string, string[]>;
};

const WEEK_ID = "gdd-seven-games-2026-08";

const requestedGames = [
  {
    "id": "gear",
    "name": "Gear Defenders"
  },
  {
    "id": "nte",
    "name": "NTE: Neverness to Everness"
  },
  {
    "id": "critters",
    "name": "Clash of Critters"
  },
  {
    "id": "dragon",
    "name": "Dragon Traveler"
  },
  {
    "id": "chaos",
    "name": "Chaos Zero Nightmare"
  }
] as const;

const seeds: ResearchSeed[] = [
  {
    "gameId": "gear",
    "gameName": "Gear Defenders",
    "rank": 1,
    "company": "逸立 吴",
    "advertiserName": "Gear Defenders",
    "category": "塔防 / 轻度策略",
    "theme": "卡通奇幻 / 齿轮机械",
    "adKey": "397dcc696ed5ead4b7ff209a8ea6160e",
    "materialId": "9f69eb65b7a77f8af8db9b33512e56de",
    "platformCode": "youtube",
    "platformName": "YouTube",
    "impression": 24810866,
    "heat": 1000,
    "days": 150,
    "firstSeen": 1770363018,
    "lastSeen": 1783225341,
    "regions": [
      "意大利",
      "荷兰",
      "卢森堡",
      "爱尔兰",
      "奥地利",
      "比利时",
      "澳大利亚",
      "美国",
      "英国",
      "加拿大",
      "丹麦",
      "法国",
      "德国"
    ],
    "language": "未标注语言",
    "duration": 32,
    "video": "https://sp2cdn-idea-global.zingfront.com/sp_opera/dfacb5fd15aa7e2372807291c5f57fee.mp4",
    "createdAt": 1783225622,
    "searchFlag": 145459,
    "copy": "",
    "tags": {
      "营销卖点": [
        "无明确卖点"
      ],
      "结尾引导": [
        "品牌/LOGO收尾"
      ],
      "核心玩法": [
        "数值成长",
        "齿轮合成"
      ],
      "开头钩子": [
        "无独立hook"
      ],
      "色彩调性-主色系": [
        "暖色系"
      ],
      "美术风格": [
        "2D卡通"
      ],
      "视频主题": [
        "玩法展示",
        "数值成长"
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
        "关卡战斗",
        "士兵生成",
        "金币数值",
        "齿轮合成"
      ],
      "情绪触发点": [
        "数值飙升"
      ],
      "视觉特效程度": [
        "强特效"
      ]
    }
  },
  {
    "gameId": "gear",
    "gameName": "Gear Defenders",
    "rank": 2,
    "company": "MOBIBRAIN TECHNOLOGY PTE. LTD.",
    "advertiserName": "Gear Defenders",
    "category": "塔防 / 轻度策略",
    "theme": "卡通奇幻 / 齿轮机械",
    "adKey": "137e763d352918501c9a1d61b0a9785a",
    "materialId": "209e06912d1dbe8a225b4edfe5707d1e",
    "platformCode": "youtube",
    "platformName": "YouTube",
    "impression": 4439017,
    "heat": 1000,
    "days": 305,
    "firstSeen": 1760592072,
    "lastSeen": 1786896877,
    "regions": [
      "美国"
    ],
    "language": "未标注语言",
    "duration": 41,
    "video": "https://sp2cdn-idea-global.zingfront.com/sp_opera/6d2a83a181d9d04a07ca7d77528f75e1.mp4",
    "createdAt": 1764843231,
    "searchFlag": 145359,
    "copy": "",
    "tags": {
      "内容题材": [
        "卡通战场"
      ],
      "核心玩法": [
        "塔防",
        "策略",
        "资源收集"
      ],
      "开头钩子": [
        "直接卖点抛出"
      ],
      "游戏元素": [
        "塔防",
        "战斗单位",
        "角色升级"
      ],
      "玩家动机": [
        "成就进步",
        "技巧挑战"
      ],
      "视频类型": [
        "其他"
      ]
    }
  },
  {
    "gameId": "gear",
    "gameName": "Gear Defenders",
    "rank": 3,
    "company": "MOBIBRAIN TECHNOLOGY PTE. LTD.",
    "advertiserName": "Gear Defenders",
    "category": "塔防 / 轻度策略",
    "theme": "卡通奇幻 / 齿轮机械",
    "adKey": "aea8f19c6134be75120196af47307a99",
    "materialId": "ee6f3611e5a4a9e98793813a472c7e9b",
    "platformCode": "youtube",
    "platformName": "YouTube",
    "impression": 2744959,
    "heat": 1000,
    "days": 172,
    "firstSeen": 1772134839,
    "lastSeen": 1786896877,
    "regions": [
      "西班牙",
      "爱尔兰",
      "瑞典",
      "意大利",
      "瑞士",
      "斯洛文尼亚",
      "葡萄牙",
      "奥地利",
      "德国",
      "罗马尼亚",
      "荷兰",
      "匈牙利",
      "卢森堡",
      "芬兰",
      "挪威",
      "波兰",
      "比利时",
      "法国",
      "丹麦",
      "希腊"
    ],
    "language": "英语",
    "duration": 52,
    "video": "https://sp2cdn-idea-global.zingfront.com/sp_opera/3f8e2e88ca5bc1b0d17614cb2114ab0e.mp4",
    "createdAt": 1766073308,
    "searchFlag": 145359,
    "copy": "Build Your Tactical Fortress, One Gear at a Time!",
    "tags": {
      "内容题材": [
        "森林战场"
      ],
      "核心玩法": [
        "塔防",
        "策略"
      ],
      "开头钩子": [
        "强冲突/矛盾开场"
      ],
      "游戏元素": [
        "塔防战斗",
        "敌人波次",
        "角色升级"
      ],
      "情绪触发点": [
        "Boss登场"
      ],
      "玩家动机": [
        "技巧挑战"
      ],
      "视频类型": [
        "其他"
      ]
    }
  },
  {
    "gameId": "gear",
    "gameName": "Gear Defenders",
    "rank": 4,
    "company": "MOBIBRAIN TECHNOLOGY PTE. LTD.",
    "advertiserName": "Gear Defenders",
    "category": "塔防 / 轻度策略",
    "theme": "卡通奇幻 / 齿轮机械",
    "adKey": "5e2a9583c2e304d33f72b10f738dcde0",
    "materialId": "3f4f0300b71c620e314ff722386ce8b6",
    "platformCode": "youtube",
    "platformName": "YouTube",
    "impression": 209026,
    "heat": 1000,
    "days": 244,
    "firstSeen": 1764848768,
    "lastSeen": 1785830024,
    "regions": [
      "意大利",
      "比利时",
      "波兰"
    ],
    "language": "英语",
    "duration": 57,
    "video": "https://sp2cdn-idea-global.zingfront.com/sp_opera/cf12beada2b8b9167d0ad8b079278983.mp4",
    "createdAt": 1772719724,
    "searchFlag": 145458,
    "copy": "Build Your Tactical Fortress, One Gear at a Time!",
    "tags": {
      "内容题材": [
        "无法判断"
      ],
      "开头钩子": [
        "真人强情绪",
        "反转反差"
      ],
      "游戏元素": [
        "传奇装备",
        "士兵召唤",
        "战力数值",
        "角色等级"
      ],
      "玩家动机": [
        "掌控力量",
        "成就进步"
      ],
      "美术风格": [
        "2D卡通"
      ],
      "视频类型": [
        "真人剧情短剧"
      ],
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
        "真人",
        "游戏角色"
      ],
      "主要场景": [
        "手机游戏界面",
        "飞机客舱"
      ],
      "营销卖点": [
        "快速变强"
      ]
    }
  },
  {
    "gameId": "gear",
    "gameName": "Gear Defenders",
    "rank": 5,
    "company": "MOBIBRAIN TECHNOLOGY PTE. LTD.",
    "advertiserName": "Gear Defenders",
    "category": "塔防 / 轻度策略",
    "theme": "卡通奇幻 / 齿轮机械",
    "adKey": "469418ff1d925c53ed2a5b0a78ed569c",
    "materialId": "8096e8485a184c1022948d0e1359a557",
    "platformCode": "admob",
    "platformName": "Admob",
    "impression": 5676566,
    "heat": 999,
    "days": 250,
    "firstSeen": 1765449829,
    "lastSeen": 1786928355,
    "regions": [
      "孟加拉国",
      "英国",
      "美国",
      "西班牙",
      "卡塔尔",
      "加拿大",
      "瑞士",
      "日本",
      "韩国",
      "摩洛哥",
      "德国",
      "巴西",
      "土耳其",
      "哈萨克斯坦",
      "俄罗斯联邦",
      "阿塞拜疆",
      "南非",
      "智利",
      "瑞典",
      "中国香港",
      "波兰",
      "印度尼西亚",
      "越南",
      "澳大利亚",
      "新西兰",
      "爱尔兰",
      "哥伦比亚",
      "马来西亚",
      "墨西哥",
      "巴基斯坦",
      "ARM",
      "印度",
      "法国",
      "中国台湾"
    ],
    "language": "英语",
    "duration": 32,
    "video": "https://sp2cdn-idea-global.zingfront.com/sp_opera/e6821cb9d129e0ad121d7daa97a59479.mp4",
    "createdAt": 1761016520,
    "searchFlag": 145359,
    "copy": "Gear Defenders",
    "tags": {
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
        "关卡选择界面",
        "战场",
        "游戏主界面"
      ],
      "视频类型": [
        "游戏录屏"
      ],
      "营销卖点": [
        "无明确卖点"
      ],
      "结尾引导": [
        "品牌/LOGO收尾"
      ],
      "核心玩法": [
        "数值成长",
        "齿轮合成"
      ],
      "开头钩子": [
        "无独立hook"
      ],
      "视频主题": [
        "玩法展示",
        "数值成长"
      ],
      "内容题材": [
        "中世纪"
      ],
      "游戏元素": [
        "关卡选择"
      ]
    }
  },
  {
    "gameId": "gear",
    "gameName": "Gear Defenders",
    "rank": 6,
    "company": "MOBIBRAIN TECHNOLOGY PTE. LTD.",
    "advertiserName": "Gear Defenders",
    "category": "塔防 / 轻度策略",
    "theme": "卡通奇幻 / 齿轮机械",
    "adKey": "e897462a2b103026d5f411edf105e6c8",
    "materialId": "f89ef34fe12d03dfede4ffdd85e8d744",
    "platformCode": "admob",
    "platformName": "Admob",
    "impression": 5370778,
    "heat": 999,
    "days": 306,
    "firstSeen": 1760592072,
    "lastSeen": 1786931513,
    "regions": [
      "柬埔寨",
      "泰国",
      "沙特阿拉伯",
      "美国",
      "菲律宾",
      "埃及",
      "土耳其",
      "巴基斯坦",
      "中国香港",
      "黎巴嫩",
      "以色列",
      "德国",
      "越南",
      "科威特",
      "新加坡",
      "澳大利亚",
      "哈萨克斯坦",
      "马来西亚",
      "印度尼西亚",
      "阿联酋",
      "卡塔尔"
    ],
    "language": "英语",
    "duration": 51,
    "video": "https://sp2cdn-idea-global.zingfront.com/sp_opera/ea6a1415b294adb7e03120d1f5be9f93.mp4",
    "createdAt": 1770025327,
    "searchFlag": 145458,
    "copy": "Gear Defenders",
    "tags": {
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
        "2D卡通"
      ],
      "色彩调性-明暗度": [
        "明亮"
      ],
      "角色类型": [
        "敌人/怪物",
        "真人",
        "游戏角色"
      ],
      "主要场景": [
        "战术战场",
        "户外草地",
        "游戏主界面"
      ],
      "视频类型": [
        "恶搞混剪/鬼畜风"
      ],
      "营销卖点": [
        "轻松上手"
      ],
      "结尾引导": [
        "品牌/LOGO收尾"
      ],
      "核心玩法": [
        "齿轮合成"
      ],
      "开头钩子": [
        "真人强情绪",
        "反转反差"
      ],
      "视频主题": [
        "玩法展示",
        "数值成长"
      ],
      "内容题材": [
        "卡通奇幻"
      ]
    }
  },
  {
    "gameId": "gear",
    "gameName": "Gear Defenders",
    "rank": 7,
    "company": "MOBIBRAIN TECHNOLOGY PTE. LTD.",
    "advertiserName": "Gear Defenders",
    "category": "塔防 / 轻度策略",
    "theme": "卡通奇幻 / 齿轮机械",
    "adKey": "dbb97876262f9ebeec0f2fe155f8e21a",
    "materialId": "ff5fef4584fb7680596e8b518163c05f",
    "platformCode": "unity_ads",
    "platformName": "UnityAds",
    "impression": 3643177,
    "heat": 999,
    "days": 299,
    "firstSeen": 1761255328,
    "lastSeen": 1786993448,
    "regions": [
      "加拿大",
      "美国"
    ],
    "language": "未标注语言",
    "duration": 32,
    "video": "https://sp2cdn-idea-global.zingfront.com/sp_opera/ff4ed72207896c2c194f384361478928.mp4",
    "createdAt": 1761255353,
    "searchFlag": 145359,
    "copy": "",
    "tags": {
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
        "战场",
        "游戏主界面"
      ],
      "视频类型": [
        "游戏录屏"
      ],
      "营销卖点": [
        "无明确卖点"
      ],
      "结尾引导": [
        "品牌/LOGO收尾"
      ],
      "核心玩法": [
        "齿轮合成"
      ],
      "开头钩子": [
        "无独立hook"
      ],
      "视频主题": [
        "玩法展示",
        "数值成长"
      ],
      "内容题材": [
        "中世纪"
      ],
      "游戏元素": [
        "战斗结算",
        "等级提升",
        "齿轮系统"
      ]
    }
  },
  {
    "gameId": "gear",
    "gameName": "Gear Defenders",
    "rank": 8,
    "company": "MOBIBRAIN TECHNOLOGY PTE. LTD.",
    "advertiserName": "Gear Defenders",
    "category": "塔防 / 轻度策略",
    "theme": "卡通奇幻 / 齿轮机械",
    "adKey": "f3961253463bc958436ae2bf346899ef",
    "materialId": "6f93c1202169ef4c2a3768f986f85f53",
    "platformCode": "unity_ads",
    "platformName": "UnityAds",
    "impression": 3532936,
    "heat": 999,
    "days": 292,
    "firstSeen": 1761848221,
    "lastSeen": 1786997119,
    "regions": [
      "德国",
      "美国"
    ],
    "language": "未标注语言",
    "duration": 41,
    "video": "https://sp2cdn-idea-global.zingfront.com/sp_opera/0e13c0c9d52647e41f2390d166f0411c.mp4",
    "createdAt": 1761848244,
    "searchFlag": 145359,
    "copy": "",
    "tags": {
      "色彩调性-整体饱和度": [
        "高饱和"
      ],
      "色彩调性-主色系": [
        "暖色系"
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
        "战场"
      ],
      "视频类型": [
        "游戏录屏"
      ],
      "营销卖点": [
        "无明确卖点"
      ],
      "结尾引导": [
        "品牌/LOGO收尾"
      ],
      "核心玩法": [
        "单位部署",
        "自动战斗"
      ],
      "开头钩子": [
        "无独立hook"
      ],
      "视频主题": [
        "玩法展示",
        "数值成长"
      ],
      "内容题材": [
        "中世纪"
      ],
      "游戏元素": [
        "单位升级",
        "胜利奖励",
        "金币数值"
      ]
    }
  },
  {
    "gameId": "gear",
    "gameName": "Gear Defenders",
    "rank": 9,
    "company": "MOBIBRAIN TECHNOLOGY PTE. LTD.",
    "advertiserName": "Gear Defenders",
    "category": "塔防 / 轻度策略",
    "theme": "卡通奇幻 / 齿轮机械",
    "adKey": "51ad624a9cf64d29127d3f9e4ff02917",
    "materialId": "31296658e61393d28b18ba422ca2a6bf",
    "platformCode": "unity_ads",
    "platformName": "UnityAds",
    "impression": 3532936,
    "heat": 999,
    "days": 292,
    "firstSeen": 1761848221,
    "lastSeen": 1786997119,
    "regions": [
      "德国",
      "美国"
    ],
    "language": "未标注语言",
    "duration": 41,
    "video": "https://sp2cdn-idea-global.zingfront.com/sp_opera/5c372d6c9c1cbccb51438fc77b12170c.mp4",
    "createdAt": 1761848233,
    "searchFlag": 145359,
    "copy": "",
    "tags": {
      "内容题材": [
        "塔防"
      ],
      "核心玩法": [
        "放置",
        "策略",
        "资源收集"
      ],
      "开头钩子": [
        "直接卖点抛出"
      ],
      "游戏元素": [
        "战斗系统",
        "角色升级"
      ],
      "玩家动机": [
        "成就进步",
        "探索好奇"
      ],
      "美术风格": [
        "2D卡通"
      ],
      "视频类型": [
        "其他"
      ]
    }
  },
  {
    "gameId": "gear",
    "gameName": "Gear Defenders",
    "rank": 10,
    "company": "MOBIBRAIN TECHNOLOGY PTE. LTD.",
    "advertiserName": "Gear Defenders",
    "category": "塔防 / 轻度策略",
    "theme": "卡通奇幻 / 齿轮机械",
    "adKey": "873ccd0b685738a91e5a68c5c5740976",
    "materialId": "39ab009b4f82ae7c70541c7a9d5219b3",
    "platformCode": "unity_ads",
    "platformName": "UnityAds",
    "impression": 3470303,
    "heat": 999,
    "days": 290,
    "firstSeen": 1761769439,
    "lastSeen": 1786728606,
    "regions": [
      "墨西哥",
      "美国"
    ],
    "language": "未标注语言",
    "duration": 41,
    "video": "https://sp2cdn-idea-global.zingfront.com/sp_opera/e10a2218963887bec7ccecc949a2441f.webm",
    "createdAt": 1761769512,
    "searchFlag": 145359,
    "copy": "",
    "tags": {
      "内容题材": [
        "中世纪"
      ],
      "核心玩法": [
        "齿轮合成"
      ],
      "开头钩子": [
        "无独立hook"
      ],
      "游戏元素": [
        "单位生产",
        "战斗关卡",
        "经验值",
        "金币奖励",
        "齿轮合成"
      ],
      "玩家动机": [
        "成就进步",
        "掌控力量"
      ],
      "美术风格": [
        "2D卡通"
      ],
      "视频类型": [
        "游戏录屏"
      ],
      "营销卖点": [
        "无明确卖点"
      ],
      "结尾引导": [
        "胜利爽点定格",
        "品牌/LOGO收尾"
      ],
      "色彩调性-主色系": [
        "暖色系"
      ],
      "视频主题": [
        "玩法展示",
        "数值成长"
      ],
      "色彩调性-明暗度": [
        "明亮"
      ],
      "角色类型": [
        "敌人/怪物"
      ]
    }
  },
  {
    "gameId": "gear",
    "gameName": "Gear Defenders",
    "rank": 11,
    "company": "MOBIBRAIN TECHNOLOGY PTE. LTD.",
    "advertiserName": "Gear Defenders",
    "category": "塔防 / 轻度策略",
    "theme": "卡通奇幻 / 齿轮机械",
    "adKey": "934e8d944d42648dca1093a53f385284",
    "materialId": "60b401335e0ca2d5ec4237def242cab4",
    "platformCode": "unity_ads",
    "platformName": "UnityAds",
    "impression": 3470303,
    "heat": 999,
    "days": 290,
    "firstSeen": 1761769438,
    "lastSeen": 1786728606,
    "regions": [
      "美国",
      "墨西哥"
    ],
    "language": "未标注语言",
    "duration": 41,
    "video": "https://sp2cdn-idea-global.zingfront.com/sp_opera/3edd9840e985e95fd9c87f8b46386b17.webm",
    "createdAt": 1761769463,
    "searchFlag": 145359,
    "copy": "",
    "tags": {
      "色彩调性-整体饱和度": [
        "高饱和"
      ],
      "色彩调性-主色系": [
        "暖色系"
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
        "战场",
        "游戏主界面",
        "游戏基地"
      ],
      "视频类型": [
        "游戏录屏"
      ],
      "营销卖点": [
        "无明确卖点"
      ],
      "结尾引导": [
        "胜利爽点定格"
      ],
      "核心玩法": [
        "单位部署",
        "数值成长"
      ],
      "开头钩子": [
        "无独立hook"
      ],
      "视频主题": [
        "玩法展示",
        "数值成长"
      ],
      "内容题材": [
        "卡通奇幻"
      ],
      "游戏元素": [
        "单位升级"
      ]
    }
  },
  {
    "gameId": "gear",
    "gameName": "Gear Defenders",
    "rank": 12,
    "company": "MOBIBRAIN TECHNOLOGY PTE. LTD.",
    "advertiserName": "Gear Defenders",
    "category": "塔防 / 轻度策略",
    "theme": "卡通奇幻 / 齿轮机械",
    "adKey": "ae3f477952f0aad29dfd838484ec4363",
    "materialId": "42d8436f69567b28a2d5f94977d293f5",
    "platformCode": "youtube",
    "platformName": "YouTube",
    "impression": 3327688,
    "heat": 999,
    "days": 272,
    "firstSeen": 1763570719,
    "lastSeen": 1786937601,
    "regions": [
      "法国",
      "美国"
    ],
    "language": "英语",
    "duration": 52,
    "video": "https://sp2cdn-idea-global.zingfront.com/sp_opera/1b22b9c26fd495f060c3e121b2923dc1.mp4",
    "createdAt": 1762269171,
    "searchFlag": 145359,
    "copy": "Build Your Tactical Fortress, One Gear at a Time!",
    "tags": {
      "内容题材": [
        "冒险战斗"
      ],
      "核心玩法": [
        "塔防",
        "放置",
        "策略"
      ],
      "开头钩子": [
        "强冲突/矛盾开场"
      ],
      "游戏元素": [
        "BOSS战",
        "塔防战斗",
        "技能释放",
        "敌人波次",
        "角色部署"
      ],
      "玩家动机": [
        "成就进步",
        "技巧挑战"
      ],
      "美术风格": [
        "2D卡通"
      ],
      "视频类型": [
        "其他"
      ]
    }
  },
  {
    "gameId": "gear",
    "gameName": "Gear Defenders",
    "rank": 13,
    "company": "MOBIBRAIN TECHNOLOGY PTE. LTD.",
    "advertiserName": "Gear Defenders",
    "category": "塔防 / 轻度策略",
    "theme": "卡通奇幻 / 齿轮机械",
    "adKey": "1f501fc43cefc7c788b38f0b30165b06",
    "materialId": "091e1c34452030060094e3ea6fa62ddc",
    "platformCode": "youtube",
    "platformName": "YouTube",
    "impression": 3150273,
    "heat": 999,
    "days": 274,
    "firstSeen": 1763388309,
    "lastSeen": 1786972547,
    "regions": [
      "日本"
    ],
    "language": "未标注语言",
    "duration": 41,
    "video": "https://sp2cdn-idea-global.zingfront.com/sp_opera/b6d55cc84cf53a09d29b76c342821754.mp4",
    "createdAt": 1764843291,
    "searchFlag": 145359,
    "copy": "",
    "tags": {
      "内容题材": [
        "奇幻战场"
      ],
      "核心玩法": [
        "塔防",
        "策略"
      ],
      "开头钩子": [
        "直接卖点抛出"
      ],
      "游戏元素": [
        "战斗系统",
        "角色升级",
        "资源收集",
        "防御塔"
      ],
      "玩家动机": [
        "成就进步",
        "技巧挑战"
      ],
      "视频类型": [
        "其他"
      ]
    }
  },
  {
    "gameId": "gear",
    "gameName": "Gear Defenders",
    "rank": 14,
    "company": "逸立 吴",
    "advertiserName": "Gear Defenders",
    "category": "塔防 / 轻度策略",
    "theme": "卡通奇幻 / 齿轮机械",
    "adKey": "d89679e0dfef99db8a7f005b3fe4e5ae",
    "materialId": "41cbc63036706061dce5ea4057e67a82",
    "platformCode": "mobvista",
    "platformName": "Mintegral（Mobvista）",
    "impression": 3091165,
    "heat": 999,
    "days": 257,
    "firstSeen": 1764756577,
    "lastSeen": 1786902255,
    "regions": [
      "全球"
    ],
    "language": "英语",
    "duration": 58,
    "video": "https://sp2cdn-idea-global.zingfront.com/sp_opera/9c5093b876cfdc163ff5f4cc85b0d057.mp4",
    "createdAt": 1764756671,
    "searchFlag": 145359,
    "copy": "Gear Defenders / Defend gears, build, repel monsters, u......",
    "tags": {
      "内容题材": [
        "奇幻世界"
      ],
      "核心玩法": [
        "塔防",
        "建造",
        "战斗",
        "策略"
      ],
      "开头钩子": [
        "强冲突/矛盾开场"
      ],
      "游戏元素": [
        "怪物",
        "战斗系统",
        "角色属性",
        "防御塔",
        "齿轮"
      ],
      "玩家动机": [
        "成就进步",
        "技巧挑战"
      ],
      "视频类型": [
        "其他"
      ]
    }
  },
  {
    "gameId": "gear",
    "gameName": "Gear Defenders",
    "rank": 15,
    "company": "MOBIBRAIN TECHNOLOGY PTE. LTD.",
    "advertiserName": "Gear Defenders",
    "category": "塔防 / 轻度策略",
    "theme": "卡通奇幻 / 齿轮机械",
    "adKey": "cf249bc79df7e32661214e96a5f1b1e9",
    "materialId": "80faf9bdb204c663fc87eaa82e7fa876",
    "platformCode": "unity_ads",
    "platformName": "UnityAds",
    "impression": 3068338,
    "heat": 999,
    "days": 256,
    "firstSeen": 1764924068,
    "lastSeen": 1786983562,
    "regions": [
      "西班牙",
      "泰国"
    ],
    "language": "未标注语言",
    "duration": 57,
    "video": "https://sp2cdn-idea-global.zingfront.com/sp_opera/62b7765c10b3760fa204a2331ef53c20.mp4",
    "createdAt": 1764924110,
    "searchFlag": 145359,
    "copy": "",
    "tags": {
      "内容题材": [
        "健身房"
      ],
      "核心玩法": [
        "塔防",
        "策略"
      ],
      "开头钩子": [
        "强冲突/矛盾开场"
      ],
      "游戏元素": [
        "角色升级",
        "金币收集"
      ],
      "玩家动机": [
        "成就进步",
        "技巧挑战"
      ],
      "美术风格": [
        "真人拍摄"
      ],
      "视频类型": [
        "真人剧情短剧"
      ]
    }
  },
  {
    "gameId": "gear",
    "gameName": "Gear Defenders",
    "rank": 16,
    "company": "MOBIBRAIN TECHNOLOGY PTE. LTD.",
    "advertiserName": "Gear Defenders",
    "category": "塔防 / 轻度策略",
    "theme": "卡通奇幻 / 齿轮机械",
    "adKey": "e1f1fecfe0ed6a7a7cdca8bfc9585114",
    "materialId": "bb17b2e93367525c73e5af4db3dea656",
    "platformCode": "unity_ads",
    "platformName": "UnityAds",
    "impression": 3068338,
    "heat": 999,
    "days": 256,
    "firstSeen": 1764924068,
    "lastSeen": 1786983797,
    "regions": [
      "泰国",
      "西班牙"
    ],
    "language": "未标注语言",
    "duration": 57,
    "video": "https://sp2cdn-idea-global.zingfront.com/sp_opera/67364d430613d2054ab802277c36794f.mp4",
    "createdAt": 1764924102,
    "searchFlag": 145359,
    "copy": "",
    "tags": {
      "内容题材": [
        "奇幻世界"
      ],
      "核心玩法": [
        "塔防",
        "策略",
        "资源收集"
      ],
      "开头钩子": [
        "极限数值/爽点展示"
      ],
      "游戏元素": [
        "建筑升级",
        "武器展示",
        "角色成长"
      ],
      "玩家动机": [
        "成就进步",
        "技巧挑战"
      ],
      "美术风格": [
        "真人拍摄"
      ],
      "视频类型": [
        "真人口播"
      ]
    }
  },
  {
    "gameId": "gear",
    "gameName": "Gear Defenders",
    "rank": 17,
    "company": "MOBIBRAIN TECHNOLOGY PTE. LTD.",
    "advertiserName": "Gear Defenders",
    "category": "塔防 / 轻度策略",
    "theme": "卡通奇幻 / 齿轮机械",
    "adKey": "15f1d64e9321764fb2fbf895661fd046",
    "materialId": "459254ad777b1cd47231f1b61f48a2fb",
    "platformCode": "unity_ads",
    "platformName": "UnityAds",
    "impression": 3025764,
    "heat": 999,
    "days": 254,
    "firstSeen": 1765149414,
    "lastSeen": 1786990109,
    "regions": [
      "美国",
      "巴西"
    ],
    "language": "未标注语言",
    "duration": 57,
    "video": "https://sp2cdn-idea-global.zingfront.com/sp_opera/3ad164109f421d86f9028aefbc3ce8cb.webm",
    "createdAt": 1765149442,
    "searchFlag": 145359,
    "copy": "",
    "tags": {
      "内容题材": [
        "中世纪奇幻"
      ],
      "核心玩法": [
        "数值成长",
        "齿轮合成"
      ],
      "开头钩子": [
        "真人强情绪",
        "反转反差"
      ],
      "游戏元素": [
        "军队部署",
        "战斗关卡",
        "角色等级",
        "齿轮合成"
      ],
      "玩家动机": [
        "成就进步",
        "掌控力量"
      ],
      "美术风格": [
        "2D卡通"
      ],
      "视频类型": [
        "真人剧情短剧"
      ],
      "营销卖点": [
        "快速变强"
      ],
      "结尾引导": [
        "品牌/LOGO收尾"
      ],
      "色彩调性-主色系": [
        "暖色系"
      ],
      "视频主题": [
        "数值成长",
        "玩法展示"
      ],
      "色彩调性-明暗度": [
        "明亮"
      ],
      "角色类型": [
        "敌人/怪物"
      ]
    }
  },
  {
    "gameId": "gear",
    "gameName": "Gear Defenders",
    "rank": 18,
    "company": "MOBIBRAIN TECHNOLOGY PTE. LTD.",
    "advertiserName": "Gear Defenders",
    "category": "塔防 / 轻度策略",
    "theme": "卡通奇幻 / 齿轮机械",
    "adKey": "14de46cf4787a8a14c4402f051435a3a",
    "materialId": "86313836f6eb10e86ac110391ab2220e",
    "platformCode": "unity_ads",
    "platformName": "UnityAds",
    "impression": 3025764,
    "heat": 999,
    "days": 254,
    "firstSeen": 1765149413,
    "lastSeen": 1786990109,
    "regions": [
      "巴西",
      "美国"
    ],
    "language": "未标注语言",
    "duration": 57,
    "video": "https://sp2cdn-idea-global.zingfront.com/sp_opera/5ee9f792547b17e6d922b1c72ad94b42.webm",
    "createdAt": 1765149440,
    "searchFlag": 145359,
    "copy": "",
    "tags": {
      "内容题材": [
        "奇幻"
      ],
      "核心玩法": [
        "军队建设",
        "齿轮合成"
      ],
      "开头钩子": [
        "真人强情绪",
        "反转反差"
      ],
      "游戏元素": [
        "关卡选择",
        "士兵招募",
        "战斗结算奖励",
        "齿轮合成"
      ],
      "玩家动机": [
        "成就进步",
        "掌控力量"
      ],
      "美术风格": [
        "2D卡通"
      ],
      "视频类型": [
        "真人口播"
      ],
      "营销卖点": [
        "快速变强"
      ],
      "结尾引导": [
        "胜利爽点定格"
      ],
      "色彩调性-主色系": [
        "多彩/彩色"
      ],
      "视频主题": [
        "数值成长",
        "玩法展示"
      ],
      "色彩调性-明暗度": [
        "明亮"
      ],
      "角色类型": [
        "敌人/怪物"
      ]
    }
  },
  {
    "gameId": "gear",
    "gameName": "Gear Defenders",
    "rank": 19,
    "company": "MOBIBRAIN TECHNOLOGY PTE. LTD.",
    "advertiserName": "Gear Defenders",
    "category": "塔防 / 轻度策略",
    "theme": "卡通奇幻 / 齿轮机械",
    "adKey": "ee4ad5d2af3d7041c62499740bbbe861",
    "materialId": "dd968fcad11ca52b0a996c68011f09b6",
    "platformCode": "applovin",
    "platformName": "AppLovin",
    "impression": 3019211,
    "heat": 999,
    "days": 253,
    "firstSeen": 1765190278,
    "lastSeen": 1787009402,
    "regions": [
      "英国",
      "瑞士",
      "韩国",
      "美国",
      "芬兰",
      "瑞典"
    ],
    "language": "未标注语言",
    "duration": 58,
    "video": "https://sp2cdn-idea-global.zingfront.com/sp_opera/20e72dd26ce5ec090f0d93e9bfdccb7e.mp4",
    "createdAt": 1765190298,
    "searchFlag": 145359,
    "copy": "",
    "tags": {
      "内容题材": [
        "战斗场景"
      ],
      "核心玩法": [
        "塔防",
        "策略",
        "资源分配"
      ],
      "开头钩子": [
        "操作挑战/智力难题"
      ],
      "游戏元素": [
        "塔防",
        "敌人进攻",
        "角色部署"
      ],
      "玩家动机": [
        "成就进步",
        "技巧挑战"
      ],
      "视频类型": [
        "其他"
      ]
    }
  },
  {
    "gameId": "gear",
    "gameName": "Gear Defenders",
    "rank": 20,
    "company": "MOBIBRAIN TECHNOLOGY PTE. LTD.",
    "advertiserName": "Gear Defenders",
    "category": "塔防 / 轻度策略",
    "theme": "卡通奇幻 / 齿轮机械",
    "adKey": "5146e4a06d73f6d0da43069b398e6992",
    "materialId": "1f5abc60073a5ba1474576b2b5c17712",
    "platformCode": "youtube",
    "platformName": "YouTube",
    "impression": 3005332,
    "heat": 999,
    "days": 274,
    "firstSeen": 1763386663,
    "lastSeen": 1786945417,
    "regions": [
      "韩国"
    ],
    "language": "未标注语言",
    "duration": 59,
    "video": "https://sp2cdn-idea-global.zingfront.com/sp_opera/b64a2bb238743d5dfe52bd95a616bd19.mp4",
    "createdAt": 1765362379,
    "searchFlag": 145359,
    "copy": "",
    "tags": {
      "内容题材": [
        "奇幻世界"
      ],
      "核心玩法": [
        "塔防",
        "策略",
        "资源收集"
      ],
      "开头钩子": [
        "直接卖点抛出"
      ],
      "游戏元素": [
        "军队建设",
        "建筑升级",
        "武器展示"
      ],
      "玩家动机": [
        "成就进步",
        "技巧挑战"
      ],
      "视频类型": [
        "其他"
      ]
    }
  },
  {
    "gameId": "nte",
    "gameName": "NTE: Neverness to Everness",
    "rank": 1,
    "company": "N2E",
    "advertiserName": "NTE: Neverness to Everness",
    "category": "都市开放世界 RPG",
    "theme": "都市异能 / 二次元开放世界",
    "adKey": "515aa04412e9cde6995a31c2174d4429",
    "materialId": "ea3de0afd58137664796bace22e70cff",
    "platformCode": "youtube",
    "platformName": "YouTube",
    "impression": 15932632,
    "heat": 1000,
    "days": 99,
    "firstSeen": 1775752135,
    "lastSeen": 1784190727,
    "regions": [
      "加拿大",
      "美国"
    ],
    "language": "未标注语言",
    "duration": 31,
    "video": "https://sp2cdn-idea-global.zingfront.com/sp_opera/bf461dc35d031fac0dfb50cfb018829c.mp4",
    "createdAt": 1775752311,
    "searchFlag": 145458,
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
        "写实3D"
      ],
      "色彩调性-明暗度": [
        "明亮"
      ],
      "角色类型": [
        "游戏角色"
      ],
      "主要场景": [
        "城市街道",
        "樱花庭院",
        "高架桥"
      ],
      "视频类型": [
        "游戏录屏"
      ],
      "营销卖点": [
        "高品质感"
      ],
      "视频主题": [
        "玩法展示",
        "角色展示"
      ],
      "游戏元素": [
        "角色互动",
        "载具"
      ],
      "情绪触发点": [
        "视觉异常/违和感",
        "高吸引力人物"
      ],
      "玩家动机": [
        "探索好奇",
        "放松逃离"
      ]
    }
  },
  {
    "gameId": "nte",
    "gameName": "NTE: Neverness to Everness",
    "rank": 2,
    "company": "N2E",
    "advertiserName": "NTE: Neverness to Everness",
    "category": "都市开放世界 RPG",
    "theme": "都市异能 / 二次元开放世界",
    "adKey": "667fb871d23e80d3d31141db2cec53f8",
    "materialId": "6fae38798b1523e562dfa407702f6106",
    "platformCode": "youtube",
    "platformName": "YouTube",
    "impression": 4471678,
    "heat": 1000,
    "days": 80,
    "firstSeen": 1777389965,
    "lastSeen": 1784188549,
    "regions": [
      "日本"
    ],
    "language": "未标注语言",
    "duration": 17,
    "video": "https://sp2cdn-idea-global.zingfront.com/sp_opera/8ac1855eefded7a88e8093128d21b95c.mp4",
    "createdAt": 1777659431,
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
        "都市现实"
      ],
      "色彩调性-主色系": [
        "多彩/彩色"
      ],
      "玩家动机": [
        "放松逃离"
      ],
      "色彩调性-整体饱和度": [
        "高饱和"
      ],
      "主要场景": [
        "日式街道",
        "樱花小径"
      ],
      "营销卖点": [
        "高品质感"
      ],
      "视频主题": [
        "玩法展示",
        "休闲解压"
      ],
      "核心玩法": [
        "无尽跑酷"
      ],
      "结尾引导": [
        "无明确引导"
      ],
      "视频类型": [
        "游戏录屏"
      ],
      "视觉特效程度": [
        "中等特效"
      ]
    }
  },
  {
    "gameId": "nte",
    "gameName": "NTE: Neverness to Everness",
    "rank": 3,
    "company": "N2E",
    "advertiserName": "NTE: Neverness to Everness",
    "category": "都市开放世界 RPG",
    "theme": "都市异能 / 二次元开放世界",
    "adKey": "2c17ee32c4bbf7cd9638e2c9df46a512",
    "materialId": "0829cb60032fb81b3c51c555f3037785",
    "platformCode": "youtube",
    "platformName": "YouTube",
    "impression": 1242653,
    "heat": 1000,
    "days": 80,
    "firstSeen": 1777390004,
    "lastSeen": 1784190730,
    "regions": [
      "韩国",
      "美国"
    ],
    "language": "未标注语言",
    "duration": 30,
    "video": "https://sp2cdn-idea-global.zingfront.com/sp_opera/f963d4f915fd5a0c0af3f5edb8fbec25.mp4",
    "createdAt": 1777599122,
    "searchFlag": 145458,
    "copy": "",
    "tags": {
      "美术风格": [
        "写实3D"
      ],
      "色彩调性-明暗度": [
        "明亮"
      ],
      "内容题材": [
        "科幻"
      ],
      "色彩调性-主色系": [
        "多彩/彩色"
      ],
      "玩家动机": [
        "探索好奇",
        "放松逃离"
      ],
      "色彩调性-整体饱和度": [
        "高饱和"
      ],
      "主要场景": [
        "未来城市",
        "樱花林",
        "海滩"
      ],
      "营销卖点": [
        "高品质感"
      ],
      "视频主题": [
        "玩法展示",
        "休闲解压"
      ],
      "核心玩法": [
        "自由飞行"
      ],
      "结尾引导": [
        "品牌/LOGO收尾"
      ],
      "视频类型": [
        "游戏录屏"
      ],
      "视觉特效程度": [
        "强特效"
      ]
    }
  },
  {
    "gameId": "nte",
    "gameName": "NTE: Neverness to Everness",
    "rank": 4,
    "company": "N2E",
    "advertiserName": "NTE: Neverness to Everness",
    "category": "都市开放世界 RPG",
    "theme": "都市异能 / 二次元开放世界",
    "adKey": "a0dd7ecc560e98a3143326fcdc4e2aa9",
    "materialId": "f084ffc3f1b0642d3eef3086e8e42f01",
    "platformCode": "youtube",
    "platformName": "YouTube",
    "impression": 537686,
    "heat": 1000,
    "days": 68,
    "firstSeen": 1778374575,
    "lastSeen": 1784190730,
    "regions": [
      "瑞士",
      "比利时",
      "荷兰",
      "波兰",
      "英国",
      "西班牙",
      "法国",
      "罗马尼亚",
      "爱尔兰",
      "巴基斯坦",
      "缅甸",
      "意大利",
      "奥地利",
      "卢森堡",
      "挪威",
      "德国",
      "印度",
      "丹麦",
      "阿联酋"
    ],
    "language": "英语",
    "duration": 38,
    "video": "https://sp2cdn-idea-global.zingfront.com/sp_opera/407f1c843f857276058d715ffdabdbbd.mp4",
    "createdAt": 1778455128,
    "searchFlag": 145458,
    "copy": "Hunt Anomalies. Roam the City. Own Every Moment.",
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
        "科幻都市"
      ],
      "色彩调性-主色系": [
        "多彩/彩色"
      ],
      "玩家动机": [
        "探索好奇",
        "掌控力量"
      ],
      "游戏元素": [
        "开放世界",
        "载具系统"
      ],
      "色彩调性-整体饱和度": [
        "高饱和"
      ],
      "主要场景": [
        "城市夜景",
        "未来科技场景",
        "自然风景"
      ],
      "营销卖点": [
        "高品质感"
      ],
      "视频主题": [
        "玩法展示",
        "角色展示"
      ],
      "核心玩法": [
        "载具竞速"
      ],
      "结尾引导": [
        "品牌/LOGO收尾"
      ],
      "开头钩子": [
        "视觉异常/违和感"
      ],
      "视频类型": [
        "CG动画"
      ]
    }
  },
  {
    "gameId": "nte",
    "gameName": "NTE: Neverness to Everness",
    "rank": 5,
    "company": "N2E",
    "advertiserName": "NTE: Neverness to Everness",
    "category": "都市开放世界 RPG",
    "theme": "都市异能 / 二次元开放世界",
    "adKey": "1d5f04ca33c38bc2d22fff6dd698f743",
    "materialId": "2bebc9fb69171128321a9a87453fb07c",
    "platformCode": "admob",
    "platformName": "Admob",
    "impression": 715075,
    "heat": 609,
    "days": 80,
    "firstSeen": 1777401027,
    "lastSeen": 1784190741,
    "regions": [
      "韩国"
    ],
    "language": "未标注语言",
    "duration": 28,
    "video": "https://sp2cdn-idea-global.zingfront.com/sp_opera/4a745b756481572e61df8bce7e38cdb2.mp4",
    "createdAt": 1777598949,
    "searchFlag": 145458,
    "copy": "",
    "tags": {
      "色彩调性-整体饱和度": [
        "高饱和"
      ],
      "色彩调性-主色系": [
        "冷色系"
      ],
      "视觉特效程度": [
        "强特效"
      ],
      "美术风格": [
        "写实3D"
      ],
      "色彩调性-明暗度": [
        "中等"
      ],
      "角色类型": [
        "游戏角色"
      ],
      "主要场景": [
        "商业区",
        "城市街道"
      ],
      "视频类型": [
        "CG动画"
      ]
    }
  },
  {
    "gameId": "nte",
    "gameName": "NTE: Neverness to Everness",
    "rank": 6,
    "company": "N2E",
    "advertiserName": "NTE: Neverness to Everness",
    "category": "都市开放世界 RPG",
    "theme": "都市异能 / 二次元开放世界",
    "adKey": "22257b234a7a1c2ce8aa181d2f286dfd",
    "materialId": "a476da74ac66006b0671c379b976aa7b",
    "platformCode": "youtube",
    "platformName": "YouTube",
    "impression": 581166,
    "heat": 493,
    "days": 70,
    "firstSeen": 1778232461,
    "lastSeen": 1784190725,
    "regions": [
      "韩国"
    ],
    "language": "未标注语言",
    "duration": 34,
    "video": "https://sp2cdn-idea-global.zingfront.com/sp_opera/0b7e3f83740e65d20dc78a7a7b007ad3.mp4",
    "createdAt": 1778232503,
    "searchFlag": 145458,
    "copy": "",
    "tags": {
      "色彩调性-整体饱和度": [
        "高饱和"
      ],
      "色彩调性-主色系": [
        "冷色系"
      ],
      "视觉特效程度": [
        "强特效"
      ],
      "美术风格": [
        "风格化3D"
      ],
      "色彩调性-明暗度": [
        "中等"
      ],
      "角色类型": [
        "游戏角色"
      ],
      "主要场景": [
        "室内客厅",
        "战斗场地",
        "樱花林"
      ],
      "视频类型": [
        "CG动画"
      ],
      "营销卖点": [
        "高品质感"
      ],
      "结尾引导": [
        "品牌/LOGO收尾"
      ],
      "核心玩法": [
        "动作战斗"
      ],
      "开头钩子": [
        "美女/高吸引力人物"
      ],
      "视频主题": [
        "角色展示",
        "剧情叙事"
      ],
      "内容题材": [
        "日式幻想"
      ],
      "情绪触发点": [
        "视觉华丽特效"
      ],
      "玩家动机": [
        "探索好奇"
      ]
    }
  },
  {
    "gameId": "nte",
    "gameName": "NTE: Neverness to Everness",
    "rank": 7,
    "company": "N2E",
    "advertiserName": "NTE: Neverness to Everness",
    "category": "都市开放世界 RPG",
    "theme": "都市异能 / 二次元开放世界",
    "adKey": "9628099b245eb14991d330c7218fd0cb",
    "materialId": "adbe866a22adea3bac511c4016d21d6a",
    "platformCode": "admob",
    "platformName": "Admob",
    "impression": 510611,
    "heat": 480,
    "days": 70,
    "firstSeen": 1778261757,
    "lastSeen": 1784190741,
    "regions": [
      "韩国"
    ],
    "language": "未标注语言",
    "duration": 5,
    "video": "https://sp2cdn-idea-global.zingfront.com/sp_opera/ceb304d47fb5bdfdead4b2576a741054.mp4",
    "createdAt": 1781382819,
    "searchFlag": 145458,
    "copy": "",
    "tags": {
      "营销卖点": [
        "高品质感"
      ],
      "结尾引导": [
        "无明确引导"
      ],
      "核心玩法": [
        "无法判断"
      ],
      "开头钩子": [
        "美女/高吸引力人物"
      ],
      "色彩调性-主色系": [
        "暖色系"
      ],
      "美术风格": [
        "风格化3D"
      ],
      "视频主题": [
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
      "视觉特效程度": [
        "强特效"
      ],
      "玩家动机": [
        "放松逃离"
      ],
      "主要场景": [
        "樱花树下",
        "街道"
      ]
    }
  },
  {
    "gameId": "nte",
    "gameName": "NTE: Neverness to Everness",
    "rank": 8,
    "company": "N2E",
    "advertiserName": "NTE: Neverness to Everness",
    "category": "都市开放世界 RPG",
    "theme": "都市异能 / 二次元开放世界",
    "adKey": "414e972be4bd7e38022b5763907ed34c",
    "materialId": "3f91abae98b5408c05da3d38ffc50c72",
    "platformCode": "youtube",
    "platformName": "YouTube",
    "impression": 574959,
    "heat": 465,
    "days": 67,
    "firstSeen": 1778503228,
    "lastSeen": 1784190729,
    "regions": [
      "日本"
    ],
    "language": "未标注语言",
    "duration": 27,
    "video": "https://sp2cdn-idea-global.zingfront.com/sp_opera/2b63629b174cb3f6351cca5e02484c95.mp4",
    "createdAt": 1779311269,
    "searchFlag": 145458,
    "copy": "",
    "tags": {
      "色彩调性-整体饱和度": [
        "高饱和"
      ],
      "色彩调性-主色系": [
        "高对比混合"
      ],
      "视觉特效程度": [
        "强特效"
      ],
      "美术风格": [
        "风格化3D"
      ],
      "色彩调性-明暗度": [
        "中等"
      ],
      "角色类型": [
        "敌人/怪物",
        "游戏角色"
      ],
      "主要场景": [
        "城市夜景",
        "城市街道",
        "战斗大厅",
        "桥梁",
        "花田"
      ],
      "视频类型": [
        "游戏录屏"
      ],
      "营销卖点": [
        "高品质感"
      ],
      "结尾引导": [
        "品牌/LOGO收尾"
      ],
      "核心玩法": [
        "动作战斗",
        "场景探索"
      ],
      "开头钩子": [
        "无独立hook"
      ],
      "视频主题": [
        "角色展示",
        "玩法展示"
      ]
    }
  },
  {
    "gameId": "nte",
    "gameName": "NTE: Neverness to Everness",
    "rank": 9,
    "company": "N2E",
    "advertiserName": "NTE: Neverness to Everness",
    "category": "都市开放世界 RPG",
    "theme": "都市异能 / 二次元开放世界",
    "adKey": "4a214ef08a1a79e12dae25e56b6d1fd6",
    "materialId": "1981e875411957a52143bd014924ff4a",
    "platformCode": "admob",
    "platformName": "Admob",
    "impression": 528083,
    "heat": 457,
    "days": 67,
    "firstSeen": 1777401617,
    "lastSeen": 1783082367,
    "regions": [
      "韩国"
    ],
    "language": "英语",
    "duration": 17,
    "video": "https://sp2cdn-idea-global.zingfront.com/sp_opera/3a85c07624e120abeab75d7892342858.mp4",
    "createdAt": 1777598923,
    "searchFlag": 145458,
    "copy": "Hunt Anomalies. Roam the City. Own Every Moment.",
    "tags": {
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
        "室内",
        "桥梁",
        "街道",
        "车内"
      ],
      "视频类型": [
        "游戏内剧情"
      ],
      "营销卖点": [
        "沉浸剧情"
      ],
      "结尾引导": [
        "无明确引导"
      ],
      "核心玩法": [
        "剧情互动"
      ],
      "开头钩子": [
        "美女/高吸引力人物"
      ],
      "视频主题": [
        "剧情叙事",
        "角色展示"
      ],
      "内容题材": [
        "都市现实"
      ],
      "情绪触发点": [
        "浪漫氛围"
      ],
      "玩家动机": [
        "放松逃离"
      ]
    }
  },
  {
    "gameId": "nte",
    "gameName": "NTE: Neverness to Everness",
    "rank": 10,
    "company": "N2E",
    "advertiserName": "NTE: Neverness to Everness",
    "category": "都市开放世界 RPG",
    "theme": "都市异能 / 二次元开放世界",
    "adKey": "b4ee858e52b28f83b36e48201fcdd2d5",
    "materialId": "92d8bc0e00466a7c8cfb9b625138e7d2",
    "platformCode": "admob",
    "platformName": "Admob",
    "impression": 380254,
    "heat": 450,
    "days": 70,
    "firstSeen": 1778261757,
    "lastSeen": 1784190741,
    "regions": [
      "韩国"
    ],
    "language": "英语",
    "duration": 5,
    "video": "https://sp2cdn-idea-global.zingfront.com/sp_opera/c03a13f1dd0926ed380ed9f35846e035.mp4",
    "createdAt": 1783614791,
    "searchFlag": 145459,
    "copy": "Hunt Anomalies. Roam the City. Own Every Moment.",
    "tags": {
      "营销卖点": [
        "高品质感"
      ],
      "结尾引导": [
        "品牌/LOGO收尾"
      ],
      "开头钩子": [
        "极限数值/爽点展示"
      ],
      "色彩调性-主色系": [
        "高对比混合"
      ],
      "美术风格": [
        "风格化3D"
      ],
      "视频主题": [
        "角色展示",
        "爽快战斗"
      ],
      "色彩调性-明暗度": [
        "中等"
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
      "情绪触发点": [
        "高饱和冷色调视觉冲击"
      ],
      "视觉特效程度": [
        "强特效"
      ],
      "玩家动机": [
        "掌控力量",
        "情绪宣泄"
      ],
      "主要场景": [
        "末日城市"
      ],
      "内容题材": [
        "赛博朋克"
      ]
    }
  },
  {
    "gameId": "nte",
    "gameName": "NTE: Neverness to Everness",
    "rank": 11,
    "company": "N2E",
    "advertiserName": "NTE: Neverness to Everness",
    "category": "都市开放世界 RPG",
    "theme": "都市异能 / 二次元开放世界",
    "adKey": "9a45dccf2e46fbe2cdcbd352b951defc",
    "materialId": "fd8d30250d4929bd47efd77c399ce800",
    "platformCode": "admob",
    "platformName": "Admob",
    "impression": 548607,
    "heat": 444,
    "days": 66,
    "firstSeen": 1778593908,
    "lastSeen": 1784190730,
    "regions": [
      "卢森堡",
      "西班牙",
      "法国",
      "波兰",
      "比利时",
      "德国",
      "英国",
      "荷兰"
    ],
    "language": "未标注语言",
    "duration": 27,
    "video": "https://sp2cdn-idea-global.zingfront.com/sp_opera/e186c0a948d0b93f0d2b2212e55dd639.mp4",
    "createdAt": 1778653367,
    "searchFlag": 145458,
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
        "风格化3D"
      ],
      "色彩调性-明暗度": [
        "明亮"
      ],
      "角色类型": [
        "敌人/怪物",
        "游戏角色"
      ],
      "主要场景": [
        "城市街道",
        "樱花道",
        "竞技场",
        "花海",
        "高楼顶端"
      ],
      "视频类型": [
        "游戏内剧情"
      ],
      "营销卖点": [
        "高品质感"
      ],
      "结尾引导": [
        "品牌/LOGO收尾"
      ],
      "核心玩法": [
        "动作战斗",
        "高速跑酷"
      ],
      "视频主题": [
        "玩法展示",
        "角色展示"
      ],
      "游戏元素": [
        "场景探索"
      ]
    }
  },
  {
    "gameId": "nte",
    "gameName": "NTE: Neverness to Everness",
    "rank": 12,
    "company": "N2E",
    "advertiserName": "NTE: Neverness to Everness",
    "category": "都市开放世界 RPG",
    "theme": "都市异能 / 二次元开放世界",
    "adKey": "766b2a55f63feeb4606315e4d67acc19",
    "materialId": "f6f0c57a1dcc56b4a62d53771d6b3689",
    "platformCode": "admob",
    "platformName": "Admob",
    "impression": 326388,
    "heat": 437,
    "days": 70,
    "firstSeen": 1778261757,
    "lastSeen": 1784190741,
    "regions": [
      "韩国"
    ],
    "language": "未标注语言",
    "duration": 13,
    "video": "https://sp2cdn-idea-global.zingfront.com/sp_opera/9090bdcbabe019ecfc037ce8697dfd24.mp4",
    "createdAt": 1783925369,
    "searchFlag": 145459,
    "copy": "",
    "tags": {
      "美术风格": [
        "风格化3D"
      ],
      "色彩调性-明暗度": [
        "中等"
      ],
      "角色类型": [
        "游戏角色"
      ],
      "色彩调性-主色系": [
        "高对比混合"
      ],
      "玩家动机": [
        "情绪宣泄",
        "掌控力量"
      ],
      "游戏元素": [
        "多平台支持"
      ],
      "色彩调性-整体饱和度": [
        "高饱和"
      ],
      "主要场景": [
        "城市街道",
        "战斗场景"
      ],
      "营销卖点": [
        "免费福利"
      ],
      "视频主题": [
        "爽快战斗",
        "角色展示"
      ],
      "核心玩法": [
        "动作战斗",
        "技能连招"
      ],
      "情绪触发点": [
        "技能炫酷特效"
      ],
      "结尾引导": [
        "品牌/LOGO收尾"
      ],
      "开头钩子": [
        "无独立hook"
      ],
      "视频类型": [
        "游戏录屏"
      ],
      "视觉特效程度": [
        "强特效"
      ]
    }
  },
  {
    "gameId": "nte",
    "gameName": "NTE: Neverness to Everness",
    "rank": 13,
    "company": "N2E",
    "advertiserName": "NTE: Neverness to Everness",
    "category": "都市开放世界 RPG",
    "theme": "都市异能 / 二次元开放世界",
    "adKey": "ad30d4b38d0152fab7e6128b27ea7ff4",
    "materialId": "5e7e0d6ffca3604c41cf61c8596ba2f5",
    "platformCode": "youtube",
    "platformName": "YouTube",
    "impression": 469529,
    "heat": 425,
    "days": 65,
    "firstSeen": 1778261757,
    "lastSeen": 1783745193,
    "regions": [
      "韩国"
    ],
    "language": "未标注语言",
    "duration": 5,
    "video": "https://sp2cdn-idea-global.zingfront.com/sp_opera/190debfbda3da2c2efc74ed6391c4ba6.mp4",
    "createdAt": 1781382820,
    "searchFlag": 145458,
    "copy": "",
    "tags": {
      "营销卖点": [
        "免费福利"
      ],
      "结尾引导": [
        "福利领取/立即领取"
      ],
      "开头钩子": [
        "美女/高吸引力人物"
      ],
      "色彩调性-主色系": [
        "暖色系"
      ],
      "美术风格": [
        "2D二次元"
      ],
      "视频主题": [
        "抽卡收集",
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
        "免费抽奖"
      ],
      "情绪触发点": [
        "免费福利承诺",
        "高吸引力人物"
      ],
      "视觉特效程度": [
        "强特效"
      ],
      "玩家动机": [
        "收集拥有",
        "放松逃离"
      ],
      "主要场景": [
        "家庭客厅"
      ],
      "内容题材": [
        "无法判断"
      ]
    }
  },
  {
    "gameId": "nte",
    "gameName": "NTE: Neverness to Everness",
    "rank": 14,
    "company": "N2E",
    "advertiserName": "NTE: Neverness to Everness",
    "category": "都市开放世界 RPG",
    "theme": "都市异能 / 二次元开放世界",
    "adKey": "e69e5c61dcb1d668bc10c8c45f483f18",
    "materialId": "f0c3e971d41fea55b1c7007fd8071883",
    "platformCode": "admob",
    "platformName": "Admob",
    "impression": 642896,
    "heat": 424,
    "days": 96,
    "firstSeen": 1778593973,
    "lastSeen": 1786763455,
    "regions": [
      "美国",
      "中国香港",
      "泰国",
      "菲律宾",
      "新西兰",
      "韩国",
      "新加坡",
      "印度",
      "日本"
    ],
    "language": "英语",
    "duration": 41,
    "video": "https://sp2cdn-idea-global.zingfront.com/sp_opera/29889857e2a8c448fd9264faf4991e07.mp4",
    "createdAt": 1778518656,
    "searchFlag": 145458,
    "copy": "NTE: Neverness to Everness",
    "tags": {
      "色彩调性-整体饱和度": [
        "高饱和"
      ],
      "色彩调性-主色系": [
        "冷色系"
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
        "雪地战场"
      ],
      "视频类型": [
        "CG动画"
      ],
      "营销卖点": [
        "免费福利"
      ],
      "结尾引导": [
        "品牌/LOGO收尾"
      ],
      "核心玩法": [
        "动作战斗",
        "技能释放"
      ],
      "视频主题": [
        "角色展示",
        "爽快战斗"
      ],
      "内容题材": [
        "无法判断"
      ],
      "游戏元素": [
        "免费抽卡",
        "终极技能"
      ],
      "情绪触发点": [
        "视觉华丽特效"
      ],
      "玩家动机": [
        "掌控力量",
        "情绪宣泄"
      ]
    }
  },
  {
    "gameId": "nte",
    "gameName": "NTE: Neverness to Everness",
    "rank": 15,
    "company": "N2E",
    "advertiserName": "NTE: Neverness to Everness",
    "category": "都市开放世界 RPG",
    "theme": "都市异能 / 二次元开放世界",
    "adKey": "ab4e562627dd1a3ce424a78ad1e3d7f9",
    "materialId": "27713cd0cb87ff25a167b63e3b5efce7",
    "platformCode": "admob",
    "platformName": "Admob",
    "impression": 388391,
    "heat": 350,
    "days": 57,
    "firstSeen": 1778671318,
    "lastSeen": 1783518978,
    "regions": [
      "日本"
    ],
    "language": "未标注语言",
    "duration": 18,
    "video": "https://sp2cdn-idea-global.zingfront.com/sp_opera/101216de2f6459b6ecd30e4348d26ed4.mp4",
    "createdAt": 1781166441,
    "searchFlag": 145458,
    "copy": "",
    "tags": {
      "美术风格": [
        "2D二次元"
      ],
      "色彩调性-明暗度": [
        "偏暗"
      ],
      "角色类型": [
        "游戏角色"
      ],
      "内容题材": [
        "赛博朋克"
      ],
      "色彩调性-主色系": [
        "冷色系"
      ],
      "玩家动机": [
        "情绪宣泄"
      ],
      "游戏元素": [
        "战斗系统",
        "角色技能"
      ],
      "色彩调性-整体饱和度": [
        "高饱和"
      ],
      "主要场景": [
        "城市街道",
        "宇宙空间"
      ],
      "营销卖点": [
        "免费福利"
      ],
      "视频主题": [
        "爽快战斗",
        "角色展示"
      ],
      "核心玩法": [
        "动作战斗",
        "技能连招"
      ],
      "情绪触发点": [
        "华丽特效",
        "高饱和冷色调视觉冲击"
      ],
      "结尾引导": [
        "品牌/LOGO收尾"
      ],
      "开头钩子": [
        "无独立hook"
      ]
    }
  },
  {
    "gameId": "nte",
    "gameName": "NTE: Neverness to Everness",
    "rank": 16,
    "company": "N2E",
    "advertiserName": "NTE: Neverness to Everness",
    "category": "都市开放世界 RPG",
    "theme": "都市异能 / 二次元开放世界",
    "adKey": "fd3afdea05eadc3d65784422437cb461",
    "materialId": "f3f6cbed952073f888ebe0e6c571b5b2",
    "platformCode": "youtube",
    "platformName": "YouTube",
    "impression": 436777,
    "heat": 344,
    "days": 56,
    "firstSeen": 1778339241,
    "lastSeen": 1783078582,
    "regions": [
      "缅甸",
      "澳大利亚",
      "加拿大"
    ],
    "language": "未标注语言",
    "duration": 34,
    "video": "https://sp2cdn-idea-global.zingfront.com/sp_opera/ec55152c4b733d3286610a96ccdcbf74.mp4",
    "createdAt": 1778339291,
    "searchFlag": 145458,
    "copy": "",
    "tags": {
      "美术风格": [
        "风格化3D"
      ],
      "色彩调性-明暗度": [
        "中等"
      ],
      "角色类型": [
        "游戏角色"
      ],
      "色彩调性-主色系": [
        "冷色系"
      ],
      "玩家动机": [
        "掌控力量",
        "情绪宣泄"
      ],
      "游戏元素": [
        "技能特效",
        "角色对战"
      ],
      "色彩调性-整体饱和度": [
        "高饱和"
      ],
      "主要场景": [
        "战场",
        "森林"
      ],
      "营销卖点": [
        "高品质感"
      ],
      "视频主题": [
        "角色展示",
        "爽快战斗"
      ],
      "核心玩法": [
        "动作战斗",
        "技能释放"
      ],
      "情绪触发点": [
        "华丽技能特效",
        "激烈战斗场面"
      ],
      "结尾引导": [
        "品牌/LOGO收尾"
      ],
      "开头钩子": [
        "强冲突/矛盾开场"
      ]
    }
  },
  {
    "gameId": "nte",
    "gameName": "NTE: Neverness to Everness",
    "rank": 17,
    "company": "N2E",
    "advertiserName": "NTE: Neverness to Everness",
    "category": "都市开放世界 RPG",
    "theme": "都市异能 / 二次元开放世界",
    "adKey": "4f0a2f8b455a40b6e8b9028124240ab0",
    "materialId": "4abf7ab2131218322812300d1c3ca52c",
    "platformCode": "youtube",
    "platformName": "YouTube",
    "impression": 455775,
    "heat": 333,
    "days": 55,
    "firstSeen": 1778455180,
    "lastSeen": 1783078582,
    "regions": [
      "缅甸",
      "英国",
      "意大利",
      "德国",
      "比利时",
      "法国",
      "爱尔兰",
      "卢森堡",
      "奥地利",
      "丹麦",
      "西班牙",
      "波兰",
      "荷兰"
    ],
    "language": "未标注语言",
    "duration": 21,
    "video": "https://sp2cdn-idea-global.zingfront.com/sp_opera/e2bb93e3126e52ab26d2a47b46df4c31.mp4",
    "createdAt": 1778455334,
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
        "都市现实"
      ],
      "色彩调性-主色系": [
        "暖色系"
      ],
      "玩家动机": [
        "探索好奇",
        "放松逃离"
      ],
      "游戏元素": [
        "任务系统",
        "背包系统"
      ],
      "色彩调性-整体饱和度": [
        "高饱和"
      ],
      "主要场景": [
        "咖啡馆",
        "舞台",
        "走廊"
      ],
      "营销卖点": [
        "高品质感"
      ],
      "视频主题": [
        "角色展示",
        "玩法展示"
      ],
      "核心玩法": [
        "场景探索"
      ],
      "结尾引导": [
        "无明确引导"
      ],
      "视频类型": [
        "游戏录屏"
      ],
      "视觉特效程度": [
        "弱特效/几乎无"
      ]
    }
  },
  {
    "gameId": "nte",
    "gameName": "NTE: Neverness to Everness",
    "rank": 18,
    "company": "N2E",
    "advertiserName": "NTE: Neverness to Everness",
    "category": "都市开放世界 RPG",
    "theme": "都市异能 / 二次元开放世界",
    "adKey": "709edc18ca5b3e67b034c6fd8c5cd625",
    "materialId": "51845ec5e690701d8c05d7784f6c26fd",
    "platformCode": "admob",
    "platformName": "Admob",
    "impression": 673560,
    "heat": 319,
    "days": 74,
    "firstSeen": 1777879873,
    "lastSeen": 1784190725,
    "regions": [
      "日本",
      "韩国"
    ],
    "language": "韩语",
    "duration": 26,
    "video": "https://sp2cdn-idea-global.zingfront.com/sp_opera/2ca40e36f5cdcd14d5ffe8a2661dd813.mp4",
    "createdAt": 1777880276,
    "searchFlag": 145458,
    "copy": "이환",
    "tags": {
      "色彩调性-整体饱和度": [
        "高饱和"
      ],
      "色彩调性-主色系": [
        "冷色系"
      ],
      "视觉特效程度": [
        "强特效"
      ],
      "美术风格": [
        "风格化3D"
      ],
      "色彩调性-明暗度": [
        "中等"
      ],
      "角色类型": [
        "游戏角色"
      ],
      "主要场景": [
        "室外训练场",
        "未来战场",
        "赛博朋克城市"
      ],
      "视频类型": [
        "游戏内剧情"
      ],
      "营销卖点": [
        "高品质感"
      ],
      "结尾引导": [
        "品牌/LOGO收尾"
      ],
      "核心玩法": [
        "动作战斗",
        "技能释放"
      ],
      "开头钩子": [
        "美女/高吸引力人物"
      ],
      "视频主题": [
        "爽快战斗",
        "角色展示"
      ],
      "内容题材": [
        "科幻"
      ],
      "游戏元素": [
        "等级标识",
        "血条UI"
      ]
    }
  },
  {
    "gameId": "nte",
    "gameName": "NTE: Neverness to Everness",
    "rank": 19,
    "company": "N2E",
    "advertiserName": "NTE: Neverness to Everness",
    "category": "都市开放世界 RPG",
    "theme": "都市异能 / 二次元开放世界",
    "adKey": "1768f7a89a9966334f7a528733d07d21",
    "materialId": "def80b877f7fe5c4a24df9ee892479d7",
    "platformCode": "facebook",
    "platformName": "FB News Feed",
    "impression": 534710,
    "heat": 314,
    "days": 78,
    "firstSeen": 1777446000,
    "lastSeen": 1784098800,
    "regions": [
      "挪威",
      "巴西",
      "日本",
      "中国香港",
      "瑞典",
      "俄罗斯联邦"
    ],
    "language": "英语",
    "duration": 28,
    "video": "https://sp2cdn-idea-global.zingfront.com/sp_opera/f790f6d693f79f5915db427c133c019e.mp4",
    "createdAt": 1777358218,
    "searchFlag": 145458,
    "copy": "GIFTCODE:NTEGIFT / 🎮Where anime meets urban chaos\nDownload now to get 120 free pulls and S-Class Character: Chiz😍",
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
        "城市街道",
        "水下隧道",
        "高架桥"
      ],
      "视频类型": [
        "游戏录屏"
      ],
      "营销卖点": [
        "高品质感"
      ],
      "结尾引导": [
        "品牌/LOGO收尾"
      ],
      "核心玩法": [
        "场景探索",
        "自由驾驶"
      ],
      "视频主题": [
        "玩法展示",
        "角色展示"
      ],
      "内容题材": [
        "赛博朋克"
      ],
      "游戏元素": [
        "多场景地图",
        "多车型收集"
      ],
      "玩家动机": [
        "探索好奇"
      ]
    }
  },
  {
    "gameId": "nte",
    "gameName": "NTE: Neverness to Everness",
    "rank": 20,
    "company": "N2E",
    "advertiserName": "NTE: Neverness to Everness",
    "category": "都市开放世界 RPG",
    "theme": "都市异能 / 二次元开放世界",
    "adKey": "e0284b1cac8229caa112486352072f7e",
    "materialId": "fb5dda29bd410dff7a3778ecde8b9fbf",
    "platformCode": "youtube",
    "platformName": "YouTube",
    "impression": 417580,
    "heat": 307,
    "days": 52,
    "firstSeen": 1779798884,
    "lastSeen": 1784190730,
    "regions": [
      "日本"
    ],
    "language": "未标注语言",
    "duration": 37,
    "video": "https://sp2cdn-idea-global.zingfront.com/sp_opera/7cc759a25b29c6670c188579b1d10594.mp4",
    "createdAt": 1780027882,
    "searchFlag": 145458,
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
        "风格化3D"
      ],
      "色彩调性-明暗度": [
        "明亮"
      ],
      "角色类型": [
        "游戏角色"
      ],
      "主要场景": [
        "樱花道",
        "现代城市街道"
      ],
      "视频类型": [
        "游戏录屏"
      ],
      "营销卖点": [
        "高品质感"
      ],
      "结尾引导": [
        "品牌/LOGO收尾"
      ],
      "核心玩法": [
        "空中飞行",
        "自由探索"
      ],
      "开头钩子": [
        "无独立hook"
      ],
      "视频主题": [
        "玩法展示",
        "角色展示"
      ],
      "游戏元素": [
        "开放世界",
        "飞行机制"
      ],
      "玩家动机": [
        "探索好奇",
        "放松逃离"
      ]
    }
  },
  {
    "gameId": "critters",
    "gameName": "Clash of Critters",
    "rank": 1,
    "company": "FARLIGHT",
    "advertiserName": "Clash of Critters",
    "category": "宠物收集 / 轻度策略",
    "theme": "卡通奇幻 / 萌宠冒险",
    "adKey": "cd7c9bcc5bb629dc42a2ef8cc8df0f2d",
    "materialId": "cac91c97213fac73d32b1b5ad2b51f0d",
    "platformCode": "applovin",
    "platformName": "AppLovin",
    "impression": 952518,
    "heat": 796,
    "days": 100,
    "firstSeen": 1778426033,
    "lastSeen": 1786996195,
    "regions": [
      "全球"
    ],
    "language": "未标注语言",
    "duration": 59,
    "video": "https://sp2cdn-idea-global.zingfront.com/sp_opera/e0ead985cb894fd11010d5f681b1cae5.webm",
    "createdAt": 1778426132,
    "searchFlag": 145458,
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
        "敌人/怪物",
        "游戏角色"
      ],
      "主要场景": [
        "地牢",
        "森林",
        "野外"
      ],
      "视频类型": [
        "游戏录屏"
      ],
      "营销卖点": [
        "成长收集"
      ],
      "结尾引导": [
        "品牌/LOGO收尾"
      ],
      "核心玩法": [
        "宠物收集",
        "成长进化"
      ],
      "视频主题": [
        "数值成长",
        "角色展示"
      ],
      "内容题材": [
        "奇幻冒险"
      ],
      "游戏元素": [
        "宝箱奖励",
        "宠物捕捉"
      ]
    }
  },
  {
    "gameId": "critters",
    "gameName": "Clash of Critters",
    "rank": 2,
    "company": "FARLIGHT",
    "advertiserName": "Clash of Critters",
    "category": "宠物收集 / 轻度策略",
    "theme": "卡通奇幻 / 萌宠冒险",
    "adKey": "c185d231428c39798a05861f661b275e",
    "materialId": "908db101cf65cd34094ccf6cb7916422",
    "platformCode": "applovin",
    "platformName": "AppLovin",
    "impression": 826512,
    "heat": 717,
    "days": 91,
    "firstSeen": 1778889138,
    "lastSeen": 1786599930,
    "regions": [
      "全球"
    ],
    "language": "未标注语言",
    "duration": 59,
    "video": "https://sp2cdn-idea-global.zingfront.com/sp_opera/b8061a20c74fe56e53ae56d95e2020cb.webm",
    "createdAt": 1778889334,
    "searchFlag": 145458,
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
        "敌人/怪物",
        "游戏角色"
      ],
      "主要场景": [
        "图鉴界面",
        "地牢",
        "草地战场"
      ],
      "视频类型": [
        "游戏录屏"
      ],
      "营销卖点": [
        "成长收集"
      ],
      "结尾引导": [
        "品牌/LOGO收尾"
      ],
      "核心玩法": [
        "宠物对战",
        "宠物进化"
      ],
      "视频主题": [
        "数值成长",
        "玩法展示"
      ],
      "内容题材": [
        "奇幻冒险"
      ],
      "游戏元素": [
        "图鉴收集",
        "宝箱"
      ]
    }
  },
  {
    "gameId": "critters",
    "gameName": "Clash of Critters",
    "rank": 3,
    "company": "FARLIGHT",
    "advertiserName": "Clash of Critters",
    "category": "宠物收集 / 轻度策略",
    "theme": "卡通奇幻 / 萌宠冒险",
    "adKey": "65a2739d1562c64da4d95c57dad016c6",
    "materialId": "ab80f7e6a9d04ef8e97159ffa7c59342",
    "platformCode": "instagram",
    "platformName": "Instagram",
    "impression": 1134963,
    "heat": 692,
    "days": 125,
    "firstSeen": 1776322800,
    "lastSeen": 1787028961,
    "regions": [
      "奥地利",
      "土耳其",
      "墨西哥",
      "巴拿马",
      "意大利",
      "荷兰",
      "新西兰",
      "丹麦",
      "巴基斯坦",
      "摩洛哥",
      "挪威",
      "智利",
      "芬兰",
      "泰国",
      "罗马尼亚",
      "巴拉圭",
      "美国",
      "安哥拉",
      "瑞士",
      "马来西亚",
      "澳大利亚",
      "波兰",
      "菲律宾",
      "法国",
      "葡萄牙",
      "新加坡",
      "加拿大",
      "哈萨克斯坦",
      "印度",
      "以色列",
      "巴西",
      "印度尼西亚",
      "英国",
      "爱尔兰",
      "德国"
    ],
    "language": "英语",
    "duration": 42,
    "video": "https://sp2cdn-idea-global.zingfront.com/sp_opera/73db2454b34f40af7323857fdfcd54e8.mp4",
    "createdAt": 1776429776,
    "searchFlag": 145458,
    "copy": "Critters, assemble! / Zero spend, zero regrets! Complete your collection with ease.",
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
        "竞技场",
        "草地",
        "雪地"
      ],
      "视频类型": [
        "游戏录屏"
      ]
    }
  },
  {
    "gameId": "critters",
    "gameName": "Clash of Critters",
    "rank": 4,
    "company": "FARLIGHT",
    "advertiserName": "Clash of Critters",
    "category": "宠物收集 / 轻度策略",
    "theme": "卡通奇幻 / 萌宠冒险",
    "adKey": "b70e2f27cfc5d06b4f974640e2b52aec",
    "materialId": "696b8ef083fdebeb6cafa05c062268dc",
    "platformCode": "applovin",
    "platformName": "AppLovin",
    "impression": 753928,
    "heat": 653,
    "days": 84,
    "firstSeen": 1779434072,
    "lastSeen": 1786586744,
    "regions": [
      "坦桑尼亚"
    ],
    "language": "未标注语言",
    "duration": 53,
    "video": "https://sp2cdn-idea-global.zingfront.com/sp_opera/d0632f2afb016401db523412706cbc22.webm",
    "createdAt": 1779434167,
    "searchFlag": 145458,
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
        "宣传海报",
        "游戏界面",
        "街道"
      ],
      "视频类型": [
        "恶搞混剪/鬼畜风"
      ],
      "营销卖点": [
        "免费福利",
        "省时不肝/不氪"
      ],
      "结尾引导": [
        "品牌/LOGO收尾"
      ],
      "核心玩法": [
        "数值成长",
        "角色进化"
      ],
      "开头钩子": [
        "搞笑/荒诞"
      ],
      "视频主题": [
        "利益引导",
        "角色展示"
      ],
      "游戏元素": [
        "属性数值",
        "星级系统"
      ]
    }
  },
  {
    "gameId": "critters",
    "gameName": "Clash of Critters",
    "rank": 5,
    "company": "FARLIGHT",
    "advertiserName": "Clash of Critters",
    "category": "宠物收集 / 轻度策略",
    "theme": "卡通奇幻 / 萌宠冒险",
    "adKey": "6146cabdbb42eaea6dba586019bf8336",
    "materialId": "cd23981d0173e7cbe7229ca7e32e2165",
    "platformCode": "admob",
    "platformName": "Admob",
    "impression": 633425,
    "heat": 653,
    "days": 86,
    "firstSeen": 1779352069,
    "lastSeen": 1786707656,
    "regions": [
      "意大利",
      "挪威",
      "美国",
      "荷兰",
      "法国",
      "比利时"
    ],
    "language": "英语",
    "duration": 43,
    "video": "https://sp2cdn-idea-global.zingfront.com/sp_opera/df84c5e9506c4acd235d157e5173d7e4.mp4",
    "createdAt": 1783119698,
    "searchFlag": 145459,
    "copy": "A pocket pet adventure begins! Collect over 100 adorable pets for endless fun!",
    "tags": {
      "营销卖点": [
        "无明确卖点"
      ],
      "结尾引导": [
        "失败引导/你来试试"
      ],
      "核心玩法": [
        "塔防战斗",
        "角色进化"
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
        "玩法展示",
        "数值成长"
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
        "失败结算",
        "角色升级",
        "进化选择"
      ],
      "情绪触发点": [
        "失败画面",
        "数值飙升"
      ],
      "视觉特效程度": [
        "强特效"
      ]
    }
  },
  {
    "gameId": "critters",
    "gameName": "Clash of Critters",
    "rank": 6,
    "company": "FARLIGHT",
    "advertiserName": "Clash of Critters",
    "category": "宠物收集 / 轻度策略",
    "theme": "卡通奇幻 / 萌宠冒险",
    "adKey": "10e53faa6bc74f985faaa2d987c5ae2b",
    "materialId": "cdc5c7242ce919be6569f54b22433f57",
    "platformCode": "facebook",
    "platformName": "FB News Feed",
    "impression": 738976,
    "heat": 651,
    "days": 84,
    "firstSeen": 1779865200,
    "lastSeen": 1787028961,
    "regions": [
      "印度",
      "芬兰",
      "瑞士",
      "印度尼西亚",
      "荷兰",
      "墨西哥",
      "巴拿马",
      "丹麦",
      "奥地利",
      "英国",
      "以色列",
      "爱尔兰",
      "意大利",
      "德国",
      "卢森堡",
      "马来西亚",
      "菲律宾",
      "美国",
      "法国",
      "新加坡",
      "加拿大",
      "新西兰",
      "泰国",
      "比利时",
      "葡萄牙"
    ],
    "language": "英语",
    "duration": 43,
    "video": "https://sp2cdn-idea-global.zingfront.com/sp_opera/8d362ae83675bb37e40ffc7eb4998b00.mp4",
    "createdAt": 1779950334,
    "searchFlag": 145458,
    "copy": "Build your dream team / Join the adventure and defend the world with your Tatari!",
    "tags": {
      "色彩调性-整体饱和度": [
        "高饱和"
      ],
      "色彩调性-主色系": [
        "暖色系"
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
        "游戏UI界面",
        "草地战场"
      ],
      "视频类型": [
        "游戏录屏"
      ],
      "营销卖点": [
        "无明确卖点"
      ],
      "结尾引导": [
        "品牌/LOGO收尾"
      ],
      "核心玩法": [
        "点击战斗",
        "进化养成"
      ],
      "开头钩子": [
        "无独立hook"
      ],
      "视频主题": [
        "玩法展示",
        "失败不服"
      ],
      "内容题材": [
        "卡通奇幻"
      ],
      "游戏元素": [
        "失败惩罚",
        "角色形态切换"
      ]
    }
  },
  {
    "gameId": "critters",
    "gameName": "Clash of Critters",
    "rank": 7,
    "company": "FARLIGHT",
    "advertiserName": "Clash of Critters",
    "category": "宠物收集 / 轻度策略",
    "theme": "卡通奇幻 / 萌宠冒险",
    "adKey": "d54edae759b7b385d213a85109c7f72e",
    "materialId": "adf3f1e73ef8a89db7fa8953a10ac122",
    "platformCode": "applovin",
    "platformName": "AppLovin",
    "impression": 764028,
    "heat": 637,
    "days": 82,
    "firstSeen": 1779976589,
    "lastSeen": 1786983003,
    "regions": [
      "美国"
    ],
    "language": "未标注语言",
    "duration": 48,
    "video": "https://sp2cdn-idea-global.zingfront.com/sp_opera/1cd552df9635380e74e48ffab5952582.webm",
    "createdAt": 1779977876,
    "searchFlag": 145458,
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
        "战斗场景",
        "游戏界面"
      ],
      "视频类型": [
        "游戏录屏"
      ],
      "营销卖点": [
        "无明确卖点"
      ],
      "结尾引导": [
        "品牌/LOGO收尾"
      ],
      "核心玩法": [
        "团队战斗",
        "角色合成"
      ],
      "开头钩子": [
        "反转反差"
      ],
      "视频主题": [
        "玩法展示",
        "角色展示"
      ],
      "游戏元素": [
        "刷新机制",
        "属性分类",
        "战斗结算",
        "角色合成"
      ]
    }
  },
  {
    "gameId": "critters",
    "gameName": "Clash of Critters",
    "rank": 8,
    "company": "FARLIGHT",
    "advertiserName": "Clash of Critters",
    "category": "宠物收集 / 轻度策略",
    "theme": "卡通奇幻 / 萌宠冒险",
    "adKey": "abd083905c7ecf18db374c9f08b2becb",
    "materialId": "8c76292e9d7ac1fd9a3f983d6c82a034",
    "platformCode": "facebook",
    "platformName": "FB News Feed",
    "impression": 1247146,
    "heat": 613,
    "days": 107,
    "firstSeen": 1777878000,
    "lastSeen": 1787028961,
    "regions": [
      "波兰",
      "泰国",
      "土耳其",
      "墨西哥",
      "印度尼西亚",
      "阿根廷",
      "美国",
      "瑞士",
      "哥伦比亚",
      "卡塔尔",
      "南非",
      "柬埔寨",
      "英国",
      "新西兰",
      "菲律宾",
      "瑞典",
      "沙特阿拉伯",
      "芬兰",
      "科威特",
      "德国",
      "马来西亚",
      "以色列",
      "荷兰",
      "意大利",
      "新加坡",
      "匈牙利",
      "西班牙",
      "澳大利亚",
      "罗马尼亚",
      "爱尔兰",
      "摩洛哥",
      "葡萄牙",
      "法国",
      "巴西",
      "挪威"
    ],
    "language": "英语",
    "duration": 54,
    "video": "https://sp2cdn-idea-global.zingfront.com/sp_opera/a16b0d40c75eac3da9feaa1fc0c4bbe7.mp4",
    "createdAt": 1778018425,
    "searchFlag": 145458,
    "copy": "Critters, assemble! / Zero spend, zero regrets! Complete your collection with ease.",
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
        "公路",
        "森林",
        "营地"
      ],
      "视频类型": [
        "游戏录屏"
      ],
      "营销卖点": [
        "无明确卖点"
      ],
      "结尾引导": [
        "品牌/LOGO收尾"
      ],
      "核心玩法": [
        "怪物进化",
        "营地建造"
      ],
      "视频主题": [
        "玩法展示",
        "数值成长"
      ],
      "内容题材": [
        "末日生存"
      ],
      "游戏元素": [
        "怪物孵化",
        "怪物进化"
      ]
    }
  },
  {
    "gameId": "critters",
    "gameName": "Clash of Critters",
    "rank": 9,
    "company": "FARLIGHT",
    "advertiserName": "Clash of Critters",
    "category": "宠物收集 / 轻度策略",
    "theme": "卡通奇幻 / 萌宠冒险",
    "adKey": "cd157bad09723c60a0583950a64d8b09",
    "materialId": "96bf54dad5f39054bec5dac5ded7da4f",
    "platformCode": "applovin",
    "platformName": "AppLovin",
    "impression": 732689,
    "heat": 599,
    "days": 78,
    "firstSeen": 1780326536,
    "lastSeen": 1786989862,
    "regions": [
      "美国"
    ],
    "language": "未标注语言",
    "duration": 31,
    "video": "https://sp2cdn-idea-global.zingfront.com/sp_opera/282db106d7573464924e5e645b0ac447.webm",
    "createdAt": 1780326969,
    "searchFlag": 145458,
    "copy": "",
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
        "2D卡通"
      ],
      "色彩调性-明暗度": [
        "明亮"
      ],
      "角色类型": [
        "真人",
        "游戏角色"
      ],
      "主要场景": [
        "游戏UI界面",
        "游戏宣传场景",
        "直播室"
      ],
      "视频类型": [
        "真人口播"
      ],
      "营销卖点": [
        "丰富耐玩"
      ],
      "结尾引导": [
        "明确下载引导",
        "口播号召"
      ],
      "核心玩法": [
        "角色收集"
      ],
      "开头钩子": [
        "直接卖点抛出"
      ],
      "视频主题": [
        "角色展示",
        "数值成长"
      ],
      "内容题材": [
        "奇幻生物"
      ],
      "游戏元素": [
        "角色图鉴"
      ]
    }
  },
  {
    "gameId": "critters",
    "gameName": "Clash of Critters",
    "rank": 10,
    "company": "FARLIGHT",
    "advertiserName": "Clash of Critters",
    "category": "宠物收集 / 轻度策略",
    "theme": "卡通奇幻 / 萌宠冒险",
    "adKey": "d5e6ec1bbb6e3a0fd43dac65a13b15f5",
    "materialId": "8b8fbda457e2216ffe6a811cf3f23af5",
    "platformCode": "admob",
    "platformName": "Admob",
    "impression": 484413,
    "heat": 590,
    "days": 83,
    "firstSeen": 1777812874,
    "lastSeen": 1784888285,
    "regions": [
      "西班牙",
      "美国",
      "荷兰",
      "泰国",
      "奥地利",
      "丹麦",
      "葡萄牙",
      "爱尔兰",
      "新西兰",
      "阿曼",
      "LAO",
      "印度尼西亚",
      "以色列",
      "摩洛哥",
      "匈牙利",
      "澳大利亚",
      "斯洛文尼亚",
      "比利时",
      "墨西哥",
      "巴林",
      "沙特阿拉伯",
      "加拿大",
      "阿联酋",
      "意大利",
      "瑞士",
      "新加坡",
      "土耳其",
      "法国",
      "秘鲁",
      "英国",
      "智利",
      "希腊",
      "阿根廷",
      "巴西",
      "瑞典",
      "挪威",
      "波兰",
      "罗马尼亚",
      "德国",
      "科威特",
      "卡塔尔",
      "卢森堡",
      "马来西亚",
      "菲律宾",
      "哥伦比亚",
      "芬兰"
    ],
    "language": "未标注语言",
    "duration": 68,
    "video": "https://sp2cdn-idea-global.zingfront.com/sp_opera/5526188dba2bb0a389b4cb429e483e39.mp4",
    "createdAt": 1783449567,
    "searchFlag": 145459,
    "copy": "",
    "tags": {
      "营销卖点": [
        "丰富耐玩"
      ],
      "结尾引导": [
        "明确下载引导"
      ],
      "核心玩法": [
        "角色进化"
      ],
      "开头钩子": [
        "视觉异常/违和感"
      ],
      "色彩调性-主色系": [
        "暖色系"
      ],
      "美术风格": [
        "2D卡通"
      ],
      "视频主题": [
        "角色展示",
        "数值成长"
      ],
      "色彩调性-明暗度": [
        "明亮"
      ],
      "角色类型": [
        "敌人/怪物",
        "游戏角色"
      ],
      "视频类型": [
        "恶搞混剪/鬼畜风"
      ],
      "色彩调性-整体饱和度": [
        "高饱和"
      ],
      "游戏元素": [
        "形态变换",
        "角色进化"
      ],
      "视觉特效程度": [
        "中等特效"
      ],
      "玩家动机": [
        "探索好奇",
        "收集拥有"
      ],
      "主要场景": [
        "森林背景",
        "游戏地图"
      ]
    }
  },
  {
    "gameId": "critters",
    "gameName": "Clash of Critters",
    "rank": 11,
    "company": "FARLIGHT",
    "advertiserName": "Clash of Critters",
    "category": "宠物收集 / 轻度策略",
    "theme": "卡通奇幻 / 萌宠冒险",
    "adKey": "441203a5b47cc4810026596d4a8d16d3",
    "materialId": "8c4ce5b74e14e7ddc7da731aef042cd8",
    "platformCode": "applovin",
    "platformName": "AppLovin",
    "impression": 704143,
    "heat": 575,
    "days": 75,
    "firstSeen": 1780319880,
    "lastSeen": 1786723556,
    "regions": [
      "印度尼西亚"
    ],
    "language": "未标注语言",
    "duration": 59,
    "video": "https://sp2cdn-idea-global.zingfront.com/sp_opera/57c1feb31fd9bf274d707565a1be8b17.webm",
    "createdAt": 1780320033,
    "searchFlag": 145458,
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
        "敌人/怪物",
        "游戏角色"
      ],
      "主要场景": [
        "BOSS 战场地",
        "宝箱室",
        "草地战场"
      ],
      "视频类型": [
        "游戏录屏"
      ],
      "营销卖点": [
        "成长收集"
      ],
      "结尾引导": [
        "品牌/LOGO收尾"
      ],
      "核心玩法": [
        "宠物收集",
        "策略战斗"
      ],
      "开头钩子": [
        "无独立hook"
      ],
      "视频主题": [
        "数值成长",
        "角色展示"
      ],
      "内容题材": [
        "奇幻冒险"
      ],
      "游戏元素": [
        "宝箱奖励"
      ]
    }
  },
  {
    "gameId": "critters",
    "gameName": "Clash of Critters",
    "rank": 12,
    "company": "FARLIGHT",
    "advertiserName": "Clash of Critters",
    "category": "宠物收集 / 轻度策略",
    "theme": "卡通奇幻 / 萌宠冒险",
    "adKey": "3689da57855345dc2efd90169b3330ff",
    "materialId": "15d079622d6689c9f1242c65c4106a9b",
    "platformCode": "applovin",
    "platformName": "AppLovin",
    "impression": 706139,
    "heat": 574,
    "days": 75,
    "firstSeen": 1780579261,
    "lastSeen": 1786983061,
    "regions": [
      "美国"
    ],
    "language": "未标注语言",
    "duration": 51,
    "video": "https://sp2cdn-idea-global.zingfront.com/sp_opera/6e2ad8e9b63d29d6e4bc0fa4c7f3f0a3.webm",
    "createdAt": 1780579447,
    "searchFlag": 145458,
    "copy": "",
    "tags": {
      "营销卖点": [
        "丰富耐玩"
      ],
      "结尾引导": [
        "品牌/LOGO收尾"
      ],
      "核心玩法": [
        "合并进化",
        "塔防战斗"
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
        "失败不服",
        "玩法展示"
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
        "关卡挑战",
        "多模式玩法",
        "营地建设",
        "角色合并",
        "角色收集",
        "钓鱼玩法"
      ]
    }
  },
  {
    "gameId": "critters",
    "gameName": "Clash of Critters",
    "rank": 13,
    "company": "FARLIGHT",
    "advertiserName": "Clash of Critters",
    "category": "宠物收集 / 轻度策略",
    "theme": "卡通奇幻 / 萌宠冒险",
    "adKey": "0263a27c62a292db808b2eaf7c04f9ca",
    "materialId": "0a37de0ca22b2f20e0c23d9b69bc9d64",
    "platformCode": "applovin",
    "platformName": "AppLovin",
    "impression": 695901,
    "heat": 569,
    "days": 75,
    "firstSeen": 1780586615,
    "lastSeen": 1786998821,
    "regions": [
      "全球"
    ],
    "language": "未标注语言",
    "duration": 44,
    "video": "https://sp2cdn-idea-global.zingfront.com/sp_opera/807e50bdf6b8b72058b12d1c57bbc068.webm",
    "createdAt": 1780586739,
    "searchFlag": 145458,
    "copy": "",
    "tags": {
      "营销卖点": [
        "无明确卖点"
      ],
      "结尾引导": [
        "品牌/LOGO收尾",
        "无明确引导"
      ],
      "核心玩法": [
        "单位合并",
        "塔防布阵"
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
        "失败不服",
        "玩法展示"
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
        "SSR角色",
        "角色部署",
        "阵型调整"
      ],
      "情绪触发点": [
        "失败画面",
        "夸张表情"
      ]
    }
  },
  {
    "gameId": "critters",
    "gameName": "Clash of Critters",
    "rank": 14,
    "company": "Farlight Games",
    "advertiserName": "Clash of Critters",
    "category": "宠物收集 / 轻度策略",
    "theme": "卡通奇幻 / 萌宠冒险",
    "adKey": "58dad983e04df7d55449df21f1afb1bb",
    "materialId": "ebcf2ab6e30ca6cdb4d51fef0806b210",
    "platformCode": "threads",
    "platformName": "Threads",
    "impression": 630465,
    "heat": 569,
    "days": 76,
    "firstSeen": 1779778800,
    "lastSeen": 1786258800,
    "regions": [
      "波兰",
      "卢森堡",
      "新加坡",
      "泰国",
      "缅甸",
      "葡萄牙",
      "智利",
      "美国",
      "安哥拉",
      "西班牙",
      "马来西亚",
      "印度尼西亚",
      "罗马尼亚",
      "新西兰",
      "瑞士",
      "斯洛文尼亚",
      "柬埔寨",
      "巴基斯坦",
      "挪威",
      "塞内加尔",
      "瑞典",
      "科特迪瓦"
    ],
    "language": "英语",
    "duration": 45,
    "video": "https://sp2cdn-idea-global.zingfront.com/sp_opera/c340087e21028b5ea850a2078c8dab59.mp4",
    "createdAt": 1779848377,
    "searchFlag": 145458,
    "copy": "Build your dream team",
    "tags": {
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
      "色彩调性-主色系": [
        "多彩/彩色"
      ],
      "玩家动机": [
        "掌控力量",
        "成就进步"
      ],
      "游戏元素": [
        "技能战斗",
        "胜利结算",
        "角色合成",
        "金币奖励"
      ],
      "色彩调性-整体饱和度": [
        "高饱和"
      ],
      "主要场景": [
        "卡通战场",
        "胜利结算界面",
        "角色选择界面"
      ],
      "营销卖点": [
        "无明确卖点"
      ],
      "视频主题": [
        "玩法展示",
        "爽快战斗"
      ],
      "核心玩法": [
        "策略布阵",
        "角色合成"
      ]
    }
  },
  {
    "gameId": "critters",
    "gameName": "Clash of Critters",
    "rank": 15,
    "company": "FARLIGHT",
    "advertiserName": "Clash of Critters",
    "category": "宠物收集 / 轻度策略",
    "theme": "卡通奇幻 / 萌宠冒险",
    "adKey": "ad2579a46dd3be794c9acd33fcde96c1",
    "materialId": "358ee029fbf2f4a7d9e808409d01e39c",
    "platformCode": "youtube",
    "platformName": "YouTube",
    "impression": 397675,
    "heat": 568,
    "days": 82,
    "firstSeen": 1779352090,
    "lastSeen": 1786350720,
    "regions": [
      "比利时",
      "美国",
      "荷兰",
      "加拿大",
      "法国"
    ],
    "language": "未标注语言",
    "duration": 39,
    "video": "https://sp2cdn-idea-global.zingfront.com/sp_opera/e2d82358bdc158f143f59b3a84c8f998.mp4",
    "createdAt": 1786145307,
    "searchFlag": 145459,
    "copy": "",
    "tags": {
      "营销卖点": [
        "无明确卖点"
      ],
      "结尾引导": [
        "品牌/LOGO收尾"
      ],
      "核心玩法": [
        "数值战斗"
      ],
      "开头钩子": [
        "无独立hook"
      ],
      "色彩调性-主色系": [
        "冷色系"
      ],
      "美术风格": [
        "2D卡通"
      ],
      "视频主题": [
        "失败不服",
        "数值成长"
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
        "数值对比",
        "角色升级",
        "进化选择"
      ],
      "视觉特效程度": [
        "强特效"
      ],
      "玩家动机": [
        "技巧挑战",
        "成就进步"
      ],
      "主要场景": [
        "冰雪地图"
      ]
    }
  },
  {
    "gameId": "critters",
    "gameName": "Clash of Critters",
    "rank": 16,
    "company": "FARLIGHT",
    "advertiserName": "Clash of Critters",
    "category": "宠物收集 / 轻度策略",
    "theme": "卡通奇幻 / 萌宠冒险",
    "adKey": "7f5038c5f2bb637c798b5b0523dc2bb2",
    "materialId": "da75b0358051b6b5919f7e6240c72dbe",
    "platformCode": "youtube",
    "platformName": "YouTube",
    "impression": 395356,
    "heat": 564,
    "days": 82,
    "firstSeen": 1779352069,
    "lastSeen": 1786350892,
    "regions": [
      "荷兰",
      "意大利",
      "加拿大",
      "西班牙",
      "比利时",
      "挪威",
      "美国",
      "法国"
    ],
    "language": "英语",
    "duration": 58,
    "video": "https://sp2cdn-idea-global.zingfront.com/sp_opera/1e4fd9a6d4441ab30989387c28b998da.mp4",
    "createdAt": 1786145495,
    "searchFlag": 145459,
    "copy": "A pocket pet adventure begins! Collect over 100 adorable pets for endless fun!",
    "tags": {
      "营销卖点": [
        "无明确卖点"
      ],
      "结尾引导": [
        "品牌/LOGO收尾"
      ],
      "核心玩法": [
        "宠物养成",
        "生存战斗"
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
        "玩法展示",
        "数值成长"
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
        "奖金选择",
        "宠物进化",
        "战斗数值",
        "等级提升"
      ],
      "情绪触发点": [
        "数值成长反馈"
      ],
      "视觉特效程度": [
        "中等特效"
      ]
    }
  },
  {
    "gameId": "critters",
    "gameName": "Clash of Critters",
    "rank": 17,
    "company": "FARLIGHT",
    "advertiserName": "Clash of Critters",
    "category": "宠物收集 / 轻度策略",
    "theme": "卡通奇幻 / 萌宠冒险",
    "adKey": "8fe193be51a7c6751747323466a0fe7d",
    "materialId": "5b79d3629ef3045e2931f7cffc3bbe05",
    "platformCode": "youtube",
    "platformName": "YouTube",
    "impression": 532979,
    "heat": 556,
    "days": 78,
    "firstSeen": 1779460822,
    "lastSeen": 1786111089,
    "regions": [
      "哥伦比亚",
      "孟加拉国",
      "委内瑞拉",
      "葡萄牙",
      "巴西",
      "希腊",
      "荷兰",
      "乌克兰",
      "奥地利",
      "格鲁吉亚",
      "芬兰",
      "阿联酋",
      "阿根廷",
      "印度",
      "柬埔寨",
      "澳大利亚",
      "卢森堡",
      "科特迪瓦",
      "ARM",
      "蒙古",
      "墨西哥",
      "伊拉克",
      "秘鲁",
      "比利时",
      "英国",
      "巴基斯坦",
      "巴拿马",
      "罗马尼亚",
      "以色列",
      "德国",
      "新西兰",
      "瑞典",
      "美国",
      "哈萨克斯坦",
      "挪威",
      "意大利",
      "法国",
      "土耳其",
      "LAO",
      "加拿大",
      "智利",
      "尼日利亚",
      "丹麦",
      "菲律宾",
      "波兰",
      "新加坡",
      "西班牙",
      "巴拉圭",
      "匈牙利",
      "马来西亚",
      "科威特",
      "瑞士",
      "斯洛文尼亚",
      "爱尔兰",
      "泰国",
      "黎巴嫩",
      "印度尼西亚",
      "沙特阿拉伯",
      "阿塞拜疆"
    ],
    "language": "未标注语言",
    "duration": 38,
    "video": "https://sp2cdn-idea-global.zingfront.com/sp_opera/03b7faa5a871f9c9ea84119150565c27.mp4",
    "createdAt": 1783290535,
    "searchFlag": 145459,
    "copy": "",
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
      "内容题材": [
        "奇幻生物"
      ],
      "色彩调性-主色系": [
        "多彩/彩色"
      ],
      "玩家动机": [
        "收集拥有",
        "成就进步"
      ],
      "游戏元素": [
        "弹珠台玩法",
        "战斗技能",
        "角色收集",
        "进化系统"
      ],
      "色彩调性-整体饱和度": [
        "高饱和"
      ],
      "主要场景": [
        "宣传海报",
        "战斗场景",
        "游戏界面"
      ],
      "营销卖点": [
        "成长收集"
      ],
      "视频主题": [
        "角色展示",
        "数值成长"
      ],
      "核心玩法": [
        "合并养成",
        "角色进化"
      ]
    }
  },
  {
    "gameId": "critters",
    "gameName": "Clash of Critters",
    "rank": 18,
    "company": "FARLIGHT",
    "advertiserName": "Clash of Critters",
    "category": "宠物收集 / 轻度策略",
    "theme": "卡通奇幻 / 萌宠冒险",
    "adKey": "db8eb729e0654aaa4270091ebda70e17",
    "materialId": "5155bf96631f0ee8abe8accdf198e03e",
    "platformCode": "facebook",
    "platformName": "FB News Feed",
    "impression": 643688,
    "heat": 549,
    "days": 75,
    "firstSeen": 1780642800,
    "lastSeen": 1787028961,
    "regions": [
      "奥地利",
      "墨西哥",
      "意大利",
      "荷兰",
      "新西兰",
      "比利时",
      "匈牙利",
      "挪威",
      "芬兰",
      "泰国",
      "美国",
      "瑞士",
      "马来西亚",
      "澳大利亚",
      "西班牙",
      "菲律宾",
      "法国",
      "葡萄牙",
      "新加坡",
      "加拿大",
      "卢森堡",
      "以色列",
      "印度尼西亚",
      "英国",
      "爱尔兰"
    ],
    "language": "英语",
    "duration": 42,
    "video": "https://sp2cdn-idea-global.zingfront.com/sp_opera/3a70da273d4e7e0167820454e335af32.mp4",
    "createdAt": 1780723792,
    "searchFlag": 145458,
    "copy": "Build your dream team / Zero spend, zero regrets! Complete your collection with ease.",
    "tags": {
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
      "内容题材": [
        "卡通奇幻"
      ],
      "色彩调性-主色系": [
        "多彩/彩色"
      ],
      "玩家动机": [
        "技巧挑战",
        "掌控力量"
      ],
      "游戏元素": [
        "单位合并",
        "资源掉落"
      ],
      "色彩调性-整体饱和度": [
        "高饱和"
      ],
      "主要场景": [
        "游戏UI界面",
        "胜利结算界面"
      ],
      "营销卖点": [
        "策略烧脑"
      ],
      "视频主题": [
        "玩法展示"
      ],
      "核心玩法": [
        "单位合并",
        "策略布阵"
      ],
      "结尾引导": [
        "品牌/LOGO收尾"
      ],
      "开头钩子": [
        "无独立hook"
      ],
      "视频类型": [
        "游戏录屏"
      ]
    }
  },
  {
    "gameId": "critters",
    "gameName": "Clash of Critters",
    "rank": 19,
    "company": "FARLIGHT",
    "advertiserName": "Clash of Critters",
    "category": "宠物收集 / 轻度策略",
    "theme": "卡通奇幻 / 萌宠冒险",
    "adKey": "7c5519913ae52120bdd0519561b179f0",
    "materialId": "e7d742063037c771e6832d626c12f669",
    "platformCode": "youtube",
    "platformName": "YouTube",
    "impression": 470834,
    "heat": 541,
    "days": 77,
    "firstSeen": 1777812874,
    "lastSeen": 1784379318,
    "regions": [
      "秘鲁",
      "波兰",
      "土耳其",
      "巴西",
      "芬兰",
      "科威特",
      "新加坡",
      "阿曼",
      "英国",
      "挪威",
      "加拿大",
      "匈牙利",
      "巴林",
      "奥地利",
      "马来西亚",
      "荷兰",
      "瑞士",
      "LAO",
      "沙特阿拉伯",
      "爱尔兰",
      "希腊",
      "卢森堡",
      "阿根廷",
      "西班牙",
      "阿联酋",
      "菲律宾",
      "罗马尼亚",
      "瑞典",
      "斯洛文尼亚",
      "丹麦",
      "美国",
      "新西兰",
      "智利",
      "摩洛哥",
      "澳大利亚",
      "比利时",
      "印度尼西亚",
      "墨西哥",
      "泰国",
      "德国",
      "葡萄牙",
      "以色列",
      "哥伦比亚",
      "法国",
      "卡塔尔",
      "意大利"
    ],
    "language": "英语",
    "duration": 6,
    "video": "https://sp2cdn-idea-global.zingfront.com/sp_opera/6b1f0db88a1f9fe3cf6ebbf01b2baf30.mp4",
    "createdAt": 1782213847,
    "searchFlag": 145458,
    "copy": "A pocket pet adventure begins! Collect over 100 adorable pets for endless fun!",
    "tags": {
      "营销卖点": [
        "无明确卖点"
      ],
      "结尾引导": [
        "无明确引导"
      ],
      "核心玩法": [
        "数值展示",
        "角色收集"
      ],
      "开头钩子": [
        "极限数值/爽点展示"
      ],
      "色彩调性-主色系": [
        "暖色系"
      ],
      "美术风格": [
        "2D卡通"
      ],
      "视频主题": [
        "角色展示",
        "数值成长"
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
        "属性数值",
        "稀有度标识",
        "等级系统",
        "角色面板"
      ],
      "情绪触发点": [
        "极限数值",
        "角色稀有度标识"
      ],
      "视觉特效程度": [
        "强特效"
      ]
    }
  },
  {
    "gameId": "critters",
    "gameName": "Clash of Critters",
    "rank": 20,
    "company": "FARLIGHT",
    "advertiserName": "Clash of Critters",
    "category": "宠物收集 / 轻度策略",
    "theme": "卡通奇幻 / 萌宠冒险",
    "adKey": "711b5b973074d69fcb95a2462566a822",
    "materialId": "22141297c5d14577b8c139872390cefa",
    "platformCode": "youtube",
    "platformName": "YouTube",
    "impression": 373490,
    "heat": 519,
    "days": 77,
    "firstSeen": 1777812874,
    "lastSeen": 1784390457,
    "regions": [
      "美国"
    ],
    "language": "英语",
    "duration": 35,
    "video": "https://sp2cdn-idea-global.zingfront.com/sp_opera/20386262e212b110e7fbfce7bcd844cc.mp4",
    "createdAt": 1784315972,
    "searchFlag": 145459,
    "copy": "Clash of Critters | Clash of Critters / Sponsored - Clash of Critters | Clash of Critters - 36 seconds - Capture, level up, and become the ultimate trainer - 4.7 stars\nFREE - play video",
    "tags": {
      "营销卖点": [
        "无明确卖点"
      ],
      "结尾引导": [
        "品牌/LOGO收尾"
      ],
      "核心玩法": [
        "塔防战斗",
        "角色进化"
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
        "玩法展示",
        "失败不服"
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
        "单位部署",
        "奖金选择",
        "波次进攻",
        "进化系统"
      ],
      "视觉特效程度": [
        "强特效"
      ],
      "玩家动机": [
        "技巧挑战"
      ]
    }
  },
  {
    "gameId": "dragon",
    "gameName": "Dragon Traveler",
    "rank": 1,
    "company": "FINNOVATE JOINT STOCK COMPANY",
    "advertiserName": "Dragon Traveler VN",
    "category": "二次元放置 RPG",
    "theme": "奇幻冒险 / 角色收集",
    "adKey": "aa19304861f3181fd41ab4497b00b9c0",
    "materialId": "3ac24337903e69308a8264890d08ff06",
    "platformCode": "youtube",
    "platformName": "YouTube",
    "impression": 10118872,
    "heat": 1000,
    "days": 61,
    "firstSeen": 1781265772,
    "lastSeen": 1786437717,
    "regions": [
      "越南"
    ],
    "language": "越南语",
    "duration": 5,
    "video": "https://sp2cdn-idea-global.zingfront.com/sp_opera/6ddc3907fc10900cc786fe3a04fb9e9f.mp4",
    "createdAt": 1774892575,
    "searchFlag": 145458,
    "copy": "Tặng 1K lượt quay + 30K KC",
    "tags": {
      "色彩调性-整体饱和度": [
        "高饱和"
      ],
      "色彩调性-主色系": [
        "冷色系"
      ],
      "视觉特效程度": [
        "强特效"
      ],
      "色彩调性-明暗度": [
        "中等"
      ],
      "角色类型": [
        "游戏角色"
      ],
      "视频类型": [
        "CG动画"
      ],
      "营销卖点": [
        "高品质感"
      ],
      "内容题材": [
        "神话"
      ],
      "开头钩子": [
        "美女/高吸引力人物"
      ],
      "玩家动机": [
        "收集拥有"
      ],
      "视频主题": [
        "角色展示"
      ]
    }
  },
  {
    "gameId": "dragon",
    "gameName": "Dragon Traveler",
    "rank": 2,
    "company": "FINNOVATE JOINT STOCK COMPANY",
    "advertiserName": "Dragon Traveler VN",
    "category": "二次元放置 RPG",
    "theme": "奇幻冒险 / 角色收集",
    "adKey": "e4da4b44ce26374f829be41a0172a370",
    "materialId": "1c45862fbc0c409fdef0c90ca5b18fe8",
    "platformCode": "youtube",
    "platformName": "YouTube",
    "impression": 4682073,
    "heat": 1000,
    "days": 52,
    "firstSeen": 1781257284,
    "lastSeen": 1785664474,
    "regions": [
      "越南"
    ],
    "language": "越南语",
    "duration": 5,
    "video": "https://sp2cdn-idea-global.zingfront.com/sp_opera/be4dce820082f0acdb02745dd5792531.mp4",
    "createdAt": 1775356485,
    "searchFlag": 145458,
    "copy": "Tặng 1K lượt quay + 30K KC",
    "tags": {
      "营销卖点": [
        "高品质感"
      ],
      "核心玩法": [
        "角色展示"
      ],
      "开头钩子": [
        "美女/高吸引力人物"
      ],
      "色彩调性-主色系": [
        "多彩/彩色"
      ],
      "美术风格": [
        "2D二次元"
      ],
      "视频主题": [
        "角色展示",
        "剧情叙事"
      ],
      "色彩调性-明暗度": [
        "明亮"
      ],
      "角色类型": [
        "游戏角色"
      ],
      "视频类型": [
        "游戏内剧情"
      ],
      "色彩调性-整体饱和度": [
        "高饱和"
      ],
      "内容题材": [
        "奇幻"
      ],
      "游戏元素": [
        "坐骑",
        "角色属性"
      ],
      "视觉特效程度": [
        "中等特效"
      ],
      "玩家动机": [
        "收集拥有",
        "探索好奇"
      ],
      "主要场景": [
        "天空",
        "草地"
      ]
    }
  },
  {
    "gameId": "dragon",
    "gameName": "Dragon Traveler",
    "rank": 3,
    "company": "FINNOVATE JOINT STOCK COMPANY",
    "advertiserName": "Dragon Traveler VN",
    "category": "二次元放置 RPG",
    "theme": "奇幻冒险 / 角色收集",
    "adKey": "50b7b4394c6636908a2d4d275247adfa",
    "materialId": "fd2a27612546cfbaa5514593bf696666",
    "platformCode": "youtube",
    "platformName": "YouTube",
    "impression": 1910063,
    "heat": 1000,
    "days": 45,
    "firstSeen": 1781265772,
    "lastSeen": 1785034423,
    "regions": [
      "越南"
    ],
    "language": "越南语",
    "duration": 7,
    "video": "https://sp2cdn-idea-global.zingfront.com/sp_opera/b94a9ee1cefef466fb3bbcc2620c80fd.mp4",
    "createdAt": 1773945842,
    "searchFlag": 145458,
    "copy": "Tặng 1K lượt quay + 30K KC",
    "tags": {
      "色彩调性-整体饱和度": [
        "高饱和"
      ],
      "色彩调性-主色系": [
        "暖色系"
      ],
      "视觉特效程度": [
        "强特效"
      ],
      "美术风格": [
        "2D二次元"
      ],
      "色彩调性-明暗度": [
        "中等"
      ],
      "角色类型": [
        "敌人/怪物",
        "游戏角色"
      ],
      "主要场景": [
        "火山战场"
      ],
      "视频类型": [
        "游戏录屏"
      ],
      "营销卖点": [
        "高品质感"
      ],
      "结尾引导": [
        "无明确引导"
      ],
      "核心玩法": [
        "Boss 挑战",
        "团队战斗"
      ],
      "开头钩子": [
        "强冲突/矛盾开场"
      ],
      "视频主题": [
        "爽快战斗",
        "角色展示"
      ],
      "内容题材": [
        "暗黑奇幻"
      ],
      "游戏元素": [
        "Boss 战",
        "血量显示",
        "队伍编成"
      ]
    }
  },
  {
    "gameId": "dragon",
    "gameName": "Dragon Traveler",
    "rank": 4,
    "company": "HongKong GameTree Limited",
    "advertiserName": "Dragon Traveler",
    "category": "二次元放置 RPG",
    "theme": "奇幻冒险 / 角色收集",
    "adKey": "bba0160514115567f7e368c85a679839",
    "materialId": "68b1899618c56a1343b77e0165f2e978",
    "platformCode": "admob",
    "platformName": "Admob",
    "impression": 1724169,
    "heat": 965,
    "days": 216,
    "firstSeen": 1768415286,
    "lastSeen": 1786944722,
    "regions": [
      "日本",
      "美国"
    ],
    "language": "英语",
    "duration": 7,
    "video": "https://sp2cdn-idea-global.zingfront.com/sp_opera/3d431cccf52488e18b571944825263bc.mp4",
    "createdAt": 1768415377,
    "searchFlag": 145458,
    "copy": "Dragon Traveler",
    "tags": {
      "内容题材": [
        "奇幻"
      ],
      "开头钩子": [
        "美女/高吸引力人物"
      ],
      "游戏元素": [
        "角色面板"
      ],
      "玩家动机": [
        "收集拥有"
      ],
      "视频类型": [
        "游戏内剧情"
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
        "2D二次元"
      ],
      "色彩调性-明暗度": [
        "明亮"
      ],
      "角色类型": [
        "游戏角色"
      ],
      "营销卖点": [
        "高品质感"
      ],
      "结尾引导": [
        "品牌/LOGO收尾"
      ],
      "视频主题": [
        "角色展示"
      ]
    }
  },
  {
    "gameId": "dragon",
    "gameName": "Dragon Traveler",
    "rank": 5,
    "company": "GameTree Entertainment",
    "advertiserName": "Dragon Traveler",
    "category": "二次元放置 RPG",
    "theme": "奇幻冒险 / 角色收集",
    "adKey": "d47191a35077238a037afde4037b70ce",
    "materialId": "15333b07e5b7bf164e913639fbfaefdb",
    "platformCode": "admob",
    "platformName": "Admob",
    "impression": 1895624,
    "heat": 936,
    "days": 184,
    "firstSeen": 1769873188,
    "lastSeen": 1785630490,
    "regions": [
      "丹麦",
      "孟加拉国",
      "卢森堡",
      "英国",
      "中国台湾",
      "新西兰",
      "奥地利",
      "韩国",
      "俄罗斯联邦",
      "印度",
      "波兰",
      "加拿大",
      "马来西亚",
      "阿根廷",
      "德国",
      "日本",
      "阿塞拜疆",
      "美国",
      "芬兰",
      "土耳其",
      "瑞典",
      "爱尔兰",
      "中国香港",
      "乌克兰",
      "巴西",
      "智利",
      "以色列",
      "挪威",
      "格鲁吉亚",
      "墨西哥",
      "巴基斯坦",
      "菲律宾",
      "西班牙",
      "法国",
      "意大利",
      "比利时",
      "埃及",
      "葡萄牙",
      "摩洛哥",
      "印度尼西亚",
      "泰国",
      "澳大利亚",
      "荷兰",
      "沙特阿拉伯",
      "新加坡",
      "哥伦比亚",
      "瑞士"
    ],
    "language": "韩语",
    "duration": 8,
    "video": "https://sp2cdn-idea-global.zingfront.com/sp_opera/741bf7e65bceca934076b7e49e821612.mp4",
    "createdAt": 1769170477,
    "searchFlag": 145458,
    "copy": "그놈은 드래곤",
    "tags": {
      "内容题材": [
        "奇幻"
      ],
      "核心玩法": [
        "奖励领取"
      ],
      "开头钩子": [
        "高额奖励/暴利承诺"
      ],
      "游戏元素": [
        "表情包",
        "限定角色"
      ],
      "玩家动机": [
        "收集拥有"
      ],
      "视频类型": [
        "CG动画"
      ],
      "色彩调性-整体饱和度": [
        "高饱和"
      ],
      "色彩调性-主色系": [
        "暖色系"
      ],
      "视觉特效程度": [
        "弱特效/几乎无"
      ],
      "美术风格": [
        "2D二次元"
      ],
      "色彩调性-明暗度": [
        "明亮"
      ],
      "角色类型": [
        "游戏角色"
      ],
      "营销卖点": [
        "免费福利"
      ],
      "结尾引导": [
        "福利领取/立即领取"
      ],
      "视频主题": [
        "利益引导",
        "角色展示"
      ],
      "情绪触发点": [
        "高额奖励"
      ]
    }
  },
  {
    "gameId": "dragon",
    "gameName": "Dragon Traveler",
    "rank": 6,
    "company": "GameTree Entertainment",
    "advertiserName": "Dragon Traveler",
    "category": "二次元放置 RPG",
    "theme": "奇幻冒险 / 角色收集",
    "adKey": "b476ef3d2616a63913c25a70a8e1324a",
    "materialId": "affcf864d6d767a8e0f5adad8ee84d90",
    "platformCode": "admob",
    "platformName": "Admob",
    "impression": 625493,
    "heat": 845,
    "days": 116,
    "firstSeen": 1776773996,
    "lastSeen": 1786714696,
    "regions": [
      "日本"
    ],
    "language": "未标注语言",
    "duration": 12,
    "video": "https://sp2cdn-idea-global.zingfront.com/sp_opera/059a96830fe312b164e01cacfe79b507.mp4",
    "createdAt": 1785896464,
    "searchFlag": 145459,
    "copy": "",
    "tags": {
      "色彩调性-主色系": [
        "暖色系"
      ],
      "美术风格": [
        "2D二次元"
      ],
      "色彩调性-明暗度": [
        "明亮"
      ],
      "角色类型": [
        "游戏角色"
      ],
      "视频类型": [
        "游戏内剧情"
      ],
      "色彩调性-整体饱和度": [
        "高饱和"
      ],
      "视觉特效程度": [
        "强特效"
      ],
      "主要场景": [
        "海滩"
      ]
    }
  },
  {
    "gameId": "dragon",
    "gameName": "Dragon Traveler",
    "rank": 7,
    "company": "FINNOVATE JOINT STOCK COMPANY",
    "advertiserName": "Dragon Traveler VN",
    "category": "二次元放置 RPG",
    "theme": "奇幻冒险 / 角色收集",
    "adKey": "ab53af1d8dd509326dc2db67889e42f4",
    "materialId": "4060ef39f8479c978bdc8211a20682a7",
    "platformCode": "instagram",
    "platformName": "Instagram",
    "impression": 972654,
    "heat": 832,
    "days": 105,
    "firstSeen": 1777532400,
    "lastSeen": 1786533530,
    "regions": [
      "越南"
    ],
    "language": "越南语",
    "duration": 34,
    "video": "https://sp2cdn-idea-global.zingfront.com/sp_opera/2f3d23aa3e6c09cde1331c13435a3a98.mp4",
    "createdAt": 1778372049,
    "searchFlag": 145458,
    "copy": "Cốt truyện kịch tính do bạn tự tay kích hoạt⚔️ / Treo máy tự lấy 30K kim cương!💥",
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
        "2D二次元"
      ],
      "色彩调性-明暗度": [
        "明亮"
      ],
      "角色类型": [
        "游戏角色"
      ],
      "主要场景": [
        "沙漠",
        "海滩",
        "竞技场"
      ],
      "视频类型": [
        "CG动画"
      ],
      "营销卖点": [
        "高品质感"
      ],
      "结尾引导": [
        "品牌/LOGO收尾",
        "口播号召"
      ],
      "核心玩法": [
        "回合战斗",
        "技能特效"
      ],
      "视频主题": [
        "角色展示",
        "爽快战斗"
      ],
      "内容题材": [
        "奇幻"
      ],
      "游戏元素": [
        "战斗 UI",
        "稀有度标识"
      ]
    }
  },
  {
    "gameId": "dragon",
    "gameName": "Dragon Traveler",
    "rank": 8,
    "company": "GameTree Entertainment",
    "advertiserName": "Dragon Traveler",
    "category": "二次元放置 RPG",
    "theme": "奇幻冒险 / 角色收集",
    "adKey": "3752e5d65312ee1df0ca5e4b03e1a73d",
    "materialId": "fe229ccc6e23170fdab3fc29e9eeea8a",
    "platformCode": "threads",
    "platformName": "Threads",
    "impression": 1159399,
    "heat": 818,
    "days": 155,
    "firstSeen": 1772611200,
    "lastSeen": 1785895336,
    "regions": [
      "爱尔兰",
      "瑞士",
      "新加坡",
      "奥地利",
      "韩国",
      "比利时",
      "法国",
      "卢森堡",
      "瑞典",
      "美国",
      "丹麦",
      "加拿大",
      "英国",
      "德国"
    ],
    "language": "英语",
    "duration": 37,
    "video": "https://sp2cdn-idea-global.zingfront.com/sp_opera/168df687b8b5c517deedf83bde08d4f6.mp4",
    "createdAt": 1776522902,
    "searchFlag": 145458,
    "copy": "Install Now 💾",
    "tags": {
      "美术风格": [
        "2D二次元"
      ],
      "色彩调性-明暗度": [
        "明亮"
      ],
      "角色类型": [
        "敌人/怪物",
        "真人",
        "游戏角色"
      ],
      "内容题材": [
        "奇幻"
      ],
      "色彩调性-主色系": [
        "多彩/彩色"
      ],
      "玩家动机": [
        "成就进步",
        "收集拥有"
      ],
      "游戏元素": [
        "BOSS战",
        "召唤系统",
        "技能释放",
        "角色获取"
      ],
      "色彩调性-整体饱和度": [
        "高饱和"
      ],
      "主要场景": [
        "云端平台"
      ],
      "营销卖点": [
        "无明确卖点"
      ],
      "视频主题": [
        "爽快战斗",
        "抽卡收集"
      ],
      "核心玩法": [
        "团队战斗",
        "抽卡"
      ]
    }
  },
  {
    "gameId": "dragon",
    "gameName": "Dragon Traveler",
    "rank": 9,
    "company": "HongKong GameTree Limited",
    "advertiserName": "Dragon Traveler",
    "category": "二次元放置 RPG",
    "theme": "奇幻冒险 / 角色收集",
    "adKey": "82a96730592f2941740a706242c590bd",
    "materialId": "bb04c8b87fa9c6b7d4ecc38fbc3bc7b9",
    "platformCode": "threads",
    "platformName": "Threads",
    "impression": 2959814,
    "heat": 806,
    "days": 121,
    "firstSeen": 1773212400,
    "lastSeen": 1783586270,
    "regions": [
      "英国",
      "卢森堡",
      "葡萄牙",
      "匈牙利",
      "奥地利",
      "波兰",
      "西班牙",
      "德国",
      "巴拉圭",
      "荷兰",
      "智利",
      "瑞典",
      "墨西哥",
      "丹麦",
      "意大利",
      "芬兰",
      "美国",
      "瑞士",
      "法国",
      "比利时",
      "挪威",
      "巴西"
    ],
    "language": "英语",
    "duration": 13,
    "video": "https://sp2cdn-idea-global.zingfront.com/sp_opera/b00dbd81d5243b5be73cf60f04684928.mp4",
    "createdAt": 1776579983,
    "searchFlag": 145458,
    "copy": "Download Now! ⬇️",
    "tags": {
      "美术风格": [
        "2D二次元"
      ],
      "色彩调性-明暗度": [
        "明亮"
      ],
      "角色类型": [
        "游戏角色"
      ],
      "内容题材": [
        "奇幻"
      ],
      "色彩调性-主色系": [
        "暖色系"
      ],
      "玩家动机": [
        "掌控力量"
      ],
      "游戏元素": [
        "角色属性"
      ],
      "色彩调性-整体饱和度": [
        "高饱和"
      ],
      "主要场景": [
        "战场",
        "星空"
      ],
      "营销卖点": [
        "高品质感"
      ],
      "视频主题": [
        "角色展示",
        "开服活动"
      ],
      "核心玩法": [
        "动作战斗"
      ],
      "情绪触发点": [
        "视觉华丽特效"
      ],
      "开头钩子": [
        "美女/高吸引力人物"
      ],
      "视频类型": [
        "CG动画"
      ],
      "视觉特效程度": [
        "强特效"
      ]
    }
  },
  {
    "gameId": "dragon",
    "gameName": "Dragon Traveler",
    "rank": 10,
    "company": "HongKong GameTree Limited",
    "advertiserName": "Dragon Traveler",
    "category": "二次元放置 RPG",
    "theme": "奇幻冒险 / 角色收集",
    "adKey": "e35be8268144981231382004a1e27391",
    "materialId": "125112b8cadbd2a3cdb804d1acfe80ab",
    "platformCode": "admob",
    "platformName": "Admob",
    "impression": 814058,
    "heat": 790,
    "days": 101,
    "firstSeen": 1778214166,
    "lastSeen": 1786923925,
    "regions": [
      "日本"
    ],
    "language": "未标注语言",
    "duration": 55,
    "video": "https://sp2cdn-idea-global.zingfront.com/sp_opera/9386420b3285b6846e4d0db1bf3eee55.mp4",
    "createdAt": 1782003493,
    "searchFlag": 145458,
    "copy": "",
    "tags": {
      "营销卖点": [
        "沉浸剧情",
        "自由定制"
      ],
      "结尾引导": [
        "悬念中断"
      ],
      "核心玩法": [
        "团队战斗",
        "角色养成"
      ],
      "开头钩子": [
        "反转反差"
      ],
      "色彩调性-主色系": [
        "多彩/彩色"
      ],
      "美术风格": [
        "2D二次元"
      ],
      "视频主题": [
        "角色展示",
        "剧情叙事"
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
        "角色详情面板"
      ],
      "情绪触发点": [
        "夸张表情",
        "角色形象反差"
      ],
      "视觉特效程度": [
        "强特效"
      ],
      "玩家动机": [
        "收集拥有"
      ]
    }
  },
  {
    "gameId": "dragon",
    "gameName": "Dragon Traveler",
    "rank": 11,
    "company": "HongKong GameTree Limited",
    "advertiserName": "Dragon Traveler",
    "category": "二次元放置 RPG",
    "theme": "奇幻冒险 / 角色收集",
    "adKey": "f37d12a961f197910a50d5c081857c87",
    "materialId": "9b0d2f58beefe0a92d58a8c7e9909c21",
    "platformCode": "threads",
    "platformName": "Threads",
    "impression": 3056626,
    "heat": 786,
    "days": 131,
    "firstSeen": 1775113200,
    "lastSeen": 1786320608,
    "regions": [
      "意大利",
      "波兰",
      "瑞士",
      "马来西亚",
      "比利时",
      "巴西",
      "法国",
      "芬兰",
      "西班牙",
      "葡萄牙",
      "智利",
      "菲律宾",
      "巴拉圭",
      "瑞典",
      "德国",
      "荷兰",
      "美国",
      "奥地利",
      "匈牙利",
      "丹麦",
      "墨西哥",
      "新加坡"
    ],
    "language": "英语",
    "duration": 10,
    "video": "https://sp2cdn-idea-global.zingfront.com/sp_opera/8734fe5c3d4a86b7bef6deabbce6bcbe.mp4",
    "createdAt": 1776365388,
    "searchFlag": 145458,
    "copy": "🎉 Love, Laughs, and Utter Mayhem! 😜",
    "tags": {
      "色彩调性-明暗度": [
        "明亮"
      ],
      "角色类型": [
        "游戏角色"
      ],
      "内容题材": [
        "奇幻"
      ],
      "色彩调性-主色系": [
        "多彩/彩色"
      ],
      "玩家动机": [
        "收集拥有"
      ],
      "色彩调性-整体饱和度": [
        "高饱和"
      ],
      "主要场景": [
        "体育场",
        "竞技场"
      ],
      "营销卖点": [
        "高品质感"
      ],
      "视频主题": [
        "角色展示",
        "开服活动"
      ],
      "核心玩法": [
        "角色收集"
      ],
      "开头钩子": [
        "美女/高吸引力人物"
      ],
      "视频类型": [
        "游戏录屏"
      ],
      "视觉特效程度": [
        "强特效"
      ]
    }
  },
  {
    "gameId": "dragon",
    "gameName": "Dragon Traveler",
    "rank": 12,
    "company": "HongKong GameTree Limited",
    "advertiserName": "Dragon Traveler",
    "category": "二次元放置 RPG",
    "theme": "奇幻冒险 / 角色收集",
    "adKey": "a1e89512002897155c8ba726ec651669",
    "materialId": "343caefcfb876e32f8e72c031882d83a",
    "platformCode": "youtube",
    "platformName": "YouTube",
    "impression": 791334,
    "heat": 786,
    "days": 101,
    "firstSeen": 1776767174,
    "lastSeen": 1785414786,
    "regions": [
      "泰国"
    ],
    "language": "未标注语言",
    "duration": 30,
    "video": "https://sp2cdn-idea-global.zingfront.com/sp_opera/2d87a09697b318860d22ce57f59f8b7b.mp4",
    "createdAt": 1781284937,
    "searchFlag": 145458,
    "copy": "",
    "tags": {
      "美术风格": [
        "2D二次元"
      ],
      "色彩调性-明暗度": [
        "明亮"
      ],
      "角色类型": [
        "游戏角色"
      ],
      "内容题材": [
        "奇幻"
      ],
      "色彩调性-主色系": [
        "冷色系"
      ],
      "玩家动机": [
        "掌控力量"
      ],
      "色彩调性-整体饱和度": [
        "高饱和"
      ],
      "主要场景": [
        "塔楼",
        "天空",
        "高台"
      ],
      "营销卖点": [
        "高品质感"
      ],
      "视频主题": [
        "角色展示",
        "剧情叙事"
      ],
      "核心玩法": [
        "BOSS挑战"
      ],
      "情绪触发点": [
        "巨大敌人压迫感",
        "视觉冲击特效"
      ],
      "结尾引导": [
        "品牌/LOGO收尾"
      ],
      "开头钩子": [
        "美女/高吸引力人物"
      ],
      "视频类型": [
        "CG动画"
      ],
      "视觉特效程度": [
        "强特效"
      ]
    }
  },
  {
    "gameId": "dragon",
    "gameName": "Dragon Traveler",
    "rank": 13,
    "company": "HongKong GameTree Limited",
    "advertiserName": "Dragon Traveler",
    "category": "二次元放置 RPG",
    "theme": "奇幻冒险 / 角色收集",
    "adKey": "d81d1425bd3b9d9713fa269c0682fd4e",
    "materialId": "197cc2bc992fbca1f1d884635c7aeabe",
    "platformCode": "threads",
    "platformName": "Threads",
    "impression": 3042749,
    "heat": 784,
    "days": 131,
    "firstSeen": 1775113200,
    "lastSeen": 1786320608,
    "regions": [
      "瑞士",
      "马来西亚",
      "荷兰",
      "智利",
      "美国",
      "巴西",
      "比利时",
      "瑞典",
      "巴拉圭",
      "西班牙",
      "法国",
      "意大利",
      "葡萄牙",
      "匈牙利",
      "芬兰",
      "波兰",
      "新加坡",
      "菲律宾",
      "奥地利",
      "墨西哥",
      "德国"
    ],
    "language": "英语",
    "duration": 10,
    "video": "https://sp2cdn-idea-global.zingfront.com/sp_opera/5f2a3233e655a11765f44451a531b348.mp4",
    "createdAt": 1776373275,
    "searchFlag": 145458,
    "copy": "🎉 Love, Laughs, and Utter Mayhem! 😜",
    "tags": {
      "色彩调性-明暗度": [
        "明亮"
      ],
      "角色类型": [
        "游戏角色"
      ],
      "内容题材": [
        "奇幻"
      ],
      "色彩调性-主色系": [
        "多彩/彩色"
      ],
      "玩家动机": [
        "收集拥有"
      ],
      "色彩调性-整体饱和度": [
        "高饱和"
      ],
      "主要场景": [
        "体育场",
        "游戏地图"
      ],
      "营销卖点": [
        "丰富耐玩"
      ],
      "视频主题": [
        "角色展示",
        "开服活动"
      ],
      "核心玩法": [
        "角色收集"
      ],
      "结尾引导": [
        "静态信息页"
      ],
      "开头钩子": [
        "美女/高吸引力人物"
      ],
      "视频类型": [
        "游戏录屏"
      ],
      "视觉特效程度": [
        "中等特效"
      ]
    }
  },
  {
    "gameId": "dragon",
    "gameName": "Dragon Traveler",
    "rank": 14,
    "company": "HongKong GameTree Limited",
    "advertiserName": "Dragon Traveler",
    "category": "二次元放置 RPG",
    "theme": "奇幻冒险 / 角色收集",
    "adKey": "0cd0a0494489b3eaeb4f59cb31741209",
    "materialId": "62aa5fa2c13f229b4eab8d0d643b5227",
    "platformCode": "admob",
    "platformName": "Admob",
    "impression": 720078,
    "heat": 782,
    "days": 103,
    "firstSeen": 1776924116,
    "lastSeen": 1785724034,
    "regions": [
      "韩国"
    ],
    "language": "未标注语言",
    "duration": 29,
    "video": "https://sp2cdn-idea-global.zingfront.com/sp_opera/e8fb2d54e3ae26246e6abe26a6d3ff5f.mp4",
    "createdAt": 1782675951,
    "searchFlag": 145458,
    "copy": "",
    "tags": {
      "营销卖点": [
        "高品质感",
        "沉浸剧情"
      ],
      "结尾引导": [
        "品牌/LOGO收尾"
      ],
      "核心玩法": [
        "剧情对话",
        "技能战斗"
      ],
      "开头钩子": [
        "美女/高吸引力人物"
      ],
      "色彩调性-主色系": [
        "多彩/彩色"
      ],
      "美术风格": [
        "风格化3D"
      ],
      "视频主题": [
        "剧情叙事",
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
        "游戏内剧情"
      ],
      "色彩调性-整体饱和度": [
        "高饱和"
      ],
      "游戏元素": [
        "伤害数值",
        "技能冷却机制",
        "血条UI"
      ],
      "情绪触发点": [
        "华丽技能特效"
      ],
      "视觉特效程度": [
        "强特效"
      ]
    }
  },
  {
    "gameId": "dragon",
    "gameName": "Dragon Traveler",
    "rank": 15,
    "company": "HongKong GameTree Limited",
    "advertiserName": "Dragon Traveler",
    "category": "二次元放置 RPG",
    "theme": "奇幻冒险 / 角色收集",
    "adKey": "ca2697cb86081a1f821d77f80faefba5",
    "materialId": "18040145f83416627d747654c88a04ac",
    "platformCode": "threads",
    "platformName": "Threads",
    "impression": 2156772,
    "heat": 777,
    "days": 135,
    "firstSeen": 1772697600,
    "lastSeen": 1784261133,
    "regions": [
      "丹麦",
      "波兰",
      "奥地利",
      "芬兰",
      "英国",
      "匈牙利",
      "卢森堡",
      "挪威",
      "比利时",
      "瑞士",
      "美国",
      "荷兰",
      "德国",
      "葡萄牙",
      "西班牙",
      "瑞典",
      "意大利",
      "法国"
    ],
    "language": "英语",
    "duration": 41,
    "video": "https://sp2cdn-idea-global.zingfront.com/sp_opera/a378c51eebfae02864239866d1ede022.mp4",
    "createdAt": 1776894403,
    "searchFlag": 145458,
    "copy": "Download Now! ⬇️",
    "tags": {
      "美术风格": [
        "2D二次元"
      ],
      "色彩调性-明暗度": [
        "明亮"
      ],
      "角色类型": [
        "敌人/怪物",
        "真人",
        "游戏角色"
      ],
      "内容题材": [
        "奇幻"
      ],
      "色彩调性-主色系": [
        "暖色系"
      ],
      "玩家动机": [
        "成就进步",
        "情绪宣泄"
      ],
      "游戏元素": [
        "技能特效",
        "角色队伍"
      ],
      "色彩调性-整体饱和度": [
        "高饱和"
      ],
      "主要场景": [
        "城堡",
        "废墟战场",
        "竞技场"
      ],
      "营销卖点": [
        "沉浸剧情"
      ],
      "视频主题": [
        "剧情叙事",
        "爽快战斗"
      ],
      "核心玩法": [
        "BOSS挑战",
        "团队战斗"
      ]
    }
  },
  {
    "gameId": "dragon",
    "gameName": "Dragon Traveler",
    "rank": 16,
    "company": "HongKong GameTree Limited",
    "advertiserName": "Dragon Traveler",
    "category": "二次元放置 RPG",
    "theme": "奇幻冒险 / 角色收集",
    "adKey": "a240d434750904011fe1a38bea14c959",
    "materialId": "9b97957888d690a19655fdfb7a78db07",
    "platformCode": "audience_network",
    "platformName": "Audience Network",
    "impression": 2740683,
    "heat": 763,
    "days": 140,
    "firstSeen": 1772265600,
    "lastSeen": 1784261133,
    "regions": [
      "丹麦",
      "瑞士",
      "泰国",
      "葡萄牙",
      "荷兰",
      "印度尼西亚",
      "瑞典",
      "美国",
      "奥地利",
      "英国",
      "波兰",
      "比利时",
      "新加坡",
      "法国",
      "菲律宾",
      "马来西亚",
      "挪威",
      "西班牙",
      "匈牙利",
      "德国",
      "芬兰",
      "卢森堡",
      "意大利"
    ],
    "language": "英语",
    "duration": 34,
    "video": "https://sp2cdn-idea-global.zingfront.com/sp_opera/5a44bc36cdfed5c77893ff05f45441a3.mp4",
    "createdAt": 1772293930,
    "searchFlag": 145458,
    "copy": "👑 RETURN, RECLAIM, REIGN—DRAGON STYLE! 🐲 / 🚀 Brave Journey — 100 free daily spins of the wheel! The Forest Lord strikes again! 🌲",
    "tags": {
      "美术风格": [
        "混合"
      ],
      "视频类型": [
        "真人口播"
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
        "中等"
      ],
      "角色类型": [
        "真人",
        "游戏角色"
      ],
      "主要场景": [
        "家庭客厅"
      ],
      "营销卖点": [
        "无明确卖点"
      ],
      "结尾引导": [
        "无明确引导"
      ],
      "核心玩法": [
        "动作战斗",
        "技能释放"
      ],
      "开头钩子": [
        "真人强情绪"
      ],
      "视频主题": [
        "爽快战斗",
        "剧情叙事"
      ],
      "内容题材": [
        "奇幻"
      ],
      "游戏元素": [
        "击杀计数",
        "剧情对话",
        "技能冷却机制"
      ]
    }
  },
  {
    "gameId": "dragon",
    "gameName": "Dragon Traveler",
    "rank": 17,
    "company": "GameTree Entertainment",
    "advertiserName": "Dragon Traveler",
    "category": "二次元放置 RPG",
    "theme": "奇幻冒险 / 角色收集",
    "adKey": "a01be790a929899bae7763468e9d24ce",
    "materialId": "c530a9c507c81141dc3cf49865359a44",
    "platformCode": "admob",
    "platformName": "Admob",
    "impression": 1261444,
    "heat": 761,
    "days": 137,
    "firstSeen": 1773834314,
    "lastSeen": 1785553105,
    "regions": [
      "荷兰",
      "乌克兰",
      "中国香港",
      "新加坡",
      "爱尔兰",
      "摩洛哥",
      "丹麦",
      "法国",
      "土耳其",
      "德国",
      "马来西亚",
      "奥地利",
      "芬兰",
      "泰国",
      "比利时",
      "西班牙",
      "日本",
      "瑞典",
      "葡萄牙",
      "俄罗斯联邦",
      "智利",
      "加拿大",
      "中国台湾",
      "挪威",
      "墨西哥",
      "罗马尼亚",
      "卢森堡",
      "孟加拉国",
      "以色列",
      "波兰",
      "澳大利亚",
      "菲律宾",
      "瑞士",
      "印度尼西亚",
      "斯洛文尼亚",
      "巴西",
      "格鲁吉亚",
      "阿根廷",
      "美国",
      "匈牙利",
      "印度",
      "哥伦比亚",
      "阿塞拜疆",
      "巴拿马",
      "意大利",
      "韩国",
      "英国"
    ],
    "language": "英语",
    "duration": 13,
    "video": "https://sp2cdn-idea-global.zingfront.com/sp_opera/5bde3ee7f5ef00c922d91bf1cbc7c605.mp4",
    "createdAt": 1773706273,
    "searchFlag": 145458,
    "copy": "Dragon Traveler",
    "tags": {
      "色彩调性-整体饱和度": [
        "高饱和"
      ],
      "色彩调性-主色系": [
        "暖色系"
      ],
      "视觉特效程度": [
        "强特效"
      ],
      "美术风格": [
        "2D二次元"
      ],
      "色彩调性-明暗度": [
        "明亮"
      ],
      "角色类型": [
        "游戏角色"
      ],
      "主要场景": [
        "战场",
        "星空背景"
      ],
      "视频类型": [
        "CG动画"
      ],
      "营销卖点": [
        "高品质感"
      ],
      "结尾引导": [
        "静态信息页"
      ],
      "核心玩法": [
        "动作战斗"
      ],
      "开头钩子": [
        "美女/高吸引力人物"
      ],
      "视频主题": [
        "角色展示",
        "开服活动"
      ],
      "内容题材": [
        "奇幻"
      ],
      "情绪触发点": [
        "视觉强特效"
      ],
      "玩家动机": [
        "情绪宣泄"
      ]
    }
  },
  {
    "gameId": "dragon",
    "gameName": "Dragon Traveler",
    "rank": 18,
    "company": "HongKong GameTree Limited",
    "advertiserName": "Dragon Traveler",
    "category": "二次元放置 RPG",
    "theme": "奇幻冒险 / 角色收集",
    "adKey": "873b500654c9cc7b794581d9b814c9cf",
    "materialId": "8a5b48c32fb21dc8f23db1bd7e222bab",
    "platformCode": "admob",
    "platformName": "Admob",
    "impression": 1113822,
    "heat": 647,
    "days": 116,
    "firstSeen": 1776236923,
    "lastSeen": 1786205773,
    "regions": [
      "匈牙利",
      "澳大利亚",
      "韩国",
      "挪威",
      "英国",
      "马来西亚",
      "葡萄牙",
      "墨西哥",
      "越南",
      "印度",
      "日本",
      "丹麦",
      "巴西",
      "中国台湾",
      "加拿大",
      "巴基斯坦",
      "智利",
      "土耳其",
      "埃及",
      "格鲁吉亚",
      "意大利",
      "沙特阿拉伯",
      "法国",
      "西班牙",
      "荷兰",
      "孟加拉国",
      "美国",
      "菲律宾",
      "瑞士",
      "中国香港",
      "新加坡",
      "俄罗斯联邦"
    ],
    "language": "简体中文",
    "duration": 12,
    "video": "https://sp2cdn-idea-global.zingfront.com/sp_opera/a587a19d70a418f516c94335a0923b2e.mp4",
    "createdAt": 1773253814,
    "searchFlag": 145458,
    "copy": "龙魂旅人",
    "tags": {
      "内容题材": [
        "奇幻冒险"
      ],
      "核心玩法": [
        "动作冒险",
        "放置挂机",
        "角色扮演"
      ],
      "开头钩子": [
        "视觉异常/违和感"
      ],
      "游戏元素": [
        "战斗特效",
        "技能释放",
        "角色展示"
      ],
      "玩家动机": [
        "技巧挑战",
        "探索好奇"
      ],
      "视频类型": [
        "CG动画"
      ]
    }
  },
  {
    "gameId": "dragon",
    "gameName": "Dragon Traveler",
    "rank": 19,
    "company": "HongKong GameTree Limited",
    "advertiserName": "Dragon Traveler",
    "category": "二次元放置 RPG",
    "theme": "奇幻冒险 / 角色收集",
    "adKey": "3a82304ac3d022f8fcf08f667fecec4b",
    "materialId": "b65cc07807b908ef13d30cca1d6bc0f0",
    "platformCode": "admob",
    "platformName": "Admob",
    "impression": 556807,
    "heat": 638,
    "days": 86,
    "firstSeen": 1778214166,
    "lastSeen": 1785572920,
    "regions": [
      "日本"
    ],
    "language": "未标注语言",
    "duration": 28,
    "video": "https://sp2cdn-idea-global.zingfront.com/sp_opera/0a2a24b0af74f722e5a0dbc2f199ce5b.mp4",
    "createdAt": 1783865359,
    "searchFlag": 145459,
    "copy": "",
    "tags": {
      "营销卖点": [
        "免费福利"
      ],
      "结尾引导": [
        "福利领取/立即领取",
        "品牌/LOGO收尾"
      ],
      "核心玩法": [
        "奖励领取",
        "活动参与"
      ],
      "开头钩子": [
        "搞笑/荒诞"
      ],
      "色彩调性-主色系": [
        "多彩/彩色"
      ],
      "美术风格": [
        "2D二次元"
      ],
      "视频主题": [
        "利益引导",
        "IP联动"
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
        "礼包码",
        "限时活动"
      ],
      "情绪触发点": [
        "限时稀缺提示"
      ],
      "视觉特效程度": [
        "强特效"
      ],
      "玩家动机": [
        "收集拥有"
      ],
      "主要场景": [
        "户外树林"
      ]
    }
  },
  {
    "gameId": "dragon",
    "gameName": "Dragon Traveler",
    "rank": 20,
    "company": "GameTree Entertainment",
    "advertiserName": "Dragon Traveler",
    "category": "二次元放置 RPG",
    "theme": "奇幻冒险 / 角色收集",
    "adKey": "34894d52c858f1f822feae33e9b32016",
    "materialId": "26c5a8fb765ce94e01c255f4bac6002e",
    "platformCode": "facebook",
    "platformName": "FB News Feed",
    "impression": 637137,
    "heat": 622,
    "days": 82,
    "firstSeen": 1779951600,
    "lastSeen": 1786957292,
    "regions": [
      "英国",
      "瑞典",
      "德国",
      "奥地利",
      "美国",
      "卢森堡",
      "法国",
      "加拿大",
      "荷兰",
      "挪威",
      "新加坡",
      "丹麦"
    ],
    "language": "英语",
    "duration": 11,
    "video": "https://sp2cdn-idea-global.zingfront.com/sp_opera/9bd852f9c095a7c52885f36e3ac2856d.mp4",
    "createdAt": 1779964198,
    "searchFlag": 145458,
    "copy": "Install Now 💾 / 🔄 Reset Reality! Enter Another World! 🌍",
    "tags": {
      "色彩调性-整体饱和度": [
        "高饱和"
      ],
      "色彩调性-主色系": [
        "暖色系"
      ],
      "视觉特效程度": [
        "强特效"
      ],
      "美术风格": [
        "2D二次元"
      ],
      "色彩调性-明暗度": [
        "明亮"
      ],
      "角色类型": [
        "真人",
        "游戏角色"
      ],
      "主要场景": [
        "奇幻战场",
        "学校走廊"
      ],
      "视频类型": [
        "恶搞混剪/鬼畜风"
      ],
      "营销卖点": [
        "高品质感"
      ],
      "结尾引导": [
        "品牌/LOGO收尾"
      ],
      "核心玩法": [
        "角色召唤"
      ],
      "开头钩子": [
        "视觉异常/违和感",
        "美女/高吸引力人物"
      ],
      "视频主题": [
        "角色展示",
        "IP联动"
      ],
      "内容题材": [
        "奇幻"
      ],
      "游戏元素": [
        "角色召唤"
      ],
      "情绪触发点": [
        "真人夸张反应"
      ]
    }
  },
  {
    "gameId": "chaos",
    "gameName": "Chaos Zero Nightmare",
    "rank": 1,
    "company": "Smilegate, Inc.",
    "advertiserName": "Chaos Zero Nightmare",
    "category": "Roguelike 卡牌 RPG",
    "theme": "暗黑科幻 / 卡牌战斗",
    "adKey": "8dcd5e790324df5a3b5a7a8d2ff7f74b",
    "materialId": "29a6f984e259ae42dfd82e60450d9f9f",
    "platformCode": "admob",
    "platformName": "Admob",
    "impression": 1565146,
    "heat": 940,
    "days": 199,
    "firstSeen": 1768798533,
    "lastSeen": 1785897862,
    "regions": [
      "加拿大",
      "新加坡",
      "美国",
      "英国",
      "德国",
      "法国",
      "澳大利亚"
    ],
    "language": "未标注语言",
    "duration": 24,
    "video": "https://sp2cdn-idea-global.zingfront.com/sp_opera/51c2292c29f71691f381d68144bca7ff.mp4",
    "createdAt": 1768645513,
    "searchFlag": 145458,
    "copy": "",
    "tags": {
      "内容题材": [
        "奇幻战斗"
      ],
      "核心玩法": [
        "roguelike",
        "回合制"
      ],
      "开头钩子": [
        "强冲突/矛盾开场"
      ],
      "游戏元素": [
        "卡牌系统",
        "战斗界面",
        "敌人BOSS",
        "角色技能展示"
      ],
      "玩家动机": [
        "技巧挑战",
        "探索好奇"
      ],
      "视频类型": [
        "其他"
      ]
    }
  },
  {
    "gameId": "chaos",
    "gameName": "Chaos Zero Nightmare",
    "rank": 2,
    "company": "Smilegate, Inc.",
    "advertiserName": "Chaos Zero Nightmare",
    "category": "Roguelike 卡牌 RPG",
    "theme": "暗黑科幻 / 卡牌战斗",
    "adKey": "d3602cb9dd7321fac9ff2cd09d78c882",
    "materialId": "82f5ed734cf6e4250e8f08f267f18621",
    "platformCode": "admob",
    "platformName": "Admob",
    "impression": 1667621,
    "heat": 920,
    "days": 179,
    "firstSeen": 1768799180,
    "lastSeen": 1784179228,
    "regions": [
      "加拿大",
      "英国",
      "瑞士",
      "美国",
      "法国",
      "澳大利亚",
      "新加坡",
      "德国"
    ],
    "language": "未标注语言",
    "duration": 16,
    "video": "https://sp2cdn-idea-global.zingfront.com/sp_opera/1af734b10559275e6f9f54603eeaf1d7.mp4",
    "createdAt": 1766691079,
    "searchFlag": 145359,
    "copy": "",
    "tags": {
      "内容题材": [
        "卡牌对战"
      ],
      "核心玩法": [
        "roguelike",
        "策略战斗"
      ],
      "开头钩子": [
        "直接卖点抛出"
      ],
      "游戏元素": [
        "卡牌选择",
        "回合制",
        "战斗界面",
        "角色技能"
      ],
      "玩家动机": [
        "创造表达",
        "技巧挑战"
      ],
      "视频类型": [
        "其他"
      ]
    }
  },
  {
    "gameId": "chaos",
    "gameName": "Chaos Zero Nightmare",
    "rank": 3,
    "company": "Smilegate, Inc.",
    "advertiserName": "Chaos Zero Nightmare",
    "category": "Roguelike 卡牌 RPG",
    "theme": "暗黑科幻 / 卡牌战斗",
    "adKey": "920ec2d3eb631fc485a7278aa473516d",
    "materialId": "35dd634bcd3e568a6868e5a15bd51f8c",
    "platformCode": "admob",
    "platformName": "Admob",
    "impression": 1059842,
    "heat": 869,
    "days": 179,
    "firstSeen": 1768804852,
    "lastSeen": 1784179228,
    "regions": [
      "瑞士",
      "澳大利亚",
      "法国",
      "德国",
      "墨西哥",
      "美国",
      "新加坡"
    ],
    "language": "gd",
    "duration": 16,
    "video": "https://sp2cdn-idea-global.zingfront.com/sp_opera/fc4e94f1daaf492aa2be4c1a7bb78dcd.mp4",
    "createdAt": 1765998645,
    "searchFlag": 145359,
    "copy": "Chaos Zero Nightmare",
    "tags": {
      "内容题材": [
        "幻想世界"
      ],
      "核心玩法": [
        "roguelike",
        "卡牌策略",
        "角色扮演"
      ],
      "开头钩子": [
        "操作挑战/智力难题"
      ],
      "游戏元素": [
        "卡牌选择",
        "技能释放",
        "角色战斗"
      ],
      "玩家动机": [
        "技巧挑战",
        "探索好奇"
      ],
      "视频类型": [
        "其他"
      ]
    }
  },
  {
    "gameId": "chaos",
    "gameName": "Chaos Zero Nightmare",
    "rank": 4,
    "company": "Smilegate, Inc.",
    "advertiserName": "Chaos Zero Nightmare",
    "category": "Roguelike 卡牌 RPG",
    "theme": "暗黑科幻 / 卡牌战斗",
    "adKey": "b56331c8bc0935eac063a2d7bc1db9f3",
    "materialId": "3c731da5e014593b9a084dbf912505b2",
    "platformCode": "admob",
    "platformName": "Admob",
    "impression": 1220532,
    "heat": 765,
    "days": 140,
    "firstSeen": 1774362232,
    "lastSeen": 1786330622,
    "regions": [
      "法国",
      "瑞士",
      "澳大利亚",
      "新加坡",
      "德国",
      "美国",
      "中国香港",
      "中国台湾",
      "韩国"
    ],
    "language": "英语",
    "duration": 27,
    "video": "https://sp2cdn-idea-global.zingfront.com/sp_opera/d1c3b2532bceee8d80e72ce4ee2364ed.mp4",
    "createdAt": 1774016401,
    "searchFlag": 145458,
    "copy": "A Chaos-Loop RPG Driven by Choice",
    "tags": {
      "内容题材": [
        "未来科技"
      ],
      "核心玩法": [
        "roguelike",
        "策略战斗"
      ],
      "开头钩子": [
        "直接卖点抛出"
      ],
      "游戏元素": [
        "卡牌对战",
        "技能特效",
        "武器展示",
        "角色展示"
      ],
      "玩家动机": [
        "技巧挑战",
        "掌控力量",
        "探索好奇"
      ],
      "视频类型": [
        "CG动画"
      ]
    }
  },
  {
    "gameId": "chaos",
    "gameName": "Chaos Zero Nightmare",
    "rank": 5,
    "company": "Smilegate, Inc.",
    "advertiserName": "Chaos Zero Nightmare",
    "category": "Roguelike 卡牌 RPG",
    "theme": "暗黑科幻 / 卡牌战斗",
    "adKey": "9327a21143cc4bb5dbd26ec463814ea4",
    "materialId": "46c3f401592d8b4ff2e9c1881c3983a4",
    "platformCode": "admob",
    "platformName": "Admob",
    "impression": 1121799,
    "heat": 725,
    "days": 135,
    "firstSeen": 1774362806,
    "lastSeen": 1785897842,
    "regions": [
      "爱尔兰",
      "美国",
      "波兰",
      "西班牙",
      "葡萄牙",
      "法国",
      "意大利",
      "瑞典",
      "菲律宾",
      "中国台湾",
      "芬兰",
      "奥地利",
      "德国",
      "罗马尼亚",
      "荷兰",
      "瑞士",
      "韩国",
      "印度尼西亚",
      "希腊",
      "阿联酋",
      "比利时"
    ],
    "language": "未标注语言",
    "duration": 27,
    "video": "https://sp2cdn-idea-global.zingfront.com/sp_opera/e6f66012005dfd4c1e6d5479c6909d53.mp4",
    "createdAt": 1773989980,
    "searchFlag": 145458,
    "copy": "",
    "tags": {
      "内容题材": [
        "暗黑幻想"
      ],
      "核心玩法": [
        "roguelike",
        "回合制"
      ],
      "开头钩子": [
        "直接卖点抛出"
      ],
      "游戏元素": [
        "战斗场景",
        "武器展示",
        "角色展示"
      ],
      "玩家动机": [
        "技巧挑战",
        "探索好奇"
      ],
      "视频类型": [
        "CG动画"
      ]
    }
  },
  {
    "gameId": "chaos",
    "gameName": "Chaos Zero Nightmare",
    "rank": 6,
    "company": "Smilegate, Inc.",
    "advertiserName": "Chaos Zero Nightmare",
    "category": "Roguelike 卡牌 RPG",
    "theme": "暗黑科幻 / 卡牌战斗",
    "adKey": "c7d48b6a2fc1a8ba4a933485e2bc742b",
    "materialId": "b676b6034a58359db46114433d391144",
    "platformCode": "admob",
    "platformName": "Admob",
    "impression": 1049210,
    "heat": 725,
    "days": 138,
    "firstSeen": 1773962520,
    "lastSeen": 1785722990,
    "regions": [
      "美国",
      "葡萄牙",
      "希腊",
      "西班牙",
      "荷兰",
      "中国台湾",
      "罗马尼亚",
      "瑞士",
      "波兰",
      "法国",
      "意大利",
      "中国香港",
      "德国",
      "新加坡"
    ],
    "language": "gd",
    "duration": 17,
    "video": "https://sp2cdn-idea-global.zingfront.com/sp_opera/b0a545dcf6c1f8eb8849b69e73c986dc.mp4",
    "createdAt": 1773962606,
    "searchFlag": 145458,
    "copy": "Chaos Zero Nightmare",
    "tags": {
      "色彩调性-整体饱和度": [
        "高饱和"
      ],
      "色彩调性-主色系": [
        "冷色系"
      ],
      "视觉特效程度": [
        "强特效"
      ],
      "美术风格": [
        "2D二次元"
      ],
      "色彩调性-明暗度": [
        "偏暗"
      ],
      "角色类型": [
        "游戏角色"
      ],
      "主要场景": [
        "太空基地",
        "战场废墟"
      ],
      "视频类型": [
        "CG动画"
      ],
      "营销卖点": [
        "高品质感",
        "沉浸剧情"
      ],
      "结尾引导": [
        "明确下载引导"
      ],
      "核心玩法": [
        "卡牌构筑",
        "回合战斗"
      ],
      "开头钩子": [
        "剧情悬念",
        "视觉异常/违和感"
      ],
      "视频主题": [
        "剧情叙事",
        "角色展示"
      ],
      "内容题材": [
        "末日科幻"
      ],
      "游戏元素": [
        "战斗演示"
      ]
    }
  },
  {
    "gameId": "chaos",
    "gameName": "Chaos Zero Nightmare",
    "rank": 7,
    "company": "Smilegate, Inc.",
    "advertiserName": "Chaos Zero Nightmare",
    "category": "Roguelike 卡牌 RPG",
    "theme": "暗黑科幻 / 卡牌战斗",
    "adKey": "fba9e6bc9ab0754f768c8ddd51c10f91",
    "materialId": "4d591fde14a6b3eada3d78e24d72b478",
    "platformCode": "admob",
    "platformName": "Admob",
    "impression": 930659,
    "heat": 679,
    "days": 133,
    "firstSeen": 1774365292,
    "lastSeen": 1785722990,
    "regions": [
      "中国台湾",
      "葡萄牙",
      "法国",
      "西班牙",
      "希腊",
      "美国",
      "罗马尼亚",
      "荷兰",
      "意大利",
      "德国",
      "韩国",
      "波兰",
      "秘鲁"
    ],
    "language": "未标注语言",
    "duration": 17,
    "video": "https://sp2cdn-idea-global.zingfront.com/sp_opera/62152a24e32c6e7db99e0e23afab3cd7.mp4",
    "createdAt": 1773989984,
    "searchFlag": 145458,
    "copy": "",
    "tags": {
      "内容题材": [
        "末日"
      ],
      "核心玩法": [
        "roguelike",
        "回合制"
      ],
      "开头钩子": [
        "视觉异常/违和感"
      ],
      "游戏元素": [
        "卡牌系统",
        "怪物战斗",
        "角色技能展示"
      ],
      "玩家动机": [
        "技巧挑战",
        "探索好奇"
      ],
      "视频类型": [
        "CG动画"
      ]
    }
  },
  {
    "gameId": "chaos",
    "gameName": "Chaos Zero Nightmare",
    "rank": 8,
    "company": "Smilegate, Inc.",
    "advertiserName": "Chaos Zero Nightmare",
    "category": "Roguelike 卡牌 RPG",
    "theme": "暗黑科幻 / 卡牌战斗",
    "adKey": "1878726b0e8ba9205facd29a9e02d290",
    "materialId": "8cebac6453ad560bbd977cc9102aafb8",
    "platformCode": "admob",
    "platformName": "Admob",
    "impression": 773184,
    "heat": 651,
    "days": 133,
    "firstSeen": 1774378084,
    "lastSeen": 1785722990,
    "regions": [
      "芬兰",
      "奥地利",
      "波兰",
      "菲律宾",
      "印度尼西亚",
      "德国",
      "罗马尼亚",
      "中国香港",
      "意大利",
      "瑞典",
      "斯洛文尼亚",
      "西班牙",
      "美国",
      "葡萄牙",
      "智利",
      "中国台湾",
      "法国",
      "英国",
      "马来西亚",
      "爱尔兰",
      "丹麦",
      "荷兰",
      "韩国",
      "加拿大",
      "比利时",
      "挪威",
      "新加坡",
      "希腊",
      "卢森堡",
      "澳大利亚",
      "匈牙利",
      "泰国"
    ],
    "language": "gd",
    "duration": 17,
    "video": "https://sp2cdn-idea-global.zingfront.com/sp_opera/8a93c9da8f129863e39b89b8b3c829d2.mp4",
    "createdAt": 1774378252,
    "searchFlag": 145458,
    "copy": "Chaos Zero Nightmare",
    "tags": {
      "色彩调性-整体饱和度": [
        "高饱和"
      ],
      "色彩调性-主色系": [
        "高对比混合"
      ],
      "视觉特效程度": [
        "强特效"
      ],
      "色彩调性-明暗度": [
        "偏暗"
      ],
      "角色类型": [
        "游戏角色"
      ],
      "主要场景": [
        "末日战场",
        "游戏UI界面"
      ],
      "视频类型": [
        "CG动画"
      ],
      "营销卖点": [
        "沉浸剧情",
        "高品质感"
      ],
      "结尾引导": [
        "明确下载引导"
      ],
      "核心玩法": [
        "roguelike"
      ],
      "开头钩子": [
        "强冲突/矛盾开场",
        "视觉异常/违和感"
      ],
      "视频主题": [
        "剧情叙事",
        "玩法展示"
      ],
      "游戏元素": [
        "战斗场景",
        "角色立绘"
      ],
      "玩家动机": [
        "探索好奇",
        "情绪宣泄"
      ]
    }
  },
  {
    "gameId": "chaos",
    "gameName": "Chaos Zero Nightmare",
    "rank": 9,
    "company": "Smilegate, Inc.",
    "advertiserName": "Chaos Zero Nightmare",
    "category": "Roguelike 卡牌 RPG",
    "theme": "暗黑科幻 / 卡牌战斗",
    "adKey": "006271369c007b4835eaedeac8582541",
    "materialId": "0753f6a4aaf47c83e15bd0c54f2ee2f0",
    "platformCode": "admob",
    "platformName": "Admob",
    "impression": 528091,
    "heat": 417,
    "days": 62,
    "firstSeen": 1781145810,
    "lastSeen": 1786437187,
    "regions": [
      "韩国"
    ],
    "language": "未标注语言",
    "duration": 39,
    "video": "https://sp2cdn-idea-global.zingfront.com/sp_opera/4d958a1cc0bc8a5b5d52d6a5af47d89a.mp4",
    "createdAt": 1772729048,
    "searchFlag": 145458,
    "copy": "",
    "tags": {
      "内容题材": [
        "卡牌对战"
      ],
      "核心玩法": [
        "卡牌收集",
        "策略战斗",
        "角色养成"
      ],
      "开头钩子": [
        "紧张倒计时/压力"
      ],
      "游戏元素": [
        "卡牌对战",
        "战斗界面",
        "角色技能展示"
      ],
      "玩家动机": [
        "技巧挑战",
        "探索好奇"
      ],
      "视频类型": [
        "其他"
      ]
    }
  },
  {
    "gameId": "chaos",
    "gameName": "Chaos Zero Nightmare",
    "rank": 10,
    "company": "Smilegate, Inc.",
    "advertiserName": "Chaos Zero Nightmare",
    "category": "Roguelike 卡牌 RPG",
    "theme": "暗黑科幻 / 卡牌战斗",
    "adKey": "ff3abe8571088e514988ec31e57bf7a2",
    "materialId": "a2761352c22a15ba217718f54aa98db5",
    "platformCode": "admob",
    "platformName": "Admob",
    "impression": 407723,
    "heat": 306,
    "days": 52,
    "firstSeen": 1781068981,
    "lastSeen": 1785472162,
    "regions": [
      "美国"
    ],
    "language": "英语",
    "duration": 24,
    "video": "https://sp2cdn-idea-global.zingfront.com/sp_opera/e92bfec125128d138236b3df92a15f0b.mp4",
    "createdAt": 1781461498,
    "searchFlag": 145458,
    "copy": "A Chaos-Loop RPG Driven by Choice",
    "tags": {
      "营销卖点": [
        "高品质感"
      ],
      "结尾引导": [
        "明确下载引导"
      ],
      "核心玩法": [
        "卡牌构筑",
        "回合战斗"
      ],
      "开头钩子": [
        "美女/高吸引力人物"
      ],
      "色彩调性-主色系": [
        "多彩/彩色"
      ],
      "美术风格": [
        "2D二次元"
      ],
      "视频主题": [
        "角色展示",
        "玩法展示"
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
        "卡牌系统",
        "角色收集"
      ],
      "情绪触发点": [
        "华丽技能特效"
      ],
      "视觉特效程度": [
        "强特效"
      ],
      "玩家动机": [
        "收集拥有",
        "成就进步"
      ],
      "主要场景": [
        "战场"
      ]
    }
  },
  {
    "gameId": "chaos",
    "gameName": "Chaos Zero Nightmare",
    "rank": 11,
    "company": "Smilegate, Inc.",
    "advertiserName": "Chaos Zero Nightmare",
    "category": "Roguelike 卡牌 RPG",
    "theme": "暗黑科幻 / 卡牌战斗",
    "adKey": "d914af0a54bd1d3584e23ab44f082bf6",
    "materialId": "e1ccc800c5c43f791f35226ff7d407b7",
    "platformCode": "admob",
    "platformName": "Admob",
    "impression": 343134,
    "heat": 265,
    "days": 48,
    "firstSeen": 1781677057,
    "lastSeen": 1785722881,
    "regions": [
      "法国",
      "波兰",
      "西班牙"
    ],
    "language": "未标注语言",
    "duration": 23,
    "video": "https://sp2cdn-idea-global.zingfront.com/sp_opera/77363a008f7987963af2ab0911ba23e4.mp4",
    "createdAt": 1781904312,
    "searchFlag": 145458,
    "copy": "",
    "tags": {
      "营销卖点": [
        "高品质感",
        "自由定制"
      ],
      "结尾引导": [
        "明确下载引导"
      ],
      "核心玩法": [
        "卡牌构筑"
      ],
      "开头钩子": [
        "美女/高吸引力人物"
      ],
      "色彩调性-主色系": [
        "多彩/彩色"
      ],
      "美术风格": [
        "2D二次元"
      ],
      "视频主题": [
        "角色展示",
        "玩法展示"
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
        "卡牌选择",
        "战斗场景",
        "角色互动"
      ],
      "视觉特效程度": [
        "强特效"
      ],
      "玩家动机": [
        "收集拥有",
        "放松逃离"
      ],
      "主要场景": [
        "地牢场景"
      ]
    }
  },
  {
    "gameId": "chaos",
    "gameName": "Chaos Zero Nightmare",
    "rank": 12,
    "company": "Smilegate, Inc.",
    "advertiserName": "Chaos Zero Nightmare",
    "category": "Roguelike 卡牌 RPG",
    "theme": "暗黑科幻 / 卡牌战斗",
    "adKey": "e4fc23d6dd92f54f68a83301fee2f6cd",
    "materialId": "1a0c461a9e8389d6a3712dc469a55e12",
    "platformCode": "youtube",
    "platformName": "YouTube",
    "impression": 463321,
    "heat": 217,
    "days": 59,
    "firstSeen": 1781382093,
    "lastSeen": 1786330684,
    "regions": [
      "美国"
    ],
    "language": "未标注语言",
    "duration": 5,
    "video": "https://sp2cdn-idea-global.zingfront.com/sp_opera/3f27177122d820eab40e5d9b2944e15d.mp4",
    "createdAt": 1781382200,
    "searchFlag": 145458,
    "copy": "",
    "tags": {
      "营销卖点": [
        "自由定制"
      ],
      "结尾引导": [
        "明确下载引导"
      ],
      "核心玩法": [
        "剧情选择"
      ],
      "开头钩子": [
        "美女/高吸引力人物"
      ],
      "色彩调性-主色系": [
        "冷色系"
      ],
      "美术风格": [
        "2D二次元"
      ],
      "视频主题": [
        "角色展示",
        "剧情叙事"
      ],
      "色彩调性-明暗度": [
        "偏暗"
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
        "角色选择"
      ],
      "视觉特效程度": [
        "强特效"
      ],
      "玩家动机": [
        "探索好奇",
        "收集拥有"
      ],
      "主要场景": [
        "奇幻战场",
        "宇宙星空"
      ],
      "内容题材": [
        "科幻"
      ]
    }
  },
  {
    "gameId": "chaos",
    "gameName": "Chaos Zero Nightmare",
    "rank": 13,
    "company": "Smilegate, Inc.",
    "advertiserName": "Chaos Zero Nightmare",
    "category": "Roguelike 卡牌 RPG",
    "theme": "暗黑科幻 / 卡牌战斗",
    "adKey": "b22614b3ef18e414d31708d2bcffd9b3",
    "materialId": "469876e3b10851f769458aa29b1647d7",
    "platformCode": "admob",
    "platformName": "Admob",
    "impression": 328776,
    "heat": 217,
    "days": 40,
    "firstSeen": 1783124086,
    "lastSeen": 1786533440,
    "regions": [
      "韩国"
    ],
    "language": "未标注语言",
    "duration": 28,
    "video": "https://sp2cdn-idea-global.zingfront.com/sp_opera/d3ad14d85654028b9e319c9b803e795e.mp4",
    "createdAt": 1772729053,
    "searchFlag": 145458,
    "copy": "",
    "tags": {
      "内容题材": [
        "科幻战斗"
      ],
      "核心玩法": [
        "roguelike",
        "回合制",
        "角色扮演"
      ],
      "开头钩子": [
        "强冲突/矛盾开场"
      ],
      "游戏元素": [
        "战斗系统",
        "敌人单位",
        "武器展示",
        "角色技能"
      ],
      "玩家动机": [
        "技巧挑战",
        "探索好奇"
      ],
      "视频类型": [
        "CG动画"
      ]
    }
  },
  {
    "gameId": "chaos",
    "gameName": "Chaos Zero Nightmare",
    "rank": 14,
    "company": "Smilegate, Inc.",
    "advertiserName": "Chaos Zero Nightmare",
    "category": "Roguelike 卡牌 RPG",
    "theme": "暗黑科幻 / 卡牌战斗",
    "adKey": "0deabc41943f00e9200b65a0c5e9db71",
    "materialId": "e9c7aaec5042a7f22f84c2f55c9a5231",
    "platformCode": "youtube",
    "platformName": "YouTube",
    "impression": 283368,
    "heat": 211,
    "days": 41,
    "firstSeen": 1783580400,
    "lastSeen": 1787013977,
    "regions": [
      "日本"
    ],
    "language": "未标注语言",
    "duration": 25,
    "video": "https://sp2cdn-idea-global.zingfront.com/sp_opera/20880087df03f7badff7cd4478a3784b.mp4",
    "createdAt": 1783741954,
    "searchFlag": 145459,
    "copy": "",
    "tags": {
      "营销卖点": [
        "高品质感"
      ],
      "结尾引导": [
        "品牌/LOGO收尾"
      ],
      "核心玩法": [
        "卡牌对战",
        "技能释放"
      ],
      "开头钩子": [
        "无独立hook"
      ],
      "色彩调性-主色系": [
        "冷色系"
      ],
      "美术风格": [
        "2D二次元"
      ],
      "视频主题": [
        "玩法展示",
        "角色展示"
      ],
      "色彩调性-明暗度": [
        "偏暗"
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
        "战斗界面",
        "技能动画",
        "角色卡牌"
      ],
      "情绪触发点": [
        "华丽特效",
        "能量爆发"
      ],
      "视觉特效程度": [
        "强特效"
      ]
    }
  },
  {
    "gameId": "chaos",
    "gameName": "Chaos Zero Nightmare",
    "rank": 15,
    "company": "Smilegate, Inc.",
    "advertiserName": "Chaos Zero Nightmare",
    "category": "Roguelike 卡牌 RPG",
    "theme": "暗黑科幻 / 卡牌战斗",
    "adKey": "4d137ad8118c6c4901912a256782253e",
    "materialId": "e82746f9e6393ce48f85c1f53289c5d3",
    "platformCode": "youtube",
    "platformName": "YouTube",
    "impression": 297963,
    "heat": 204,
    "days": 39,
    "firstSeen": 1783144141,
    "lastSeen": 1786461527,
    "regions": [
      "韩国"
    ],
    "language": "未标注语言",
    "duration": 29,
    "video": "https://sp2cdn-idea-global.zingfront.com/sp_opera/0936df793c138fa053e876ad140e0296.mp4",
    "createdAt": 1772178342,
    "searchFlag": 145458,
    "copy": "",
    "tags": {
      "营销卖点": [
        "策略烧脑",
        "高品质感"
      ],
      "结尾引导": [
        "明确下载引导",
        "品牌/LOGO收尾"
      ],
      "核心玩法": [
        "动作战斗",
        "卡牌策略"
      ],
      "开头钩子": [
        "无独立hook"
      ],
      "色彩调性-主色系": [
        "冷色系"
      ],
      "美术风格": [
        "2D二次元"
      ],
      "视频主题": [
        "玩法展示",
        "爽快战斗"
      ],
      "色彩调性-明暗度": [
        "偏暗"
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
        "伤害数值",
        "关卡战斗",
        "卡牌选择",
        "技能连招"
      ]
    }
  },
  {
    "gameId": "chaos",
    "gameName": "Chaos Zero Nightmare",
    "rank": 16,
    "company": "Smilegate, Inc.",
    "advertiserName": "Chaos Zero Nightmare",
    "category": "Roguelike 卡牌 RPG",
    "theme": "暗黑科幻 / 卡牌战斗",
    "adKey": "016276827a334e49b5913001d3b68292",
    "materialId": "1610cda2839356f87a78fdff9d0337ff",
    "platformCode": "admob",
    "platformName": "Admob",
    "impression": 265649,
    "heat": 203,
    "days": 40,
    "firstSeen": 1783580400,
    "lastSeen": 1786948802,
    "regions": [
      "日本"
    ],
    "language": "英语",
    "duration": 29,
    "video": "https://sp2cdn-idea-global.zingfront.com/sp_opera/6b9a5095bf5d6a865a6a6acfb656b38e.mp4",
    "createdAt": 1783741988,
    "searchFlag": 145459,
    "copy": "A Chaos-Loop RPG Driven by Choice",
    "tags": {
      "营销卖点": [
        "沉浸剧情",
        "高品质感"
      ],
      "结尾引导": [
        "品牌/LOGO收尾"
      ],
      "核心玩法": [
        "弱点打击",
        "技能战斗"
      ],
      "开头钩子": [
        "视觉异常/违和感"
      ],
      "色彩调性-主色系": [
        "冷色系"
      ],
      "美术风格": [
        "2D二次元"
      ],
      "视频主题": [
        "剧情叙事",
        "爽快战斗"
      ],
      "色彩调性-明暗度": [
        "偏暗"
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
        "伤害数值"
      ],
      "情绪触发点": [
        "情绪反差"
      ],
      "视觉特效程度": [
        "强特效"
      ],
      "玩家动机": [
        "情绪宣泄",
        "成就进步"
      ]
    }
  },
  {
    "gameId": "chaos",
    "gameName": "Chaos Zero Nightmare",
    "rank": 17,
    "company": "Smilegate, Inc.",
    "advertiserName": "Chaos Zero Nightmare",
    "category": "Roguelike 卡牌 RPG",
    "theme": "暗黑科幻 / 卡牌战斗",
    "adKey": "61f4d42fe535b806f3cf68b065090abc",
    "materialId": "c0245ccc7a8e993b523da5b0a0a41979",
    "platformCode": "admob",
    "platformName": "Admob",
    "impression": 424641,
    "heat": 193,
    "days": 54,
    "firstSeen": 1781690806,
    "lastSeen": 1786308193,
    "regions": [
      "美国",
      "印度尼西亚",
      "瑞士",
      "荷兰",
      "波兰",
      "孟加拉国",
      "意大利",
      "智利",
      "加拿大",
      "乌克兰",
      "奥地利",
      "爱尔兰",
      "西班牙",
      "澳大利亚",
      "韩国",
      "德国",
      "菲律宾",
      "法国",
      "英国",
      "哈萨克斯坦",
      "格鲁吉亚",
      "秘鲁",
      "阿根廷",
      "丹麦",
      "土耳其",
      "日本",
      "中国台湾",
      "墨西哥",
      "斯洛文尼亚",
      "匈牙利",
      "马来西亚",
      "比利时",
      "中国香港"
    ],
    "language": "gd",
    "duration": 29,
    "video": "https://sp2cdn-idea-global.zingfront.com/sp_opera/4fe2ebff5599dfce58fff03f828f113d.mp4",
    "createdAt": 1777637254,
    "searchFlag": 145458,
    "copy": "Chaos Zero Nightmare",
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
        "2D二次元"
      ],
      "色彩调性-明暗度": [
        "明亮"
      ],
      "角色类型": [
        "敌人/怪物",
        "游戏角色"
      ],
      "主要场景": [
        "地牢战场",
        "宇宙星空",
        "科幻基地"
      ],
      "视频类型": [
        "CG动画"
      ],
      "营销卖点": [
        "沉浸剧情",
        "高品质感"
      ],
      "结尾引导": [
        "品牌/LOGO收尾"
      ],
      "核心玩法": [
        "卡牌策略",
        "回合战斗"
      ],
      "开头钩子": [
        "视觉异常/违和感"
      ],
      "视频主题": [
        "玩法展示",
        "角色展示"
      ],
      "内容题材": [
        "科幻"
      ]
    }
  },
  {
    "gameId": "chaos",
    "gameName": "Chaos Zero Nightmare",
    "rank": 18,
    "company": "Smilegate, Inc.",
    "advertiserName": "Chaos Zero Nightmare",
    "category": "Roguelike 卡牌 RPG",
    "theme": "暗黑科幻 / 卡牌战斗",
    "adKey": "ab57f50bf33d3ac81cba2f44feec6b31",
    "materialId": "0818f6a27f2b5d296bd9059dff13ff95",
    "platformCode": "youtube",
    "platformName": "YouTube",
    "impression": 279703,
    "heat": 182,
    "days": 36,
    "firstSeen": 1782456499,
    "lastSeen": 1785472596,
    "regions": [
      "韩国"
    ],
    "language": "英语",
    "duration": 15,
    "video": "https://sp2cdn-idea-global.zingfront.com/sp_opera/869a4b1cb3fb099762a208aff44ed649.mp4",
    "createdAt": 1768645650,
    "searchFlag": 145458,
    "copy": "A Chaos-Loop RPG Driven by Choice",
    "tags": {
      "内容题材": [
        "暗黑奇幻"
      ],
      "核心玩法": [
        "卡牌收集",
        "回合制",
        "策略"
      ],
      "开头钩子": [
        "强冲突/矛盾开场"
      ],
      "游戏元素": [
        "卡牌系统",
        "技能释放",
        "敌人攻击",
        "角色战斗"
      ],
      "玩家动机": [
        "技巧挑战",
        "探索好奇"
      ],
      "美术风格": [
        "无法判断"
      ],
      "视频类型": [
        "其他"
      ]
    }
  },
  {
    "gameId": "chaos",
    "gameName": "Chaos Zero Nightmare",
    "rank": 19,
    "company": "Smilegate, Inc.",
    "advertiserName": "Chaos Zero Nightmare",
    "category": "Roguelike 卡牌 RPG",
    "theme": "暗黑科幻 / 卡牌战斗",
    "adKey": "39d3f0e616bb3f69aefb452906b93c8e",
    "materialId": "5653f8fb61fed87b62811414770a0717",
    "platformCode": "youtube",
    "platformName": "YouTube",
    "impression": 220280,
    "heat": 179,
    "days": 37,
    "firstSeen": 1783523190,
    "lastSeen": 1786615653,
    "regions": [
      "美国"
    ],
    "language": "英语",
    "duration": 30,
    "video": "https://sp2cdn-idea-global.zingfront.com/sp_opera/a3075804fbc3148d3c392dbc1dd10687.mp4",
    "createdAt": 1783922523,
    "searchFlag": 145459,
    "copy": "A Chaos-Loop RPG Driven by Choice",
    "tags": {
      "营销卖点": [
        "沉浸剧情",
        "高品质感"
      ],
      "结尾引导": [
        "品牌/LOGO收尾",
        "明确下载引导"
      ],
      "核心玩法": [
        "动作战斗",
        "角色养成"
      ],
      "开头钩子": [
        "剧情悬念"
      ],
      "色彩调性-主色系": [
        "冷色系"
      ],
      "美术风格": [
        "2D二次元"
      ],
      "视频主题": [
        "剧情叙事",
        "角色展示"
      ],
      "色彩调性-明暗度": [
        "偏暗"
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
      "情绪触发点": [
        "高饱和视觉特效"
      ],
      "视觉特效程度": [
        "强特效"
      ],
      "玩家动机": [
        "成就进步",
        "情绪宣泄"
      ],
      "主要场景": [
        "战场废墟"
      ]
    }
  },
  {
    "gameId": "chaos",
    "gameName": "Chaos Zero Nightmare",
    "rank": 20,
    "company": "Smilegate, Inc.",
    "advertiserName": "Chaos Zero Nightmare",
    "category": "Roguelike 卡牌 RPG",
    "theme": "暗黑科幻 / 卡牌战斗",
    "adKey": "4648032788fccf71a9a359c729b64fa4",
    "materialId": "23ec9f2f8120f441231a5805f7fcf2f0",
    "platformCode": "facebook",
    "platformName": "FB News Feed",
    "impression": 209725,
    "heat": 158,
    "days": 32,
    "firstSeen": 1781247600,
    "lastSeen": 1783926000,
    "regions": [
      "泰国",
      "加拿大",
      "法国",
      "印度尼西亚",
      "土耳其",
      "菲律宾"
    ],
    "language": "英语",
    "duration": 17,
    "video": "https://sp2cdn-idea-global.zingfront.com/sp_opera/45f90de35c8241805d49f6bb7cc37210.mp4",
    "createdAt": 1780250881,
    "searchFlag": 145458,
    "copy": "Start Now for Epic Rewards🎁 / The start of a nightmare, Chaos Zero Nightmare! 🎯\nLog in now and become the ruler!💎",
    "tags": {
      "色彩调性-整体饱和度": [
        "高饱和"
      ],
      "色彩调性-主色系": [
        "冷色系"
      ],
      "视觉特效程度": [
        "强特效"
      ],
      "美术风格": [
        "2D二次元"
      ],
      "色彩调性-明暗度": [
        "偏暗"
      ],
      "角色类型": [
        "敌人/怪物",
        "游戏角色"
      ],
      "主要场景": [
        "地牢战场",
        "末日城市",
        "游戏界面"
      ],
      "视频类型": [
        "游戏录屏"
      ],
      "营销卖点": [
        "策略烧脑",
        "自由定制"
      ],
      "结尾引导": [
        "明确下载引导"
      ],
      "核心玩法": [
        "卡牌构筑",
        "策略战斗"
      ],
      "开头钩子": [
        "美女/高吸引力人物"
      ],
      "视频主题": [
        "玩法展示",
        "角色展示"
      ],
      "内容题材": [
        "赛博朋克"
      ]
    }
  }
];

export const sevenGameResearchMaterials = seeds.map(createMaterial);

export const sevenGameResearchGroups: SevenGameResearchGroup[] = requestedGames.map((game) => {
  const materials = sevenGameResearchMaterials.filter((material) => material.id.startsWith(`GDD7-${game.id}-`));
  return {
    ...game,
    targetCount: 20,
    qualificationNote: materials.length === 20
      ? "满足筛选条件，按热度排序保留 20 条。"
      : "广大大全球素材库中未检索到满足全部硬条件的有效视频，不以相似产品或低质量素材补位。",
    materials,
  };
});

function createMaterial(seed: ResearchSeed): Material {
  const hookTypes = values(seed, "开头钩子", ["直接展示核心内容"]);
  const corePlay = values(seed, "核心玩法", ["玩法展示"]);
  const videoThemes = values(seed, "视频主题", corePlay);
  const contentThemes = values(seed, "内容题材", [seed.theme]);
  const scenes = values(seed, "主要场景", []);
  const visualStyle = unique([
    ...values(seed, "美术风格", []),
    ...values(seed, "色彩调性-主色系", []),
    ...values(seed, "色彩调性-明暗度", []),
    ...values(seed, "色彩调性-整体饱和度", []),
    ...values(seed, "视觉特效程度", []),
  ]);
  const videoTypes = values(seed, "视频类型", ["视频广告"]);
  const motivations = values(seed, "玩家动机", ["继续体验"]);
  const triggers = values(seed, "情绪触发点", hookTypes);
  const endings = values(seed, "结尾引导", ["品牌或下载承接"]);
  const marketing = values(seed, "营销卖点", []);
  const elements = values(seed, "游戏元素", []).slice(0, 5);
  const duration = Math.max(seed.duration, 1);
  const middleEnd = Math.max(4, duration - Math.max(3, Math.round(duration * 0.18)));
  const primary = unique([
    ...(corePlay.length ? ["核心玩法"] : []),
    ...(visualStyle.length ? ["美术"] : []),
    ...(contentThemes.length || scenes.length ? ["题材与世界观"] : []),
  ]);
  const secondary = unique([
    ...corePlay.slice(0, 2),
    ...(scenes.length ? ["场景"] : []),
    ...(contentThemes.length ? ["世界观展示"] : []),
    ...(videoThemes.includes("角色展示") ? ["角色美术"] : []),
    ...(videoThemes.includes("数值成长") ? ["数值成长"] : []),
  ]).slice(0, 4);
  const detail = `https://guangdada.net/modules/creative/display-ads/detail?channel=${seed.platformCode}&id=${seed.adKey}&type=1&created_at=${seed.createdAt}&fb_merge=false&search_flag=${seed.searchFlag}`;
  const summary = `以“${hookTypes.join("、")}”建立注意力，随后集中展示${corePlay.join("、")}，通过${[...elements, ...marketing].slice(0, 3).join("、") || "角色与玩法反馈"}强化体验价值，最后由${endings.join("、")}完成行动承接。`;

  return {
    id: `GDD7-${seed.gameId}-${String(seed.rank).padStart(2, "0")}`,
    weekId: WEEK_ID,
    adKey: seed.adKey,
    materialId: seed.materialId,
    name: seed.gameName,
    recordName: `${seed.gameName} / 热度 Top ${seed.rank}`,
    company: seed.company,
    region: seed.regions.join("、"),
    platform: seed.platformName,
    channel: seed.platformName,
    launchStage: "2026 年 7—8 月持续投放素材",
    theme: unique([seed.theme, ...contentThemes]).join(" / "),
    category: seed.category,
    format: hookTypes.join(" / "),
    audience: `偏好${seed.theme}、${corePlay.join("、")}和${motivations.join("、")}的游戏用户。`,
    hookTypes,
    hookCopy: seed.copy || hookTypes.join("、"),
    hookMechanism: `${hookTypes.join("、")}承担首屏注意力入口，并用${triggers.join("、")}推动继续观看。`,
    firstFrame: `开头围绕${hookTypes.join("、")}展开，主要视觉由${[...scenes, ...contentThemes].slice(0, 2).join("、") || "游戏角色与核心场景"}构成。`,
    result: `展示${corePlay.join("、")}带来的${elements.slice(0, 3).join("、") || "成长、战斗或收集反馈"}。`,
    coreSellingPoint: `${corePlay.join("、")}是主体体验，${marketing.join("、") || "清晰玩法反馈"}负责降低理解成本。`,
    supportingSellingPoints: unique([...marketing, ...elements, ...motivations]).slice(0, 4).map((message, index) => ({
      sequence: index + 1,
      benefit_type: secondary[index] || "辅助卖点",
      message,
    })),
    character: values(seed, "角色类型", []).length
      ? `有，主要为${values(seed, "角色类型", []).join("、")}。`
      : "以游戏场景和玩法单位为主，MCP 未标注独立真人角色。",
    voiceover: `${seed.language}；MCP 未提供独立音轨识别结果，口播需通过原视频复核。`,
    gameplay: `展示${corePlay.join("、")}，可见元素包括${elements.join("、") || "游戏角色与系统反馈"}。`,
    fakeGameplay: "MCP 标签未发现广告主身份与游戏内容明显冲突；具体实机比例以原视频复核为准。",
    visualStyle: visualStyle.length ? visualStyle : ["游戏画面"],
    duration: `${seed.duration} 秒`,
    editingPace: `${seed.duration <= 20 ? "快" : seed.duration <= 45 ? "中快" : "中等"}节奏，围绕开头钩子、主体证明和结果承接推进。`,
    endCard: endings.join("、"),
    localization: `${seed.language}；投放地区：${seed.regions.join("、")}。`,
    productionMethod: videoTypes.join("、"),
    productionComponents: unique([...videoTypes, ...visualStyle.slice(0, 2), "文字或品牌包装"]),
    productionNotes: [
      "来源为广大大 MCP 2026 年 8 月扫描结果",
      "按广告主身份、素材 ID 与视频链接去重",
      "脚本规律由 MCP 视频标签、广告文案和投放数据综合生成",
    ],
    dataSource: "广大大",
    displayEstimate: formatEstimate(seed.impression),
    displayEstimateValue: seed.impression,
    popularity: `热度 ${seed.heat}`,
    heat: String(seed.heat),
    heatValue: seed.heat,
    runDays: `${seed.days} 天`,
    runDaysValue: seed.days,
    dateRange: `${formatDate(seed.firstSeen)} 至 ${formatDate(seed.lastSeen)}`,
    dateStart: formatDate(seed.firstSeen),
    dateEnd: formatDate(seed.lastSeen),
    platforms: [seed.platformName],
    regions: seed.regions,
    sellingPointPrimary: primary,
    sellingPointSecondary: secondary,
    videoLink: seed.video,
    originalAdLink: detail,
    videoLinkCollectedAt: "2026-08-18",
    guangdadaDetailLink: detail,
    analysisSource: "MCP 标签草稿",
    scriptAnalysis: {
      summary,
      structureAndRhythm: [
        `0-3 秒：以${hookTypes.join("、")}完成首屏筛选。`,
        `3-${middleEnd} 秒：围绕${corePlay.join("、")}连续展示${videoThemes.join("、")}。`,
        `${middleEnd}-${duration} 秒：用${endings.join("、")}收束并承接下一步行动。`,
      ],
      emotionCurve: [
        `注意：${triggers.join("、")}`,
        `兴趣：${corePlay.join("、")}逐步展开`,
        `满足：${[...elements, ...marketing].slice(0, 3).join("、") || "获得玩法和成长反馈"}`,
        `行动：${endings.join("、")}`,
      ],
    },
    status: "confirmed",
    statusLabel: "五品类专项已入库",
  };
}

function values(seed: ResearchSeed, key: string, fallback: string[]) {
  const current = seed.tags[key] ?? [];
  return current.length ? current : fallback;
}

function unique(values: string[]) {
  return [...new Set(values.filter(Boolean))];
}

function formatDate(timestamp: number) {
  return new Date(timestamp * 1000).toISOString().slice(0, 10);
}

function formatEstimate(value: number) {
  if (value >= 100_000_000) return `${(value / 100_000_000).toFixed(2)} 亿`;
  if (value >= 10_000) return `${(value / 10_000).toFixed(1)} 万`;
  return value.toLocaleString("zh-CN");
}
