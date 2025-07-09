import type { Metadata } from "next";

import { Public_Sans, DM_Serif_Display } from "next/font/google";
import "./globals.css";


const publicSans = Public_Sans({
  variable: "--font-public-sans",
  subsets: ["latin"],
  display: "swap",
});

const dmSerif = DM_Serif_Display({
  variable: "--font-dm-serif",
  subsets: ["latin"],
  display: "swap",
  weight: "400",
});

export const metadata: Metadata = {
  title: {
    template: "%s / PayApi",
    default: "PayApi",
  },
  description:
    "This is a landing page for a fictional company called PayApi. It is built with Next.js and Typescript",
  icons: {
    icon: "/favicon-32x32.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${publicSans.variable} ${dmSerif.variable}  antialiased bg-flash-white`}
      >
       
        <main className="mx-auto overflow-hidden font-sans font-[400]">
          {children}
        </main>
       
      </body>
    </html>
  );
}
