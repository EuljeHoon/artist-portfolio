import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Hu Jin Kyung - Artist Portfolio",
  description:
    "Contemporary artist inspired by traditional Korean moon jar, exploring emotions through textured acrylic paintings and mixed media works.",
  keywords: [
    "artist",
    "Korean art",
    "contemporary art",
    "painting",
    "moon jar",
    "texture art",
  ],
  authors: [{ name: "Hu Jin Kyung" }],
  creator: "Hu Jin Kyung",
  publisher: "Hu Jin Kyung",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://jinkyung-portfolio.pages.dev"),
  openGraph: {
    title: "Hu Jin Kyung - Artist Portfolio",
    description:
      "Contemporary artist inspired by traditional Korean moon jar, exploring emotions through textured acrylic paintings and mixed media works.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hu Jin Kyung - Artist Portfolio",
    description: "Contemporary artist inspired by traditional Korean moon jar",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/Blessing.ico" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
