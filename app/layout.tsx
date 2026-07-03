import type { Metadata } from "next";
import { Libre_Baskerville, Great_Vibes, Lato } from "next/font/google";
import "./globals.css";

const libreBaskerville = Libre_Baskerville({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
});

const greatVibes = Great_Vibes({
  subsets: ["latin"],
  weight: ["400"],
});

const lato = Lato({
  subsets: ["latin"],
  weight: ["300", "400"],
  style: ["normal", "italic"],
});

void libreBaskerville;
void greatVibes;

export const metadata: Metadata = {
  title: "Chased But Not Chosen | A Journal for Healing & Returning to Yourself",
  description:
    "A journal for healing, releasing & returning to yourself. Instant digital download.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={lato.className}>{children}</body>
    </html>
  );
}
