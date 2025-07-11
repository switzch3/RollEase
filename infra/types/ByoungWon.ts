import { HospitalReviewKey } from "@/infra/hospital-review";

export type MedicalFacility = {
  dutyaddr: string; // "서울특별시 강남구 압구정로28길 49, 유림아트홀, 2층 일부 (신사동)"
  dutydiv: string; // "C"
  dutydivnam: string; // "의원"
  dutyemcls: string; // "G099"
  dutyemclsname: string; // "응급의료기관 이외"
  dutyeryn: string; // "2"
  dutyetc: string; // "점심시간 13:00~14:00"
  dutyinf: string; // "내과 피부과 진료"
  dutymapimg: string; // "구로역3번출구 신한은행건물 3층"
  dutyname: string; // "튠의원"
  dutytel1: string; // "02-540-2011"
  dutytel3: string; // "02-3468-3060"
  dutytime1c: string; // "2000"
  dutytime1s: string; // "1000"
  dutytime2c: string; // "2000"
  dutytime2s: string; // "1000"
  dutytime3c: string; // "2000"
  dutytime3s: string; // "1000"
  dutytime4c: string; // "2000"
  dutytime4s: string; // "1000"
  dutytime5c: string; // "2000"
  dutytime5s: string; // "1000"
  dutytime6c: string; // "1600"
  dutytime6s: string; // "1000"
  dutytime7c: string; // "1600"
  dutytime7s: string; // "1000"
  dutytime8c: string; // "1600"
  dutytime8s: string; // "1000"
  hpid: string; // "A1123001"
  postcdn1: string; // "060"
  postcdn2: string; // "31"
  wgs84lat: string; // "37.5232586676671"
  wgs84lon: string; // "127.027711483385"
  work_dttm: number; // 1654581327000
  dummyAccessibility: "inaccessible" | "unknown" | "accessible";
  reviewKeys: HospitalReviewKey[];
};
