import "./globals.css";

import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  // title: "RollEase - Finding wheelchair-accessible hospitals",
  title: "EC 2025 Summer",
  // description: "휠체어 접근이 가능한 병원찾기",
  openGraph: {
    title: "EC 2025 Summer",
    // description: "휠체어 접근이 가능한 병원찾기",
    url: "https://ec2025-nine.vercel.app",
    siteName: "RollEase",
    images: [
      {
        url: "https://ec2025-nine.vercel.app/og.png", // Must be an absolute URL
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
