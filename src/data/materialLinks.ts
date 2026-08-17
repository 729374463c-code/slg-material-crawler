import type { Material } from "./material";

type ExternalLink = {
  label: string;
  href: string;
};

export type MaterialExternalLinks = {
  directVideo: ExternalLink | null;
  detailPage: ExternalLink | null;
  collectedAt: string | null;
  warning: string | null;
};

const DATAEYE_DETAIL_PREFIX = "https://adxray.dataeye.com/index/home#/Product/Plan/";
const DATAEYE_EXPIRY_WARNING = "视频直链为临时地址；无法打开时请使用 AdXray 详情页。";

export function getMaterialExternalLinks(material: Material): MaterialExternalLinks {
  const isDataEye = material.originalAdLink?.startsWith(DATAEYE_DETAIL_PREFIX) ?? false;
  if (isDataEye) {
    const hasDirectVideo = Boolean(material.videoLink && material.videoLink !== material.originalAdLink);
    return {
      directVideo: hasDirectVideo
        ? { label: "直接打开视频", href: material.videoLink! }
        : null,
      detailPage: material.originalAdLink
        ? { label: "查看 AdXray 详情", href: material.originalAdLink }
        : null,
      collectedAt: hasDirectVideo ? material.videoLinkCollectedAt : null,
      warning: hasDirectVideo ? DATAEYE_EXPIRY_WARNING : null,
    };
  }

  const hasDistinctDetailPage = Boolean(
    material.originalAdLink && material.originalAdLink !== material.videoLink,
  );

  return {
    directVideo: material.videoLink
      ? {
          label: "打开视频",
          href: material.videoLink,
        }
      : null,
    detailPage: hasDistinctDetailPage
      ? {
          label: "打开原始广告",
          href: material.originalAdLink!,
        }
      : null,
    collectedAt: material.videoLinkCollectedAt,
    warning: null,
  };
}
