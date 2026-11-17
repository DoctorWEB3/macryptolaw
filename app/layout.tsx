import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Planejamento Patrimonial | Proteja o que você construiu",
  description:
    "Planejamento patrimonial com sucessão, estrutura jurídica e tributação pensados para a sua família.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,600&family=Figtree:wght@400;600&display=swap"
        />
      </head>
      {/* Moldura amarela: a página "emoldurada" transmite acolhimento e separa o conteúdo do ruído. */}
      <body className="min-h-screen bg-sol p-3 md:p-5">
        <div className="min-h-[calc(100vh-1.5rem)] rounded-[28px] bg-marfim shadow-sm md:min-h-[calc(100vh-2.5rem)]">
          {children}
        </div>
      </body>
    </html>
  );
}
