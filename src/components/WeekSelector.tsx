import { Select, SelectItem } from "@carbon/react";
import { materialWeeks } from "../data/materialWeeks";
import { useMaterialWeek } from "../data/useMaterialWeek";

export function WeekSelector() {
  const { selectedWeek, selectWeek } = useMaterialWeek();
  const archiveLabel = selectedWeek.archiveType === "special-research"
    ? "SPECIAL RESEARCH"
    : selectedWeek.archiveType === "adx-special-research"
      ? "ADX DOMESTIC RESEARCH"
    : selectedWeek.market === "国内"
      ? "DOMESTIC TEST SET"
      : "WEEKLY ARCHIVE";

  return (
    <section className="week-selector" aria-label="选择素材周次">
      <div>
        <span>{archiveLabel}</span>
        <strong>{selectedWeek.label} · {selectedWeek.snapshotDate}</strong>
        <small>
          数据周期：{selectedWeek.sourcePeriod} · {selectedWeek.sourceNote}
          {selectedWeek.sourceName ? ` · 来源：${selectedWeek.sourceName}` : ""}
        </small>
      </div>
      <Select
        id="week-selector"
        labelText="查看历史周"
        onChange={(event) => selectWeek(event.target.value)}
        value={selectedWeek.id}
      >
        {[...materialWeeks].reverse().map((week) => (
          <SelectItem
            key={week.id}
            text={`${week.label} · ${week.snapshotDate} · ${week.materials.length} 条`}
            value={week.id}
          />
        ))}
      </Select>
    </section>
  );
}
