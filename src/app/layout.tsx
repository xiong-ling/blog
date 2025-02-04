import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "./Header";
import { ThemeProvider } from '@/components/themeProvider';
import "@code-hike/mdx/dist/index.css"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ling Blog",
  description: "this is a blog website for Ling Xiong",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute='class' defaultTheme="system">
          <div className="relative flex flex-col min-h-screen bg-background">
            <Header />
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
