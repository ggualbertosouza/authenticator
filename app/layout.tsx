import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import Provider from "@/lib/auth/Provider";
import { ThemeProvider } from "@/lib/theme-provider";
import Header from "@/components/header/Header";

const roboto = Roboto({ subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
  title: "Links page",
  description:
    "Um website para hospedar links de redes sociais é uma plataforma que permite aos usuários centralizar e compartilhar todos os links de suas contas de redes sociais em um só lugar.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br" suppressHydrationWarning>
      <body
        className={`${roboto.className} flex flex-col items-center min-h-screen py-2`}
      >
        <Provider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <header className="container flex items-center">
              <Header />
            </header>
            <main className="grow container flex items-center">
              <section className="flex items-center justify-center h-full w-full">
              {children}
              </section>
              </main>
          </ThemeProvider>
        </Provider>
      </body>
    </html>
  );
}
