import { describe, expect, test } from "vitest";
import { materials, type Material } from "./material";
import { getMaterialExternalLinks } from "./materialLinks";

describe("getMaterialExternalLinks", () => {
  test("keeps a temporary DataEye video URL and permanent detail page as separate actions", () => {
    const dataeyeMaterial: Material = {
      ...materials[0],
      videoLink: "https://adxvideo.dataeye.com/example.mp4?auth_key=fresh",
      originalAdLink: "https://adxray.dataeye.com/index/home#/Product/Plan/123",
      videoLinkCollectedAt: "2026-08-17 15:00",
    };

    expect(getMaterialExternalLinks(dataeyeMaterial)).toEqual({
      directVideo: {
        label: "直接打开视频",
        href: "https://adxvideo.dataeye.com/example.mp4?auth_key=fresh",
      },
      detailPage: {
        label: "查看 AdXray 详情",
        href: "https://adxray.dataeye.com/index/home#/Product/Plan/123",
      },
      collectedAt: "2026-08-17 15:00",
      warning: "视频直链为临时地址；无法打开时请使用 AdXray 详情页。",
    });
  });

  test("treats a DataEye detail URL stored in both fields as one detail action", () => {
    const detailUrl = "https://adxray.dataeye.com/index/home#/Product/Plan/123";
    const material: Material = {
      ...materials[0],
      videoLink: detailUrl,
      originalAdLink: detailUrl,
      videoLinkCollectedAt: null,
    };

    expect(getMaterialExternalLinks(material)).toEqual({
      directVideo: null,
      detailPage: { label: "查看 AdXray 详情", href: detailUrl },
      collectedAt: null,
      warning: null,
    });
  });
});
