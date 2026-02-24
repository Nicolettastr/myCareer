import type { Metadata } from "next";
import { BBH_Hegarty } from "next/font/google";
import "./globals.css";

const BBHHegarty = BBH_Hegarty({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal"],
  variable: "--font-display",
});

export const metadata: Metadata = {
  title: "Nicole Struggia",
  description: "Frontend Engineer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${BBHHegarty.variable} antialiased`}>{children}</body>
    </html>
  );
}
