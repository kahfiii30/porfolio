import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";
import SmoothScroll from "@/components/SmoothScroll";
import { cookies } from "next/headers";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Abdul Azis Al Kahfi | Digital Marketer & Creative Operator",
  description: "Portfolio of Abdul Azis Al Kahfi exploring the intersection of strategy, content, AI, automation, and digital products.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookieStore = cookies();
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
