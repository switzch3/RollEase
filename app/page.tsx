import { Metadata } from "next";
import Main from "@/app/Main";

export const metadata: Metadata = {
  title: "Application Name - 휠체어 사용자의 병원 찾기",
};
export default function Home() {
  return <Main />;
}
