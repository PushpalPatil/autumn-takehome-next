import type { Metadata } from "next";
import { Fraunces, Instrument_Sans } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  axes: ["opsz"],
  style: ["normal", "italic"],
});

const instrumentSans = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-instrument",
});

export const metadata: Metadata = {
  title: "Autumn — Marketing for independent hotels",
  description:
    "Hospitality experts using AI to deliver best-in-class digital marketing for unique B&Bs, inns and boutique hotels. More direct bookings, less OTA dependence.",
  openGraph: {
    title: "Autumn — Marketing for independent hotels",
    description:
      "Hospitality experts using AI to deliver best-in-class digital marketing for unique B&Bs, inns and boutique hotels.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${fraunces.variable} ${instrumentSans.variable}`}>
      <body>{children}</body>
    </html>
  );
}
