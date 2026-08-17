# Material Table Visibility Fix Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Make every column in the 14-column material table reachable and understandable at common desktop viewport widths.

**Architecture:** Keep the existing table and data model unchanged. Turn the table wrapper into a bounded two-axis scroll region, move sticky headers into that scroll context, freeze the first product column, and add an accessible scroll hint.

**Tech Stack:** React 19, TypeScript, SCSS, Vitest, Testing Library, Vite.

## Global Constraints

- Preserve all 14 columns and all existing values.
- Do not change Excel export, filtering, sorting, detail routes, or data structures.
- Keep the visual language consistent with the existing research table.
- Verify the rightmost `情绪曲线` column is reachable at a 1265px viewport.
- Stop at local preview; do not push or deploy.

---

### Task 1: Add an accessible scroll-region contract

**Files:**
- Modify: `src/app/App.test.tsx`
- Modify: `src/pages/MaterialsPage.tsx`

**Interfaces:**
- Produces: `#materials-scroll-hint` and an `aria-describedby` relationship on the existing `竞品吸量素材调研数据` region.
- Consumes: the existing `.materials-table-shell` and `.materials-table-scroll` markup.

- [ ] **Step 1: Write the failing test**

Add a test that opens the material research page and expects the table region to reference `materials-scroll-hint`, whose text says `左右拖动表格查看全部字段，滚动时产品信息和表头会保持可见。`.

- [ ] **Step 2: Run the focused test and confirm failure**

Run: `pnpm test -- --run src/app/App.test.tsx`

Expected: FAIL because the hint and descriptive relationship do not exist.

- [ ] **Step 3: Implement the minimal markup**

Render a paragraph with class `table-scroll-hint` and id `materials-scroll-hint` immediately before the scroll wrapper. Add `aria-describedby="materials-scroll-hint"` to the table shell section.

- [ ] **Step 4: Run the focused test and confirm pass**

Run: `pnpm test -- --run src/app/App.test.tsx`

Expected: all application tests PASS.

### Task 2: Make the complete table reachable inside the viewport

**Files:**
- Modify: `src/styles/global.scss`

**Interfaces:**
- Consumes: `.materials-table-shell`, `.materials-table-scroll`, `.materials-table`, `.materials-table thead`, and first-column cells.
- Produces: a bounded two-axis scroll area with sticky headers and a sticky product column.

- [ ] **Step 1: Bound the scroll area**

Set `.materials-table-scroll` to `max-height: clamp(420px, 62vh, 760px)`, `overflow: auto`, `scrollbar-gutter: stable`, and `overscroll-behavior: contain`.

- [ ] **Step 2: Correct sticky header offsets**

Because the scroll container becomes the sticky context, change group header `top` from `64px` to `0` and the second header row from `102px` to `38px`.

- [ ] **Step 3: Freeze the product column**

Apply `position: sticky`, `left: 0`, an opaque background, a right-edge shadow, and suitable z-index values to the first body cell and the first header cell in the second header row. Keep hover feedback visible on the frozen body cell.

- [ ] **Step 4: Style the hint**

Use the existing muted text, surface, rule, and accent tokens; keep the hint compact and place it above the table viewport.

### Task 3: Verify layout and preserve the local preview

**Files:**
- No additional source files.

**Interfaces:**
- Produces: automated verification, production build output, browser layout evidence, and a local preview URL.

- [ ] **Step 1: Run the full automated tests**

Run: `pnpm test -- --run`

Expected: all tests PASS.

- [ ] **Step 2: Stop the preview server and build**

Stop the server holding `dist/client`, then run `pnpm build`.

Expected: exit code 0.

- [ ] **Step 3: Restart local preview**

Run: `pnpm exec vite preview --host 127.0.0.1 --port 4185 --outDir dist/client`.

- [ ] **Step 4: Verify in the in-app browser**

Open `http://localhost:4185/#/materials?week=dataeye-test`. At the current viewport, confirm:

- `.materials-table-scroll.scrollWidth > .materials-table-scroll.clientWidth`;
- scrolling the region to `scrollLeft = scrollWidth` reveals the `情绪曲线` header;
- the first product cell remains at the region's left edge after horizontal scrolling;
- the scroll region height is no greater than 760px;
- the table hint is visible.

- [ ] **Step 5: Stop before publication**

Leave the working branch and preview server in place. Do not upload or deploy until the user approves the local result.
