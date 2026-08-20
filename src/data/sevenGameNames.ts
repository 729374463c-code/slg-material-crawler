const chineseNames: Record<string, string> = {
  "Gear Defenders": "齿轮防卫队",
  "NTE: Neverness to Everness": "异环",
  "Clash of Critters": "萌兽大作战·塔塔",
  "Dragon Traveler": "龙魂旅人",
  "Chaos Zero Nightmare": "混沌零：梦魇",
};

export function getSevenGameDisplayName(name: string) {
  const chineseName = chineseNames[name];
  return chineseName ? `${name}（${chineseName}）` : name;
}
