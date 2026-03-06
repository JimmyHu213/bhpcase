import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "BHP Victims — Australia's Biggest Wage Theft Scandal | Unhappy Banking",
  description:
    "Thousands of coal miners were illegally classified as casuals and systematically underpaid by BHP and its labour hire associates. Register as a victim.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </head>
      <body className="font-sans antialiased bg-white text-slate-700">
        {children}
      </body>
    </html>
  );
}
