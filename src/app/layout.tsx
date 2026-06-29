import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "TMS & Spravato® Treatment | Miami Psychiatric Services",
  description:
    "Advanced depression treatment in Miami. FDA-cleared TMS therapy and Spravato® for treatment-resistant depression. Bilingual care led by Dr. Myuna Ruiz, MD. Call (754) 289-4005.",
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
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
