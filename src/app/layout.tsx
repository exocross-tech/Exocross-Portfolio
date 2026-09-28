import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
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
    icon: "/logo.png",
    apple: "/logo.png",
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased dark`}
    >
      <body className="min-h-full flex flex-col bg-[#06080d] text-[#f3f4f6] selection:bg-blue-600 selection:text-white">
        {children}
      </body>
    </html>
  );
}
