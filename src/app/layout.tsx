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

const BASE_URL = "https://bhpcase.ebmllc-d0c.workers.dev";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default:
      "BHP Victims — Australia's Biggest Wage Theft Allegations | Unhappy Banking",
    template: "%s | Unhappy Banking",
  },
  description:
    "Thousands of coal miners were allegedly classified as casuals and systematically underpaid by BHP and its labour hire associates. Register as an affected worker.",
  keywords: [
    "BHP wage theft",
    "BHP coal miners",
    "BHP victims",
    "labour hire rort",
    "casual classification",
    "Black Coal Award",
    "Chandler Macleod",
    "WorkPac",
    "Same Job Same Pay",
    "Unhappy Banking",
    "Nationlink Solutions",
    "coal mine compensation",
    "Mt Arthur mine",
    "Fair Work Commission BHP",
  ],
  authors: [{ name: "Nationlink Solutions Pty Ltd" }],
  openGraph: {
    type: "website",
    locale: "en_AU",
    url: BASE_URL,
    siteName: "BHP Victims Registry — Unhappy Banking",
    title: "BHP Victims — Australia's Biggest Wage Theft Allegations",
    description:
      "Thousands of coal miners allegedly classified as casuals and systematically underpaid. Register as an affected worker. Confidential. No obligation.",
  },
  twitter: {
    card: "summary_large_image",
    title: "BHP Victims — Australia's Biggest Wage Theft Allegations",
    description:
      "Thousands of coal miners allegedly classified as casuals and systematically underpaid. Register as an affected worker.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
    },
  },
  alternates: {
    canonical: BASE_URL,
  },
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Nationlink Solutions Pty Ltd",
              alternateName: "Unhappy Banking",
              url: BASE_URL,
              description:
                "Specialist advocacy and advisory firm focused on empowering individuals wronged by corporate Australia. Leading the BHP wage theft victim registry.",
              contactPoint: {
                "@type": "ContactPoint",
                email: "geoff@nationlink.com.au",
                contactType: "customer service",
              },
              founder: {
                "@type": "Person",
                name: "Geoffrey Shannon",
                jobTitle: "Founder, Unhappy Banking; Leading Consultant, Nationlink Solutions",
              },
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "BHP Victims Registry",
              url: BASE_URL,
              description:
                "Registry for victims of BHP's illegal casual classification and wage theft scheme affecting thousands of Australian coal miners.",
              publisher: {
                "@type": "Organization",
                name: "Nationlink Solutions Pty Ltd",
              },
            }),
          }}
        />
      </head>
      <body className="font-sans antialiased bg-white text-slate-700">
        {children}
      </body>
    </html>
  );
}
