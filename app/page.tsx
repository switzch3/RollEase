import { Metadata } from "next";
import Main from "@/app/Main";

export const metadata: Metadata = {
  title: "RollEase - Finding wheelchair-accessible hospitals",
};
export default function Home() {
  return <Main />;
}
