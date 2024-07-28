import { MedicalFacility } from "@/infra/types/ByoungWon";
import { HOLIDAYS } from "@/lib/Holidays";
import dayjs from "dayjs";
type Days =
  | "monday"
  | "tuesday"
  | "wednesday"
  | "thursday"
  | "friday"
  | "saturday"
  | "sunday";

const TIME_MAP = {
  monday: "dutytime1",
  tuesday: "dutytime2",
  wednesday: "dutytime3",
  thursday: "dutytime4",
  friday: "dutytime5",
  saturday: "dutytime6",
  sunday: "dutytime7",
  holiday: "dutytime8",
};

export default function addOpenToday(
  pharmacies: MedicalFacility[],
): (MedicalFacility & { isOpen: boolean | null })[] {
  const today = dayjs();
  const yearMonthDay = today.format("YYYY-MM-DD");

  const day = today.format("dddd").toLowerCase() as Days;
  const hourMinute = today.format("HHmm").toLowerCase();

  return pharmacies.map((m) => {
    let isOpen;
    const holiday = HOLIDAYS[yearMonthDay as keyof typeof HOLIDAYS] as
      | string
      | undefined;
    const isHoliday = !!holiday;

    const workingDay = isHoliday ? "holiday" : day;
    const dutyTime = TIME_MAP[workingDay];
    const openKey = `${dutyTime}s`;
    const closeKey = `${dutyTime}c`;
    const start = m[openKey as keyof MedicalFacility];
    const end = m[closeKey as keyof MedicalFacility];

    if (!start || !end) {
      isOpen = null;
    } else {
      isOpen =
        parseInt(start as string) <= parseInt(hourMinute) &&
        parseInt(hourMinute) <= parseInt(end as string);
    }

    return {
      ...m,
      isOpen,
    };
  });
}
