import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "推し活レベル診断",
  description: "あなたの推しへの愛の深さを診断します。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
