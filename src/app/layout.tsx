import type { Metadata } from "next";
import { Inter } from "next/font/google";
import 'swiper/css';
import 'swiper/css/navigation';
import "../../public/styles/swiper-styles.css";
import "../../public/styles/globals.css";
import { ThemeProvider } from "./theme-provider";
import Particles from "@/ui-components/Particles";

const inter = Inter({ subsets: ["latin"] });

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: "Upfolio",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`bg-zinc-950 text-zinc-200 ${inter.className}`}>
        <Particles
          className="absolute inset-0"
          quantity={100}
          ease={80}
          color={'#fffff'}
          refresh
        />
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
