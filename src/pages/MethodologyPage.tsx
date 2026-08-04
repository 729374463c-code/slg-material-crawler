const structureUnits = [
  { goal: "激发兴趣", carrier: "吸量包装（头）", note: "建立继续观看的动机" },
  { goal: "满足体验欲", carrier: "核心玩法卖点", note: "兑现用户期待的核心体验" },
  { goal: "承接行动", carrier: "吸量包装（尾）", note: "推动打开商店或继续了解" },
];

export function MethodologyPage() {
  return (
    <div className="page methodology-page">
      <section className="page-heading">
        <div>
          <p className="eyebrow">VIDEO CREATIVE METHOD</p>
          <h1>分析方法</h1>
        </div>
        <span className="heading-note">方法示意，不是单条素材的测量结果</span>
      </section>

      <section className="method-intro">
        <p className="section-label">MINIMUM UNIT</p>
        <h2>把观看动机拆成可复用的最小内容单元</h2>
        <p>每个单元同时包含一个结构目标，以及承载该目标的具体内容。</p>
      </section>

      <section className="method-unit-grid" aria-label="视频最小构成单元">
        {structureUnits.map((unit, index) => (
          <article key={unit.goal}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <div className="method-goal">
              <small>结构目标</small>
              <h2>{unit.goal}</h2>
              <p>{unit.note}</p>
            </div>
            <div className="method-carrier">
              <small>内容载体</small>
              <strong>{unit.carrier}</strong>
            </div>
          </article>
        ))}
      </section>

      <section className="complete-structure" aria-labelledby="complete-structure-title">
        <div>
          <p className="section-label">COMPLETE VIDEO</p>
          <h2 id="complete-structure-title">完整视频结构</h2>
        </div>
        <div className="structure-formula">
          <strong>开头钩子</strong>
          <span>+</span>
          <strong>内容单元 1</strong>
          <span>+</span>
          <strong>内容单元 2</strong>
          <span>…</span>
          <strong>行动承接</strong>
        </div>
      </section>

      <section className="emotion-placeholder" aria-labelledby="emotion-title">
        <div>
          <p className="section-label">EMOTIONAL RHYTHM / RESERVED</p>
          <h2 id="emotion-title">情绪节奏</h2>
          <p>后续用于表达压力、落差、释放、满足和行动承接的变化。</p>
        </div>
        <div className="emotion-line-placeholder">
          <span>压力 / 落差</span>
          <span>体验兑现</span>
          <span>情绪高潮</span>
          <span>行动承接</span>
        </div>
      </section>
    </div>
  );
}
