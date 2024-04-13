import type { Metadata } from "next";
import { Karla } from "next/font/google";
import "./globals.css";

const karla = Karla({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "おんがく",
  description: "Discover the best of Jpop on Ongaku - your go-to site for streaming all your favorite Japanese pop music hits. Tune in to the latest tracks, timeless classics, and curated playlists that celebrate the vibrant world of Jpop music.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={karla.className}>{children}</body>
    </html>
  );
}
