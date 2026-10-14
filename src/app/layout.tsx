import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

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
  metadataBase: new URL("https://www.exocross.com"),
  title: "Exocross — Software, built for how your business actually works",
  description:
    "Exocross is a next-generation software and IT studio. We design and build web and mobile applications, put AI to practical use, and help businesses get more from technology.",
  keywords: [
    "Exocross",
    "software development",
    "web applications",
    "mobile apps",
    "AI solutions",
    "cloud solutions",
    "IT consulting",
    "cost optimization",
  ],
  icons: {
    icon: [
      { url: "/logo.png", sizes: "any", type: "image/png" },
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.png", type: "image/png" },
    ],
    shortcut: "/logo.png",
    apple: "/apple-icon.png",
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "google28285d40d8d7d59b",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#FFFFFF] text-[#161B26] selection:bg-[#245BDB] selection:text-white">
        {children}
      </body>
    </html>
  );
}
