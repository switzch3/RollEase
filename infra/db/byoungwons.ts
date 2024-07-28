import BYOUNGWONS from "@/infra/db/byoung-won-data.json";
import addOpenToday from "@/lib/addOpenToday";
import type { MedicalFacility } from "@/infra/types/ByoungWon";

export const getByoungwon = () => {
  return addOpenToday(BYOUNGWONS as MedicalFacility[]).slice(0, 100);
};
