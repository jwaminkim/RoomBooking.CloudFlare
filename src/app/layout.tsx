import type { Metadata } from "next";
import "./globals.css";

const SITE_URL = "https://room-booking-7ij.pages.dev";
const TITLE = "Room Booking — 회의실 예약 서비스";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: TITLE,
  description: "Next.js + Cloudflare Workers·D1 서버리스 회의실 예약 서비스",
  icons: { icon: "/favicon.svg" },
  openGraph: {
    type: "website",
    url: SITE_URL,
    title: TITLE,
    description: "Next.js + Cloudflare Workers·D1, GitHub 연동 자동 배포",
    images: [{ url: "/og.png", width: 1200, height: 627 }],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
