import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import SiteHeader from "./components/site-header";
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
  title: "Sakiyo — Independent Designer",
  description: "Selected identity, digital, and art direction work by independent designer Sakiyo.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <SiteHeader />
        {children}
        <footer className="site-footer">
          <span>© 2026 Sakiyo</span>
          <a href="mailto:hello@sakiyo.studio">Say hello <span aria-hidden="true">↗</span></a>
          <span>Made with intention in Brooklyn</span>
        </footer>
      </body>
    </html>
  );
}
