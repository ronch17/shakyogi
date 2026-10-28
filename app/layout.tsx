import type { Metadata } from "next";
import localFont from "next/font/local";
import GoogleReviewsBadge from "@/app/components/ui/GoogleReviewsBadge";
import Footer from "@/app/components/layout/Footer";
import "./globals.css";

const heebo = localFont({
  src: "./fonts/Heebo-VariableFont_wght.ttf",
  variable: "--font-heebo",
  weight: "100 900",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Shakyogi",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="he"
      dir="rtl"
      className={`${heebo.variable} h-full antialiased scroll-smooth motion-reduce:scroll-auto scroll-pt-28`}
    >
      <body className="min-h-full flex flex-col font-sans">
        {children}
        <Footer />
        <GoogleReviewsBadge />
      </body>
    </html>
  );
}
