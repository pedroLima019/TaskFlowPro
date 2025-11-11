import type { Metadata } from "next";
import "./globals.css";
import { Roboto } from "next/font/google";
import Providers from "@/components/Providers";

const roboto = Roboto();

export const metadata: Metadata = {
  title: "TaskFlow",
  description: "Gerencie suas tarefas de forma inteligente 🚀",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="pt-BR">
      <body className={roboto.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
};

export default RootLayout;
