import { NavLink, Outlet } from "react-router-dom";
import { materials } from "../data/material";

const navigation = [
  { to: "/", label: "总览", end: true },
  { to: "/materials", label: "素材", end: false },
  { to: "/compare", label: "对比", end: false },
];

export function AppShell() {
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
              to={item.to}
              end={item.end}
              className={({ isActive }) => (isActive ? "active" : undefined)}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
        <div className="header-status">
          <span>PREVIEW</span>
          <span>{materials.length} / 5 素材</span>
        </div>
      </header>
      <main id="main-content" className="app-main">
        <Outlet />
      </main>
    </div>
  );
}
