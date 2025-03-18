import type { Metadata } from 'next';
import './globals.css';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { SpeedInsights } from '@vercel/speed-insights/next';

export const metadata: Metadata = {
  metadataBase: new URL('https://minifyurl.net/'),

  title: {
    default: 'MinifyURL | Encurtador de URLs',
    template: '%s | MinifyURL | Encurtador de URLs',
  },
  description: 'Encurte seus links e compartilhe com facilidade',
  openGraph: {
    title: 'MinifyURL | Encurtador de URLs',
    description:
      'Encurte URLs longas e compartilhe links curtos de forma rápida e fácil. A melhor ferramenta de encurtamento de links para otimizar seus compartilhamentos!',
    url: 'https://minifyurl.net/',
    siteName: 'MinifyURL',
    images: [
      {
        url: '/minify-craw.png',
        width: 1200,
        height: 630,
        alt: 'Imagem de prévia do site',
      },
    ],
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <SpeedInsights />
        <Footer />
      </body>
    </html>
  );
}
