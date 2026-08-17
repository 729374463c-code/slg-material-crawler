# DataEye Domestic SLG Ten-Material Test Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add an independent ten-material DataEye domestic SLG test batch with complete analysis, a temporary direct-video link, a permanent AdXray detail link, comparison support, and Excel export.

**Architecture:** Keep the existing static React data-product architecture. Use the installed ADX Skill only for product-level ranking and trend context, collect material-level records from the signed-in AdXray material UI, analyze each fresh temporary video URL once, and store the reviewed snapshot in a dedicated data module imported by `materialWeeks.ts`.

**Tech Stack:** React 19, TypeScript 5.9, React Router hash routes, Carbon React/icons, ExcelJS, Vitest, Testing Library, vinext/Vite, DataEye AdXray read-only data.

## Global Constraints

- Reuse the existing site, routes, visual system, package manager, lockfile, and `.openai/hosting.json`.
- The batch contains domestic SLG video ads only; target 10 unique, useful records.
- Preserve every existing week and test batch; add `dataeye-cn-slg-10` as a new independent batch.
- Do not download, store, proxy, or embed the videos.
- Each record must retain both the temporary direct-video URL and the exact AdXray detail URL.
- Record the direct-video collection time and warn that the link can expire.
- Do not expose AdXray credentials, cookies, tokens, or session data in source files, logs, exports, or the browser UI.
- Do not invent conversion rate, ROAS, revenue, payment rate, or unsupported video-analysis facts.
- If fewer than 10 valid unique records can be obtained, ship the actual count and state the reason.
- Perform local preview and necessary tests only; do not push or deploy without explicit approval.

---

### Task 1: Define the dual-link data contract

**Files:**
- Create: `src/data/materialLinks.ts`
- Create: `src/data/materialLinks.test.ts`
- Modify: `src/data/material.ts`

**Interfaces:**
- Consumes: existing `Material` records whose `videoLink` and `originalAdLink` may be `null`.
- Produces: `videoLinkCollectedAt: string | null` on every `Material` and `getMaterialExternalLinks(material)` for consumer-facing link labels and fallback metadata.

- [ ] **Step 1: Write the failing contract test**

Create `materialLinks.test.ts`, reuse one complete existing `Material` fixture, override its DataEye link fields, and assert that `getMaterialExternalLinks()` returns two distinct consumer actions plus the collection time:

```ts
expect(getMaterialExternalLinks(dataeyeMaterial)).toEqual({
  directVideo: { label: "直接打开视频", href: "https://adxvideo.dataeye.com/example.mp4?auth_key=fresh" },
  detailPage: { label: "查看 AdXray 详情", href: "https://adxray.dataeye.com/index/home#/Product/Plan/123" },
  collectedAt: "2026-08-17 15:00",
  warning: "视频直链为临时地址；无法打开时请使用 AdXray 详情页。",
});
```

- [ ] **Step 2: Run the focused test and verify failure**

Run: `pnpm test -- src/data/materialLinks.test.ts`

Expected: FAIL because `materialLinks.ts` and `getMaterialExternalLinks()` do not exist.

- [ ] **Step 3: Extend the material contract**

Add this field to `Material`:

```ts
videoLinkCollectedAt: string | null;
```

Update existing seed conversion and literal records with `videoLinkCollectedAt: null` so all existing batches remain valid. Implement `getMaterialExternalLinks(material)` to expose distinct DataEye actions only when `videoLink` and `originalAdLink` are both present and different; preserve a single-link result for existing non-DataEye records.

- [ ] **Step 4: Run the TypeScript-bearing test command**

Run: `pnpm test -- src/data/materialLinks.test.ts`

Expected: PASS with the exact two-link result and warning.

- [ ] **Step 5: Commit the contract change**

```bash
git add src/data/material.ts src/data/materialLinks.ts src/data/materialLinks.test.ts
git commit -m "test: define DataEye dual-link contract"
```

---

### Task 2: Collect, deduplicate, and analyze the DataEye candidate set

**Files:**
- Create: `src/data/dataeyeDomesticTestMaterials.ts`
- Modify: `src/data/materialWeeks.ts`
- Test: `src/app/App.test.tsx`

**Interfaces:**
- Consumes: the ADX Skill's verified product-level field contract and material-level fields from the signed-in AdXray UI.
- Produces: `dataeyeDomesticTestMaterials: Material[]` and a `MaterialWeek` record with id `dataeye-cn-slg-10`.

- [ ] **Step 1: Apply the ADX Skill boundary**

Use the installed ADX Skill as the product-level field and endpoint contract. Do not call its documented but unimplemented video-material endpoint, and do not treat a product ranking as a material ranking. The signed-in AdXray material page remains the authoritative source for the ten material records.

- [ ] **Step 2: Build one material candidate pool**

In the signed-in AdXray material page, apply `策略` and `视频`, sort by the strongest available plan-usage/high-performance option, and collect 15–20 candidates in one pass. For every candidate record:

```ts
type DataEyeCandidate = {
  materialId: string;
  productName: string;
  company: string;
  copy: string;
  platforms: string[];
  dateStart: string;
  dateEnd: string;
  runDays: number;
  heatValue: number | null;
  displayEstimateValue: number | null;
  videoUrl: string;
  detailUrl: `https://adxray.dataeye.com/index/home#/Product/Plan/${string}`;
  videoUrlCollectedAt: string;
};
```

- [ ] **Step 3: Deduplicate before analysis**

Reject a candidate when any earlier accepted item has the same `materialId`, the same unsigned video resource path, or the same product/copy/duration/visual identity. Select the ten strongest remaining records by plan usage, exposure/heat, run duration, creative value, and sample diversity.

- [ ] **Step 4: Analyze each accepted fresh video URL once**

For each accepted item, populate every `Material` field from page evidence or video evidence. Use `无法确认` rather than inference when audio, frames, gameplay authenticity, production method, or timing cannot be verified. Each `scriptAnalysis.structureAndRhythm` entry must contain a time range and each analysis must distinguish objective page data from subjective video interpretation.

- [ ] **Step 5: Write the dedicated data module**

Import `Material`, export `dataeyeDomesticTestMaterials: Material[]`, and serialize each accepted record from Steps 1–4 as a complete literal object. The exported array must contain exactly the accepted unique records, contain 10 entries when the candidate pool supports it, and contain no scaffold rows or invented values. No credentials, cookies, tokens, downloaded media, or browser state may appear in this file.

- [ ] **Step 6: Register the independent batch**

Import `dataeyeDomesticTestMaterials` in `materialWeeks.ts` and append:

```ts
{
  id: "dataeye-cn-slg-10",
  label: "DataEye 国内 SLG 十条测试",
  snapshotDate: "2026-08-17",
  sourcePeriod: "DataEye 页面采集快照",
  sourceNote: "国内策略视频素材；按高表现指标筛选并完成视频解析",
  sourceName: "DataEye AdXray",
  market: "中国大陆",
  materials: dataeyeDomesticTestMaterials,
}
```

- [ ] **Step 7: Add data-integrity assertions**

```tsx
expect(screen.getAllByTestId("material-data-row")).toHaveLength(10);
expect(new Set(dataeyeDomesticTestMaterials.map((item) => item.materialId)).size).toBe(dataeyeDomesticTestMaterials.length);
expect(dataeyeDomesticTestMaterials.every((item) => item.videoLink && item.originalAdLink && item.videoLinkCollectedAt)).toBe(true);
```

- [ ] **Step 8: Run the focused suite**

Run: `pnpm test -- src/app/App.test.tsx`

Expected: the ten-row, uniqueness, and required-link assertions pass; dual-link label assertions may still fail until Task 3.

- [ ] **Step 9: Commit the reviewed dataset**

```bash
git add src/data/dataeyeDomesticTestMaterials.ts src/data/materialWeeks.ts src/app/App.test.tsx
git commit -m "data: add DataEye domestic SLG test batch"
```

---

### Task 3: Present the dual-link fallback clearly

**Files:**
- Modify: `src/pages/MaterialsPage.tsx`
- Modify: `src/pages/MaterialDetailPage.tsx`
- Modify: `src/styles/global.scss`
- Test: `src/app/App.test.tsx`

**Interfaces:**
- Consumes: `Material.videoLink`, `Material.originalAdLink`, and `Material.videoLinkCollectedAt`.
- Produces: separate `直接打开视频` and `查看 AdXray 详情` actions plus a visible expiry explanation.

- [ ] **Step 1: Add failing UI assertions**

Assert that a DataEye row and detail page show both actions, the collection time, and the warning:

```tsx
expect(screen.getByText("视频直链为临时地址；无法打开时请使用 AdXray 详情页。")).toBeInTheDocument();
expect(screen.getByRole("link", { name: "直接打开视频" })).toBeInTheDocument();
expect(screen.getByRole("link", { name: "查看 AdXray 详情" })).toBeInTheDocument();
```

- [ ] **Step 2: Run the focused test and verify failure**

Run: `pnpm test -- src/app/App.test.tsx`

Expected: FAIL on the new labels and warning.

- [ ] **Step 3: Update the list link cell**

For DataEye records with both links, render:

```tsx
<a href={material.videoLink} rel="noreferrer" target="_blank">直接打开视频</a>
<a className="secondary-table-link" href={material.originalAdLink} rel="noreferrer" target="_blank">查看 AdXray 详情</a>
```

Keep the existing fallback behavior for non-DataEye records.

- [ ] **Step 4: Update the detail evidence section**

Show both actions, then render:

```tsx
<p className="link-expiry-note">视频直链为临时地址；无法打开时请使用 AdXray 详情页。</p>
<span>视频直链采集时间：{material.videoLinkCollectedAt}</span>
```

Do not fetch, probe, embed, proxy, or automatically refresh the video URL from the public site.

- [ ] **Step 5: Add compact link styles**

Use the existing forest-green visual system. Keep both actions readable inside the fixed-width table cell and stack them on narrow widths. Use existing focus styles and do not add a new visual language.

- [ ] **Step 6: Run the focused suite**

Run: `pnpm test -- src/app/App.test.tsx`

Expected: PASS for dual-link labels, warning, link destinations, and collection time.

- [ ] **Step 7: Commit the UI change**

```bash
git add src/pages/MaterialsPage.tsx src/pages/MaterialDetailPage.tsx src/styles/global.scss src/app/App.test.tsx
git commit -m "feat: add DataEye video fallback links"
```

---

### Task 4: Export both DataEye links and collection time

**Files:**
- Modify: `src/data/materialExport.ts`
- Test: `src/app/App.test.tsx`

**Interfaces:**
- Consumes: the selected batch's `Material[]`.
- Produces: an Excel sheet with distinct temporary-video, AdXray-detail, and collection-time columns.

- [ ] **Step 1: Write a failing workbook assertion**

Build a workbook from the DataEye batch and assert the header row includes:

```ts
expect(materialExportHeaders).toEqual(expect.arrayContaining([
  "视频直链",
  "AdXray 详情页",
  "视频直链采集时间",
]));
```

- [ ] **Step 2: Run the focused test and verify failure**

Run: `pnpm test -- src/app/App.test.tsx`

Expected: FAIL because the export has one combined video column.

- [ ] **Step 3: Extend grouped headers and rows**

Create separate hyperlink cells:

```ts
material.videoLink ? { text: "直接打开视频", hyperlink: material.videoLink } : "链接待补充",
material.originalAdLink ? { text: "查看 AdXray 详情", hyperlink: material.originalAdLink } : "链接待补充",
material.videoLinkCollectedAt ?? "未提供",
```

Update merged ranges, column widths, auto-filter end column, and group colors so the existing reference-table layout remains intact.

- [ ] **Step 4: Run the focused suite**

Run: `pnpm test -- src/app/App.test.tsx`

Expected: PASS for export headers and existing export behavior.

- [ ] **Step 5: Commit the export change**

```bash
git add src/data/materialExport.ts src/app/App.test.tsx
git commit -m "feat: export DataEye dual links"
```

---

### Task 5: Verify the complete local test batch

**Files:**
- Modify only if verification reveals a scoped defect in the files changed by Tasks 1–4.

**Interfaces:**
- Consumes: the complete `dataeye-cn-slg-10` batch and all existing routes.
- Produces: a locally verified build ready for user review.

- [ ] **Step 1: Run the full automated suite**

Run: `pnpm test`

Expected: all tests pass with zero failures.

- [ ] **Step 2: Run the production build once**

Run: `pnpm build`

Expected: exit code 0 and a complete `dist/client` output.

- [ ] **Step 3: Start or refresh the existing local preview**

Run: `pnpm exec vite preview --host 127.0.0.1 --port 4185 --outDir dist/client`

Open: `http://127.0.0.1:4185/#/materials?week=dataeye-cn-slg-10`

- [ ] **Step 4: Perform one browser QA pass**

Check exactly once:

1. The selected batch shows the expected accepted count.
2. A material row exposes both links.
3. A detail page exposes both links, expiry warning, collection time, analysis, and script sections.
4. The comparison page allows any two records from this batch.
5. The export action is enabled for the current batch.

- [ ] **Step 5: Report limitations precisely**

State how many materials were accepted, whether any video-analysis fields remain `无法确认`, and that temporary video URLs may later expire. Do not claim that a direct URL is permanent merely because it works during QA.

- [ ] **Step 6: Stop before publishing**

Present the local preview to the user. Do not push, upload, deploy, or modify public hosting until the user explicitly approves the local version.
