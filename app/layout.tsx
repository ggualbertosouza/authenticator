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
    <html lang="pt-br">
      <body className={`${roboto.className} flex flex-col items-center min-h-screen`}>
        <Provider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <header className="container">
              <Header />
            </header>
            <main className="container">
            {children}
            </main>
          </ThemeProvider>
        </Provider>
      </body>
    </html>
  );
}
