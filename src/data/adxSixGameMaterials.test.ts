import { describe, expect, it } from "vitest";
import { adxSixGameGroups, adxSixGameMaterials } from "./adxSixGameMaterials";

describe("ADX 指定游戏专项调研", () => {
  it("只保留满足硬门槛的视频素材", () => {
    expect(adxSixGameMaterials).toHaveLength(27);

    for (const material of adxSixGameMaterials) {
      expect(material.displayEstimateValue).toBeGreaterThan(1_000_000);
      expect(material.runDaysValue).toBeGreaterThan(30);
      expect(material.dateEnd).not.toBeNull();
      expect(material.dateEnd! >= "2026-07-01").toBe(true);
      expect(material.videoLink).toMatch(/^https:\/\/adxvideo\.dataeye\.com\/.+\.mp4\?/);
      expect(material.originalAdLink).toMatch(
        /^https:\/\/adxray\.dataeye\.com\/index\/home#\/Product\/Plan\/\d+$/,
      );
    }
  });

  it("按实际合格数量保留三个游戏", () => {
    expect(
      Object.fromEntries(adxSixGameGroups.map((group) => [group.name, group.materials.length])),
    ).toEqual({
      异环: 6,
      永远的蔚蓝星球: 20,
      龙魂旅人: 1,
    });
  });
});
