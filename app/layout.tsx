import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { APP_DESCRIPTION, APP_NAME } from "@/lib/constants";
import Footer from "@/components/shared/Footer";
import HeaderTop from "@/components/shared/header/HeaderTop";
import { getServerSession } from "next-auth";
import { authOptions } from "@/auth";
import SessionWrapper from "@/components/shared/SessionWrapper";
import { Toaster } from "sonner";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: `${APP_NAME}`,

  description: APP_DESCRIPTION,
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getServerSession(authOptions);
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <SessionWrapper session={session}>
          <div className="hidden md:block">
            <HeaderTop />
          </div>
          <div className="max-w-7xl mx-auto">
            {children}
            <Toaster position="bottom-right" richColors />
          </div>
          <div>
            <Footer />
          </div>
        </SessionWrapper>
      </body>
    </html>
  );
}
