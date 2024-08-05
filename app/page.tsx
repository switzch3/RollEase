import { Metadata } from "next";
import Head from "next/head";
import Main from "@/app/Main";

// export const metadata: Metadata = {
//   title: "RollEase - Finding wheelchair-accessible hospitals",
// };
export default function Home() {
  return (
    <>
      <Head>
        <title>RollEase - Finding wheelchair-accessible hospitals</title>

        <meta name="description" content="휠체어 접근이 가능한 병원찾기" />

        <meta property="og:url" content="https://roll-ease.vercel.app/" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="RollEase - Finding wheelchair-accessible hospitals"
        />
        <meta
          property="og:description"
          content="휠체어 접근이 가능한 병원찾기"
        />
        <meta property="og:image" content="/logo.png" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="roll-ease.vercel.app" />
        <meta property="twitter:url" content="https://roll-ease.vercel.app/" />
        <meta
          name="twitter:title"
          content="RollEase - Finding wheelchair-accessible hospitals"
        />
        <meta
          name="twitter:description"
          content="휠체어 접근이 가능한 병원찾기"
        />
        <meta name="twitter:image" content="/logo.png" />
      </Head>
      <Main />
    </>
  );
}
