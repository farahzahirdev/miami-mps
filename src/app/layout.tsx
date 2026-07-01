import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  title: "TMS & Spravato® Treatment | Miami Psychiatric Services",
  description:
    "Advanced depression treatment in Miami. FDA-cleared TMS therapy and Spravato® for treatment-resistant depression. Bilingual care led by Dr. Myuna Ruiz, MD. Call (754) 289-4005.",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
  keywords: [
    "TMS Miami",
    "Spravato Miami",
    "treatment resistant depression",
    "psychiatrist Miami",
    "depression treatment Kendall",
    "Miami Psychiatric Services",
  ],
  openGraph: {
    title: "TMS & Spravato® Treatment | Miami Psychiatric Services",
    description:
      "Find hope with advanced depression treatment. TMS and Spravato® in Miami with compassionate, bilingual care.",
    url: "https://www.mps-miami.com",
    siteName: "Miami Psychiatric Services",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${plusJakarta.variable} font-sans`}>{children}</body>
    </html>
  );
}
