import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";
import SmoothScroll from "@/components/SmoothScroll";
import { cookies } from "next/headers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Abdul Azis Al Kahfi | Digital Marketer & Creative Operator",
  description: "Portfolio of Abdul Azis Al Kahfi exploring the intersection of strategy, content, AI, automation, and digital products.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookieStore = await cookies();
  const currentLocale = cookieStore.get("NEXT_LOCALE")?.value || "en";

  return (
    <html lang={currentLocale} className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black text-white selection:bg-accent selection:text-white`}
      >
        <SmoothScroll>
          <CustomCursor />
          <Navbar currentLocale={currentLocale} />
          {children}
          <Footer currentLocale={currentLocale} />
        </SmoothScroll>
      </body>
    </html>
  );
}
