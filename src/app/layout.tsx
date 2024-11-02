import type { Metadata } from "next";
import { Inter } from "next/font/google";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import "../../public/styles/swiper-styles.css";
import "../../public/styles/globals.css";
import { ThemeProvider } from "./theme-provider";
import type { Viewport } from 'next'
import TsParticles from "@/ui-components/TsParticles";
import { Suspense } from "react";
import ScreenLoader from "@/ui-components/ScreenLoader";


const inter = Inter({ subsets: ["latin"] });

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: "Upfolio",
  description: " We are passionate about youth development via opportunities, resources for personal and professional development.",
};

 
export const viewport: Viewport = {
  themeColor: '#09090b',
  width: "device-width",
  viewportFit: 'contain',
  colorScheme: 'dark',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  return (
    <html lang="en">
      <body className={`absolute bg-zinc-950 text-zinc-200 w-full ${inter.className}`}>
        <TsParticles />
        <Suspense fallback={<ScreenLoader />}>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <div className="w-full ">
              {children}
            </div>
          </ThemeProvider>
        </Suspense>
      </body>
    </html>
  );
}
