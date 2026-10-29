import type { Metadata } from "next";
import { Suspense } from "react";
import { Geist, Geist_Mono } from "next/font/google";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
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
  title: "Diego Granados | Portfolio",
  description: "Portfolio projects by Diego Granados.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-stone-50 text-stone-900">
        <Header />
        <div className="flex flex-1 flex-col bg-stone-50 text-stone-900">
          {children}
        </div>
        <Suspense
          fallback={
            <footer className="border-t border-stone-200 bg-stone-50 py-8">
              <div className="mx-auto max-w-5xl px-6 text-center">
                <p className="text-sm text-stone-500">
                  Copyright | Diego Granados | All rights reserved
                </p>
              </div>
            </footer>
          }
        >
          <Footer />
        </Suspense>
      </body>
    </html>
  );
}
