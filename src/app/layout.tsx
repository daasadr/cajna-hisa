import type { Metadata } from 'next';
import { Cormorant_Garamond, Lato } from 'next/font/google';
import './globals.css';
import { LanguageProvider } from '@/lib/LanguageContext';
import ScrollReveal from '@/components/ScrollReveal';

const cormorant = Cormorant_Garamond({
  weight: ['300', '400', '600', '700'],
  subsets: ['latin'],
  variable: '--font-cormorant',
  display: 'swap',
});

const lato = Lato({
  weight: ['300', '400', '700'],
  subsets: ['latin'],
  variable: '--font-lato',
  display: 'swap',
});

const BASE = process.env.NEXT_PUBLIC_BASE_PATH || '';

export const metadata: Metadata = {
  title: 'Čajna hiša Dolina — Ljubljana',
  description:
    'Avtentična čajna hiša v srcu Ljubljane. Več kot 150 vrst čajev, čajne ceremonije in delavnice. Obiščite nas!',
  keywords: ['čajna hiša', 'Ljubljana', 'čaj', 'čajna ceremonija', 'delavnice'],
  authors: [{ name: 'Čajna hiša Dolina' }],
  openGraph: {
    title: 'Čajna hiša Dolina — Ljubljana',
    description: 'Avtentična čajna hiša v srcu Ljubljane. Čajne ceremonije, delavnice, 150+ vrst čajev.',
    url: 'https://daasadr.github.io/cajna-hisa',
    siteName: 'Čajna hiša Dolina',
    images: [
      {
        url: `${BASE}/images/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: 'Čajna hiša Dolina Ljubljana',
      },
    ],
    locale: 'sl_SI',
    type: 'website',
  },
  other: {
    'theme-color': '#faf8f4',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="sl" className={`${cormorant.variable} ${lato.variable}`}>
      <head>
        <link
          rel="preload"
          href={`${BASE}/images/hero-bg.jpg`}
          as="image"
        />
        <meta name="theme-color" content="#faf8f4" />
      </head>
      <body>
        <LanguageProvider>
          <ScrollReveal />
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
