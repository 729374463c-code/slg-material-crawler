import { HashRouter, MemoryRouter, Route, Routes } from "react-router-dom";
import { AppShell } from "../components/AppShell";
import { ComparePage } from "../pages/ComparePage";
import { MaterialsPage } from "../pages/MaterialsPage";
import { OverviewPage } from "../pages/OverviewPage";

export function App() {
  const Router = typeof window === "undefined" ? MemoryRouter : HashRouter;

  return (
    <Router>
      <Routes>
        <Route element={<AppShell />}>
          <Route index element={<OverviewPage />} />
          <Route path="materials" element={<MaterialsPage />} />
          <Route path="compare" element={<ComparePage />} />
        </Route>
      </Routes>
    </Router>
  );
}
