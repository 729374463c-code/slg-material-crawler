import { NavLink, Outlet } from "react-router-dom";
import { materialWeeks } from "../data/materialWeeks";
import { useMaterialWeek, withWeek } from "../data/useMaterialWeek";

const navigation = [
  { to: "/", label: "总览", end: true },
  { to: "/materials", label: "竞品吸量素材调研", end: false },
  { to: "/weekly-review", label: "周度复盘", end: false },
  { to: "/compare", label: "对比", end: false },
  { to: "/methodology", label: "分析方法", end: false },
];

export function AppShell() {
  const { selectedWeek } = useMaterialWeek();
  return (
    <div className="app-shell">
      <header className="app-header">
        <div className="brand-block">
          <span className="brand-kicker">CREATIVE INTELLIGENCE / SLG</span>
          <strong>吸量素材情报库</strong>
        </div>
        <nav className="primary-nav" aria-label="主导航">
          {navigation.map((item) => (
            <NavLink
              key={item.to}
              to={withWeek(item.to, selectedWeek.id)}
              end={item.end}
              className={({ isActive }) => (isActive ? "active" : undefined)}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
        <div className="header-status">
          <span>PREVIEW</span>
          <span>
            {materialWeeks.length} 批次 / {materialWeeks.reduce((sum, week) => sum + week.materials.length, 0)} 条
          </span>
        </div>
      </header>
      <main id="main-content" className="app-main">
        <Outlet />
      </main>
    </div>
  );
}
