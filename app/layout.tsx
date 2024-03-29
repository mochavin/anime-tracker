import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import PageHeader from "@/components/page-header";
import { Toaster } from "@/components/ui/sonner";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Anime Tracker",
  description: "Anime Tracker",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <PageHeader />
          <main className="p-4 min-h-[480px]">
            {children}
            <Toaster position="top-center" />
          </main>
        </ThemeProvider>
        <Footer />
      </body>
    </html>
  );
}
