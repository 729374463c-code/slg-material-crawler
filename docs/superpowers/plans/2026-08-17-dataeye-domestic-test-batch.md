# DataEye Domestic Test Batch Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add one independently selectable DataEye domestic SLG material batch without changing or overwriting the existing overseas weekly archives.

**Architecture:** Extend the existing `MaterialWeek` archive model with source metadata and a third single-record dataset. Reuse the current list, detail, review, and export flows; add a guarded empty state to the comparison page for datasets with fewer than two records.

**Tech Stack:** React 19, TypeScript, React Router, Carbon React, Vitest, Testing Library, ExcelJS, Vite.

## Global Constraints

- Keep the DataEye test batch separate from the overseas weekly rankings.
- Store only links; do not embed or save the video in the website.
- Use `https://adxray.dataeye.com/index/home#/Product/Plan/4147966400000` as the exact evidence page.
- Treat the MP4 URL as temporary and label it accordingly.
- Do not include estimated conversions; the website remains focused on acquisition-side evidence.
- Mark unverified creative details as `待视频复核` instead of inventing facts.
- Do not push or deploy before the user approves the local preview.

---

### Task 1: Lock the independent batch behavior with tests

**Files:**
- Modify: `src/app/App.test.tsx`

**Interfaces:**
- Consumes: `App`, the existing `week` query parameter, and accessible page controls.
- Produces: regression coverage for selecting `dataeye-test`, opening its exact detail link, omitting video embeds, and handling a one-record comparison dataset.

- [ ] **Step 1: Write the failing archive and detail test**

Add a test that selects `dataeye-test`, expects exactly one `material-data-row`, opens `三国志·战略版`, verifies that no `<video>` exists, and verifies the exact DataEye plan URL.

- [ ] **Step 2: Write the failing comparison empty-state test**

Add a test that opens the comparison page with `?week=dataeye-test` and expects `当前批次只有 1 条素材，至少需要 2 条才能进行对比。` while the two material selectors are absent.

- [ ] **Step 3: Run focused tests to verify failure**

Run: `pnpm test -- --run src/app/App.test.tsx`

Expected: FAIL because `dataeye-test` and the single-record empty state do not exist.

### Task 2: Add the DataEye dataset and source metadata

**Files:**
- Modify: `src/data/materialWeeks.ts`
- Modify: `src/components/WeekSelector.tsx`

**Interfaces:**
- Produces: `MaterialWeek.sourceName?: string`, `MaterialWeek.market?: string`, and a `dataeye-test` week containing one complete `Material` record.
- Consumes: the existing `Material` type and all existing archive consumers.

- [ ] **Step 1: Extend archive metadata**

Add optional `sourceName` and `market` fields to `MaterialWeek`. Show them in the selector summary when present, without changing the labels of existing weeks.

- [ ] **Step 2: Add the independent test record**

Create `dataeyeDomesticTestMaterial` with:

- Product: `三国志·战略版`
- Company: `广州爱九游信息技术有限公司`
- Source: `DataEye ADXray`
- Date range: `2022-09-26 至 2026-08-10`
- Run days: `1196 天`
- Display estimate: `1.856 亿`
- Popularity: `素材抓取 291.6 万次`
- Heat: `关联计划 53,138`
- Duration: `25 秒`
- Resolution note: `1334 × 750`
- Platforms: `懂球帝`, `车来了`, `段友`, `最右`, `其他 11 家媒体`
- Exact source link: `https://adxray.dataeye.com/index/home#/Product/Plan/4147966400000`
- Preliminary hook: `真实地形`, `战术伏击`, `历史改写`
- Core selling point: `利用真实地形进行拦截、埋伏等战术决策`
- Analysis source: `视频解析草稿`
- Status: `pending_video`

Set all unverified shot, audio, gameplay, editing, end-card, localization, and production details to explicit `待视频复核` language. Use a preliminary script summary based only on the visible copy, while each detailed timeline item states that the exact timestamp requires video review.

- [ ] **Step 3: Add the test batch**

Insert a `MaterialWeek` with `id: "dataeye-test"`, `label: "国内素材测试"`, `sourceName: "DataEye ADXray"`, `market: "国内"`, `snapshotDate: "2026-08-17"`, and the single test material before the existing latest overseas week. Keep `latestMaterialWeek` pointing to `week-2` so opening the website still defaults to the current overseas weekly archive. This keeps `allMaterials` and all detail routes working automatically without changing the default dataset.

### Task 3: Guard the single-record comparison flow

**Files:**
- Modify: `src/pages/ComparePage.tsx`
- Modify: `src/styles/global.scss`

**Interfaces:**
- Consumes: `selectedWeek.materials`.
- Produces: an accessible `.comparison-empty-state` section when `materials.length < 2`; existing comparison behavior remains unchanged for two or more records.

- [ ] **Step 1: Add an early single-record state**

After the heading and `WeekSelector`, render a heading `暂时无法进行素材对比`, the exact count message from Task 1, and guidance to switch to another batch. Do not render selectors, generated insights, or the comparison table in this branch.

- [ ] **Step 2: Add minimal matching styles**

Style the empty state using the existing border, background, spacing, and typography tokens; do not introduce a new visual system.

- [ ] **Step 3: Run focused tests**

Run: `pnpm test -- --run src/app/App.test.tsx`

Expected: PASS.

### Task 4: Verify and preview locally

**Files:**
- No source files beyond Tasks 1–3.

**Interfaces:**
- Produces: test output, build output, and a local preview URL for user review.

- [ ] **Step 1: Run the full necessary test suite**

Run: `pnpm test -- --run`

Expected: all tests PASS.

- [ ] **Step 2: Build the production bundle**

Run: `pnpm build`

Expected: exit code 0 and Vite output in `dist/`.

- [ ] **Step 3: Start the local preview**

Run: `pnpm preview -- --host 127.0.0.1 --port 4185`

Open: `http://127.0.0.1:4185/#/materials?week=dataeye-test`

- [ ] **Step 4: Stop before external publication**

Show the local result to the user. Do not push to GitHub or deploy to Netlify/Sites until the user explicitly approves it.
