import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "WriteFlow AI - AI Writing Assistant for Marketers",
  description: "Create high-converting marketing copy in seconds. WriteFlow AI helps marketers write better emails, ads, landing pages, and social posts with the power of AI.",
  keywords: ["AI writing", "marketing copy", "copywriting AI", "content marketing", "email marketing"],
  openGraph: {
    title: "WriteFlow AI - AI Writing Assistant for Marketers",
    description: "Create high-converting marketing copy in seconds.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
