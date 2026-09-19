import type { Metadata } from "next";
import { Geist, Geist_Mono, Space_Grotesk, Inter, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
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

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Abdul Azis Al Kahfi — Head of Social Media, Digital Marketing & Meta Ads",
  description: "Portfolio of Abdul Azis Al Kahfi, Head of Social Media based in Samarinda, working across social media strategy, digital marketing, Meta Ads, creative direction, analytics, conversion, and AI automation.",
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
        className={`${geistSans.variable} ${geistMono.variable} ${spaceGrotesk.variable} ${inter.variable} ${plexMono.variable} antialiased bg-black text-white selection:bg-accent selection:text-white`}
      >
        <SmoothScroll>
          <Navbar currentLocale={currentLocale} />
          {children}
          <Footer currentLocale={currentLocale} />
        </SmoothScroll>
      </body>
    </html>
  );
}
