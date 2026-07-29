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
