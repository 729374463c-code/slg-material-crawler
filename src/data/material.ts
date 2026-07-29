import source from "../../data/ad-breakdowns/001-clash-of-clans.json";

const product = source.product_info;
const creative = source.creative_info;
const production = source.production_method;
const performance = source.performance_data;

export const material = {
  id: source.record_id,
  name: product.product_name,
  recordName: source.record_name,
  company: product.company,
  region: product.region ?? "未提供",
  platform: product.platform,
  launchStage: product.launch_stage,
  theme: product.theme,
  category: product.backend_category,
  ranking: product.ranking_or_revenue_performance ?? "未提供",
  format: creative.creative_format,
  audience: creative.target_audience,
  hookTypes: creative.first_three_second_hook.hook_type,
  hookCopy: creative.first_three_second_hook.visible_copy,
  hookMechanism: creative.first_three_second_hook.mechanism,
  firstFrame: creative.first_frame.description,
  firstFrameFocus: creative.first_frame.visual_focus,
  brandRecognition: creative.first_frame.brand_recognition,
  result:
    "否；" + creative.first_three_second_hook.result_note,
  coreSellingPoint: creative.core_selling_point,
  supportingSellingPoints: creative.supporting_selling_points,
  character: "是；" + creative.character_note,
  voiceover: "是；" + creative.voiceover_note,
  gameplay: "是；" + creative.real_gameplay_note,
  fakeGameplay: "否；" + creative.fake_gameplay_note,
  visualStyle: creative.visual_style,
  duration: `${creative.duration_seconds} 秒`,
  resolution: creative.resolution,
  aspectRatio: creative.aspect_ratio,
  frameRate: `${creative.frame_rate} fps`,
  editingPace: creative.editing_pace,
  endCard: `${creative.end_card.style}；${creative.end_card.elements.join("、")}；CTA：${creative.end_card.cta}`,
  localization: `${creative.localization.language}；${creative.localization.form.join("、")}；地区：${creative.localization.localized_region ?? "未提供"}`,
  productionMethod: production.primary_method,
  productionComponents: production.components,
  productionNotes: [
    "广告定制 3D 动画：否",
    "真人剧情：否",
    "AI 生成：否",
    "可玩广告：否",
  ],
  dataSource: performance.data_source,
  displayEstimate: performance.display_estimate,
  runDays: performance.run_days,
  dateRange: `${performance.run_date_range.start} 至 ${performance.run_date_range.end}`,
  videoUrl: "/media/clash-of-clans-return.mp4",
} as const;

export const minimumComparisonReason = "至少需要 2 条素材才能开始对比";
