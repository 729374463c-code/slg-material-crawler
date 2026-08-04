import { HashRouter, MemoryRouter, Route, Routes } from "react-router-dom";
import { AppShell } from "../components/AppShell";
import { ComparePage } from "../pages/ComparePage";
import { MaterialsPage } from "../pages/MaterialsPage";
import { MaterialDetailPage } from "../pages/MaterialDetailPage";
import { MethodologyPage } from "../pages/MethodologyPage";
import { OverviewPage } from "../pages/OverviewPage";

export function App() {
  const Router = typeof window === "undefined" ? MemoryRouter : HashRouter;

  return (
    <Router>
      <Routes>
        <Route element={<AppShell />}>
          <Route index element={<OverviewPage />} />
          <Route path="materials" element={<MaterialsPage />} />
          <Route path="materials/:materialId" element={<MaterialDetailPage />} />
          <Route path="compare" element={<ComparePage />} />
          <Route path="methodology" element={<MethodologyPage />} />
        </Route>
      </Routes>
    </Router>
  );
}
