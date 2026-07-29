# SLG 海外吸量素材 Demo Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** 构建一版可在本地运行、用于向上级演示的桌面端 SLG 海外吸量素材分析 Demo，接入 1 条 Clash of Clans 真实样本并保留 4 个空位。

**Architecture:** 使用 Vite、React 和 TypeScript 构建纯前端单页应用，通过 Hash Router 提供“总览、素材、对比”三个稳定入口。现有 JSON 经过类型化适配层进入页面，视频原样复制到静态资源目录；选择状态和观察结论由 React 状态与 `localStorage` 管理，不连接后端。

**Tech Stack:** React 19、TypeScript、Vite、`@carbon/react` 1.x、React Router、Sass、Vitest、Testing Library

## Global Constraints

- 产品仅服务 SLG 海外吸量素材分析。
- 首版只展示 1 条 Clash of Clans 真实样本和 4 个“待补充素材”空位。
- 不伪造素材名称、缩略图、地区、吸量数据或其他缺失值。
- 不展示转化率、ROAS、收入、付费率、自动综合评分或商业价值指标。
- 只使用 `@carbon/react` 这一套 UI 组件系统，不混用其他 UI 框架。
- 页面底色 `#F4F6F5`，内容表面 `#FCFDFC`，主文字 `#18201D`，次级文字 `#68756F`，分隔线 `#D6DDDA`，强调色 `#1F5D50`，强调浅底 `#DDE9E4`。
- 使用 8px 间距网格、24px 页面主边距、16px 模块间距；主容器保持直角，按钮、输入和视频缩略图最大 4px 圆角。
- 不使用大面积阴影、渐变、霓虹光效、自动轮播、滚动动画或循环动效。
- 交互动效约 140ms，并为主要操作提供清晰的键盘焦点状态。
- 素材不足 2 条时，对比入口、结论输入和保存操作必须不可用并显示原因。
- Demo 不建设登录、权限、后台、数据库、素材编辑、自动抓取、自动识别或 AI 结论能力。
- 本次只保证桌面端体验；窄屏允许自然横向滚动，不创建移动端专用布局。

---

## File Structure

```text
.
├── data/
│   └── ad-breakdowns/
│       └── 001-clash-of-clans.json       # 已存在的唯一真实拆解数据
├── public/
│   └── media/
│       └── clash-of-clans-return.mp4      # 从用户提供文件原样复制
├── src/
│   ├── app/
│   │   ├── App.tsx                        # 路由、全局 Demo 状态装配
│   │   ├── App.test.tsx                   # 三个模块的集成行为
│   │   └── useDemoState.ts                # 选择状态、观察结论、本地存储
│   ├── components/
│   │   ├── AppShell.tsx                   # 顶部导航和主内容框架
│   │   ├── EmptyMaterialSlot.tsx          # 统一预留空位
│   │   ├── MissingValue.tsx               # 缺失值的统一表达
│   │   └── components.module.scss          # 共享组件样式
│   ├── features/
│   │   └── materials/
│   │       ├── materialModel.ts            # 页面使用的领域类型
│   │       ├── materialRepository.ts       # 原始 JSON 到领域模型的适配
│   │       └── materialRepository.test.ts  # 数据保真、缺失值与空位测试
│   ├── pages/
│   │   ├── OverviewPage.tsx                # 一条结论、五个位置、证据链
│   │   ├── OverviewPage.test.tsx
│   │   ├── OverviewPage.module.scss
│   │   ├── MaterialsPage.tsx               # 筛选、列表、视频、拆解详情
│   │   ├── MaterialsPage.test.tsx
│   │   ├── MaterialsPage.module.scss
│   │   ├── ComparePage.tsx                 # 对比结构、门槛与结论输入
│   │   ├── ComparePage.test.tsx
│   │   └── ComparePage.module.scss
│   ├── styles/
│   │   ├── _tokens.scss                    # 已确认的颜色、间距、字号和动效
│   │   └── global.scss                     # Carbon、全局排版、焦点与基础重置
│   ├── test/
│   │   └── setup.ts                        # jest-dom 与浏览器 API 测试垫片
│   └── main.tsx                            # React 入口
├── index.html
├── package.json
├── pnpm-lock.yaml
├── tsconfig.json
├── tsconfig.app.json
├── tsconfig.node.json
└── vite.config.ts
```

The existing design specification remains the source of truth:
`docs/superpowers/specs/2026-07-29-slg-creative-demo-ui-design.md`.

### Task 1: Bootstrap the typed React shell and design tokens

**Files:**
- Create: `package.json`
- Create: `index.html`
- Create: `tsconfig.json`
- Create: `tsconfig.app.json`
- Create: `tsconfig.node.json`
- Create: `vite.config.ts`
- Create: `src/main.tsx`
- Create: `src/app/App.tsx`
- Create: `src/styles/_tokens.scss`
- Create: `src/styles/global.scss`
- Create: `src/test/setup.ts`
- Create: `src/app/App.test.tsx`
- Create: `pnpm-lock.yaml` through dependency installation

**Interfaces:**
- Produces: `App(): JSX.Element`, Vitest `jsdom` setup, shared Sass tokens.
- Consumes: no earlier application files.

- [ ] **Step 1: Create the package and TypeScript/Vite configuration**

Use React 19, current compatible `@carbon/react` 1.x, React Router, Sass, Vitest and Testing Library:

```json
{
  "name": "slg-creative-intelligence-demo",
  "private": true,
  "version": "0.1.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "tsc -b && vite build",
    "test": "vitest run",
    "test:watch": "vitest",
    "check": "pnpm test && pnpm build"
  },
  "dependencies": {
    "@carbon/react": "^1.112.0",
    "react": "^19.2.0",
    "react-dom": "^19.2.0",
    "react-router-dom": "^7.0.0"
  },
  "devDependencies": {
    "@testing-library/jest-dom": "^6.0.0",
    "@testing-library/react": "^16.0.0",
    "@testing-library/user-event": "^14.0.0",
    "@types/react": "^19.0.0",
    "@types/react-dom": "^19.0.0",
    "@vitejs/plugin-react": "^5.0.0",
    "jsdom": "^26.0.0",
    "sass": "^1.80.0",
    "typescript": "^5.8.0",
    "vite": "^7.0.0",
    "vitest": "^3.0.0"
  }
}
```

Configure `vite.config.ts` with React and `test.environment = "jsdom"`, `test.setupFiles = ["./src/test/setup.ts"]`, and enable JSON imports through `resolveJsonModule: true` in `tsconfig.app.json`.

- [ ] **Step 2: Install dependencies and create the lockfile**

Run:

```powershell
$env:PATH = 'C:\Users\chenzhiqi\.cache\codex-runtimes\codex-primary-runtime\dependencies\node\bin;' + $env:PATH
pnpm install
```

Expected: `pnpm-lock.yaml` is created and install exits with code 0. If the registry resolves newer compatible minor versions, keep the lockfile resolution and do not add a second component library.

- [ ] **Step 3: Write the failing application-shell smoke test**

Create `src/app/App.test.tsx`:

```tsx
import { render, screen } from "@testing-library/react";
import { App } from "./App";

test("renders the three primary modules", () => {
  render(<App />);

  expect(screen.getByRole("link", { name: "总览" })).toBeInTheDocument();
  expect(screen.getByRole("link", { name: "素材" })).toBeInTheDocument();
  expect(screen.getByRole("link", { name: "对比" })).toBeInTheDocument();
});
```

- [ ] **Step 4: Run the smoke test and verify it fails**

Run:

```powershell
pnpm test -- src/app/App.test.tsx
```

Expected: FAIL because `App` and the navigation do not exist yet.

- [ ] **Step 5: Add the minimal React entry, shell markup and visual tokens**

Create `src/app/App.tsx` with a temporary Hash Router shell:

```tsx
import { HashRouter, NavLink } from "react-router-dom";

export function App() {
  return (
    <HashRouter>
      <header aria-label="主导航">
        <nav>
          <NavLink to="/">总览</NavLink>
          <NavLink to="/materials">素材</NavLink>
          <NavLink to="/compare">对比</NavLink>
        </nav>
      </header>
      <main id="main-content">SLG 海外吸量素材情报库</main>
    </HashRouter>
  );
}
```

Create `src/styles/_tokens.scss`:

```scss
$canvas: #f4f6f5;
$surface: #fcfdfc;
$ink: #18201d;
$muted: #68756f;
$rule: #d6ddda;
$accent: #1f5d50;
$accent-soft: #dde9e4;
$space-1: 8px;
$space-2: 16px;
$space-3: 24px;
$motion-fast: 140ms;
```

Create `src/styles/global.scss` with `@use "@carbon/react";`, the approved font stacks, canvas colors, `box-sizing`, a minimum desktop content width of `1120px`, and a `2px solid #1F5D50` `:focus-visible` outline.

- [ ] **Step 6: Run the smoke test and production build**

Run:

```powershell
pnpm test -- src/app/App.test.tsx
pnpm build
```

Expected: test PASS and build exits with code 0.

- [ ] **Step 7: Commit the bootstrap**

```powershell
git add package.json pnpm-lock.yaml index.html tsconfig.json tsconfig.app.json tsconfig.node.json vite.config.ts src/main.tsx src/app/App.tsx src/app/App.test.tsx src/styles src/test
git commit -m "chore: bootstrap SLG creative demo"
```

### Task 2: Build the truthful material model and adapter

**Files:**
- Create: `src/features/materials/materialModel.ts`
- Create: `src/features/materials/materialRepository.ts`
- Create: `src/features/materials/materialRepository.test.ts`
- Read: `data/ad-breakdowns/001-clash-of-clans.json`

**Interfaces:**
- Produces: `Material`, `MaterialSlot`, `materials`, `materialSlots`, `getMaterialById(id)`, `filterMaterials(filters)`, `canCompare(ids)`.
- Consumes: the existing `SLG-0001` JSON and no page components.

- [ ] **Step 1: Define the UI-facing material types**

Create `materialModel.ts` with explicit nullable fields rather than zero-value fallbacks:

```ts
export type BooleanEvidence = {
  value: boolean;
  note: string;
};

export type AcquisitionPerformance = {
  source: string;
  region: string | null;
  platform: string;
  displayEstimate: string | null;
  runDays: number | null;
  dateStart: string | null;
  dateEnd: string | null;
  popularitySummary: string | null;
};

export type Material = {
  id: string;
  name: string;
  productName: string;
  company: string;
  region: string | null;
  platform: string;
  stage: string;
  theme: string;
  category: string;
  hookTypes: string[];
  firstFrame: string;
  showsResult: BooleanEvidence;
  coreSellingPoint: string;
  supportingSellingPoints: string[];
  hasCharacter: BooleanEvidence;
  hasVoiceover: BooleanEvidence;
  hasRealGameplay: BooleanEvidence;
  usesFakeGameplay: BooleanEvidence;
  visualStyles: string[];
  durationSeconds: number;
  editingPace: string;
  endCard: string;
  localization: string[];
  productionMethods: string[];
  attractionRationale: string[];
  observation: string;
  performance: AcquisitionPerformance;
  videoUrl: string;
};

export type MaterialSlot =
  | { kind: "material"; material: Material }
  | { kind: "empty"; id: `empty-${number}`; label: "待补充素材" };

export type MaterialFilters = {
  product: string;
  region: string;
  platform: string;
  hook: string;
};
```

- [ ] **Step 2: Write failing repository tests**

Create tests that protect the user-provided values and the no-fabrication rule:

```ts
import {
  canCompare,
  filterMaterials,
  materialSlots,
  materials,
} from "./materialRepository";

test("loads one real material and four reserved slots", () => {
  expect(materials).toHaveLength(1);
  expect(materials[0]).toMatchObject({
    id: "SLG-0001",
    productName: "Clash of Clans",
    company: "Supercell",
    region: null,
    platform: "YouTube",
  });
  expect(materialSlots).toHaveLength(5);
  expect(materialSlots.filter((slot) => slot.kind === "empty")).toHaveLength(4);
});

test("preserves acquisition context without inventing conversion data", () => {
  expect(materials[0].performance).toMatchObject({
    source: "广大大",
    region: null,
    platform: "YouTube",
    displayEstimate: "3.2亿",
    runDays: 33,
    dateStart: "2026-06-07",
    dateEnd: "2026-07-09",
  });
  expect(JSON.stringify(materials[0])).not.toContain("conversion");
  expect(JSON.stringify(materials[0])).not.toContain("ROAS");
});

test("filters the only sample and gates comparison at two selections", () => {
  expect(
    filterMaterials({ product: "Clash of Clans", region: "", platform: "YouTube", hook: "数字清单" }),
  ).toHaveLength(1);
  expect(
    filterMaterials({ product: "", region: "", platform: "TikTok", hook: "" }),
  ).toHaveLength(0);
  expect(canCompare(["SLG-0001"])).toBe(false);
  expect(canCompare(["SLG-0001", "SLG-0002"])).toBe(true);
});
```

- [ ] **Step 3: Run the repository tests and verify they fail**

Run:

```powershell
pnpm test -- src/features/materials/materialRepository.test.ts
```

Expected: FAIL because the adapter exports do not exist.

- [ ] **Step 4: Implement the JSON adapter and reserved slots**

In `materialRepository.ts`, import the raw JSON, map Chinese/raw nested fields to the `Material` interface, and use:

```ts
export const materials: Material[] = [adaptMaterial(rawClashOfClans)];

export const materialSlots: MaterialSlot[] = [
  { kind: "material", material: materials[0] },
  ...Array.from(
    { length: 4 },
    (_, index): MaterialSlot => ({
      kind: "empty",
      id: `empty-${index + 1}`,
      label: "待补充素材",
    }),
  ),
];

export function canCompare(ids: string[]) {
  return new Set(ids).size >= 2;
}

export function getMaterialById(id: string) {
  return materials.find((material) => material.id === id);
}
```

`filterMaterials` uses case-insensitive exact/contains checks, treats an empty filter as “all,” and checks a region filter against `"未提供"` when `material.region` is `null`. The adapter sets `videoUrl` to `"/media/clash-of-clans-return.mp4"` and derives `observation` from the supplied assessment:

```text
明确点名旧账号玩家，并用五点清单与连续实机证据降低回流顾虑。
```

- [ ] **Step 5: Run repository tests**

Run:

```powershell
pnpm test -- src/features/materials/materialRepository.test.ts
```

Expected: all repository tests PASS.

- [ ] **Step 6: Commit the model**

```powershell
git add src/features/materials
git commit -m "feat: model the first creative sample"
```

### Task 3: Implement the persistent app shell and navigation

**Files:**
- Create: `src/components/AppShell.tsx`
- Create: `src/components/components.module.scss`
- Create: `src/app/useDemoState.ts`
- Modify: `src/app/App.tsx`
- Modify: `src/app/App.test.tsx`

**Interfaces:**
- Produces: `AppShell`, `DemoState`, `useDemoState()`.
- Consumes: `materials`, `canCompare(ids)` from Task 2.

- [ ] **Step 1: Expand the integration test for route navigation**

Add to `App.test.tsx`:

```tsx
import userEvent from "@testing-library/user-event";

test("navigates between overview, materials and compare views", async () => {
  const user = userEvent.setup();
  render(<App />);

  expect(screen.getByRole("heading", { name: "本周素材观察" })).toBeInTheDocument();
  await user.click(screen.getByRole("link", { name: "素材" }));
  expect(screen.getByRole("heading", { name: "素材库" })).toBeInTheDocument();
  await user.click(screen.getByRole("link", { name: "对比" }));
  expect(screen.getByRole("heading", { name: "素材对比" })).toBeInTheDocument();
});
```

- [ ] **Step 2: Run the route test and verify it fails**

Run:

```powershell
pnpm test -- src/app/App.test.tsx
```

Expected: FAIL because routed page headings do not exist.

- [ ] **Step 3: Implement the app state hook**

Create `useDemoState.ts`:

```ts
import { useMemo, useState } from "react";
import { canCompare } from "../features/materials/materialRepository";

const STORAGE_KEY = "slg-creative-demo:observation";

export function useDemoState() {
  const [selectedIds, setSelectedIds] = useState<string[]>(["SLG-0001"]);
  const [observation, setObservation] = useState(
    () => window.localStorage.getItem(STORAGE_KEY) ?? "",
  );

  function toggleMaterial(id: string) {
    setSelectedIds((current) =>
      current.includes(id)
        ? current.filter((selectedId) => selectedId !== id)
        : [...current, id],
    );
  }

  function saveObservation() {
    if (!canCompare(selectedIds)) return false;
    window.localStorage.setItem(STORAGE_KEY, observation.trim());
    return true;
  }

  return useMemo(
    () => ({
      selectedIds,
      observation,
      canCompare: canCompare(selectedIds),
      toggleMaterial,
      setObservation,
      saveObservation,
    }),
    [selectedIds, observation],
  );
}

export type DemoState = ReturnType<typeof useDemoState>;
```

- [ ] **Step 4: Implement `AppShell` and routed placeholder pages**

`AppShell` uses semantic `header`, `nav`, `main`, an always-visible product label, and three `NavLink` items. Active state uses the forest green label and 2px bottom rule. In `App.tsx`, use one `HashRouter`, one `useDemoState`, and routes:

```tsx
<Routes>
  <Route path="/" element={<OverviewPage state={state} />} />
  <Route path="/materials" element={<MaterialsPage state={state} />} />
  <Route path="/materials/:materialId" element={<MaterialsPage state={state} />} />
  <Route path="/compare" element={<ComparePage state={state} />} />
</Routes>
```

At this task boundary, each page may be a named component containing only its required heading. Tasks 4-6 replace them with complete page implementations.

- [ ] **Step 5: Run the route test**

Run:

```powershell
pnpm test -- src/app/App.test.tsx
```

Expected: PASS for all three navigation transitions.

- [ ] **Step 6: Commit the shell**

```powershell
git add src/app src/components
git commit -m "feat: add demo navigation shell"
```

### Task 4: Build the conclusion-first overview

**Files:**
- Create: `src/components/EmptyMaterialSlot.tsx`
- Create: `src/components/MissingValue.tsx`
- Create: `src/pages/OverviewPage.tsx`
- Create: `src/pages/OverviewPage.test.tsx`
- Create: `src/pages/OverviewPage.module.scss`
- Modify: `src/components/components.module.scss`
- Modify: `src/app/App.tsx`

**Interfaces:**
- Produces: `OverviewPage({ state }: { state: DemoState })`.
- Consumes: `materialSlots`, first `Material`, `EmptyMaterialSlot`, `DemoState`.

- [ ] **Step 1: Write the failing overview behavior test**

```tsx
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { OverviewPage } from "./OverviewPage";

const state = {
  selectedIds: ["SLG-0001"],
  observation: "",
  canCompare: false,
  toggleMaterial: () => undefined,
  setObservation: () => undefined,
  saveObservation: () => false,
};

test("shows one evidence sample, four reserved slots and a gated comparison action", () => {
  render(
    <MemoryRouter>
      <OverviewPage state={state} />
    </MemoryRouter>,
  );

  expect(screen.getByRole("heading", { name: "本周素材观察" })).toBeInTheDocument();
  expect(screen.getByText("Clash of Clans")).toBeInTheDocument();
  expect(screen.getAllByText("待补充素材")).toHaveLength(4);
  expect(screen.getByRole("button", { name: "进入素材对比" })).toBeDisabled();
  expect(screen.getByText("至少需要 2 条素材才能开始对比")).toBeInTheDocument();
});
```

- [ ] **Step 2: Run the overview test and verify it fails**

Run:

```powershell
pnpm test -- src/pages/OverviewPage.test.tsx
```

Expected: FAIL because the complete overview does not exist.

- [ ] **Step 3: Implement reusable empty and missing states**

`EmptyMaterialSlot` renders a non-interactive `div` with `aria-disabled="true"`, an ordinal such as `02`, the exact label `待补充素材`, and no image, product name or metric. `MissingValue` renders `未提供` for `null`/empty values and otherwise renders its value.

- [ ] **Step 4: Implement the overview evidence hierarchy**

Build these sections in order:

1. Eyebrow `SLG CREATIVE INTELLIGENCE / WEEKLY VIEW`.
2. `h1` “本周素材观察”.
3. One green-tinted conclusion block with the exact observation text from Task 2.
4. One compact real-material row plus four `EmptyMaterialSlot` rows.
5. Evidence chain with four ordered labels: `素材内容` → `统一拆解` → `吸量表现` → `观察结论`.
6. “查看全部素材” link to `/materials`.
7. Carbon `Button` “进入素材对比”; it is disabled while `state.canCompare` is false and accompanied by the exact explanation.

Do not add metric summary cards, charts or decorative illustrations.

- [ ] **Step 5: Run overview and accessibility-oriented assertions**

Run:

```powershell
pnpm test -- src/pages/OverviewPage.test.tsx
```

Expected: PASS, with four and only four reserved slots.

- [ ] **Step 6: Commit the overview**

```powershell
git add src/components src/pages/OverviewPage.tsx src/pages/OverviewPage.test.tsx src/pages/OverviewPage.module.scss src/app/App.tsx
git commit -m "feat: add conclusion-first overview"
```

### Task 5: Build the material filtering and evidence detail view

**Files:**
- Create: `src/pages/MaterialsPage.tsx`
- Create: `src/pages/MaterialsPage.test.tsx`
- Create: `src/pages/MaterialsPage.module.scss`
- Modify: `src/app/App.tsx`
- Copy: `C:\Users\chenzhiqi\Downloads\1 (1).mp4` to `public/media/clash-of-clans-return.mp4`

**Interfaces:**
- Produces: `MaterialsPage({ state }: { state: DemoState })`.
- Consumes: `materialSlots`, `filterMaterials`, `getMaterialById`, `EmptyMaterialSlot`, `MissingValue`, `DemoState`.

- [ ] **Step 1: Copy the user video without transforming it and verify byte identity**

Run:

```powershell
New-Item -ItemType Directory -Force -Path 'C:\Users\chenzhiqi\Documents\网站\public\media'
Copy-Item -LiteralPath 'C:\Users\chenzhiqi\Downloads\1 (1).mp4' -Destination 'C:\Users\chenzhiqi\Documents\网站\public\media\clash-of-clans-return.mp4'
Get-FileHash -Algorithm SHA256 -LiteralPath 'C:\Users\chenzhiqi\Downloads\1 (1).mp4'
Get-FileHash -Algorithm SHA256 -LiteralPath 'C:\Users\chenzhiqi\Documents\网站\public\media\clash-of-clans-return.mp4'
```

Expected: both SHA-256 hashes are identical. Do not run a video decoder, frame extractor or transcoder.

- [ ] **Step 2: Write failing tests for the default, filtered and missing-data states**

```tsx
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";
import type { DemoState } from "../app/useDemoState";
import { MaterialsPage } from "./MaterialsPage";

const materialPageState: DemoState = {
  selectedIds: ["SLG-0001"],
  observation: "",
  canCompare: false,
  toggleMaterial: () => undefined,
  setObservation: () => undefined,
  saveObservation: () => false,
};

function renderMaterialsPage() {
  return render(
    <MemoryRouter>
      <MaterialsPage state={materialPageState} />
    </MemoryRouter>,
  );
}

test("shows the real sample, four non-interactive slots and its video", () => {
  renderMaterialsPage();

  expect(screen.getByRole("button", { name: /Clash of Clans/ })).toBeEnabled();
  expect(screen.getAllByText("待补充素材")).toHaveLength(4);
  expect(screen.getByLabelText("Clash of Clans 广告视频")).toHaveAttribute(
    "src",
    "/media/clash-of-clans-return.mp4",
  );
  expect(screen.getByText("3.2亿")).toBeInTheDocument();
  expect(screen.getAllByText("未提供").length).toBeGreaterThan(0);
  expect(screen.queryByText("转化率")).not.toBeInTheDocument();
  expect(screen.queryByText("ROAS")).not.toBeInTheDocument();
});

test("shows a truthful empty result when filters do not match", async () => {
  const user = userEvent.setup();
  renderMaterialsPage();

  await user.selectOptions(screen.getByLabelText("平台"), "TikTok");
  expect(screen.getByText("没有符合当前条件的素材")).toBeInTheDocument();
  expect(screen.queryByRole("button", { name: /Clash of Clans/ })).not.toBeInTheDocument();
});
```

Also assert every reserved slot has `aria-disabled="true"` and cannot be reached as a button.

- [ ] **Step 3: Run material page tests and verify they fail**

Run:

```powershell
pnpm test -- src/pages/MaterialsPage.test.tsx
```

Expected: FAIL because the materials page is not implemented.

- [ ] **Step 4: Implement the filter and master-detail layout**

Use a two-column desktop grid:

- Left, 360px: four Carbon dropdown/select controls and five compact rows.
- Right, flexible: video at top, then sectioned text evidence.

The filter fields are `产品`, `地区`, `平台`, `钩子类型`. Options come only from the real `materials` array plus `全部`; the region option for the current sample is `未提供`. When a filter has no matches, show the exact empty result copy instead of the five rows.

The sample row is a real `button`; the four reserved rows use `EmptyMaterialSlot`. A row may contain a muted `<video preload="metadata" muted playsInline>` preview using the same MP4 and no generated poster image.

- [ ] **Step 5: Implement the evidence detail sections**

Render the following semantic sections:

- `视频素材`: native controls, `preload="metadata"`, `playsInline`, and a fallback paragraph `视频文件不可用，文字拆解仍可查看`.
- `基础信息`: product, company, region, platform, stage, theme, category.
- `创意拆解`: hook tags, first frame, core/supporting selling points, result, character, voiceover, real gameplay, fake gameplay, duration, editing pace, end card, localization.
- `制作方式`: the supplied production methods.
- `吸量数据`: source, display estimate, channel, region, run days, date range and popularity summary.
- `对比操作`: checked/unchecked selection control, plus disabled “进入对比” button until `state.canCompare`.

Use `MissingValue` for every absent value. Never read or render `performance_data.conversion_rate`.

- [ ] **Step 6: Run page tests and full checks**

Run:

```powershell
pnpm test -- src/pages/MaterialsPage.test.tsx
pnpm build
```

Expected: tests PASS and the production build succeeds with the MP4 emitted as a public asset.

- [ ] **Step 7: Commit the material view**

```powershell
git add public/media/clash-of-clans-return.mp4 src/pages/MaterialsPage.tsx src/pages/MaterialsPage.test.tsx src/pages/MaterialsPage.module.scss src/app/App.tsx
git commit -m "feat: add creative evidence detail"
```

### Task 6: Build the gated comparison structure and local observation storage

**Files:**
- Create: `src/pages/ComparePage.tsx`
- Create: `src/pages/ComparePage.test.tsx`
- Create: `src/pages/ComparePage.module.scss`
- Modify: `src/app/useDemoState.ts`
- Modify: `src/app/App.tsx`

**Interfaces:**
- Produces: `ComparePage({ state, availableMaterials? })`, functional two-or-more-material path.
- Consumes: `Material`, `materials`, `canCompare`, `MissingValue`, `DemoState`.

- [ ] **Step 1: Write the failing one-material gate test**

```tsx
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { vi } from "vitest";
import type { DemoState } from "../app/useDemoState";
import {
  materials,
} from "../features/materials/materialRepository";
import type { Material } from "../features/materials/materialModel";
import { ComparePage } from "./ComparePage";

function createState(
  overrides: Partial<DemoState> = {},
): DemoState & { saveObservation: ReturnType<typeof vi.fn> } {
  return {
    selectedIds: ["SLG-0001"],
    observation: "",
    canCompare: false,
    toggleMaterial: () => undefined,
    setObservation: vi.fn(),
    saveObservation: vi.fn(() => false),
    ...overrides,
  };
}

function renderComparePage(overrides: Partial<DemoState> = {}) {
  const state = createState(overrides);
  return {
    state,
    ...render(
      <ComparePage state={state} availableMaterials={materials} />,
    ),
  };
}

test("keeps comparison and conclusion input unavailable with one sample", () => {
  renderComparePage({
    selectedIds: ["SLG-0001"],
    canCompare: false,
  });

  expect(screen.getByText("至少需要 2 条素材才能开始对比")).toBeInTheDocument();
  expect(screen.getAllByText("等待更多素材").length).toBeGreaterThanOrEqual(1);
  expect(screen.getByRole("textbox", { name: "观察结论" })).toBeDisabled();
  expect(screen.getByRole("button", { name: "保存观察" })).toBeDisabled();
});
```

- [ ] **Step 2: Write the future two-material behavior test**

Create a second material only inside the test by cloning the typed sample with a new ID and name:

```tsx
const secondMaterial: Material = {
  ...materials[0],
  id: "SLG-TEST-0002",
  name: "测试用第二素材",
  productName: "测试用第二素材",
};

test("enables comparison and saves an observation when two materials exist", async () => {
  const user = userEvent.setup();
  const state = createState({
    selectedIds: ["SLG-0001", "SLG-TEST-0002"],
    canCompare: true,
    observation: "数字清单配合实机证据值得继续验证。",
    saveObservation: vi.fn(() => true),
  });

  render(
    <ComparePage state={state} availableMaterials={[materials[0], secondMaterial]} />,
  );

  const input = screen.getByRole("textbox", { name: "观察结论" });
  expect(input).toBeEnabled();
  expect(input).toHaveValue("数字清单配合实机证据值得继续验证。");
  await user.click(screen.getByRole("button", { name: "保存观察" }));
  expect(state.saveObservation).toHaveBeenCalled();
});
```

The test-only second material must never be exported to production data or rendered in the running one-sample Demo.

- [ ] **Step 3: Run comparison tests and verify they fail**

Run:

```powershell
pnpm test -- src/pages/ComparePage.test.tsx
```

Expected: FAIL because the comparison page does not exist.

- [ ] **Step 4: Implement the fixed-dimension comparison table**

Render:

- One selected Clash of Clans column.
- Two empty columns labeled `等待更多素材` in the current Demo.
- Fixed left-side dimensions: video preview, product/region/platform, first-three-second hook, first frame, core selling point, shows result, character, voiceover, real gameplay, fake gameplay, production methods, attraction performance.

Missing values use `未提供`; there are no progress bars, radar charts, automatic scores, conversion fields or commercial metrics. The table container may scroll horizontally below `1120px`, while the dimension column remains sticky.

- [ ] **Step 5: Implement the gated conclusion form**

Use a Carbon `TextArea` labeled `观察结论` and Carbon `Button` labeled `保存观察`. Both are disabled when `state.canCompare` is false. When enabled:

- text changes call `state.setObservation`;
- save calls `state.saveObservation`;
- an empty trimmed observation remains valid for editing but the save button is disabled until text is non-empty;
- a successful save shows an inline `已保存到本机浏览器` status with `role="status"`.

- [ ] **Step 6: Run comparison, app and storage tests**

Add a hook-level assertion in `App.test.tsx` or a focused `useDemoState` test that preloads `localStorage`, renders the app, and confirms the stored string reaches the enabled form. Then run:

```powershell
pnpm test -- src/pages/ComparePage.test.tsx src/app/App.test.tsx
```

Expected: one-material gating and test-only two-material enabling both PASS.

- [ ] **Step 7: Commit comparison**

```powershell
git add src/pages/ComparePage.tsx src/pages/ComparePage.test.tsx src/pages/ComparePage.module.scss src/app/App.tsx src/app/useDemoState.ts src/app/App.test.tsx
git commit -m "feat: add gated material comparison"
```

### Task 7: Verify the complete leadership Demo

**Files:**
- Modify only files implicated by verification failures.
- Verify: all application, style, test and media files from Tasks 1-6.

**Interfaces:**
- Consumes: complete application.
- Produces: a passing, browser-verified local Demo with no scope expansion.

- [ ] **Step 1: Run the complete automated verification**

Run:

```powershell
pnpm check
```

Expected: all Vitest suites PASS, TypeScript compilation succeeds, and Vite production build exits with code 0.

- [ ] **Step 2: Run the local server**

Run:

```powershell
pnpm dev --host 127.0.0.1
```

Expected: Vite prints a local URL and the page opens without console errors.

- [ ] **Step 3: Verify the three routes in a real browser**

Check:

1. `#/` shows one observation, one real sample, four empty slots and a disabled comparison action.
2. `#/materials` shows five compact rows, plays the supplied MP4, filters the sample, preserves all missing-value labels, and never shows conversion/ROAS/revenue.
3. `#/compare` shows one sample, waiting columns, the minimum-two-material explanation, and disabled conclusion controls.
4. Keyboard Tab order reaches navigation, filters, the real sample, video controls and relevant actions with a visible focus outline.
5. At 1440×900 and 1280×800, headings, controls and evidence remain readable with no overlapping content.
6. At widths below 1120px, the page uses horizontal overflow instead of collapsing into an unplanned mobile interface.

- [ ] **Step 4: Verify visual conformance**

Confirm against the approved spec:

- only the approved neutral and forest-green palette is used;
- no card-stack shadows, gradients or ornamental illustrations appear;
- the conclusion is the primary visual emphasis;
- main containers are square and controls use no more than 4px radius;
- motion is limited to approximately 140ms hover/focus/active feedback;
- the UI uses one Carbon component system.

- [ ] **Step 5: Verify the source video remains unchanged**

Run:

```powershell
Get-FileHash -Algorithm SHA256 -LiteralPath 'C:\Users\chenzhiqi\Downloads\1 (1).mp4'
Get-FileHash -Algorithm SHA256 -LiteralPath 'C:\Users\chenzhiqi\Documents\网站\public\media\clash-of-clans-return.mp4'
```

Expected: hashes match.

- [ ] **Step 6: Scan for prohibited UI copy**

Run:

```powershell
rg -n "转化率|ROAS|收入|付费率|综合评分|管理员|登录" src
```

Expected: no production UI match. Test assertions that explicitly confirm prohibited labels are absent are acceptable.

- [ ] **Step 7: Commit verification-only fixes if any**

If verification required changes:

```powershell
git add src public package.json pnpm-lock.yaml
git commit -m "fix: align demo with approved specification"
```

If no files changed, do not create an empty commit.

## Self-Review

- Spec coverage: Tasks 3-6 cover all three routes, the one-plus-four material structure, the evidence chain, filtering, complete decomposition, acquisition-only data, comparison gating, local observation storage and every required missing state.
- Scope control: no task introduces authentication, roles, backend storage, import flows, automatic tagging, scoring, conversion metrics, mobile-specific layouts or AI conclusions.
- Data truthfulness: Task 2 adapts the supplied JSON; Task 5 uses `MissingValue` and renders no conversion fields; test-only data in Task 6 is explicitly isolated from production.
- Media handling: Task 5 copies the original MP4 byte-for-byte and Task 7 verifies matching hashes; no parsing, frame extraction or transcoding is planned.
- Type consistency: pages consume the same `Material`, `DemoState`, `materialSlots` and `canCompare` interfaces defined in Tasks 2 and 3.
- Placeholder scan: all production states use the approved explicit labels `待补充素材`, `等待更多素材`, `未提供`, `暂无吸量数据` or the specified filter/video messages.
