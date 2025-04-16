import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Chatbot } from "@/components/chatbot";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { LanguageHtmlAttributes } from "@/components/language-html-attributes";
import { FloatingLanguageToggle } from "@/components/floating-language-toggle";
import { PageTransition } from "@/components/page-transition";

export const metadata: Metadata = {
  title: "Blooming Roses | Jesus Youth Pala",
  description: "Join us for Blooming Roses, a spiritual event organized by Jesus Youth Pala from April 24-27.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet" />
      </head>
      <body className="min-h-screen bg-background font-sans antialiased">
        <LanguageProvider>
          <LanguageHtmlAttributes />
          <PageTransition>
            <div className="relative flex min-h-screen flex-col">
              <Header />
              <main className="flex-1">{children}</main>
              <Footer />
              <Chatbot />
              <FloatingLanguageToggle />
            </div>
          </PageTransition>
        </LanguageProvider>
      </body>
    </html>
  );
}
