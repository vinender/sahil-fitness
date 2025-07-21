import type { Metadata } from "next";
import { Toaster } from "@/components/ui/toaster";
import "./globals.css";
import { Manrope } from "next/font/google";


const manrope = Manrope({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  title: "Sahil Fitness",
  description: "The professional portfolio for Sahil Fitness.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${manrope.className} antialiased`}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
