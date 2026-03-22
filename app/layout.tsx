import type {Metadata} from 'next';
import { Inter } from 'next/font/google';
import './globals.css'; // Global styles

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

export const metadata: Metadata = {
  title: 'Thomas Vincent-Piper | RiverAI Portfolio',
  description: 'Portfolio for Thomas Vincent-Piper, Director of RiverAI ApS',
  openGraph: {
    title: 'Thomas Vincent-Piper | RiverAI Portfolio',
    description: 'Portfolio for Thomas Vincent-Piper, Director of RiverAI ApS',
    url: 'https://thomas.riverai.dk',
    siteName: 'RiverAI Portfolio',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&h=630&fit=crop',
        width: 1200,
        height: 630,
        alt: 'RiverAI Portfolio - Abstract Background',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Thomas Vincent-Piper | RiverAI Portfolio',
    description: 'Portfolio for Thomas Vincent-Piper, Director of RiverAI ApS',
    images: ['https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&h=630&fit=crop'],
  },
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={`${inter.variable}`}>
      <body className="font-sans antialiased" suppressHydrationWarning>{children}</body>
    </html>
  );
}
