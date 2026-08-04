export function EmptyMaterialSlot() {
  return (
    <div className="material-row empty-material" aria-disabled="true">
      <span className="material-index" aria-hidden="true">
        -
      </span>
      <div>
        <strong>待补充素材</strong>
        <p>保留位 · 暂无证据</p>
      </div>
      <span className="row-status">未接入</span>
    </div>
  );
}
