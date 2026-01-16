import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

export const metadata: Metadata = {
  title: "NexusCall | 4K AI-Powered Video Calling",
  description: "Experience crystal-clear 4K video calls with AI-powered features including background blur, noise cancellation, and real-time transcription.",
  keywords: ["video calling", "4K", "AI", "WebRTC", "video conference"],
  openGraph: {
    title: "NexusCall | 4K AI-Powered Video Calling",
    description: "Experience crystal-clear 4K video calls with AI-powered features",
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
      <body className={`${inter.variable} antialiased`}>
        <div className="animated-bg" />
        {children}
      </body>
    </html>
  );
}
