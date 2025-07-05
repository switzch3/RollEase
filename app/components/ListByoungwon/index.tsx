import LabelAccessibility from "./LabelAccessibility";
import type { ReactNode } from "react";
import {
  hospitalReview,
  HospitalReviewKey,
  HospitalReviewMeta,
} from "@/infra/hospital-review";

export default function ListByoungwon({
  name,
  address,
  dummyAccessibility,
  reviewKeys,
  isOpen,
  children,
}: {
  name: string;
  address: string;
  dummyAccessibility: "accessible" | "inaccessible" | "unknown";
  isOpen: boolean | null;
  reviewKeys?: HospitalReviewKey[];
  children?: ReactNode;
}) {
  return (
    <li className="flex justify-between gap-x-6 py-5 min-w-[250px]">
      <div className="flex gap-x-4 w-full">
        {children}
        <div className="min-w-0 flex-auto">
          <p className="text-sm font-semibold leading-6 text-gray-900">
            {name}
          </p>
          <LabelAccessibility type={dummyAccessibility} />
          {isOpen ? (
            <div className="mt-1 flex items-center gap-x-1.5">
              <div className="flex-none rounded-full bg-emerald-500/20 p-1">
                <div className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
              </div>
              <p className="text-xs leading-5 text-gray-500">영업중</p>
            </div>
          ) : (
            <p className="mt-1 text-xs leading-5 text-gray-500">닫음</p>
          )}
          <p className="mt-1 break-words text-xs leading-5 text-gray-500">
            {address}
          </p>

          {reviewKeys && (
            <ul className="mt-2 space-y-1 text-sm leading-5 w-full">
              {reviewKeys.map((key) => {
                const { bgColor, label, emoji }: HospitalReviewMeta =
                  hospitalReview[key];
                return (
                  <li
                    key={key}
                    className={`flex justify-between items-center rounded px-3 py-1.5 ${bgColor}`}
                  >
                    <span className="font-medium">
                      {emoji} {label}
                    </span>
                  </li>
                );
              })}
            </ul>
          )}
        </div>
      </div>
    </li>
  );
}

//
// {/*<img*/}
// {/*  className="h-12 w-12 flex-none rounded-full bg-gray-50"*/}
// {/*  src={`https://source.unsplash.com/random/${Math.random()}`}*/}
// {/*  alt=""*/}
// {/*  onClick={handleClick}*/}
// {/*/>*/}
// <RcImage.PreviewGroup
//   items={[
//     "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
//   ]}
// >
//   <RcImage src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png" />
// </RcImage.PreviewGroup>

// <ul className="mt-2 space-y-1 text-sm leading-5 w-full">
//   <li className="flex justify-between items-center bg-blue-50 rounded px-3 py-1.5">
//     <span className="font-medium">👀 "입구 위치가 눈에 잘 띄었어요"</span>
//   </li>
//   <li className="flex justify-between items-center bg-amber-50 rounded px-3 py-1.5">
//     <span className="font-medium">🚪 "입구에 자동문이 설치돼 있었어요"</span>
//   </li>
//   <li className="flex justify-between items-center bg-green-50 rounded px-3 py-1.5">
//     <span className="font-medium">
//       ✅ "입구 경사로가 안전하고 잘 설치돼 있었어요"
//     </span>
//   </li>
//   <li className="flex justify-between items-center bg-lime-50 rounded px-3 py-1.5">
//     <span className="font-medium">
//       😌 "건물 복도가 넓어서 휠체어로 이동이 쉬웠어요"
//     </span>
//   </li>
//   <li className="flex justify-between items-center bg-indigo-50 rounded px-3 py-1.5">
//     <span className="font-medium">
//       ↔️ "엘리베이터가 넉넉하고 접근이 쉬웠어요"
//     </span>
//   </li>
//   <li className="flex justify-between items-center bg-sky-50 rounded px-3 py-1.5">
//     <span className="font-medium">
//       🆒 "안내 표지판이 잘 돼 있어서 찾기 쉬웠어요"
//     </span>
//   </li>
//   <li className="flex justify-between items-center bg-cyan-50 rounded px-3 py-1.5">
//     <span className="font-medium">
//       🚉 "정류장에서 병원까지 휠체어로 이동이 쉬웠어요"
//     </span>
//   </li>
//   <li className="flex justify-between items-center bg-slate-50 rounded px-3 py-1.5">
//     <span className="font-medium">
//       🅿️ "주차장에서 병원 입구까지 이동이 편했어요"
//     </span>
//   </li>
//   <li className="flex justify-between items-center bg-rose-50 rounded px-3 py-1.5">
//     <span className="font-medium">🛋️ "대기실에 휠체어 공간이 충분했어요"</span>
//   </li>
//   <li className="flex justify-between items-center bg-pink-50 rounded px-3 py-1.5">
//     <span className="font-medium">🤗 "진료실 입구가 넓고 진입이 편했어요"</span>
//   </li>
// </ul>
