import type { Metadata } from "next";
import { Bebas_Neue, DM_Mono, WindSong } from "next/font/google";
import "./globals.css";

const bebasNeue = Bebas_Neue({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal"],
  variable: "--font-display",
});

const dmMono = DM_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  style: ["normal"],
  weight: ["300"],
});

const WindSongFont = WindSong({
  variable: "--font-name",
  subsets: ["latin"],
  style: ["normal"],
  weight: ["500"],
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
      <body
        className={`${dmMono.variable} ${bebasNeue.variable} ${WindSongFont.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
