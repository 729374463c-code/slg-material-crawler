import { useSearchParams } from "react-router-dom";
import { latestMaterialWeek, materialWeeks } from "./materialWeeks";

export function useMaterialWeek() {
  const [searchParams, setSearchParams] = useSearchParams();
  const selectedWeek = materialWeeks.find((week) => week.id === searchParams.get("week")) ?? latestMaterialWeek;

  function selectWeek(weekId: string) {
    const next = new URLSearchParams(searchParams);
    next.set("week", weekId);
    setSearchParams(next);
  }

  return { selectedWeek, selectWeek };
}

export function withWeek(path: string, weekId: string) {
  return `${path}?week=${encodeURIComponent(weekId)}`;
}
