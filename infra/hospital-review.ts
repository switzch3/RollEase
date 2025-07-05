export type HospitalReviewKey =
  | "entrance-visible"
  | "auto-door"
  | "ramp-safe"
  | "hallway-wide"
  | "elevator-access"
  | "signage-clear"
  | "station-to-hospital"
  | "parking-to-entrance"
  | "waiting-room-space"
  | "clinic-access";

export interface HospitalReviewMeta {
  emoji: string;
  label: string;
  bgColor: string;
}

export const hospitalReview: Record<HospitalReviewKey, HospitalReviewMeta> = {
  "entrance-visible": {
    emoji: "👀",
    label: "입구 위치가 눈에 잘 띄었어요",
    bgColor: "bg-blue-50",
  },
  "auto-door": {
    emoji: "🚪",
    label: "입구에 자동문이 설치돼 있었어요",
    bgColor: "bg-amber-50",
  },
  "ramp-safe": {
    emoji: "✅",
    label: "입구 경사로가 안전하고 잘 설치돼 있었어요",
    bgColor: "bg-green-50",
  },
  "hallway-wide": {
    emoji: "😌",
    label: "건물 복도가 넓어서 휠체어로 이동이 쉬웠어요",
    bgColor: "bg-lime-50",
  },
  "elevator-access": {
    emoji: "↔️",
    label: "엘리베이터가 넉넉하고 접근이 쉬웠어요",
    bgColor: "bg-indigo-50",
  },
  "signage-clear": {
    emoji: "🆒",
    label: "안내 표지판이 잘 돼 있어서 찾기 쉬웠어요",
    bgColor: "bg-sky-50",
  },
  "station-to-hospital": {
    emoji: "🚉",
    label: "정류장에서 병원까지 휠체어로 이동이 쉬웠어요",
    bgColor: "bg-cyan-50",
  },
  "parking-to-entrance": {
    emoji: "🅿️",
    label: "주차장에서 병원 입구까지 이동이 편했어요",
    bgColor: "bg-slate-50",
  },
  "waiting-room-space": {
    emoji: "🛋️",
    label: "대기실에 휠체어 공간이 충분했어요",
    bgColor: "bg-rose-50",
  },
  "clinic-access": {
    emoji: "🤗",
    label: "진료실 입구가 넓고 진입이 편했어요",
    bgColor: "bg-pink-50",
  },
};
/* 스크립트 돌렸던 함수들 */

const allReviewKeys = [
  "entrance-visible",
  "auto-door",
  "ramp-safe",
  "hallway-wide",
  "elevator-access",
  "signage-clear",
  "station-to-hospital",
  "parking-to-entrance",
  "waiting-room-space",
  "clinic-access",
];

// n개의 랜덤한 요소를 배열에서 뽑아주는 함수
// function getRandomKeys(arr, n) {
//   const shuffled = arr.slice().sort(() => Math.random() - 0.5);
//   return shuffled.slice(0, n);
// }

// 병원 데이터 업데이트
// const updatedHospitalList = hospitalList.map((hospital) => {
//   if (hospital.dummyAccessibility === "accessible") {
//     const randomCount = Math.floor(Math.random() * allReviewKeys.length) + 1; // 최소 1개
//     const randomKeys = getRandomKeys(allReviewKeys, randomCount);
//     return {
//       ...hospital,
//       reviewKeys: randomKeys,
//     };
//   } else {
//     return {
//       ...hospital,
//       reviewKeys: [],
//     };
//   }
// });
