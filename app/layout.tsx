import "./globals.css";

import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "RollEase - Finding wheelchair-accessible hospitals",
  description: "휠체어 접근이 가능한 병원찾기",
  openGraph: {
    title: "RollEase - Finding wheelchair-accessible hospitals",
    description: "휠체어 접근이 가능한 병원찾기",
    url: "https://roll-ease.vercel.app",
    siteName: "RollEase",
    images: [
      {
        url: "https://roll-ease.vercel.app/og.png", // Must be an absolute URL
        width: 512,
        height: 246,
      },
    ],
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
