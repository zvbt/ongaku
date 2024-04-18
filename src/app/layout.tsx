import type { Metadata } from "next";
import { Karla } from "next/font/google";
import "./globals.css";

const karla = Karla({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "おんがく",
  description: "Discover the best of Jpop and Kpop on Ongaku your go-to platform for streaming all your favorite Japanese and Korean pop music hits. Dive into the latest tracks, timeless classics, and carefully curated playlists that celebrate the vibrant world of Jpop and Kpop music.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link rel="shortcut icon" href="/favicon.png" type="image/x-png" />
      <body className={karla.className}>{children}</body>
    </html>
  );
}
